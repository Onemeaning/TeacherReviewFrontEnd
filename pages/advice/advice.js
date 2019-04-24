//index.js
const app = getApp();
Page({
        data: {
          radios: [
            { name: 'product', value: '加载迟缓', checked: 'true' },
            { name: 'bug', value: '程序异常' },
            { name: 'tease', value: '界面问题' },
            { name: 'opinion', value: '其它问题' }
          ],

          adviceType: "加载迟缓",//建议类型
          content: "",//建议内容
          source: [],//存储上传照片的地址的
        },
      
  //事件处理函数
  onLoad: function () {

  },

  /**
   * 意见反馈选择改变
   */
  radioChange: function (e) {
    var that = this;
    var _index = e.target.dataset.index;
    var value = that.data.radios[_index].value
    that.setData({
      adviceType:value,
    })
  },

  /**
 * 选择图片
 */
  uploadimg: function () {
    var that = this;
    wx.chooseImage({ //从本地相册选择图片或使用相机拍照
      count: 3, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        that.setData({
          source: res.tempFilePaths
        })
      }
    })
  },

  getValue:function(e){
    this.setData({
      content : e.detail.value,
    })
  },


  /**
   * 上传照片
   */
  uploadImg: function (data) { 
    var that = this;
    var i = data.i ? data.i : 0;
    var userId = app.globalData.openid;
    var dateUtil = require('../../utils/dateUtils.js');
    var date = dateUtil.getToday();
    console.log(that.data.content);
    if (that.data.source != null && that.data.source.length>0)
    {
      wx.showLoading({
        title: '正在上传！',
      })
        wx.uploadFile({
          url: app.globalData.urlPath + "/superadmin/advice",//自己的服务接口地址
          filePath: that.data.source[i],
          name: 'advicePhoto',
          formData: {
            'userId': userId,
            'adviceTime':date,
            'adviceType':that.data.adviceType,
            'adviceContent': that.data.content,
          },
          success: function (res) {
            var data = res.data
            if(data=="error")
            {
              wx.showToast({
                title: '未知错误',
                icon:"none",
                duration: 1000,
              })
            }
            
          },
          complete: function (complete) {
          i++;
          data.i = i;
          if (i < that.data.source.length) {//若图片还没有传完，则继续调用函数
            that.uploadImg(data);
            }

            else{
                wx.hideLoading();
                wx.showToast({         
                  title: '提交成功',
                  icon: 'succes',
                  duration: 1000,
                }),     

                  that.setData({
                    source: [],
                    content: "",
                  })
            }
          }
        })
    }

    else
    {
      wx.showModal({
        title: '温馨提示',
        content: '提交之前必先选择图片，否则无法完成提交。【注意】点击取消，返回推荐页面；点击确定，选择上传图片',
        success: function (res) {
          if (res.confirm) {
           that.uploadimg();       
          } else if (res.cancel) {
            wx.navigateBack({
              
            })      
          }
        }
      })
    }
  },

})
