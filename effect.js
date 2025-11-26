$(window).load(function(){
	$('.loading').fadeOut('fast');
	$('.container').fadeIn('fast');
});
$('document').ready(function(){
		var vw;
		$(window).resize(function(){
			 vw = $(window).width()/2;
			 vh = $(window).height();
			$('#b1,#b2,#b3,#b4').stop();
			$('#b11').animate({top:vh*0.30, left: vw-210},500);
			$('#b22').animate({top:vh*0.30, left: vw-110},500);
			$('#b33').animate({top:vh*0.30, left: vw-10},500);
			$('#b44').animate({top:vh*0.30, left: vw+90},500);
		});

	// Function to create sparkles (simplified)
	function createSparkles(element, color) {
		for (let i = 0; i < 3; i++) {
			setTimeout(function() {
				const sparkle = $('<div class="sparkle"></div>');
				const rect = element[0].getBoundingClientRect();
				const centerX = rect.left + rect.width / 2;
				const centerY = rect.top + rect.height / 2;
				
				const angle = (Math.PI * 2 * i) / 3;
				const distance = 30;
				const x = Math.cos(angle) * distance;
				const y = Math.sin(angle) * distance;
				
				sparkle.css({
					left: centerX + 'px',
					top: centerY + 'px',
					background: color || 'white',
					'--sparkle-x': x + 'px',
					'--sparkle-y': y + 'px'
				});
				
				$('body').append(sparkle);
				
				setTimeout(function() {
					sparkle.remove();
				}, 1500);
			}, i * 150);
		}
	}

	$('#turn_on').click(function(){
		$('#bulb_yellow').addClass('bulb-glow-yellow');
		$('#bulb_red').addClass('bulb-glow-red');
		$('#bulb_blue').addClass('bulb-glow-blue');
		$('#bulb_green').addClass('bulb-glow-green');
		$('#bulb_pink').addClass('bulb-glow-pink');
		$('#bulb_orange').addClass('bulb-glow-orange');
		$('body').addClass('peach');
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#play').fadeIn('slow');
		});
	});
	$('#play').click(function(){
		var audio = $('.song')[0];
        audio.play();
        $('#bulb_yellow').removeClass('bulb-glow-yellow').addClass('bulb-glow-yellow-after');
		$('#bulb_red').removeClass('bulb-glow-red').addClass('bulb-glow-red-after');
		$('#bulb_blue').removeClass('bulb-glow-blue').addClass('bulb-glow-blue-after');
		$('#bulb_green').removeClass('bulb-glow-green').addClass('bulb-glow-green-after');
		$('#bulb_pink').removeClass('bulb-glow-pink').addClass('bulb-glow-pink-after');
		$('#bulb_orange').removeClass('bulb-glow-orange').addClass('bulb-glow-orange-after');
		$('body').css('backgroud-color','#FFF');
		$('body').addClass('peach-after');
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#bannar_coming').fadeIn('slow');
		});
	});

	$('#bannar_coming').click(function(){
		$('.bannar').addClass('bannar-come');
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#balloons_flying').fadeIn('slow');
		});
	});

	function loopOne() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b1').animate({left:randleft,bottom:randtop},10000,function(){
			loopOne();
		});
	}
	function loopTwo() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b2').animate({left:randleft,bottom:randtop},10000,function(){
			loopTwo();
		});
	}
	function loopThree() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b3').animate({left:randleft,bottom:randtop},10000,function(){
			loopThree();
		});
	}
	function loopFour() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b4').animate({left:randleft,bottom:randtop},10000,function(){
			loopFour();
		});
	}

	$('#balloons_flying').click(function(){
		$('.balloon-border').animate({top:-500},8000);
		$('#b1,#b4').addClass('balloons-rotate-behaviour-one');
		$('#b2,#b3').addClass('balloons-rotate-behaviour-two');
		loopOne();
		loopTwo();
		loopThree();
		loopFour();
		
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#cake_fadein').fadeIn('slow');
		});
	});	

	$('#cake_fadein').click(function(){
		$('.cake').fadeIn('slow');
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#light_candle').fadeIn('slow');
		});
	});

	$('#light_candle').click(function(){
		$('.fuego').fadeIn('slow');
		$(this).fadeOut('slow').promise().done(function(){
			$('#wish_message').fadeIn('slow');
		});
	});

		
	$('#wish_message').click(function(){
		 vw = $(window).width()/2;
		 vh = $(window).height();

		$('#b1,#b2,#b3,#b4').stop();
		$('#b1').attr('id','b11');
		$('#b2').attr('id','b22')
		$('#b3').attr('id','b33')
		$('#b4').attr('id','b44')
		$('#b11').animate({top:vh*0.30, left: vw-210},500);
		$('#b22').animate({top:vh*0.30, left: vw-110},500);
		$('#b33').animate({top:vh*0.30, left: vw-10},500);
		$('#b44').animate({top:vh*0.30, left: vw+90},500);
		$('.balloons').css('opacity','0.9');
		$('.balloons h2').fadeIn(3000);
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#story').fadeIn('slow');
		});
	});
	
	$('#story').click(function(){
		$(this).fadeOut('slow');
		$('.cake').fadeOut('fast').promise().done(function(){
			$('.message').fadeIn('slow');
		});
		
		var i;

		function msgLoop (i) {
			$("p:nth-child("+i+")").fadeOut('slow').delay(800).promise().done(function(){
			i=i+1;
			$("p:nth-child("+i+")").fadeIn('slow').delay(1000);
			if(i==50){
				$("p:nth-child(49)").fadeOut('slow').promise().done(function () {
					$('.cake').fadeIn('fast');
				});
				
			}
			else{
				msgLoop(i);
			}			

		});
			// body...
		}
		
		msgLoop(0);
		
	});
});




//alert('hello');