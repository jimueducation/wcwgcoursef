<template>
	<view class="user_Box">
		<view class="user_top_Box" >
			<!-- <image class="top_img" src="/static/img3.png" mode=""></image> -->
			
			<view class="user_top">
				<image class="user_img" v-model="usersNickandId.Icon" :src="usersNickandId.Icon" :key="usersNickandId.Icon"></image><br>
				<text class="user_id">{{usersNickandId.usersNick}}</text>
				<text class="user_num">学号：{{usersNickandId.usersId}}</text>
			</view>
			
		</view>
		<view class="order_box" >
			<view class="order_top">
				<text class="order_top_1" >全部订单</text>
				<text class="order_top_2" >查看全部订单></text>
			</view>
			<view class="order_btm">
				<view class="order_btm_box">
					<image class="order_btm_1" src="/static/userorder/1.png" mode=""></image><br>
					<text class="order_btm_2">待付款</text>
				</view>
				<view class="order_btm_box">
					<image class="order_btm_1" src="/static/userorder/2.png" mode=""></image><br>
					<text class="order_btm_2">已付款</text>
				</view>
				<view class="order_btm_box">
					<image class="order_btm_1" src="/static/userorder/3.png" mode=""></image><br>
					<text class="order_btm_2">未核销</text>
				</view>
				<view class="order_btm_box">
					<image class="order_btm_1" src="/static/userorder/4.png" mode=""></image><br>
					<text class="order_btm_2">已取消</text>
				</view>
				
			</view>
			
			
		</view>
		<view class="order_box_1" >
			<view :id="index" class="order_box_1_ct" v-for="(item,index) in orderlist" :key="index" @click="orderTo">
				<image class="order_box_1_ct_1" :src="item.image" mode=""></image>
				<text class="order_box_1_ct_2">{{item.txt}}</text>
				<text class="order_box_1_ct_3">></text>
			</view>
			
		</view>
		<view class="order_bottom">
			<text class="order_bottom_txt">免责声明：本站资源均通过互联网公开渠道获取，如有侵权，请联系本站管理员，核实后处理。</text>
		</view>
		
		
		
	</view>
</template>

<script>
	export default{
		props:{
			usersNickandId:{
				
			}
		},
		name:"loadok",
		methods:{
			orderTo(e){
				console.log(e)
				if(e.currentTarget.id == 1){
					console.log(e.currentTarget.id);
					uni.switchTab({
						url:"../vip/vip"
					})
				}
			}
		},
		// onShow(){
		// 	console.log(this.usersNickandId.cookie)
			// uni.request({
			// 	url: 'http://192.168.0.100:9000/users/getUsersInformation',
			// 	method: 'GET',
			// 	data: {},
			// 	header:{
			// 		'content-type': 'application/x-www-form-urlencoded',
			// 		'cok':this.cok
			// 	},
			// 	success: res => {
			// 		this.usersInfo1 = res.data.data;;
			// 		console.log(this.usersInfo1)
			// 	},
			// 	fail: () => {},
			// 	complete: () => {}
			// });
		// },
		data(){
			return{
				usersInfo1:{},
				orderlist:[
					{
						image:"/static/userorder/5.png",
						txt:"订阅消息"
					},
					{
						image:"/static/userorder/6.png",
						txt:"VIP服务"
					},
					{
						image:"/static/userorder/7.png",
						txt:"我的足迹"
					},
					{
						image:"/static/userorder/8.png",
						txt:"收藏课程"
					},
					{
						image:"/static/userorder/9.png",
						txt:"网创微课"
					},
					{
						image:"/static/userorder/10.png",
						txt:"学习时长"
					},
					{
						image:"/static/userorder/11.png",
						txt:"优惠券"
					},
					{
						image:"/static/userorder/12.png",
						txt:"绑定手机"
					},
					{
						image:"/static/userorder/13.png",
						txt:"APP下载"
					}
				]
			}
		}
	}
</script>

<style>
	.order_bottom{
		width: 90%;
		height: 60px;
		margin: 5px auto;
		font-size: 10px;
		color: #999999;
		text-align: center;
	}
	.order_bottom_txt{
		height: 60px;
		line-height: 30px;
	}
	.order_box_1{
		background-color: #FFFFFF;
	}
	.order_box_1_ct{
		width: 90%;
		height: 40px;
		display: flex;
		position: relative;
		margin: 5px auto;
		border-bottom:1px solid #999999;
	}
	.order_box_1_ct_1{
		width: 20px;
		height: 20px;
		margin: auto 0;
	}
	.order_box_1_ct_2{
		font-size: 12px;
		color: #999999;
		height: 40px;
		line-height: 40px;
		width: 100px;
	}
	.order_box_1_ct_3{
		position: absolute;
		right: 3px;
		color: #999999;
		font-size: 14px;
		height: 40px;
		line-height: 40px;
	}
	.order_box{
		margin-top: 5px;
		width: 100%;
		height: 100px;
		background-color: #FFFFFF;
	}
	.order_top{
		margin: 0 auto;
		width: 90%;
		height: 40px;
		border-bottom: 1px solid #999999;
	}
	.order_top_1{
		height: 40px;
		line-height: 40px;
		float: left;
		font-size: 16px;
		font-weight: bold;
	}
	.order_top_2{
		height: 40px;
		line-height: 40px;
		float: right;
		font-size: 10px;
		color: #999999;
	}
	.order_btm{
		width: 100%;
		height: 60px;
		display: flex;
	}
	.order_btm_box{
		width: 25%;
		height: 60px;
		text-align: center;
	}
	.order_btm_1{
		width: 20px;
		height: 20px;
		margin-top: 10px;
	}
	.order_btm_2{
		width: 100%;
		height: 30px;
		line-height: 30px;
		font-size: 12px;
		text-align: center;
	}
	.user_Box{
		margin-left: -10px;
		margin-right: -10px;
	}
	.user_top_Box{
		width: 100%;
		height: 200px;
/* 		z-index: -1; */
		background-color: #999999;
		position: relative;
	}
/* 	.top_img{
		width: 100%;
		height: 100%;
		z-index: -1;
	} */
	.user_img{
		width: 50px;
		height: 50px;
		border-radius: 100%;
		margin: 0 auto;
	}
	.user_top{
		width: 100px;
		height: 100px;
		text-align: center;
		padding-top: 50px;
		margin: 0 auto;
		display: flex;
		flex-wrap: wrap;
	}
	.user_id{
		font-size: 14px;
		font-weight: bold;
		color: #FFFFFF;
		width: 100px;
		height: 20px;
	}
	.user_num{
		font-size: 14px;
		color: #FFFFFF;
		width: 100px;
		height: 20px;
	}

	page{
		background-color: #F1F1F5;
	}
</style>
