$(function () {
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

    /*页脚 用户注册*/
    $(".off_footer").click(function(){
        $("#last_footer").hide();
    });

    /*main*/
    
    /*nav导航*/
})