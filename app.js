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
            urlPath: "http://49.123.68.14:8080",
            openid: '',
            // aSelectedTeacher:null,
            findedTeachers: [],
            teacherId:1,
            systemInfo :''
         }
}) 
