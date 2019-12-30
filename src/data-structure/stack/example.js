import Stack from './index'

/**
 * 将任意一个十进制数转换成指定进制(2-36)的一个数字
 * @param {Number} decNumber 十进制的一个数字
 * @param {Number} base 基数 2-36
 */
export function baseConverter (decNumber, base = 10) {
  if (base < 2 || base > 36) {
    throw new Error('base need to be in the range of 2-36')
  }

  let remStack = new Stack()
  let rem = ''
  let baseString = ''
  const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'

  while (decNumber > 0) {
    rem = decNumber % base
    remStack.push(rem)
    decNumber = Math.floor(decNumber / base)
  }

  while (!remStack.isEmpty) {
    baseString += digits[remStack.pop()]
  }

  return baseString
}
