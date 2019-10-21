<template>
	<div class="foot">
		<div>
			<i class="el-icon-eleme"></i>
			<p>外卖</p>
		</div>
		<div>
			<i class="el-icon-discover"></i>
			<p>搜索</p>
		</div>
		<div>
			<i class="el-icon-tickets"></i>
			<p>订单</p>
		</div>
		<div>
			<i class="el-icon-user"></i>
			<p>我的</p>
		</div>
	</div>
</template>

<script>
	export default {
		name:"Foot"
	}
</script>

<style lang="scss" scoped>
	.foot{
		height: 0.9rem;
		display: flex;
		border-top: 1px solid #f1f1f1;
		background: #fff;
		div{
			width: 25%;
			text-align: center;
			margin-top: 0.1rem;
			i{
				font-size: 0.35rem;
			}
			p{
				font-size: 0.2rem;
				line-height: 0.9;
			}
		}
	}
</style>