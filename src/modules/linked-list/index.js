import ListNode from './list-node'

function LinkedList () {
  this.length = 0
  this.head = null
}

LinkedList.prototype = {
  constructor: LinkedList,
  // 向队尾添加一个新的项
  append (element) {
    let node = new ListNode(element)

    // 头指针指向空，则该元素是第一个元素
    if (this.head === null) {
      this.head = node
    } else {
      // 否则遍历列表到最后一项
      let current = this.head
      while (current.next) {
        current = current.next
      }

      current.next = node
    }
    // 更新列表长度
    this.length++
  },
  // 响列表的特定位置添加一个新的项
  insert (position, element) {
    if (position < 0 || position > this.length) {
      return false
    }

    let node = new Node(element)
    let index = 0
    let current = this.head
    let previous = null

    if (position === 0) {
      node.next = current
      this.head = node
    } else {
      while (index++ < position) {
        previous = current
        current = current.next
      }

      node.next = current
      previous.next = node
    }

    this.length++

    return true
  },
  // 从列表中删除一项
  remove (element) {
    let position = this.indexOf(element)

    return this.removeAt(position)
  },
  // 从特定位置移除一个项
  removeAt (position) {
    if (position < 0 || position > this.length) {
      return null
    }

    let index = 0
    let current = this.head
    let previous = null

    if (position === 0) {
      this.head = current.next
    } else {
      while (index++ < position) {
        previous = current
        current = current.next
      }

      previous.next = current.next
    }

    this.length--

    return current.element
  },
  // 返回元素在列表中的索引
  indexOf (element) {
    let index = -1
    let current = this.head

    while (current) {
      if (element === current.element) {
        return index
      }

      index++

      current = current.next
    }

    return index
  },
  // 返回列表是否为空
  isEmpty () {
    return this.length === 0
  },
  // 返回链表长度
  size () {
    return this.length
  },
  // 获取头指针
  getHead () {
    return this.head
  },
  // 只输出元素的值
  toString () {
    let current = this.head

    let string = ''

    while (current) {
      string += current.element + (current.next ? '\n' : '')
      current = current.next
    }

    return string
  }
}
