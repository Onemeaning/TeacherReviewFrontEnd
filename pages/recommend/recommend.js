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
    topFiveTeachers:[],//用于存储今天推荐的点赞数前五名的老师信息
    searchContent:'',
    showScrollView:true,
    item: {
      show: show
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.func_lisTopFive("");   
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
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

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
      // app.globalData.aSelectedTeacher = event.currentTarget.dataset.teacherItem;//将当前选中的老师对象保存到全局变量中
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
    that.searchByAffilication(searchContent);
  },


  /**
   * 根据单位列访问次数最多的老师；
   */
  func_lisTopFive: function (affication) {
    var that = this;
    wx.showNavigationBarLoading();
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
          })
        }
      },
    });
    wx.hideNavigationBarLoading();
  },

searchByAffilication :function(affication)
{
  wx.showNavigationBarLoading();
  wx: wx.request({
    url: app.globalData.urlPath + "/superadmin/findByAffiliation",
    data: {
      tAffiliation: affication
    },
    method: 'GET',
    dataType: 'json',
    responseType: 'text',
    success: function (res) {
      var searchResult = res.data.teachers;
      // console.log(res.data.seccess);
      // console.log(searchResult.length)
      if (searchResult != null && searchResult.length > 0) {
        app.globalData.findedTeachers = searchResult;//将查询到数据放置到全局变量中
        wx.navigateTo({
          url: "../../pages/teachers/teachers",
        })
      }
      else {
        wx.showToast({
          title: '不要缩写，具体到系',
          icon: 'none',
          duration: 2000,
        })
      }

    },
    fail: function (res) { },
    complete: function (res) { },

  })
  wx.hideNavigationBarLoading();
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

      // this.searchByAffilication(affication);
      this.func_lisTopFive(affication);
      this.setData({
        searchContent: 'affication'
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
  }
  ,
  onReachBottom: function () {
  },
  nono: function () { }

})