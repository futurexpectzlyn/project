
//注册的正则验证
// 会员注册
window.onload = function(){
	// //手机号
	// $("#phone").onblur = function(){
	// 	var reg = /^[1-9]{2}[0-9]{9}$/;
	// 	if(reg.test(this.value)){
	// 		this.nextElementSibling.innerHTML="";
	// 	}else{
	// 		this.nextElementSibling.innerHTML ="手机号只能为11位的纯数字";
	// 	}
	// }
	//会员名
	$("#vipnum").onblur = function(){
		var reg=/^[0-9a-zA-Z]{3,12}$/;
		if(reg.test(this.value)){
			this.nextElementSibling.innerHTML="";
		}else{
			this.nextElementSibling.innerHTML="会员名为数字和字母";
		}
	}
	//姓名
	$("#vname").onblur = function(){
		var reg=/^[\u4e00-\u9fa5]{2,10}$/;
		if(reg.test(this.value)){
			this.nextElementSibling.innerHTML=" ";
		}else{
			this.nextElementSibling.innerHTML="名字只能为汉字";
		}
	}
	//密码
	$("#passw").onblur =function(){
		var reg=/^\w{6,16}$/;
		if(reg.test(this.value)){
			this.nextElementSibling.innerHTML=" ";
		}else{
			this.nextElementSibling.innerHTML="密码为数字、字母、下划线，6-16位";
		}
	}
	//确认密码
	var passw = $("passw").value;
	var heDui = $("heDui").value;
	$("heDui").onblur = function(){
		if(passw !== heDui){
			
		}
	}
}
