require(["config"],function(){
	require(["jquery","fruit","pool"],function(jquery,fruit,pool){
		fruit.init();
		$(function(){
			$.ajax({
				type:"get",
				url:"../json/fruit.json",
				datatype:"json",
				success:function(data){
					var Shop = {
						oshoplist:$("#shoplist"),
						init:function(){
							if(pool.getCookie("fruit")){
								var str = pool.getCookie("fruit");
								var obj = JSON.parse(str);
								for(var i in obj){
									for(var j in data){
										if(i==data[j].biannum){
											var li  = $("<li><div></div><div><a href='detial.html?'+"+data[j].biannum+"><img src="+data[j].simg[0]+"></a></div><div><p><a href='detial.html?'+"+data[j].biannum+">"+data[j].title+"</a></p></div><div><p>"+data[j].guige+"</p></div><div><p>￥"+data[j].price+"</p></div><div><span>-</span><input type='text' value="+obj[i]+"><span>+</span></div><div><p>￥"+parseInt(obj[i]*data[j].price)+"</p></div><div><p>删除</p></div></li>");
											this.oshoplist.append(li);
										}
									}
								}
							}
						}

					}
					Shop.init();
				}
			})
		})
	})
})