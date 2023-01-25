/**
 * for 循环
 */
let num: number = 5;
let i: number;
let factorial = 1;
for (i = num; i >= 1; i--) {
    factorial *= i;
}
console.log(factorial); // 输出 120

/**
 * for...in 循环
 * for...in 语句用于一组值的集合或列表进行迭代输出。
 */
let j: any;
let n: any = "a b c";
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
let someArray = [1, "str", false];
for (const entry of someArray) {
    console.log(entry);
}
// forEach
let list = [4, 5, 6];
list.forEach((value, index, array) => {
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
})
// 因为 forEach 在 iteration 中是无法返回的，所以可以使用 every 和 some 来取代 forEach。
list.every((value, index, array) => {
    console.log("当前值：", value);
    console.log("当前索引：", index);
    console.log("array：", array);
    return true; // 返回true，迭代继续；返回false，退出迭代；不返回则默认返回false
})

/**
 * while 循环
 * while 语句在给定条件为 true 时，重复执行语句或语句组。循环主体执行之前会先测试条件。
 */
let num2: number = 5;
let factorial2: number = 1;
while (num2 >= 1) {
    factorial2 *= num2;
    num2--;
}
console.log("5 的阶乘是：", factorial2);

/**
 * do...while 循环
 * 不像 for 和 while 循环，它们是在循环头部测试循环条件。do...while 循环是在循环的尾部检查它的条件。
 */
let n1: number = 10;
do {
    console.log(n1);
    n1--;
} while (n1 >= 0);

/**
 * break 语句
break 语句有以下两种用法：

当 break 语句出现在一个循环内时，循环会立即终止，且程序流将继续执行紧接着循环的下一条语句。
它可用于终止 switch 语句中的一个 case。
如果您使用的是嵌套循环（即一个循环内嵌套另一个循环），break 语句会停止执行最内层的循环，然后开始执行该块之后的下一行代码。
 */

/**
 * continue 语句
continue 语句有点像 break 语句。但它不是强制终止，continue 会跳过当前循环中的代码，强迫开始下一次循环。

对于 for 循环，continue 语句执行后自增语句仍然会执行。对于 while 和 do...while 循环，continue 语句重新执行条件判断语句。
 */
