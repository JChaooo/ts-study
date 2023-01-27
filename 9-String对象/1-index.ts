/**
 *  String 对象支持的属性：
 */

/**
 * constructor
 * 对创建该对象的函数的引用。
 */
var str = new String("This is a String");
console.log(str.constructor); // 输出 [Function: String]

/**
 * length
 * 返回字符串的长度。
 */
var str = new String("Hello TypeScript!");
console.log(str.length); // 输出 17

/**
 * prototype
 * 允许您向对象添加属性和方法。
 */
function employee(id: number, name: string) {
    this.id = id;
    this.name = name;
}
var emp = new employee(123, 'admin');
employee.prototype.email = "123@outlook.com";
console.log(emp.id);
console.log(emp.name);
console.log(emp.email);


/**
 * String 对象支持的方法：
 */

/**
 * charAt()
 * 返回在指定位置的字符。
 */
var str = new String('JcMeet');
console.log(str.charAt(0)); // 输出 J
console.log(str.charAt(3)); // 输出 e
console.log(str.charAt(str.length - 1)); // 输出 t

/**
 * charCodeAt()
 * 返回在指定的位置的字符的 Unicode 编码。
 */
console.log(str.charCodeAt(0)); // 输出74
console.log(str.charCodeAt(3)); // 输出101

/**
 * concat()
 * 连接两个或更多字符串，并返回新的字符串。
 */

var str1 = "Hello";
var str2 = " TypeScript!";
var str3 = str1.concat(str2).concat("你好 Typescript！");
console.log(str3);

/**
 * indexOf()
 * 返回某个指定的字符串值在字符串中首次出现的位置。
 */
console.log(str3.indexOf("T")); // 输出6
console.log(str3.indexOf("A")); // 没找到A，输出-1

/**
 * 	lastIndexOf()
 * 从后向前搜索字符串，并从起始位置（0）开始计算返回字符串最后出现的位置。
 */
var str = new String("Hello A,Hello B,Ahh")
console.log(str.lastIndexOf("A")); // 输出16
console.log(str.lastIndexOf("C")); // 没找到C 输出-1

/**
 * localeCompare()
 * 用本地特定的顺序来比较两个字符串。
 */
var str = new String("This is beautiful string");
var index = str.localeCompare("This is beautiful string");
console.log(index); // 输出0

/**
 * match()
 * 查找找到一个或多个正则表达式的匹配。
 */
str = "The rain in SPAIN stays mainly in the plain";
var n = str.match(/ain/g);
console.log(n); // 输出 [ 'ain', 'ain', 'ain' ]

/**
 * replace()
 * 替换与正则表达式匹配的子串
 */
var re = /(\w+)\s(\w+)/;
var str = new String("zara ali");
var newStr = str.replace(re, "$2, $1");
console.log(newStr); // ali, zara

/**
 * search()
 * 检索与正则表达式相匹配的值
 */
var re = /apples/gi;
var str = new String("Apples are round, and apples are juicy.");
if (str.search(re) == -1) {
    console.log("Does not contain Apples");
} else {
    console.log("Contains Apples");
}

/**
 * slice()
 * 提取字符串的片断，并在新的字符串中返回被提取的部分。
 */

var str = new String("This is a new str");
var newStr = str.slice(1, 3);
console.log(newStr); // 输出 hi

/**
 * split()
 * 把字符串分割为子字符串数组。
 */
var splittedArr = str.split(" ", 3);
console.log(splittedArr); // [ 'This', 'is', 'a' ]

/**
 * substr() // 已弃用
 * 从起始索引号提取字符串中指定数目的字符。
 */
var str = new String("Test String")
var newStr = str.substr(5); // 输出String
console.log(newStr);

/**
 * substring()
 * 提取字符串中两个指定的索引号之间的字符。
 */
var newStr = str.substring(2); // 从索引2开始截取，直到最后
var newStr2 = str.substring(2, 6); // 从索引2开始截取，直到索引6（不包括6）
console.log(newStr, "===", newStr2); // st String === st S

/**
 * toLocaleLowerCase()
 * 根据主机的语言环境把字符串转换为小写，只有几种语言（如土耳其语）具有地方特有的大小写映射。
 */
var str = new String("JcMeet");
console.log(str.toLocaleLowerCase()); // 输出 jcmeet

/**
 * toLocaleUpperCase()
 * 据主机的语言环境把字符串转换为大写，只有几种语言（如土耳其语）具有地方特有的大小写映射。
 */
console.log(str.toLocaleUpperCase()); // 输出 JCMEET

/**
 * toLowerCase()
 * 把字符串转换为小写。
 */
console.log(str.toLowerCase()); // 输出 jcmeet

/**
 * toUpperCase()
 * 把字符串转换为大写。
 */
console.log(str.toUpperCase()); // 输出 JCMEET

var str = new String("Hello JcMeet!");
console.log(str); // 输出对象结构 [String: 'Hello JcMeet!']
console.log(str.toString()); // 输出 Hello JcMeet!

/**
 * valueOf()
 * 返回指定字符串对象的原始值。
 */
console.log(str.valueOf()); // 输出 Hello JcMeet!

