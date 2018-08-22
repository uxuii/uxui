var $=jQuery.noConflict();(function($,document,window,viewport){'use strict';var $html=$('html');var $body=$('body');(function(){'use strict';if(navigator.userAgent.match(/IEMobile\/10\.0/)){var msViewportStyle=document.createElement('style')
msViewportStyle.appendChild(document.createTextNode('@-ms-viewport{width:auto!important}'))
document.querySelector('head').appendChild(msViewportStyle)}})();if($html.hasClass('desktop')){$html.addClass('is-desktop');var isMobile=false;var isDesktop=true;}else{$html.addClass('is-mobile');var isMobile=true;var isDesktop=false;}
if($html.hasClass('ie9')){var isIE9=true;}
function fn_siteLoader(){$('.site-loader-spinner').velocity('fadeOut',{queue:false,delay:0,duration:500,complete:function(){}});$('.site-loader-section').each(function(){if($(this).hasClass('_right')){var translateX='100%';}else{var translateX='-100%';}
$(this).velocity({translateZ:0,translateX:translateX,},{queue:false,delay:300,duration:800,easing:[0.645,0.045,0.355,1.000],complete:function(){if($(this).hasClass('_left')){$body.addClass('is-loaded');$('.site-loader').hide();fn_wow();}}});});}
$(window).on('load',function(){fn_wow();});function fn_siteNav(){$('.primary-menu').clone().removeClass('primary-menu').addClass('m-primary-menu').appendTo('.m-nav-tb-cell');$('.m-primary-menu').find('.primary-menu-list').removeClass('primary-menu-list').addClass('m-primary-menu-list');$('.m-primary-menu').find('.primary-menu-item').removeClass('primary-menu-item').addClass('m-primary-menu-item');$('.m-nav-toggle, .m-primary-menu-item a').on('click',function(e){fn_siteNavAnimation();});function fn_siteNavAnimation(){var $mNav=$('.m-nav');$body.toggleClass('m-nav-in');if($body.hasClass('m-nav-in')){$mNav.velocity('stop',true).velocity('fadeIn',{duration:500});$('.m-primary-menu-list').velocity('stop',true).velocity({translateY:['0','-25%'],rotateX:['0deg','35deg'],opacity:['1','.4']},{duration:500});}else{$mNav.velocity('stop',true).velocity('fadeOut',{duration:500});$('.m-primary-menu-list').velocity('stop',true).velocity({translateY:['25%','0'],rotateX:['-35deg','0deg'],opacity:['.4','1']},{duration:500});}}
$body.scrollspy({target:'',offset:100});fn_navbarIsScroll();$(window).on('scroll',function(){fn_navbarIsScroll();});function fn_navbarIsScroll(){var scroll=$(window).scrollTop();(scroll>0)?$body.addClass('is-scroll'):$body.removeClass('is-scroll');}}
$(window).on('load',function(){fn_siteNav();});function startVideo(){updateVolumeIcon();updateControls();if($('#clip-player').autoplay){$('#clip-player').get(0).play();}}
var plays=1;var max_plays=1;function videoListener(){$('#clip-player').on('ended',function(){var vid_player=$('#clip-player');var video=vid_player.get(0);if(plays<max_plays){this.currentTime=0;this.play();plays++;}else{var container=$('#vid-msg-container');var vid_height=vid_player.height();$('#vid-msg').html('Want more?'+
'</br>'+
'<span style="text-shadow: none;"><a href="/download" class="link-button download-lg">Download Medal</a></span>'+
'</br>'+
'<span style="font-size: 16px;"><a id="replay" href="#"><i class="ion-refresh"></i> Replay</a></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+
'<span style="font-size: 16px;"><a id="share" href="#"><i class="ion-share"></i> Share Link</a></span>');container.css("top",(vid_height/2)-($('#vid-msg').height()/2));container.css("z-index",3);$('.play-container').css('opacity',0);$('.sound-container').css('opacity',0);vid_player.prop("muted",true);var overlay=$('.clip-container .overlay');overlay.css("opacity","0.95");overlay.css("max-height",vid_height);vid_player.css("pointer-events","none");container.css("pointer-events","auto");setTimeout(function(){video.play();},1000);}});$('#clip-player').click(function(){this.paused?this.play():this.pause();var container=$('.play-container');var sound_link=$('#play-toggle');if(this.paused){sound_link.html('<i class="ion-ios-play"></i>');}else{sound_link.html('<i class="ion-ios-pause"></i>');}});$('#play-toggle').click(function(){var vid_player=$('#clip-player');var video=vid_player.get(0);video.paused?video.play():video.pause();var container=$('.play-container');var sound_link=$('#play-toggle');if(video.paused){sound_link.html('<i class="ion-ios-play"></i>');}else{sound_link.html('<i class="ion-ios-pause"></i>');}});$('#sound-toggle').click(function(){var video=$('#clip-player');var muted=video.prop('muted');video.prop('muted',!muted);updateVolumeIcon();});}
$(document).on('click','#replay',function(){});$(document).on('click','#share',function(){});$('#copy-link').click(function(){var $this=$(this);$this.text('Copied!');setTimeout(function(){$this.text('Copy Link');},1500);});$('#copy-container').click(function(){let $this=$(this);$this.addClass('shake');$('#invite-code').text('Copied!');setTimeout(function(){$('#invite-code').text($this.attr('code'));$this.removeClass('shake');},1500);});function resetPlayer(){var vid_player=$('#clip-player');var video=vid_player.get(0);var container=$('#vid-msg-container');plays=1;video.currentTime=0;container.css("z-index",-1);$('.clip-container .overlay').css("opacity",0)
$('.play-container').css('opacity',0.9);$('.sound-container').css('opacity',0.9);vid_player.prop("muted",false);vid_player.css("pointer-events","auto");container.css("pointer-events","none");updateVolumeIcon();}
function updateVolumeIcon(){var video=$('#clip-player');var result=video.prop('muted');var sound_link=$('#sound-toggle');if(result){sound_link.html('<i class="ion-ios-volume-low"></i>');}else{sound_link.html('<i class="ion-ios-volume-high"></i>');}}
function disableVideoContext(){$('#clip-player').bind('contextmenu',function(){return false;});}
function fadeIn(element){var op=0.1;var timer=setInterval(function(){if(op>=1){clearInterval(timer);}
element.css("opacity",op);op+=op*0.1;},10);}
function updateControls(){var vid_width=$('#clip-player').width();var vid_height=$('#clip-player').height();var play=$('.play-container');play.css("z-index",2);play.css("top",vid_height-45);play.css("left",7);play.css("opacity",0.00);var sound=$('.sound-container');sound.css("z-index",2);sound.css("top",vid_height-50);sound.css("left",vid_width-35);sound.css("opacity",0.00);var sound_link=$('#play-toggle');if($('#clip-player').get(0).paused){sound_link.html('<i class="ion-ios-play"></i>');}else{sound_link.html('<i class="ion-ios-pause"></i>');}
setTimeout(function(){fadeIn($('.play-container'));fadeIn($('.sound-container'));},100);}
$('#text-number').submit(function(ev){ev.preventDefault();var country_code=$('#country_code').val().replace(/\D/g,'');var phone_number=$('#phone_number').val().replace(/\D/g,'');if(!check_number(country_code,phone_number)){window.alert("Please enter a valid country code and phone number combination!");return false;}
this.submit();});function resizeListener(){$(window).resize(function(){if(plays<max_plays){return false;}
var vid_height=$('#clip-player').height();$('#vid-msg-container').css("top",($('#clip-player').height()/2)-($('#vid-msg').height()/2));var overlay=$('.clip-container .overlay');overlay.css("max-height",vid_height);updateControls();});}
function fn_wow(){if(!$('html').hasClass('ie9')&&!isMobile){var wow=new WOW({boxClass:'wow',animateClass:'animated',offset:0,mobile:false,live:false,callback:function(box){},scrollContainer:null});wow.init();}}
function fn_equalHeight(){$('[data-equal-height="1"]').matchHeight({});$('[data-equal-height="2"]').matchHeight({});$('[data-equal-height="3"]').matchHeight({});}
$(window).on('load',function(){fn_equalHeight();});function fn_contact(){var $form=$('#contactForm');var $formNotify=$form.find('.form-notify');$form.validate({onfocusout:false,onkeyup:false,onclick:false,rules:{name:{required:true},email:{required:true,email:true},message:{required:true}},messages:{},errorPlacement:function(error,element){},highlight:function(element){$(element).parent('.form-group').addClass('error');},unhighlight:function(element){$(element).parent('.form-group').removeClass('error');},submitHandler:function(form){$(form).ajaxSubmit({type:'POST',url:'assets/php/contact.php',dataType:'json',cache:false,data:$form.serialize(),success:function(data){if(data.code==0){$form.validate().resetForm();$form[0].reset();$form.find('.form-label').removeClass('error');$form.find('button').blur();$formNotify.removeClass('valid error').addClass('valid').html(data.message).show();}else{$formNotify.removeClass('valid error').addClass('error').html(data.message).show();}},error:function(data){$formNotify.removeClass('valid').addClass('error').html('An error occurred. Please try again later.').show();},});},invalidHandler:function(event,validator){var errors=validator.numberOfInvalids();if(errors){var message=errors==1?'You missed 1 field. It has been highlighted.':'You missed '+errors+' fields. They have been highlighted.';$formNotify.removeClass('valid error').addClass('error').html(message).show();}}});}
fn_contact();function fn_siteBg(){if(isMobile){if(_bg_style_mobile==1||_bg_style_mobile==2){fn_siteBgImg();}
else if(_bg_style_mobile==3||_bg_style_mobile==4||_bg_style_mobile==5||_bg_style_mobile==6){$(window).on('load',function(){fn_siteBgSlideshow();});}}
else{if(_bg_style_desktop==1||_bg_style_desktop==2){fn_siteBgImg();}
else if(_bg_style_desktop==3||_bg_style_desktop==4||_bg_style_desktop==5||_bg_style_desktop==6){fn_siteBgSlideshow();}
else if(_bg_style_desktop==7||_bg_style_desktop==8||_bg_style_desktop==9){fn_siteBgVideo();}
else if(_bg_style_desktop==10||_bg_style_desktop==11||_bg_style_desktop==12){fn_siteBgVideoYoutube();}}}
fn_siteBg();function fn_siteBgImg(){$('.site-bg-video').remove();$body.addClass('is-site-bg-img');}
function fn_siteBgSlideshow(){var $siteBgImg=$('.site-bg-img');$('.site-bg-video').remove();$body.addClass('is-site-bg-slideshow');for(var i=1;i<=_bg_slideshow_image_amount;i++){$siteBgImg.append('<img src="assets/img/bg/site-bg-slideshow-'+(i<10?'0'+i:i)+'.jpg">');}
if(isMobile){if(_bg_style_mobile==3||_bg_style_mobile==4){fn_ss();}else if(_bg_style_mobile==5||_bg_style_mobile==6){fn_kenburnsy();}}
else{if(_bg_style_desktop==3||_bg_style_desktop==4){fn_ss();}else if(_bg_style_desktop==5||_bg_style_desktop==6){fn_kenburnsy();}}
function fn_ss(){$siteBgImg.ss({fullscreen:true,duration:_bg_slideshow_duration,fadeInDuration:1500});}
function fn_kenburnsy(){$siteBgImg.kenburnsy({fullscreen:true,duration:_bg_slideshow_duration,fadeInDuration:1500});}}
function fn_siteBgVideo(){var $video=$('.site-bg-video');var $audio=$('.audio-toggle-link');$body.addClass('is-site-bg-video');$video.append('<video id="videoPlayer" autoplay loop>'+
'<source src="assets/video/video.mp4" type="video/mp4">'+
'</video>');var videoPlayer=document.getElementById('videoPlayer');if(videoPlayer==null){return;}
if(_bg_style_desktop==7){videoPlayer.muted=true;$audio.remove();}else if(_bg_style_desktop==8){$body.addClass('is-audio');$audio.on('click',function(){if($body.hasClass('is-audio')){videoPlayer.muted=true;$body.removeClass('is-audio').addClass('is-mute');}else if($body.hasClass('is-mute')){videoPlayer.muted=false;$body.removeClass('is-mute').addClass('is-audio');}});}}
function fn_siteBgVideoYoutube(){var $video=$('.site-bg-video');var $audio=$('.audio-toggle-link');$body.addClass('is-site-bg-video-youtube');if(_bg_style_desktop==10||_bg_style_desktop==12){$video.attr('data-property','{videoURL: _bg_video_youtube_url, autoPlay: true, loop: _bg_video_youtube_loop, startAt: _bg_video_youtube_start, stopAt: _bg_video_youtube_end, mute: true, quality: _bg_video_youtube_quality, realfullscreen: true, optimizeDisplay: true, addRaster: false, showYTLogo: false, showControls: false, stopMovieOnBlur: false, containment: "self"}');$video.YTPlayer();}else{$video.attr('data-property','{videoURL: _bg_video_youtube_url, autoPlay: true, loop: _bg_video_youtube_loop, startAt: _bg_video_youtube_start, stopAt: _bg_video_youtube_end, mute: false, quality: _bg_video_youtube_quality, realfullscreen: true, optimizeDisplay: true, addRaster: false, showYTLogo: false, showControls: false, stopMovieOnBlur: false, containment: "self"}');$video.YTPlayer();$body.addClass('is-audio');$audio.on('click',function(){if($body.hasClass('is-audio')){videoPlayer.muted=true;$body.removeClass('is-audio').addClass('is-mute');}else if($body.hasClass('is-mute')){videoPlayer.muted=false;$body.removeClass('is-mute').addClass('is-audio');}});}}
function fn_siteBgAudio(){if(isMobile){if(_bg_style_mobile==2||_bg_style_mobile==4||_bg_style_mobile==6){$body.addClass('is-mute');$body.append('<audio id="audioPlayer" loop>'+
'<source src="assets/audio/audio.mp3" type="audio/mpeg">'+
'</audio>');fn_siteBgAudioControl();}}else{if(_bg_style_desktop==2||_bg_style_desktop==4||_bg_style_desktop==6||_bg_style_desktop==9||_bg_style_desktop==12){$body.append('<audio id="audioPlayer" loop>'+
'<source src="assets/audio/audio.mp3" type="audio/mpeg">'+
'</audio>');var $audioPlayer=document.getElementById('audioPlayer');$body.addClass('is-audio');$audioPlayer.play();fn_siteBgAudioControl();}}
function fn_siteBgAudioControl(){var $audio=$('.audio-toggle-link');var $audioPlayer=document.getElementById('audioPlayer');$audio.on('click',function(){var $this=$(this);if($body.hasClass('is-audio')){$audioPlayer.pause();$body.removeClass('is-audio').addClass('is-mute')}else if($body.hasClass('is-mute')){$audioPlayer.play();$body.removeClass('is-mute').addClass('is-audio')}});}}
$(window).on('load',function(){fn_siteBgAudio();});function fn_siteBgEffect(){if(_bg_effect==0){$('.site-bg-canvas, .site-bg-effect').remove();}else if(_bg_effect==1){fn_siteBgCloud();}else if(_bg_effect==2){fn_siteBgStar();}}
function fn_siteBgCloud(){var $siteBgEffect=$('.site-bg-effect');$('.site-bg-canvas').remove();$siteBgEffect.css('opacity',_cloud_opacity);if($siteBgEffect.length){$siteBgEffect.append('<div class="cloud cloud-01"></div>'+
'<div class="cloud cloud-02"></div>'+
'<div class="cloud cloud-03"></div>')
$body.addClass('is-site-bg-cloud');fn_cloud01();fn_cloud02();fn_cloud03();}}
function fn_cloud01(){var $cloud=$('.cloud-01');$cloud.velocity({translateZ:'0',translateX:['-100%','100%']},{duration:25000,ease:'liner',queue:false,complete:function(){$(this).velocity({translateX:'100%'},{duration:0,queue:false,complete:fn_cloud01});}});}
function fn_cloud02(){var $cloud=$('.cloud-02');$cloud.velocity({translateZ:'0',translateX:['-100%','100%']},{duration:35000,ease:'liner',queue:false,complete:function(){$(this).velocity({translateX:'100%'},{duration:0,queue:false,complete:fn_cloud02});}});}
function fn_cloud03(){var $cloud=$('.cloud-03');$cloud.velocity({translateZ:'0',translateX:['-100%','100%']},{duration:45000,ease:'liner',queue:false,complete:function(){$(this).velocity({translateX:'100%'},{duration:0,queue:false,complete:fn_cloud03});}});}
function fn_siteBgStar(){var $canvas=$('.site-bg-canvas');$body.addClass('is-site-bg-star');function callCanvas(canvas){var screenpointSplitt=12000
var movingSpeed=0.2
var viewportWidth=$(window).width();var viewportHeight=$(window).height();var nbCalculated=Math.round(viewportHeight*viewportWidth/screenpointSplitt);var $this=$(this),ctx=canvas.getContext('2d');$this.config={star:{color:_bg_effect_star_color,width:_bg_effect_star_width},line:{color:_bg_effect_star_color,width:0.4},position:{x:canvas.width*0.5,y:canvas.height*0.5},velocity:movingSpeed,length:nbCalculated,distance:130,radius:120,stars:[]};function Star(){this.x=Math.random()*canvas.width;this.y=Math.random()*canvas.height;this.vx=($this.config.velocity-(Math.random()*0.3));this.vy=($this.config.velocity-(Math.random()*0.3));this.radius=Math.random()*$this.config.star.width;}
Star.prototype={create:function(){ctx.beginPath();ctx.arc(this.x,this.y,this.radius,0,Math.PI*2,false);ctx.fill();},animate:function(){var i;for(i=0;i<$this.config.length;i++){var star=$this.config.stars[i];if(star.y<0||star.y>canvas.height){star.vx=star.vx;star.vy=-star.vy;}
else if(star.x<0||star.x>canvas.width){star.vx=-star.vx;star.vy=star.vy;}
star.x+=star.vx;star.y+=star.vy;}},line:function(){var length=$this.config.length,iStar,jStar,i,j;for(i=0;i<length;i++){for(j=0;j<length;j++){iStar=$this.config.stars[i];jStar=$this.config.stars[j];if((iStar.x-jStar.x)<$this.config.distance&&(iStar.y-jStar.y)<$this.config.distance&&(iStar.x-jStar.x)>-$this.config.distance&&(iStar.y-jStar.y)>-$this.config.distance){if((iStar.x-$this.config.position.x)<$this.config.radius&&(iStar.y-$this.config.position.y)<$this.config.radius&&(iStar.x-$this.config.position.x)>-$this.config.radius&&(iStar.y-$this.config.position.y)>-$this.config.radius){ctx.beginPath();ctx.moveTo(iStar.x,iStar.y);ctx.lineTo(jStar.x,jStar.y);ctx.stroke();ctx.closePath();}}}}}};$this.createStars=function(){var length=$this.config.length,star,i;ctx.clearRect(0,0,canvas.width,canvas.height);for(i=0;i<length;i++){$this.config.stars.push(new Star());star=$this.config.stars[i];star.create();}
star.line();star.animate();};$this.setCanvas=function(){canvas.width=window.innerWidth;canvas.height=window.innerHeight;};$this.setContext=function(){ctx.fillStyle=$this.config.star.color;ctx.strokeStyle=$this.config.line.color;ctx.lineWidth=$this.config.line.width;ctx.fill();};$this.loop=function(callback){callback();reqAnimFrame(function(){$this.loop(function(){callback();});});};$this.bind=function(){$(window).on('mousemove',function(e){$this.config.position.x=e.pageX;$this.config.position.y=e.pageY;});};$this.init=function(){$this.setCanvas();$this.setContext();$this.loop(function(){$this.createStars();});$this.bind();};return $this;}
var reqAnimFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame||function(callback){window.setTimeout(callback,1000/60);};$canvas.hide();$(window).on('load',function(){setTimeout(function(){callCanvas($('canvas')[0]).init();$canvas.velocity('transition.fadeIn',{duration:3000});},2000);});var waitForFinalEvent=(function(){var timers={};return function(callback,ms,uniqueId){if(!uniqueId){uniqueId='';}
if(timers[uniqueId]){clearTimeout(timers[uniqueId]);}
timers[uniqueId]=setTimeout(callback,ms);};})();$(window).resize(function(){waitForFinalEvent(function(){callCanvas($('canvas')[0]).init();},800,'');});}
fn_siteBgEffect();function parallaxIt(){var $fwindow=$(window);var scrollTop=window.pageYOffset||document.documentElement.scrollTop;var $contents=[];var $backgrounds=[];$('[data-type="content"]').each(function(index,e){var $contentObj=$(this);$contentObj.__speed=($contentObj.data('speed')||1);$contentObj.__fgOffset=$contentObj.offset().top;$contents.push($contentObj);});$('[data-type="background"]').each(function(){var $backgroundObj=$(this);$backgroundObj.__speed=($backgroundObj.data('speed')||1);$backgroundObj.__fgOffset=$backgroundObj.offset().top;$backgrounds.push($backgroundObj);});$fwindow.on('scroll resize',function(){scrollTop=window.pageYOffset||document.documentElement.scrollTop;$contents.forEach(function($contentObj){var yPos=$contentObj.__fgOffset-scrollTop/$contentObj.__speed;$contentObj.css('top',yPos);})
$backgrounds.forEach(function($backgroundObj){var yPos=+((scrollTop-$backgroundObj.__fgOffset)/$backgroundObj.__speed);$backgroundObj.css({backgroundPosition:'50% '+yPos+'px'});});});$fwindow.trigger('scroll');};parallaxIt();function check_number(countrycode,phonenumber){if((countrycode=='93')&&(phonenumber.length>='9')&&(phonenumber.length<='9')){return true;}
if((countrycode=='355')&&(phonenumber.length>='3')&&(phonenumber.length<='9')){return true;}
if((countrycode=='213')&&(phonenumber.length>='8')&&(phonenumber.length<='9')){return true;}
if((countrycode=='376')&&(phonenumber.length>='6')&&(phonenumber.length<='9')){return true;}
if((countrycode=='244')&&(phonenumber.length>='9')&&(phonenumber.length<='9')){return true;}
if((countrycode=='54')&&(phonenumber.length>='10')&&(phonenumber.length<='10')){return true;}
if((countrycode=='374')&&(phonenumber.length>='8')&&(phonenumber.length<='8')){return true;}
if((countrycode=='297')&&(phonenumber.length>='7')&&(phonenumber.length<='7')){return true;}
if((countrycode=='61')&&(phonenumber.length>='5')&&(phonenumber.length<='15')){return true;}
if((countrycode=='672')&&(phonenumber.length>='6')&&(phonenumber.length<='6')){return true;}
if((countrycode=='43')&&(phonenumber.length>='4')&&(phonenumber.length<='13')){return true;}
if((countrycode=='994')&&(phonenumber.length>='8')&&(phonenumber.length<='9')){return true;}
if((countrycode=='973')&&(phonenumber.length>='8')&&(phonenumber.length<='8')){return true;}
if((countrycode=='880')&&(phonenumber.length>='6')&&(phonenumber.length<='10')){return true;}
if((countrycode=='375')&&(phonenumber.length>='9')&&(phonenumber.length<='10')){return true;}
if((countrycode=='32')&&(phonenumber.length>='8')&&(phonenumber.length<='9')){return true;}
if((countrycode=='501')&&(phonenumber.length>='7')&&(phonenumber.length<='7')){return true;}
if((countrycode=='229')&&(phonenumber.length>='8')&&(phonenumber.length<='8')){return true;}
if((countrycode=='975')&&(phonenumber.length>='7')&&(phonenumber.length<='8')){return true;}
if((countrycode=='591')&&(phonenumber.length>='8')&&(phonenumber.length<='8')){return true;}
if((countrycode=='599')&&(phonenumber.length>='7')&&(phonenumber.length<='7')){return true;}
if((countrycode=='387')&&(phonenumber.length>='8')&&(phonenumber.length<='8')){return true;}
if((countrycode=='267')&&(phonenumber.length>='7')&&(phonenumber.length<='8')){return true;}
if((countrycode=='55')&&(phonenumber.length>='10')&&(phonenumber.length<='10')){return true;}
if((countrycode=='673')&&(phonenumber.length>='7')&&(phonenumber.length<='7')){return true;}
if((countrycode=='359')&&(phonenumber.length>='7')&&(phonenumber.length<='9')){return true;}
if((countrycode=='226')&&(phonenumber.length>='8')&&(phonenumber.length<='8')){return true;}
if((countrycode=='257')&&(phonenumber.length>='8')&&(phonenumber.length<='8')){return true;}
if((countrycode=='855')&&(phonenumber.length>='8')&&(phonenumber.length<='8')){return true;}
if((countrycode=='237')&&(phonenumber.length>='8')&&(phonenumber.length<='8')){return true;}
if((countrycode=='238')&&(phonenumber.length>='7')&&(phonenumber.length<='7')){return true;}
if((countrycode=='236')&&(phonenumber.length>='8')&&(phonenumber.length<='8')){return true;}
if((countrycode=='235')&&(phonenumber.length>='8')&&(phonenumber.length<='8')){return true;}
if((countrycode=='56')&&(phonenumber.length>='8')&&(phonenumber.length<='9')){return true;}
if((countrycode=='86')&&(phonenumber.length>='5')&&(phonenumber.length<='12')){return true;}
if((countrycode=='57')&&(phonenumber.length>='8')&&(phonenumber.length<='10')){return true;}
if((countrycode=='269')&&(phonenumber.length>='7')&&(phonenumber.length<='7')){return true;}
if((countrycode=='242')&&(phonenumber.length>='9')&&(phonenumber.length<='9')){return true;}
if((countrycode=='682')&&(phonenumber.length>='5')&&(phonenumber.length<='5')){return true;}
if((countrycode=='506')&&(phonenumber.length>='8')&&(phonenumber.length<='8')){return true;}
if((countrycode=='225')&&(phonenumber.length>='8')&&(phonenumber.length<='8')){return true;}
if((countrycode=='385')&&(phonenumber.length>='8')&&(phonenumber.length<='12')){return true;}
if((countrycode=='53')&&(phonenumber.length>='6')&&(phonenumber.length<='8')){return true;}
if((countrycode=='599')&&(phonenumber.length>='7')&&(phonenumber.length<='8')){return true;}
if((countrycode=='357')&&(phonenumber.length>='8')&&(phonenumber.length<='11')){return true;}
if((countrycode=='420')&&(phonenumber.length>='4')&&(phonenumber.length<='12')){return true;}
if((countrycode=='850')&&(phonenumber.length>='6')&&(phonenumber.length<='17')){return true;}
if((countrycode=='243')&&(phonenumber.length>='5')&&(phonenumber.length<='9')){return true;}
if((countrycode=='45')&&(phonenumber.length>='8')&&(phonenumber.length<='8')){return true;}
if((countrycode=='246')&&(phonenumber.length>='7')&&(phonenumber.length<='7')){return true;}
if((countrycode=='253')&&(phonenumber.length>='6')&&(phonenumber.length<='6')){return true;}
if((countrycode=='593')&&(phonenumber.length>='8')&&(phonenumber.length<='8')){return true;}
if((countrycode=='20')&&(phonenumber.length>='7')&&(phonenumber.length<='9')){return true;}
if((countrycode=='503')&&(phonenumber.length>='7')&&(phonenumber.length<='11')){return true;}
if((countrycode=='240')&&(phonenumber.length>='9')&&(phonenumber.length<='9')){return true;}
if((countrycode=='291')&&(phonenumber.length>='7')&&(phonenumber.length<='7')){return true;}
if((countrycode=='372')&&(phonenumber.length>='7')&&(phonenumber.length<='10')){return true;}
if((countrycode=='251')&&(phonenumber.length>='9')&&(phonenumber.length<='9')){return true;}
if((countrycode=='500')&&(phonenumber.length>='5')&&(phonenumber.length<='5')){return true;}
if((countrycode=='298')&&(phonenumber.length>='6')&&(phonenumber.length<='6')){return true;}
if((countrycode=='679')&&(phonenumber.length>='7')&&(phonenumber.length<='7')){return true;}
if((countrycode=='358')&&(phonenumber.length>='5')&&(phonenumber.length<='12')){return true;}
if((countrycode=='33')&&(phonenumber.length>='9')&&(phonenumber.length<='9')){return true;}
if((countrycode=='262')&&(phonenumber.length>='9')&&(phonenumber.length<='9')){return true;}
if((countrycode=='594')&&(phonenumber.length>='9')&&(phonenumber.length<='9')){return true;}
if((countrycode=='689')&&(phonenumber.length>='6')&&(phonenumber.length<='6')){return true;}
if((countrycode=='241')&&(phonenumber.length>='6')&&(phonenumber.length<='7')){return true;}
if((countrycode=='220')&&(phonenumber.length>='7')&&(phonenumber.length<='7')){return true;}
if((countrycode=='995')&&(phonenumber.length>='9')&&(phonenumber.length<='9')){return true;}
if((countrycode=='49')&&(phonenumber.length>='6')&&(phonenumber.length<='13')){return true;}
if((countrycode=='233')&&(phonenumber.length>='5')&&(phonenumber.length<='9')){return true;}
if((countrycode=='350')&&(phonenumber.length>='8')&&(phonenumber.length<='8')){return true;}
if((countrycode=='30')&&(phonenumber.length>='10')&&(phonenumber.length<='10')){return true;}
if((countrycode=='299')&&(phonenumber.length>='6')&&(phonenumber.length<='6')){return true;}
if((countrycode=='590')&&(phonenumber.length>='9')&&(phonenumber.length<='9')){return true;}
if((countrycode=='502')&&(phonenumber.length>='8')&&(phonenumber.length<='8')){return true;}
if((countrycode=='224')&&(phonenumber.length>='8')&&(phonenumber.length<='8')){return true;}
if((countrycode=='245')&&(phonenumber.length>='7')&&(phonenumber.length<='7')){return true;}
if((countrycode=='592')&&(phonenumber.length>='7')&&(phonenumber.length<='7')){return true;}
if((countrycode=='509')&&(phonenumber.length>='8')&&(phonenumber.length<='8')){return true;}
if((countrycode=='504')&&(phonenumber.length>='8')&&(phonenumber.length<='8')){return true;}
if((countrycode=='852')&&(phonenumber.length>='4')&&(phonenumber.length<='9')){return true;}
if((countrycode=='36')&&(phonenumber.length>='8')&&(phonenumber.length<='9')){return true;}
if((countrycode=='354')&&(phonenumber.length>='7')&&(phonenumber.length<='9')){return true;}
if((countrycode=='91')&&(phonenumber.length>='7')&&(phonenumber.length<='10')){return true;}
if((countrycode=='62')&&(phonenumber.length>='5')&&(phonenumber.length<='10')){return true;}
if((countrycode=='870')&&(phonenumber.length>='9')&&(phonenumber.length<='9')){return true;}
if((countrycode=='800')&&(phonenumber.length>='8')&&(phonenumber.length<='8')){return true;}
if((countrycode=='882')&&(phonenumber.length>='0')&&(phonenumber.length<='0')){return true;}
if((countrycode=='883')&&(phonenumber.length>='0')&&(phonenumber.length<='0')){return true;}
if((countrycode=='979')&&(phonenumber.length>='9')&&(phonenumber.length<='9')){return true;}
if((countrycode=='808')&&(phonenumber.length>='8')&&(phonenumber.length<='8')){return true;}
if((countrycode=='98')&&(phonenumber.length>='6')&&(phonenumber.length<='10')){return true;}
if((countrycode=='964')&&(phonenumber.length>='8')&&(phonenumber.length<='10')){return true;}
if((countrycode=='353')&&(phonenumber.length>='7')&&(phonenumber.length<='11')){return true;}
if((countrycode=='972')&&(phonenumber.length>='8')&&(phonenumber.length<='9')){return true;}
if((countrycode=='39')&&(phonenumber.length>='1')&&(phonenumber.length<='11')){return true;}
if((countrycode=='81')&&(phonenumber.length>='5')&&(phonenumber.length<='13')){return true;}
if((countrycode=='962')&&(phonenumber.length>='5')&&(phonenumber.length<='9')){return true;}
if((countrycode=='7')&&(phonenumber.length>='10')&&(phonenumber.length<='10')){return true;}
if((countrycode=='254')&&(phonenumber.length>='6')&&(phonenumber.length<='10')){return true;}
if((countrycode=='686')&&(phonenumber.length>='5')&&(phonenumber.length<='5')){return true;}
if((countrycode=='82')&&(phonenumber.length>='8')&&(phonenumber.length<='11')){return true;}
if((countrycode=='965')&&(phonenumber.length>='7')&&(phonenumber.length<='8')){return true;}
if((countrycode=='996')&&(phonenumber.length>='9')&&(phonenumber.length<='9')){return true;}
if((countrycode=='856')&&(phonenumber.length>='8')&&(phonenumber.length<='10')){return true;}
if((countrycode=='371')&&(phonenumber.length>='7')&&(phonenumber.length<='8')){return true;}
if((countrycode=='961')&&(phonenumber.length>='7')&&(phonenumber.length<='8')){return true;}
if((countrycode=='266')&&(phonenumber.length>='8')&&(phonenumber.length<='8')){return true;}
if((countrycode=='231')&&(phonenumber.length>='7')&&(phonenumber.length<='8')){return true;}
if((countrycode=='218')&&(phonenumber.length>='8')&&(phonenumber.length<='9')){return true;}
if((countrycode=='423')&&(phonenumber.length>='7')&&(phonenumber.length<='9')){return true;}
if((countrycode=='370')&&(phonenumber.length>='8')&&(phonenumber.length<='8')){return true;}
if((countrycode=='352')&&(phonenumber.length>='4')&&(phonenumber.length<='11')){return true;}
if((countrycode=='853')&&(phonenumber.length>='7')&&(phonenumber.length<='8')){return true;}
if((countrycode=='261')&&(phonenumber.length>='9')&&(phonenumber.length<='10')){return true;}
if((countrycode=='265')&&(phonenumber.length>='7')&&(phonenumber.length<='8')){return true;}
if((countrycode=='60')&&(phonenumber.length>='7')&&(phonenumber.length<='9')){return true;}
if((countrycode=='960')&&(phonenumber.length>='7')&&(phonenumber.length<='7')){return true;}
if((countrycode=='223')&&(phonenumber.length>='8')&&(phonenumber.length<='8')){return true;}
if((countrycode=='356')&&(phonenumber.length>='8')&&(phonenumber.length<='8')){return true;}
if((countrycode=='692')&&(phonenumber.length>='7')&&(phonenumber.length<='7')){return true;}
if((countrycode=='596')&&(phonenumber.length>='9')&&(phonenumber.length<='9')){return true;}
if((countrycode=='222')&&(phonenumber.length>='7')&&(phonenumber.length<='7')){return true;}
if((countrycode=='230')&&(phonenumber.length>='7')&&(phonenumber.length<='7')){return true;}
if((countrycode=='52')&&(phonenumber.length>='10')&&(phonenumber.length<='10')){return true;}
if((countrycode=='691')&&(phonenumber.length>='7')&&(phonenumber.length<='7')){return true;}
if((countrycode=='373')&&(phonenumber.length>='8')&&(phonenumber.length<='8')){return true;}
if((countrycode=='377')&&(phonenumber.length>='5')&&(phonenumber.length<='9')){return true;}
if((countrycode=='976')&&(phonenumber.length>='7')&&(phonenumber.length<='8')){return true;}
if((countrycode=='382')&&(phonenumber.length>='4')&&(phonenumber.length<='12')){return true;}
if((countrycode=='212')&&(phonenumber.length>='9')&&(phonenumber.length<='9')){return true;}
if((countrycode=='258')&&(phonenumber.length>='8')&&(phonenumber.length<='9')){return true;}
if((countrycode=='95')&&(phonenumber.length>='7')&&(phonenumber.length<='9')){return true;}
if((countrycode=='264')&&(phonenumber.length>='6')&&(phonenumber.length<='10')){return true;}
if((countrycode=='674')&&(phonenumber.length>='4')&&(phonenumber.length<='7')){return true;}
if((countrycode=='977')&&(phonenumber.length>='8')&&(phonenumber.length<='9')){return true;}
if((countrycode=='31')&&(phonenumber.length>='9')&&(phonenumber.length<='9')){return true;}
if((countrycode=='687')&&(phonenumber.length>='6')&&(phonenumber.length<='6')){return true;}
if((countrycode=='64')&&(phonenumber.length>='3')&&(phonenumber.length<='10')){return true;}
if((countrycode=='505')&&(phonenumber.length>='8')&&(phonenumber.length<='8')){return true;}
if((countrycode=='227')&&(phonenumber.length>='8')&&(phonenumber.length<='8')){return true;}
if((countrycode=='234')&&(phonenumber.length>='7')&&(phonenumber.length<='10')){return true;}
if((countrycode=='683')&&(phonenumber.length>='4')&&(phonenumber.length<='4')){return true;}
if((countrycode=='47')&&(phonenumber.length>='5')&&(phonenumber.length<='8')){return true;}
if((countrycode=='968')&&(phonenumber.length>='7')&&(phonenumber.length<='8')){return true;}
if((countrycode=='92')&&(phonenumber.length>='8')&&(phonenumber.length<='11')){return true;}
if((countrycode=='680')&&(phonenumber.length>='7')&&(phonenumber.length<='7')){return true;}
if((countrycode=='507')&&(phonenumber.length>='7')&&(phonenumber.length<='8')){return true;}
if((countrycode=='675')&&(phonenumber.length>='4')&&(phonenumber.length<='11')){return true;}
if((countrycode=='595')&&(phonenumber.length>='5')&&(phonenumber.length<='9')){return true;}
if((countrycode=='51')&&(phonenumber.length>='8')&&(phonenumber.length<='11')){return true;}
if((countrycode=='63')&&(phonenumber.length>='8')&&(phonenumber.length<='10')){return true;}
if((countrycode=='48')&&(phonenumber.length>='6')&&(phonenumber.length<='9')){return true;}
if((countrycode=='351')&&(phonenumber.length>='9')&&(phonenumber.length<='11')){return true;}
if((countrycode=='974')&&(phonenumber.length>='3')&&(phonenumber.length<='8')){return true;}
if((countrycode=='40')&&(phonenumber.length>='9')&&(phonenumber.length<='9')){return true;}
if((countrycode=='7')&&(phonenumber.length>='10')&&(phonenumber.length<='10')){return true;}
if((countrycode=='250')&&(phonenumber.length>='9')&&(phonenumber.length<='9')){return true;}
if((countrycode=='247')&&(phonenumber.length>='4')&&(phonenumber.length<='4')){return true;}
if((countrycode=='290')&&(phonenumber.length>='4')&&(phonenumber.length<='4')){return true;}
if((countrycode=='508')&&(phonenumber.length>='6')&&(phonenumber.length<='6')){return true;}
if((countrycode=='685')&&(phonenumber.length>='3')&&(phonenumber.length<='7')){return true;}
if((countrycode=='378')&&(phonenumber.length>='6')&&(phonenumber.length<='10')){return true;}
if((countrycode=='239')&&(phonenumber.length>='7')&&(phonenumber.length<='7')){return true;}
if((countrycode=='966')&&(phonenumber.length>='8')&&(phonenumber.length<='9')){return true;}
if((countrycode=='221')&&(phonenumber.length>='9')&&(phonenumber.length<='9')){return true;}
if((countrycode=='381')&&(phonenumber.length>='4')&&(phonenumber.length<='12')){return true;}
if((countrycode=='248')&&(phonenumber.length>='7')&&(phonenumber.length<='7')){return true;}
if((countrycode=='232')&&(phonenumber.length>='8')&&(phonenumber.length<='8')){return true;}
if((countrycode=='65')&&(phonenumber.length>='8')&&(phonenumber.length<='12')){return true;}
if((countrycode=='421')&&(phonenumber.length>='4')&&(phonenumber.length<='9')){return true;}
if((countrycode=='386')&&(phonenumber.length>='8')&&(phonenumber.length<='8')){return true;}
if((countrycode=='677')&&(phonenumber.length>='5')&&(phonenumber.length<='5')){return true;}
if((countrycode=='252')&&(phonenumber.length>='5')&&(phonenumber.length<='8')){return true;}
if((countrycode=='27')&&(phonenumber.length>='9')&&(phonenumber.length<='9')){return true;}
if((countrycode=='211')&&(phonenumber.length>='1')&&(phonenumber.length<='15')){return true;}
if((countrycode=='34')&&(phonenumber.length>='9')&&(phonenumber.length<='9')){return true;}
if((countrycode=='94')&&(phonenumber.length>='9')&&(phonenumber.length<='9')){return true;}
if((countrycode=='249')&&(phonenumber.length>='9')&&(phonenumber.length<='9')){return true;}
if((countrycode=='597')&&(phonenumber.length>='6')&&(phonenumber.length<='7')){return true;}
if((countrycode=='268')&&(phonenumber.length>='7')&&(phonenumber.length<='8')){return true;}
if((countrycode=='46')&&(phonenumber.length>='7')&&(phonenumber.length<='13')){return true;}
if((countrycode=='41')&&(phonenumber.length>='4')&&(phonenumber.length<='12')){return true;}
if((countrycode=='963')&&(phonenumber.length>='8')&&(phonenumber.length<='10')){return true;}
if((countrycode=='886')&&(phonenumber.length>='8')&&(phonenumber.length<='9')){return true;}
if((countrycode=='992')&&(phonenumber.length>='9')&&(phonenumber.length<='9')){return true;}
if((countrycode=='255')&&(phonenumber.length>='9')&&(phonenumber.length<='9')){return true;}
if((countrycode=='888')&&(phonenumber.length>='1')&&(phonenumber.length<='15')){return true;}
if((countrycode=='66')&&(phonenumber.length>='8')&&(phonenumber.length<='9')){return true;}
if((countrycode=='389')&&(phonenumber.length>='8')&&(phonenumber.length<='9')){return true;}
if((countrycode=='670')&&(phonenumber.length>='7')&&(phonenumber.length<='7')){return true;}
if((countrycode=='228')&&(phonenumber.length>='8')&&(phonenumber.length<='8')){return true;}
if((countrycode=='690')&&(phonenumber.length>='4')&&(phonenumber.length<='4')){return true;}
if((countrycode=='676')&&(phonenumber.length>='5')&&(phonenumber.length<='7')){return true;}
if((countrycode=='991')&&(phonenumber.length>='1')&&(phonenumber.length<='15')){return true;}
if((countrycode=='216')&&(phonenumber.length>='8')&&(phonenumber.length<='8')){return true;}
if((countrycode=='90')&&(phonenumber.length>='10')&&(phonenumber.length<='10')){return true;}
if((countrycode=='993')&&(phonenumber.length>='8')&&(phonenumber.length<='8')){return true;}
if((countrycode=='688')&&(phonenumber.length>='5')&&(phonenumber.length<='6')){return true;}
if((countrycode=='256')&&(phonenumber.length>='9')&&(phonenumber.length<='9')){return true;}
if((countrycode=='380')&&(phonenumber.length>='9')&&(phonenumber.length<='9')){return true;}
if((countrycode=='971')&&(phonenumber.length>='8')&&(phonenumber.length<='9')){return true;}
if((countrycode=='44')&&(phonenumber.length>='7')&&(phonenumber.length<='10')){return true;}
if((countrycode=='1')&&(phonenumber.length>='10')&&(phonenumber.length<='10')){return true;}
if((countrycode=='878')&&(phonenumber.length>='1')&&(phonenumber.length<='15')){return true;}
if((countrycode=='598')&&(phonenumber.length>='4')&&(phonenumber.length<='11')){return true;}
if((countrycode=='998')&&(phonenumber.length>='9')&&(phonenumber.length<='9')){return true;}
if((countrycode=='678')&&(phonenumber.length>='5')&&(phonenumber.length<='7')){return true;}
if((countrycode=='39')&&(phonenumber.length>='1')&&(phonenumber.length<='11')){return true;}
if((countrycode=='379')&&(phonenumber.length>='1')&&(phonenumber.length<='11')){return true;}
if((countrycode=='58')&&(phonenumber.length>='10')&&(phonenumber.length<='10')){return true;}
if((countrycode=='84')&&(phonenumber.length>='7')&&(phonenumber.length<='10')){return true;}
if((countrycode=='681')&&(phonenumber.length>='6')&&(phonenumber.length<='6')){return true;}
if((countrycode=='967')&&(phonenumber.length>='6')&&(phonenumber.length<='9')){return true;}
if((countrycode=='260')&&(phonenumber.length>='9')&&(phonenumber.length<='9')){return true;}
if((countrycode=='263')&&(phonenumber.length>='5')&&(phonenumber.length<='10')){return true;}
return false;}})(jQuery,document,window,ResponsiveBootstrapToolkit);