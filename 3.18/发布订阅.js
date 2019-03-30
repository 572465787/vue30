let dep = {
    cbs:[], //存放
    dataary:[],//放每一次emit发送过来的参数
    on(cb){
        // 订阅者
        this.cbs.push(cb)  //on执行的时候存on里面的回调函数
    },
    emit(data){
        // 发布
        // 把on里面的回调拿出来依次执行
        this.dataary.push(data)
        // fn就是on里面的回调
        this.cbs.forEach(fn=>fn(this.dataary))
       
    }
}
// 需要吃煲仔 2吃鸡蛋 
setTimeout(function(){
    dep.emit('吃包子')
},1000)
setTimeout(function(){
    dep.emit('吃鸡蛋')
},1000)

dep.on(function(data){
    if(data.length===2){
        console.log('上学')
    }
    console.log(data)

})


// 封装filter  

let ary = [1,2,3,4]
// let res = ary.filter(item=>item>2)
let res = ary.filter(function(item,index){
    return item>1
})

console.log(res)
Array.prototype.myfilter = function(s){
    let newarr = [];
    for(let i=0;i<this.lengeh;i++){
        // 只有回调函数返回的条件成立 才会放到新数组里面
        if(cb(this[i],i)){
            newarr.push(this[i])
        }
    }
    return newarr
}






// 页面上有3个小球  要求第一个球运动完成之后 第二个动   第二个运动完成之后第三个动

