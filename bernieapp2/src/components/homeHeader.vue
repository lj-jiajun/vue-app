<template>
	<div class="header">
		<div class="location"><span>广州</span></div>
		<div class="search"><i></i><input type="text" placeholder="商务男表 全场8折起"/><span></span></div>
		<div class="msg"><span></span></div>
	</div>
</template>

<script>
	
	import {ViewBox,XHeader} from 'vux';
	
	export default {
	  	name: 'HomeHeader',
	  	data(){
	  		return {
	  			ddd:""
	  		}
	  	},
	  	component:{
	  		ViewBox,
	  		XHeader
	  	}
	}
</script>

<style scoped>
.header {
  height: 4.4rem;
  background: #f4ba19;
}
.header .location {
  float: left;
  width: 7rem;
}
.header .location span {
  position: relative;
  display: block;
  height: 4.4rem;
  font-size: 1.8rem;
  line-height: 4.4rem;
  padding-left: 2.9rem;
}
.header .location span:before {
  position: absolute;
  left: 1.1rem;
  top: 1.2rem;
  content: "";
  width: 1.5rem;
  height: 2rem;
  background: url(../assets/img/location.png) no-repeat;
  background-size: 100% 100%;
}
.header .search {
  float: left;
  width: 23.4rem;
  height: 3rem;
  margin-top: 0.7rem;
  background: url(../assets/img/pd-bg1.png) no-repeat;
  background-size: 100%;
}
.header .search i {
  position: relative;
  float: left;
  width: 3.7rem;
  height: 3rem;
}
.header .search i:before {
  position: absolute;
  top: 0.5rem;
  left: 0.7rem;
  content: "";
  width: 2.05rem;
  height: 2.05rem;
  background: url(../assets/img/search.png) no-repeat;
  background-size: 100%;
}
.header .search input {
  float: left;
  width: 16.5rem;
  height: 3rem;
  font-size: 1.5rem;
  line-height: 3rem;
  color: #999;
  background: none;
  border: none;
}
.header .search span {
  position: relative;
  float: left;
}
.header .search span:before {
  position: absolute;
  top: 0.5rem;
  left: 0.7rem;
  content: "";
  width: 2.05rem;
  height: 2rem;
  background: url(../assets/img/sweep.png) no-repeat;
  background-size: 100%;
  cursor: pointer;
}
.header .msg {
  float: left;
  width: 6.95rem;
  height: 4.4rem;
}
.header .msg span {
  position: relative;
  display: block;
}
.header .msg span:before {
  position: absolute;
  top: 1.2rem;
  left: 2.3rem;
  content: "";
  width: 2.5rem;
  height: 2.5rem;
  background: url(../assets/img/msg.png) no-repeat;
  background-size: 100%;
  cursor: pointer;
}
</style>