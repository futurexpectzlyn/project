 function $(str) { //#id  .class  tag
    if(str.charAt(0) == "#") { //'#a1'
        return document.getElementById(str.substring(1));
    } else if(str.charAt(0) == ".") { //.class
        return document.getElementsByClassName(str.substring(1));
    } else {
        return document.getElementsByTagName(str);
    }
}

 //减号按钮
     var btn1=$(".btnl");
     //加号按钮
    var btnr=$(".btnr");
    //数量
    var txt=$(".txt");
    //单价
    var prices=$(".prices");
    //单价商品的总价
    var smallprice=$(".btnCount");
    //所有商品的总价
    var money=$(".money")[0];
    //
    var totta=0;
    //全选按钮
    var btn=$(".btn")[0];
    //反选按钮
    var btnf=$(".btnf")[0];
    //单选框
    var box=$(".check");
    //删除
    var btndelte=$(".delete");
    //tr的名字
    var trde=$(".tabTr");
    //1.先获取数量的左右按钮
    //利用for循环来遍历所有按钮
    for(var i=0;i<btn1.length;i++){
        //获得每一个按钮的索引 由于按钮 数量文本框的索引值都是相同的 因而通过索引对索引来改变数量
        btn1[i].index=i;
        btn1[i].onclick=function(){
            var val=txt[this.index].value;
            val--;
            if(val<=1){
                val=1;
            }
            txt[this.index].value=val;
            addsmall(this.index);
            tottalprices();
        };
        btnr[i].index=i;
        btnr[i].onclick=function(){
            var val=txt[this.index].value;
            val++;
            txt[this.index].value=val;
            addsmall(this.index);
            tottalprices();
        };
        box[i].onclick=function(){//5.当点击box时计算总价
            tottalprices();
        };
        btndelte[i].index=i;
        btndelte[i].onclick=function(){
            alert("是否删除所选商品");
            trde[this.index].remove();//6.删除不要的物品
            for(var k=0;k<trde.length;k++){
                trde[k].index=k;
                btndelte[k].index=k;//更新索引 ：删除一行，索引必须重新赋值
            }
            tottalprices()
        }
    }
    //2.通过数量与prices来计算小计
    function addsmall(index){
         smallprice[index].innerText=(txt[index].value*prices[index].innerText)
    }
    //3.计算总价 让所有小计相加赋值给totta
    function tottalprices(){
        totta=0;
        for(var i=0;i<smallprice.length;i++){
            if(box[i].checked){
                totta+=parseFloat (smallprice[i].innerText);
            }
        }
        money.innerText=totta;
    }
    //4.全选，反选计算总价
    btn.onclick=function(){
      for(var i=0;i<box.length;i++){
        box[i].checked=true;
      }
        tottalprices()
    };
    btnf.onclick=function(){
        for(var i=0;i<box.length;i++){
            box[i].checked=!box[i].checked;
        }
        tottalprices();
    };