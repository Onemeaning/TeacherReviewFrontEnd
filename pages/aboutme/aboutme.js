const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    myinfos: null,//学生的个人信息
    uid:'',
    emailsConunt:0,//未读邮件的数目

    isTeacher:false,

    detailInfo:null,//老师的个人信息
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var id = app.globalData.openid;
    var isTe = app.globalData.isTeacher;
    this.getWxUserDetail();
    this.getUncheckedEmails();
    this.setData({
         uid:id,
         isTeacher:isTe,
     });

  },

  onShow:function()
  {
    var isTe = app.globalData.isTeacher;
    this.setData({
      isTeacher: isTe,
    });

    this.getWxUserDetail();
    this.getUncheckedEmails();

    //是老师的时候才会查询这个
    if (this.data.isTeacher) {
      this.queryInfo(this.data.uid);
    }
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
      content: '修改完整信息，让TA更了解你哦',
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

  /**
   * 按照老师的ID查询信息
   * 
   */
  queryInfo: function (teacherId) {
    var that = this;
    wx.showLoading({
      title: '正在加载，请稍后',
    })
    wx: wx.request({
      url: app.globalData.urlPath + "/superadmin/findByTeacherId",
      data: {
        tId: teacherId,
      },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function (res) {
        var t_data = res.data.success;
        if (t_data != null) {

          that.setData({
            detailInfo: t_data,
          })
          wx.hideLoading();
        }
      },
    })
  },

  clickEmail:function(){
    wx.showToast({
      title: '请点击右上方私信图标！',
      icon:'none',
      duration:2000,
    })
  }


})