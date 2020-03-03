<script>
	import {mapState} from"vuex.js";
	export default { 	
		data(){
			return{
				state:false
			}
		},
		// computed:mapState(['loadstates']),
		onLaunch: function() {
			// let userInfo = uni.getStorageInfoSync('userInfo'||'');
			// if(userInfo.id){
			// 	uni.getStorage({
			// 		key:'userInfo',
			// 		success:(res) => {
			// 			this.login(res.data)
			// 		}
			// 	})
			// };

			// uni.getStorage({
			// 	key:"usersInfo",
			// 	success: res =>{
			// 		console.log(res);
			// 		var cok = res.data.data.cookie;
			// 		var ress = res.data.msg;
			// 		console.log(cok);
			// 		// console.log(this.loadstates);
			// 		uni.request({
			// 			url: 'http://192.168.0.101:9000/users/getUsersInformation',
			// 			method: 'GET',
			// 			data: {},
			// 			header:{
			// 				'content-type': 'application/x-www-form-urlencoded',
			// 				'cok':cok
			// 			},
			// 			success: res => {
			// 				console.log(res)
			// 				console.log('okk')
							
			// 				// console.log(this.loadstates)
			// 				// this.loadstates =true;
			// 				if(ress === null){
								
			// 					uni.$emit('states',{uinfo:res,cok:cok});
								
			// 				}
							
			// 			},
			// 			fail: () => {},
			// 			complete: () => {}
			// 		});
					
			// 	}
			// })
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
		// globalData:{
		// 	abc:false
		// }
	}
</script>

<style>
	/*每个页面公共css */
</style>
