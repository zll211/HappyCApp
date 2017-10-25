<template>
	<div>
		<div class="back" @click="back">返回</div>
		<h3 class="news_title">{{this.$route.params.news2[this.$route.params.index2].title}}</h3>
		<p class="news_content">{{this.$route.params.news2[this.$route.params.index2].text}}</p>
		
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