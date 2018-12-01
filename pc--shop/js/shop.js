new Vue({
     el: '#app',
     data: {
         productList: [
             {
                 'name': '男士双搭扣皮鞋 棕色 意大利',
                 'color':'棕色',
                 'price':5500,
                 'img':'images/shop/shore1.jpg',
                 'isRed': false,
             },
             {
                 'name': '男士户外运动透气保暖硬壳夹克外套',
                 'color':'黑色',
                 'price': 3200,
                 'img':'images/shop/shore2.jpg',
                 'isRed': false,
             },
             {
                 'name': '女士系带裙 红色 美国',
                 'color':'红色',
                 'price': 3700,
                 'img':'images/shop/shore3.jpg',
                 'isRed': false,
             },
         ],
          total: 0, //总价
          name: '', //添加的商品名称
          price: '',//添加商品的价格
          keyword: '', //搜索商品的关键字
          checked: [], //存入要删除商品的index
     },
     methods: {
         select(product){            
            /*  if(product.isRed==false){//方法一:
                product.isRed = true;
             }else{
                product.isRed = false;
             } */
            // console.log(product.price);
             product.isRed = !product.isRed; //方法二
            
            /* if(product.isRed){//求总价: 方法一
                this.total += parseInt(product.price);
            }else{
                this.total -= parseInt(product.price);
            } */
         },
         sum(){
             let sum = 0;
             this.productList.forEach(function(val, index){
                 if(val.isRed){
                     sum += parseInt(val.price);
                     console.log(index, val.name, val.price, val.isRed);
                 }                 
             })
             return sum
         },
         add(){
             this.productList.push({
                 name: this.name,
                 price: this.price,
                 color: this.color,
                 img: this.img,
                 'isRed': false,
             });
             this.name = '',
             this.price = 0,
             this.color=''
             this.img='',
             console.log(this.productList);
         },
         search(){
             let arr=this.productList.filter((val, index)=>{
                // console.log(val.name.includes(this.keyword));
                 if(val.name.includes(this.keyword)){
                    // console.log(val.name);
                     return val;
                 }
             });
             this.productList = arr;
            //console.log(this.keyword);
         },
         del(index){
             this.productList.splice(index,1);//splice(删除位置,删除数量)
             //console.log(this.productList[index].name);
         },
         delAll(){
             //console.log(this.checked);
             let arr = this.productList.filter((val, index)=>{
                 /* if(this.checked.includes(index)){
                    console.log(index, val.name);
                 } */
              
                 if(!this.checked.includes(index)){
                    console.log(index, val.name);
                    return val;  
                 }                               
             });
             this.productList = arr;
             this.checked = []; //清除选中标记
         }
     },
     mounted(){
         
 /*加购物车*/
 var oNum = document.getElementById("val");
 var oAddMin = document.getElementById("Add").getElementsByTagName("a")[0];
 var oAddMax = document.getElementById("Add").getElementsByTagName("a")[1];
 var num = oNum.value;
 /*尺寸*/
//  var oSize = document.getElementById("size").getElementsByTagName("em");
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
     oNum.value = num;
 };
     }
 });

/*--------------------导航定位到页面上部----------------------*/
var oTop = document.getElementById("fixedTop");
    window.onscroll = function(){
        var scrollTop = document.documentElement.scrollTop;
        console.log(scrollTop);
        if(scrollTop>3050){
            body.style.transition="2s all";

        }else if(scrollTop>300){
            oTop.style.display = "block";
            body.style.transition="2s all";
            
        }else{
            oTop.style.display = "none";
            body.style.transition="2s all";
        }       
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

