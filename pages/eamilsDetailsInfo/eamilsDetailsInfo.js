// pages/eamilsDetailsInfo/eamilsDetailsInfo.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    emailInfo:null,
    historyMessage:null,//;历史聊天记录
    chatMode:false,
    openid:"",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      emailInfo: app.globalData.emailInfo,
      openid: app.globalData.openid,
    })
  },


  /**
  * 生命周期函数--监听页面初次渲染完成
  */
  onReady: function () {

    wx.setNavigationBarTitle({
      title: this.data.emailInfo.fromIdNickName,
    });
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () { 

    if (this.data.historyMessage!=null||this.data.chatMode==true)
    {
      this.getAllHistoryEmails();
    }
    
  },


  replyEmail: function (e) {
    var that = this;
    that.setData({
      chatMode:true,
    })
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
    var that = this;
    if (that.data.chatMode==true)
    {
      wx.showNavigationBarLoading();
    }
    else{
      wx.showLoading({
        title: '获取历史信息中',
      })
    }

    var that = this;
    var fromId = that.data.emailInfo.fromId;
    var toId = app.globalData.openid;
    var time = that.data.emailInfo.sendTime;
    wx: wx.request({
      url: app.globalData.urlPath + "/superadmin/getAllHistoryEmails",
      data: {
        "fromId": fromId,
        "toId": toId,
        "sendTime":time,
      },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function (res) {
        if (res.data.success != null) {
          that.setData({
            historyMessage: res.data.success
          })
          if (that.data.chatMode == true) {
            wx.hideNavigationBarLoading();
          }
          else {
            wx.hideLoading();
          }

        }
        else{
          wx.showToast({
            title: '抱歉：未找到聊天记录',
          })

        }
      },
    })
  }, 

})