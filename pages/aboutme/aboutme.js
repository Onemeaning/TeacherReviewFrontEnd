const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // onPullDownRefresh: function () {
    //   wx.stopPullDownRefresh()
    // },
    myinfos: null,
    uid:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var info = app.globalData.userInfo;
    var id = app.globalData.openid;
    this.setData({
      myinfos: info,
         uid:id
     });

  },
  exit: function (e) {
    wx.showModal({
      title: '提示',
      content: '是否确认退出',
      success: function (res) {
        if (res.confirm) {
          // console.log('用户点击确定')
          wx.removeStorageSync('student');
          //页面跳转
          wx.redirectTo({
            url: '../login/login',
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  updateUserInfo: function (e) {
    wx.showModal({
      title: '温馨提示',
      content: '当您更新完整的个人信息之后，您将会被授予向数据库更新自己导师<新增项目><新发表的论文>等信息的权限，更新后的信息将可以被所有人查阅！',
      success: function (res) {
        if (res.confirm) {

          wx.navigateTo({
            url: '../password/password?no=' + no,
          })

        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
 
})