require(["config"],function(){
	require(["jquery","fruit","pool"],function(jquery,fruit,pool){
		fruit.init();
		
		$(function(){
			var Register = {
				ofo2:$("#fo2"),
				ophone:$("#phone"),
				opass:$("#pass"),
				oquepass:$("#quepass"),
				oyanzheng:$("#yanzheng"),
				oyan:$("#yan"),
				aiconerror:$(".iconerror"),
				oshua:$("#shua"),
				init:function(){
					var _this = this;
					var code = pool.auth1Code();
					this.oyan.val(code);
					this.ofo2.on("click","input",function(e){
						$(this).next().removeClass("true");
						var target = e.target;
						if(target.id=="phone"){
							$(this).blur(function(){
								if(/^\d{11}$/.test($(this).val())){
									$(this).next().addClass("true");
									$(this).next().removeClass("false");
								}
							})
						}
						if(target.id=="pass"){
							$(this).blur(function(){
								if(/^\w+$/.test($(this).val())){
									$(this).next().addClass("true");
									$(this).next().removeClass("false");
								}
							})
						}
						if(target.id=="quepass"){
							$(this).blur(function(){
								if($(this).val()==_this.opass.val()&&(_this.opass.val()!="")){
									$(this).next().addClass("true");
									$(this).next().removeClass("false");
								}
							})
						}
						if(target.id=="yanzheng"){
							$(this).blur(function(e){
								/*console.log(_this.oyan.val());*/
								e.stopPropagation();
								if($(this).val()==_this.oyan.val()){
									$(this).next().next().next().addClass("true");
									$(this).next().next().next().removeClass("false");
								}
							})
						}
					})
					this.ofo2.on("click","a",function(e){
						var target = e.target;
						var flag = true;
						if(target.className=="regis"){
							for(var i=0;i<_this.aiconerror.length;i++){
								if(_this.aiconerror[i].className=="iconerror true"){
								}else{
									_this.aiconerror.eq(i).addClass("false");
									flag = false;
								}
							}
							if(flag){
								var phoneval = _this.ophone.val();
								var passval = _this.opass.val();
								var str = phoneval+"?"+passval;
								if(pool.getCookie("tel")==str){
									pool.quealert("此用户已存在");
									code = pool.auth1Code();
									_this.oyan.val(code);
								}else{
									pool.setCookie("tel",str,7);
									pool.quealert("注册成功");
								}
							}else{
								pool.quealert("注册失败");
								code = pool.auth1Code();
								_this.oyan.val(code);
							}
						}
					})
					this.oshua.click(function(){
						code = pool.auth1Code();
						_this.oyan.val(code);
					})
				}
			}
			Register.init();
		})
	})
})