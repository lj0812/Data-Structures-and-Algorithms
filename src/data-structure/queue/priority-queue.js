import Queue from './index'

class QueueElement {
  constructor (element, priority) {
    this.element = element
    this.priority = priority
  }
}

class PriorityQueue extends Queue {
  constructor () {
    super()
    this.__queue = []
  }

  enqueue (element, priority) {
    let queueElement = new QueueElement(element, priority)

    let added = false

    for (let i = 0; i < this.size; i++) {
      // 最小优先队列
      if (priority < this.elementAt(i).priority) {
        this._getQueue().splice(i, 0, queueElement)
        added = true
        break
      }
    }

    if (!added) {
      this._getQueue().push(queueElement)
    }
  }
}

export default PriorityQueue
