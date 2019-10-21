<template>
	<!-- 底部 -->
	<div class="foot">
		<div class="left">
			<div class="top" @click="flag()">
				<el-badge :value="this.$store.state.num" class="item">
				<i class="el-icon-shopping-cart-2"></i>
				</el-badge>
			</div>
		</div>
		<div style="padding-right:2.5rem;color:#fff;padding-top:0.1rem;">
			<h1 style="padding-left:0.1rem;">
				￥{{ this.$store.getters.ZJ }}
			</h1>
			<h5 style="font-size:0.25rem;padding-left:0.13rem;">
				配送费￥5
			</h5>
		</div>
		<div class="right">
			去结算
		</div>
	</div>
</template>

<script>
	export default {
		methods:{
			flag(){
				this.$store.commit("flag")
			}
		}
	}
</script>

<style lang="scss" scoped>
	.foot{
		z-index: 999;
		width: 100%;
		height: 0.93rem;
		display: flex;
		background: #3d3d3f;
		position: absolute;
		bottom: 0;
		justify-content: space-between;
		left: 0;
		.left{
			width: 0.9rem;
			height: 0.9rem;
			line-height: 1.1rem;
			text-align: center;
			border-radius: 50%;
			border: 6px solid #3e3e3e;
			background: #3190e8;
			margin-top: -0.3rem;
			margin-left: 0.2rem;
			i{
				color: #fff;
				font-size: 0.6rem;
			}
		}
		.right{
			width: 2.35rem;
			height: 100%;
			background: #4cd964;
			color: #fff;
			font-weight: bold;
			text-align: center;
			line-height: 0.93rem;

		}
	}
</style>