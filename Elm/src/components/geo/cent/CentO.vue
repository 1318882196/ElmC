<template>
	<!-- 列表页 -->
	<div class="cent" style="display:flex;">
		<div class="left">
			<ul>
				<li v-for="(item,index) of news" :key="index">
					<span>
						{{ item.name }}
					</span>
				</li>
			</ul>
		</div>
		<div class="right">
			<div class="topa">
				<div class="lefta">
					<h3>{{ this.news[0].name }}</h3>
					<span>{{ this.news[0].description }}</span>
				</div>
				<div class="righta">
					<i class="el-icon-more"></i>
				</div>
			</div>
			<div v-for="(item,index) of news" :key="index" class="div2">
				<ul>
					<li v-for="(ite,ind) of item.foods" :key="ind" class="centa">
						<div class="autoa">
							<img :src="'//elm.cangdu.org/img/'+ite.image_path" alt=""/>
							<div class="riii">
								<h3 style="overflow: hidden;width:2rem;">{{ ite.name }}</h3>
								<p class="sa1" style="width:100%;">{{ ite.description }}</p>
								<p class="sa2">
									<span>月售{{ ite.month_sales }}份</span>
									<span>好评率{{ ite.satisfy_rate }}%</span>
								</p>
								<div class="sa3">
									<p>
										<span>￥{{ ite.specfoods[0].price }}</span><span>起</span>
									</p>
									<div>
										<button v-if="ite.specifications.length>0">选规格</button>
										<span v-if="ite.specifications.length<1" v-show="ite.specfoods[0].original_price!=0" >	
											<button v-if="ite.specifications.length<1" @click="listBtn()"  style="border-radius:50%;width:0.4rem;height:0.4rem;">-</button>
											<font style="font-size:0.24rem;color:#666;font-weight:none;">{{ ite.specfoods[0].original_price }}</font>
											<button v-if="ite.specifications.length<1" @click="listUp(ind)" style="border-radius:50%;width:0.4rem;height:0.4rem;">+</button>
										</span>
										<button v-if="ite.specifications.length<1" v-show="ite.specfoods[0].original_price==0" style="border-radius:50%;width:0.4rem;height:0.4rem;" @click="list(ite,ind)">+</button>
									</div>
								</div>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	import { listcent } from '../../../api/getData'
	export default {
		data () {
			return {
				news:[],
				lista:[],
			}
		},
		methods:{
			async listcenta(){
				var id = localStorage.getItem("id")
				const res =  await listcent({restaurant_id:id})
				console.log(this.$store.state.id)
				console.log(res)
				this.news = res.data
			},
			list(ite,ind,price){
				var obj = { price:ite.specfoods[0].price,name:ite.name,number:1 }
				this.$store.commit("gwc",obj)
				this.$store.commit("list",ite)
				// this.$store.commit("ind",ind)
				console.log(this.$store.state.list)
				
			},
			listUp(ind){
				this.$store.commit("listUp",ind)
				console.log(this.$store.state.num)
			},
			listBtn(){
				this.$store.commit("listBtn")
			}
		},
		mounted(){
			this.listcenta()	
			
		}
	}
</script>

<style lang="scss" scoped>
	.left{
		overflow: auto;
		height: 9.7rem;
		flex: 1;
		ul{
			li{
				width: 1.88rem;
				height: 1.27rem;
				overflow: hidden;
				text-align: center;
				line-height: 1.27rem;
				background: #f5f5f5;
				border-bottom: 1px solid #f0f0f0;
				span{
					color: #666;
					font-size: 0.29rem;
				}
			}
		}
	}
	.right{
		height: 9.7rem;
		flex: 3;
		overflow: auto;
		.topa{
			width:100%;
			height: 1rem;
			background: #f5f5f5;
			display: flex;
			justify-content: space-between;
			.lefta{
				display: flex;
				line-height: 1.1rem;
				color: #666;
				
				h3{
					margin-left: 0.2rem;
				}
				span{
					font-size: 0.22rem;
					line-height: 1.2rem;
					padding-left: 0.2rem;
					color: #999999;
				}
			}
			.righta{
				padding-right: 0.2rem;
				line-height: 1rem;
				i{
					color: #999999;
					font-size: 0.2rem;
				}
				
			}
			
		}
		.div2{
			ul{
				li{
					width: 99%;
					height: 2.77rem;
					display: flex;
					border: 1px solid #fafafa;
					.autoa{
						width: 93%;
						margin: 0 auto;
						display: flex;
						padding-top: 0.3rem;
						img{
							width: 1.1rem;
							height: 1rem;
							display: block;
						}
						.riii{
							width: 100%;
							padding-left: 0.2rem;
							
							.sa1{
								font-size: 0.23rem;
								margin-top: 0.15rem;
								color: #999999;
							}
							.sa2{
								span{
									font-size: 0.23rem;
									color: #333;
								}
							}
							.sa3{
								width: 100%;
								display: flex;
								margin-top: 0.1rem;
								justify-content: space-between;
								span:nth-child(1){
									font-size: 0.3rem;
									font-weight: bold;
									color: #ff6f0f;
								}
								span:nth-child(2){
									font-size: 0.25rem;
									color: #666;
									margin-left: 0.1rem;
								}
								div:nth-child(2){
									button{
										width: 1rem;
										height: 0.48rem;
										background: #3190e8;
										border: none;
										font-size: 0.2rem;
										border-radius: 0.05rem;
										color: #fff;
									}
									
								}
							}
						}	
					}
					
				}
			}			
		}
	}
</style>