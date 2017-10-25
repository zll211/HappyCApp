<template>
	<div>
		<img src="../assets/images_women/about.jpg" width="100%">
		
		<div class="text"><h3>{{aa.title}}</h3><p>{{aa.text}}</p></div>
		<div class="more" @click="">查看详情</div>
		
		<img class="honor" src="../assets/images_women/honor.png" width="100%">
		<h3>荣誉资质</h3>
		
		<mt-swipe :show-indicators="false" class="honor_pic">
		  <mt-swipe-item><img src="../assets/images_women/1.jpg" ></mt-swipe-item>
		  <mt-swipe-item><img src="../assets/images_women/2.jpg" ></mt-swipe-item>
		  <mt-swipe-item><img src="../assets/images_women/3.jpg" ></mt-swipe-item>
		  <mt-swipe-item><img src="../assets/images_women/4.jpg" ></mt-swipe-item>
		</mt-swipe>
	</div>    
</template>

<script>
	export default{
		data(){
			return{
				aa:{title:'学校简介',text:'杭州市西湖区明珠职业培训学校（杭州明珠烹饪学校）团队成立于1998年，坐落于杭州市西湖区文二西路西溪湿地北面龙章路159号，紧邻西溪国家湿地公园，毗邻浙江大学紫金港校区，是由人力资源社会保障局审批，教育局备案的职业技术培训学校。至目前近20年办学历史，属人社局就业再就业定点培训机构，杭州市职业教育培训示范基地，浙江省品牌教育促进单位，杭州市餐饮协会理事单位，国家级残疾人职业培训基地，杭州市人社局认定的“品牌学校”和“西式烹调师”品牌项目学校，北京科技大学网络教育（大专、本科）明珠教学点，学校以“教学质量是立校之本”为办学宗旨，打造中国“百年明珠”职业技术教育品牌学校。'},
			}
		}
	}
</script>

<style>
	
</style>