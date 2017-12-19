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
						ojie:$(".jie"),
						init:function(){
							var shopnum = 0;
							var zong = 0;
							if(pool.getCookie("fruit")){
								var str = pool.getCookie("fruit");
								var obj = JSON.parse(str);
								for(var i in obj){
									for(var j in data){
										if(i==data[j].biannum){
											var li  = $("<li data-bian="+data[j].biannum+"><div></div><div><a href=detial.html?"+data[j].biannum+"><img src="+data[j].simg[0]+"></a></div><div><p><a href='detial.html?'+"+data[j].biannum+">"+data[j].title+"</a></p></div><div><p>"+data[j].guige+"</p></div><div><p>￥"+data[j].price+"</p></div><div><span class='reduce'>-</span><input type='text' value="+obj[i]+" disabled='disabled' class='shopnum'><span class='add'>+</span></div><div><p>￥"+parseInt(obj[i]*data[j].price)+"</p></div><div><p class='remove'>删除</p></div></li>");
											this.oshoplist.append(li);
											shopnum += obj[i];
											zong+=parseInt(obj[i]*data[j].price);
										}
									}
								}
								var s = $("<span>已选择<em>"+shopnum+"件</em>商品  |  订单金额</span><span>￥"+zong+"</span><a href='##'>去结算</a>");
								this.ojie.append(s);
							}
							this.reduce();
							this.add();
							this.remove();
						},
						reduce:function(){
							var _this = this;
							this.oshoplist.on("click",".reduce",function(){
								 var numval = Number($(this).next().val());
								 var bian = $(this).parent().parent().attr("data-bian");
								 if(numval==1){
									pool.quealert("亲，不能再减了哦");
									}else{
										numval--;
										$(this).next().val(numval);
										if(pool.getCookie("fruit")){
											var str = pool.getCookie("fruit");
											var obj = JSON.parse(str);
											obj[bian] = numval;								
										}
										var str1 = JSON.stringify(obj);
										pool.setCookie("fruit",str1,7);
										location.href = "shop.html";
									}
							})
						},
						add:function(){
							var _this = this;
							this.oshoplist.on("click",".add",function(){
								var numval = Number($(this).prev().val());
								var bian = $(this).parent().parent().attr("data-bian");
								numval++;
								$(this).prev().val(numval);
								if(pool.getCookie("fruit")){
									var str = pool.getCookie("fruit");
									var obj = JSON.parse(str);
									obj[bian] = numval;
								}
								var str1 = JSON.stringify(obj);
								pool.setCookie("fruit",str1,7);
								location.href = "shop.html";
							})
						},
						remove:function(){
							var _this = this;
							this.oshoplist.on("click",".remove",function(){
								var bian = $(this).parent().parent().attr("data-bian");
								$(this).parent().parent().remove();
								if(pool.getCookie("fruit")){
									var str = pool.getCookie("fruit");
									var obj = JSON.parse(str);
									delete obj[bian];
								}
								var str1 = JSON.stringify(obj);
								pool.setCookie("fruit",str1,7);
								location.href = "shop.html";
							})
						}
					}
					Shop.init();
				}
			})
		})
	})
})