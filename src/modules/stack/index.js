let _stack = Symbol('stack')

class Stack {
  constructor () {
    this[_stack] = []
  }

  push (element) {
    this[_stack].push(element)
  }

  pop () {
    return this[_stack].pop()
  }

  peek () {
    return this[_stack][this.size - 1]
  }

  clear () {
    this[_stack] = []
    return true
  }

  get isEmpty () {
    return this.size === 0
  }

  get size () {
    return this[_stack].length
  }
}

export default Stack
