// 高阶函数  2个箭头以上的叫做高阶函数
// 函数里面返回函数

// util 工具类

// 回调函数   foreach
// 有一个西瓜 我吃2口 吃完 吃完才能干活

// 吧函数当做参数就叫回调函数
function after(times,callback){
    let resary = []
    return function(data){
      console.log(data)  
      resary.push(data)

      if(--times==0){
          console.log('吃完了')
          console.log(resary)
          callback(resary)

      }
    }
}

// return function（data）{} = eat
// eat = after(times,callback)   times=2
let eat = after(2,function(resary){
    if(resary.length ==2){
        console.log('去干活                                                                                                                                                                                                                                                                                                                                                                                              ')   
    }
})

setTimeout(function(){
    eat({name:'lili'})
},200)
setTimeout(function(){
    eat({age:'25'})
},200)