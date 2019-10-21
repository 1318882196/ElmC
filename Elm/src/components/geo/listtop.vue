<template>
	
</template>

<script>

	
 	export default {
		data() {
			return {
				id:this.$route.query.id,
				top:{}
			}
		},	
		methods:{
			async listid(){
				const res = await listid({},this.id)
				console.log(res)
				this.$store.commit("id",res.data.id)	
				this.top = res.data
				
			}
		},
		mounted(){
			this.listid()
		}
	}
</script>

<style lang="scss" scoped>
	.listtop{
		width:100%;
		height: 1.75rem;
		background: #b1b2c4;
		display: flex;
		position: fixed;
		z-index: 100;
		left: 0;
		top: 0;
		color: #fff;
		.Tui{
			.h1{
				a{
					text-decoration: none;
					color: #fff;
					i{
						font-size: 0.5rem;
						position: absolute;
						top: 2%;
						left: 0.01rem;;
					}
				}
				
			}
		}
		.autoa{
			width:95%;
			margin: 0 auto;
			height: 1.4rem;
			margin-top: 0.18rem;
			display: flex;
			img{
				border-radius: 0.05rem;
			}
			.right{
				width: 5.6rem;
				padding-left: 0.13rem;
				h1{
					font-size: 0.38rem;
				}
				.p1{
					padding-top: 0.05rem;
					span{
						font-size: 0.23rem;
					}
				}
				.p2{
					span{
						font-size: 0.2rem;
					}
				}
			}
		}
		
	}	
</style>