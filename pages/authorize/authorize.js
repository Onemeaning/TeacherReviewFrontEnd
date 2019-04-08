const app = getApp();
Page({
  data: {  
    //判断小程序的API，回调，参数，组件等是否在当前版本可用。
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  onLoad: function () {
    var that = this;
      // 查看是否授权
        wx.getSetting({
          success: function (res) {
            if (res.authSetting['scope.userInfo']) {
              wx.getUserInfo({
                lang: "zh_CN",
                success: function (res) {    

                  app.globalData.userInfo = res.userInfo;
                  app.globalData.openid = wx.getStorageSync('openId');

                  console.log("用户授权之后拿出来的信息："+ res.userInfo);
                  console.log("用户授权之后从缓存区读取ID："  + wx.getStorageSync('openId'));
                  //用户已经授权过
                  wx.switchTab({
                    url: '/pages/recommend/recommend'
                  })
                }
              });
            }
          }
        })        
  },

  bindGetUserInfo: function (e) {
    if (e.detail.userInfo) {
      //用户按了允许授权按钮
/**-------------------------------从服务里中获取信息来实现登陆登录 ---------------------------------------------------- */   
      wx.switchTab({
        url: '/pages/recommend/recommend'
      })


      var that = this;
      wx.showNavigationBarLoading();
      wx.login({
        success: function (res) {
          // 1、发送 res.code 到后台换取 openId, sessionKey, unionId
          var code = res.code;//登录凭证 
          console.log("app.js中晚上的时候获取的code：" + code)
          if (code) {
            //2、调用获取用户信息接口
            wx.getUserInfo({
              lang: "zh_CN",
              success: function (res) {
                /** 这是用于向服务器发送的数据，这行可以注释 */
                console.log({ encryptedData: res.encryptedData, iv: res.iv, code: code })

                //3.请求自己的服务器，解密用户信息 获取unionId等加密信息
                wx.request({
                  url: app.globalData.urlPath + "/superadmin/decodeUserInfo",//自己的服务接口地址
                  method: 'GET',
                  header: { 'content-type': 'application/x-www-form-urlencoded' },
                  data: { encryptedData: res.encryptedData, iv: res.iv, code: code },
                  success: function (data) {
                    //4.解密成功后 获取自己服务器返回的结果
                    if (data.data.status == 1) {
                      console.log('成功从自己服务器中解密到需要的信息openID')

                      //将获取到的信息保存到手机缓存或者全局变量中去，缓存有效期永久，除非用户删除
                      app.globalData.userInfo = data.data.userInfo;
                      app.globalData.openid = data.data.userInfo.openId;
                      wx.setStorageSync('openId', data.data.userInfo.openId);
                      var appId = app.globalData.openid;
                      var uNickname = data.data.userInfo.nickName;                      
                      var uPhoto = data.data.userInfo.avatarUrl;
                      var uProvince = data.data.userInfo.province;
                      var uCity = data.data.userInfo.city;
                      var uCountry = data.data.userInfo.country;
                      var uGender = (data.data.userInfo.gender == 1) ? '男' : '女';
                      console.log(appId +"头像"+ uPhoto + uNickname);
                            //插入登录的用户的相关信息到数据库
                            wx.request({
                              url: app.globalData.urlPath + "/superadmin/insertWxUser",//自己的服务接口地址       
                              data: {
                                "uWxid": appId,
                                "uNickname": uNickname,
                                "uPhoto": uPhoto,
                                "uProvince": uProvince,
                                "uCity": uCity,
                                "uCountry": uCountry,
                                "uGender": uGender,
                              },
                              method: 'POST',
                              dataType: 'json',
                              responseType: 'text',
                              success: function (res) {
                                if (res.data.success != false)//因为后台一旦出错，就会往success字段中存储false
                                {
                                  //从数据库获取用户信息
                                  // that.queryUsreInfo();
                                  console.log('添加用户成功');
                                }
                                else {
                                  console.log("用户已添加!");
                                }
                              }
                            });
                            //授权成功后，跳转进入小程序首页
                            // wx.switchTab({
                            //   url: '/pages/recommend/recommend'
                            // })
                    } else {
                      console.log('解密失败' + data.data.msg);
                    }
                  },

                  fail: function () {
                    console.log('系统错误')
                  }
                })
              },
              
              fail: function () {
                console.log('获取用户信息失败: wx.getUserInfo()不给你提供用户信息');
              }
              
            })
            wx.hideNavigationBarLoading();
          }
        }
      })  
      // wx.hideNavigationBarLoading();
/**   ------------------------------------------------------------------------------------------- */

    } else {
      //用户按了拒绝按钮
      wx.showModal({
        title: '警告',
        content: '您点击了拒绝授权，将无法进入小程序，请授权之后再进入!!!',
        showCancel: false,
        confirmText: '返回授权',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击了“返回授权”')
          }
        }
      })
    }
  },

})
