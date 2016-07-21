$(function(){
	$('.changeOpacity').on('mouseover','img',function(){
		$(this).animate({opacity:0.7},200,function(){
			$(this).animate({opacity:0.8},100);
		})
	}).on('mouseout','img',function(){
		$(this).animate({opacity:1},100);	
	});
	//登录弹窗
	$('.head_1').on('mouseover',function(){
		$(this).addClass('head_login').css('color','#000').next('ul').css('display','block');
	}).on('mouseout',function(){
		$(this).removeClass('head_login').css('color','#999999').next('ul').css('display','none');
	});
	$('.login').on('mouseover',function(){
		$(this).css('display','block').prev('a').addClass('head_login').css('color','#000');
	}).on('mouseout',function(){
		$(this).css('display','none').prev('a').removeClass('head_login').css('color','#999999');
	});
	//邦购弹窗
	$('.mybg').on('mouseover',function(){
		$(this).addClass('head_login').css('color','#000').next('ul').css('display','block');
	}).on('mouseout',function(){
		$(this).removeClass('head_login').css('color','#999999').next('ul').css('display','none');
	});
	$('.myMessage').on('mouseover',function(){
		$(this).css('display','block').prev('a').addClass('head_login').css('color','#000');
	}).on('mouseout',function(){
		$(this).css('display','none').prev('a').removeClass('head_login').css('color','#999999');
	});
	
	//APP下载弹窗
	$('.head_app').on('mouseover',function(){
		$(this).addClass('head_login').css('color','#000').next('div').css('display','block');
	}).on('mouseout',function(){
		$(this).removeClass('head_login').css('color','#999999').next('div').css('display','none');
	});
	$('.appCode').on('mouseover',function(){
		$(this).css('display','block').prev('a').addClass('head_login').css('color','#000');
	}).on('mouseout',function(){
		$(this).css('display','none').prev('a').removeClass('head_login').css('color','#999999');
	});
	//微信弹窗
	$('.weichat').on('mouseover',function(){
		$(this).next('div').css('display','block');
	}).on('mouseout',function(){
		$(this).next('div').css('display','none');
	});
	$('.weiCode').on('mouseover',function(){
		$(this).css('display','block');
	}).on('mouseout',function(){
		$(this).css('display','none');
	});
	//搜索框提醒信息
	$('#search').on('focus',function(){
	
		if($(this).val()=='只为特别的你'){
		   $(this).val('');
		}
	}).on('blur',function(){
		if($(this).val()==''){
			$(this).val('只为特别的你');
		}
	});
	//图片轮播
	var $showImg=$('.showImg');
			var $picList=$('.picList');
			var index=1;
			//悬停更换图片
			$picList.on('mouseenter','a',function(){
				index=$(this).index();
				console.log(index);
				showChange();
				clearInterval(myTime);
				//$(this).css('background','#fff');
			}).on('mouseleave','a',function(){    //划出继续播放
				//$(this).css('background','');
				myTime=setInterval(function(){
					index++;
					if(index>5){
						index=0;
					}
					showChange();
				},2000);
			});
			$showImg.on('mouseenter','img',function(){
				//index=$(this).index();
				console.log(index);
				//showChange();
				clearInterval(myTime);
				//$(this).css('background','#fff');
			}).on('mouseleave','img',function(){    //划出继续播放
				//$(this).css('background','');
				myTime=setInterval(function(){
					index++;
					if(index>5){
						index=0;
					}
					showChange();
				},2000);
			});
			//图片显示
			function showChange(){
				//重置所有样式
				
				$showImg.find('img').fadeOut('fast').eq(index).fadeIn('fast');
				//$showImg.find('img').eq(index).show().animate({opacity:0.7});//.animate({opacity:1},200);
				
				//显示选中样式
				//$showImg.find('img').eq(index).show().animate({left:0});
			
			}
			//自动播放图片
			var myTime=setInterval(function(){
					showChange();
					index++;
					if(index>5){
						index=0;
					}
			},2000);
	
});
		