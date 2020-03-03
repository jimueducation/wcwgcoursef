<template>
	<view>
		<view class="">
			<view class="">
				
				<input type="text" value="" placeholder="请输入用户名" @blur="usernametxt"/>
				<input type="text" value="" placeholder="请输入密码" @blur="passwordtxt"/>
			</view>
			<button type="primary" @click="register">注册</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				username:'',
				password:''
			}
		},
		methods: {
			usernametxt(e){
				this.username = e.detail.value;
				
			},
			passwordtxt(e){
				this.password = e.detail.value;
			},
			register(){
				uni.request({
					url: 'http://192.168.0.101:9000/users/register',
					method: 'POST',
					data: {
						username:this.username,
						password:this.password
					},
					header:{
						'content-type': 'application/x-www-form-urlencoded'
					},
					success: res => {
						console.log(res);
					},
					fail: () => {},
					complete: () => {}
				});
			}
		}
	}
</script>

<style>

</style>
