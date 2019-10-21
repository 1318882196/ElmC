<template>
	<div class="box">
		<!-- 头部组件 -->
		<Top>
			<div slot="left" class="left">elm.me</div>
			<div slot="right" class="right">登陆|注册</div>
		</Top>
		<!-- 当前城市 -->
		<div class="city_on">
			<div class="city_tie">
				<span>当前定位城市:</span>
				<span>定位不准时，请在城市列表中选择</span>
			</div>
			<div class="city_guess">
				<!-- 跳转详情页 -->
				<router-link :to="'/city_detill?id='+guess.id">{{guess.name}}</router-link>
				<span>
					<i class="el-icon-arrow-right"></i>
				</span>
			</div>
			<!-- 热门城市 -->
			<div class="city_hot">
				<h4>热门城市</h4>
				<ul>
					<li v-for="(item,index) of hot" :key="index">
						<!-- 跳转详情页 -->
						<router-link :to="'/city_detill?id='+item.id">{{ item.name }}</router-link>
					</li>	
				</ul>
			</div>
			<!-- 全部城市 -->
			<div class="city_group" v-for="(item,index) of Object.keys(group).sort()" :key="index">
				<h4>{{item}}</h4>
				<ul>
					<li v-for="(ite,ind) of group[item]" :key="ind">
						<!-- 跳转详情页 -->
						<router-link :to="'/city_detill?id='+ite.id">{{ ite.name }}</router-link>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
import Top from '../Top'
import Dq from './Home/Dq'
import { guess } from '@/api/getData'
import { hot } from '@/api/getData'
import { group } from '@/api/getData'
	export default {
		components:{ Top },
		data () {
			return {
				guess:[],
				hot:[],
				group:[]
			}
		},
		methods:{
			async guessa(){
				const res = await guess()
				console.log(res)
				this.guess = res.data
			},
			async hota(){
				const res = await hot()
				console.log(res)
				this.hot = res.data
			},
			async groupa(){
				const res = await group()
				console.log(res)
				this.group = res.data
			}
		},
		mounted(){
			this.guessa()
			this.hota()
			this.groupa()
			// axios.get("http://elm.cangdu.org/v1/cities?type=guess").then(res=>{
			// 	console.log(res)
			// 	this.guess = res.data.name
			// })
			// axios.get("http://elm.cangdu.org/v1/cities?type=hot").then(res=>{
			// 	console.log(res)
			// 	this.hot = res.data
			// })
			// axios.get("http://elm.cangdu.org/v1/cities?type=group").then(res=>{
			// 	console.log(res)
			// 	this.group = res.data
			// })
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
		height: auto;
		background: #f5f5f5;
	}
	.city_on{
		padding-top: 0.9rem;
		background: #fff;
		border-top: 1px solid #e4e4e4;
		margin-bottom: .4rem;
		height: 1.66rem;
		
	}
	.city_tie{
		display: flex;
		justify-content: space-between;
		padding: 0 .21rem;
		line-height: 1rem;
		height: 0.87rem;
		span:nth-child(1){
			color: #666;
			font-size: 0.25rem;
		}
		span:nth-child(2){
			font-size: 0.22rem;
			font-weight: 900;
			color: #9f9f9f;
		}
	}
	.city_guess{
		display: flex;
		justify-content: space-between;
		padding: 0 .21rem;
		line-height:0.77rem;
		height: 0.77rem;
		border-top: 1px solid #e4e4e4;
    	border-bottom: 2px solid #e4e4e4;	
		a{
			color: #3190e8;
		}
		span:nth-child(1){
			color: #3190e8;
		}
		span:nth-child(2){
			color: #666;
			font-size: 0.28rem;
		}
	}
	.city_hot{
		height: 2.3rem;
		background: #fff;
		margin-top: 0.2rem;
		h4{
			color: #666;
			font-weight: 400;
			height: 0.65rem;
			text-indent: .21rem;
			border-top: 2px solid #e4e4e4;
   			border-bottom: 1px solid #e4e4e4;
			font-size: 0.25rem;
			line-height: 0.65rem;
		}
		ul{
			display: flex;
			flex-wrap: wrap;
			li{
				width: 24.7%;
				height: 0.8rem;
				text-align: center;
				line-height: 0.8rem;
				font-size: 0.28rem;
				color: #3190e8;
				border-bottom: 1px solid #e4e4e4;
				background: #fff;
				border-right: 1px solid #e4e4e4;
				a{
					color: #3190e8;
					font-size: 0.28rem;
				}
			}
			li:nth-child(4){
				border-right: none;
			}
			li:nth-child(8){
				border-right: none;
			}
		}
	}
	.city_group{
		height: auto;
		background: #fff;
		margin-top: 0.25rem;
		h4{
			color: #666;
			font-weight: 400;
			height: 0.65rem;
			text-indent: .21rem;
			border-top: 2px solid #e4e4e4;
   			border-bottom: 1px solid #e4e4e4;
			font-size: 0.25rem;
			line-height: 0.65rem;
		}
		ul{
			display: flex;
			flex-wrap: wrap;
			li{
				width: 24.7%;
				height: 0.8rem;
				text-align: center;
				line-height: 0.8rem;
				font-size: 0.28rem;
				color: #666;
				border-bottom: 1px solid #e4e4e4;
				border-right: 1px solid #e4e4e4;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				a{
					color: #666;
					font-size: 0.28rem;
				}
			}
			li:nth-child(4){
				border-right: none;
			}
			li:nth-child(8){
				border-right: none;
			}
		}
	}
</style>