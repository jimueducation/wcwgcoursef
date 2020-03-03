<template>
	<view class="">
		<view class="search">
			<image class="search_img" src="/static/search.png" mode="aspectFill"  ></image>
			<input class="search_text" type="text" placeholder="搜索您感兴趣的课程" disabled />
		</view>
		<swiper class="runImg" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" indicator-color="#fff" @click="forVip">
			<block v-for="(item,index) in banner" :key="index">
				<swiper-item>
						<image  class="runImg_a" :src="item.image" mode="aspectFill"></image>
				</swiper-item>
			</block>
			
		</swiper>
	</view>
</template>

<script>
export default{
	name:"search",
	data(){
		return{
			banner:[
					{
						image:"/static/img1.png"
					},
					{
						image:"/static/img2.png"
					},
					{
						image:"/static/img3.png"
					},
					{
						image:"/static/img4.png"
					}
			]
		}
	},
	methods: {
		forVip(){
			uni.switchTab({
				url:"../vip/vip"
			})
		}
	}
}
	
</script>

<style>
	.search{
		padding: 0px;
		margin: 0px;
		width: 100%;
		border: 1rpx solid #999999;
		border-radius: 4px;
		height: 30px;
		line-height: 30px;
		display: flex;
	}
	.search_img{
		padding: 0;
		width: 22px;
		height: 22px;
		margin:auto 10px;
	}
	.search_text{
		line-height: 30px;
		height: 30px;
		
	}
	.runImg{
		margin-top: 2px;
		height: 180px;
		width: 100%;
		margin-bottom: 8px;
	}
	.runImg_a{
		width: 100%;
		height: 180px;
	}
</style>
