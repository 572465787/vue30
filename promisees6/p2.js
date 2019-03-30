class Promise{
	constructor(excutor){
		 const PENDING = 'PEDNGING'
		 const RESOLVEd = 'RESOLVED'
		 const REJECTED = 'REJECTED'
		 this.onResolveCb= [];
		 this.onrejectCb=[];
		 this.value= undefined;
		 this.reason= undefined;
		 this.status = PENDING;
		resolve=(value)=>{
          if(this.status===PENDING){
			 this.status=RESOLVED;this.value= value; 
			 this.onResolveCb.forEach(fn=>fn())
		  }
		}
		reject =(reason)=>{
			if(this.status===PENDING){
				this.status=REJECTED;
				this.reason=reason;
				this.onrejectCb.forEach(fn=>fn())
			}
		}
		try{
			excutor(resolve,reject)
		}catch(e){
			reject(e)
		}
	}
	then(onfufilled,onrejected){
        if(this.status===RESOLVED){
			onfufilled(this.value)
		}
		if(this.status===REJECTED){
			onrejected(this.reason)
		}
		if(this.status===PENDING){
           this.onResolveCb.push(()=>{
			   onfufilled(this.value)
		   })
           this.onrejectCb .push(()=>{
			   onrejected(this.reason)
		   })
		}
	}
}