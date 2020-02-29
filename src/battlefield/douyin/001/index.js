import Line from './line.js'
import Node from './node.js'

class Polygon {
  constructor (points = []) {
    const nodes = points.map(item => {
      const [x, y] = item
      return Node.create(x, y)
    })

    this._nodes = [...nodes]
    this._lines = []

    nodes.reduce((prev, curr) => {
      const line = Line.create(curr, prev)
      this._lines.push(line)
      return curr
    })

    this._lines.push(Line.create(nodes[nodes.length - 1], nodes[0]))
  }

  get nodes () {
    return this._nodes
  }

  get lines () {
    return this._lines
  }

  get dpoints () {
    let accLength = 0
    return this._lines.reduce((acc, curr) => {
      return acc.concat(accLength += curr.distance)
    }, [0])
  }

  get perimeter () {
    return this._lines.reduce((acc, curr) => {
      return acc + curr.distance
    }, 0)
  }

  averageDivide (count, startPoint = this.nodes[0]) {
    if (count <= 0) {
      throw Error('均分段数不能小于1')
    }

    const averageLength = this.perimeter / count

    let divideNodes = []

    for (let i = 0; i < count - 1; i++) {
      let accLength = averageLength * (i + 1)

      let prevPointIndex = this.dpoints.findIndex((item, index, arr) => {
        return accLength >= item && accLength < arr[index + 1]
      })

      const prevNode = this.nodes[prevPointIndex]
      const nextNode = this.nodes[prevPointIndex + 1] ? this.nodes[prevPointIndex + 1] : this.nodes[0]

      let prevPointGap = accLength - this.dpoints[prevPointIndex]

      let deg = Math.atan((nextNode.y - prevNode.y) / (nextNode.x - prevNode.x))
      let x = prevPointGap * Math.cos(deg) + prevNode.x
      let y = prevPointGap * Math.cos(deg) + prevNode.y

      divideNodes.push(Node.create(x, y))
    }

    return [ startPoint, ...divideNodes ]
  }
}

const points = [
  [2, 1],
  [2, 4],
  [4, 4],
  [4, 6],
  [9, 6],
  [9, 1]
]

const polygon = new Polygon(points)

console.log('6等分点', polygon.averageDivide(6))
