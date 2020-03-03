<template>
	<view>
		<view class="choose_box">
			<view class="choose_left">
				<image style="width: 20px;height: 20px;vertical-align:middle" src="/static/vi3.png" mode="aspectFill"></image><text class="choose_left_txt" @click="chooseThis1">我的VIP</text>
			</view>
			<view class="choose_right">
				<image style="width: 20px;height: 20px;vertical-align:middle" src="/static/order.png" mode="aspectFill"></image><text class="choose_left_txt" @click="chooseThis2">订单记录</text>
			</view>
		</view>
		<view class="" v-if="chooseWt">
			11111
		</view>
		<view class="" v-if="chooseWt == false">
			22222
		</view>
		
	</view>
</template>
	
<script>
	export default{
		name:"choose",
		data(){
			return{
				chooseWt:true
			}
		},
		methods:{
			chooseThis1(e){
				this.chooseWt = true;
				console.log(e);
			},
			chooseThis2(e){
				this.chooseWt = false;
				console.log(e);
			}
		}
	}
</script>

<style>
	.choose_box{
		display: flex;
		width: 100%;
		height: 20px;
		line-height: 20px;
		padding-top: 5px;
		padding-bottom: 5px;
		box-shadow: 0px 3px 1px #F1F1F1;
	}
	.choose_left_txt{
		text-align: center;
		font-size: 16px;
		display: inline-block;
		height: 20px;
		line-height: 20px;
		vertical-align:middle;
	}
	.choose_right{
		border-left: 1px solid #999999;
		width: 50%;
		height: 20px;
		line-height: 20px;
		text-align: center;
	}
	.choose_left{
		width: 50%;
		height: 20px;
		line-height:20px;
		text-align: center;
	}
</style>
