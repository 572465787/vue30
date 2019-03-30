// 多层数据双向绑定
let obj = {
    age:[1,2,3,4],
    name:3,
    person:{
        name:'kangwen',
        age:'41'
    }
}
function isObject(obj){
    return obj!==null&&typeof obj==='object'
}
function Observer(obj){
    if(!isObject(obj)) return
    // if(typeof obj!='object') return
    for(let key in obj){
        //用defineReactive监听所有的
        defineReactive(obj,key,obj[key])
    }
}

function defineReactive(obj,key,value){
    Object(value)
    Object.defineProperty(obj,key,{
        get(){
            return value
        },
        set(val){
            Observer(val)
            console.log('shuj')
            value = val
        }
    })
}

// let oldpush = Array.prototype.push;
// Array.prototype.push=function(value){
//     console.log('更新了')
//     oldpush.call(this.value)
// }
Observer(obj)
let methods = ['push','pop','shift','unshift']
methods.forEach(method=>{
    let oldmethod = Array.prototype[method]
    Array.prototype[method] = function(...arg){
        console.log('数据更新了')
        oldmethod.call(this,...args)
    }

})

//改变length和索引 并不会触发更新方法