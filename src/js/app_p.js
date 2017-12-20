require(["config"],function(){
	require(["jquery","fruit","pool"],function(jquery,fruit,pool){
		fruit.init();
		$(function(){
			$.ajax({
				type:"get",
				url:"../json/fruit.json",
				dataType:"json",
				success:function(data){
					var Page = {
						olistul:$(".list-ul"),
						orightpart:$(".rightpart"),
						olow:$(".low"),
						ohigh:$(".high"),
						omiddles:$(".middle-s"),
						init:function(){
							var href = location.href;
							this.olistul.children().remove();
							if(/\?/.test(href)){
								var arr = href.split("?");
								var s = decodeURI(arr[1]);
								/*console.log(s);*/
								var reg = new RegExp(""+s+"","gi");
								for(var i in data){
									if(reg.test(data[i].title)){
										var li = $("<li  data-price="+data[i].price+"><a href=detial.html?"+data[i].biannum+"><img src="+data[i].simg[0]+"></a><div class='middle-d'><div class='middle-d-l'><p>"+data[i].title+"</p><p class='page-price'>￥"+data[i].price+"/礼盒</p></div><div class='middle-d-r' data-bian="+data[i].biannum+"></div></div></li>");
										this.olistul.append(li);
									}
									if(reg.test(data[i].address)){
										var li = $("<li  data-price="+data[i].price+"><a href=detial.html?"+data[i].biannum+"><img src="+data[i].simg[0]+"></a><div class='middle-d'><div class='middle-d-l'><p>"+data[i].title+"</p><p class='page-price'>￥"+data[i].price+"/礼盒</p></div><div class='middle-d-r' data-bian="+data[i].biannum+"></div></div></li>");
										this.olistul.append(li);
									}
									if(reg.test(data[i].guige)){
										var li = $("<li  data-price="+data[i].price+"><a href=detial.html?"+data[i].biannum+"><img src="+data[i].simg[0]+"></a><div class='middle-d'><div class='middle-d-l'><p>"+data[i].title+"</p><p class='page-price'>￥"+data[i].price+"/礼盒</p></div><div class='middle-d-r' data-bian="+data[i].biannum+"></div></div></li>");
										this.olistul.append(li);
									}					
								}
							}else{
								for(var i in data){
									var li = $("<li  data-price="+data[i].price+"><a href=detial.html?"+data[i].biannum+"><img src="+data[i].simg[0]+"></a><div class='middle-d'><div class='middle-d-l'><p>"+data[i].title+"</p><p class='page-price'>￥"+data[i].price+"/礼盒</p></div><div class='middle-d-r' data-bian="+data[i].biannum+"></div></div></li>");
									this.olistul.append(li);
								}
							}
							this.rightpart();
							this.low();
							this.high();
							this.yellowcar();
						},
						rightpart:function(){
							this.orightpart.on("click","span",function(e){
								e.stopPropagation();
								var val = $(this).html();
								location.href = "page.html?"+val;
							})
						},
						low:function(){
							var _this = this;
							var href = location.href;
							var arr1 = [];
							if(/\?/.test(href)){
								var arr = href.split("?");
								var s = decodeURI(arr[1]);
								
								var reg = new RegExp(""+s+"","gi");
							this.olow.on("click",function(e){
								e.stopPropagation();
								_this.olistul.html('');
								/*console.log(s);*/
								for(var j in data){
									/*console.log(data[j].title);*/
									if(reg.test(data[j].title)||reg.test(data[j].address)||reg.test(data[j].guige)){
										arr1.push(data[j]);
										console.log(arr1);
									}
								}
								/*console.log(arr1);*/
								var data1 = pool.bubblingSort(arr1);
							
								for(var i in data1){
									var li = $("<li  data-price="+data1[i].price+"><a href=detial.html?"+data1[i].biannum+"><img src="+data1[i].simg[0]+"></a><div class='middle-d'><div class='middle-d-l'><p>"+data1[i].title+"</p><p class='page-price'>￥"+data1[i].price+"/礼盒</p></div><div class='middle-d-r' data-bian="+data1[i].biannum+"></div></div></li>");
									_this.olistul.append(li);
								}

								/*var temp;
								for(var i = 0;i<ali.length;i++){	
										for(var j=0;j<ali.length-1-i;j++){
											if(ali.eq(j).attr("data-price")>=ali.eq(j+1).attr("data-price")){
												console.log(ali.eq(j).attr("data-price"),ali.eq(j+1).attr("data-price"));
												temp = ali.eq(j).html();
												console.log(temp);
												ali.eq(j).html(ali.eq(j+1).html());
												ali.eq(j+1).html(temp);
											}
										}
											
									}*/
									/*console.log(ali.eq(i).attr("data-price"));*/
							})
						}else{
							this.olow.on("click",function(e){
								_this.olistul.html('');
								e.stopPropagation();
								
								var data1 = pool.bubblingSort(data);
							
								for(var i in data1){
									var li = $("<li  data-price="+data1[i].price+"><a href=detial.html?"+data1[i].biannum+"><img src="+data1[i].simg[0]+"></a><div class='middle-d'><div class='middle-d-l'><p>"+data1[i].title+"</p><p class='page-price'>￥"+data1[i].price+"/礼盒</p></div><div class='middle-d-r' data-bian="+data1[i].biannum+"></div></div></li>");
									_this.olistul.append(li);
								}
							})
						}
						},
						high:function(){
							var _this = this;
							var href = location.href;
							var arr1 = [];
							if(/\?/.test(href)){
								var arr = href.split("?");
								var s = decodeURI(arr[1]);

								var reg = new RegExp(""+s+"","gi");
							this.ohigh.on("click",function(e){
								_this.olistul.html('');
								e.stopPropagation();
								for(var j in data){
									if(reg.test(data[j].title)||reg.test(data[j].address)||reg.test(data[j].guige)){
										arr1.push(data[j]);
									}
								}
								
								var data1 = pool.highSort(arr1);
							
								for(var i in data1){
									var li = $("<li  data-price="+data1[i].price+"><a href=detial.html?"+data1[i].biannum+"><img src="+data1[i].simg[0]+"></a><div class='middle-d'><div class='middle-d-l'><p>"+data1[i].title+"</p><p class='page-price'>￥"+data1[i].price+"/礼盒</p></div><div class='middle-d-r' data-bian="+data1[i].biannum+"></div></div></li>");
									_this.olistul.append(li);
								}

							})
						}else{
							this.ohigh.on("click",function(e){
								_this.olistul.html('');
								e.stopPropagation();
								
								var data1 = pool.highSort(data);
							
								for(var i in data1){
									var li = $("<li  data-price="+data1[i].price+"><a href=detial.html?"+data1[i].biannum+"><img src="+data1[i].simg[0]+"></a><div class='middle-d'><div class='middle-d-l'><p>"+data1[i].title+"</p><p class='page-price'>￥"+data1[i].price+"/礼盒</p></div><div class='middle-d-r' data-bian="+data1[i].biannum+"></div></div></li>");
									_this.olistul.append(li);
								}
							})
						}
						},
						yellowcar:function(){
						var _this = this;
						var obj = {};
						var numval = 1;
						this.omiddles.on("click","div",function(e){
							e.stopPropagation();
							if($(this).attr("data-bian")){
								var bian = $(this).attr("data-bian");
								if(pool.getCookie("fruit")){
										var obj1 = JSON.parse(pool.getCookie("fruit"));
											if(!obj1[bian]){
											obj1[bian]=numval;
										}else{
											var n = obj1[bian];
											n++;
											obj1[bian]=n;
										}
										var str1 = JSON.stringify(obj1);
										pool.setCookie("fruit",str1,7);
										pool.quealert("亲，商品添加成功了哦");
										fruit.init();
									}else{
											if(!obj[bian]){
											obj[bian]=numval;
										}else{
											var n = obj[bian];
											n++;
											obj[bian]=n;
										}
										var str = JSON.stringify(obj);
										pool.setCookie("fruit",str,7);
										pool.quealert("亲，商品添加成功了哦");
										fruit.init();
									}
							}else{
								
							}
							
					})
					}
					}
					Page.init();

				}
			})
		})
	})
})