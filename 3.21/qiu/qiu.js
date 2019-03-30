
// function move(ele,target,callback){
// 	let m =0;
//    let timer = setInterval(function(){
// 	 if(m>target){
// 		 ele.style.left=200+'px';
// 		 callback() 
// 	 }else{
// 		  m+=20
// 		  ele.style.left= m+'px'
// 	   }
// 	 },100)
//  } 

// move(qiu1,100,function(){
// 	move(qiu2,200,function(){
// 				move(qiu3,300,function(){
	
// 					})
// 		})
// })



// function move(ele,target){
// 	return new Promise((resolve,reject)=>{
// 			let m =0;
//  let timer = setInterval(function(){
//  if(m>=target){
// 			 ele.style.left=target+'px'
// 			 resolve('1')
			 
//  }else{
// 		m+=5
// 				ele.style.left= m+'px'
// 				// reject()
				
// 	 }
//  },13)
// 	})

// } 

// move(qiu1,300).then(data=>{
// 	return move(qiu2,400).then(data=>{
// 			return move(qiu3,500)
// 	 })
// })



function move (ele,target){
		return new Promise((resolve,reject)=>{
				let m =0;
	 let timer = setInterval(function(){
	 if(m>=target){
				 ele.style.left=target+'px'
				 resolve('1')
				 
	 }else{
			m+=5
					ele.style.left= m+'px'
					// reject()
					
		 }
	 },13)
		})	
	} 
async function m(){
    await move(qiu1,300)
    await move(qiu2,200)
    await move(qiu3,300)
}
m()





