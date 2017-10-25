<template>
	<div>
		<img src="../assets/images_kecheng/course.png" width="100%">     <!--    ../ 当前属于pages，往上走一级，即src  -->
		<ul>
			<li v-for="aa in kc">
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
				kc:[
				{title:'中式厨师培训',img:require('../assets/images_kecheng/kc1.jpg'),text:'培养初级厨师标准为目标，从刀工、火候等基础学起，掌握原料选择和加工、食品营养卫生、营养搭配、菜肴色、香、味调制、四季菜系烹制等知识。'},
				{title:'全科厨师培训',img:require('../assets/images_kecheng/kc2.jpg'),text:'培养初级厨师标准为目标，从刀工、火候等基础学起，掌握原料选择和加工、食品营养卫生、营养搭配、菜肴色、香、味调制、四季菜系烹制等知识。'},
				{title:'短期厨师培训',img:require('../assets/images_kecheng/kc3.jpg'),text:'培养初级厨师标准为目标，从刀工、火候等基础学起，掌握原料选择和加工、食品营养卫生、营养搭配、菜肴色、香、味调制、四季菜系烹制等知识。'},
				{title:'西餐料理培训',img:require('../assets/images_kecheng/kc4.jpg'),text:'培养初级厨师标准为目标，从刀工、火候等基础学起，掌握原料选择和加工、食品营养卫生、营养搭配、菜肴色、香、味调制、四季菜系烹制等知识。'},
				]
			}
		}
	}
</script>

<style>
	
</style>