// es5
let obj = {
    name :4,
    nam:'aa'
}
Object.defineProperty(obj,'name',{
    name(){  //获取值
        return 2
    },
    set(){

    },
    enmuberable:true,
    Writable:false,
    configurable:true
})
// enmuberable:true  是否可枚举
for(let key in obj){

    console.log(obj[key])

}
// writable 是否可写入
obj.name = 4

// 是否可配置
delete obj.name