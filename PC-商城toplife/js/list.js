/*--------------------搜索框，点击关闭---------------------*/ 
var oSearch = document.getElementById("search_text");
    oSearch.onfocus=function(){
    this.style.outline="none"; 
    }
/*--------------------返回顶部---------------------*/ 
/*--------------------左下角 到底隐藏----------------------*/
/*--------------------导航定位到页面上部----------------------*/
var oTop = document.getElementById("fixedTop");
var oAside = document.getElementById("nav_aside").getElementsByTagName("h3")[0];
var oNav=document.getElementById("main_nav");
    window.onscroll = function(){
        var scrollTop = document.documentElement.scrollTop;
        console.log(scrollTop);
        if(scrollTop>3050){
            oAside.style.display="none";
            oNav.style.position = "relative";
            oNav.style.top="0px"
            body.style.transition="2s all";

        }else if(scrollTop>300){
            oTop.style.display = "block";
            oAside.style.display="block";
            oNav.style.position = "fixed";
            oNav.style.top="0px"
            oNav.style.zIndex="99";
            body.style.transition="2s all";
            
        }else{
            oTop.style.display = "none";
            oAside.style.display="block";
            oNav.style.position = "relative";
            oNav.style.top="0px"
            body.style.transition="2s all";
        }       
    }


    $("h1").on('click', function (e) {
        $("html,body").animate({
            scrollTop: $(window).height()
        }, 1000);
    });
    AOS.init({
        easing: 'ease-out-back',
        duration: 1000
    });

    $("#nav_aside_panel .off").click(function () {
        $("#nav_aside_panel").hide();
    });
    $("#nav_aside h3").click(function () {
        $("#nav_aside_panel").toggle();
    });
    