$(function(){
	$.ajax({
		type:"get",
		url:"php/getGoodsList.php",
		async:true,
		success:function(Data){
			let DATA = JSON.parse(Data);
			for(let i=0;i<DATA.length;i++){
				let  $Price = Number(DATA[i]["goodsPrice"]);
				let  $Price1 = $Price+300;
				//添加div
				var $divDom1 = $("<div gId=00"+(i+1)+"></div>");
				$("#sect").append($divDom1);	
				//再div后添加图片
				var $imgDom1 = $("<img src="+DATA[i]["goodsImg"]+"></img>");
				divsDom.append($imgDom);
				//再div后添加div
				var $divDom1_2 = $("<div gId=00"+(i+1)+"></div>");
				divDom1.append($divsDom1_2);
				//再div1_2后添加h1
				var $h1Dmo = $("<h1 gId=00"+(i+1)+"></h1>");
				divDom1_2.append($h1Dmo);
				//爱div1_2后添加p标签
				var $pDmo = $("<p gId=00"+(i+1)+"></p>");
				divDom1_2.append($pDmo);
				//sect后添加第二个div
				var $divDom2 = $("<div gId=00"+(i+1)+"></div>");
				$("#sect").append($divDom2);
				//添加a
				var $aDom = $("<a href='shopping.html'"+DATA[i]["goodsName"]+"></a>");
				$divDom1.append($aDom);
			}			
		},
	});
});





	


	

