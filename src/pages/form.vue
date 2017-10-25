<template>
	<div>
		<mt-field label="姓名" placeholder="请输入姓名" v-model="username"></mt-field>
		<mt-field label="手机" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
		<mt-field label="QQ" placeholder="请输入QQ" type="number" v-model="qq"></mt-field>
		<mt-radio title="选择试听课程" v-model="course"  :options="['中餐', '西餐料理', '中点']">
		</mt-radio>
		<mt-button @click="sub" type="danger">申请试听</mt-button>

	</div>
</template>

<script>
	import { MessageBox } from 'mint-ui';
	export default{
		data(){
			return{
				username:'',
				phone:'',
				qq:'',
				course:'',
				arry:[]
			}
		},
		methods:{
			sub(){
				if(this.username && this.phone && this.qq && this.course){
					this.arry.unshift({username:this.username,phone:this.phone,qq:this.qq,course:this.course})
				    MessageBox.alert('申请成功').then(action => {
				    this.$router.push('/home')
				});
				}else{
					MessageBox.alert('请输入完整信息')
				}
				
			}
		}
	}
</script>

<style>

</style>