//750px所对应的html的字体大小是20px(125%) 
//100%(16px)对应的网页尺寸应该是600px
//第一步获取屏幕的尺寸
var screnwidth=$("html,body").innerWidth();
var fs=screnwidth/600*100+"%";
console.log(screnwidth,fs)
$("html").css("font-size",fs);
//当屏幕的尺寸发生变化的时候重新获取页面的尺寸
$(window).resize(function(){
	screnwidth=$("html,body").innerWidth();
	fs=screnwidth/600*100+"%";
	$("html").css("font-size",fs);
})

//var html = document.getElementsByTagName("html")[0];
//var screnwidth=window.innerWidth;
//var fs=screnwidth/600*100+"%";
//html.style.fontSize=fs;
//
////当屏幕的尺寸发生变化的时候重新获取页面的尺寸
//window.onresize = function(){
//	html = document.getElementsByTagName("html")[0];
//	screnwidth=window.innerWidth;
//	fs=screnwidth/600*100+"%";
//	html.style.fontSize=fs;
//	console.log(html.innerWidth);
//}