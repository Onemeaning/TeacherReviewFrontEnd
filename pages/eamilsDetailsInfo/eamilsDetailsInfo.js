// pages/eamilsDetailsInfo/eamilsDetailsInfo.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    emailInfo:null,
    historyMessage:null,//;历史聊天记录
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

  /**
    * 获取历史信息聊天记录
    */
  getAllHistoryEmails: function () {
    wx.showLoading({
      title: '获取历史信息中',
    })
    var that = this;
    var fromId = that.data.emailInfo.fromId;
    var toId = app.globalData.openid;
    wx: wx.request({
      url: app.globalData.urlPath + "/superadmin/getAllHistoryEmails",
      data: {
        "fromId": fromId,
        "toId": toId,
      },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function (res) {
        if (res.data.success != null) {
          that.setData({
            historyMessage: res.data.success
          })
          wx.hideLoading();
        }
      },
    })
  }, 

})