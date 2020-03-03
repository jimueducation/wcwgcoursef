<template>
	<view class="userinfo_box">
		<image class="back_1" @click="back_1" src="../../static/tabbar/back.png" mode="widthFix"></image>
		<view class="userinfo_1">
			<text class="userinfo_1_txt">头像</text>
			<image @click="sethead" class="userinfo_1_img" v-model="userlist.Icon" :src="userlist.Icon" mode="widthFix"></image>
		</view>
		<view class="userinfo_2">
			<!-- <view class="userinfo_self_box" v-for="(item,index) in userinfolist" :key="index" >
				<text class="userinfo_2_txt"> {{item.title}} </text>
				<input class="userinfo_2_input" type="text" :value="usersNick" :placeholder="item.placeholder" />
				
			</view> -->
			
			<!-- <text class="userinfo_2_radio" v-if="item.input" :id="index">{{item.info}}</text> -->
			<!-- 		<input @click="userinforadio" class="userinfo_2_radio" v-if="item.input" type="text" :value="item.info" :id="index" :placeholder="item.placeholder" disabled/> -->
					<!-- <picker v-if="item.input" class="userinfo_2_radio" :range="item.placeholder" @change="userinforadio" :id="index"> -->
						<!-- <! {{userinfoset[userindex]}} -->
						<!-- {{userinfolist[userindex].placeholder[userinfolist[userindex].index]}} -->
					<!-- </picker> -->
			
			<view class="userinfo_self_box">
				<text class="userinfo_2_txt"> 昵称 </text>
				<input class="userinfo_2_input" type="text" v-model="userlist.usersNick" placeholder="请填写昵称" />
			</view>
			<view class="userinfo_self_box">
				<text class="userinfo_2_txt"> 真实姓名 </text>
				<input class="userinfo_2_input" type="text" v-model="userlist.usersRealname" placeholder="请填写真实姓名" />
			</view>
			
			<view class="userinfo_self_box_1">
				<view class="userinfo_self_box">
					<text class="userinfo_2_txt">性别</text>
					<picker class="userinfo_2_radio" :range="sex" @change="userinforadio" :id="sex[0]">
						{{sex[sexindex]}}
					</picker>
				</view>
				<view class="userinfo_self_box">
					<text class="userinfo_2_txt">生日</text>
					<picker class="userinfo_2_radio" :range="date" @change="userinforadio" :id="date[0]">
						{{date[dateindex]}}
					</picker>
				</view>
				<view class="userinfo_self_box">
					<text class="userinfo_2_txt">住址</text>
					<picker class="userinfo_2_radio" :range="site" @change="userinforadio" :id="site[0]">
						{{site[siteindex]}}
					</picker>
				
				</view>
			</view>
		</view>

		<button class="" type="primary" @click="setthis">保存</button>
		
		
	</view>
</template>

<script>
	
	export default {
		data(){
			return{
				sex:["请选择性别","男","女","保密"],
				sexindex:0,
				date:["请选择日期",1998,1999,2000],
				dateindex:0,
				site:["请选择地址","浙江","北京","上海"],
				siteindex:0,
				username:'',
				password:'',
				usersId:'',
				cok:'',
				userlist:{},
				imgname:'',
				userinfolist:[
					{
						title: "昵称",
						info: "",
						placeholder: "请填写昵称",
						input: false
						
					},
					{
						title: "真实姓名",
						info: "",
						placeholder: "请填写真实姓名",
						input: false
					}
				]
			}
		},
		onLoad:function(e){
			// console.log(e.cok);
			this.cok = e.cok;
			uni.request({
				url: 'http://192.168.0.101:9000/users/getUsersInformation',
				method: 'GET',
				data: {},
				header:{
					'content-type': 'application/json',
					'cok':this.cok
							
				},
				success: res => {
					console.log(res)
					var a = res.data.data;
					var t = new Date().getTime();
					a.Icon = "http://192.168.0.101:9001/" + res.data.data.usersIcon + "?t=" + t;
					this.userlist = a;
					console.log(this.userlist);
					this.sexindex = res.data.data.usersSex;
					
				},
				fail: () => {},
				complete: () => {}
			});

		},
		// onShow() {
			// XMLHttpRequest.open("GET","http://192.168.0.105:9000/users/update",true)
			
			//登录获取资料
			// uni.request({
			// 	url: 'http://192.168.0.105:9000/users/login',
			// 	method: 'POST',
			// 	data:{
			// 		username:this.username,
			// 		password:this.password
			// 	},
			// 	header:{
			// 		'content-type': 'application/x-www-form-urlencoded'
			// 	},
			// 	dataType:"json"
			// 	,
			// 	success: res => {
			// 		console.log(res);
			// 		var state = res.data.data;
			// 		console.log(state);
			// 		this.usersId = state.usersId;
			// 		this.usersNick = state.usersNick;
			// 	},
			// 	fail: () => {},
			// 	complete: () => {}
			// });
			
			//修改
			// uni.request({
			// 	url: 'http://192.168.0.100:9000/users/update',
			// 	method: 'POST',
			// 	data: {},
			// 	header:{
			// 		'content-type': 'application/json',
			// 		'cok':this.cok,
			// 		'Access-Control-Allow-Origin':'*',
			// 		'Access-Control-Allow-Methods':'*',
			// 		'Access-Control-Allow-Headers':'*'
					
					
			// 	},
			// 	success: res => {
			// 		console.log(res)
					
			// 	},
			// 	fail: () => {},
			// 	complete: () => {}
			// });
		// },
		methods:{
			// asdf(){
			// 	uni.getSystemInfo({
			// 	　　success: function(res) { // res - 各种参数
			// 	　　   console.log(res); // 屏幕的宽度 
				
			// 	　　    let info = uni.createSelectorQuery().select(".userinfo_1_img");
			// 	　　　  　info.boundingClientRect(function(data) { //data - 各种参数
			// 	　　　  　console.log(data)  // 获取元素宽度
			// 	　　    }).exec()
			// 	       }
			// 	});
				

			// },
			back_1(){
				uni.reLaunch({
					url:"../home/home"
				})
			},
			sethead(){
				uni.chooseImage({
					count:1,
					sizeType:['original'],
					success: res => {
						console.log(res);
						this.userlist.Icon = res.tempFilePaths[0];
						
						// this.imgname ="/" + res.tempFiles[0].name;
						// console.log(JSON.stringify(res.tempFilePaths));
					}
				});
				
			},
			setthis(){
				
				// var sex;
				// var wtsex = this.userlist.usersSex
				// if(wtsex == '请选择性别'){
				// 	sex = 0
				// }else if(wtsex == '男'){
				// 	sex = 1
				// }else if(wtsex == '女'){
				// 	sex = 2
				// }else if(wtsex == '保密'){
				// 	sex = 3
				// };
				// console.log(this.sex[this.sexindex]);
				// console.log(this.sexindex);
				// var sex = this.sexindex;
				uni.request({
					url: 'http://192.168.0.101:9000/users/update',
					method: 'POST',
					data: {
						usersNick:this.userlist.usersNick,
						usersRealname:this.userlist.usersRealname,
						usersSex:this.sexindex

					},
					header:{
						'content-type': 'application/json',
						'cok':this.cok
					},
					success: res => {
						console.log(res)
						if(res.data.msg == '修改成功'){
							uni.showToast({
								title:'修改成功'
								
							})
						}else{
								uni.showToast({
									title:'修改失败'
								})
							}
					},
					fail: () => {},
					complete: () => {}
				});
				
				
				var Icon = this.userlist.Icon;
				uni.uploadFile({
					url:"http://192.168.0.101:9000/users/uploadIcon",
					header:{
						// 'content-type': 'multipart/form-data',
						'cok':this.cok
					},
					fileType:"image",
					filePath:Icon,
					formData: {
						'user': 'test'
					},
					name:'file',
					success: res => {
						console.log(res)
						console.log(this.userlist.Icon)
						console.log(this.userlist.usersIcon)
						console.log(Icon);
						
					}
				})
			},
			userinforadio(e){
				console.log(e);
				var it = e.currentTarget.id;
				var num = e.detail.value;
				if(it == "请选择性别"){
					this.sexindex = num
				}else if(it == "请选择日期"){
					this.dateindex = num
				}else if(it == "请选择地址"){
					this.siteindex = num
				}
			}
		}
	}
	
</script>



<style>
	.back_1{
		width: 20px;
		height: 20px;
		display: block;
		position: relative;
		left: 10px;
		top: 10px;
	}
	.userinfo_2_input {
		width: 70%;
		height: 30px;
		line-height: 30px;
		text-align: left;
		font-size: 12px;
	}

	.userinfo_2_radio {
		width: 70%;
		height: 30px;
		line-height: 30px;
		text-align: left;
		font-size: 12px;
	}

	.userinfo_2_txt {
		font-size: 12px;
		font-weight: bold;
		height: 30px;
		line-height: 30px;
		width: 30%;
	}

	.userinfo_self_box {
		width: 95%;
		height: 30px;
		display: flex;
		margin: 0 auto;
		border-bottom: 1px solid #999999;
	}

	.userinfo_box {
		position: relative;
		margin: 0;
		padding: 0;
	}



	.userinfo_1 {
		width: 100%;
		height: 50px;
		background-color: #FFFFFF;
		margin-top: 20px;
	}

	.userinfo_1_txt {
		font-size: 12px;
		float: left;
		padding-left: 10px;
		height: 50px;
		line-height: 50px;

	}

	.userinfo_1_img {
		width: 30px;
		height: 30px;
		padding-right: 10px;
		float: right;
		padding-top: 10px;
	}
</style>
