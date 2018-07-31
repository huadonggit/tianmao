function yidong(n){
var F1=$(".first-one")[n];
var left=$(".left1")[n];
var right=$(".right1")[n];
var t=setInterval(move1,2000)
        function move1(){
            animate(F1,{left:-190},1000,
                function(){ 
                flag1=true; 
                //获得第一个元素
                var dd=getFirst(F1);
                F1.appendChild(dd)
                //将left调到0
                F1.style.left="0"
            })
        }
         left.onmouseover=right.onmouseover=function(){
            clearInterval(t)
        }
        left.onmouseout=right.onmouseout=function(){
            t=setInterval(move1,2000)
        }
        var flag1=true,flag2=true;
        left.onclick=function(){
            if(flag1){
                flag1=false;
                move1()
      }
  }  
  right.onclick=function(){
            if(flag2){
                flag=false;
                var first=getFirst(F1);
                var last=getLast(F1);
                addBefore(last,first)
                F1.style.left="-190px"
                animate(F1,{left:0},1000,function(){
                    flag2=true;
                })

            }
       
    }
    }