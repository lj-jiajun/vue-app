<template>
	<div class="homenews">
		<div class="news">
			<h2>实时新闻</h2>
			<p v-for="item in news">{{item}}</p>
		</div>
	</div>
</template>

<script>
	export default {
		name:"HomeNews",
		data(){
			return {
				news:["时尚女表限时抢购..","全场手表8.5折起，快抢光了..."]
			}
		}
	}
</script>

<style lang="less" scoped>
	.homenews{
		width: 100%;
		height: auto;
		padding: 0.9rem 0;
		background: #f8f8f8;
		overflow: hidden;
	}
	.homenews .news{
		width: 100%;
		height: 4rem;
		padding: 0.5rem 0;
		background: #fff;
	}
	.homenews .news h2{
		float: left;
		width: 9rem;
		height: 4rem;
		font-family: 'DFPWaWaW5';
		font-size: 1.9rem;
		line-height: 4rem;
		letter-spacing: 0.3rem;
		color: #cd243d;
		text-align: center;
		border-right: 1px solid #ccc;
	}
	.homenews .news p{
		position: relative;
		float: left;
		margin-left: 3rem;
		font-family: 'PingFang';
		font-size: 1.5rem;
		line-height: 2rem;
		color: #999;
	}
	.homenews .news p:before{
		content: "";
		position: absolute;
		left: -1.9rem;
		top: 0.675rem;
		width: 0.65rem;
		height: 0.65rem;
		background: url(../../assets/img/red-circle1.png) no-repeat;
		background-size: 100%;
	}
</style>