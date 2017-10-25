<template>
	<div>
		<img src="../assets/images_jiuye/job.png" width="100%">
		<ul>
			<li v-for="aa in jy">
				<img :src="aa.img">
				<div class="text"><h3>{{aa.title}}</h3><p>{{aa.text}}</p></div>
			</li>
		</ul>
	</div>    
</template>

<script>
	export default{
		data(){
			return{
				jy:[
				{title:'刘*龙/百滋百特有限公司',img:require('../assets/images_jiuye/01.png'),text:'缤纷多彩的酥皮点缀，香软绵甜的甜甜内圈，百滋百特甜甜圈，超级可爱的造型...'},
				{title:'贺*勇/巴黎皇妃',img:require('../assets/images_jiuye/02.png'),text:'缤纷多彩的酥皮点缀，香软绵甜的甜甜内圈，百滋百特甜甜圈，超级可爱的造型...'},
				{title:'范*鑫/川味观',img:require('../assets/images_jiuye/03.png'),text:'缤纷多彩的酥皮点缀，香软绵甜的甜甜内圈，百滋百特甜甜圈，超级可爱的造型...'},
				{title:'覃*清/锡湘记',img:require('../assets/images_jiuye/04.png'),text:'缤纷多彩的酥皮点缀，香软绵甜的甜甜内圈，百滋百特甜甜圈，超级可爱的造型...'},
				]
			}
		}
	}
</script>

<style>
	
</style>