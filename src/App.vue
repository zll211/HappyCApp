<template>
  <div id="app">
    <HeadTop></HeadTop>
    <transition name="animate"><router-view class="content" /></transition>
    <FootEnd></FootEnd>
  </div>
</template>

<script>
	import HeadTop from'./components/HeadTop'
	import FootEnd from'./components/FootEnd'
	export default {
	  components:{HeadTop,FootEnd}
	}
</script>

<style>
	
</style>
