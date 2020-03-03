import Vue from'../vue.js';
import Vuex from'../vuex.js';

Vue.use(Vuex);

const store = new Vuex.Store({
	state:{
		usersInfo:{},
		hasLogin:false,
		forcedLogin:false,
		userName:'',
		userId:'',
		token:'',
		pointId:'',
		loadstates:false
	},
	mutations:{
		abcd(){
			console.log('12321451421')
		},
		login(state,user){
			// console.log(user)
			// state.userName = user.name || '';
			state.hassLogin = true;

			state.usersInfo.usersname = user.usersname;
			uni.setStorage({
				key:"usersInfo",
				data:user
			})
			// state.userId = user.id || '';
			// state.token = user.token || '';
			// state.pointId = user.pointId || '';
			// uni.setStorage({
			// 	key:'userInfo',
			// 	data:user
			// })
		},
		logout(state){
			// state.userNmae = '';
			state.hassLogin = false;

			state.usersInfo = {};
			uni.removeStorage({
				key:"usersInfo"
			})
			// state.userId ='';
			// state.token = '';
			// state.pointId = '';
			// uni.removeStorage({
			// 	key:'userInfo'
			// })
		}
	}
})

export default store