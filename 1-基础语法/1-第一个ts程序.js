var hello = "Hello world!";
console.log(hello);
/**
 * TypeScript 面向对象编程实例：
 */
var Site = /** @class */ (function () {
    function Site() {
    }
    Site.prototype.name = function () {
        console.log("JcMeet");
    };
    return Site;
}());
var obj = new Site();
obj.name();
