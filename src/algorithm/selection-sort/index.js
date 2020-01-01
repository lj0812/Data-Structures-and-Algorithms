import { swapArrayValue } from '../utils'

/**
 * 选择排序
 * @param {Array} numberArray 待排序的数组
 * @param {String|Boolean} [orderBy=asc] 排列方式 asc/true 升序； desc/false 降序
 */
function selectionSort (numberArray, orderBy = 'asc') {
  const orderByAsc = orderBy === 'asc' || (typeof orderBy === 'boolean' && orderBy)
  const length = numberArray.length

  for (let round = 0; round < length; round++) {
    // 当前轮次索引作为参照索引
    let referIndex = round

    for (let point = round; point < length; point++) {
      const referNum = numberArray[referIndex]
      const currNum = numberArray[point]

      // 余下的值跟参照值对比，符合条件更新参照索引
      if (
        (orderByAsc && currNum < referNum) ||
        (!orderByAsc && currNum > referNum)
      ) {
        referIndex = point
      }
    }

    // 当前索引和参照索引不一致时交换2个值
    if (referIndex !== round) {
      swapArrayValue(numberArray, round, referIndex)
    }
  }
}

export { selectionSort }

