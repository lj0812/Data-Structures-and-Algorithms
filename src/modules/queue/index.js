let _queue = Symbol('queue')

class Queue {
  constructor () {
    this[_queue] = []
  }

  enqueue (element) {
    this[_queue].push(element)
  }

  dequeue () {
    return this[_queue].shift()
  }

  front () {
    return this[_queue][0]
  }

  get isEmpty () {
    return this[_queue].size === 0
  }

  get size () {
    return this[_queue].length
  }
}

export default Queue
