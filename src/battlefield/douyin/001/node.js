class Node {
  constructor (x, y) {
    this.x = x
    this.y = y
  }

  distanceWithNode (node) {
    return Math.sqrt(
      Math.abs(node.x - this.x) ** 2 + Math.abs(node.y - this.y) ** 2
    )
  }

  isSameNode (node) {
    return node.x === this.x && node.y === this.y
  }

  static create (x, y) {
    return new Node(x, y)
  }
}

export default Node
