window.onload=function(){
    /*--------------------搜索框，点击关闭---------------------*/ 
    var oSearch = document.getElementById("search_text");
        oSearch.onfocus=function(){
        this.style.outline="none"; 
        }
    /*--------------------返回顶部---------------------*/ 
    // var oTop = document.getElementById("fixedTop");
    //     window.onscroll = function(){
    //         var scrollTop = document.documentElement.scrollTop;
    //         console.log(scrollTop);
    //         if(scrollTop>650){
    //             oTop.style.display = "block";
    //         }else{
    //             oTop.style.display = "none";
    //         }       
    //     }

    /*放大镜*/ 
    var oSmall = document.getElementById("small");
    var oSmallImg = document.getElementById("small").getElementsByTagName("img");
    var oDrag = document.getElementById("drag");
    var oMask = document.getElementById("mask"); //遮罩层
    var oBig = document.getElementById("big");
    var oBigImg = oBig.getElementsByTagName("img")[0]; //大图
    
    /*返回顶部/导航固定到顶部*/ 
    var oTop = document.getElementById("fixedTop");
    var oNav=document.getElementById("main_nav");
    window.onscroll = function(){
        var scrollTop = document.documentElement.scrollTop;
        console.log(scrollTop);
        if(scrollTop>3050){
            oNav.style.position = "relative";
            oNav.style.top="0px"
            body.style.transition="2s all";

        }else if(scrollTop>300){
            oTop.style.display = "block";
            oNav.style.position = "fixed";
            oNav.style.top="0px"
            oNav.style.zIndex="99";
            body.style.transition="2s all";
            
        }else{
            oTop.style.display = "none";
            oNav.style.position = "relative";
            oNav.style.top="0px"
            body.style.transition="2s all";
        }       
    }



    oMask.onmousemove = function (ev) { //ev事件对象
        var e = ev || window.event;
        //（一）oDrag在oMask内移动
        var left = e.clientX - oDrag.offsetWidth / 2; //鼠标所在位置，在oDrag居中
        var top = e.clientY - oDrag.offsetHeight / 2;

        //oDrag只能在oMask的范围内移动
        if (left < 0) left = 0; //左
        if (top < 0) top = 0; //上
        var maxX = oSmall.offsetWidth - oDrag.offsetWidth; //右
        if (left > maxX) left = maxX;
        var maxY = oSmall.offsetHeight - oDrag.offsetHeight; //下
        if (top > maxY) top = maxY;

        oDrag.style.left = left + "px";
        oDrag.style.top = top + "px";
        //console.log("mouse:"+ e.clientX, e.clientY);
        //console.log("drag:"+left,top)

        //（二）放大镜效果
        //大图和小图实现等比例
        var scaleX = left / maxX;
        var scaleY = top / maxY;
        /* console.log(scaleX, scaleY); */
        oBigImg.style.left = -scaleX * (oBigImg.offsetWidth - oBig.offsetWidth) + "px";
        oBigImg.style.top = -scaleY * (oBigImg.offsetHeight - oBig.offsetHeight) + "px";
    }
    oMask.onmouseover = function () {
        oBig.style.display = "block"
        oDrag.style.display = "block";
    };
    oMask.onmouseout = function () {
        oBig.style.display = "none"
        oDrag.style.display = "none";
    };
/*加购物车*/
    var oInput = document.getElementById("num").getElementsByTagName("input")[0];
        var oAddMin = document.getElementById("Add").getElementsByTagName("a")[0];
        var oAddMax = document.getElementById("Add").getElementsByTagName("a")[1];
        var num = oInput.value;
        /*尺寸*/
        var oSize = document.getElementById("size").getElementsByTagName("em");
        /*数量变化*/
        oAddMin.onclick = oAddMax.onclick = function () {
            if (this == oAddMin) {
                if (num > 1) {
                    oAddMin.className = "add";
                    num--;
                } else {
                    oAddMin.className = "addno";
                    // oAddMin.style.background="#BEBEBE";
                }
            } else {
                oAddMin.className = "add";

                num++;

            }
            console.log(num);
            oInput.value = num;
        };

        /*尺寸边框*/
        for (let i = 0; i < oSize.length; i++) {
            oSize[i].onclick = function () {
                for(let s=0;s<oSize.length;s++){
                    oSize[s].style.border="2px solid #C7C7C7";
                }
                this.style.border = "2px solid #000";
            }

        };

    /*商品与服务点击切换*/ 
    var oInfor=document.querySelectorAll("#target a");
    oDdSmall=document.getElementsByClassName("dd_small")[0];
    oDdBig=document.getElementsByClassName("dd_big")[0];
    oDd=[oDdSmall,oDdBig];
    for(let i=0;i<oInfor.length;i++){
        oInfor[i].onclick=function(){

            for(let j=0;j<oInfor.length;j++){
                oInfor[j].style.background="#232321";
                oDd[j].style.display="block";
            }
            oInfor[i].style.background="#BEBEBE";
                oDd[i].style.display="none";
        }
    }
    $(function(){
        /*搜索按钮==>弹出框*/
        $("#search").click(function () {
            $(".panel").toggle();
            $("#last_footer").hide();
            $(".off").click(function () {
                $(".panel").hide();
            })
        });
    
        /*鼠标悬停购物车显示*/
        $("#h_shop").mouseover(function () {
            $(".h_shop").slideDown();
        });
        $("#h_shop").mouseleave(function () {
            $(".h_shop").slideUp();
        });

        

        /*返回顶部*/ 
        // $(document).scroll(function(){
        //     var y=$(document).scrollTop();
        //     if(y>300){
        //         $("#fixedTop").css("display","block");
        //         $("#fixedTop").click(function(){
        //             var y = $(document).scrollTop();
        //             function goBack() {
        //                 if (y > 1) {
        //                     y =(y*9.4)/10;
        //                     $(document).scrollTop(y);
        //                 }else{
        //                     clearInterval(timer)
        //                 }
    
        //             };
        //             timer=setInterval(goBack, 50)
        //         })
        //     }else{
        //         $("#fixedTop").css("display","none");
        //     }
        // });
        
    
        /*页脚 用户注册*/
        $(".off_footer").click(function(){
            $("#last_footer").hide();
        });
    
    })
    
    

}