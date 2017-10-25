<template>
	<div>
		<!--<img :src="aa.img">--><!--{{this.$route.params.kc[this.$route.params.index].img}}-->
		<div class="back" @click="back">返回</div>
		<img :src="this.$route.params.kc[this.$route.params.index].img">
		<h3>{{this.$route.params.kc[this.$route.params.index].title}}</h3>
		<p>{{this.$route.params.kc[this.$route.params.index].text}}</p>
		
		
	</div>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			back(){
				this.$router.go(-1)
			}
		}
	 }
</script>

<style>
	
</style>