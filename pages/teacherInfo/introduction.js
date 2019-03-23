// pages/introduction.js
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data:{
      detailInfo: null,     
      support_count: 0,
      comment_count: 0,
      /* 这下面的变量是关于评论相关的 */
      list: [],//定义一个list，用于存储评论数据
      showView: true,//控制是否显示groupButton
      textInputing: true,//控制发布两个字的颜色
      message: "",//用于存储评论框中输入的数据
      isPushed:0,//用于判断是否按下点在键了
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {   
    this.setData({
       imageLocate: "../../image/icon/icon_support_before.png",
       isPushed:false,
       detailInfo: app.globalData.aSelectedTeacher,   
       support_count: app.globalData.aSelectedTeacher.tThumpUpCounts,
       isPushed: app.globalData.aSelectedTeacher.tThumpUpCounts
    })
    this.loadTalks();    // 设置动画内容为：使用绝对定位显示区域，高度变为100%
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
    onReady: function () { 

    wx.setNavigationBarTitle({
      title: this.data.detailInfo.tName,
    })

   // 评论弹出层动画创建
    this.animation = wx.createAnimation({
      duration: 300, // 整个动画过程花费的时间，单位为毫秒
      timingFunction: "ease", // 动画的类型
      delay: 0 // 动画延迟参数
    })
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
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
/**
 * 
 * 点击点赞按钮，数字加一，并且不能再点击了
 */
  func_support: function(event){   

    if (this.data.isPushed==this.data.support_count)//如果还没有按下点赞键，开始点赞，并且往数据库更新数据
    {
      this.setData({
         support_count: this.data.support_count + 1,        
         imageLocate: "../../image/icon/icon_support_after.png",
      })
      this.updateThumps(this.data.support_count);
    }
    
    else//否则说明你已经点赞了，这时候回退点赞头像，将点赞数减一
    {
      this.setData({
        support_count: this.data.support_count -1 ,
        imageLocate: "../../image/icon/icon_support_before.png",
      })
      this.updateThumps(this.data.support_count);      
    }
    
  },
/**
 * 向数据库中更新点赞的数据
 */
updateThumps:function(counts)
{
  var that = this;
  wx: wx.request({
    url: app.globalData.urlPath + "/superadmin/updateSupportCounts",
    data: { tId: app.globalData.aSelectedTeacher.tId ,
           tThumpUpCounts:counts
           },
    method: 'POST',
    dataType: 'json',
    responseType: 'text',
    success: function (res) {
      var Commentlists = res.data.success;
      if (Commentlists != true) {
        var toastText = "点赞失败" + res.data.errMsg;
        wx.showToast({
          title: toastText,
          icon: '',
          duration: 2000
        });
        that.setData({
          support_count: that.data.support_count - 1,
          imageLocate: "../../image/icon/icon_support_before.png",
        })
      }
    },
    fail: function (res) { },
    complete: function (res) { },
  })

},


/**
 * 点击按钮出现输入对话框，使得用户可以输入评论语句
 * 
 * 
 */
  showTalks: function () {
    // 加载数据
    this.loadTalks();    // 设置动画内容为：使用绝对定位显示区域，高度变为100%
    this.setData({
      talksAnimationData: this.animation.export() 
    })
    this.animation.bottom("0rpx").height("100%").step()
    this.setData({
      showView: (!this.data.showView),//控制评论按钮图标消失，用于显示评论的界面
      talksAnimationData: this.animation.export()
    })
  },


  hideTalks: function () {
    // 设置动画内容为：使用绝对定位隐藏整个区域，高度变为0
    this.animation.bottom("-100%").height("0rpx").step()
    this.setData({
      showView: (!this.data.showView),//控制评论按钮图标显示
      list:null,
      talksAnimationData: this.animation.export()
    })
  },


  // 加载数据
  loadTalks: function () {    // 随机产生一些评论
    var that = this;
    wx.showNavigationBarLoading();
      wx:wx.request({
        url: app.globalData.urlPath+"/superadmin/showComments",
        data: { tId:app.globalData.aSelectedTeacher.tId},
        method: 'GET',
        dataType: 'json',
        responseType: 'text',
        success: function(res) {
          var Commentlists = res.data.commentList;
          if (Commentlists==null)
          {
              var toastText = "获取数据失败"+res.data.errMsg;
              wx.showToast({
                title: toastText,
                icon:'',
                duration:2000
              });
          }
          else
          {
            that.setData({
              list: Commentlists,
              comment_count: Commentlists.length,
              // talksAnimationData: that.animation.export()
            })
          }
        },
        fail: function(res) {},
        complete: function(res) {},
      })
    wx.hideNavigationBarLoading();
  },

  // onScrollLoad: function () {    // 加载新的数据
  //   this.loadTalks();
  // },


/**
 * 评论函数
 */
  func_send: function (event) {
    var that = this;
    var dateUtil = require('../../utils/dateUtils.js');
    var date = dateUtil.getToday();
    var comments = this.data.message;
    var sourceId = app.globalData.openid;
    var image = app.globalData.userInfo.avatarUrl;
    var nickName = app.globalData.userInfo.nickName;
    var teacherId = this.data.detailInfo.tId;
   wx:wx.request({
     url: app.globalData.urlPath +"/superadmin/addComment",
     data: {
       "sourceId": sourceId, "uPhoto": image, "uComments": comments, "uNickName": nickName, "uInsertTime": date, "tId": teacherId},
     method: 'POST',
     dataType: 'json',
     responseType: 'text',
     success: function(res) {
      var toastext = res.data.success;
       wx.showToast({
         title: '评论成功',
         icon: 'succes',
         duration: 1000,
       })
       that.loadTalks();
     },

     fail: function(res) {},
     complete: function(res) {},
   })

    // console.log("输入的内容：" + this.data.message)
    this.setData({
      textInputing:true,
      message: "",
    })
  },


/**
 *
 *该函数用于监测用户是否有输入文字，如果有的一旦有文字输入，
 则将发布按钮颜色变为蓝色，并且将文字内容记录到message变量中
 * 
 */
  userInput: function (event) {
    var flag = false;
    if(event.detail.value.length>0)
    {
      flag = false;
    }
    else
    {
      flag = true;
    }

    this.setData({
      textInputing: flag,
      message: event.detail.value
  })
  },



/**
 * 删除评论函数，根据用户的Id来删除(这样会有一个BUG：当你评论多次的时候，你会把所有的评论全部都删除)
 * 更新：根据用户的ID以及每条评论的评论时间组合起来达到唯一定位一条评论的效果
 */
  fc_deleteComment:function(event){
  var that = this;
    console.log(event.target.dataset.sourceid);
    console.log(event.target.dataset.index)
    console.log(event.target.dataset.time);
    var targetId = event.target.dataset.sourceid;
    var selfId = app.globalData.openid;
    if (selfId == targetId)
    {
      wx.showModal({
        title: '提示',
        content: '确认删除该条评论么？',
        success: function (sm) {
          if (sm.confirm) {
            wx: wx.request({
              url: app.globalData.urlPath + "/superadmin/removecomment",
              data: {
                "sourceId": event.target.dataset.sourceid,
                "uInsertTime": event.target.dataset.time
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
                  that.data.list.splice(event.target.dataset.index, 1);
                  that.setData({
                    list: that.data.list
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
    }
    else
    {
      wx.showToast({
        title: '别想删除别人的啊',
        icon:'none'
      })
    }
   
  },

/**
 * 收藏该老师的信息到我的界面中展示
 */
collect:function(e){



}



})