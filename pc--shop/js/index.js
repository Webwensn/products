window.onload = function(){
    /*------------------------Banner轮播图-----------------------*/ 
    (function () {
        var oBanner = document.getElementById("banner"),
            oImg = document.getElementById("banner").getElementsByTagName("img"),
            oLeft = document.getElementById("bleft"),
            oRight = document.getElementById("bright"),
            oLi = document.getElementById("banner").getElementsByTagName("li");
            now = 0, //动态控制(图片/li)数组下标，完成图片切换
            timer = null;

        function show() {
            for (var i = 0; i < oImg.length; i++) {
                oImg[i].className = ""; //图片
                oLi[i].className="";
            }
            oImg[now].className = "on";
            oLi[now].className = "on";
        }

        function play() {
            show();
            now++;
            if (now == oImg.length) {
                now = 0;
            }
        }

        function go() { //主函数
            timer = setInterval(play, 1500);
        }
        go();

        oBanner.onmouseover = function () {
            clearInterval(timer);
        }
        oBanner.onmouseout = function () {
            go();
        }

        oLeft.onclick = oRight.onclick = function () {
            if (this == oLeft) {
                now--;
                if (now == -1) now = oImg.length - 1;
            } else {
                now++;
                if (now == oImg.length) now = 0;
            }
            show();
        }

    })();
    
    /*--------------------------内容区轮播图----------------------------*/ 
    (function(){
        var oCon = document.getElementById("newCon"),
        oLi = document.getElementById("newCon").getElementsByTagName("li"),
        oBtns = document.getElementById("play").getElementsByTagName("span"),
        oLeft = document.getElementById("btnLeft"),
        oRight = document.getElementById("btnRight"),
        now = 0, //动态控制(图片/li)数组下标，完成图片切换
        timer = null;


    for (var i = 0; i < oBtns.length; i++) { //li按钮组1 2 3 4
        oBtns[i].index = i;
        oBtns[i].onmouseover = function () {
            now = this.index; //建立li按钮组与图片组之间一一对应的关系。
            play();
        }
    }

    function show() {
        for (var i = 0; i < oLi.length; i++) {
            oLi[i].className = "";
            oBtns[i].className = "";
        }
        oLi[now].className = "on";
        oBtns[now].className = "on1";
    }

    function play() {
        show();
        now++;
        if (now == oLi.length) {
            now = 0;
        }
    }

    function go() { //主函数
        timer = setInterval(play, 2000);
    }
    go();

    oCon.onmouseover = function () {
        clearInterval(timer);
    }
    oCon.onmouseout = function () {
        go();
    }
    oLeft.onclick = oRight.onclick = function () {
        if (this == oLeft) {
            now--;
            if (now == -1) now = oLi.length - 1;
        } else {
            now++;
            if (now == oLi.length) now = 0;
        }
        show();
    }
    })();

    
}
/*--------------------搜索框，点击关闭---------------------*/ 
var oSearch = document.getElementById("search_text");
    oSearch.onfocus=function(){
    this.style.outline="none"; 
    }
/*--------------------返回顶部---------------------*/ 
var oTop = document.getElementById("fixedTop");
    window.onscroll = function(){
        var scrollTop = document.documentElement.scrollTop;
        console.log(scrollTop);
        if(scrollTop>650){
            oTop.style.display = "block";
        }else{
            oTop.style.display = "none";
        }       
    }
