<template>
	<div class="header">
		<div class="header-left">
			<slot name="left"></slot>
		</div>
		<div class="header-mid">
			<slot name="mid"></slot>
		</div>
		<div class="header-right">
			<slot name="right"></slot>
		</div>
	</div>
</template>

<script>
	export default {
		name:"PubHeader"
	}
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  height: 4.4rem;
  background: #f4ba19;
  z-index: 10;
}
.header .header-left {
  float: left;
  width: 7rem;
  height: 100%;
}
.header .header-left i {
  display: block;
  height: 4.4rem;
  font-size: 2.6rem;
  line-height: 4.4rem;
  color: #fff;
  text-align: center;
}
.header .header-left div{
	width: 6rem;
	height: 4.4rem;
	margin: 0 auto;
}
.header .header-left div i{
	float: left;
	width: 2rem;
  	font-size: 2rem;
	color: #353535;
}
.header .header-left div span{
	float: left;
	width: 4rem;
	font-size: 1.8rem;
	line-height: 4.4rem;
}
.header .header-mid {
  	float: left;
  	width: 23.5rem;
  	height: 4.4rem;
}
.header .header-mid ul{
	width: 100%;
  	height: 100%;
}
.header .header-mid ul li{
	float: left;
	width: 33.33%;
	font-size: 1.8rem;
	line-height: 4.4rem;
  	color: #fff;
  	text-align: center;
}
.header .header-mid ul li.active{
	color: #e91b1b;
}
.header .header-mid div{
	width: 23.5rem;
  	height: 3rem;
  	margin-top: 0.7rem;
  	background: url(../../assets/img/pd-bg1.png) no-repeat;
  	background-size: 100%;
}
.header .header-mid i {
  float: left;
  width: 3.7rem;
  height: 3rem;
  font-size: 2.1rem;
  color: #999;
  text-align: center;
}

.header .header-mid input {
  float: left;
  width: 16.5rem;
  height: 3rem;
  font-size: 1.5rem;
  line-height: 3rem;
  color: #999;
  background: none;
  border: none;
}
.header .header-mid span {
  float: left;
  width: 3.3rem;
  font-size: 2.1rem;
  color: #999;
  text-align: center;
}
.header .header-right {
  float: left;
  width: 6.95rem;
  height: 4.4rem;
}
.header .header-right i{
  display: block;
  height: 100%;
  font-size: 2.5rem;
  line-height: 5rem;
  color: #333;
  text-align: center;
}
.header .header-right span{
	display: block;
  	height: 100%;
  	font-size: 2.5rem;
  	line-height: 5rem;
  	color: #fff;
  	text-align: center;
}
.header .header-right em {
  display: block;
  font-size: 1.8rem;
  line-height: 4.4rem;
  color: #fff;
  text-align: center;
}
/*.header .header-right span:before {
  position: absolute;
  top: 1.2rem;
  left: 2.3rem;
  content: "";
  width: 2.5rem;
  height: 2.5rem;
  background: url(../../assets/img/msg.png) no-repeat;
  background-size: 100%;
  cursor: pointer;
}*/
</style>