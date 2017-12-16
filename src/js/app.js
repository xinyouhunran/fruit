require(["config"],function(){
	require(["jquery","swiper","pool","fruit"],function(jquery,swiper,pool,fruit){
		fruit.init();
		var Section = {
		opresent:$(".present"),
		ohome:$(".home"),
		oms:$(".middle-s"),
		oglobal:$(".global"),
		omeat:$(".meat"),
		init:function(){
			var _this = this;
			$.ajax({
				type:"get",
				url:"../../json/fruit.json",
				dataType:"json",
				success:function(data){
					for(var i in data){
						if(data[i].target=="present"){
							/*console.log(1);*/
							var li = $("<li><a href=detial.html?"+data[i].biannum+"><img src="+data[i].simg[0]+"></a><div class='middle-d'><div class='middle-d-l'><p>"+data[i].title+"</p><p>￥"+data[i].price+"/礼盒</p></div><div class='middle-d-r'></div></div></li>");
							_this.opresent.append(li);
						}
						if(data[i].target=="home"){
							/*console.log(1);*/
							var li = $("<li><a href=detial.html?"+data[i].biannum+"><img src="+data[i].simg[0]+"></a><div class='middle-d'><div class='middle-d-l'><p>"+data[i].title+"</p><p>￥"+data[i].price+"/礼盒</p></div><div class='middle-d-r'></div></div></li>");
							_this.ohome.append(li);
						}
						if(data[i].target=="global"){
							/*console.log(1);*/
							var li = $("<li><a href=detial.html?"+data[i].biannum+"><img src="+data[i].simg[0]+"></a><div class='middle-d'><div class='middle-d-l'><p>"+data[i].title+"</p><p>￥"+data[i].price+"/礼盒</p></div><div class='middle-d-r'></div></div></li>");
							_this.oglobal.append(li);
						}
						if(data[i].target=="meat"){
							/*console.log(1);*/
							var li = $("<li><a href=detial.html?"+data[i].biannum+"><img src="+data[i].simg[0]+"></a><div class='middle-d'><div class='middle-d-l'><p>"+data[i].title+"</p><p>￥"+data[i].price+"/礼盒</p></div><div class='middle-d-r'></div></div></li>");
							_this.omeat.append(li);
						}
					}
				}
			})
			this.mouse();
			this.autoplay();
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
	}
	Section.init();
	})
})