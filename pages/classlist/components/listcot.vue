<template>
	<view class="">
		<!-- <view class="listCot">
			<view class="listBox" v-for="(item,index) in listdata" :key="index">
				<view class="list_imgBox">
					<image class="list_img" :src="item.image" mode="aspectFill"></image>
					<text class="list_hot">{{item.hot}}</text>
					<text class="list_study">{{item.study}}</text>
				</view>
				<view class="list_infoBox">
					<text class="list_title">{{item.title}}</text>
					<text class="list_money">￥{{item.money}}</text>
					<text class="list_num">{{item.num}}</text><br>
					<text class="list_state">{{item.state}}</text>
				</view>
			</view>
			<view class="load-more">{{loadtext}}</view>
		</view> -->
		
		<view class="" v-for="(items,index) in listdata" :key="index" >
			<view class="listCot" >
				<view class="listBox" >
					<view class="list_imgBox">
						<image class="list_img" :src="items.list.image" mode="aspectFill"></image>
						<text class="list_hot">{{items.list.hot}}</text>
						<text class="list_study">{{items.list.study}}</text>
					</view>
					<view class="list_infoBox">
						<text class="list_title">{{items.list.title}}</text>
						<text class="list_money">￥{{items.list.money}}</text>
						<text class="list_num">{{items.list.num}}</text><br>
						<text class="list_state">{{items.list.state}}</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		name:"listcot",
		data(){
			return{
				listdata:[
					{
						
						{
							image:"../../../static/img1.png",
							hot:"vip",
							study:"▶123人已学习",
							title:"网创微课代理与加盟站长推广方法详细流程教程。（代理，站长才有权限学习）",
							money:"2200.00",
							num:"19节",
							state:"已完结",
						
						}
					},
					{
						
						list:{
							image:"../../../static/img1.png",
							hot:"vip",
							study:"▶123人已学习",
							title:"网创微课代理与加盟站长推广方法详细流程教程。（代理，站长才有权限学习）",
							money:"2200.00",
							num:"19节",
							state:"已完结",
						
						}
					},
					{
						
						list:{
							image:"../../../static/img1.png",
							hot:"vip",
							study:"▶123人已学习",
							title:"网创微课代理与加盟站长推广方法详细流程教程。（代理，站长才有权限学习）",
							money:"2200.00",
							num:"19节",
							state:"已完结",
						
						}
					},
					{
						
						list:{
							image:"../../../static/img1.png",
							hot:"vip",
							study:"▶123人已学习",
							title:"网创微课代理与加盟站长推广方法详细流程教程。（代理，站长才有权限学习）",
							money:"2200.00",
							num:"19节",
							state:"已完结",
						
						}
					},
					{
					
						list:{
							image:"../../../static/img1.png",
							hot:"vip",
							study:"▶123人已学习",
							title:"网创微课代理与加盟站长推广方法详细流程教程。（代理，站长才有权限学习）",
							money:"2200.00",
							num:"19节",
							state:"已完结",
						
						}
					},
					{
						
						list:{
							image:"../../../static/img1.png",
							hot:"vip",
							study:"▶123人已学习",
							title:"网创微课代理与加盟站长推广方法详细流程教程。（代理，站长才有权限学习）",
							money:"2200.00",
							num:"19节",
							state:"已完结",
							
						}
					},
					{
						
						list:{
							image:"../../../static/img1.png",
							hot:"vip",
							study:"▶123人已学习",
							title:"网创微课代理与加盟站长推广方法详细流程教程。（代理，站长才有权限学习）",
							money:"2200.00",
							num:"19节",
							state:"已完结",
							
						}
					}
				]
			}
		}
		
	}
</script>

<style>
	.listCot{
		width: 100%;
		margin-left: 11px;
		
	}
	.listBox{
		width: 93%;
		display: flex;
		padding-top: 8px;
		padding-bottom: 8px;
		border-bottom: 1px solid #999999;
	}
	.list_imgBox{
		font-size: 0px;
		width: 45%;
		height: 80px;
		position: relative;
		padding-right: 10px;
		/* border-bottom: 1px solid #999999; */
	}
	.list_img{
		width: 100%;
		height: 80px;
		border-radius: 4px;
		/* vertical-align: middle; */
		
	}
	.list_infoBox{
		width: 45%;
/* 		vertical-align: middle; */
		font-size: 10px;
		height: 80px;
		position: relative;
	/* 	border-bottom: 1px solid #999999; */
	}
	.list_hot{
		position: absolute;
		display: block;
		width: 30px;
		height: 25px;
		line-height: 25px;
		text-align: center;
		right: 10px;
		top: 0px;
		font-size: 12px;
		color: #FFFFFF;
		transform: rotate(45deg);
		padding: 0px;
		margin: 0px;
	}
	.list_study{
		font-size: 12px;
		color: #FFFFFF;
		padding-left: 3px;
		padding-right: 3px;
		border-radius: 3px;
		background-color: #333333;
		opacity: 0.7;
		position: absolute;
		right: 12px;
		bottom: 2px;
	}
	.list_title{
		display: inline-block;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
		width: 100%;
		height: 34px;
		line-height: 17px;
		font-size: 12px;
		overflow: hidden;
		text-overflow: ellipsis;
		margin-bottom: 5px;
	}
	.list_money{
		font-size: 10px;
		color: #F0AD4E;
		height: 15px;
		line-height: 15px;
		margin-right: 3px;
	}
	.list_num{
		font-size: 10px;
		color: #999999;
		border-left: 1px solid #999999;
		padding-left: 3px;
	}
	.list_state{
		position: absolute;
		font-size: 10px;
		font-weight: bold;
		left: 0px;
		bottom: 8px;
		
	}
</style>
