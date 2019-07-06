// pages/comment/comment.js
var model = require('../../model/model.js')
const app = getApp();
var show = false;
var item = {};
Page({

  /**
   * 页面的初始数据
   */
  data: {
    topFiveTeachers:[],//用于存储所有老师的信息
    searchContent:'通信工程',

    province:"",//学校
    city:"",//学院
    county: "",//系专业

    showScrollView:true,
    item: {
      show: show
    },

    showWhat:false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function (e) {

    var that = this;
    //请求数据
    model.updateAreaData(that, 0, e);
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

/**
 * 用于查询具体老师的信息
 */
  func_detail:function(event){
      var that = this;
      app.globalData.teacherId = event.currentTarget.dataset.teacherItem.tId;
    wx.navigateTo({
      url: '/pages/teacherInfo/introduction',
    })
  } ,

 
/**
 *
 *该函数用于用户搜索一个系的老师
 * 
 */
  searchTeachers: function (event) {
    var that = this;
    var searchContent = event.detail.value;
    that.func_lisTopFive(searchContent);
  },


  /**
   * 根据单位列访问次数最多的老师；
   */
  func_lisTopFive: function (affication) {
    var that = this;
    wx.showLoading({
      title: '正在加载，请稍后！',
    })
    wx.request({
      url: app.globalData.urlPath + "/superadmin/topFiveTeachers",//自己的服务接口地址
      method: 'GET',
      data: {
        tAffiliation: affication
      },
      dataType: 'json',
      responseType: 'text',
      success: function (res) {
        var topFiveTeachers = res.data.success;
        if (topFiveTeachers == null) {
          var toastText = "获取数据失败" + res.data.errMsg;
          wx.showToast({
            title: toastText,
            icon: '',
            duration: 2000
          });
        }
        else {

          that.setData({
            topFiveTeachers: topFiveTeachers,
            showWhat:true,
          });

          if(affication!=null&&affication!="")
          {
            
            var index = affication.indexOf("院");
            if (index>0){
              affication = affication.slice(index+1);
            }
            wx.setNavigationBarTitle({
              title: "《"+ affication+"》专业热门导师推荐",
            })
          }
          wx.hideLoading(); 
        }
      },
    });
  },

  //点击选择城市按钮显示picker-view
  translate: function (e) {
    this.setData({
      showScrollView:false
    });
    model.animationEvents(this, 0, true, 400);
  },

  //隐藏picker-view
  hiddenFloatView: function (e) {
    console.log("id = " + e.target.dataset.id)
    model.animationEvents(this, 200, false, 400);
    this.setData({
      showScrollView: true
    });
    //点击确定按钮更新数据(id=444是背后透明蒙版 id=555是取消按钮)
    if (e.target.dataset.id == 666) {
      this.updateShowData()
      var province = item.provinces[item.value[0]].name;
      var city = item.citys[item.value[1]].name;
      var county = item.countys[item.value[2]].name;
      var affication = province + city + county;

      this.func_lisTopFive(affication);
      
      this.setData({
        searchContent: ''
      })
    }
    else{
      this.setData({
        searchContent: ''
      })
    }
  },
  //滑动事件
  bindChange: function (e) {
    model.updateAreaData(this, 1, e);
    //如果想滑动的时候不实时更新，只点确定的时候更新，注释掉下面这行代码即可。
    this.updateShowData()
  },
  //更新顶部展示的数据
  updateShowData: function (e) {
    item = this.data.item;
    this.setData({
      province: item.provinces[item.value[0]].name,
      city: item.citys[item.value[1]].name,
      county: item.countys[item.value[2]].name
    });
  },
 
  
})