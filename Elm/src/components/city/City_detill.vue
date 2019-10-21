<template>
	<!-- 详情页 -->
	<div class="box">
		<Top>
			<div slot="left" class="left">
				<router-link to="/">
					<i class="el-icon-arrow-left"></i>
				</router-link>
			</div>
			<div slot="cent" class="cent">{{ this.det.name }}</div>
			<div slot="right" class="right">
				<router-link to="/">切换城市</router-link>
			</div>
		</Top>
		<div class="city_so">
			<div class="input1">
				<el-input
					placeholder="输入学校、商务楼、地址"
					v-model="input"
					clearable>
				</el-input>
			</div>
			<div class="btn2">
				<el-button :plain="true" @click="openHTML">提交</el-button>
			</div>
			<!-- 历史记录 -->
			<div class="li" v-show="!flag">
				<div class="ui">
					<h4>搜索历史</h4>
					<ul>
						<li v-for="(val,index) of info" :key="index">
							<router-link :to="'/geot?geohash='+val.geohash">
								<p>
									{{ val.name }}
								</p>
								<p>
									{{ val.address }}
								</p>
							</router-link>
						</li>
					</ul>
				</div>
				<div class="flaga" @click="Qk()" v-show="!flaga">
					<p>清空所有</p>
				</div>
			</div>
			<div class="list" v-show="flag">
				<ul>
					<li v-for="(item,index) of list" :key="index"  @click="tiao(item.geohash,item,item.id)">
						<!-- <router-link :to="'/geohasha?geohash='+item.geohash"> -->
						<router-link :to="'/geot?geohash='+item.geohash">
							<p>
								{{ item.name }}
							</p>
							<p>
								{{ item.address }}
							</p>
						</router-link>
						<!-- </router-link> -->
						 
					</li>
				</ul>
			</div>
		</div>
		
	</div>
</template>

<script>
import axios from 'axios'
import Top from '../Top'
import { detill } from '@/api/getData'
	export default {
		name:"City_detill",
		components:{ Top },
		data () {
			return {
				det:{},
				id:this.$route.query.id,
				input:"",
				list:[],
				flag:false,
				info:[],
				maa:'',
				
			}
		},
		methods:{
			async detilla(){
				const res = await detill({},this.id)
				console.log(res)
				this.det = res.data
			},
			openHTML() {
				if(this.input == ""){
					this.$message({
						dangerouslyUseHTMLString: true,
						message: '<strong>请填写此字段</strong>'
					});
				}else{
					axios.get("https://elm.cangdu.org/v1/pois?city_id="+this.id+"&keyword="+this.input).then(res=>{
						console.log(res)
						this.list = res.data
					})
					this.flag=true
					this.flaga = true
				}
				
				
			},
			tiao(geohash,item,id){
				this.flag = false
				var index = this.info.findIndex((val)=>{
					return item.name == val.name
				})
				if(index == -1){
					this.info.push({
						address : item.address,
						geohash : item.geohash,
						latitude : item.latitude,
						longitude : item.longitude,
						name : item.name
					})
				}else{
					return
				}
				localStorage.setItem("mes",JSON.stringify(this.info))
				localStorage.setItem("maa",JSON.stringify(geohash))
			},
			Qk(){
				this.info = []
				
				localStorage.setItem("mes",JSON.stringify(this.info))
				this.flaga = false
			}
		},
		mounted(){
			this.detilla()
			this.openHTML()
			// var id = this.$route.query.id
			// var url = "http://elm.cangdu.org/v1/cities/"+id
			// axios.get(url).then(res=>{
			// 	console.log(res)
			// 	this.det = res.data
			// })
		},
		created(){
			this.info = JSON.parse(localStorage.getItem("mes")) || []
			this.maa = JSON.parse(localStorage.getItem("maa")) ||[]
		}
	}
</script>

<style lang="scss" scoped>
	.box{
		width: 100%;
		height: auto;
	}
	.cent{
		margin-left: 0.6rem;
	}
	.left{
		a{
			color: #fff;
			i{
				font-size: 0.4rem;
			}
		}
	}
	.right{
		a{
			color: #fff;
		}
	}
	.city_so{
		height: 1.83rem;
		width: 100%;
		border-top: 1px solid #e4e4e4;
		border-bottom: 1px solid #e4e4e4;
		padding-top: .99rem;
		.input1{
			width: 90%;
			margin:0 auto;
			margin-top: 0.2rem;
		}
		.btn2{
			width: 90%;
			margin: 0 auto;
			margin-top: 0.2rem;
			button{
				width: 100%;
				height: 0.6rem;
				font-size: 0.2rem;
				color: #fff;
				background: #3190e8;
			}
		}
		.list{
			width: 100%;
			ul{
				li{
					width: 100%;
					height: 1.33rem;
					border-bottom: 1px solid #e4e4e4;
					font-size: 0.25rem;
					p{
						width: 90%;
						margin: 0 auto;
						font-size: 0.25rem;
					}
					p:nth-child(1){
						font-size: 0.29rem;
						line-height: 0.7rem;
					}
					p:nth-child(2){
						color: #666;
					}
				}
			}
		}
		.li{
			
			
				h4{
					font-size: 0.25rem;
					font-weight: 400;
					padding-top: 0.2rem;
					width: 90%;
					margin: 0 auto;
				}
				ul{
					li{
						margin-top: 0.1rem;
						width: 100%;
						height: 1.33rem;
						border-top: 1px solid #e4e4e4;
						border-bottom: 1px solid #e4e4e4;
						font-size: 0.25rem;
						p{
							width: 90%;
							margin: 0 auto;
							font-size: 0.25rem;
						}
						p:nth-child(1){
							font-size: 0.29rem;
							line-height: 0.7rem;
						}
						p:nth-child(2){
							color: #666;
						}
					}
				}
				.flaga{
					height: 1.1rem;
					text-align: center;
					line-height: 1.1rem;
					border-bottom: 1px solid #e4e4e4;
				}

			
		}
	}
</style>