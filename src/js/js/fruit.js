define(["jquery","pool"],function(jquery,pool){
	function init(){


$(function(){
	$("#header>.header-content").load("header.html",function(){
			var Header = {
		
			oci:$(".ci"),
			oop:$(".op"),
			oopen:$(".open"),
			oselect:$("#select"),
			ocity:$(".city"),
			otxt:$(".txt"),
			obusearch:$(".busearch"),
			ologo:$(".logo"),
			onavr:$(".nav-r"),
			olv:$(".lval"),
			oshopcar:$(".shopcar"),
			oshopcarnum:$(".shopcarnum"),
			osearch:$(".search"),
			
		init:function(){		
			var _this = this;
			this.lval();
			/*console.log(this.oselect);*/
			this.oselect.on('click','li',function(e){
				/*console.log($(this).children().eq(0).hasClass('op'));*/
				/*console.log(e.target);*/
				if($(e.target).children().eq(0).hasClass('op')){
					/*console.log(1);*/
					if(_this.oopen.css("display")=="none"){
						_this.oopen.css("display","block");
					}else{
						_this.oopen.css("display","none");
					}	
				}
			})
			this.jump();
			this.sea();
			this.logo();
			this.shop();
			this.shopcarnum();
			this.search();
		},
		jump:function(){
			var _this = this;
			this.ocity.on("click",'a',function(e){
				/*console.log(e.target);*/
				if(e.target.tagName=='A'){
					var val = $(e.target).text();
					/*_this.oci.text(val);*/
					_this.oci.contents()[2].data ='  '+ val + '>';
				}
			})	
		},
		
		sea:function(){
			var _this = this;

			this.otxt.click(function(e){
					/*console.log(1);*/
					e.stopPropagation();
					if(_this.obusearch.css("display")=="none"){
						$.ajax({
						type:"get",
						url:"../../json/fruit.json",
						dataType:"json",
						success:function(data){
							var val = _this.otxt.val();
							
							var reg = new RegExp(""+val+"","gi");
							for(var i=0;i<5;i++){
								var n = parseInt(Math.random()*data.length);
								if(reg.test(data[n].title)){
									var li = $("<li>"+data[n].title+"</li>");
									_this.obusearch.append(li);
								}else{
									i--;
								}							
							}
						}
					})

					_this.obusearch.css("display","block");
					_this.otxt.focus();
					}
			})
			$(document).click(function(e){
				_this.obusearch.children().remove();
				_this.obusearch.css("display","none");
			})
			/*this.otxt.on("input",function(e){
				_this.obusearch.children().remove();
				_this.obusearch.css("display","none");*/
				$.ajax({
						type:"get",
						url:"../../json/fruit.json",
						dataType:"json",
						success:function(data){
							_this.otxt.on("click",function(e){
								e.stopPropagation();
							_this.obusearch.children().remove();
							_this.obusearch.css("display","none");
							var val = _this.otxt.val();
							/*console.log(val);*/
							var reg = new RegExp(""+val+"","gi");
							for(var i=0;i<5;i++){
								var n = parseInt(Math.random()*data.length);
								if(data[n]){
									if(reg.test(data[n].title)){
										var li = $("<li>"+data[n].title+"</li>");
										_this.obusearch.append(li);
									}else{
										i--;
									}
								}							
							}
							_this.obusearch.css("display","block");
							e.stopPropagation();
							_this.otxt.focus();
						
					})
						}

			})
			this.obusearch.on("click","li",function(){
				var html = $(this).html();
				/*console.log(html);*/
				location.href = "page.html?"+html;
			})
			
			
		},
		search:function(){
			var _this = this;
			this.osearch.click(function(){
				var val = _this.otxt.val();
				location.href = "page.html?"+val;
			})
		},
		logo:function(){
			this.ologo.click(function(){
				location.href = "fruit.html";
			})
		},
		lval:function(){
			if(pool.getCookie("user")){
				var s = pool.getCookie("user");
				var arr = s.split("?");
				this.olv.html("用户："+arr[0]);
			}
		},
		shop:function(){
			this.oshopcar.click(function(){
				location.href = "../../html/shop.html";
			})
		},
		shopcarnum:function(){
			if(pool.getCookie("fruit")){
				var str = pool.getCookie("fruit");
				var obj = JSON.parse(str);
				var shopcar = Number(this.oshopcarnum.html());
				for(var i in obj){
					shopcar+=obj[i];
				}
				this.oshopcarnum.html(shopcar);
			}
		}
	}	
	Header.init();
		});	
	
	$("#footer>.footer-content").load("footer.html",function(){
		
	})
})
}
	return {
		init:init
	}
})	
	