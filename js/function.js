//获取类名
function getClass(selector,obj){
if(typeof selector!="string"){
 return false;
} 
obj=obj||document;           	
  if(obj.getElementsByClassName){
return obj.getElementsByClassName(selector);
}else{
  var alls=obj.getElementsByTagName("*");
  var arr=[];
  for (var i = 0; i < alls.length; i++) {
     if(checkClass(alls[i].className,selector)){
     	arr.push(alls[i]);
     }
  };
  return arr;
}
}
function checkClass(longstr,str){
    var arr=longstr.split(" ");
    for (var i = 0; i < arr.length; i++) {
    	if(arr[i]==str){
    		return true;
    	}
    };
    return false;
}
//获取或设置某一个元素对象
function getText(obj,val){
  if(val==undefined){
    if (obj.textContent) {
      return obj.textContent;
    } else{
      return obj.innerText;
    };
  }else{
    if (typeof obj.textContent=="string") {
     obj.textContent=val;
    } else{
      //IE
     obj.innerText=val;
    };
  }
}
//获取一个元素的css样式
function getStyle(obj,attr){
  if(window.getComputedStyle) {
    return getComputedStyle(obj,null)[attr];
  }else{
    return obj.currentStyle[attr];//attr是字符串，作为属性加方括号
  };
}
//获取Id和标签名
function $(selector,obj){
  var obj=obj||document;
  if (typeof selector=="string"){
    //以防写字符串的时候在前面多谢了空格
    //正则
    //+和*是一样的
    selector=selector.replace(/^\s*|\s*$/g,"");
    if (selector.charAt(0)=="."){
      return getClass(selector.slice(1),obj);
    }else if(selector.charAt(0)=="#"){
      return obj.getElementById(selector.slice(1));
    }else if(/^[a-z|1-6]{1,10}$/g.test(selector)){
      return obj.getElementsByTagName(selector);
    }
}
    else if(typeof selector=="function"){
      // window.onload=function(){
      //   selector();
      // }
      addEvent(window,"load",selector)
    }
}
//获取某个对象中的子元素
//obj 父元素
//type true或false或者为空
    //true 获取元素节点和非空文本
    //false 获取元素节点
    //默认值是false
function getChilds(obj,type){
  type=type==undefined?false:type;
  var aa=obj.childNodes;
  var arr=[];
  for (var i = 0; i < aa.length; i++) {
    if (type==false) {
      if (aa[i].nodeType==1) {
          arr.push(aa[i])
      }
    }else{
      //还要文本节点
      if (aa[i].nodeType==1||(aa[i].nodeType==3&&trim(aa[i].nodeValue)!="")) {
        arr.push(aa[i])
      }
    }
  };
  return arr;
}
//去掉字符串两边的空格
function trim(str){
  return str.replace(/^\s*|\s*$/g,"")
}
//获取某一个对象的第一个子元素
function getFirst(obj){
  return getChilds(obj)[0]
}
//获取某一个对象的最后一个子元素
function getLast(obj){
  return getChilds(obj)[getChilds(obj).length-1]
}
//获取某一个对象的下一个兄弟元素
function getNext(obj){
  var next=obj.nextSibling;
  if (next==null) {
    return null;
  } 
  while(next.nodeType!=1){
    next=next.nextSibling;
    if (next==null) {
      return null;
     }   
  }
  return next;
}
//获取某一个对象的上一个兄弟元素
function getPrevious(obj){
  var pre=obj.previousSibling;
  if (pre==null) {
    return null
  }
  while(pre.nodeType!=1){
    pre=pre.previousSibling;
    if (pre==null) {
      return null;
     }
  }
  return pre;
}
//获取某个对象的父元素
function getParent(obj){
  return obj.parentNode;//return obj.parent; 

}
//将a添加到b的前面
function addBefore(a,b){
  var parent=b.parentNode;
  parent.insertBefore(a,b);
}
//将a添加到b的后面
function addAfter(a,b){
  var next=getNext(b);
  var parent=b.parentNode;
  if (next==null) {
    parent.appendChild(a);
  } else{
    parent.insertBefore(a,next);
  };
}
//删除某个元素节点
function removeObj(obj){
  var parent=obj.parentNode;
  parent.removeChild(obj);
}
//用newobj替换oldobj
function replaceChild(newobj,oldobj){
  var parent=oldobj.parentNode;
  parent.replaceChild(newobj,oldobj)
}
//返回克隆某个对象的结果
//参数bull  true克隆全部  包括内部元素
          //false进克隆节点元素
function cloneObj(obj,bull){
  bull=false||bull;
  return obj.cloneNode(bull);
}
//将obj追加到parent中
function appendObj(parent,obj){
  parent.appendChild(obj);
}

//与浏览器的左边距
function getLeft(obj){
  var newobj=obj.parentNode;
  var left=obj.offsetLeft;
  while(newobj.nodeName!="BODY"){
    if(getStyle(newobj,"position")!="static"){
      left=left+newobj.offsetLeft+parseInt(getStyle(newobj,"borderLeftWidth"));
    }
    newobj=obj.parentNode;
  }
  return left;
}
//与浏览器的上边距
function getTop(obj){
  var newobj=obj.parentNode;
  var top=obj.offsetTop;
  while(newobj.nodeName!="BODY"){
    if(getStyle(newobj,"position")!="static"){
      top=top+newobj.offsetTop+parseInt(getStyle(newobj,"borderTopWidth"));
    }
    newobj=newobj.parentNode;
  }
  return top;
}
/*事件在浏览器中兼容addevent(obj,click,fun)*/
function addEvent(obj,event,fun){
  if(obj.addEventListener){
    obj.addEventListener(event,fun,false)
  }else{
    obj.attachEvent("on"+event,fun)
  }
}
function removeEvent(obj,event,fun){
  if(obj.removeEventListener){
    obj.removeEventListener(event,fun,false)
  }else{
    obj.detachEvent("on"+event,fun)
  }
}
/*与浏览器的边境判断，获取浏览器的宽高*/
function offsetWindow(){
  var obj={};
  obj.width=document.documentElement.clientWidth;
  obj.height=document.documentElement.clientHeight;
  return obj;
}
// offsetWindow().width

/*滚轮滚动*/
function mouseWheel(obj,fun1,fun2){
  if(document.attachEvent){
      obj.attachEvent("onmousewheel",scrollFn); //IE、 opera
      }else if(document.addEventListener){
      obj.addEventListener("mousewheel",scrollFn,false);
      //chrome,safari -webkitdocument.
      obj.addEventListener("DOMMouseScroll",scrollFn,false);
      //firefox -moz-
  }
  function scrollFn(e){
    var ev=e||window.event;
    console.log(ev.detail);
    console.log(ev.wheelDelta);
    if(ev.detail==-3||ev.wheelDelta==120){
      fun1.call(obj);/*fun1(obj);无call弹出window,*/
    }else if(ev.detail==3||ev.wheelDelta==-120){
      fun2.call(obj);
    }
  }
}