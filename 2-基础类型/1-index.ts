/**
 * 任意类型	any	声明为 any 的变量可以赋予任意类型的值。
 */
let any1: any = 1;
let any2: any = '1';
let any3: any = true;
let any4: any = [1, 2, 3, 4];

/**
 * 数字类型	number 双精度 64 位浮点值。它可以用来表示整数和分数。
 */
let number1: number = 1;
let number2: number = 1.11;

/**
 * 字符串类型	string	一个字符系列，使用单引号（'）或双引号（"）来表示字符串类型。反引号（`）来定义多行文本和内嵌表达式。
 */
let stringName: string = "JcMeet";
let age: number = 5;
let words: string = `您好，我是${stringName}，今年${age}岁`;

/**
 * 布尔类型	boolean	表示逻辑值：true 和 false。
 */
let flag1 = true;
let flag2 = false;

/**
 * 数组类型	声明变量为数组。
 */
//在元素类型后面加上[]
let arr1: number[] = [1, 2];
let arr2: string[] = ['JcMeet', "倾盖"];
//或者使用数组泛型
let arr3: Array<number> = [1, 2, 3, 4];
let arr4: Array<string> = ['诸葛亮', "周瑜"];

/**
 * 元组	元组类型用来表示已知元素数量和类型的数组，各元素的类型不必相同，对应位置的类型需要相同。
 */
let x: [string, number];
x = ['JcMeet', 123];
// x=[123,'JcMeet']; //不能将类型“number”分配给类型“string”。不能将类型“string”分配给类型“number”。
console.log(x[0]); // 输出JcMeet

/**
 * 枚举	enum 枚举类型用于定义数值集合。
 */
enum Color { Red, Green, Blue };
let c: Color = Color.Blue;
console.log(c); // 输出2

enum Student {
    A = 'JcMeet',
    B = "倾盖",
    C = "猪猪侠"
}
let student: Student = Student.C;
console.log(student); // 输出 猪猪侠

/**
 * void	void 用于标识方法返回值的类型，表示该方法没有返回值。
 */
function hello_void(): void {
    console.log("hello void");
}

/**
 * null	null 表示对象值缺失。
 */
const null1: null = null;

/**
 * undefined	undefined	用于初始化变量为一个未定义的值
 */
const udf: undefined = undefined;

/**
 * never	never	never 是其它类型（包括 null 和 undefined）的子类型，代表从不会出现的值。
 */

/**
 * 注意：TypeScript 和 JavaScript 没有整数类型。
 */