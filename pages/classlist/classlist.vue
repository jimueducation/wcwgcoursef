<template>
	<view class="clBox" :class="{active: isActive}">
		<view class="search_box">
			<view class="search">
				<image class="search_img" src="/static/search.png" mode="aspectFill"></image>
				<input class="search_text" type="text" placeholder="搜索您感兴趣的课程" />
			</view>
		</view>
		<view class="class_title_box">
			<view class="class_title_1" @click="toclassleft">
				<text class="class_title_1_txt">免费课程</text>
			</view>
			<view class="class_title_1">
				<text class="class_title_2_txt" @click="toclassright">全部分类</text>
			</view>
		</view>
		<view class="class_left_bigbox" v-if="cleft">
			<view class="class_left_box">
				<view class="class_left_txt" :class="{active1: item.active}" v-for="(item,index) in listclass1" :key="index" :id="index"
				 @click="tothere">
					<text>{{item.cname}}</text>
				</view>
				<view class="class_left_back" @click="cleftback"></view>
			</view>

		</view>



		<view class="class_right_bigbox" v-if="cright">
			<view class="class_right_right_box">
				<view class="class_right_box">
					<scroll-view class="class_right_left" scroll-y="true">
						<view class="options_left" :class="{'active2': item.active}" v-for="(item,index) in list1" :key="index" :id="item.id"
						 @click="totherea">
							<image class="opstions_img" :src="item.Icon" mode=""></image>
							<text class="options">{{item.typeName}}</text>
						</view>
					</scroll-view>
					<scroll-view class="class_right_right" scroll-y="true">
						<view class="options_right" :class="{'active2': items.active}" v-for="(items,index) in list2" :key="index" :id="items.id"
						 @click="tothereb">
							<image class="opstions_img" :src="items.Icon" mode=""></image>
							<text class="options2">{{items.typeName}}</text>
						</view>
					</scroll-view>

				</view>

			</view>
			<view class="class_left_back" @click="cleftback"></view>

		</view>

		<scroll-view :style="{height: hei.windowHeight + 'px'}" class="listCot" scroll-y="true" @scrolltolower="onBottom">
			<view class="listCot_box">
				<view class="listBox" @click="getoorder" v-for="(item,index) in listdata" :key="index" :id="item.courseId">
					<view class="list_imgBox">
						<image class="list_img" :src="item.Icon" mode="aspectFill"></image>
						<text class="list_hot">{{item.courseLabel}}</text>
						<text class="list_study">{{item.studyNum}}</text>
					</view>
					<view class="list_infoBox">
						<text class="list_title">{{item.courseName}}</text>
						<text class="list_money">￥{{item.coursePrice}}</text>
						<text class="list_num">{{item.courseNum}}节</text><br>
						<text class="list_state">{{item.isOver}}</text>
					</view>
				</view>


			</view>
		</scroll-view>
		
		<!-- <view :style="{height: hei.windowHeight + 'px'}">
			
		</view> -->



	</view>
</template>

<script>
	export default {
		data() {
			return {
				hei:'',
				cleft: false,
				cright: false,
				num: 2,
				list1: [],
				list2: [],
				listnum: 0,
				pagecurrent: 1,
				isActive: false,
				isActive1: false,
				isActive2: false,
				isActive3: false,
				isActive4: false,
				isActive5: false,
				listdata: [],
				pages: true,
				listclass1: [{
						cname: "综合排序",
						active: true
					},
					{
						cname: "免费课程",
						active: false
					},
					{
						cname: "价格优先",
						active: false
					},
					{
						cname: "人气优先",
						active: false
					},
					{
						cname: "好评优先",
						active: false
					}
				]
			}
		},
		components: {

		},
		onLoad: function(e) {
			console.log(e);
			// console.log(e.list);
			// console.log(e.num);
			this.listnum = e.num;
			var _this = this;
			uni.getSystemInfo({
			　　success: function(res) { // res - 各种参数
			　　   console.log(res); // 屏幕的宽度 
					var a = res;
					a.windowHeight = a.windowHeight - 84;
					_this.hei = a;
					console.log(_this.hei)
			       }
			});

			uni.request({
				url: 'http://192.168.0.101:9000/course/findCourseList',
				method: 'GET',
				data: {
					pageCurrent: this.pagecurrent,
					pageSize: 15,
					typeId: this.listnum
				},
				success: res => {
					console.log('asdsad')
					console.log(res)
					if (res.data.msg === null) {
						this.pagecurrent++;
						this.listdata = res.data.data;
						for (var i = 0; i < this.listdata.length; i++) {
							this.listdata[i].Icon = 'http://192.168.0.101:9001/' + this.listdata[i].courseIcon
						};
						console.log(this.listdata)
					}

				},
				fail: () => {},
				complete: () => {}
			});
			uni.request({
				url: 'http://192.168.0.101:9000/courseType/findAllCourseType',
				method: 'GET',
				data: {},
				success: res => {
					if (res.data.msg === null) {
						var a = res.data.data;
						for (var i = 0; i < a.length; i++) {
							a[i].active = false;
							a[i].id = a[i].typeId;
							a[i].Icon = 'http://192.168.0.101:9001/' + a[i].typeIcon
						};
						a[0].active = true;
						this.list1 = a;
						console.log(this.list1);
						console.log('ok');

					}
				},
				fail: () => {},
				complete: () => {}
			});
			uni.request({
				url: 'http://192.168.0.101:9000/courseType/findAllCourseType',
				method: 'GET',
				data: {},
				success: res => {
					if (res.data.msg === null) {
						var a = res.data.data;
						for (var i = 0; i < a.length; i++) {
							a[i].active = false;
							a[i].id = a[i].typeId;
							a[i].Icon = 'http://192.168.0.101:9001/' + a[i].typeIcon
						};
						a[0].active = true;
						this.list2 = a;
						console.log(this.list2);
						console.log('ok');

					}
				},
				fail: () => {},
				complete: () => {}
			});

			// uni.request({
			// 	url: 'http://192.168.0.101:9000/course/findCourseList',
			// 	method: 'GET',
			// 	data: {
			// 		pageCurrent:1,
			// 		pageSize:15,
			// 		typeId:0
			// 	},
			// 	success: res => {
			// 		if(res.data.msg === null){
			// 			console.log(res);
			// 			var a = res.data.data;
			// 			for(var i = 0;i < a.length;i ++){
			// 				a[i].active = false;
			// 				a[i].Icon = "http://192.168.101:9001/" + a[i].courseIcon
			// 			}
			// 			a[0].active = true;
			// 			this.list2 = a;
			// 			// console.log(this.list2)
			// 		}
			// 	},
			// 	fail: () => {},
			// 	complete: () => {}
			// });
		},
		// onLoad() {
		// 	var This = this;
		// 	uni.getSystemInfo({
		// 		success(res) {
		// 			console.log(This);
		// 			This.height = res.screenHeight;
		// 		}
		// 	})
		// }
		// ,


		// onLoad:function(e){
		// 	console.log(e.typeId);
		// 	var num = e.typeId;
		// 	uni.request({
		// 		url: 'hettp://192.168.0.105:9000/course/findCourseList',
		// 		method: 'GET',
		// 		data: {},
		// 		success: res => {
		// 			console.log(res)
		// 		},
		// 		fail: () => {},
		// 		complete: () => {}
		// 	});
		// },


		methods: {
			getoorder(e) {
				console.log(e);
				var id = e.currentTarget.id;

				uni.navigateTo({
					url: '../order/order?id=' + id
				});
			},
			toclassleft() {
				var state = this.cleft;
				if (this.cright == true) {
					this.cright = false;
					this.num--;
				};
				var len = this.num;
				this.isActive = (len % 2 == 0) ? true : false;
				if (state == true) {
					this.cleft = false
				} else if (state == false) {
					this.cleft = true
				};
				this.num++;
				if (this.cleft == false && this.cright == false) {
					this.isActive = false;
				};
				if (this.cleft == true || this.cright == true) {
					this.isActive = true;
				}
			},
			toclassright() {
				if (this.cleft == true) {
					this.cleft = false;
					this.num--;
				};
				var len = this.num;
				this.isActive = (len % 2 == 0) ? true : false;
				this.cright = (this.cright == true) ? false : true;
				this.num++;
				if (this.cleft == false && this.cright == false) {
					this.isActive = false;
				};
				if (this.cleft == true || this.cright == true) {
					this.isActive = true;
				};
				console.log(this.list1)
				console.log(this.list2)

			},
			cleftback() {
				this.cleft = false;
				this.isActive = false;
				this.cright = false;
			},
			tothere(e) {
				var num = e.currentTarget.id;
				var len = this.listclass1.length;
				var a = this.listclass1[num].active;
				if (a == true) {
					return
				} else if (a == false) {
					for (var i = 0; i < len; i++) {
						this.listclass1[i].active = false;
					};
					this.listclass1[num].active = true;
				}
			},
			totherea(e) {
				var num = e.currentTarget.id;
				console.log(num);
				var len = this.list1.length;

				var a = this.list1[num].active;

				if (a == true) {
					return
				} else if (a == false) {
					for (var i = 0; i < len; i++) {
						this.list1[i].active = false;
					};
					this.list1[num].active = true;
					console.log('变')
					console.log(this.list1[num].active);

				};
				var _this = this;
				uni.request({
					url: 'http://192.168.0.101:9000/courseType/findAllCourseType',
					method: 'GET',
					data: {},
					success: res => {
						if (res.data.msg === null) {
							// console.log(res)
							if (num == 0) {
								var a = res.data.data;
								for (var i = 0; i < a.length; i++) {
									a[i].active = false;
									a[i].id = i;
									a[i].Icon = "http://192.168.0.101:9001/" + a[i].typeIcon;
								};
								this.list2 = a;
								return
							};
							var a = res.data.data;
							var b = a.splice(num, 1);
							b[0].id = b[0].typeId;
							b[0].active = false;
							b[0].Icon = "http://192.168.0.101:9001/" + b[0].typeIcon;
							// console.log(b)
							this.list2 = b;
						}
					},
					fail: () => {},
					complete: () => {}
				});
				// uni.request({
				// 	url: 'http://192.168.0.101:9000/course/findCourseList',
				// 	method: 'GET',
				// 	data: {
				// 		pageCurrent:1,
				// 		pageSize:15,
				// 		typeId:num
				// 	},
				// 	success: res => {
				// 		if(res.data.msg === null){
				// 			console.log(res);
				// 			console.log('asdsa')
				// 			var a = res.data.data;
				// 			for(var i = 0;i < a.length;i ++){
				// 				a[i].active = false;
				// 				a[i].Icon = "http://192.168.101:9001/" + a[i].courseIcon
				// 			}
				// 			_this.list2 = a;
				// 			console.log(_this.list2)
				// 		}
				// 	},
				// 	fail: () => {},
				// 	complete: () => {}
				// });
			},
			tothereb(e) {
				var num = e.currentTarget.id;
				var len = this.list2.length;
				this.listnum = num;
				var _this = this;
				this.pagecurrent = 1;
				uni.request({
					url: 'http://192.168.0.101:9000/course/findCourseList',
					method: 'GET',
					data: {
						pageCurrent: _this.pagecurrent,
						pageSize: 15,
						typeId: num
					},
					success: res => {
						if (res.data.msg === null) {
							console.log(res.data.data);
							var a = res.data.data;
							var l = res.data.data.length;
							this.pagecurrent ++;
							for (var i = 0; i < l; i++) {
								a[i].Icon = "http://192.168.0.101:9001/" + a[i].courseIcon
							};
							_this.listdata = a;

						}
					},
					fail: () => {},
					complete: () => {}
				});
				if (len == 1) {
					if (this.list2[0].active == true) {
						return
					} else {
						this.list2[0].active = true;

					}
					return
				};
				var a = this.list2[num].active;
				if (a == true) {
					return
				} else if (a == false) {
					for (var i = 0; i < len; i++) {
						this.list2[i].active = false;
					};
					this.list2[num].active = true;
				};
				// console.log(e)




				// 	data: {
				// 		pageCurrent:1,
				// 		pageSize:15,
				// 		typeId:num
				// 	},
			},
			onBottom() {
				var page = this.pages;
				var _this = this;
				if (page) {
					uni.request({
						url: 'http://192.168.0.101:9000/course/findCourseList',
						method: 'GET',
						data: {
							pageCurrent: _this.pagecurrent,
							pageSize: 8,
							typeId: _this.listnum
						},
						success: res => {
							console.log(res)
							if (res.data.msg === null) {
								var newlist = res.data.data;
								console.log(_this.pagecurrent);
								_this.pagecurrent++;
								console.log(_this.pagecurrent);
								_this.listdata = _this.listdata.concat(newlist);
								for (var i = 0; i < _this.listdata.length; i++) {
									_this.listdata[i].Icon = 'http://192.168.0.101:9001/' + _this.listdata[i].courseIcon
								};
								if (res.data.data.length < 8) {
									_this.pages = false
								}
							}
						},
						fail: () => {},
						complete: () => {}
					});
					// this.listdata = this.listdata.concat(this.newlist);
					// this.pages++;
				}
				console.log(this.pages);
			}
		}
		
	}
</script>

<style>
	.class_right_box {
		/* position: relative; */
		display: flex;
		width: 100%;
		/* z-index: 2; */
	}

	.options_right {
		width: 100%;
		height: 30px;
		font-size: 14px;
		margin-top: 15px;
		margin-bottom: 15px;
	}

	.opstions_img {
		width: 30px;
		height: 30px;
		margin-left: 3px;
		margin-right: 3px;
		vertical-align: middle;
		border-radius: 100%;
	}

	.options_left {
		width: 100%;
		height: 30px;
		font-size: 14px;
		margin-top: 15px;
		margin-bottom: 15px;
	}

	.options2 {
		display: inline-block;
		width: 190px;
		height: 30px;
		line-height: 30px;
		vertical-align: middle;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;

	}

	.class_right_left {
		width: 35%;
		height: 300px;
		/* overflow-y: auto; */
	}

	.class_right_right_box {
		width: 100%;
		height: 100%;
		overflow: hidden;
		background-color: #999999;
		/* 		position: relative;
		z-index: 2; */

	}

	.class_right_right {
		width: 65%;
		height: 300px;
		/* overflow-y: auto; */
	}

	.class_right_bigbox {
		width: 100%;
		height: 300px;
		background-color: #999999;
		z-index: 2;
		position: relative;
		top: 80px;
	}

	.active2 {
		color: #D7B262;
		background-color: #333333;

	}

	.active1 {
		border-left: 3px solid #D7B262;
		color: #D7B262;
		background-color: #333333;

	}

	.active {
		position: fixed;
	}

	.class_left_bigbox {
		position: relative;
		top: 80px;
		z-index: 2;
	}

	.class_left_box {
		width: 100%;
		background-color: #999999;
		position: relative;
	}

	.class_left_txt {
		width: 100%;
		height: 35px;
		font-size: 12px;
		line-height: 35px;
		padding-left: 15px;
		margin-left: 2px;
		border-top: 1px solid #999999;
		border-bottom: 1px solid #999999;
	}

	.class_title_box {
		width: 100%;
		height: 40px;
		font-size: 12px;
		text-align: center;
		display: flex;
		background-color: #999999;
		position: fixed;
		top: 84px;
		z-index: 3;
	}

	.class_title_1 {
		width: 50%;
		height: 40px;
		line-height: 40px;

	}

	.class_left_back {
		width: 100%;
		position: absolute;
		top: 0px;
		bottom: -1000px;
		z-index: -1;
		opacity: 0.8;
		background-color: #000000;
	}

	.search {
		padding: 0;
		padding-top: 1px;
		width: 100%;
		border: 1rpx solid #999999;
		border-radius: 4px;
		height: 30px;
		line-height: 30px;
		display: flex;
		background-color: #FFFFFF;
		margin: 5px 0px;
	}

	.search_box {
		position: fixed;
		top: 44px;
		width: 100%;
		height: 40px;
		background-color: #FFFFFF;
		z-index: 2;
	}

	.search_img {
		padding: 0;
		width: 22px;
		height: 22px;
		margin: auto 10px;
	}

	.search_text {
		line-height: 30px;
		height: 30px;
	}

	.listCot {
		width: 100%;
		/* height: 539px; */
		position: relative;
		/* 		z-index: -2; */
		top: 84px;
		bottom: 0px;
		display: flex;
	}

	.listCot_box {
		width: 100%;
		height: 100%;
		margin-left: 11px;
		display: inline-block;
	}

	.listBox {
		width: 93%;
		display: flex;
		padding-top: 8px;
		padding-bottom: 8px;
		border-bottom: 1px solid #999999;
	}

	.list_imgBox {
		font-size: 0px;
		width: 45%;
		height: 80px;
		position: relative;
		padding-right: 10px;
		/* border-bottom: 1px solid #999999; */
	}

	.list_img {
		width: 100%;
		height: 80px;
		border-radius: 4px;
		/* vertical-align: middle; */

	}

	.list_infoBox {
		width: 45%;
		/* 		vertical-align: middle; */
		font-size: 10px;
		height: 80px;
		position: relative;
		/* 	border-bottom: 1px solid #999999; */
	}

	.list_hot {
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

	.list_study {
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

	.list_title {
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

	.list_money {
		font-size: 10px;
		color: #F0AD4E;
		height: 15px;
		line-height: 15px;
		margin-right: 3px;
	}

	.list_num {
		font-size: 10px;
		color: #999999;
		border-left: 1px solid #999999;
		padding-left: 3px;
	}

	.list_state {
		position: absolute;
		font-size: 10px;
		font-weight: bold;
		left: 0px;
		bottom: 8px;

	}

	.clBox {
		width: 100%;
		height: 100%;
	}
</style>
