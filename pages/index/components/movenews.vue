<template>
	<view>
		<view class="movenews_box">
			<view class="movenews_img_box">
				<image class="movenews_img" src="/static/laba.png" mode="aspectFill"></image>
			</view>
			<text class="movenews_text">{{showMove}}</text>
			<text class="movenews_move">更多></text>
		</view>
		<view class="update_bigbox">
			<view class="update_bigbox_title">
				<view class="update_bigbox_title_img">
					<image style="width: 20px;height: 20px;" src="/static/news.png" mode=""></image>
				</view>
				<text class="update_bigbox_title_txt">最新更新</text>
			</view>
			<view class="update_box" v-for="(item,index) in updatecot" :key="index">
				<view class="update_img_box">
					<image class="update_img" :src="item.image" mode="aspectFill"></image>
					<cover-view class="update_txt">{{item.txt}}</cover-view>
				</view>
				<view class="update_content">
					<text class="update_title">{{item.title}}</text>
					<text class="update_down">{{item.down}}</text>
					<text class="update_date">{{item.date}}</text>
					<text class="update_money">{{item.money}}</text>
				</view>
			</view>
		</view>
	</view>
</template>
	
<script>
	export default{
		name:"movenews",
		data(){
			return{
				showMove:"网创微课APP上线啦！APP公众号同步更新11111111111111111111",
				updatecot:[
					{
						image:"/static/img1.png",
						txt:"▶365人已学习",
						title:"(第595期2020最新实战:全自动化挂机项目，无脑挂机日赚100+)",
						down:"全套课件下载",
						date:"更新时间",
						money:"￥39.00"
					},
					{
						image:"/static/img2.png",
						txt:"▶3人已学习",
						title:"(第595期2020最新实战:全自动化挂机项目，无脑挂机日赚100+)",
						down:"全套课件下载",
						date:"更新时间",
						money:"￥39.00"
					},
					{
						image:"/static/img3.png",
						txt:"▶31人已学习",
						title:"(第595期2020最新实战:全自动化挂机项目，无脑挂机日赚100+)",
						down:"全套课件下载",
						date:"更新时间",
						money:"￥39.00"
					}
				]
			}
		}
	}
</script>

<style>
	.update_bigbox_title{
		width: 100%;
		height: 26px;
		display: flex;
		line-height: 26px;
		padding-bottom: 8px;
		padding-top: 5px;
	}
	.update_bigbox_title_img{
		width: 20px;
		height: 20px;
		margin: auto 5px;
	}
	.update_bigbox_title_txt{
		font-size: 18px;
		font-weight: bold;
		height: 26px;
		line-height: 26px;
	}
	.movenews_box{
		width: 100%;
		height: 30px;
		border-top: 1px solid #999999;
		border-bottom: 1px solid #999999;
		display: flex;
		align-items: center;
	}
	.movenews_text{
		margin:0 6px;
		font-size: 12px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		width: 85%;
	}
	.movenews_img_box{
		width: 50px;
		height: 30px;
		text-align: center;
		border-right: 1px solid #999999;
	}
	.movenews_img{
		width: 30px;
		height: 30px;
	}
	.movenews_move{
		font-size: 10px;
		width:60px;
		height: 30px;
		line-height: 30px;
		text-align: center;
		border-left: 1px solid #999999;
	}
	.update_bigbox{
		width: 94%;
		position: relative;
		font-size: 0px;
		padding: 0px;
		margin-top: 8px;
		margin-left: 10px;
		margin-right: 10px;
	}
	.update_box{
		width: 100%;
		display: flex;
		height: 70px;
		margin-right: 10px;
		margin-bottom: 8px;
	}
	.update_img_box{
		width: 45%;
		height: 70px;
		position: relative;
	}
	.update_content{
		width: 50%;
		height: 70px;
		font-size: 0px;
		padding: 0px;
		margin: 0px;
		margin-left: 10px;
	}
	.update_img{
		width: 100%;
		height: 70px;
		border-radius: 3px;
	}
	.update_txt{
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
	}
	.update_title{
		display: inline-block;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
		width: 100%;
		height: 40px;
		line-height: 20px;
		font-size: 12px;
		overflow: hidden;
		text-overflow: ellipsis;
		font-weight: bold;
		
	}
	.update_down{
		font-size: 10px;
		display: block;
		height: 15px;
		line-height: 15px;
		border-bottom: 1px solid #999999;
		color: #808080;
	}
	.update_date{
		font-size: 10px;
		height: 15px;
		line-height: 15px;
		color: #999999;
	}
	.update_money{
		font-size: 14px;
		color: #F0AD4E;
		float: right;
		height: 15px;
		line-height: 15px;
	}
</style>
