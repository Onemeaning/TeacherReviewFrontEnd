const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataList: [],
    // dataOrigin:[],//这个需要存储原始的信息，保证时间没有被裁减过的。
  },

  /**
   * 生命周期函数--监听页面加载
   */

  onLoad:function(){

    wx.showLoading({
      title: '正在加载',
    }) 
   this.getAllEmails();
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
    wx.showLoading({
      title: '正在加载',
    }) 
    this.getAllEmails();
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
   * 获取所有邮件
   */
  getAllEmails: function () {
    var that = this;
    var id = app.globalData.openid;
    wx: wx.request({
      url: app.globalData.urlPath + "/superadmin/getAllEmails",
      data: {
        toId: id,
      },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function (res) {
        if(res.data.success!=null)
        {
                 
          // that.setData({
          //   dataOrigin: res.data.success
          // })        
          /**
           * 截图时间的片段，否则显示的时候很难看
           */
          // for (var i = 0; i < res.data.success.length; i++) {
          //   var temp = res.data.success[i].sendTime;
          //   var time = temp.substring(7, 9) + "月"+ temp.substring(8, 10) + "号 " + temp.substring(11, 16);
          //   res.data.success[i].sendTime = time;
          // }
          that.setData({
            dataList: res.data.success
          })  
          wx.hideLoading();   
        }
             
      },
    })
  },

/**
 * 删除一封邮件
 */
  deleteEmail:function(event)
  {
    var that = this;
    var index = event.target.dataset.index;
    var fromId = that.data.dataList[index].fromId;
    var toId = app.globalData.openid;
    var sendTime = that.data.dataList[index].sendTime;

    wx.showModal({
      title: '提示',
      content: '确认删除这条邮件么？',
      success: function (sm) {
        if (sm.confirm) {
          wx: wx.request({
            url: app.globalData.urlPath + "/superadmin/removeEmail",
            data: {
              "fromId": fromId,
              "toId": toId,
              "sendTime":sendTime,
            },
            method: 'POST',
            dataType: 'json',
            responseType: 'text',
            success: function (res) {
              var result = res.data.success;
              console.log(result)
              var toasetext = "删除成功！";
              if (result != true) {
                toasetext = "删除失败！" + res.data.errMsg;
                console.log(toasetext)
              }
              else {
                that.data.dataList.splice(event.target.dataset.index, 1);
                that.setData({
                  dataList: that.data.dataList
                })
              }
              wx.showToast({
                title: toasetext,
                icon: '',
                duration: 2000
              })
            },
          })
        }
      }
    })
  },
/**
 * 清空收件箱，删除所有的邮件
 */
  clearAll: function (event) {
    var that = this;
    var toId = app.globalData.openid;
    wx.showModal({
      title: '提示',
      content: '确认清空邮件箱？',
      success: function (sm) {
        if (sm.confirm) {
          wx: wx.request({
            url: app.globalData.urlPath + "/superadmin/removeAllEmails",
            data: {           
               "toId": toId,
            },
            method: 'GET',
            dataType: 'json',
            responseType: 'text',
            success: function (res) {
              var result = res.data.success;
              console.log(result)
              var toasetext = "删除成功！";
              if (result != true) {
                toasetext = "删除失败！" + res.data.errMsg;
                console.log(toasetext)
              }
              else {
                that.setData({
                  dataList: []
                })
              }
              wx.showToast({
                title: toasetext,
                icon: '',
                duration: 2000
              })
            },
          })
        }
      }
    })
  },


/**
 * 查询邮件详细信息
 */
  eamilsDetailsInfo:function(event){
    var that  = this;
    var index = event.currentTarget.dataset.index;
    var data = that.data.dataList[index];

    that.updateUncheckedEmails(data.fromId,app.globalData.openid,data.sendTime);
    app.globalData.emailInfo = data;
    wx.navigateTo({
      url: '../../pages/eamilsDetailsInfo/eamilsDetailsInfo'
    })
  },

/**
 * 更新未读邮件的状态
 */
  updateUncheckedEmails: function (fromId,toId,sendTime) {
    var that = this;
    wx: wx.request({
      url: app.globalData.urlPath + "/superadmin/emailsChecked",
      data: {
        "fromId":fromId,
        "toId": toId,
        "sendTime": sendTime,
      },
      method: 'POST',
      dataType: 'json',
      responseType: 'text',
      success: function (res) {
      },
    })
  },


})