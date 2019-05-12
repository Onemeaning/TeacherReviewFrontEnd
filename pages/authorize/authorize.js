const app = getApp();
Page({
  data: {  
    //判断小程序的API，回调，参数，组件等是否在当前版本可用。
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
  },
  onLoad: function () {
    wx.showLoading({
      title: '正在加载，请稍后',
    });
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
                  app.globalData.isTeacher = wx.getStorageSync('isTeacher');

                  // console.log("用户授权之后拿出来的信息："+ res.userInfo);
                  // console.log("用户授权之后从缓存区读取ID："  + wx.getStorageSync('openId'));
                  //用户已经授权过
                  wx.switchTab({
                    url: '/pages/homeIndex/homeIndex'
                  })
                }
              });
            }
          }
        })  
      wx.hideLoading();      
  },

  bindGetUserInfo: function (e) {
    if (e.detail.userInfo) {

      //用户按了允许授权按钮
/**-------------------------------从服务里中获取信息来实现登陆登录 ---------------------------------------------------- */       
      var that = this;

      wx.showLoading({
        title: '正在加载，请稍后',
      })

      wx.login({
        success: function (res) {
          // 1、发送 res.code 到后台换取 openId, sessionKey, unionId
          var code = res.code;//登录凭证 
          if (code) {
            //2、调用获取用户信息接口
            wx.getUserInfo({
              lang: "zh_CN",
              success: function (res) {
                /** 这是用于向服务器发送的数据，这行可以注释 */
                //3.请求自己的服务器，解密用户信息 获取unionId等加密信息
                wx.request({
                  url: app.globalData.urlPath + "/superadmin/decodeUserInfo",//自己的服务接口地址
                  method: 'GET',
                  header: { 'content-type': 'application/x-www-form-urlencoded' },
                  data: { encryptedData: res.encryptedData, iv: res.iv, code: code },
                  success: function (data) {
                    //4.解密成功后 获取自己服务器返回的结果
                    if (data.data.status == 1) {
                      // console.log('成功从自己服务器中解密到需要的信息openID')

                      //将获取到的信息保存到手机缓存或者全局变量中去，缓存有效期永久，除非用户删除
                      app.globalData.userInfo = data.data.userInfo;
                      app.globalData.openid = data.data.userInfo.openId;                     
                      wx.setStorageSync('openId', data.data.userInfo.openId);
                      
                      that.sendEmail(data.data.userInfo.openId);

                      var appId = app.globalData.openid;
                      var uNickname = data.data.userInfo.nickName;                      
                      var uPhoto = data.data.userInfo.avatarUrl;
                      var uProvince = data.data.userInfo.province;
                      var uCity = data.data.userInfo.city;
                      var uCountry = data.data.userInfo.country;
                      var uGender = (data.data.userInfo.gender == 1) ? '男' : '女';
                      // console.log(appId +"头像"+ uPhoto + uNickname);
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
                                  console.log('添加用户成功');
                                }
                                else {
                                  console.log("用户已添加!");                                 
                                }
                                //判断是否点击了老师，是老师的画需要进一步认证
                                var type = e.target.dataset.type;
                                if (type == "teacher") {                       
                                  wx.navigateTo({
                                    url: '/pages/teacherCetify/teacherCetify',
                                  })
                                }
                                else{
                                  wx.switchTab({
                                    url: '/pages/homeIndex/homeIndex'
                                  })
                                }
                              
                              }
                            });
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
            // wx.hideLoading();
          }
        }
      })  
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
 

  /**
    * 发送一封邮件
    */
  sendEmail: function (id) {
    var that = this;
    var dateUtil = require('../../utils/dateUtils.js');
    var date = dateUtil.getToday();
    var content = "亲爱的小伙伴们，欢迎使用《导师选评助手》，我们是你们的小助手meanlam，这里将是你与导师交流的一个平台，导师给你回的信息都在保存在这里，meanlam祝你们都能找到合适的老师！";
    var fromId = "oKnF45PKGIEW1BV3EAw9CBx3FZhc";
    var fromImage = "/image/logo1.png";
    var fromNickName = "导师选评助手";
    var toId = id;

    wx.request({
    url: app.globalData.urlPath + "/superadmin/notifyInfo",//自己的服务接口地址      
    data: {
      'fromId': fromId,
      'fromIdImage': fromImage,
      'emailContent': content,
      'fromIdNickName': fromNickName,
      'sendTime': date,
      'toId': toId,
    },
    method: 'POST',
    dataType: 'json',
    responseType: 'text',
    success: function (res) {
      wx.hideLoading();
      console.log(res.data.success)
    }
   })
  },

})
