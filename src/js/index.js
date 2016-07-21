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
			
	$(function(){
			var index;
		$('.contentLeft').on('mouseenter','li',function(){
			index=$(this).index();
			
			var $arrow=$('<div/>').addClass('arrow');
			var $inner=$('<div/>').addClass('arrow inner');
			$arrow.appendTo($(this));
			$inner.appendTo($(this));
			$(this).removeClass('rightArrow');
			$('.details').show().children('li').hide().eq(index).show();
		}).on('mouseleave','li',function(){
			$(this).addClass('rightArrow').find('div').remove();
			$('.details').hide();
		});
		var $contentLeft;
		$('.details').on('mouseenter',function(){
			console.log(index);
			$contentLeft=$('.contentLeft').children('li').eq(index)
			var $arrow=$('<div/>').addClass('arrow');
			var $inner=$('<div/>').addClass('arrow inner');
			$arrow.appendTo($contentLeft);
			$inner.appendTo($contentLeft);
			 $contentLeft.removeClass('rightArrow');
			$(this).show();
		}).on('mouseleave',function(){
			$contentLeft.addClass('rightArrow').find('div').remove();
			$(this).hide();
			
		});
	})
		
			
		
			
		
	
	

