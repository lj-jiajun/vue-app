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
  height: 4.4rem;
  background: #f4ba19;
}
.header .header-left {
  float: left;
  width: 7rem;
}
.header .header-left span {
  position: relative;
  display: block;
  height: 4.4rem;
  font-size: 1.8rem;
  line-height: 4.4rem;
  padding-left: 2.9rem;
}
.header .header-left span:before {
  position: absolute;
  left: 1.1rem;
  top: 1.2rem;
  content: "";
  width: 1.5rem;
  height: 2rem;
  background: url(../../assets/img/location.png) no-repeat;
  background-size: 100% 100%;
}
.header .header-mid {
  float: left;
  width: 23.5rem;
  height: 3rem;
  margin-top: 0.7rem;
  background: url(../../assets/img/pd-bg1.png) no-repeat;
  background-size: 100%;
}
.header .header-mid i {
  position: relative;
  float: left;
  width: 3.7rem;
  height: 3rem;
}
.header .header-mid i:before {
  position: absolute;
  top: 0.5rem;
  left: 0.7rem;
  content: "";
  width: 2.05rem;
  height: 2.05rem;
  background: url(../../assets/img/search.png) no-repeat;
  background-size: 100%;
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
  position: relative;
  float: left;
}
.header .header-mid span:before {
  position: absolute;
  top: 0.5rem;
  left: 0.7rem;
  content: "";
  width: 2.05rem;
  height: 2rem;
  background: url(../../assets/img/sweep.png) no-repeat;
  background-size: 100%;
  cursor: pointer;
}
.header .header-right {
  float: left;
  width: 6.95rem;
  height: 4.4rem;
}
.header .header-right span {
  position: relative;
  display: block;
}
.header .header-right span:before {
  position: absolute;
  top: 1.2rem;
  left: 2.3rem;
  content: "";
  width: 2.5rem;
  height: 2.5rem;
  background: url(../../assets/img/msg.png) no-repeat;
  background-size: 100%;
  cursor: pointer;
}
</style>