//app.js
App({
//测试从远程拉取的功能，可以的很好
  onLaunch: function () {
    // 展示本地存储能力
    var that = this;
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    wx.getSystemInfo({
      success: function (res) {
        that.globalData.systemInfo = res.system
      },
    });  
  },

    /**
     * 这是全局变量，用于存储用户信息的，方便后面使用
     */
    globalData: {
      userInfo: null,
      // urlPath: "https://www.nest-lab.com/wx-te-0.0.2-SNAPSHOT",
      urlPath:"http://49.123.68.14:8080",
      openid: '',
      // aSelectedTeacher:null,
      findedTeachers: [],
      teacherId:1,
      systemInfo :'',
      emailInfo:null,
      isTeacher:false,
    },

/**
* 退出时候，删除服务器端从服务器中下载的临时图,openId是服务器端的临时文件夹
*/
  deletetempPic: function () {
    var openId = this.globalData.openid;
    wx: wx.request({
      url: this.globalData.urlPath + "/superadmin/deletetempPic",
      data: {
        "tempPath": openId,
      },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function (res) {
      },
    })
  },


}) 
