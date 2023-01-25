/**
 * 函数定义
 * 函数就是包裹在花括号中的代码块，前面使用了关键词 function：
 * @arg 参数1
 * @arg2 可选参数，可选参数必须跟在必需参数后面。
 * @arg3 默认参数，参数不能同时设置为可选和默认
 * @arg4 剩余参数， 以 ... 为前缀，它将成为一个由剩余参数组成的数组，索引值从0（包括）到 restOfName.length（不包括）。
 */
function fnc(arg: string, arg2?: number, arg3: boolean = true, ...arg4: number[]): string {
    console.log(arg);
    return arg + '返回'
}

/**
 * 匿名函数
 * 匿名函数是一个没有函数名的函数。
 * 匿名函数在程序运行时动态声明，除了没有函数名外，其他的与标准函数一样。
 * 我们可以将匿名函数赋值给一个变量，这种表达式就成为函数表达式。
 */
let msg = function (param: string) {
    return param + '匿名函数';
}
//调用
msg("测试：");

/**
 * 匿名函数自调用
 * 匿名函数自调用在函数后使用 () 即可：
 */
(function () {
    console.log("匿名函数自调用");
})()

/**
 * 构造函数
 * TypeScript 也支持使用 JavaScript 内置的构造函数 Function() 来定义函数：
 */
let myFunction = new Function("a", "b", "return a*b");
let x = myFunction(2, 4);
console.log(x);

/**
 * 递归函数
 * 递归函数即在函数内调用函数本身。
 */
function factorial(num: number) {
    if (num <= 0) {
        return 1; // 函数出口
    }
    return num * factorial(num - 1); // 调用自身
}
console.log(factorial(6)); // 输出720

/**
 * Lambda 函数
 * Lambda 函数也称之为箭头函数。
 * 箭头函数表达式的语法比函数表达式更短。
 */
let fna = (x: number) => x * 10;
let fnb = (x: number) => {
    x *= 10;
    console.log(x);
}
// 可以不指定函数的参数类型，通过函数内来推断参数类型:
let fnd = function (x) {
    if (typeof x == "number") {
        console.log("x是一个数字");
    } else if (typeof x == "string") {
        console.log("x是一个string");
    }
}
fnd(1);
fnd("JcMeet");
// 单个参数 () 是可选的：
let display = x => {
    console.log("单个参数不带括号，", x);
}
// 没有参数时可以使用空括号()
let noArgFnc = () => {
    console.log("没有参数的箭头函数");
}

/**
 * 函数重载
 * 重载是方法名字相同，而参数不同，返回类型可以相同也可以不同。
 * 每个重载的方法（或者构造函数）都必须有一个独一无二的参数类型列表。
 */
// 参数类型不同
// 参数数量不同
// 参数类型顺序不同
// 如果参数类型不同，则参数类型应设置为 any。
// 参数数量不同你可以将不同的参数设置为可选。

/**
 * 定义函数重载需要定义重载签名和一个实现签名。
 * 重载签名定义函数的形参和返回类型，没有函数体。一个函数可以有多个重载签名(不可调用)
 */

// 重载签名
function disp(s1: string): void;
function disp(n1: number, s1: string): void;

// 实现签名
function disp(x: any, y?: any): void {
    console.log(x);
    console.log(y);
}
disp("abc")
disp(1, "xyz");