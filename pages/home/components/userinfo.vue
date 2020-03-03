<template>
	<view class="userinfo_box">
		
		<view class="userinfo_1">
			<text class="userinfo_1_txt">头像</text>
			<image class="userinfo_1_img" src="/static/user.jpg" mode=""></image>
		</view>
		<view class="userinfo_2">
			<view class="userinfo_self_box" v-for="(item,index) in userinfolist" :key="index" >
				<text class="userinfo_2_txt"> {{item.title}} </text>
				<input class="userinfo_2_input" type="text" :value="item.info" :placeholder="item.placeholder" />
				<!-- <text class="userinfo_2_radio" v-if="item.input" :id="index">{{item.info}}</text> -->
		<!-- 		<input @click="userinforadio" class="userinfo_2_radio" v-if="item.input" type="text" :value="item.info" :id="index" :placeholder="item.placeholder" disabled/> -->
				<!-- <picker v-if="item.input" class="userinfo_2_radio" :range="item.placeholder" @change="userinforadio" :id="index"> -->
					<!-- <! {{userinfoset[userindex]}} -->
					<!-- {{userinfolist[userindex].placeholder[userinfolist[userindex].index]}} -->
				<!-- </picker> -->
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

		

		
	</view>
</template>

<script>
	
	export default {
		data(){
			return{
				sex:["请选择性别","男","女"],
				sexindex:0,
				date:["请选择日期",1998,1999,2000],
				dateindex:0,
				site:["请选择地址","浙江","北京","上海"],
				siteindex:0,
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
					// {
					// 	title: "性别",
					// 	info: "",
					// 	placeholder: ["请选择性别","男","女"],
					// 	input: true,
					// 	index:0
					// },
					// {
					// 	title: "生日",
					// 	info: "",
					// 	placeholder: ["请选择日期",1998,1999,2000],
					// 	input: true,
					// 	index:0
					// },
					// {
					// 	title: "居住地址",
					// 	info: "",
					// 	placeholder: ["请选择地址","浙江","北京","上海"],
					// 	input: true,
					// 	index:0
					// }
				]
			}
		},
		methods:{
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

 
 
 
 
 
 
 