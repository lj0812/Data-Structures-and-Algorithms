class Queue {
  constructor () {
    this.__queue = []
  }

  enqueue (element) {
    this._getQueue().push(element)
  }

  dequeue () {
    return this._getQueue().shift()
  }

  front () {
    return this._getQueue()[0]
  }

  get isEmpty () {
    return this.size === 0
  }

  get size () {
    return this._getQueue().length
  }

  elementAt (position) {
    return this._getQueue()[position]
  }

  _getQueue () {
    return this.__queue
  }
}

export default Queue
