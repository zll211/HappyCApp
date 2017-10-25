<template>
	<div>
		<mt-swipe :auto="4000">
    	<mt-swipe-item><router-link :to="{path:'/course'}"><img src="../assets/images_home/banner1.jpg" ></router-link></mt-swipe-item>
	    <mt-swipe-item><router-link :to="{path:'/course'}"><img src="../assets/images_home/banner2.jpg" ></router-link></mt-swipe-item>
	   
	    </mt-swipe>
		
		<div class="course">
			<router-link v-for="(aa,index) in kc"  :to="{name:'kc',params:{kc,index}}">
				<span >
					<img :src="aa.img">{{aa.title}}
				</span>
			</router-link>
			<!--<span><img src="../assets/images_home/icon_18.png" />PHP开发工程师</span>
			<span><img src="../assets/images_home/icon_20.png" />JavaEE</span>
			<span><img src="../assets/images_home/icon_22.png" />UI设计师</span>
			<span><img src="../assets/images_home/icon_24.png" />H5全栈开发师</span>
			<span><img src="../assets/images_home/icon_30.png" />云计算Linux</span>
			<span><img src="../assets/images_home/icon_31.png" />大数据</span>
			<span><img src="../assets/images_home/icon_32.png" />4G开发工程师</span>
			<span><img src="../assets/images_home/icon_33.png" />UE交互设计师</span>-->
		</div>
		
		<mt-navbar v-model="selected">
		  <mt-tab-item id="1">{{newsTitle}}</mt-tab-item>
		  <mt-tab-item id="2">{{newsTitle2}}</mt-tab-item>
		  
		</mt-navbar>
		
		<!-- tab-container -->
		<mt-tab-container v-model="selected">
		  <mt-tab-container-item id="1">
		    <router-link v-for="(n,index) in news"  :to="{name:'news',params:{news,index}}">
		    	<mt-cell v-if="index<4" :title="n.title"  />
		    </router-link>
		  </mt-tab-container-item>
		  <mt-tab-container-item id="2">
		  	<router-link v-for="(n,index2) in news2"  :to="{name:'news2',params:{news2,index2}}">
		        <mt-cell v-if="index2<4" :title="n.title" />
		    </router-link>
		  </mt-tab-container-item>
		 
		</mt-tab-container>
		
		<div class="link">
			<div class="left">
				<span><img src="../assets/images_home/btn_46.png" /></span>
				<span><img src="../assets/images_home/btn_48.png" /></span>
				<span><img src="../assets/images_home/btn_54.png" /></span>
				<span><img src="../assets/images_home/btn_55.png" /></span>
			</div>
			
			<div class="right"><img src="../assets/images_home/info_51.png" /></div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				kc:[
				    {title:'短期厨师培训',img:require('../assets/images_home/1.png'),text:'主打厨艺:烹饪技艺，中式面点全套技术，烧卤技术，整雕组雕，冷盘彩拼百姓家常菜，海鲜河鲜，冷蝶火锅;经营课程:流行菜知识，烹制菜肴的技巧，面点的制作与经营'},
				    {title:'全科厨师培训',img:require('../assets/images_home/2.png'),text:'主打厨艺:学习各类菜肴的制作，南北系列菜品。学习完可以掌握200道菜肴左右;经营课程:八大菜系的制作特点，流行菜知识，烹制菜肴的技巧，烹调技术，大型宴席的制作与设计。'},
				    {title:'中式厨师培训',img:require('../assets/images_home/3.png'),text:'主打厨艺:麻辣火锅、牛肉火锅、涮羊肉火锅、酸菜鱼火锅、鱼头火锅、鸡肉火锅、鸭子火锅等十多个品种;经营课程:成本核算、菜品设计等'},
				    {title:'西餐料理培训',img:require('../assets/images_home/4.png'),text:'主打厨艺:料理、意式菜、法式菜、牛排、沙拉等;经营课程:成本核算、菜品设计等'},
				    {title:'白案小吃',img:require('../assets/images_home/5.png'),text:'主打厨艺:发面类、烫面类、汉味小吃及南北地方特色小吃等;经营课程:成本核算、经营管理、设备购置等'},
				    {title:'厨师证办理',img:require('../assets/images_home/6.png'),text:'学历是就业的敲门砖，从业资格是行业的敲门砖，正确的选择，为你的职业打开一扇敞亮的窗！'},
				    {title:'培训案例',img:require('../assets/images_home/7.png'),text:'面向社会常年招生，凡是参加我校学习者，都能享受政府补贴900元，该校设初级班，全能班，小吃班传授sa汤，油酥烧饼，椒麻鸡，牛肉汤，羊肉汤，鸭煲等小吃，包教包会，毕业发相应的厨师证书，全国通用。'},
				    {title:'更多',img:require('../assets/images_home/8.png'),text:'上课就打了快速简单看等级阿里啥电话卡就上课就打了快速简单看等级阿里啥电话卡就上上课就打了快速简单看等级'}
				    
				
				],
				selected:"1",
				newsTitle:"资讯动态",
				news:[
				{title:"“高铁外卖”月考：下单的多了，但吃货们要求更高了",text:"“味道还不错”“送餐时间还算准时”“跟高铁盒饭相比，一级棒”“就是种类太少”……在搜索到不少网友评价后，14日，第一财经记者乘坐G83次列车从北京前往长沙，亲身体验了传说中的“高铁外卖”。"},
				{title:"“五星级”火锅海底捞果然不简单，它成功“抢”回了这个！",text:"说起海底捞大家都不陌生吧，毕竟“没吃过猪肉，也见过猪跑”，网上关于海底捞服务有多好多温馨的段子比比皆是，“好到就差给你付钱了!”也是一种实力证明。"},
				{title:"以“餐饮”为突破口，这家酒店是如何成功转型为亲子度假酒店",text:"7月29日，在由瑞士洛桑酒店管理学院和先之教育共同举办的“瑞士洛桑认证高级研修课程”现场，一个由集团统一组团报名参加培训的7人学员团成功引起了记者的注意，记者决定在课余时间走近这个团队，了解其背后的故事。"},
				{title:"亚美联研究中心落成，信良记引领中餐标准化研发",text:"(职业餐饮网王平报道)2017年8月17日，由信良记食品科技(北京)有限公司全资注册的子公司亚洲美食联合研究中心落成仪式在京隆重举行。中国烹饪协会、峰瑞资本、钟鼎创投、千禧鹤集团、金百万集团、阿里巴巴口碑平台、联合利华、雀巢、便宜坊、优配良品、快道网等企业领导、代表参加了落成仪式。"},
				{title:"被外卖“打败”的不只是方便面，还有火腿肠",text:"前阵子，因为统一的新动向，“外卖和年轻人联手打败方便面”的说法流传于江湖。事实上，消费升级，“被打败”的“老将”不只有方便面，还有方便面的“好搭档”火腿肠。本周二，双汇发布了今年上半年财报，营收和利润双降。"},
				{title:"公司新闻6",text:"66666"},
				{title:"公司新闻7",text:"77777"}
				],
				newsTitle2:"常见问题",
				news2:[
				{title:"外卖三巨头时代终结！百度外卖退出历史舞台",text:"雄心勃勃进军外卖行业的百度，终究在这场三强对决中首先败下阵来。而外卖行业也迎来两强对决的时代。听到这个消息，不知美团做何感想。最新消息，饿了么以现金+股权作价5亿美元收购百度外卖。但是，后者在交易完成后，还将要独立运营一年时间。"},
				{title:"30平米店，排队4小时，只营业半天！",text:"这是武汉一家被誉为“排队王”的品牌，在遍地开花的面馆红海中依然能门庭若市，成为现象级的例子一个30平米、只营业半天的早餐店，每天从6点半开始排排排排到中午，日售1000碗面……"},
				{title:"饿了么5亿美元并购百度外卖，百度将占饿了么5%股份",text:"上个月底就有消息称，饿了么与百度外卖已经达成了某种口头协议，前者将在两到三周内宣布收购后者。而现在，这一消息终于得到了证实。经餐饮O2O了解，饿了么最快将在本周宣布收购百度外卖。上述交易完成后，百度外卖将独立运营一年左右。"},
				{title:"传承≠继承传统，餐饮下一个巨头是“有根”品牌",text:"2017年8月15日，由餐饮人必读主办的“风口之上——蓉城新餐饮高峰论坛”在成都举行。峰会聚焦“新管理、新理念、新市场、新趋势”四大主题，邀请到成都一线餐饮品牌的重量级嘉宾，共同探讨餐饮行业的最新发展趋势。"},
				{title:"你想知道的2017餐饮数据，都在这里了！",text:"有人能从新闻联播中读出生意经，有人却对兵临城下的危机视而不见。相信数据，用数据来说话，是经营能力的一种表现。"},
				{title:"行业动态6",text:""},
				{title:"行业动态7",text:""}
				]
			}
			
		},
		methods:{
			
		}
	}
</script>

<style>
	
</style>