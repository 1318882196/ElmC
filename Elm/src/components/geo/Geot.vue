<template>
	<div class="box">	
		<!-- 头部 -->
		<Top>
			<div slot="left" class="left">
				<router-link to="/">
					<i class="el-icon-search"></i>
				</router-link>
			</div>
			<div slot="cent" class="cent" style="font-size:0.32rem;">{{ this.geo.name }}</div>
			<div slot="right" class="right">
				登陆|注册
			</div>
		</Top>
		<!-- swiper -->
		<div class="cont">
			<div class="swiper">
			<swiper :options="swiperOption">
			　　<swiper-slide v-for="(item,index) of swipers" :key="index">
					
					<div class="cda">
						<img :src="'https://fuss10.elemecdn.com/'+item.image_url" alt="">
						<p>{{ item.title }}</p>
					</div>
				</swiper-slide> 
				<div class="swiper-pagination" slot="pagination"></div>
				</swiper>
			</div>
			<!-- list -->
			<div class="list">
				<h4>
					<i class="el-icon-house"></i>
					<span>附近商家</span>
				</h4>
				<ul class="list1">
					<li v-for="(item,index) of list" :key="index" @click="li(item.id)">
						<div class="li1">
								<img :src="'//elm.cangdu.org/img/'+item.image_path" alt="" style="width:1.3rem;height:1.3rem;"/>
							<div class="list-right">
								<div class="div1">
									<p>品牌</p>
									<h4>{{item.name}}</h4>
									<ul>
										<li v-for="(item,index) of item.supports" :key="index">
											{{ item.icon_name }}
										</li>
									</ul>
								</div>
								<div class="div2">
									<p class="x1">
										<el-rate
											v-model="item.rating"
											disabled
											show-score
											text-color="#ff9900"
											score-template="{value}">
											
										</el-rate>
										<font class="sp1">月售{{item.recent_order_num}}单</font>
									</p>
									<div class="x2">
										<p>{{ item.delivery_mode.text }}</p>
										<p>{{ item.supports[1].name}}</p>
									</div>
								</div>
								<div class="div3">
									<p class="pp1">
										<span>
											￥{{ item.float_minimum_order_amount }}起送
										</span>
										<span>
											/
										</span>
										<span>
											配送费约￥{{ item.float_delivery_fee }}
										</span>
									</p>
									<p class="pp2">
										<span style="color:#666;">
											{{ item.distance }}
										</span>
										<span  style="color:#666;">
											/
										</span>
										<span style="color:#2186e6">
											{{ item.order_lead_time }}
										</span>
									</p>
								</div>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<!-- 底部 -->
		<Foot></Foot>
	</div>
</template>

<script>
	//elm.cangdu.org/
	import axios from 'axios'
	import Top from '../Top'
	import Foot from '../Foot'
	export default {
		data () {
			return {
				geo:{},
				swipers:[],
				//轮播js
				swiperOption: {
				　　pagination: {
				　　　　el: '.swiper-pagination',
				　　　　clickable: true // 允许点击小圆点跳转
				　　},
					navigation: {
				　　　　nextEl: '.swiper-button-next',
				　　　　prevEl: '.swiper-button-prev'
				　　},
				　　loop: true,
					slidesPerGroup:8,
					slidesPerColumn:2,
					slidesPerView:4
				},
				list:[],	
				geoa:this.$store.state.geoa
			}
		},
		components:{ Top,Foot },
		mounted(){
			var geohash = this.$route.query.geohash
			var url = "https://elm.cangdu.org/v2/pois/"+geohash
			axios.get(url).then(res=>{
				console.log(res)
				this.geo = res.data
				this.$store.commit('geo',res.data)
			})
			axios.get("http://elm.cangdu.org/v2/index_entry?geohash=40.003348,116.326192&group_type=1&flags[]=F").then(res=>{
				console.log(res)
				this.swipers = res.data		
			})
			axios.get("http://elm.cangdu.org/shopping/restaurants?latitude=40.003348&longitude=116.326192&offset=0&limit=20&extras[]=activities&keyword=&restaurant_category_id=&restaurant_category_ids[]=&order_by=&delivery_mode[]=").then(res=>{
				console.log(res)
				this.list = res.data
			})
			
		},
		methods:{
			li(id){
				this.$router.push({ name:"listdet",params:{id} })
				localStorage.setItem("id",JSON.stringify(id))
			}
		}
	}
</script>

<style lang="scss" scoped>
*{
	margin:0;
	padding: 0;
}
	.box{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		.left{
			a{
				color: #fff;
				i{
					font-size: 0.4rem;
				}
			}
		}
		.cent{
			margin-left: 0.5rem;
		}
	}
	// .swiper{
	// 	padding-top: 0.9rem;
	// 	.cda{
		// 		img{width: 1rem;height: 1rem;margin-left: 0.5rem;padding-top: 0.2rem;}
		// 		p{font-size: 0.26rem;text-align: center;margin: 0;padding: 0;line-height: 0.3rem;margin-top: -0.05rem;}
	//   	}
	// }
	.cont{
		flex: 1;
		overflow: auto;
		
	}
	.swiper{
	  padding-top: 0.9rem;
	  height:4rem;
	  border: 1px solid #e8e6e6;
	  background: #fff;
	  margin-bottom: 0.2rem;
	  .cda{
		  img{width: 1rem;height: 1rem;margin-left: 0.5rem;padding-top: 0.1rem;}
		  p{font-size: 0.26rem;text-align: center;margin: 0;padding: 0;line-height: 0.5rem;margin-top: -0.05rem;color: #666}
		  
	  }
	  .swiper-container .swiper-pagination .swiper-pagination-bullet-active{
		 	background: #53b5ff;
	  }
	  .swiper-container-ios{
		  height: 100%;
	  }
	  .swiper-slide{
		  height: 5%;
	  }
	  .swiper-wrapper{
		  height: auto;
	  }
	  .swiper-container .swiper-pagination{
		 	height: .3rem;
	  } 
  }
  .list{
	  width: 100%;
	  border-top: 1px solid #e4e4e4;
	  h4{
		  width: 95%;
		  margin: 0 auto;
		  height: 0.65rem;
		  line-height: 0.65rem;
		  i{
			  color: #666;
		  }
		  span{
			  font-size: 0.23rem;
			  font-weight: 400;
			  color: #666;
		  }
	  }
	  .list1{
		  li{
			  width: 100%;
			  height: 1.85rem;
			  border-bottom: 1px solid #f2f2f2;
			  .li1{
				  width: 95%;
				  margin: 0 auto;
				  padding-top: 0.3rem;
				  display: flex;
				  .list-right{
					  width: 5.12rem;
					  padding-left: 0.2rem;
					  .div1{
						  display: flex;
						  width: 5.5rem;
						  height: 0.3rem;
						  justify-content: space-between;
						  padding-top: 0.03rem;
						  p{
							  width: 0.55rem;
							  height: 0.3rem;
							  font-size: 0.2rem;
							  font-weight: bold;
							  background: #ffda29;
							  text-align: center;
							  border-radius: 0.05rem;
						  }
						  h4{
							  line-height: 0.26rem;
							  padding-left:0.1rem; 
							  font-size: 0.25rem;
						  }
						  ul{
							  width: 0.7rem;
							  height: 0.25rem;
							  display: flex;
							  background: #f7f7f7;
							  li{
								  font-size: 0.2rem;
								  color: #666;
								  background: #fff;
								  margin-left: 0.05rem;
								  height: 100%;
							  }
						  }
					  }
					  .div2{
							display: flex;
							width: 5.8rem;
							height: 0.3rem;
							justify-content: space-between;
							padding-top: 0.15rem;
							.x1{
								width: 4rem;
								display: flex;
								.sp1{ 
									transform: scale(.8);
									font-size: 0.18rem;
								}
							}
							.x2{
								width: 2rem;
								display: flex;
								
								p:nth-child(1){
									transform: scale(.8);
									font-size: 0.18rem;
									width: 0.9rem;
									color: #fff;
									background: #2186e6;
									text-align: center;
									border-radius: 0.05rem;
									margin-left: 0.1rem;
								}
								p:nth-child(2){
									transform: scale(.8);
									font-size: 0.18rem;
									width: 0.8rem;
									color: #2186e6;
									background: #fff;
									text-align: center;
									border-radius: 0.05rem;
									border: 1px solid #2186e6
								}
							}
					  }
					  .div3{
						  display: flex;
						  width: 5.5rem;
						  height: 0.3rem;
						  justify-content: space-between;
						  padding-top: 0.12rem;
						  .pp1,.pp2{
							  span{
								   font-size: 0.2rem;
							  }
						  }
					  }
				  }
			  }
		  }
	  }
  }
</style>
<style lang="scss">
	.el-rate {
			width: 1.4rem !important;
			.el-rate__item {
					width: 0.2rem !important;
					.el-rate__icon {
						font-size: 0.12rem !important;
						margin-right: 0px !important;
					}
					.el-rate__decimal{
						font-size: 0.12rem !important;
						margin-right: 0px !important;
					}
				}
			}
</style>