// pages/teachers/teachers.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
      teacherList:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var teachers = app.globalData.findedTeachers;
    this.setData({
      teacherList: teachers,
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.setNavigationBarTitle({
      title: this.data.teacherList[0].tAffiliation,
    })
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
 * 
 * 用于跳转到具体的详细的导师介绍界面
 */
  toDetailInfo :function(e){
    app.globalData.aSelectedTeacher = e.currentTarget.dataset.teacher;
    app.globalData.teacherId = e.currentTarget.dataset.teacher.tId;
    wx.navigateTo({
      url: '/pages/teacherInfo/introduction',
    })
  }
})