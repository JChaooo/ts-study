const hello:string="Hello world!"
console.log(hello);

/**
 * TypeScript 面向对象编程实例：
 */
class Site {
    name():void{
        console.log("JcMeet");
    }
}

let obj=new Site();
obj.name();