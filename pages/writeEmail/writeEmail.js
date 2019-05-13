// pages/writeEmail/writeEmail.js
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
      fromNickName:"",//谁要发邮件
      toNickName:"",//收件人的名字
      toId:"",//收件人的ID
      content:"",//邮件内容
      source:[],//简历照片
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;   
    that.setData({                            //this.setData的方法用于把传递过来的id转化成小程序模板语言
      fromNickName: options.fromNickName,     //fromNickName是上个页面传递过来的名称，fromNickName是保存在本页面的全局变量 
      toNickName: options.toNickName,
      toId: options.toId,
    });
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

  getValue: function (e) {
    this.setData({
      content: e.detail.value,
    })
  },



  /**
  * 选择图片
  */
  chooseImg: function () {
    var that = this;
    wx.chooseImage({ //从本地相册选择图片或使用相机拍照
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        that.setData({
          source: res.tempFilePaths
        })
      }
    })
  },




  /**
     * 发送一封邮件
     */
  sendEmail: function (data) {
    var that = this;
    var dateUtil = require('../../utils/dateUtils.js');
    var date = dateUtil.getToday();

    var content = this.data.content;
    var fromId = app.globalData.openid;
    var fromImage = app.globalData.userInfo.avatarUrl;
    var fromNickName = app.globalData.userInfo.nickName;
    var toId = that.data.toId;

    if (that.data.source != null && that.data.source.length > 0) {
      wx.showLoading({
        title: '正在上传！',
      })
      wx.uploadFile({
        url: app.globalData.urlPath + "/superadmin/writeEmail",//自己的服务接口地址
        filePath: that.data.source[0],
        name: 'resumePhoto',
        formData: {
          'fromId': fromId,
          'fromIdImage': fromImage,
          'emailContent': content,
          'fromIdNickName': fromNickName,
          'sendTime': date,
          'toId': that.data.toId,
        },
        success: function (res) {
          var data = res.data.success
          if (data == "error") {
            wx.showToast({
              title: '未知错误',
              icon: "none",
              duration: 1000,
            })
          }

        },
        complete: function (complete) {
            wx.hideLoading();
            wx.showToast({
              title: '发送成功',
              icon: 'succes',
              duration: 1000,
            }),
              that.setData({
                source: [],
                content: "",
              })

        }
      })
    }
    else{

      wx.request({
        url: app.globalData.urlPath + "/superadmin/notifyInfo",//自己的服务接口地址
        method: "POST",
        data: {
          'fromId': fromId,
          'fromIdImage': fromImage,
          'emailContent': content,
          'fromIdNickName': fromNickName,
          'sendTime': date,
          'toId': that.data.toId,
        },
        success: function (res) {
          wx.hideLoading();
          wx.showToast({
            title: '发送成功',
            icon: 'succes',
            duration: 1000,
          }),
            that.setData({
              source: [],
              content: "",
            })
        },
      })
    }
  }

})