<template>
	<div class="foot-nav">
		<router-link :to="{path:'/form'}"><span><img src="../assets/images_home/tab_iocn_62.png" />申请试听</span></router-link>
		<span @click="tel"><img src="../assets/images_home/tab_iocn_64.png" />电话咨询</span>
		<span><img src="../assets/images_home/tab_iocn_66.png" />在线咨询</span>
		
		
	</div>
</template>

<script>
	import { MessageBox } from 'mint-ui';
	import'../assets/foot.css'
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			tel(){
				MessageBox({
				  title:"",
				  message: '15024605376',
				  confirmButtonText:"立即拨号"
				}).then(active => {
					window.location.href='tel:15024605376'
				});
			}
		}
	}
</script>

<style>
	
</style>