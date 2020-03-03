<template>
	<view class="">
		<view v-if="video" class="videocot">
			<view class="">
				<video id="myVideo" :src="videolist[curid].src" @error="videoErrorCallback" :danmu-list="danmuList" enable-danmu danmu-btn controls></video>
			</view>
			<view class="uni-list uni-common-mt">
				<view class="uni-list-cell">
					<view class="abd">
						<view class="uni-label">弹幕内容</view>
					</view>
					<view class="uni-list-cell-db">
						<input v-model="danmuValue" class="uni-input" type="text" placeholder="在此处输入弹幕内容" />
					</view>
				</view>
			</view>
			<view class="uni-btn-v">
				<button @click="sendDanmu" class="page-body-button">发送弹幕</button>
			</view>
			
		
		</view>
	
	
	
	
	</view>
</template>

<script>
	export default {
		onReady: function(res) {
			// #ifndef MP-ALIPAY
			this.videoContext = uni.createVideoContext('myVideo')
			// #endif
		},
		data() {
			return {
				curid: '',
				video:false,
				danmuList: [{
						text: '第 1s 出现的弹幕',
						color: '#ff0000',
						time: 1
					},
					{
						text: '第 3s 出现的弹幕',
						color: '#ff00ff',
						time: 3
					}
				],
				danmuValue: ''
				// videolist: [{
				// 		curid: '1',
				// 		src: "/static/111.mp4"
				// 	},
				// 	{
				// 		curid: '2',
				// 		src: '/static/222.mp4'

				// 	},
				// 	{
				// 		curid: '3',
				// 		src: "/static/333.mp4"
				// 	}
				// ]
			}
		},
		onLoad: function(e) {
			console.log(e);
			this.curid = e.id;
			console.log(this.curid)
		},
		methods: {
			sendDanmu: function() {
				this.videoContext.sendDanmu({
					text: this.danmuValue,
					color: this.getRandomColor()
				});
				this.danmuValue = '';
			},
			videoErrorCallback: function(e) {
				uni.showModal({
					content: e.target.errMsg,
					showCancel: false
				})
			},
			getRandomColor: function() {
				const rgb = []
				for (let i = 0; i < 3; ++i) {
					let color = Math.floor(Math.random() * 256).toString(16)
					color = color.length == 1 ? '0' + color : color
					rgb.push(color)
				}
				return '#' + rgb.join('')
			}
		}
	}
</script>

<style>
	.videocot{
		width: 100%;
		text-align: center;
	}

	.uni-common-mt{
		width: 100%;
		height: 40px;
	}
	.uni-list-cell{
		width: 100%;
		height: 40px;
		display: flex;
	}
	.abd{
		width: 30%;
		height: 40px;
		line-height: 40px;
	}
	.uni-list-cell-db{
		width: 70%;
		height: 40px;
		line-height: 40px;
	}
	.uni-input{
		width: 100%;
		height: 40px;
		line-height: 40px;
		text-align: left;
	}
	
	
</style>
