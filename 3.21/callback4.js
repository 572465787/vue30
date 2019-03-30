// 回调函数 foreach 计数器 
// 有一个西瓜 我吃2口 吃完  吃完西瓜才能干活
function after(times,callback){
	let resary= []
   return function(data){
	 resary.push(data)
     if(--times==0){
       console.log(resary)
	   callback(resary)
	 }
   }
}
// return function(data){} =eat 
// eat = after(times,callback)  times=2
let eat = after(2,function(resary){
   if(resary.length==2){
	  console.log('去学校报名')  
   }
})
setTimeout(function(){
	eat({name:'LILI'})
},1000)
setTimeout(function(){
	eat({AGE:3})
},1000)


