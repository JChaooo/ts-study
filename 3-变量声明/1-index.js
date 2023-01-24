/**
 * TypeScript 变量的命名规则：
 *  变量名称可以包含数字和字母。
 *  除了下划线 _ 和美元 $ 符号外，不能包含其他特殊字符，包括空格。
 *  变量名不能以数字开头。
 */
/**
 * 1、声明变量的类型及初始值：
 *  var [变量名] : [类型] = 值;
 */
var var1 = 1;
/**
 * 2、声明变量的类型，但没有初始值，变量值会设置为 undefined：
 *  var [变量名] : [类型];
 */
var var2;
// console.log(b); // 报错：在赋值前使用了变量“b”。
/**
 * 3、声明变量并初始值，但不设置类型，该变量可以是任意类型：
 *  var [变量名] = 值;
 */
var var3 = 1;
var var4 = '1';
var var5 = true;
/**
 * 4、声明变量没有设置类型和初始值，类型可以是任意类型，默认初始值为 undefined：
 *  var [变量名];
 */
var var6;
/**
 * 类型断言（Type Assertion）
 * 类型断言可以用来手动指定一个值的类型，即允许变量从一种类型更改为另一种类型。

语法格式：

<类型>值
或:
值 as 类型
 */
var str = '1';
var str2 = str; //str、str2 是 string 类型
console.log(typeof (str), typeof (str2)); // 输出string
/**
 * 类型推断
 * 当类型没有给出时，TypeScript 编译器利用类型推断来推断类型。
 * 如果由于缺乏声明而不能推断出类型，那么它的类型被视作默认的动态 any 类型。
 */
var var7 = 1;
// var7 = '1'; // 编译报错，因为上一行代码已经把var7的类型推断为`number`
/**
 * 变量作用域
变量作用域指定了变量定义的位置。

程序中变量的可用性由变量作用域决定。

TypeScript 有以下几种作用域：

全局作用域 − 全局变量定义在程序结构的外部，它可以在你代码的任何位置使用。

类作用域 − 这个变量也可以称为 字段。类变量声明在一个类里头，但在类的方法外面。 该变量可以通过类的对象来访问。类变量也可以是静态的，静态的变量可以通过类名直接访问。

局部作用域 − 局部变量，局部变量只能在声明它的一个代码块（如：方法）中使用。
 */
var global_num = 12; // 全局变量
var Numbers = /** @class */ (function () {
    function Numbers() {
        this.num_val = 13; // 实例变量
    }
    Numbers.prototype.storeNum = function () {
        var local_num = 14; // 局部变量
    };
    Numbers.sval = 10; // 静态变量
    return Numbers;
}());
console.log("全局变量为：", global_num);
console.log("静态变量为：", Numbers.sval);
var number_obj = new Numbers();
console.log("实例变量：", number_obj.num_val);
