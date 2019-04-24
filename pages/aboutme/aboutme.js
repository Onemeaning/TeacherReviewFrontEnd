const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    myinfos: null,
    uid:'',
    emailsConunt:0,//未读邮件的数目
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var id = app.globalData.openid;
    this.getWxUserDetail();
    this.getUncheckedEmails();
    this.setData({
         uid:id
     });

  },

  onShow:function()
  {
    this.getWxUserDetail();
    this.getUncheckedEmails();
  },


  /**
   * 获取个人详细信息：
   */
  getWxUserDetail: function () {
    var that = this;
    var id = app.globalData.openid;
    wx: wx.request({
      url: app.globalData.urlPath + "/superadmin/getUserInfo",
      data: {
        uWxid: id,
      },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function (res) {
        that.setData({
          myinfos: res.data.success
        })
      },
    })
  },



  /**
   * 更新用户信息
   */
  updateUserInfo: function () {
    wx.showModal({
      title: '温馨提示',
      content: '修改完整信息，让老师更了解你哦',
      success: function (res) {
        if (res.confirm) {
          wx.navigateTo({
            url: '../../pages/editInfo/editInfo',
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },

  myEmails:function()
  {
    wx.navigateTo({
      url: '../../pages/emailDetails/emailDetails',
    })
    // this.getUncheckedEmails();
  },

/**
 * 获取未读邮件的个数
 */
getUncheckedEmails:function()
{
  var that = this;
  var id = app.globalData.openid;
  wx: wx.request({
    url: app.globalData.urlPath + "/superadmin/uncheckedEmailsNum",
    data: {
      toId: id,
    },
    method: 'GET',
    dataType: 'json',
    responseType: 'text',
    success: function (res) {
      console.log(res.data.success);
      that.setData({
         emailsConunt : res.data.success
      })
    },
  })
},


  /**
   * 退出登录
   */
  exit: function () {
    wx.showModal({
      title: '提示',
      content: '是否确认退出',
      success: function (res) {
        if (res.confirm) {
          // console.log('用户点击确定')
          wx.removeStorageSync('openId');
          //页面跳转
          wx.redirectTo({
            url: '../../pages/authorize/authorize',
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },


})