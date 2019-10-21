<template>
	<!-- 主页 -->
	<div class="box">	
		<div class="fall" v-show="this.$store.state.flag" @click="flll()">

		</div>
		<div class="listtop">	
			<div class="Tui">
				<h1 class="h1">
					<router-link to="/geot">
						<i class="el-icon-arrow-left"></i>
					</router-link>
				</h1>
			</div>
			<div class="autoa">
				<img :src="'//elm.cangdu.org/img/'+this.top.image_path" alt="" style="width:1.35rem;height:1.35rem;"/>
				<div class="right">
					<h1>{{ this.top.name }}</h1>
					<p class="p1">
						<span>商家配送</span>
						<span>/</span>
						<span>分钟送达</span>
						<span>/</span>
						<!-- <span>{{ this.top.piecewise_agent_fee.tips }}</span> -->
					</p>
					<p class="p2">
						<span>公告：</span>
						<span>{{ this.top.promotion_info }}</span>
					</p>
				</div>
			</div>
			<div class="cont1">
				<p>
					<router-link to="/listdet/centO" active-class="aaa">商品</router-link>
				</p>
				<p>
					<router-link to="/listdet/centT" active-class="aaa">评价</router-link>
				</p>
			</div>
		</div>
		<div class="cont">
			<router-view></router-view>
		</div>
			<!-- 购物车 -->
			<div class="flaa" v-show="this.$store.state.flag">
				<p>
					<span>购物车</span>
					<font @click="Qk()"><i class="el-icon-delete"></i>清空</font>
				</p>
				<ul>
					<li v-for="(item,index) of this.$store.state.gwc" :key="index">
						<div class="di1">
							{{ item.name }}
						</div>
						<div class="di2">
							<span>￥{{ item.price }}</span>
							<button class="a1" @click="gwcBtn(index)">-</button>
								<font>{{ item.number }}</font>
							<button class="a2" @click="gwcUp(index)">+</button>
						</div>
					</li>
				</ul>
			</div>
		<Foot1></Foot1>
	</div>
</template>

<script>
	import { listid } from '../../api/getData'
	import Foot1 from './Foot1'
 	export default {
		data() {
			return {
				id:this.$route.params.id,
				top:[],
				flag:false
			}
		},	
		components:{ Foot1 },
		methods:{
			async listid(){
				//接收localStorage里的id
				var id = localStorage.getItem("id")
				const res = await listid({},id)
				console.log(res)
				this.$store.commit("id",res.data.id)	
				this.top = res.data
			},
			flll(){
				this.$store.commit("flll")
			},
			gwcUp(ind){
				this.$store.commit("gwcUp",ind)
			},
			gwcBtn(ind){
				this.$store.commit("gwcBtn",ind)
			},
			Qk(){
				this.$store.commit("Qk")
			}
		},
		mounted(){
			this.listid()
		}
	}
</script>

<style lang="scss" scoped>
*{
	margin: 0;
	padding: 0;
}
	.box{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
	}
	.fall{
		width: 100%;
		height: 100%;
		background: black;
		opacity: 0.5;
		position: absolute;
		top: 0;
		z-index: 101;
	}
	.listtop{
		width:100%;
		height: 1.75rem;
		background: #b1b2c4;
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
		.cont1{
			width: 100%;
			margin-top: 0.1rem;
			height: 1.04rem;
			background: #fff;
			display: flex;
			border-bottom: 1px solid #ededed;
			p{
				width: 50%;
				text-align: center;
				a{
					color: #268ae7;
					font-size: 0.3rem;
					line-height: 1.04rem;
				}
			}
		}
		.aaa{
			border-bottom: 2px solid #268ae7;
		}
	}	
	.cont{
		padding-top: 2.7rem;
	}
	.flaa{
		width: 100%;
		height: auto;
		background: #fff;
		position: absolute;
		bottom: 0.93rem;
		left: 0;
		z-index: 999;
		p{
			width: 100%;
			height: 0.9rem;
			background: #eceff1;
			color: #666;
			line-height: 0.9rem;
			display: flex;
			justify-content: space-between;
			span{
				padding-left: 0.27rem;
			}
			font{
				font-size: 0.28rem;
				padding-right: 0.27rem;
				i{
					padding-right: 0.1rem;
				}
			}
			
		}
		ul{
			width: 100%;
			li{
				display: flex;
				width: 93%;
				justify-content: space-between;
				margin: 0 auto;
				height: 1rem;
				line-height: 1rem;
				.di1{
					width: 18%;
					overflow: hidden;
					font-size: 0.3rem;
					font-weight: bold;
					color: #666;
				}
				.di2{
					span{
						font-size: 0.25rem;
						font-weight: bold;
						color: #ff5500;
						padding-right: 0.6rem;
					}
					button{
						width: 0.38rem;
						height: 0.38rem;
						border-radius: 50%;
					}
					.a1{
						border: 1px solid #3190e8;
						color: #3190e8;
						background: none;
					}
					.a2{
						border: none;
						background: #3190e8;
						color: #fff;
						text-align: center;
					}
				}
			}
		}
	}
	
</style>