function getClass(selector,obj){//?
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


/*表格中获取和写入，获取或设置一个元素*/
function getText(obj,val){
  if (val==undefined) {
    if (obj.textContent) {
      return obj.textContent;
    }else{
      return obj.innerText;
    }
  }else{
    if (obj.textContent) {
      obj.textContent=val;
    }else{
      obj.innerText=val;
    }
  }

}
/*通过类名获取元素 兼容性的获取一个元素的css样式*/
function getStyle(obj,pro){//obj,attr
  if (obj.currentStyle) {
    return obj.currentStyle[pro];
  }else{
    return window.getComputedStyle(obj,null)[pro];
  }
}

/*通过Id,类和标签获取*/
function $(selector,obj){
    var obj=obj||document;
    if(typeof selector=="string"){
        selector=selector.replace(/^\s*|\s*$/g,"");  
        if(selector.charAt(0)=="#"){
            return obj.getElementById(selector.slice(1));
        }else if(selector.charAt(0)=="."){
                  return getClass(selector.slice(1),obj);
              }else if(/^[a-z|1-6]{1,10}$/g.test(selector)){
                        return obj.getElementsByTagName(selector);
                    }
    }else if(typeof selector=="function"){
              window.onload=function(){
              selector();
              //}
              }
          }
}