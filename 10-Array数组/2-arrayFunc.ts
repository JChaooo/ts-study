/**
 * 数组对象方法
 */

/**
 * concat()
 * 连接两个或更多的数组，并返回结果。
 */
var str_arr: any[] = ['a', 'b', 'c'];
var num_arr: number[] = [1, 2, 3, 4];
console.log(str_arr.concat(num_arr));
/**
 * 输出：
 * [
    'a', 'b', 'c', 1,
    2,   3,   4
    ]
 */


/**
 * every()
 * 检测数组元素的每个元素是否都符合条件。
 */
var nums: number[] = [10, 1, 50, 28, 60, 73, 85];
var result = nums.every((element, index, array) => {
    return (element >= 50)
})
console.log(result); // 输出 false

/**
 * filter()
 * 检测数值元素，并返回符合条件所有元素的数组。
 */
var result_arr = nums.filter((value, index, array) => {
    return (value <= 60);
})
console.log(result_arr); // 输出： [ 10, 1, 50, 28, 60 ]


/**
 * forEach()
 * 数组每个元素都执行一次回调函数。
 */
nums.forEach((element, index, array) => {
    console.log(element, index);
    /**
     * 输出：
     * 10 0
        1 1
        50 2
        28 3
        60 4
        73 5
        85 6
     */
});

/**
 * 	indexOf()
 * 搜索数组中的元素，并返回它所在的位置。
 * 如果搜索不到，返回值 -1，代表没有此项。
 */
var indexA = nums.indexOf(-1)
console.log(indexA) // 输出-1
var indexB = nums.indexOf(1)
console.log(indexB); // 输出1

/**
 * join()
 * 把数组的所有元素放入一个字符串。
 */
console.log(nums.join());
console.log(nums.join(","));
console.log(nums.join("+"));
console.log(nums.join("+++"));
/**
 * 输出：
 * 10,1,50,28,60,73,85
    10,1,50,28,60,73,85
    10+1+50+28+60+73+85
    10+++1+++50+++28+++60+++73+++85
 */


/**
 * 	lastIndexOf()
 * 返回一个指定的字符串值最后出现的位置，在一个字符串中的指定位置从后向前搜索。
 */
console.log(nums.lastIndexOf(50)); // 输出2


/**
 * map()
 * 通过指定函数处理数组的每个元素，并返回处理后的数组。
 */
var result_arr = nums.map((value, index, array) => {
    return value * 10
})
console.log(result_arr);
/**
 * 输出：
 * [
  100,  10, 500,
  280, 600, 730,
  850
]
 */



/**
 * 	pop()
 * 删除数组的最后一个元素并返回删除的元素。
 */
console.log(nums.pop()); // 输出85
console.log(nums.pop()); // 输出73
console.log(nums.pop()); // 输出60
console.log(nums); // 输出： [ 10, 1, 50, 28 ]


/**
 * push()
 * 向数组的末尾添加一个或更多元素，并返回新的长度。
 */
var newArr = new Array(1, 2, 3, 4);
var length = nums.push(...newArr);
console.log("新增后长度：", length, "；新增后的nums数组是：", nums);
/**
 * 输出：
 * 新增后长度： 8 ；新增后的nums数组是： [10,1,50,28,1,2,3,4]
 */



/**
 * reduce()
 * 将数组元素计算为一个值（从左到右）。
 */
var total = [1, 2, 3, 4, 5].reduce((previousValue, currentValue) => {
    console.log("previousValue====", previousValue);
    console.log("currentValue====", currentValue);
    return previousValue + currentValue
})
console.log(total);
/**
 * 输出：
 * previousValue==== 1
    currentValue==== 2
    previousValue==== 3
    currentValue==== 3
    previousValue==== 6
    currentValue==== 4
    previousValue==== 10
    currentValue==== 5
    15
 */


/**
 * reduceRight()
 * 将数组元素计算为一个值（从右到左）。
 */
var total = [9, 3, 2, 1, 2].reduceRight((previousValue, currentValue) => {
    return (previousValue - currentValue)
})
console.log(total); // 输出-13


/**
 * reverse()
 * 反转数组的元素顺序。
 */
var reArr = [1, 2, 3, 4].reverse();
console.log(reArr); // 输出 [ 4, 3, 2, 1 ]


/**
 * shift()
 * 删除并返回数组的第一个元素。
 */
var result_num = reArr.shift()
console.log(result_num); // 输出 4


/**
 * slice()
 * 选取数组的的一部分，并返回一个新数组。
 */
var arr = [3, 2, 1, 4, 5, 6]
var new_arr = arr.slice(1, 4)
console.log(new_arr); // 输出 [ 2, 1, 4 ]


/**
 * some()
 * 检测数组元素中是否有元素符合指定条件。
 */
var result = [1, 2, 3, 4, 5, 6].some((number, index, array) => {
    return number > 6
})
console.log(result); // 输出 false


/**
 * sort()
 * 对数组的元素进行排序。
 */
var new_arr = [9, 34, 0, 4, 83, 23, 743].sort((a, b) => {
    return a - b
});
console.log(new_arr);
/**
 * 输出：
 * [
   0,  4,   9, 23,
  34, 83, 743
]
 */
var sorted = ['achao', 'JChaooo', 'do', 'Do'].sort();
console.log(sorted); // 输出： [ 'Do', 'JChaooo', 'achao', 'do' ]


/**
 * splice()
 * 从数组中添加或删除元素。返回值是删除的元素数组
 */
var arr = [1, 2, 3, 4, 5];
var adding = arr.splice(2, 0, 6);
console.log(arr, adding); // 输出： [ 1, 2, 6, 3, 4, 5 ] []
var adding = arr.splice(0, 1);
console.log(adding); // 输出： [ 1 ]
console.log(arr); // 输出：[ 2, 6, 3, 4, 5 ]


/**
 * toString()
 * 把数组转换为字符串，并返回结果。
 */
var resultStr = arr.toString();
console.log(resultStr); // 输出：2,6,3,4,5


/**
 * unshift()
 * 向数组的开头添加一个或更多元素，并返回新的长度。
 */
var arr = [1, 2, 3, 4]
console.log(arr.length); // 输出 4
var newLength = arr.unshift(5, 6, 7);
console.log(arr); // 输出 [5, 6, 7, 1,2, 3, 4]
console.log(newLength); // 输出 7












