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
            success: function (res) {
              //从数据库获取用户信息
              // that.queryUsreInfo();
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
      var that = this;
      var appId = getApp().globalData.openid;
      //插入登录的用户的相关信息到数据库
      wx.request({
        url: app.globalData.urlPath +"/superadmin/insertWxUser",//自己的服务接口地址       
        data: {
          "uWxid": appId,
          "uNickname": e.detail.userInfo.nickName,
          "uPhoto": e.detail.userInfo.avatarUrl,
          "uProvince": e.detail.userInfo.province,
          "uCity": e.detail.userInfo.city,
          "uCountry":e.detail.userInfo.country,
          "uGender": e.detail.userInfo.gender,
        },
        method: 'POST',
        dataType: 'json',
        responseType: 'text',

        success: function (res) {

          if(res.data.success!=false)//因为后台一旦出错，就会往success字段中存储false
          {
            //从数据库获取用户信息
            // that.queryUsreInfo();
            console.log('添加用户成功');
          }
          else
          {
            console.log(res.data.errMsg);
          }
          
        }
      });

      //授权成功后，跳转进入小程序首页
      wx.switchTab({
        url: '/pages/recommend/recommend'
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
  //获取用户信息接口
  queryUsreInfo: function () {
    wx.request({
      url: app.globalData.urlPath + '/user/userInfo',
      data: {
        openid: app.globalData.openid
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res.data);
        getApp().globalData.userInfo = res.data;
      }
    })
  },

})
