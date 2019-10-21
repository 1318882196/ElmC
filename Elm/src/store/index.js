import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

var store = new Vuex.Store({
	state:{
		geoa:{},
		id:"",
		list:[],
		gwc:[],
		flag:false,
		num:0
	},
	mutations:{
		geo(state,res){
			state.geoa = res
		},
		id(state,id){
			state.id = id
		},
		//购物车
		gwc(state,obj){
			state.gwc.push(obj)
		},
		list(state,res){
			state.list = res
			state.list.specfoods[0].original_price=1
			
		},
		//列表页加1 购物车页面的数量跟list的数量同步  findIndex
		listUp(state,ind){
			state.list.specfoods[0].original_price++
			state.num++
			var index = state.gwc.findIndex((v,i)=>{
				return v.name == state.list.name
			})
			state.gwc[index].number++
		},
		//列表页减1
		listBtn(state){
			var index = state.gwc.findIndex((v,i)=>{
				return v.name == state.list.name
			})
			
			if(state.list.specfoods[0].original_price==1){
				state.list.specfoods[0].original_price=0
				state.gwc.splice(index,1)
				state.num=0
			}else{
				state.list.specfoods[0].original_price--
				state.gwc[index].number--
				state.num--
			}
		},
		//显示隐藏购物车页面
		flag(state){
			state.flag=!state.flag
		},
		flll(state){
			state.flag=!state.flag
		},
		//购物车页加1  list列表数量跟随购物车改变
		gwcUp(state,ind){
			state.gwc[ind].number++
			state.num++
			state.list.specfoods[0].original_price++
		},
		//购物车减1  list列表数量跟随购物车改变
		gwcBtn(state,ind){
			if(state.gwc[ind].number<=1){
				state.gwc.splice(ind,1)
				state.list.specfoods[0].original_price=0
				state.num=0
			}else{
				state.gwc[ind].number--
				state.list.specfoods[0].original_price--
				state.num--
			}
		},
		//清空
		Qk(state){
			state.gwc=[]
			state.list.specfoods[0].original_price=0
			state.num=0
		}
	},
	getters:{
		//总价
		ZJ(state){
			var num = 0;
			for(var i in state.gwc){
				num+=state.gwc[i].number*state.gwc[i].price
			}
			return num
		}
	}
})
export default store