/**
 * 数组对象是使用单独的变量名来存储一系列的值。
 */
/**
 * 语法格式
 */
var array_name: string[];
array_name = ['str', 'hello', 'QGai'];

var array_name: string[] = ['world', 'car', 'TypeScript'];


/**
 * Array 对象
 * 我们也可以使用 Array 对象创建数组。
 * Array 对象的构造函数接受以下两种值：
 * 表示数组大小的数值。
 * 初始化的数组列表，元素使用逗号分隔值。
 */
var names = new Array(4);
names = ['Jack', 'Tom', 'Mark', 'QGai'];

var strArr = new Array('zs', 'ls', 'we', 'mz');


/**
 * 数组解构
 * 我们也可以把数组元素赋值给变量
 */
var arr: number[] = [12, 13];
var [x, y] = arr;
console.log(x); // 输出12
console.log(y); // 输出13



/**
 * 可以使用循环来迭代数组
 */
var arr: number[] = [10086, 10010, 10000, 10086110];
arr.forEach(element => {
    console.log(element);
});
/**
 * 输出
    10086
    10010
    10000
    10086110
 */



/**
 * 多维数组
 * 一个数组的元素可以是另外一个数组，这样就构成了多维数组（Multi-dimensional Array）。
 * 最简单的多维数组是二维数组，定义方式如下：
 */
var multi_arr: number[][] = [[1, 1, 1], [2, 2, 2], [3, 3, 3], [4, 4, 4]];
multi_arr.forEach(arr => {
    arr.forEach(value => {
        console.log(value);
        /**
         * 输出：
         *  1
            1
            1
            2
            2
            2
            3
            3
            3
            4
            4
            4
         */
    });
});


























