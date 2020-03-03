<template>
	<view>
		<!-- <view class="icon_len">
			<view class="icon_len_box" v-for="(item,index) in iconType" :key="index" :id="index" @click="tosort">
			    <image class="icon_len_img" :src="item.image" mode="aspectFill"></image><br><text class="icon_len_text" icon_txt>{{item.text}}</text>
			</view>
		</view> -->
		<view class="icon_len">
			<view class="icon_len_box" v-for="(item,index) in list.slice(0,10)" :key="index" :id="item.typeId" @click="tosort">
			    <image class="icon_len_img" :src="item.Icon" mode="aspectFill"></image><br><text class="icon_len_text" icon_txt>{{item.typeName}}</text>
			</view>
			<!-- <image class="icon_len_img" :src="this.list[0].typeIcon" mode="aspectFill"></image><br><text class="icon_len_text" icon_txt>{{this.list[0].typeName}}</text> -->
			
			
			
		</view>

	</view>
</template>

<script>
	export default{
		name:"sort",
		props:{
			list:{
				type:Array
			}
		},
		data(){
			return{
				iconType:[
					{
						image:"/static/zztj.png",
						text:"站长推荐"
					},{
						image:"/static/zztj.png",
						text:"卢松松专栏"
					},{
						image:"/static/zztj.png",
						text:"网赚项目"
					},{
						image:"/static/zztj.png",
						text:"软件协议"
					},{
						image:"/static/zztj.png",
						text:"抖音课程"
					},{
						image:"/static/zztj.png",
						text:"引流爆粉"
					},{
						image:"/static/zztj.png",
						text:"文案宝典"
					},{
						image:"/static/zztj.png",
						text:"免费课程"
					},{
						image:"/static/zztj.png",
						text:"自媒体"
					},{
						image:"/static/zztj.png",
						text:"全部分类"
					}
				]
			}
		},
		methods:{
			tosort(e){

				console.log(e);
				var num = e.currentTarget.id;
				uni.navigateTo({
					url:"../classlist/classlist?num=" + num
				});
				// var typeId = e.currentTarget.id;
				// uni.navigateTo({
				// 	url:"../classlist/classlist?typeId" + typeId,
				// 	success: res => {
						
				// 	}
				// });
			}
		}
	}
	
	
	
</script>

<style>
	.icon_len_img{
		width: 50px;
		height: 50px;

	}
	.icon_len_box{
		width: 20%;
		height: 70px;
		text-align: center;
		font-size: 0px;
	}
	.icon_len_text{
		font-size: 10px;
		width: 60px;
		height: 20px;

	}
	.icon_len{
		display: flex;
		width: 100%;
		height: 140px;
		flex-wrap: wrap;
		
	}
</style>
