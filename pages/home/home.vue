<template>
	<view class="homeBox">
		<view class="notload" v-if="this.loadstate == false">
			<view class="loadback_box">
				<text class="loadback">返回</text>
			</view>
			<view class="title_img_box">
				<image class="title_img" src="../../static/zztj.png" mode=""></image>
			</view>
			<view class="username_box">
				<input class="username" placeholder="请输入用户名" type="text" v-model="plsuser" :id="plsuser" />
				<image class="userimg" src="../../static/tabbar/my.png" mode=""></image>
			</view>
			<view class="userpas_box">
				<input class="userpas" placeholder="请输入密码" type="number" v-model="plspas" :id="plspas" />
				<image class="userpas_img" src="../../static/tabbar/pas.png" mode=""></image>
				<text class="userpas_set">忘记密码</text>
			</view>
			<button type="primary" @click="loadup">登录</button>
			<view class="loadchoose">
				<text @click="toregister" class="userset">注册账号</text>
				<text @click="nopasload" class="nopasload">无密码登录</text>
			</view>
			<uni-popup ref="fail" class="loaded">登录失败</uni-popup>
			<uni-popup ref="suc" class="loaded">登录成功</uni-popup>
		</view>
		<!-- <view class="sucload" v-if="this.loadstate == true">
			登录成功1231
		</view> -->
		<Loadok :usersNickandId="usersNickandId" v-if="this.loadstate == true"></Loadok>
		<image @click="setInfo" v-if="this.loadstate == true" class="user_set" src="../../static/set.png" ></image>
		<text class="logout" @click="logouted" v-if="this.loadstate == true">退出登录</text>
		<!-- <userInfo v-if="userinfo == true"></userInfo> -->
		<!-- <text @click="setinfoback" v-if="userinfo == true" class="userinfo_back">返回</text> -->
		<!-- <button @click="qwer" type="primary">wqeqefaf</button> -->
	</view>
</template>

<script>
	import uniPopup from"@/pages/index/components/uni-popup/uni-popup.vue";
	import Loadok from"./components/loadok.vue";
	import userInfo from"./components/userinfo.vue";
	import {mapMutations,mapState} from"../../vuex.js";
	// import helper from"../../common/helper.js"
	export default {
		
		data() {
			return {
				plsuser:"",
				plspas:"",
				username:"",
				password:"",
				userIcon:'',
				loadstate:false,
				setstate:true,
				abcstate:false,
				infolist:[],
				userinfo:false,
				cok:[],
				loadOk:'no',
				usersNickandId:{},
				userInfolist:{
					usersId:''
				}
			}
		},


		onShow(){
			
			uni.getStorage({
				key:"usersInfo",
				success: res =>{
					console.log(res);
					var cok = res.data.cookie;
					console.log('啊');
					var _this = this;
					// console.log(this.loadstates);
					uni.request({
						url: 'http://192.168.0.101:9000/users/getUsersInformation',
						method: 'GET',
						data: {},
						header:{
							'content-type': 'application/x-www-form-urlencoded',
							'cok':cok
						},
						success: re => {
							console.log(re);
							console.log('okk');
							
							
							// console.log(this.loadstates)
							// this.loadstates =true;
							if(re.data.msg === null){
								
								var data = re.data.data;
								var a = new Date().getTime();
								data.Icon = "http://192.168.0.101:9001/" + data.usersIcon + "?a=" + a ;
								console.log(data)
								_this.cok = cok;
								console.log(cok);
								_this.usersNickandId = data;
								_this.loadstate = true;
								// _this.usersNickandId.Icon = "http://192.168.0.101:9001/" + _this.usersNickandId.usersIcon;
								
							}
							
						},
						fail: () => {},
						complete: () => {}
					});
					
				}
			})
		},
		// uni.$on('states',function(){
		// 	console.log(this.loadstate)
		// 	this.loadstate = true;
		// }),
		// onShow() {
		// 	uni.request({
		// 		url:'http://192.168.0.101:9000/users/getUsersInformation',
		// 		method: 'GET',
		// 		data: {},
		// 		header:{
		// 			'content-type': 'application/x-www-form-urlencoded',
		// 			'cok':this.cok
		// 		},
		// 		success: res => {
		// 			console.log(res);
		// 			this.usersNickandId.usersIcon = res.data.data.usersIcon;
		// 			this.usersNickandId.usersNick = res.data.data.usersNick;
		// 			this.usersNickandId.usersId = res.data.data.usersId;
		// 		},
		// 		fail: () => {},
		// 		complete: () => {}
		// 	});
		// },
		// onLoad() {
		// 	if(this.state == true){
		// 		this.loadstate = true;
		// 		this.setstate = true;
		// 		this.userinfo = false;
		// 	}else if(this.state == false){
		// 		this.loadstate = false;
		// 		this.setstate = false;
		// 		this.userinfo = false;
		// 	}
		// },

		components:{
			uniPopup,
			Loadok,
			userInfo
			
		},
		// computed:{
		// 	asdf(){
		// 		console.log(this.asd);
		// 		return this.asd
		// 	}
		// },
		// onLoad() {
		// 	console.log(loadstate);
		// },
		// onshow() {
		// 	var app =getApp();
		// 	this.loadstate = app.globalData.abc;
		// },
		// computed:mapState(['loadstates']),
		// watch:{
		// 	ckkkkkk(v,old){
		// 		console.log('1')
		// 		console.log(v)
		// 		console.log(old)
		// 		console.log('2')
				
		// 	}
		// },
		methods: {
			// qwer(){
			// 	// this.loadstates == false ? this.loadstates = true : this.loadstates = false
			// 	// this.ckkkkkk += 1;
			// 	console.log(this.ckkkkkk)
			// 	console.log(this.asd)
			// 	// console.log(this.loadstates.value)
			// },
			...mapMutations(['login','logout']),
			setInfo(){
				// this.setstate = false;
				// this.userinfo = true
				var cok = this.cok;
				uni.navigateTo({
					url: '../userinfo/userinfo?cok=' + cok,
					success: res => {
						
					},
					fail: () => {},
					complete: () => {}
				});
			},
			setinfoback(){
				this.userinfo = false;
				this.setstate = true;
			},
			toregister(){
				uni.navigateTo({
					url: '/pages/register/register',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			// resertext_1(e){
			// 	var cot = e.currentTarget.id;
			// 	if(cot == "请输入用户名"){
			// 		this.plsuser = ""
			// 	}
			// },
			// resertext_2(e){
			// 	var cot = e.detail.value;
			// 	this.username = cot;
			// 	if(cot.length == 0){
			// 		this.plsuser = '请输入用户名';
			// 	};
			// },
			// resertext_3(e){
			// 	var cot = e.currentTarget.id;
			// 	if(cot == "请输入密码"){
			// 		this.plspas = ""
			// 	}
			// },
			// resertext_4(e){
			// 	var cot = e.detail.value;
			// 	this.password = cot;
			// 	if(cot.length == 0){
			// 		this.plspas = '请输入密码';
			// 	};
			// },
			nopasload(){
				this.loadstate = true;
			},
			toMain1(){
				this.logout();
			},
			toMain(user){
				this.login(user);
				// console.log(this.forcedLogin);
				// console.log('a')
				// if(this.forcedLogin){
				// 	uni.reLaunch({
				// 		url:"../index/index"
				// 	});
				// }else {
				// 	uni.navigateBack();
				// }
			},
			logouted(){
				uni.request({
					url: 'http://192.168.0.101:9000/users/logout',
					method: 'POST',
					data: {},
					header:{
						'content-type': 'application/x-www-form-urlencoded',
						'cok':this.cok
					},
					success: res => {
						console.log(res)
						if(res.statusCode == 200){
							this.loadstate = false;
							this.abcstate = false;
							this.asd = false;
							console.log(this.loadstate)
							// console.log('qwe')
						};
						
					},
					fail: () => {},
					complete: () => {}
				});
				this.toMain1()
			},
			loadup(e){
				// var username = this.username;
				// var password = this.password;
				if(this.plsuser == '' || this.plspas ==''){
					return
				}
				uni.request({
					url: 'http://192.168.0.101:9000/users/login',
					method: 'POST',
					data:{
						username:this.plsuser,
						password:this.plspas
					},
					header:{
						'content-type': 'application/x-www-form-urlencoded'
					},
					success: res => {
						console.log(res);
						// this.infolist = res.data;
						var state = res.data;
						// var code = res.statusCode;
						// console.log(state);
						// console.log(code);
						// console.log(this.username);
						// console.log(this.password);
						if(state.msg == "账号不存在" || state.msg == "密码错误"){
							// console.log(this.abc);
							// let app = getApp();
							// console.log(app.globalData.abc);
							this.plsuser="";
							this.plspas="";
							this.loadOk = "no";
							console.log(this.loadOk);
							if(this.loadOk == "no"){
								// this.$refs.fail.open();
								uni.showToast({
									title:state.msg == '账号不存在' ? '登录失败，账号不存在' : '登录失败，密码错误'
								})
							}
						}else if(state.msg == null){
							this.loadOk = "yes";
							console.log(this.loadOk);
							// var qw = res.data.data;
							// qw.Icon = "http://192.168.0.101:9001/" + qw.usersIcon;
							this.usersNickandId = res.data.data;
							this.usersNickandId.Icon ="http://192.168.0.101:9001/" + this.usersNickandId.usersIcon;
							this.toMain(this.usersNickandId);
							// this.asd = true;
							this.loadstate = true;
							this.cok = res.data.data.cookie;
							console.log(this.cok);

							
							
							console.log(this.usersNickandId)
							console.log('那')
							this.plsuser = '';
							this.plspas = '';
							
						}
					}

				});
			}
		}
	}
</script>

<style>
	.logout{
		position: absolute;
		top: 0;
		left: 0;
		color: #4CD964;
	}
	.userinfo_back {
		position: absolute;
		top: -20px;
		left: 0px;
		color: #4CD964;
	}
	.user_set{
		position: absolute;
		right: 5px;
		top: 5px;
		width: 20px;
		height: 20px;
	}
	.loadchoose{
		margin-top: 5px;
		text-align: center;
		width: 100%;
	}
	.userset{
		color: #4CD964;
		border-right: 1px solid #999999;
		padding-right: 10px;
		font-size: 14px;
		
	}
	.nopasload{
		color: #4CD964;
		margin-left: 10px;
		font-size: 14px;
	}
	.homeBox{
		margin-left: 10px;
		margin-right: 10px;
		position: relative;
	}
	.loadback{
		font-size: 14px;
		color: #4CD964;
	}
	.title_img_box{
		width: 100%;
		height: 100px;
		text-align: center;
		margin-top: 20px;
		margin-bottom: 20px;
	}
	.title_img{
		border-radius: 50%;
		width: 100px;
		height: 100px;
		
	}
	.username_box{
		width: 100%;
		height: 30px;
		line-height: 30px;
		position: relative;
		background-color: #FFFFFF;
	}
	.username{
		width: 80%;
		height: 30px;
		position: relative;
		left: 30px;
	}
	.userimg{
		width: 14px;
		height: 14px;
		position: absolute;
		left: 0px;
		top: 8px;
		z-index: 5;
	}
	.userpas_box{
		width: 100%;
		height: 30px;
		line-height: 30px;
		position: relative;
		background-color: #FFFFFF;
		margin-top: 3px;
		margin-bottom: 20px;
	}
	.userpas{
		width: 80%;
		height: 30px;
		position: relative;
		left: 30px;
	}
	.userpas_img{
		width: 14px;
		height: 14px;
		position: absolute;
		left: 0px;
		top: 8px;
		z-index: 5;
	}
	.userpas_set{
		position: absolute;
		font-size: 14px;
		color: #4CD964;
		right: 0px;
		z-index: 5;
		top: 0px;
	}
</style>
