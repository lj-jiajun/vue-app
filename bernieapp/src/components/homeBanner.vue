<template>
	<div class="banner">
		<div class="container">
			<ul id="imgList">
				<li>
					<a href="javascript:;">
						<img src="../assets/img/banner_01.jpg" alt="" />
					</a>
				</li>
				<li>
					<a href="javascript:;">
						<img src="../assets/img/banner_02.jpg" alt="" />
					</a>
				</li>
				<li>
					<a href="javascript:;">
						<img src="../assets/img/banner_03.jpg" alt="" />
					</a>
				</li>
				<li>
					<a href="javascript:;">
						<img src="../assets/img/banner_01.jpg" alt="" />
					</a>
				</li>
			</ul>
			<div id="focusList">
				<span class="active"></span>
				<span></span>
				<span></span>
			</div>
		</div>
	</div>
</template>

<script>
//	import "@/assets/js/banner.js"
	
	export default {
		name:"HomeBanner",
		methods:{
			banner(){
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
			}
		}
	}
</script>

<style scoped>
	.banner{
		width: 100%;
		height: 16rem;
		overflow: hidden;
	}
	.banner .container{
		position: relative;
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
	#imgList{
		position: absolute;
		top: 0;
		left: 0;
		width: 400%;
		height: 100%;
		transition: 1s;
	}
	#imgList li{
		float: left;
		width: 37.5rem;
		height: 100%;
	}
	#imgList li img{
		width: 100%;
		height: 100%;
		vertical-align: top;
	}
	#focusList{
		position: absolute;
		left: 50%;
		bottom: 2rem;
		margin-left: -2.25rem;
		z-index: 9999;
	}
	#focusList span{
		float: left;
		width: 0.5rem;
		height: 0.5rem;
		margin: 0 0.5rem;
		border-radius: 50%;
		background: #fff;
	}
	#focusList span:hover{
		background: #eebc29;
	}
	#focusList .active{
		background: #eebc29;
	}
</style>