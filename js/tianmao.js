 $(function(){
  /*心形浮动的标题*/
	var aa=$('.centers');
	var bb=$('.center1');
	
	for (var i = 0; i < aa.length; i++) {
		aa[i].index=i;
		aa[i].onclick=function(){
			for (var j = 0; j < aa.length; j++) {
				bb[j].style.display="none";
				aa[j].style.fontWeight="lighter";
				aa[j].style.color="#8F8F8F";
				aa[j].style.textDecoration="none"
			};
			bb[this.index].style.display="block";
			aa[this.index].style.fontWeight="bold";
			aa[this.index].style.color="#000";
			aa[this.index].style.textDecoration="underline";
		}
	};
 
  /*导航栏大图*/
	
	
	var color=["e3e3e3","0481de","fcaf47","9ed31f","a5c301","fef3ef","f1dc69","79b0e6","f1ad30","545eb5","efe9f5","e5d6c1","c6e5f7","f74167","e5d4c4","f4e2ca"];
	
  /*心形浮动*/
  var images=$('.centerimg');
  var xins=$('.centerxin');
  for (var i = 0; i < images.length; i++) {
      images[i].index=i;//没加[i]
  	images[i].onmouseover=function(){
  		for (var j = 0; j < images.length; j++) {
  	    xins[j].style.display="none";    		
  		};
  		xins[this.index].style.display="block";    		
  	}
  	images[i].onmouseout=function(){
  			xins[this.index].style.display="none";   		
  	}
  };
  /*轮播图*/
  var imgbox=$(".navpic")[0];
  var imgs=$("div",imgbox);
  var btnbox=$(".navleft")[0];
  var btns=$("div",btnbox);
  var bigbox=$('.navbox')[0];
  for (var x = 0; x <btns.length; x++) {
    btns[x].index=x;
    btns[x].onmouseover=function(){
  	  clearInterval(t)
      for (var y = 0; y < imgs.length; y++) {
        imgs[y].style.opacity="0";
        // btns[y].style.background="red"
        btns[y].style.background="#444";
				btns[y].style.opacity="1";
      };
      // imgs[this.index].style.opacity="1";
      animate(imgs[this.index],{opacity:1},50)
      // this.style.background="blue"
      this.style.background="#444"
      this.style.opacity="0.5";
      bigbox.style.background="#"+color[this.index];
    }
    btns[x].onmouseout=function(){
      t=setInterval(move,1500);
      num=this.index+1;	
    }
  };
  var num=1;
  var t=setInterval(move,1500);
  function move(){
    if(num>15){
      num=0;
    }	
    for (var j = 0; j < imgs.length; j++) {
      imgs[j].style.opacity="0";
      btns[j].style.background="#444";
			btns[j].style.opacity="1";
    };
    animate(imgs[num],{opacity:1},50)
    btns[num].style.background="#444"
    btns[num].style.opacity="0.5";
    bigbox.style.background="#"+color[num];
    num++;
  }
   /*nav跑马灯*/
  var circlebox=$(".navcirclebox")[0];
  var circle=$("circle");//var circle=$("div",circlebox);
  for (var z = 0; z <circle.length; z++) {
    circle[z].index=z;
    circle[z].onmouseover=function(){
      clearInterval(t)
      for (var j = 0; j < imgs.length; j++) {
        imgs[j].style.opacity="0";
        circle[j].style.background="red";
        btns[j].style.background="#444";
        btns[j].style.opacity="1";
      };
      imgs[this.index].style.opacity="1";
      animate(circle[this.index],{opacity:1},1500)
      this.style.background="blue"
    }
    circle[z].onmouseout=function(){
      t=setInterval(move,1500);
      num=this.index+1; 
    }
  };

  /*二维码弹出*/
  var gdpic2=$(".gudingpic3")[0];
  var gdword2=$(".gudingword3")[0];
  gdpic2.onmouseover=function(){
      gdword2.style.display="block";
  }
  gdpic2.onmouseout=function(){
      gdword2.style.display="none";
  }
   /*top二维码弹出*/
  var gdpic3=$(".tianmaobao5")[0];
  var gdword3=$(".phoneword3")[0];
  gdpic3.onmouseover=function(){
      gdword3.style.display="block";
  }
  gdpic3.onmouseout=function(){
      gdword3.style.display="none";
  }
   /*我的淘宝弹出*/
  var gdpic1=$(".tianmaobao1")[0];
  var gdword1=$(".phoneword1")[0];
  gdpic1.onmouseover=function(){
      gdword1.style.display="block";
      gdpic1.style.display="block";
  }
  gdpic1.onmouseout=function(){
      gdword1.style.display="none";
  }
  /*收藏夹弹出*/
  var gdpic4=$(".tianmaobao1")[1];
  var gdword4=$(".phoneword1")[1];
  gdpic4.onmouseover=function(){
      gdword4.style.display="block";
  }
  gdpic4.onmouseout=function(){
      gdword4.style.display="none";
  }
  /*商家支持弹出*/
  var gdpic8=$(".tianmaobao3")[0];
  var gdword8=$(".phoneword8")[0];
  gdpic8.onmouseover=function(){
      gdword8.style.display="block";
  }
  gdpic8.onmouseout=function(){
      gdword8.style.display="none";
  }
  /*网站导航弹出*/
  var gdpic9=$(".tianmaobao4")[0];
  var gdword9=$(".phoneword9")[0];
  gdpic9.onmouseover=function(){
      gdword9.style.display="block";
  }
  gdpic9.onmouseout=function(){
      gdword9.style.display="none";
  }

  /*搜索滚动然后定位*/
  var nav=$(".scrollseach")[0];
  var scrsimg=$(".scrsimg")[0];
  var scrsc=$(".scrsc")[0];
  var top="731";//无Px
  // 出现两次不行window.onscroll=function(){
  window.onscroll=function(){
    var obj=document.documentElement.scrollTop!=0?document.documentElement:document.body;
    if(obj.scrollTop>=top){
      nav.style.display="block";//无引号不对block
      scrsimg.style.display="block";
      scrsc.style.display="block";
    }
    if(obj.scrollTop<top){
      nav.style.display="none";
      scrsimg.style.display="none";
      scrsc.style.display="none";
    }
  }

  /*滚动楼层 定位出现*/
  var jump=$(".jump")[0];
  var floors=$(".F1");
  var floor1=getTop(floors[0]);
  window.onscroll=function(){
    var obj=document.documentElement.scrollTop!=0?document.documentElement:document.body;
    if(obj.scrollTop>=top){
      nav.style.display="block";//无引号不对block
      scrsimg.style.display="block";
      scrsc.style.display="block";
    }
    if(obj.scrollTop<top){
      nav.style.display="none";
      scrsimg.style.display="none";
      scrsc.style.display="none";
    }
    var obj=document.documentElement.scrollTop!=0?document.documentElement:document.body;
    if(obj.scrollTop>=floor1){
      jump.style.display="block";//无引号不对block
    }
    if(obj.scrollTop<floor1){
      jump.style.display="none";
    }
  }
  /*滚动楼层 滚动*/
  var btnsfl=$("div",jump);//!
  for (var i = 0; i < btnsfl.length; i++) {
    btnsfl[i].aa=floors[i].offsetTop;
      btnsfl[i].onclick=function(){
        var obj=isCan();
        function isCan(){
          return document.documentElement.scrollTop!=0?document.documentElement:document.body;
        }
        // alert(obj);
        /*var num=this.aa;*/
        animate(obj,{scrollTop:this.aa},500);
      }
  };

  /*F1左滚动*/
  var ti1;
  var inner=$(".F1lceninner")[0];
  //var ti=setInterval(fmove,3000);
  /*function fmove(){
    animate(inner,{left:-191},1000,function(){
      var first=getChilds(inner,true)[0];//里面有太多div不行，var one=$("div",inner); 
      inner.appendChild(first);
      inner.style.left=0;
      // console.log(1);
    }) 
  }*/
  // ti1=setInterval(fmove(),3000);
  // function fmove(){
  //   animate(inner,{left:"-191px"},3000,function(){
  //     var first=inner.firstChild;//里面有太多div不行，var one=$("div",inner); 
  //     inner.appendChild(first);
  //     inner.style.left="0px";
  //     // console.log(1);
  //   }) 
  // }
  // var left=$(".dingwei1")[0];
  // var right=$(".dingwei2")[0];
  // left.onmouseover=right.onmouseover=function(){clearInterval(ti1);}
  // left.onmouseout=right.onmouseout=function(){
  //      ti1=setInterval(fmove,1000)}
  // left.onclick=function(){
  //   ti1=setInterval(fmove(),1000)
  // }
  // right.onclick=function(){
  //   var last=getLast(inner);
  //   var first=getFirst(inner);
  //   addBefore(last,first);
  //   inner.style.left="-191px";
  //   animate(inner,{left:"0"},1000)
  // }
  /*ti=setInterval(fmove,1000);
  function fmove(){
    animate(inner,{left:"-191px"},3000,function(){
      var first=inner.firstChild;//里面有太多div不行，var one=$("div",inner); 
      inner.appendChild(first);
      inner.style.left="0px";
      // console.log(1);
    }) 
  }
  var left=$(".dingwei1")[0];
  var right=$(".dingwei2")[0];
  left.onmouseover=right.onmouseover=function(){clearInterval(ti);}
  left.onmouseout=right.onmouseout=function(){
       ti=setInterval(fmove,1000)}
  left.onclick=function(){
    ti=setInterval(fmove,1000)
  }
  right.onclick=function(){
    var last=getLast(inner);
    var first=getFirst(inner);
    addBefore(last,first);
    inner.style.left="-191px";
    animate(inner,{left:"0"},1000)
  }*/
 /* var left=$(".dingwei1")[0];
  var right=$(".dingwei2")[0];
  left.onmouseover=function(){clearInterval(ti);}
  left.onmouseout=function(){
       ti=setInterval(fmove,1000)}
  left.onclick=function(){
    ti=setInterval(fmove,1000)
  }
  
 
  right.onmouseover=function(){clearInterval(ti);}
  right.onmouseout=function(){
       ti=setInterval(fmove,1000)}
  
  right.onclick=function(){
    var last=getLast(inner);
    var first=getFirst(inner);
    addBefore(last,first);
    inner.style.left="-191px";
    animate(inner,{left:"0px"},1000)
  }*/
  // clearInterval(ti);






        /*右固定定位*/
        var ones=$(".gudingpic");
        var twos=$(".gudingword2");
        for (var i = 0; i < ones.length; i++) {
          ones[i].index=i;
          ones[i].onmouseover=function(){
            for (var j = 0; j < twos.length; j++) {
              twos[j].style.right="70";
              twos[j].style.display="none";
            };
            twos[this.index].style.right="35";
            animate(twos[this.index],{right:35},300,Tween.Back.easeIn);
            twos[this.index].style.display="block";
            // twos[this.index].style.right="80";
          };
          ones[i].onmouseout=function(){
            animate(twos[this.index],{right:70,opacity:0.6},150,Tween.Quad.easeIn,function(){//{right:80;opacity:0.6}
              this.style.display="none";/*twos[this.index].style.display="none";*/
            })

            }
         }
})

//     var imgs=getClass('centerimg');
//     var xin=getClass('centerxin')[0];
//     var positionx=[105,235,365,495,625,755,105,235,365,495,625,755105,235,365,495,625,755105,235,365,495,625,755];
//     var positiony=[14,14,14,14,14,14,79,79,79,79,79,79,144,144,144,144,144,144,209,209,209,209,209,209];
//     for (var i = 0; i < imgs.length; i++) {
//         imgs.index=i;
//     	imgs[i].onmouseover=function(){
//     		for (var i = 0; i < positionx.length; i++) {
//     			xin.style.top=0+"px";
//     		    xin.style.left=0+"px";
//     		    xin.style.display="block";    		
//     		};
//     		xin.style.top=positionx[this.index]+"px";
//     		xin.style.left=positiony[this.index]+"px";
//     		xin.style.display="block";    		
//     	}
//     	imgs[i].onmouseout=function(){
//     		for (var i = 0; i < positionx.length; i++) {
//     			// xin.style.display="none";
//     		};   		
//     	}
//     };
// }
// var positionx=[105,235,365,495,625,755,105,235,365,495,625,755105,235,365,495,625,755105,235,365,495,625,755];
// var positiony=[14,14,14,14,14,14,79,79,79,79,79,79,144,144,144,144,144,144,209,209,209,209,209,209];
// 105,14/*12863650,14++130
// 105,195/*++65*/650,195

// e3e3e3 
// 0481de
// fcaf47
// 9ed31f
// a5c301

// fef3ef
// f1dc69
// 79b0e6
// f1ad30
// 545eb5

// efe9f5
// e5d6c1
// c6e5f7
// f74167
// e5d4c4
// f4e2ca

// 






