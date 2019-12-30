/**
 * 冒泡排序
 * @param {Array} numberArray 待排序的数组
 * @param {String|Boolean} [orderBy=asc] 排列方式 asc/true 升序； desc/false 降序
 */
function bubbleSort (numberArray, orderBy = 'asc') {
  const orderByAsc = orderBy === 'asc' || (typeof orderBy === 'boolean' && orderBy)
  const length = numberArray.length

  for (let round = 0; round < length; round++) {
    for (let point = 0; point < length - round - 1; point++) {
      const currNum = numberArray[point]
      const nextNum = numberArray[point + 1]

      if (
        (orderByAsc && currNum > nextNum) ||
        (!orderByAsc && currNum < nextNum)
      ) {
        [numberArray[point], numberArray[point + 1]] = [nextNum, currNum]
      }
    }
  }
}

export { bubbleSort }

