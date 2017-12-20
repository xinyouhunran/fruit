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

function quealert(val){
			var div = document.createElement('div');
			div.className = 'alert';	
			var but = document.createElement('button');
			var p = document.createElement('p');
			p.className = 'quep';
			p.innerHTML = val;
			div.appendChild(p);
			but.innerHTML = '确定';
			but.className = 'que';
			div.appendChild(but);	
			var div1 = document.createElement('div');
			div1.className = 'meng';
			div1.appendChild(div);
			document.body.appendChild(div1);
			but.onclick = function(){
				div1.remove();
			}
}

function bubblingSort(arr){
	var temp;
/*	console.log(arr)*/
	for(var i=0;i<arr.length-1;i++){
		for(var j=0;j<arr.length-1-i;j++){
/*			console.log(arr[j].price)*/
			if(arr[j].price>arr[j+1].price){
				temp = arr[j];
				arr[j] = arr[j+1];
				arr[j+1] = temp;
			}
		}
	}
	return arr;
}
//从大到小
function highSort(arr){
	var temp;
/*	console.log(arr)*/
	for(var i=0;i<arr.length-1;i++){
		for(var j=0;j<arr.length-1-i;j++){
/*			console.log(arr[j].price)*/
			if(arr[j].price<arr[j+1].price){
				temp = arr[j];
				arr[j] = arr[j+1];
				arr[j+1] = temp;
			}
		}
	}
	return arr;
}

	return {
		auth1Code:auth1Code,
		setCookie:setCookie,
		getCookie:getCookie,
		removeCookie:removeCookie,
		quealert:quealert,
		bubblingSort:bubblingSort,
		highSort:highSort
	}
})