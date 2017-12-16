define(function(){
	
function auth1Code(){
	var str = '';
	for(var i=0;i<4;i++){
		var num = parseInt(48+Math.random()*(122-47));

		if(num>=58&&num<=64||num>=91&&num<=96){
			i--;
		}else{
			str+=String.fromCharCode(num)
		}
	}
	return str;
}
function setCookie(name,val,expires){
	var d = new Date();
	d.setDate(d.getDate()+expires);
	document.cookie = name+'='+val+';path=/;expires='+d;
}

function getCookie(name){
	var cookie = document.cookie;
	var arr = cookie.split('; ');
	for(var i=0;i<arr.length;i++){
		var newArr = arr[i].split('=');
		if(newArr[0]==name){
			return newArr[1];
		}
	}
}

function removeCookie(name,val){
	setCookie(name,val,-1);
}

	return {
		auth1Code:auth1Code,
		setCookie:setCookie,
		getCookie:getCookie,
		removeCookie:removeCookie
	}
})