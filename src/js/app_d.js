require(["config"],function(){
	require(["jquery","pool","fruit"],function(jquery,pool,fruit){
		fruit.init();
		$(function(){
	$.ajax({
		type:"get",
		url:"../json/fruit.json",
		dataType:"json",
		success:function(data){
			var Det = {
				otit:$(".tit"),
				osul:$(".sul"),
				obul:$(".bul"),
				omytitle:$(".mytitle"),
				omystitle:$(".mystitle"),
				omyprice:$(".myprice"),
				omyguige:$(".myguige"),
				omyaddress:$(".myaddress"),
				omymethod:$(".mymethod"),
				omymessage:$(".mymessage"),
				omybiannum:$(".mybiannum"),
				omybimg:$(".mybimg"),
				oshopbtn1:$(".shopbtn1"),
				oreduce:$("#reduce"),
				oadd:$("#add"),
				onumtxt:$("#numtxt"),
				inow:0,
				timer:null,
				init:function(){

					var href = location.href;
					var arr = href.split("?");
					/*console.log(arr[1]);*/
					for(var i in data){
						if(data[i].biannum==arr[1]){
							this.otit.html(data[i].title);
							this.omytitle.html(data[i].title);
							this.omystitle.html(data[i].smalltitle);
							this.omyprice.html('￥'+data[i].price);
							this.omyguige.html(data[i].guige);
							this.omyaddress.html(data[i].address);
							this.omymethod.html(data[i].method);
							this.omymessage.html(data[i].message);
							this.omybiannum.html(data[i].biannum);
							for(var n in data[i].bimg){
								var bimg = $("<img src="+data[i].bimg[n]+">");
								this.omybimg.append(bimg);
							}
							/*console.log(data[i].simg[0]);*/
							for(var j in data[i].simg){
								/*console.log(data[i].simg[j]);*/
								var li = $("<li><img src="+data[i].simg[j]+" data-url="+data[i].mimg[j]+"></li>");
								this.osul.append(li);
							}
							this.osul.children().eq(0).css("border","1px solid #f6af0d");
							var img = $("<img src="+data[i].mimg[0]+">");
							this.obul.append(img);
							this.autoplay();
							this.mouse();
							this.reduce();
							this.add();
							this.goshop();
						}
					}
				},
				autoplay:function(){
					var _this = this;
					this.timer = setInterval(function(){
						if(_this.inow==_this.osul.children().length-1){
							_this.inow = 0;
						}else{
							_this.inow++;
						}
						for(var i in _this.osul.children()){
							_this.osul.children().eq(i).css("border","0");
						}
						_this.osul.children().eq(_this.inow).css("border","1px solid #f6af0d");
	
						/*console.log(_this.obul.children().eq(0).src);
						console.log(_this.osul.children().eq(_this.inow).children().eq(0).attr("data-url"));*/
						var attr = _this.osul.children().eq(_this.inow).children().eq(0).attr("data-url");
						_this.obul.children().eq(0).attr("src",attr);
						
					},3000)
				},
				mouse:function(){
					var _this = this;
					this.osul.on("mouseover","li",function(){
						clearInterval(_this.timer);
						for(var i in _this.osul.children()){
							_this.osul.children().eq(i).css("border","0");
						}
						$(this).css("border","1px solid #f6af0d");
						_this.inow = $(this).index();
						var attr = $(this).children().eq(0).attr("data-url");
						_this.obul.children().eq(0).attr("src",attr);		
					})
					this.osul.on("mouseout","li",function(){
						_this.autoplay();
					})
					this.obul.mouseover(function(){
						clearInterval(_this.timer);
					}).mouseout(function(){
						_this.autoplay();
					})
				},
				reduce:function(){
					var _this = this;	
					this.oreduce.click(function(){
						var numval = Number(_this.onumtxt.val());
						if(numval==1){
							pool.quealert("亲，不能再减了哦");
						}else{
							numval--;
							_this.onumtxt.val(numval);
						}
					})
				},
				add:function(){
					var _this = this;
					var numval = Number(this.onumtxt.val());
					this.oadd.click(function(){
							numval++;
							_this.onumtxt.val(numval);
					})					
				},
				goshop:function(){
					var _this = this;
					var obj = {};
					this.oshopbtn1.click(function(){
						var bian = _this.omybiannum.html();
						var numval = Number(_this.onumtxt.val());
						if(pool.getCookie("fruit")){
							var obj1 = JSON.parse(pool.getCookie("fruit"));
								if(!obj1[bian]){
								obj1[bian]=numval;
							}else{
								var n = obj1[bian];
								n+=numval;
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
								n+=numval;
								obj[bian]=n;
							}
							var str = JSON.stringify(obj);
							pool.setCookie("fruit",str,7);
							pool.quealert("亲，商品添加成功了哦");
							fruit.init();
						}
						
					})
				}
			}
			Det.init();
		}
	})
})
	})
})