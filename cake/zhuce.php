<?php 
	header("Content-type:text/html;charset=utf-8");
	// 一、接收
	$phone= $_GET['phone'];
	$vip = $_GET['vip'];
	$vname = $_GET['vname'];
	$passw = $_GET['passw'];
	// 二、处理
	// 连接服务器
	$conn = mysql_connect('localhost','root','root');
	if(!$conn){
		die('连接失败！');
	}else{
		mysql_select_db('shujuku',$conn);
		//传输数据
		//执行sql语句
		// $sqstr = "insert into vcake values('".$phone."','".$vip."','".$vname."','".$passw."')";
		$sqlstr="insert into vcake(phone,vip,vname,passw)values('$phone','$vip','$vname','$passw')";
		$result = mysql_query($sqlstr,$conn);
		//关闭数据库
		mysql_close($conn);
		
		if(!$result){
			echo "注册失败，请重新<a href='zhuce.html'>注册</a>";
		}else{
			echo "
			<script>
			alert('注册成功');
               window.location.href='denglu.html';
             </script>";
		}
	}
 ?>