// pages/introduction.js
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data:{
      detailInfo: null, //老师信息    
      access_count: 0,//页面的访问次数
      user_support_count: 0,//给用户评论的点赞数
      comment_count: 0,//评论的数量
      thumbs_counts:0,//用于统计点赞的数量的

      /* 这下面的变量是关于评论相关的 */
      list: [],//定义一个list，用于存储评论数据
      showView: true,//控制是否显示groupButton
      textInputing: true,//控制发布两个字的颜色
      message: "",//用于存储评论框中输入的数据
      doesPush:false,//有没有点赞？默认没有
      imageLocate:"",//给老师表达爱心的数目
      imageCommnet:"",//给老师的评论icon
      userImageLocate:"",//给用户评论的点赞图标

      /**下面是处理每一条评论对应的点赞数的 */
      everycommentCountsMap : {},//每一条评论的点赞数目
      areYouSupportedEveryComments:{},//存储着每一条评论你是否点赞了的数据

      system:true,//表示是IOS系统
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '正在加载，请稍后',
    })
    // console.log(app.globalData.systemInfo)
    // console.log(app.globalData.systemInfo.indexOf("Android")) ;
    if(app.globalData.systemInfo.indexOf("Android")>=0)
    {
        this.setData({
          system:false
        })
    }   
    this.queryInfo(app.globalData.teacherId); 
    this.isPushedThumbs();  //初始化是否点赞了，如果已经点赞将点赞图标设置为点赞后的，将doesPush设置为true， 
    this.getThumbsCounts();//获取点赞的数量 
    this.loadTalks();    // 设置动画内容为：使用绝对定位显示区域，高度变为100%  
    this.setEveryCommentsSupportCounts(); //获取每条评论的点赞数目
    this.areYouSupportEveryComments();//获取你是否为每条评论点赞了
    this.setData({
      userImageLocate: "../../image/icon/icon_support_before.png"

    });
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
    onReady: function () { 
   // 评论弹出层动画创建
      this.animation = wx.createAnimation({
      duration: 700, // 整个动画过程花费的时间，单位为毫秒
      timingFunction: "ease", // 动画的类型
      delay: 0 // 动画延迟参数
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
     this.queryInfo(app.globalData.teacherId);
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
    this.updateAccessCounts();
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
 * 点击点赞按钮，数字加一，并且不能再点击了
 */
  func_support: function(event){   

    if (!this.data.doesPush)//如果还没有按下点赞键，开始点赞，并且往数据库更新数据
    {
      this.addAThumbs();
  
    }else//否则说明你已经点赞了，这时候回退点赞头像，将点赞数减一
    {
      this.deleteAThumbs();
    }   
  },

/**
 * 向数据库中更新页面访问数量
 */
updateAccessCounts:function()
{
  var that = this;
  var counts = this.data.detailInfo.tThumpUpCounts;
  counts = counts+1;
  
  wx: wx.request({
    url: app.globalData.urlPath + "/superadmin/updateSupportCounts",
    data: { tId: app.globalData.teacherId ,
             tThumpUpCounts: counts
           },
    method: 'POST',
    dataType: 'json',
    responseType: 'text',
  })
  
},

/**
 * 点击按钮出现输入对话框，使得用户可以输入评论语句
 */
  showTalks: function () {
    // 加载数据
    this.loadTalks();    // 设置动画内容为：使用绝对定位显示区域，高度变为100%
    this.animation.bottom("0rpx").height("100%").step()
    this.setData({
      showView: (!this.data.showView),//控制评论按钮图标消失，用于显示评论的界面
      talksAnimationData: this.animation.export()
    })
  },





  hideTalks: function () {
    // 设置动画内容为：使用绝对定位隐藏整个区域，高度变为0
    this.loadTalks();
    this.animation.bottom("-100%").height("0rpx").step()
    this.setData({
      showView: (!this.data.showView),//控制评论按钮图标显示
      list:null,
      talksAnimationData: this.animation.export()
    })
  },


  // 加载数据
  loadTalks: function () {   
    var that = this;
    wx.showNavigationBarLoading();
      wx:wx.request({
        url: app.globalData.urlPath+"/superadmin/showComments",
        data: { tId: app.globalData.teacherId},
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
            if(Commentlists.length==0)
            {
              that.setData({
                imageCommnet: "../../image/icon/icon_comment_before.png",
              })
            }

          else
          {
              that.setData({
                imageCommnet: "../../image/icon/icon_comment_after.png",
              })
          }
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
    // console.log(event.target.dataset.sourceid);
    // console.log(event.target.dataset.index)
    // console.log(event.target.dataset.time);
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
 * 按照老师的ID查询信息，目的是为了更新访问页面的次数
 * 
 */
  queryInfo: function (teacherId) {
    var that = this;
    wx: wx.request({
      url: app.globalData.urlPath + "/superadmin/findByTeacherId",
      data: {
        tId: teacherId,
      },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function (res) {
        var t_data = res.data.success;
        if (t_data != null) {
          that.setData({
            detailInfo: t_data,
            access_count: t_data.tThumpUpCounts,
          })
          wx.setNavigationBarTitle({
            title: t_data.tName,
          })

          wx.hideLoading();
        }
      },
    })
  },

/**
 * 判断是否点赞了
 */
  isPushedThumbs:function(){
    var that = this;
    wx: wx.request({
      url: app.globalData.urlPath + "/superadmin/isThumbsUp",
      data: {
        sourceId: app.globalData.openid,
        destId: app.globalData.teacherId
      },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function (res) {
        var thumbsCounts = res.data.success;
        if (thumbsCounts == null) {//未查出数据，说明没有点赞。将变量doesPushed赋值为false
          that.setData({
            doesPush:false,
            imageLocate: "../../image/icon/icon_love_before.png",
          })        
        }
        else
        {
          that.setData({
            doesPush: true,
            imageLocate: "../../image/icon/icon_love_after.png",
          })     
        }

      },
    })
  },

/**
 * 点赞的数量是多少：
 */
  getThumbsCounts: function () {
    var that = this;
    wx: wx.request({
      url: app.globalData.urlPath + "/superadmin/findRecordsCounts",
      data: {
        sourceId: app.globalData.openid,
        destId: app.globalData.teacherId
      },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function (res) { 
      that.setData({
        thumbs_counts: res.data.success
      })  
    },
    })
  },

/**
 * 插入一条点赞记录
 */
  addAThumbs: function () {
    var that = this;
    var times = new Date().getTime();
    wx: wx.request({
      url: app.globalData.urlPath + "/superadmin/insertCounts",
      data: {
        sourceId: app.globalData.openid,
        destId: app.globalData.teacherId,
        thumpsUpTime:times
      },
      method: 'POST',
      dataType: 'json',
      responseType: 'text',
      success: function (res) {
        that.setData({
          imageLocate: "../../image/icon/icon_love_after.png",
          doesPush: true,
          thumbs_counts: that.data.thumbs_counts +1,
        })
      },
    })
  },

/**
 * 删除点赞记录
 */
  deleteAThumbs: function () {
    var that = this;  
    wx: wx.request({
      url: app.globalData.urlPath + "/superadmin/deleteThumbsUpCounts",
      data: {
        sourceId: app.globalData.openid,
        destId: app.globalData.teacherId,
      },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function (res) {
        that.setData({
          imageLocate: "../../image/icon/icon_love_before.png",
          doesPush: false,
          thumbs_counts: that.data.thumbs_counts-1,
        })
      },
    })
  },

/**
 * 遍历每一个同学评论对应的点赞数目
 */
setEveryCommentsSupportCounts:function()
{
  var that = this;
  wx: wx.request({
    url: app.globalData.urlPath + "/superadmin/getCommentIdWithCounts",
    data: {
      teacherUniqueId: app.globalData.teacherId,
    },
    method: 'GET',
    dataType: 'json',
    responseType: 'text',
    success: function (res) {
      that.setData({
        everycommentCountsMap:res.data.success
      })
      // console.log(res.data.success)
    },
  })
},


/**
 * 获取每条记录是否点赞了
 */
areYouSupportEveryComments:function()
{
  var that = this;
  wx: wx.request({
    url: app.globalData.urlPath + "/superadmin/isYourCommentSupported",
    data: {
      sourceId: app.globalData.openid,
      teacherUniqueId: app.globalData.teacherId
    },
    method: 'GET',
    dataType: 'json',
    responseType: 'text',
    success: function (res) {
      var mapData = res.data.success;
      if(mapData!=null)
      {
        // console.log(mapData);
        that.setData({
          areYouSupportedEveryComments: res.data.success
        })
      }
     
    },
  })
},

  fuc_giveCommentSupport:function(event){
    var that = this;
    var commentId = event.currentTarget.dataset.sourceid + event.currentTarget.dataset.time;
    var destId = event.currentTarget.dataset.sourceid;
    wx.vibrateShort();
    if(that.data.areYouSupportedEveryComments[commentId]==null)
    {
      that.giveCommentSupport(commentId, destId);
    }
    else{
      that.removeCommnetSupport(commentId);    
    }
  },
  /**
   * 为某条评论点赞
   */
  giveCommentSupport: function (commentId, destId) {
    var that = this;
    wx.vibrateShort();
    var times = new Date().getTime();
    wx: wx.request({
      url: app.globalData.urlPath + "/superadmin/insertCommentSupportCounts",
      data: {
        teacherUniqueId: app.globalData.teacherId,
        commentId: commentId,
        sourceId: app.globalData.openid,
        destId: destId,
        thumpsUpTime: times
      },
      method: 'POST',
      dataType: 'json',
      responseType: 'text',
      success: function (res) {
        if (res.data.success) {
          that.setEveryCommentsSupportCounts();
          that.areYouSupportEveryComments();
        }

      },
    })
  },


/**
 * 取消对某条评论的点赞
 */
  removeCommnetSupport: function (commentId)
{
  var that = this;
  wx: wx.request({
    url: app.globalData.urlPath + "/superadmin/deleteCommentSupportCounts",
    data: {
      sourceId: app.globalData.openid,
      commentId: commentId,
    },
    method: 'GET',
    dataType: 'json',
    responseType: 'text',
    success: function (res) {
      if (res.data.success) {
        that.setEveryCommentsSupportCounts();
        that.areYouSupportEveryComments();
        
      }
    },
  })

},


/**
 * 写邮件
 */
  sendEmail: function (e) {
    //这一步是为了把模板语言转化成js语言
    var that = this;
    var fromNickName = app.globalData.userInfo.nickName;
    var toNickName = that.data.detailInfo.tName;
    var toId = app.globalData.teacherId;
    wx.navigateTo({
      url: '../../pages/writeEmail/writeEmail?fromNickName=' + fromNickName + "&toNickName=" + toNickName + "&toId=" + toId
    });
  },
})