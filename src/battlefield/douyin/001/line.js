class Line {
  constructor (nodeA, nodeB) {
    this.nodeA = nodeA
    this.nodeB = nodeB
  }

  get distance () {
    return this.nodeA.distanceWithNode(this.nodeB)
  }

  hasNode (node) {
    return this.nodeA.distanceWithNode(node) + this.nodeB.distanceWithNode(node) === this.distance
  }

  static create (nodeA, nodeB) {
    return new Line(nodeA, nodeB)
  }
}

export default Line
