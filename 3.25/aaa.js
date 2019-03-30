let http = require('http')
let url = require('url')
http.createServer((req,res)=>{
	if(pathname ==='/'){
		let {name,age}= query;
		console.log(name,age)
		res.end(JSON.stringify({
		code:200,
			data:[{name:'lilei'},{name:'lili'}]
		 }))
	 return 
	}
	if(pathname ==='/abc'){
		res.end(JSON.stringify({
		code:200,
			data:{age:3}
		 }))
	 return
	}
	res.end('404')
}).listen(3010,function(){
	console.log('3020端口启动成功')
})