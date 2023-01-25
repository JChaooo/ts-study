/**
 * for 循环
 */
var num = 5;
var i;
var factorial = 1;
for (i = num; i >= 1; i--) {
    factorial *= i;
}
console.log(factorial); // 输出 120
/**
 * for...in 循环
 * for...in 语句用于一组值的集合或列表进行迭代输出。
 */
var j;
var n = "a b c";
for (j in n) {
    console.log(n[j]);
    // 输出
    // a
    // b
    // c
}
/**
 * for…of 、forEach、every 和 some 循环
 * for...of 语句创建一个循环来迭代可迭代的对象。
 * 在 ES6 中引入的 for...of 循环，以替代 for...in 和 forEach() ，
 * 并支持新的迭代协议。for...of 允许你遍历 Arrays（数组）, Strings（字符串）, Maps（映射）, Sets（集合）等可迭代的数据结构等。
 */
// for...of
var someArray = [1, "str", false];
for (var _i = 0, someArray_1 = someArray; _i < someArray_1.length; _i++) {
    var entry = someArray_1[_i];
    console.log(entry);
}
// forEach
var list = [4, 5, 6];
list.forEach(function (value, index, array) {
    console.log("当前值：", value);
    console.log("当前索引：", index);
    console.log("array：", array);
    /**
     * 输出：
     *  当前值： 4
        当前索引： 0
        array： [ 4, 5, 6 ]
        当前值： 5
        当前索引： 1
        array： [ 4, 5, 6 ]
        当前值： 6
        当前索引： 2
        array： [ 4, 5, 6 ]
     */
});
// 因为 forEach 在 iteration 中是无法返回的，所以可以使用 every 和 some 来取代 forEach。
list.every(function (value, index, array) {
    console.log("当前值：", value);
    console.log("当前索引：", index);
    console.log("array：", array);
    return true; // 返回true，迭代继续；返回false，退出迭代；不返回则默认返回false
});
/**
 * while 循环
 * while 语句在给定条件为 true 时，重复执行语句或语句组。循环主体执行之前会先测试条件。
 */
var num2 = 5;
var factorial2 = 1;
while (num2 >= 1) {
    factorial2 *= num2;
    num2--;
}
console.log("5 的阶乘是：", factorial2);
/**
 * do...while 循环
 * 不像 for 和 while 循环，它们是在循环头部测试循环条件。do...while 循环是在循环的尾部检查它的条件。
 */
var n1 = 10;
do {
    console.log(n1);
    n1--;
} while (n1 >= 0);
