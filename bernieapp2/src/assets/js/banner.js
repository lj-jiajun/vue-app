var bprev = document.getElementById("bprev");
var bnext = document.getElementById("bnext");
var imgUl = document.getElementById("imgList");
var imgList = imgUl.getElementsByTagName("li");
var focusList = document.getElementById("focusList").getElementsByTagName("span");
var num = 0;

//点击后，向上切换
bprev.onclick = function(){
	num++;
	if(num > 0){
		num = -imgList.length+1;
		imgUl.style.transition = "none";
		
		setTimeout(function(){
			num = -imgList.length+2;
			imgUl.style.transition = "1s";
			imgUl.style.left = num*imgList[0].offsetWidth + "px";
			setFocus();
		},20);
	}
	imgUl.style.left = num*imgList[0].offsetWidth + "px";
	
	setFocus();
}

//点击后，向下切换
bnext.onclick = function(){
	num--;
	setFocus();
	if(num < -imgList.length+1){
		num = 0;
		imgUl.style.transition = "none";
		setTimeout(function(){
			num = -1;
			imgUl.style.transition = "1s";
			imgUl.style.left = num*imgList[0].offsetWidth + "px";
			setFocus();
		},20);
	}
	imgUl.style.left = num*imgList[0].offsetWidth + "px";
}

//点击焦点切换到对应图片
for(var i=0; i<focusList.length; i++){
	focusList[i].index = i;
	focusList[i].onclick = function(){
		num = -this.index;
		imgUl.style.left = num*imgList[0].offsetWidth + "px";
		//console.log(num);
		setFocus();
	}
}

//让焦点跟随图片
function setFocus(){
	for(var j=0; j<focusList.length; j++){
		focusList[j].className = "";
	}
	if(num>=-focusList.length){
		//console.log(focusList[-num],-num%focusList.length);
		focusList[-num%focusList.length].className = "active";
	}
}