<template>
	<view>
		<view class="" v-if="user.vip" >
			
		</view>
		<view class="nobox" v-if="!user.vip">
			<image class="warn_img" src="../../static/tabbar/warn.png" mode=""></image><br>
			<text>您不是VIP会员，无法访问该功能</text>
			<button class="nobox_btn" type="primary" @click="btnBack">确定</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				user:{
					vip:false
				}
			}
		},
		methods: {
			btnBack(){
				uni.switchTab({
					url:"../index/index"
				})
			}
		}
	}
</script>

<style>
	.nobox{
		margin-top: 50px;
		width: 100%;
		text-align: center;
	}
	.warn_img{
		width: 100px;
		height: 100px;
		margin-bottom: 10px;
	}
	.nobox_btn{
		margin-top: 10px;
	}
</style>
