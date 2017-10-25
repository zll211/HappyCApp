<template>
	<div>
		<div class="back" @click="back">返回</div>
		<h3 class="news_title">{{this.$route.params.news[this.$route.params.index].title}}</h3>
		<p class="news_content">{{this.$route.params.news[this.$route.params.index].text}}</p>
		
		
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