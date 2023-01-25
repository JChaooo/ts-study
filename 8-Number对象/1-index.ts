/**
 * toExponential()
 * 把对象的值转换为指数计数法
 */
let num1 = 1225.30
let val1 = num1.toExponential();
console.log("🚀 ~ file: 1-index.ts:7 ~ val1", val1) // 输出：🚀 ~ file: 1-index.ts:7 ~ val1 1.2253e+3

/**
 * toFixed()
 * 把数字转换为字符串，并对小数点指定位数。
 */
let num2 = 177.234
console.log(num2.toFixed()); // 输出177
console.log(num2.toFixed(2)); // 输出177.23
console.log(num2.toFixed(6)); // 输出177.234000

/**
 * toLocaleString()
 * 把数字转换为字符串，使用本地数字格式顺序。
 */
let num3 = 177.12345
console.log(num3.toLocaleString()); // 输出177.123

/**
 * 	toPrecision()
 * 把数字格式化为指定的长度。
 */
let num4 = 7.654321
console.log(num4.toPrecision()); // 输出 7.654321
console.log(num4.toPrecision(1)); // 输出8
console.log(num4.toPrecision(2)); // 输出7.7

/**
 * toString()
 * 把数字转换为字符串，使用指定的基数。数字的基数是 2 ~ 36 之间的整数。若省略该参数，则使用基数 10。
 */
let num5 = 10
console.log(num5.toString()); // 输出 10进制 10
console.log(num5.toString(2)); // 输出 2 进制 1010
console.log(num5.toString(8)); // 输出 8 进制 12

/**
 * valueOf()
 * 返回一个 Number 对象的原始数字值
 */

let num6 = new Number(10);
console.log(num6.valueOf()); // 输出10





