<template>
	<view>
		<view class="muststudy_bigbox">
			<view class="muststudy_top">
				<image class="muststudy_img" src="/static/bf.png" mode="aspectFill"></image>
				<text class="muststudy_top_txt">必学</text>
				<text class="mustudy_top_right">查看更多></text>
			</view>
			<view class="muststudy_bigimg_box">
				<image class="muststudy_bigimg" src="/static/img3.png" mode=""></image>
				<cover-view class="muststudy_icon">{{study}}</cover-view>
			</view>
			
			<view class="muststudy_fbox">
				<text class="muststudy_state">{{state}}</text>
				<text class="muststudy_title">{{title}}</text>
				<text class="muststudy_ke">{{ke}}</text>
			</view>
			<text class="muststudy_money">{{money}}</text>
			<text class="muststudy_num">{{num}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		name: "muststudy",
		data() {
			return {
				state:"已完结",
				title:"【2019最新知识付费详情介绍】0基础小白也能月入过万1111111111",
				ke:"网创微课",
				money:"免费课程",
				num:"1节",
				study:"945人已学"
			}
		}
	}
</script>

<style>
	.muststudy_bigbox{
		margin-left: 10px;
		margin-right: 10px;
		margin-top: 5px;
		padding-top: 10px;
	}
	.muststudy_top{
		width: 100%;
		height: 22px;
		line-height: 22px;
		display: flex;
		position: relative;
		margin: 8px 0px;
	}
	.muststudy_img{
		width: 22px;
		height: 22px;
	}
	.muststudy_top_txt{
		font-size: 16px;
		font-weight: bold;
	}
	.mustudy_top_right{
		position: absolute;
		right: 5px;
		font-size: 12px;
		color: #999999;	
	}
	.muststudy_bigimg_box{
		position: relative;
		width: 100%;
	}
	.muststudy_bigimg{
		width: 100%;
		height: 180px;
	}
	.muststudy_icon{
		font-size: 14px;
		color: black;
		position: absolute;
		right: 5px;
		bottom: 5px;
		background-color: #555555;
		opacity: 0.7;
		border-radius: 4px;
		height: 20px;
		line-height: 20px;
		padding-left: 3px;
		padding-right: 3px;
		margin-bottom: 5px;
	}
	.muststudy_state{
		font-size: 12px;
		display: inline-block;
		height: 18px;
		line-height: 18px;
		width: 45px;
		color: #FFFFFF;
		background-color: #00c3ee;
		border-radius: 2px;
		text-align: center;
	}
	.muststudy_title{
		display: inline-block;
		width: 74%;
		font-size: 12px;;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.muststudy_ke{
		width: 16%;
		font-size: 10px;
		color: #808080;
		text-align: right;
	}
	.muststudy_fbox{
		width: 100%;
		height: 18px;
		line-height: 18px;
		display: flex;
		margin-bottom: 5px;
	}
	.muststudy_money{
		font-size: 12px;
		color: #FFFFFF;
		background-color: #C6AD77;
		border-radius: 10px;
		display: inline-block;
		width: 60px;
		text-align: center;
		height: 23px;
		line-height: 23px;
	}
	.muststudy_num{
		border-left: 1px solid #808080;
		color: #808080;
		font-size: 12px;
		margin-left: 5px;
		padding-left: 5px;
	}
</style>
