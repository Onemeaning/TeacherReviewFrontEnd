// pages/comment/comment.js

const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    topFiveTeachers:[],//用于存储今天推荐的点赞数前五名的老师信息
    searchContent:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.showNavigationBarLoading();
      wx.request({
        url: app.globalData.urlPath + "/superadmin/topFiveTeachers",//自己的服务接口地址
        method:'GET',
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

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
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
      app.globalData.aSelectedTeacher = event.currentTarget.dataset.teacherItem;//将当前选中的老师对象保存到全局变量中
    // console.log(teacherId)
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
    wx.showNavigationBarLoading();
    wx: wx.request({
      url: app.globalData.urlPath + "/superadmin/findByAffiliation",
      data: {
        "tAffiliation": searchContent
      },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function (res) {
        var searchResult = res.data.teachers;
        // console.log(res.data.seccess);
        // console.log(searchResult.length)
        if (searchResult.length>0)
        {
          // wx.showToast({
          //   title: '查询成功',
          //   icon: 'succes',
          //   duration: 1000,
          // })
          app.globalData.findedTeachers = searchResult;//将查询到数据放置到全局变量中
          wx.navigateTo({
            url: "../../pages/teachers/teachers",
          })
          /**
           * 搜索成功，将搜索栏中的内容清空
           */
          that.setData({
            searchContent: ''
          })
        }
        else{
          wx.showToast({
            title: '查询失败',
            icon: 'none',
            duration: 1000,
          })
        }
       
      },
      fail: function (res) { },
      complete: function (res) { },
     
    })
    wx.hideNavigationBarLoading();

  },


})