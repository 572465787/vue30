// 省 市 区
ajax({
        url:'省的接口地址',
        sucecess:function(data){
            let res1 = data[1] //北京
            ajax({
                url:'市接口地址',
                data:'res1',
                sucecess:function(data){
                    data //市
                }
            })
        }
    })


function getqu(beijing){
    ajax({
        url:'市接口地址',
        data:'res1',
        sucecess:function(data){
            data //市
        }
    })

}