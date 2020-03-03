<template>
	<view>
		<Search></Search>
		<Sort :list="list"></Sort>
		<Movenews></Movenews>
		<Muststudy></Muststudy>
		<Hotnews></Hotnews>

	</view>

</template>

<script>
	// import {
	// 	mapState
	// } from '../../vuex.js';
	import Search from "./components/search";
	import Sort from "./components/sort";
	import Movenews from "./components/movenews";
	import Hotnews from "./components/hotnews";
	import Muststudy from "./components/muststudy";
	export default {
		data() {
			return {
				list: []
			}
		},
		components: {
			Search,
			Sort,
			Movenews,
			Hotnews,
			Muststudy
		},
		onLoad() {
			uni.request({
				url:'http://192.168.0.101:9000/courseType/findAllCourseType',
				method: 'GET',
				data: {},
				success: res => {
					console.log(res)
					console.log(res.data.data);
					// console.log('asdsadsad')
					if(res.data.msg === null ){
						
						for(var i = 0;i < res.data.data.length;i++){
							// var a = res.data.data[i];
							res.data.data[i].Icon = 'http://192.168.0.101:9001/' + res.data.data[i].typeIcon ;
							
						}
						this.list = res.data.data;
						console.log(this.list)
					}
				},
				fail: () => {},
				complete: () => {}
			});
			
		},

		// computed: mapState(['forcedLogin', 'hasLogin', 'userName']),
		// onLoad(){
		// 	if(!this.hasLogin){
		// 		uni.showModal({
		// 			title:"未登录",
		// 			content:"请先登录",
		// 			showCancel:!this.forcedLogin,
		// 			success: (res) => {
		// 				console.log(res);
		// 				if(res.confirm){
		// 					if(this.forcedLogin){
		// 						uni.reLaunch({
		// 							url:"../home/home"
		// 						});

		// 					}else{
		// 						uni.switchTab({
		// 							url:"../home/home"
		// 						})
		// 					}
		// 				}
		// 			}
		// 		})
		// 	}
		// },
		methods: {

			// reserSearch_1(e){

			// 	var cot = e.currentTarget.dataset.value;
			// 	if(cot == '搜索您感兴趣的课程'){
			// 		this.textValue = '';
			// 	};

			// },
			// reserSearch_2(e){
			// 	var cot = e.currentTarget.dataset.value;
			// 	if(cot==''){
			// 		this.textValue = '搜索您感兴趣的课程';
			// 	};
			// }
		}
	}
</script>

<style>
	/* page{
		background-color: #808080;
	} */
</style>
