function getSchoolInfo(callBack) {
  var str = [
    {
      "code": "000000",
      "sheng": "00",
      "di": "00",
      "xian": "00",
      "name": "选择学校",
      "level": 1
    },
    {
      "code": "000100",
      "sheng": "00",
      "di": "01",
      "xian": "00",
      "name": "选择学院",
      "level": 2
    },
    {
      "code": "000001",
      "sheng": "00",
      "di": "01",
      "xian": "01",
      "name": "选择系",
      "level": 3
    },

    {
      "code": "110000",
      "sheng": "11",
      "di": "00",
      "xian": "00",
      "name": "湖南大学",
      "level": 1
    },
    {
      "code": "110100",
      "sheng": "11",
      "di": "01",
      "xian": "00",
      "name": "信息科学与工程学院",
      "level": 2
    },
    {
      "code": "110101",
      "sheng": "11",
      "di": "01",
      "xian": "01",
      "name": "通信工程系",
      "level": 3
    }, 
    {
      "code": "110102",
      "sheng": "11",
      "di": "01",
      "xian": "02",
      "name": "计算机科学系",
      "level": 3
    },
    {
      "code": "110103",
      "sheng": "11",
      "di": "01",
      "xian": "03",
      "name": "软件工程系",
      "level": 3
    },
    {
      "code": "110104",
      "sheng": "11",
      "di": "01",
      "xian": "04",
      "name": "计算机工程系",
      "level": 3
    },
    {
      "code": "110105",
      "sheng": "11",
      "di": "01",
      "xian": "05",
      "name": "空间安全系",
      "level": 3
    },
    {
      "code": "110200",
      "sheng": "11",
      "di": "02",
      "xian": "00",
      "name": "土木工程学院",
      "level": 2
    },
    {
      "code": "110201",
      "sheng": "11",
      "di": "02",
      "xian": "01",
      "name": "桥梁工程",
      "level": 3
    },
    {
      "code": "110202",
      "sheng": "11",
      "di": "02",
      "xian": "02",
      "name": "建筑环境与能源应用工程系",
      "level": 3
    }, 
    {
      "code": "110203",
      "sheng": "11",
      "di": "02",
      "xian": "03",
      "name": "岩土与地下工程系",
      "level": 3
    },
    {
      "code": "110204",
      "sheng": "11",
      "di": "02",
      "xian": "04",
      "name": "建筑工程系",
      "level": 3
    },
    {
      "code": "110205",
      "sheng": "11",
      "di": "02",
      "xian": "05",
      "name": "桥梁工程系",
      "level": 3
    },
    {
      "code": "110206",
      "sheng": "11",
      "di": "02",
      "xian": "06",
      "name": "水工程科学系",
      "level": 3
    },

	{
      "code": "110300",
      "sheng": "11",
      "di": "03",
      "xian": "00",
      "name": "工商管理学院",
      "level": 2
    },

	{
      "code": "110301",
      "sheng": "11",
      "di": "03",
      "xian": "01",
      "name": "工商管理系",
      "level": 3
    },
	
	{
      "code": "110302",
      "sheng": "11",
      "di": "03",
      "xian": "02",
      "name": "管理科学系",
      "level": 3
    },
	
	{
      "code": "110303",
      "sheng": "11",
      "di": "03",
      "xian": "03",
      "name": "市场营销系",
      "level": 3
    },
	
	{
      "code": "110304",
      "sheng": "11",
      "di": "03",
      "xian": "04",
      "name": "信息管理与电子商务系",
      "level": 3
    },
	
	{
      "code": "110305",
      "sheng": "11",
      "di": "03",
      "xian": "05",
      "name": "会计系",
      "level": 3
    },
	
	{
      "code": "110306",
      "sheng": "11",
      "di": "03",
      "xian": "06",
      "name": "财务管理系",
      "level": 3
    },
	
	{
      "code": "110400",
      "sheng": "11",
      "di": "04",
      "xian": "00",
      "name": "法学院",
      "level": 2
    },
	
	{
      "code": "110401",
      "sheng": "11",
      "di": "04",
      "xian": "01",
      "name": "教授系",
      "level": 3
    },
	
	{
      "code": "110402",
      "sheng": "11",
      "di": "04",
      "xian": "02",
      "name": "副教授系",
      "level": 3
    },
	
	{
      "code": "110403",
      "sheng": "11",
      "di": "04",
      "xian": "03",
      "name": "助理教授系",
      "level": 3
    },
	
	{
      "code": "110500",
      "sheng": "11",
      "di": "05",
      "xian": "00",
      "name": "机械与运载工程学院",
      "level": 2
    },
	
	{
      "code": "110501",
      "sheng": "11",
      "di": "05",
      "xian": "01",
      "name": "机械设计系",
      "level": 3
    },
	
	{
      "code": "110502",
      "sheng": "11",
      "di": "05",
      "xian": "02",
      "name": "机械制造工程",
      "level": 3
    },
	
	{
      "code": "110503",
      "sheng": "11",
      "di": "05",
      "xian": "03",
      "name": "工程力学系",
      "level": 3
    },
	
	{
      "code": "110504",
      "sheng": "11",
      "di": "05",
      "xian": "04",
      "name": "机电工程系",
      "level": 3
    },
	
	{
      "code": "110505",
      "sheng": "11",
      "di": "05",
      "xian": "05",
      "name": "车辆工程系",
      "level": 3
    },
	
	{
      "code": "110506",
      "sheng": "11",
      "di": "05",
      "xian": "06",
      "name": "能源与动力工程系",
      "level": 3
    },
	
	{
      "code": "110600",
      "sheng": "11",
      "di": "06",
      "xian": "00",
      "name": "教育科学研究院",
      "level": 2
    },
	
	{
      "code": "110601",
      "sheng": "11",
      "di": "06",
      "xian": "01",
      "name": "教授系",
      "level": 3
    },
	
	{
      "code": "110602",
      "sheng": "11",
      "di": "06",
      "xian": "02",
      "name": "副教授系",
      "level": 3
    },
	
	{
      "code": "110700",
      "sheng": "11",
      "di": "07",
      "xian": "00",
      "name": "金融与统计学院",
      "level": 2
    },
	
	{
      "code": "110701",
      "sheng": "11",
      "di": "07",
      "xian": "01",
      "name": "保险学系",
      "level": 3
    },
	
	{
      "code": "110702",
      "sheng": "11",
      "di": "07",
      "xian": "02",
      "name": "货币金融系",
      "level": 3
    },
	
	{
      "code": "110703",
      "sheng": "11",
      "di": "07",
      "xian": "03",
      "name": "金融工程系",
      "level": 3
    },
	
	{
      "code": "110704",
      "sheng": "11",
      "di": "07",
      "xian": "04",
      "name": "统计学系",
      "level": 3
    },
	
	{
      "code": "110705",
      "sheng": "11",
      "di": "07",
      "xian": "05",
      "name": "应用金融系",
      "level": 3
    },
	
	{
      "code": "110800",
      "sheng": "11",
      "di": "08",
      "xian": "00",
      "name": "经济与贸易学院",
      "level": 2
    },
	
	{
      "code": "110801",
      "sheng": "11",
      "di": "08",
      "xian": "01",
      "name": "教授系",
      "level": 3
    },
	
	{
      "code": "110802",
      "sheng": "11",
      "di": "08",
      "xian": "02",
      "name": "副教授系",
      "level": 3
    },
	
	{
      "code": "110803",
      "sheng": "11",
      "di": "08",
      "xian": "03",
      "name": "助理教授系",
      "level": 3
    },
	
	{
      "code": "110900",
      "sheng": "11",
      "di": "09",
      "xian": "00",
      "name": "马克思主义学院",
      "level": 2
    },
	
	{
      "code": "110901",
      "sheng": "11",
      "di": "09",
      "xian": "01",
      "name": "教授系",
      "level": 3
    },
	
	{
      "code": "110902",
      "sheng": "11",
      "di": "09",
      "xian": "02",
      "name": "副教授系",
      "level": 3
    },
	
	{
      "code": "111000",
      "sheng": "11",
      "di": "10",
      "xian": "00",
      "name": "数学与计量经济学院",
      "level": 2
    },
	
	{
      "code": "111001",
      "sheng": "11",
      "di": "10",
      "xian": "01",
      "name": "数学与应用数学系",
      "level": 3
    },
	
	{
      "code": "111002",
      "sheng": "11",
      "di": "10",
      "xian": "02",
      "name": "公共数学系",
      "level": 3
    },
	
	{
      "code": "111100",
      "sheng": "11",
      "di": "11",
      "xian": "00",
      "name": "体育学院",
      "level": 2
    },
	
	{
      "code": "111101",
      "sheng": "11",
      "di": "11",
      "xian": "01",
      "name": "硕导系",
      "level": 2
    },
	
	{
      "code": "111200",
      "sheng": "11",
      "di": "12",
      "xian": "00",
      "name": "外国语学院",
      "level": 2
    },
	
	{
      "code": "111201",
      "sheng": "11",
      "di": "12",
      "xian": "01",
      "name": "大学外语系",
      "level": 3
    },
	
	{
      "code": "111202",
      "sheng": "11",
      "di": "12",
      "xian": "02",
      "name": "日语系",
      "level": 3
    },
	
	{
      "code": "111203",
      "sheng": "11",
      "di": "12",
      "xian": "03",
      "name": "英语系",
      "level": 3
    },
	
	{
      "code": "111204",
      "sheng": "11",
      "di": "12",
      "xian": "04",
      "name": "英语系",
      "level": 3
    },
	
	{
      "code": "111300",
      "sheng": "11",
      "di": "13",
      "xian": "00",
      "name": "物理与微电子科学学院",
      "level": 2
    },
	
	{
      "code": "111301",
      "sheng": "11",
      "di": "13",
      "xian": "01",
      "name": "教授系",
      "level": 3
    },
	
	{
      "code": "111302",
      "sheng": "11",
      "di": "13",
      "xian": "02",
      "name": "副教授系",
      "level": 3
    },
	
	{
      "code": "111303",
      "sheng": "11",
      "di": "13",
      "xian": "03",
      "name": "助理教授系",
      "level": 3
    },
	
	{
      "code": "111400",
      "sheng": "11",
      "di": "14",
      "xian": "00",
      "name": "新闻传播与影视艺术学院",
      "level": 2
    },
	
	{
      "code": "111401",
      "sheng": "11",
      "di": "14",
      "xian": "01",
      "name": "新闻系",
      "level": 3
    },
	
	{
      "code": "111402",
      "sheng": "11",
      "di": "14",
      "xian": "02",
      "name": "传播系",
      "level": 3
    },
	
	{
      "code": "111403",
      "sheng": "11",
      "di": "14",
      "xian": "03",
      "name": "网络与新媒体系",
      "level": 3
    },
	
	{
      "code": "111404",
      "sheng": "11",
      "di": "14",
      "xian": "04",
      "name": "广告系",
      "level": 3
    },
	
	{
      "code": "111405",
      "sheng": "11",
      "di": "14",
      "xian": "05",
      "name": "广播电视编导系",
      "level": 3
    },
	
	{
      "code": "111500",
      "sheng": "11",
      "di": "15",
      "xian": "00",
      "name": "岳麓书院",
      "level": 2
    },
	
	{
      "code": "111501",
      "sheng": "11",
      "di": "15",
      "xian": "01",
      "name": "哲学系",
      "level": 3
    },
	
	{
      "code": "111502",
      "sheng": "11",
      "di": "15",
      "xian": "02",
      "name": "历史系",
      "level": 3
    },
	
	{
      "code": "111503",
      "sheng": "11",
      "di": "15",
      "xian": "03",
      "name": "考古学系",
      "level": 3
    },
	
	{
      "code": "111600",
      "sheng": "11",
      "di": "16",
      "xian": "00",
      "name": "中国语言文学学院",
      "level": 2
    },
	
	{
      "code": "111601",
      "sheng": "11",
      "di": "16",
      "xian": "01",
      "name": "教授系",
      "level": 3
    },
	
	{
      "code": "111602",
      "sheng": "11",
      "di": "16",
      "xian": "02",
      "name": "副教授系",
      "level": 3
    },
	
		{
      "code": "111603",
      "sheng": "11",
      "di": "16",
      "xian": "03",
      "name": "助理教授系",
      "level": 3
    },
	
    {
      "code": "111700",
      "sheng": "11",
      "di": "17",
      "xian": "00",
      "name": "生物学院",
      "level": 2
    },

    {
      "code": "111701",
      "sheng": "11",
      "di": "17",
      "xian": "01",
      "name": "教授系",
      "level": 3
    },

    {
      "code": "111702",
      "sheng": "11",
      "di": "17",
      "xian": "02",
      "name": "副教授系",
      "level": 3
    },


    {
      "code": "111800",
      "sheng": "11",
      "di": "18",
      "xian": "00",
      "name": "设计艺术学院",
      "level": 2
    },

    {
      "code": "111801",
      "sheng": "11",
      "di": "18",
      "xian": "01",
      "name": "教授系",
      "level": 3
    },

    {
      "code": "111802",
      "sheng": "11",
      "di": "18",
      "xian": "02",
      "name": "副教授系",
      "level": 3
    },

    {
      "code": "111900",
      "sheng": "11",
      "di": "19",
      "xian": "00",
      "name": "建筑学院",
      "level": 2
    },

    {
      "code": "111901",
      "sheng": "11",
      "di": "19",
      "xian": "01",
      "name": "教授系",
      "level": 3
    },

    {
      "code": "111902",
      "sheng": "11",
      "di": "19",
      "xian": "02",
      "name": "副教授系",
      "level": 3
    },

    {
      "code": "112000",
      "sheng": "11",
      "di": "20",
      "xian": "00",
      "name": "环境科学与工程学院",
      "level": 2
    },
   
    {
      "code": "112100",
      "sheng": "11",
      "di": "21",
      "xian": "00",
      "name": "化学化工学院",
      "level": 2
    },

    {
      "code": "112101",
      "sheng": "11",
      "di": "21",
      "xian": "01",
      "name": "教授系",
      "level": 3
    },

    {
      "code": "112102",
      "sheng": "11",
      "di": "21",
      "xian": "02",
      "name": "副教授系",
      "level": 3
    },

    {
      "code": "112200",
      "sheng": "11",
      "di": "22",
      "xian": "00",
      "name": "材料科学与工程学院",
      "level": 2
    },

    {
      "code": "112201",
      "sheng": "11",
      "di": "22",
      "xian": "01",
      "name": "材料科学与技术系",
      "level": 3
    },

    {
      "code": "112202",
      "sheng": "11",
      "di": "22",
      "xian": "02",
      "name": "非金属材料与工程系",
      "level": 3
    },

    {
      "code": "112203",
      "sheng": "11",
      "di": "22",
      "xian": "03",
      "name": "金属材料及控制工程系",
      "level": 3
    },
    {
      "code": "112300",
      "sheng": "11",
      "di": "23",
      "xian": "00",
      "name": "电气与信息工程学院",
      "level": 2
    },

    {
      "code": "112301",
      "sheng": "11",
      "di": "23",
      "xian": "01",
      "name": "电气工程系",
      "level": 3
    },

    {
      "code": "112302",
      "sheng": "11",
      "di": "23",
      "xian": "02",
      "name": "电子科学与技术系",
      "level": 3
    },

    {
      "code": "112303",
      "sheng": "11",
      "di": "23",
      "xian": "03",
      "name": "控制科学与工程系",
      "level": 3
    },

    {
      "code": "112400",
      "sheng": "11",
      "di": "24",
      "xian": "00",
      "name": "经济管理研究中心",
      "level": 2
    },


  // *****************中南大学 12 *******************************
    {
      "code": "120000",
      "sheng": "12",
      "di": "00",
      "xian": "00",
      "name": "中南大学",
      "level": 1
    },

    {
      "code": "120100",
      "sheng": "12",
      "di": "01",
      "xian": "00",
      "name": "计算机学院",
      "level": 2
    },

    {
      "code": "120101",
      "sheng": "12",
      "di": "01",
      "xian": "01",
      "name": "计算机科学系",
      "level": 3
    },

    {
      "code": "120102",
      "sheng": "12",
      "di": "01",
      "xian": "02",
      "name": "软件工程系",
      "level": 3
    },

    {
      "code": "120103",
      "sheng": "12",
      "di": "01",
      "xian": "03",
      "name": "数据科学与工程系",
      "level": 3
    },

    {
      "code": "120104",
      "sheng": "12",
      "di": "01",
      "xian": "04",
      "name": "通信工程系",
      "level": 3
    },

    {
      "code": "120105",
      "sheng": "12",
      "di": "01",
      "xian": "05",
      "name": "网路空间安全系",
      "level": 3
    },

    {
      "code": "120200",
      "sheng": "12",
      "di": "02",
      "xian": "00",
      "name": "化学化工学院",
      "level": 2
    },
    {
      "code": "120201",
      "sheng": "12",
      "di": "02",
      "xian": "01",
      "name": "冶金及应用物理化学系",
      "level": 3
    },
    {
      "code": "120202",
      "sheng": "12",
      "di": "02",
      "xian": "02",
      "name": "应用化学系",
      "level": 3
    },
	
	{
      "code": "120300",
      "sheng": "12",
      "di": "03",
      "xian": "00",
      "name": "数学与统计学院",
      "level": 2
    },
	
	{
      "code": "120301",
      "sheng": "12",
      "di": "03",
      "xian": "01",
      "name": "数学与应用数学系",
      "level": 3
    },
	
	{
      "code": "120302",
      "sheng": "12",
      "di": "03",
      "xian": "02",
      "name": "信息与计算科学系",
      "level": 3
    },
	
	{
      "code": "120303",
      "sheng": "12",
      "di": "03",
      "xian": "03",
      "name": "概率与统计学系",
      "level": 3
    },

    {
      "code": "120400",
      "sheng": "12",
      "di": "04",
      "xian": "00",
      "name": "公共管理学院",
      "level": 2
    },
    {
      "code": "120401",
      "sheng": "12",
      "di": "04",
      "xian": "01",
      "name": "教授系",
      "level": 3
    },
    {
      "code": "120402",
      "sheng": "12",
      "di": "04",
      "xian": "02",
      "name": "副教授系",
      "level": 3
    },
    {
      "code": "120403",
      "sheng": "12",
      "di": "04",
      "xian": "03",
      "name": "讲师系",
      "level": 3
    },
	

    // *****************武汉大学 13 *******************************
    {
      "code": "130000",
      "sheng": "13",
      "di": "00",
      "xian": "00",
      "name": "武汉大学",
      "level": 1
    },

    {
      "code": "130100",
      "sheng": "13",
      "di": "01",
      "xian": "00",
      "name": "计算机学院",
      "level": 2
    },

    {
      "code": "130101",
      "sheng": "13",
      "di": "01",
      "xian": "01",
      "name": "计算机科学系",
      "level": 3
    },

    {
      "code": "130102",
      "sheng": "13",
      "di": "01",
      "xian": "02",
      "name": "软件工程系",
      "level": 3
    },


    // *****************华中科技大学 14 *******************************
    {
      "code": "140000",
      "sheng": "14",
      "di": "00",
      "xian": "00",
      "name": "华中科技大学",
      "level": 1
    },

    {
      "code": "140100",
      "sheng": "14",
      "di": "01",
      "xian": "00",
      "name": "计算机科学与技术学院",
      "level": 2
    },

    {
      "code": "140101",
      "sheng": "14",
      "di": "01",
      "xian": "01",
      "name": "计算所",
      "level": 3
    },

    {
      "code": "140102",
      "sheng": "14",
      "di": "01",
      "xian": "02",
      "name": "安全所",
      "level": 3
    },
    {
      "code": "140103",
      "sheng": "14",
      "di": "01",
      "xian": "03",
      "name": "存储所",
      "level": 3
    },

    {
      "code": "140104",
      "sheng": "14",
      "di": "01",
      "xian": "04",
      "name": "理论所",
      "level": 3
    },
    {
      "code": "140105",
      "sheng": "14",
      "di": "01",
      "xian": "05",
      "name": "媒体所",
      "level": 3
    },

    {
      "code": "140106",
      "sheng": "14",
      "di": "01",
      "xian": "06",
      "name": "数据所",
      "level": 3
    },


    // *****************长沙学院 15 *******************************
  /*
    {
      "code": "120000",
      "sheng": "12",
      "di": "00",
      "xian": "00",
      "name": "长沙学院",
      "level": 1
    },
    {
      "code": "120100",
      "sheng": "12",
      "di": "01",
      "xian": "00",
      "name": "信息科学与工程学院",
      "level": 2
    },
    {
      "code": "120101",
      "sheng": "12",
      "di": "01",
      "xian": "01",
      "name": "计算机科学系",
      "level": 3
    },
    {
      "code": "120102",
      "sheng": "12",
      "di": "01",
      "xian": "02",
      "name": "计算机工程系",
      "level": 3
    },
    {
      "code": "120103",
      "sheng": "12",
      "di": "01",
      "xian": "03",
      "name": "通信工程系",
      "level": 3
    },
    {
      "code": "120104",
      "sheng": "12",
      "di": "01",
      "xian": "04",
      "name": "网络空间安全系",
      "level": 3
    },
    {
      "code": "120105",
      "sheng": "12",
      "di": "01",
      "xian": "05",
      "name": "保密工程",
      "level": 3
    },
   
    {
      "code": "120200",
      "sheng": "12",
      "di": "02",
      "xian": "00",
      "name": "土木工程学院 ",
      "level": 2
    },
    {
      "code": "120221",
      "sheng": "12",
      "di": "02",
      "xian": "21",
      "name": "道路与桥梁",
      "level": 3
    },
    {
      "code": "120223",
      "sheng": "12",
      "di": "02",
      "xian": "23",
      "name": "岩土工程",
      "level": 3
    },
    {
      "code": "120225",
      "sheng": "12",
      "di": "02",
      "xian": "25",
      "name": "建筑工程",
      "level": 3
    },
    {
      "code": "130000",
      "sheng": "13",
      "di": "00",
      "xian": "00",
      "name": "湖南师范大学",
      "level": 1
    },
    {
      "code": "130100",
      "sheng": "13",
      "di": "01",
      "xian": "00",
      "name": "湖南师范大学公共管理学院",
      "level": 2
    },
    {
      "code": "130101",
      "sheng": "13",
      "di": "01",
      "xian": "01",
      "name": "文化产业管理",
      "level": 3
    },
    {
      "code": "130102",
      "sheng": "13",
      "di": "01",
      "xian": "02",
      "name": "土地资源管理",
      "level": 3
    },
    {
      "code": "130104",
      "sheng": "13",
      "di": "01",
      "xian": "04",
      "name": "行政管理",
      "level": 3
    },
    {
      "code": "130105",
      "sheng": "13",
      "di": "01",
      "xian": "05",
      "name": "公共事业管理",
      "level": 3
    },
    {
      "code": "130200",
      "sheng": "13",
      "di": "02",
      "xian": "00",
      "name": "湖南师范大学法学院",
      "level": 2
    },
    {
      "code": "130201",
      "sheng": "13",
      "di": "02",
      "xian": "01",
      "name": "法学",
      "level": 3
    },
    {
      "code": "130202",
      "sheng": "13",
      "di": "02",
      "xian": "02",
      "name": "知识产权",
      "level": 3
    },
   
    {
      "code": "130300",
      "sheng": "13",
      "di": "03",
      "xian": "00",
      "name": "湖南师范大学化学化工学院",
      "level": 2
    },
    {
      "code": "130301",
      "sheng": "13",
      "di": "03",
      "xian": "01",
      "name": "制药工程",
      "level": 3
    },
    {
      "code": "130302",
      "sheng": "13",
      "di": "03",
      "xian": "02",
      "name": "化学工程与工艺",
      "level": 3
    },
    {
      "code": "130400",
      "sheng": "13",
      "di": "04",
      "xian": "00",
      "name": "湖南师范大学数学与计算机科学学院",
      "level": 2
    },
    {
      "code": "130401",
      "sheng": "13",
      "di": "04",
      "xian": "01",
      "name": "软件工程",
      "level": 3
    },
    {
      "code": "130402",
      "sheng": "13",
      "di": "04",
      "xian": "02",
      "name": "通信工程",
      "level": 3
    },
    {
      "code": "130403",
      "sheng": "13",
      "di": "04",
      "xian": "03",
      "name": "电子信息工程",
      "level": 3
    },
    {
      "code": "130404",
      "sheng": "13",
      "di": "04",
      "xian": "04",
      "name": "计算机科学与技术",
      "level": 3
    },
    {
      "code": "130406",
      "sheng": "13",
      "di": "04",
      "xian": "06",
      "name": "物联网工程",
      "level": 3
    },
    {
      "code": "130500",
      "sheng": "13",
      "di": "05",
      "xian": "00",
      "name": "湖南师范大学新闻与传播学院",
      "level": 2
    },
    {
      "code": "130501",
      "sheng": "13",
      "di": "05",
      "xian": "01",
      "name": "编辑出版学",
      "level": 3
    },
    {
      "code": "130502",
      "sheng": "13",
      "di": "05",
      "xian": "02",
      "name": "新闻学",
      "level": 3
    },
    {
      "code": "130503",
      "sheng": "13",
      "di": "05",
      "xian": "03",
      "name": "广播电视新闻学",
      "level": 3
    },
    {
      "code": "130521",
      "sheng": "13",
      "di": "05",
      "xian": "21",
      "name": "广告学",
      "level": 3
    },
    {
      "code": "130522",
      "sheng": "13",
      "di": "05",
      "xian": "22",
      "name": "网络与新媒体",
      "level": 3
    },
    {
      "code": "130600",
      "sheng": "13",
      "di": "06",
      "xian": "00",
      "name": "湖南师范大学物理与信息科学学院",
      "level": 2
    },
    {
      "code": "130601",
      "sheng": "13",
      "di": "06",
      "xian": "01",
      "name": "物理学",
      "level": 3
    },
    {
      "code": "130700",
      "sheng": "13",
      "di": "07",
      "xian": "00",
      "name": "湖南师范大学外国语学院",
      "level": 2
    },
    {
      "code": "130701",
      "sheng": "13",
      "di": "07",
      "xian": "01",
      "name": "英语",
      "level": 3
    },
    {
      "code": "130702",
      "sheng": "13",
      "di": "07",
      "xian": "02",
      "name": "日语",
      "level": 3
    },
    {
      "code": "130703",
      "sheng": "13",
      "di": "07",
      "xian": "03",
      "name": "俄语",
      "level": 3
    },
    {
      "code": "130705",
      "sheng": "13",
      "di": "07",
      "xian": "05",
      "name": "朝鲜语",
      "level": 3
    },
    {
      "code": "130800",
      "sheng": "13",
      "di": "08",
      "xian": "00",
      "name": "湖南师范大学商学院",
      "level": 2
    },
    {
      "code": "130801",
      "sheng": "13",
      "di": "08",
      "xian": "01",
      "name": "电子商务",
      "level": 3
    },
    {
      "code": "130802",
      "sheng": "13",
      "di": "08",
      "xian": "02",
      "name": "人力资源管理",
      "level": 3
    },
    {
      "code": "130803",
      "sheng": "13",
      "di": "08",
      "xian": "03",
      "name": "旅游管理",
      "level": 3
    },
    {
      "code": "130804",
      "sheng": "13",
      "di": "08",
      "xian": "04",
      "name": "市场营销",
      "level": 3
    },
    {
      "code": "130821",
      "sheng": "13",
      "di": "08",
      "xian": "21",
      "name": "工商管理",
      "level": 3
    },
    {
      "code": "130822",
      "sheng": "13",
      "di": "08",
      "xian": "22",
      "name": "酒店管理",
      "level": 3
    },
    {
      "code": "130823",
      "sheng": "13",
      "di": "08",
      "xian": "23",
      "name": "会计学",
      "level": 3
    },
    {
      "code": "140000",
      "sheng": "14",
      "di": "00",
      "xian": "00",
      "name": "长沙理工大学",
      "level": 1
    },
    {
      "code": "140100",
      "sheng": "14",
      "di": "01",
      "xian": "00",
      "name": "土木工程学院",
      "level": 2
    },
    {
      "code": "140101",
      "sheng": "14",
      "di": "01",
      "xian": "01",
      "name": "土木工程",
      "level": 3
    },
    {
      "code": "140105",
      "sheng": "14",
      "di": "01",
      "xian": "05",
      "name": "建筑节能技术与工程",
      "level": 3
    },
    {
      "code": "140106",
      "sheng": "14",
      "di": "01",
      "xian": "06",
      "name": "工程管理",
      "level": 3
    },
    {
      "code": "140107",
      "sheng": "14",
      "di": "01",
      "xian": "07",
      "name": "建筑环境与设备工程",
      "level": 3
    },
    {
      "code": "140108",
      "sheng": "14",
      "di": "01",
      "xian": "08",
      "name": "给排水科学与工程",
      "level": 3
    },
    
    {
      "code": "140200",
      "sheng": "14",
      "di": "02",
      "xian": "00",
      "name": "建筑学院",
      "level": 2
    },
    {
      "code": "140201",
      "sheng": "14",
      "di": "02",
      "xian": "01",
      "name": "建筑学",
      "level": 3
    },
    {
      "code": "140202",
      "sheng": "14",
      "di": "02",
      "xian": "02",
      "name": "景观学",
      "level": 3
    },
    {
      "code": "140203",
      "sheng": "14",
      "di": "02",
      "xian": "03",
      "name": "艺术设计",
      "level": 3
    },
    {
      "code": "140211",
      "sheng": "14",
      "di": "02",
      "xian": "11",
      "name": "城市规划",
      "level": 3
    },
    
    {
      "code": "140300",
      "sheng": "14",
      "di": "03",
      "xian": "00",
      "name": "环境科学与工程学院",
      "level": 2
    },
    {
      "code": "140301",
      "sheng": "14",
      "di": "03",
      "xian": "01",
      "name": "环境工程",
      "level": 3
    },
    {
      "code": "140302",
      "sheng": "14",
      "di": "03",
      "xian": "02",
      "name": "环境科学",
      "level": 3
    },
    
    {
      "code": "140400",
      "sheng": "14",
      "di": "04",
      "xian": "00",
      "name": "机械与运载工程学院",
      "level": 2
    },
    {
      "code": "140401",
      "sheng": "14",
      "di": "04",
      "xian": "01",
      "name": "机械设计制造及其自动化",
      "level": 3
    },
    {
      "code": "140402",
      "sheng": "14",
      "di": "04",
      "xian": "02",
      "name": "工程力学",
      "level": 3
    },
    {
      "code": "140411",
      "sheng": "14",
      "di": "04",
      "xian": "11",
      "name": "工程结构分析",
      "level": 3
    },
    {
      "code": "140421",
      "sheng": "14",
      "di": "04",
      "xian": "21",
      "name": "热能与动力工程",
      "level": 3
    },
    {
      "code": "140423",
      "sheng": "14",
      "di": "04",
      "xian": "23",
      "name": "车辆工程",
      "level": 3
    },
    {
      "code": "140424",
      "sheng": "14",
      "di": "04",
      "xian": "24",
      "name": "工业工程",
      "level": 3
    },
    
    {
      "code": "140500",
      "sheng": "14",
      "di": "05",
      "xian": "00",
      "name": "设计艺术学院",
      "level": 2
    },
    {
      "code": "140501",
      "sheng": "14",
      "di": "05",
      "xian": "01",
      "name": "艺术设计",
      "level": 3
    },
    {
      "code": "140502",
      "sheng": "14",
      "di": "05",
      "xian": "02",
      "name": "工业设计",
      "level": 3
    },
    {
      "code": "140521",
      "sheng": "14",
      "di": "05",
      "xian": "21",
      "name": "工业设计",
      "level": 3
    },
    {
      "code": "140600",
      "sheng": "14",
      "di": "06",
      "xian": "00",
      "name": "工商管理学院",
      "level": 2
    },
    {
      "code": "140601",
      "sheng": "14",
      "di": "06",
      "xian": "01",
      "name": "工商管理",
      "level": 3
    },
    {
      "code": "140602",
      "sheng": "14",
      "di": "06",
      "xian": "02",
      "name": "电子商务",
      "level": 3
    },
    {
      "code": "140603",
      "sheng": "14",
      "di": "06",
      "xian": "03",
      "name": "市场营销",
      "level": 3
    },
    {
      "code": "140621",
      "sheng": "14",
      "di": "06",
      "xian": "21",
      "name": "会计学",
      "level": 3
    },
    {
      "code": "140622",
      "sheng": "14",
      "di": "06",
      "xian": "22",
      "name": "财务管理",
      "level": 3
    },
    {
      "code": "140623",
      "sheng": "14",
      "di": "06",
      "xian": "23",
      "name": "信息管理与信息系统",
      "level": 3
    },
    {
      "code": "140700",
      "sheng": "14",
      "di": "07",
      "xian": "00",
      "name": "电气与信息工程学院",
      "level": 2
    },
    {
      "code": "140701",
      "sheng": "14",
      "di": "07",
      "xian": "01",
      "name": "电子信息工程",
      "level": 3
    },
    {
      "code": "140702",
      "sheng": "14",
      "di": "07",
      "xian": "02",
      "name": "自动化",
      "level": 3
    },
    {
      "code": "140721",
      "sheng": "14",
      "di": "07",
      "xian": "21",
      "name": "测控技术与仪器",
      "level": 3
    },
    {
      "code": "140722",
      "sheng": "14",
      "di": "07",
      "xian": "22",
      "name": "电气工程及其自动化",
      "level": 3
    },
    {
      "code": "140800",
      "sheng": "14",
      "di": "08",
      "xian": "00",
      "name": "信息科学与工程学院",
      "level": 2
    },
    {
      "code": "140801",
      "sheng": "14",
      "di": "08",
      "xian": "01",
      "name": "计算机科学与技术",
      "level": 3
    },
    {
      "code": "140802",
      "sheng": "14",
      "di": "08",
      "xian": "02",
      "name": "数字媒体技术",
      "level": 3
    },
    {
      "code": "140821",
      "sheng": "14",
      "di": "08",
      "xian": "21",
      "name": "软件工程",
      "level": 3
    },
    {
      "code": "140822",
      "sheng": "14",
      "di": "08",
      "xian": "22",
      "name": "通信工程",
      "level": 3
    },
    {
      "code": "140823",
      "sheng": "14",
      "di": "08",
      "xian": "23",
      "name": "信息安全",
      "level": 3
    },
    {
      "code": "140824",
      "sheng": "14",
      "di": "08",
      "xian": "24",
      "name": "物联网工程",
      "level": 3
    },
    {
      "code": "140825",
      "sheng": "14",
      "di": "08",
      "xian": "25",
      "name": "智能科学与技术",
      "level": 3
    },
    {
      "code": "140900",
      "sheng": "14",
      "di": "09",
      "xian": "00",
      "name": "化学化工学院",
      "level": 2
    },
    {
      "code": "140901",
      "sheng": "14",
      "di": "09",
      "xian": "01",
      "name": "化学",
      "level": 3
    },
    {
      "code": "140902",
      "sheng": "14",
      "di": "09",
      "xian": "02",
      "name": "化学工程与工艺",
      "level": 3
    },
    {
      "code": "140921",
      "sheng": "14",
      "di": "09",
      "xian": "21",
      "name": "应用化学",
      "level": 3
    },
    {
      "code": "141000",
      "sheng": "14",
      "di": "10",
      "xian": "00",
      "name": "法学院",
      "level": 2
    },
    {
      "code": "141001",
      "sheng": "14",
      "di": "10",
      "xian": "01",
      "name": "政治学与行政学",
      "level": 3
    },
    {
      "code": "141002",
      "sheng": "14",
      "di": "10",
      "xian": "02",
      "name": "行政管理",
      "level": 3
    },
    {
      "code": "141021",
      "sheng": "14",
      "di": "10",
      "xian": "21",
      "name": "法学",
      "level": 3
    },
 */
  ];
  callBack(str);
}

module.exports.getSchoolInfo = getSchoolInfo;

