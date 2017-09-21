$(function(){
	$(".head_ri3").hoverDelay({
		   hoverEvent: function(){
             $(".head_ri3 div").slideDown(600);
            },
            outEvent: function(){
                $(".head_ri3 div").slideUp(50);
            }
	})
	setInterval(function(){			
					
				$("#jiantou").animate({"margin-top":"38px"},600).delay(100);
				$("#jiantou").animate({"margin-top":"18px"},600).delay(100);
			},1200)

	$(window).scroll(function(){
		if($(window).scrollTop()>=800){
			$(".xuanfu").css({"display":"block"});
		}
		else{
			$(".xuanfu").css({"display":"none"});
		}
		// console.log($(window).scrollTop())
	})
		 var y=0;
		setInterval(function(){
			y=y-52;
			if(y==-156){y=0;
				$(".head_ri2 div").css({"top":0});
			}else{
				$(".head_ri2 div").animate({"top":y+"px"},1000)
			
			}
			
		},2000)

	$("#jiantou").click(function(){
		console.log($(window).scrollTop())
		$("body").animate({"scrollTop":1000},1000)
	})
})
