// pages/eamilsDetailsInfo/eamilsDetailsInfo.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    emailInfo:null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      emailInfo: app.globalData.emailInfo,
    })
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
   this.deletetempPic();
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

 
  replyEmail: function (e) {
    //这一步是为了把模板语言转化成js语言
    var that = this;
    var fromNickName = app.globalData.userInfo.nickName;
    var toNickName = that.data.emailInfo.fromIdNickName;
    var toId = that.data.emailInfo.fromId;
    wx.navigateTo({
      url: '../../pages/writeEmail/writeEmail?fromNickName=' + fromNickName + "&toNickName=" + toNickName + "&toId=" + toId
    });
  },
  
  /**
   * 退出时候，删除服务器端从服务器中下载的临时图,tempImages是服务器端的临时文件夹；
   */
  deletetempPic: function () {
    wx: wx.request({
      url: app.globalData.urlPath + "/superadmin/deletetempPic",
      data: {
        "resumeUrl": "tempImages",
      },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function (res) {
      },
    })
  },




})