<template>
	<div>
		<img src="../assets/images_shizi/teacher.png" width="100%">
		<ul>
			<li v-for="aa in sz">
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
				sz:[
				{title:'周老师/西点烘焙金牌讲师',img:require('../assets/images_shizi/szll1.jpg'),text:'西点烘焙资深大师，中点技师，长三角面点大赛金奖，曾任香格里拉面点师，拥有专业的面点技术和专业的教学管理经验，不断创新，精益求精。'},
				{title:'张老师/中式烹调金牌讲师',img:require('../assets/images_shizi/szll2.jpg'),text:'中式烹调技师，市烹饪比赛一等奖，2005年从事烹调教学和管理工作，曾任杭州酒家，中北大酒店主厨，探索技能精髓，兢兢业业，美食工匠。'},
				{title:'孙老师/中式烹调金牌讲师',img:require('../assets/images_shizi/szll3.jpg'),text:'中国烹饪大师，世界御厨美食联合会亚太区组织理事会大中华区高级理事，世界御厨金厨勋章，杭帮菜传承名师，国家烹饪比赛金奖，浙江省烹饪比武金奖。'},
				{title:'周老师/中式烹调金牌讲师',img:require('../assets/images_shizi/szll4.jpg'),text:'中式烹调高级技师，杭帮菜传承名师，曾任杭州大酒店、万向大酒店、金溪山庄厨师长等职务，任教多年名誉满全球，认真负责，严格执教。'},
				]
			}
		}
	}
</script>

<style>
	
</style>