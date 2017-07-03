/******* tools.js Begin  *******/

var __srvUrl='http://test.donglele.com/api/';
__srvUrl='https://api.douban.com/'

var xhr={
	get: function (url, data, fn){
		this.send(url, data, fn, 'get');
	},
	post: function (url, data, fn) {
		this.send(url, data, fn, 'post');
	},
	format:function(data){
		var arr = [];
		for (var i in data) { arr.push(encodeURIComponent(i) + "=" + encodeURIComponent(data[i])); }
		arr.push(("v=" + Math.random()));
		return arr.join("&");
	},
	send:function(url, data, fn, t){
		var obj = new XMLHttpRequest(), g=t=='get';
		obj.open(t||'get', __srvUrl+url+( g?('?'+this.format(data)):'' ), true);
		obj.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		obj.onreadystatechange = function () {
			if (obj.readyState == 4 && (obj.status == 200 || obj.status == 304)) { fn.call(this, JSON.parse(obj.responseText)); }
		};
		obj.send(g?null:this.format(data));
	}
};
/*获取url值*/
function getups(n){
	console.time()
	var url=n||location.search,i=0; url=url.indexOf("?")>-1?url.substring(1).replace(/\?/g,"&").split("&"):"";
	var ups={},lg=url.length,p;
	for(;i<lg;i++){ p=url[i].split("="); ups[p[0]]=decodeURIComponent(p[1]); };
	console.timeEnd()
	return ups;
}
var local={
	get:function(name){
		var o=localStorage.getItem(name)||"";
		if( (o==="") || (o.indexOf("{")<0) && (o.indexOf("[")<0) ){ return o; }else{ return JSON.parse(o); }
	},
	set:function(name,val){
		val=typeof(val)==="object"?JSON.stringify(val):val; localStorage.setItem(name,val);
	},
	clear:function(name){
		localStorage.removeItem(name);
	}
};
function _loadInfo(){
	return local.get("loadInfo");
}
/*token*/
function _token(){
	return _loadInfo().token||"";
}
function _eai(){
	return getups().eai||1
}
function returns(r){
	if(r.result){
		return r
	}else{
		if(r.resultcode==='NotLogin'){
			location.href="login.html?eai="+_eai()
		}else{
			alert(r.resultstring)
		}
	}
}

/******* tools.js by-TEEMO End *******/