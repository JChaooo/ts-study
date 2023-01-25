/**
 * 函数定义
 * 函数就是包裹在花括号中的代码块，前面使用了关键词 function：
 * @arg 参数1
 * @arg2 可选参数，可选参数必须跟在必需参数后面。
 * @arg3 默认参数，参数不能同时设置为可选和默认
 * @arg4 剩余参数， 以 ... 为前缀，它将成为一个由剩余参数组成的数组，索引值从0（包括）到 restOfName.length（不包括）。
 */
function fnc(arg, arg2, arg3) {
    if (arg3 === void 0) { arg3 = true; }
    var arg4 = [];
    for (var _i = 3; _i < arguments.length; _i++) {
        arg4[_i - 3] = arguments[_i];
    }
    console.log(arg);
    return arg + '返回';
}
/**
 * 匿名函数
 * 匿名函数是一个没有函数名的函数。
 * 匿名函数在程序运行时动态声明，除了没有函数名外，其他的与标准函数一样。
 * 我们可以将匿名函数赋值给一个变量，这种表达式就成为函数表达式。
 */
var msg = function (param) {
    return param + '匿名函数';
};
//调用
msg("测试：");
/**
 * 匿名函数自调用
 * 匿名函数自调用在函数后使用 () 即可：
 */
(function () {
    console.log("匿名函数自调用");
})();
/**
 * 构造函数
 * TypeScript 也支持使用 JavaScript 内置的构造函数 Function() 来定义函数：
 */
var myFunction = new Function("a", "b", "return a*b");
var x = myFunction(2, 4);
console.log(x);
/**
 * 递归函数
 * 递归函数即在函数内调用函数本身。
 */
function factorial(num) {
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
var fna = function (x) { return x * 10; };
var fnb = function (x) {
    x *= 10;
    console.log(x);
};
// 可以不指定函数的参数类型，通过函数内来推断参数类型:
var fnd = function (x) {
    if (typeof x == "number") {
        console.log("x是一个数字");
    }
    else if (typeof x == "string") {
        console.log("x是一个string");
    }
};
fnd(1);
fnd("JcMeet");
// 单个参数 () 是可选的：
var display = function (x) {
    console.log("单个参数不带括号，", x);
};
// 没有参数时可以使用空括号()
var noArgFnc = function () {
    console.log("没有参数的箭头函数");
};
