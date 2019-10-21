<template>
	<div class="top">
		<slot name="left"></slot>
		<slot name="cent"></slot>
		<slot name="right"></slot>
	</div>
</template>

<script>
	export default {
		
	}
</script>

<style lang="scss" scoped>
	.top{
		width:100%;
		height: 0.9rem;
		background: #3190e8;
		display: flex;
		position: fixed;
		z-index: 100;
		left: 0;
		top: 0;
		justify-content: space-between;
		line-height: 0.9rem;
		color: #fff;
		text-decoration: none;
		.left{
			margin-left: 0.2rem;
			i{
				font-size: 0.38rem;			
			}
		}
		.cent{
			font-size: 0.38rem;
		}
		.right{
			margin-right: 0.2rem;
		}
	}
</style>