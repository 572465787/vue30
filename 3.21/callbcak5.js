// 发布订阅
let dep = {
	cbs:[],//存放on里面的回调函数
	dataary:[],//放每一次emit发送过来的参数
	on(cb){//订阅者
      this.cbs.push(cb) //on执行的时候存on里面的回调函数
	 // cbs =[cb,cb2]
	},
	emit(data){//发布
      //把on里面的回调拿出来一次执行
	  this.dataary.push(data)
	 // fn就是on里面的回调 cb 
	  this.cbs.forEach(fn=>fn(this.dataary)) 
	 // cb(this.datary)
	}
}
// 1吃包子 2 吃鸡蛋  去上学
setTimeout(function(){
	dep.emit('吃包子')
},1000)
setTimeout(function(){
	dep.emit('吃鸡蛋')
},1000)
// dep.on(cb) dep.on(cb1) 
// this.cbs.push(cb) this.cbs.push(cb1) 
dep.on(function(data){
   if(data.length===2){
     console.log('上学')
   }
})

// 页面上有3个小球  要求 第一个球运动完成之后 第二个动  第二个运动完成之后第三个动 
