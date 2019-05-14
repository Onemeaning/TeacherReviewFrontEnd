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

  replyEmail: function (e) {
    var that = this;
    var fromNickName = app.globalData.userInfo.nickName;
    var toNickName = that.data.emailInfo.fromIdNickName;
    var toId = that.data.emailInfo.fromId;
    wx.navigateTo({
      url: '../../pages/writeEmail/writeEmail?fromNickName=' + fromNickName + "&toNickName=" + toNickName + "&toId=" + toId
    });
  },
  

})