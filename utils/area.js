function getSchoolInfo(callBack) {
  var str = [
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
      "code": "110105",
      "sheng": "11",
      "di": "01",
      "xian": "05",
      "name": "软件工程系",
      "level": 3
    },
    {
      "code": "110106",
      "sheng": "11",
      "di": "01",
      "xian": "06",
      "name": "计算机工程系",
      "level": 3
    },
    {
      "code": "110107",
      "sheng": "11",
      "di": "01",
      "xian": "07",
      "name": "网络空间安全系",
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
      "code": "110228",
      "sheng": "11",
      "di": "02",
      "xian": "28",
      "name": "结构工程",
      "level": 3
    },
    {
      "code": "110229",
      "sheng": "11",
      "di": "02",
      "xian": "29",
      "name": "桥梁与隧道工程",
      "level": 3
    }, 
    {
      "code": "110230",
      "sheng": "11",
      "di": "02",
      "xian": "30",
      "name": "市政工程",
      "level": 3
    },
    {
      "code": "110231",
      "sheng": "11",
      "di": "02",
      "xian": "31",
      "name": "供热、供燃气、通风及空调工程",
      "level": 3
    },
    {
      "code": "110232",
      "sheng": "11",
      "di": "02",
      "xian": "32",
      "name": "岩土工程",
      "level": 3
    },
    {
      "code": "110233",
      "sheng": "11",
      "di": "02",
      "xian": "33",
      "name": "道路与铁道工程",
      "level": 3
    },


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
      "name": "网络空间安全系",
      "level": 3
    },
    {
      "code": "120200",
      "sheng": "12",
      "di": "02",
      "xian": "00",
      "name": "外国语学院",
      "level": 2
    },
    {
      "code": "120221",
      "sheng": "12",
      "di": "02",
      "xian": "21",
      "name": "英语系",
      "level": 3
    },
    {
      "code": "120223",
      "sheng": "12",
      "di": "02",
      "xian": "23",
      "name": "法语系",
      "level": 3
    },
    {
      "code": "120224",
      "sheng": "12",
      "di": "02",
      "xian": "24",
      "name": "日语系",
      "level": 3
    },
    {
      "code": "120225",
      "sheng": "12",
      "di": "02",
      "xian": "25",
      "name": "西班牙语系",
      "level": 3
    },
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

  ];
  callBack(str);
}

module.exports.getSchoolInfo = getSchoolInfo;

