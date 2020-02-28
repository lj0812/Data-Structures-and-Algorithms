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

  averageDivide (count) {
    if (count <= 0) {
      throw Error('均分段数不能小于1')
    }

    const averageLength = this.perimeter / count

    console.log('averageDivide', averageLength)
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

console.log(polygon, polygon.perimeter, polygon.averageDivide(3), polygon.dpoints)
