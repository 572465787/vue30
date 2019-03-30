// promise 承诺  es6规范 类
// 1.作用   处理异步的一种手段（解决回调地狱的问题）
// pronise有一个立即执行器叫做excutor
// 执行器有两个参数 resolve和reject  这个两个都是函数
// 我们可以调用resolve传一个值表示成功，reject 可以传一个值表示失败
// resolve('值')   这个值可一个是任意值   reject('值')这个值可一个是任意值
// promise有三种状态 等待pending 成功reslove 失败reject   初始状态是pending
// promise的状态只能由pending变成成功或者失败状态 一旦成功就不能失败 一旦失败就不能成功
// promise 实例 都有一个then方法 then规定是异步的（微任务）
// primse.then（）执行之后返回的是一个新的promise
// then方法里面有两个参数 都是函数一个是成功的回调一个是失败的回调
// 如果有报错 会直接走失败 可以用catch统一处理失败
// axios基于pronise封装的


function move(ele,target,){
    return new Promise(()=>{
        let m =0;
   let timer = setInterval(function(){
	 if(m>target){
         ele.style.left=200+'px'
         resolve()
         
	 }else{
		  m+=20
          ele.style.left= m+'px'
          
	   }
	 },100)
    })
	
 } 

 move(qiu1,300).then(data=>{
     move(qiu2,300).then(data=>{
         move(qiu3,300)
     })
 })

// move(qiu1,100,function(){
// 	move(qiu2,200,function(){
// 				move(qiu3,300,function(){
	
// 					})
// 		})
// })