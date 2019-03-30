// let  Promise = require('./p1')
// let p1 = new Promise((resolve,reject)=>{
//   setTimeout(function(){
//     reject('失败')
//   },1000)
  
// })
// p1.then(data=>{
//   console.log(data)
// },err=>{
//  console.log(err)
// })
// p1.then(data=>{
//   console.log(data)
// },err=>{
//  console.log(err)
// })
// // 1.执行器excutor 执行器里面有2个参数 resolve和reject 
// 2.只能由pendding状态转化到成功或者失败
//then里面有2个参数（函数） 一个是成功的回调 一个是失败的回到 
//如果是pending状态  需要把成功和失败状态的函数存起来  resolve reject函数的时候再去一次执行我们存起来的回调
let p1 = new Promise((resolve,reject)=>{
  setTimeout(function(){
    // reject('失败')
  },100)
})

p1.then(data=>{
  console.log(data)
},err=>{
  console.log(err)
})