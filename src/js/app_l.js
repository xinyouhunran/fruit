require(["config"],function(){
	require(["jquery","fruit","pool"],function(jquery,fruit,pool){
		fruit.init();
		$(function(){
			var Login = {
				ophone:$("#phone"),
				opass:$("#pass"),
				ocheckb:$(".checkb"),
				ologinbtn:$("#loginbtn"),
				/*olv:$(".lval"),*/
				init:function(){
					/*if(pool.getCookie("user")){
						var s = pool.getCookie("user");
						var arr = s.split("?");
						console.log(this.olv);
						console.log(arr[0]);
						this.olv.html(arr[0]);
					}*/
					if(this.ocheckb.prop("checked")){
						if(pool.getCookie("pass")){
							var s = pool.getCookie("pass");
							var arr = s.split("?");
							this.ophone.val(arr[0]);
							this.opass.val(arr[1]);
						}
						
					}
					this.log();
					
				},
				log:function(){
					var _this = this;
					this.ologinbtn.click(function(){
						var phoneval = _this.ophone.val();
						var passval = _this.opass.val();
						if(pool.getCookie("tel")){
							var str = pool.getCookie("tel");
							var arr = str.split("?");
							if(arr[0]==phoneval && arr[1]==passval){
								var str1 = phoneval+"?"+passval;
								pool.setCookie("user",str1,7);
								_this.check(str1);
								pool.quealert("登入成功");
								fruit.init();
							}else{
								pool.quealert("登录名或密码错误");
							}
						}else{
							pool.quealert("该用户不存在，请注册");
						}						
					})

				},
				check:function(a){
					if(this.ocheckb.prop("checked")){
						pool.setCookie("pass",a,7);
					}
				}
			}
			Login.init();
		})
	})
})