 <template>
 	<view>
		<view class="hotnews_bigbox">
			<view class="hotnews_top">
				<view class="hotnews_top_left">
					<image class="hotnews_top_left_img" src="/static/bf.png" mode="aspectFill"></image>
				</view>
				<text class="hotnews_top_left_txt">热门</text>
				<text class="hotnews_top_right">查看更多></text>
			</view>
			<view class="hotnews_box" v-for="(item,index) in hotnewscot" :key="index">
				<view class="hotnews_img_box">
					<image class="hotnews_img" :src="item.image" mode=""></image>
					<cover-view class="hotnews_icon">{{item.study}}</cover-view>
				</view>
				
				<text class="hotnews_hotstate">{{item.hotstate}}</text>
				<text class="hotnews_state">{{item.state}}</text>
				<text class="hotnews_title">{{item.title}}</text><br>
				<text class="hotnews_money1" v-if="item.money != 0">￥{{item.money}}</text>
				<text class="hotnews_money2" v-if="item.money == 0">免费课程</text>
				<text class="hotnews_num">{{item.num}}</text>
			</view>
		</view>
 	</view>
 </template>
 	
 <script>
 	export default{
 		name:"hotnews",
 		data(){
 			return{
 				hotnewscot:[
 					{
 						image:"/static/img1.png",
						hotstate:"Hot",
 						state:"已完结",
 						title:"小白也可以零基础经营网站月入5万",
 						money:"39.00",
 						num:"1节",
						study:"213213人已学"
 					},
 					{
 						image:"/static/img1.png",
						hotstate:"Hot",
 						state:"已完结",
 						title:"小白也可以零基础经营网站月入5万",
 						money:"0",
 						num:"1节",
						study:"2133人已学"
 					},
 					{
 						image:"/static/img1.png",
						hotstate:"Hot",
 						state:"已完结",
 						title:"小白也可以零基础经营网站月入5万",
 						money:"39.00",
 						num:"1节",
						study:"21人已学"
 					},
 					{
 						image:"/static/img1.png",
						hotstate:"Hot",
 						state:"已完结",
 						title:"小白也可以零基础经营网站月入5万",
 						money:"39.00",
 						num:"1节",
						study:"2人已学"
 					},
 					{
 						image:"/static/img1.png",
						hotstate:"Hot",
 						state:"已完结",
 						title:"小白也可以零基础经营网站月入5万",
 						money:"0",
 						num:"1节",
						study:"2435人已学"
 					},
 					{
 						image:"/static/img1.png",
						hotstate:"Hot",
 						state:"已完结",
 						title:"小白也可以零基础经营网站月入5万",
 						money:"0",
 						num:"1节",
						study:"5213人已学"
 					},
 					{
 						image:"/static/img1.png",
						hotstate:"Hot",
 						state:"已完结",
 						title:"小白也可以零基础经营网站月入5万",
 						money:"39.00",
 						num:"1节",
						study:"2456人已学"
 					},
 					{
 						image:"/static/img1.png",
						hotstate:"Hot",
 						state:"已完结",
 						title:"小白也可以零基础经营网站月入5万",
 						money:"39.00",
 						num:"1节",
						study:"252人已学"
 					},
 					{
 						image:"/static/img1.png",
						hotstate:"Hot",
 						state:"已完结",
 						title:"小白也可以零基础经营网站月入5万",
 						money:"0",
 						num:"1节",
						study:"213人已学"
 					},
 					{
 						image:"/static/img1.png",
						hotstate:"Hot",
 						state:"已完结",
 						title:"小白也可以零基础经营网站月入5万",
 						money:"39.00",
 						num:"1节",
						study:"2876人已学"
 					}
 				]
 			}
 		}
 	}
 </script>
 
 
 <style>
	 .hotnews_top{
		 width: 100%;
		 height: 22px;
		 display: flex;
		 line-height: 22px;
		 padding-top: 7px;
		 padding-bottom: 10px;
		 position: relative;
		 margin-left: 10px;
		 margin-right: 10px;
	 }
	 .hotnews_top_left_img{
		 width: 22px;
		 height: 22px;

	 }
	 .hotnews_top_left_txt{
		 font-size: 16px;
		 height: 22px;
		 line-height: 22px;
		 font-weight: bold;
	 }
	 .hotnews_top_right{
		position: absolute;
		right: 5px;
		font-size: 12px;
		color: #999999;
	 }
 	.hotnews_bigbox{
 		width: 100%;
 		padding: 0px;
		margin: 0px;
		display: flex;
		flex-wrap: wrap;
 	}
 	.hotnews_box{
 		width: 45%;
 		height: 150px;
		margin-left: 8px;
		margin-right: 8px;
/* 		border: 1px solid red; */
 		position: relative;
		margin-bottom: 20px;
 	}
	.hotnews_img_box{
		position: relative;
		width: 100%;
		height: 80px;
	}
 	.hotnews_img{
 		width: 100%;
 		height: 80px;
		border-radius: 3px;
 	}
	.hotnews_icon{
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
	.hotnews_hotstate{
		position: absolute;
		display: block;
		width: 30px;
		height: 25px;
		line-height: 25px;
		text-align: center;
		right: 0px;
		top: 0px;
		font-size: 12px;
		color: #FFFFFF;
		transform: rotate(45deg);
		padding: 0px;
		margin: 0px;
	}
	.hotnews_state{
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
	.hotnews_title{
		display: inline;
		/* float: left; */
		width: 100%;
		height: 36px;
		font-size: 12px;;
	}
	.hotnews_money1{
		font-size: 14px;
		width: 60px;
		text-align: center;
		color: #F0AD4E;
		display: inline-block;
	}
	.hotnews_money2{
		font-size: 12px;
		color: #FFFFFF;
		background-color: #C6AD77;
		border-radius: 10px;
		display: inline-block;
		padding-left: 2px;
		padding-right: 2px;
		text-align: center;
		margin-right: 5px;
		height: 24px;
		line-height: 24px;
	}
	.hotnews_num{
		display: inline-block;
		width: 30px;
		text-align: center;
		font-size: 14px;
		border-left: 1px solid #808080;
		color: #808080;
	}
 </style>