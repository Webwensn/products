/*=================注册2==================*/ 
/* $(document).ready(
    $("input").on("click",function(){
        $(".no").css("visibility","visible");
        $(".prompt").css("visibility","visible");
    }),
    $("input").on("blur",function(){
        $(".no").css("visibility","hidden");
        $(".prompt").css("visibility","hidden");
    }),
) */

/* window.onload = function(){
(function(){
    
    })();

} */

//  //输入手机号input

//  var oClear=document.getElementById("tel_input").getElementsByTagName("em")[0];
//  //手机号，提示文字
//  var oPhoneVal=document.getElementById("val_tel");
//  //点击按钮进行验证
//  var oBtnVal=document.getElementById("btn_val");
//  var time=60;
//  var oValTrue=document.getElementById("val_complete");
 
 
//  //手机号码验证
//  function checkPhone(){ 
//      var oPhone=oInput.value;
//      if(!(/^1[34578]\d{9}$/.test(oPhone))){ 
//          oPhoneVal.style.color="orange";
//          oPhoneVal.innerHTML="<img src='images/login/val2.jpg'>手机号格式错误，请重新输入"
//          oBtnVal.onclick=function(){
//              oPhoneVal.innerHTML="<p>手机号码格式不正确，请重新输入！</p>";
//              oPhoneVal.style.color="#f00";
//          }
//      }else{
//          oClear.innerHTML="<img src='images/login/ok.jpg'>";
//          oPhoneVal.style.visibility="hidden";
//          //点击发送验证码
//          oBtnVal.onclick=function(){
//              timer=setInterval(function(){
//                  if(time>0){
//                      time--; 
//                      oBtnVal.innerText="("+time+")"+"秒后可重新发送！";
//                      oBtnVal.style.pointerEvents="none";
//                      oBtnVal.style.color="#ccc";
//                      oValTrue.style.visibility="visible";
//                  }else{
//                      clearInterval(timer);
//                      oBtnVal.style.pointerEvents="";
//                      oBtnVal.innerText="重新发送！";
//                      time=60;
//                      oBtnVal.style.color="#333333";
//                  }
//              },1000)
//          }
//      }
//  }
//  oInput.onfocus=function(){
//      oPhoneVal.style.visibility="visible";
//      oClear.style.visibility="visible";
//      oClear.innerText="X";
//  }
//  oInput.onkeyup = function(){
//      checkPhone();
//  }
//  oInput.onblur = function(){
//      checkPhone();
//  }
//  oClear.onclick = function(){
//      oInput.value="";
//  }


var oInput = document.getElementById("main").getElementsByTagName("input");
var oNo = document.getElementById("main").getElementsByTagName("em");
var oPrompt = document.getElementById("main").getElementsByClassName("prompt");
for(let i=0;i<oNo.length;i++){
    oInput[i].onfocus = function(){
        oNo[i].style.visibility="visible";
        oPrompt[i].style.visibility="visible";
    };
    oInput[i].onblur = function(){
        oNo[i].style.visibility="hidden";
        oPrompt[i].style.visibility="hidden";
    };
    oNo[i].onclick = function(){
        oInput[i].value="";
        oInput[i][type=password].value="";
    }
}

