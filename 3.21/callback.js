// callback 回调函数
function a(){
	setTimeout(()=>{
		console.log('a执行')
		function b(){
			setTimeout(()=>{
	  		 console.log('b执行')
				function c(){
    			setTimeout(()=>{
				console.log('c执行')},
	 			100)
			 }
			c()
			}, 700)
		}	
		b()
	}, 600)
}
a()
