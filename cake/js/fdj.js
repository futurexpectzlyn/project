$(document).ready(function(){
	// 定义图像的实际尺寸、
	var native_width = 0;
	var native_height = 0;
	// 首先、我们应该获得图像的实际尺寸
	$('.small').load(function(){
		// 这里我们需要重新创建一个和之前相同的图像对象、
		// 因为我们不能直接获得图像尺寸的宽高、
		// 因为我们在HTML里已经指定了图片宽度为200px、
		var img_obj = new Image();
		img_obj.src = $(this).attr('src');
		native_width = img_obj.width;
		native_height = img_obj.height;
		// mousemove()
		$('.magnify').mousemove(function(e){
			// 获得鼠标X轴和Y轴的坐标
			//  先获得magnify相对与document的定位position
			var magnify_offset = $(this).offset();
			// 这里我们用鼠标相对与文档的位置减去鼠标相对于magnify这个人容器的位置 来得到鼠标的位置
			var mouse_x = e.pageX - magnify_offset.left;
			var mouse_y = e.pageY - magnify_offset.top;
			if( mouse_x > 0 && mouse_y > 0 && mouse_x < $(this).width() && mouse_y < $(this).height() ){
				$('.large').fadeIn(100);
			}else{
				$('.large').fadeOut(100);
			}
			if($('.large').is(':visible')){
				var rx = Math.round(mouse_x/$('.small').width()*native_width - $('.large').width()/3)*-1;
				var ry = Math.round(mouse_y/$('.small').height()*native_height - $('.large').height()/3)*-1;
				var bgp = rx + 'px ' + ry + 'px';
				// 现在我们应该来写放大镜跟随鼠标的效果、
				// 放大镜移动的位置 相对于文档的位置 减去 放大镜相对于放大这个层的offset的位置、
				// 再减去放大镜宽高的一半、保证放大镜的中心跟随鼠标
				var gx = mouse_x - $('.large').width()/3;
				var gy = mouse_y - $('.large').height()/3;
				$('.large').css({
					'left':gx,
					'top':gy,
					'backgroundPosition':bgp
				})
			}
		})
	})
})