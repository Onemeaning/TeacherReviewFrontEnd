//app.js
App({
//测试从远程拉取的功能
  onLaunch: function () {
    // 展示本地存储能力
    var that = this;
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // var openId = (wx.getStorageSync('openId'))
      // 登录       
      //  wx.login({         
      //     success: function (res) {
      //       // 1、发送 res.code 到后台换取 openId, sessionKey, unionId

      //       var code = res.code;//登录凭证 
      //       console.log("app.js中晚上的时候获取的code："+code)          
      //       if (code) {
      //         //2、调用获取用户信息接口
      //            wx.getUserInfo({
      //                 lang: "zh_CN",
      //                 success: function (res) {
      //                 /** 这是用于向服务器发送的数据，这行可以注释 */
      //                   console.log({ encryptedData: res.encryptedData, iv: res.iv, code: code })

      //                 //3.请求自己的服务器，解密用户信息 获取unionId等加密信息
      //                 wx.request({
      //                   url: that.globalData.urlPath + "/superadmin/decodeUserInfo",//自己的服务接口地址
      //                   method: 'GET',
      //                   header: {'content-type': 'application/x-www-form-urlencoded'},
      //                   data: { encryptedData: res.encryptedData, iv: res.iv, code: code },
      //                   success: function (data) {
      //                     //4.解密成功后 获取自己服务器返回的结果
      //                     if (data.data.status == 1) {
      //                       console.log('成功从自己服务器中解密到需要的信息openID')
      //                       that.globalData.userInfo = data.data.userInfo;
      //                       console.log(that.globalData.userInfo)
      //                       that.globalData.openid = data.data.userInfo.openId;
      //                       console.log(that.globalData.openid)

      //                       wx.setStorageSync('openId', data.data.openId);

      //                     } else {
      //                       console.log('解密失败'+data.data.msg);
      //                     }
      //                   },

      //                   fail: function () {
      //                     console.log('系统错误')
      //                   }
      //                 })
      //               },

      //               fail: function () {
      //                 console.log('获取用户信息失败: wx.getUserInfo()不给你提供用户信息');
      //               }                     
      //       })
      //       } 
      //   }
      // })   
  },

          /**
           * 这是全局变量，用于存储用户信息的，方便后面使用
           */
          globalData: {
            userInfo: null,
            urlPath: "http://192.168.1.1:8080",
            openid: '',
            aSelectedTeacher:null,
            findedTeachers: []
         }
}) 
