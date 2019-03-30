// 函数当做参数 就叫回调
function a(cb){
	setTimeout(()=>{
		console.log('a执行')
		cb()
	 }, 600)
}
a(b) //实参
function b(cb1){
	setTimeout(()=>{
	  	console.log('b执行')
		  cb1()
	}, 700)
}	

		