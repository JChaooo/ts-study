/**
 * 任意类型	any	声明为 any 的变量可以赋予任意类型的值。
 */
var any1 = 1;
var any2 = '1';
var any3 = true;
var any4 = [1, 2, 3, 4];
/**
 * 数字类型	number 双精度 64 位浮点值。它可以用来表示整数和分数。
 */
var number1 = 1;
var number2 = 1.11;
/**
 * 字符串类型	string	一个字符系列，使用单引号（'）或双引号（"）来表示字符串类型。反引号（`）来定义多行文本和内嵌表达式。
 */
var stringName = "JcMeet";
var age = 5;
var words = "\u60A8\u597D\uFF0C\u6211\u662F".concat(stringName, "\uFF0C\u4ECA\u5E74").concat(age, "\u5C81");
/**
 * 布尔类型	boolean	表示逻辑值：true 和 false。
 */
var flag1 = true;
var flag2 = false;
/**
 * 数组类型	声明变量为数组。
 */
//在元素类型后面加上[]
var arr1 = [1, 2];
var arr2 = ['JcMeet', "倾盖"];
//或者使用数组泛型
var arr3 = [1, 2, 3, 4];
var arr4 = ['诸葛亮', "周瑜"];
/**
 * 元组	元组类型用来表示已知元素数量和类型的数组，各元素的类型不必相同，对应位置的类型需要相同。
 */
var x;
x = ['JcMeet', 123];
// x=[123,'JcMeet']; //不能将类型“number”分配给类型“string”。不能将类型“string”分配给类型“number”。
console.log(x[0]); // 输出JcMeet
/**
 * 枚举	enum 枚举类型用于定义数值集合。
 */
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Blue;
console.log(c); // 输出2
var Student;
(function (Student) {
    Student["A"] = "JcMeet";
    Student["B"] = "\u503E\u76D6";
    Student["C"] = "\u732A\u732A\u4FA0";
})(Student || (Student = {}));
var student = Student.C;
console.log(student); // 输出 猪猪侠
/**
 * void	void 用于标识方法返回值的类型，表示该方法没有返回值。
 */
function hello_void() {
    console.log("hello void");
}
/**
 * null	null 表示对象值缺失。
 */
var null1 = null;
/**
 * undefined	undefined	用于初始化变量为一个未定义的值
 */
var udf = undefined;
/**
 * never	never	never 是其它类型（包括 null 和 undefined）的子类型，代表从不会出现的值。
 */
/**
 * 注意：TypeScript 和 JavaScript 没有整数类型。
 */ 
