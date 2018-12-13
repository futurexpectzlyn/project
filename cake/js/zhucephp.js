function $(srt) {
    if (srt.charAt(0) == "#") {
        return document.getElementById(srt.substring(1));
    } else if (srt.charAt(0) == ".") {
        return document.getElementsByClassName(srt.substring(1));
    } else {
        return document.getElementsByTagName(srt);
    }
}
// 和数据库连接
window.onload = function(){
	$("#phone").onblur = function(){
		let xhr = new XMLHttpRequest();
		xhr.open("get","zhuce2.php?phone"+this.value,true);
		/*xhr.onreadystatechange = function(){
			if(xhr.readyState == 4 && xhr.status ==200){
				let str = xhr.responseText;
				if(str=="0"){
						$("#phoneSpan").style.color = "green";
						$("#phoneSpan").innerHTML = " 可以使用";
					}else{
						$("#phoneSpan").style.color = "red";
						$("#phoneSpan").innerHTML = "该用户名已被注册";
					}
				}
			}
			xhr.send();
		}

	}*/

		xhr.onreadystatechange = function(){
				if(xhr.readyState ==0 && xhr.status==200){
					if(xhr.responseText =="0"){
						$('#phoneSpan').style.color ="green";
						$('#phoneSpan').innerHTML = "该用户可以使用";
					}else{
						$('#phoneSpan').style.color ="red";
						$('#phoneSpan').innerHTML = "该用户名已被注册";
				}
				}
			}
			xhr.send();
		}
	}
