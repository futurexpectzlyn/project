
/*功能:各种方法获取节点
参数:选择器
返回值: 节点*/
function $(str) { //#id  .class  tag
	if(str.charAt(0) == "#") { //'#a1'
		return document.getElementById(str.substring(1));
	} else if(str.charAt(0) == ".") { //.class
		return document.getElementsByClassName(str.substring(1));
	} else {
		return document.getElementsByTagName(str);
	}
}

//【功能】阻止事件的默认行为
//【参数】【object】event对象
//【返回】无
function preventDefault(e){
	if(e.preventDefault){
		e.preventDefault();
	}else{
		e.returnValue = false;
	}
}

//【功能】绑定事件的函数
//【参数】
//1、[object]DOM对象:domObj
//2、[string]事件类型:type (不含on)
//3、[function]函数（事件对应的函数）
//4、[bool]是否冒泡
//【返回】无
function addEvent(domObj,type,func,isBuHuo){
	if(domObj.addEventListener){	//其它主流浏览器，DOM2级
		domObj.addEventListener(type,func,isBuHuo);		
	}else if(domObj.attachEvent){	//是IE浏览器，IE级
		domObj.attachEvent("on"+type,func);
	}else{//DOM0级
		domObj["on"+type] = func;
	}
}

//【功能】阻止事件冒泡
//【参数】[object]event对象
//【返回】无
function stopPropagation(e){
	if(e.stopPropagation){
		e.stopPropagation();
	}else{
		e.cancelBubble = true;
	}
}

//功能：获取某个DOM元素的样式属性的兼容性写法
//参数：dom元素，样式属性名
//返回值：样式属性的值

function getStyle(domObj,attr){
	if(domObj.currentStyle){//domObj.currentStyle如果能够正确获取到，那就真
		return domObj.currentStyle[attr];//当对象的属性名是变量时，用方括号而不是点。
	}else{
		return window.getComputedStyle(domObj)[attr];
	}	
}

