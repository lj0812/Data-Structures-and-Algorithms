import Node from './node'

function LinkedList () {
  this.length = 0
  this.head = null
}

LinkedList.prototype = {
  constructor: LinkedList,
  // 向队尾添加一个新的项
  append (element) {
    let node = new Node(element)

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

  },
  // 从列表中删除一项
  remove (element) {

  },
  // 从特定位置移除一个项
  removeAt (position) {

  },
  // 返回元素在列表中的索引
  indexOf (element) {

  },
  // 返回列表是否为空
  isEmpty () {

  },
  // 返回链表长度
  size () {

  },
  // 获取头指针
  getHead () {

  },
  // 只输出元素的值
  toString () {

  },
  //
  print () {

  }
}
