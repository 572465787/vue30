
function a(){
	setTimeout(()=>{
		console.log('a执行')

		}, 600)
}

function b(aa,bb){ // aa==c,bb==a
	setTimeout(()=>{
	  console.log('b执行')
	  aa(bb) //c(a)
	}, 700)
	
}
b(c,a)
function c(cc){ // cc==a
    setTimeout(()=>{
	console.log('c执行')
	cc() //a()
}, 100)
}

// b执行完 c 执行 c执行完后a 执行  不在允许出来任何定时器
// 'b执行 c执行 a执行' 
let res = { 
		code:200,
		data:[{name:'lili',info:{
			age:3,
			face:'white',
			eat:['banana','origin']
		}},{
			name:'lilei',info:{
			age:4,
			face:'banana',
			eat:['pig','dog','banana','origin']
		}}]
	}
	let {data:[{name,info:{face}},{info:{age,eat:[s]}}]}=res
	console.log({name,face},{age,s})
// lili face  lilei 的age  lilei eat 的第一项