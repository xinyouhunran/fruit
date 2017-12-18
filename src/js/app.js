require(["config"],function(){
	require(["jquery","swiper","pool","fruit"],function(jquery,swiper,pool,fruit){
		fruit.init();

		$.ajax({
			type:"get",
			url:"../json/fruit.json",
			dataType:"json",
			success:function(data){
				var Section = {
					opresent:$(".present"),
					ohome:$(".home"),
					oms:$(".middle-s"),
					oglobal:$(".global"),
					omeat:$(".meat"),
					omiddles:$(".middle-s"),
					oyellowcar:$(".middle-h-r"),
				init:function(){
					var _this = this;
					for(var i in data){
						if(data[i].target=="present"){
							/*console.log(1);*/
							var li = $("<li><a href=detial.html?"+data[i].biannum+"><img src="+data[i].simg[0]+"></a><div class='middle-d'><div class='middle-d-l'><p>"+data[i].title+"</p><p>￥"+data[i].price+"/礼盒</p></div><div class='middle-d-r' data-bian="+data[i].biannum+"></div></div></li>");
							_this.opresent.append(li);
						}
						if(data[i].target=="home"){
							/*console.log(1);*/
							var li = $("<li><a href=detial.html?"+data[i].biannum+"><img src="+data[i].simg[0]+"></a><div class='middle-d'><div class='middle-d-l'><p>"+data[i].title+"</p><p>￥"+data[i].price+"/礼盒</p></div><div class='middle-d-r' data-bian="+data[i].biannum+"></div></div></li>");
							_this.ohome.append(li);
						}
						if(data[i].target=="global"){
							/*console.log(1);*/
							var li = $("<li><a href=detial.html?"+data[i].biannum+"><img src="+data[i].simg[0]+"></a><div class='middle-d'><div class='middle-d-l'><p>"+data[i].title+"</p><p>￥"+data[i].price+"/礼盒</p></div><div class='middle-d-r' data-bian="+data[i].biannum+"></div></div></li>");
							_this.oglobal.append(li);
						}
						if(data[i].target=="meat"){
							/*console.log(1);*/
							var li = $("<li><a href=detial.html?"+data[i].biannum+"><img src="+data[i].simg[0]+"></a><div class='middle-d'><div class='middle-d-l'><p>"+data[i].title+"</p><p>￥"+data[i].price+"/礼盒</p></div><div class='middle-d-r' data-bian="+data[i].biannum+"></div></div></li>");
							_this.omeat.append(li);
						}
					}
					this.mouse();
					this.autoplay();
					this.yellowcar();
				},

			mouse:function(){
				this.oms.on("mouseover","img",function(){
					/*console.log(1);*/
					var width = $(this).width()*1.05;
					var height = $(this).height()*1.05;
					$(this).animate({
						"width":width,
						"height":height
					},200);
				});
				this.oms.on("mouseout","img",function(){
					/*console.log(1);*/
					$(this).animate({
						"width":"248px",
						"height":"248px"
					},100);
				})
			},
			autoplay:function(){
				new Swiper(".swiper-container",{
				autoplay:3000,
				loop:true,
				pagination:".swiper-pagination",
				paginationClickable:true,
				prevButton:'.swiper-button-prev',
				nextButton:'.swiper-button-next',
				autoplayDisableOnInteraction:false,
				disableOnInteraction:false
			})
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
			Section.init();
		}
	})
	
	})
})