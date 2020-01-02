import { swapArrayValue } from '../utils'

/**
 * 插入排序
 * @param {Array} numberArray 待排序的数组
 * @param {String|Boolean} [orderBy=asc] 排列方式 asc/true 升序； desc/false 降序
 */
function insertionSort (numberArray, orderBy = 'asc') {
  const orderByAsc = orderBy === 'asc' || (typeof orderBy === 'boolean' && orderBy)
  const length = numberArray.length

  for (let round = 1; round < length; round++) {
    let index = round
    let currentNum = numberArray[round]

    while (
      (index > 0) &&
      // eslint-disable-next-line no-unmodified-loop-condition
      ((orderByAsc && numberArray[index - 1] > currentNum) || (!orderByAsc && numberArray[index - 1] < currentNum))
    ) {
      swapArrayValue(numberArray, index, --index)
    }
  }
}

export { insertionSort }

