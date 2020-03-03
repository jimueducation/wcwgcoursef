<template>
	<view>
		<view class="vip_top">
			<image class="vip_top_left" src="/static/tabbar/back.png" mode="aspectFill"></image>
			<text class="vip_top_middle">我的vip服务</text>
		</view>
		<view class="vip_top_img">
			<image style="width: 100%;height: 200px;" src="/static/img1.png" mode=""></image>
		</view>
	</view>
</template>

<script>
	export default{
		name:"top",
		date(){
			return{
				
			}
		}
	}
</script>

<style>
	.vip_top{
		width: 100%;
		hyphenate-limit-lines: 25px;
		line-height: 25px;
		font-size: 16px;
		text-align: center;
		position: relative;
		padding-top: 5px;
		padding-bottom: 5px;
	}
	.vip_top_left{
		position: absolute;
		left: 0px;
		width: 20px;
		height: 25px;
		margin-left: 10px;
		cursor: pointer;
	}
	.vip_top_middle{
		text-align: center;
	}
</style>
