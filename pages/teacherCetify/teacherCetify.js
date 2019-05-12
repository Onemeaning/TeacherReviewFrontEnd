var model = require('../../model/model.js')
var show = false;
var item = {};
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    province: "",//学校
    city: "",//学院
    county: "请选择您的单位",//系专业

    showScrollView: true,
    item: {
      show: show
    },
    source: [],//存储上传照片的地址的

    tAffiliation: "",
    tName: "",
   
  },

  handleNameChange(e) {
   this.setData({
     tName:e.detail.value
   })
  },


  handleSchoolChange(e) {
    this.translate(e);
  },


  //点击选择城市按钮显示picker-view
  translate: function (e) {
    this.setData({
      showScrollView: false
    });
    model.animationEvents(this, 0, true, 400);
  },

  //隐藏picker-view
  hiddenFloatView: function (e) {
    model.animationEvents(this, 200, false, 400);
    this.setData({
      showScrollView: true
    });
    //点击确定按钮更新数据(id=444是背后透明蒙版 id=555是取消按钮)
    if (e.target.dataset.id == 666) {
      this.updateShowData()
      var province = item.provinces[item.value[0]].name;
      var city = item.citys[item.value[1]].name;
      var county = item.countys[item.value[2]].name;
      var affication = province + city + county;
      this.setData({
        tAffiliation: affication
      })
    }

  },
  //滑动事件
  bindChange: function (e) {
    model.updateAreaData(this, 1, e);
    //如果想滑动的时候不实时更新，只点确定的时候更新，注释掉下面这行代码即可。
    this.updateShowData()
  },

  //更新顶部展示的数据
  updateShowData: function (e) {
    item = this.data.item;
    this.setData({
      province: item.provinces[item.value[0]].name,
      city: item.citys[item.value[1]].name,
      county: item.countys[item.value[2]].name
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function (e) {

    var that = this;
    //请求数据
    model.updateAreaData(that, 0, e);
  },

  /**
    * 选择图片
    */
  chooseImg: function () {
    var that = this;
    wx.chooseImage({ //从本地相册选择图片或使用相机拍照
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        that.setData({
          source: res.tempFilePaths
        })
      }
    })
  },

  /**
     * 教师身份认证
     */
  cetifyTeacher: function (data) {
    var that = this;

    var tAffiliation = this.data.tAffiliation;
    var tName = this.data.tName;
    if (that.data.source != null && that.data.source.length > 0&&tAffiliation!=null&&tName!=null) {
      wx.showLoading({
        title: '正在认证',
      })
      wx.uploadFile({
        url: app.globalData.urlPath + "/superadmin/teacherCertification",//自己的服务接口地址
        filePath: that.data.source[0],
        name: 'teahcerPhoto',
        formData: {
          tAffiliation: tAffiliation,
          tName: tName,
          tId: app.globalData.openid,
        },
       success: function (res) {
        wx.hideLoading();

         var data = JSON.parse(res.data); 
         var result = data.success;

        //  console.log(result);
         if(result=="success")
         {
           app.globalData.isTeacher = true;//说明是个导师，那么他在《我的信息》这个界面中将有不同于学生的功能；
           wx.setStorageSync('isTeacher', true);//往数据库中存储信息，说明身份是个老师，便于下次进来之后能够区分

           that.deletetempPic();
            // 不能使用重定向，因为重定向只能在非tab页面之间的跳转
            wx.switchTab({
              url: '/pages/homeIndex/homeIndex'
            })

          }

          else 
          {
            wx.showModal({
              title: '照片不匹配',
              content: result+'是否重新拍照匹配?',
              success: function (sm) {
                if (sm.confirm) {
                  that.chooseImg();
                }
                else{
                  that.deletetempPic();
                  wx.navigateBack({});
                }
              }
            });
          }
        },

      })
    }
  else{
    wx.showModal({
      title: '温馨提示',
      content: '请按照要求填写完整所有信息以及拍照信息，否则无法完成认证；',
    })
  }
  },

  /**
 * 退出时候，删除服务器端从服务器中下载的临时图,cetifyTemp是服务器端的临时文件夹,用于临时存储保教师认证的所用的照片；
 */
  deletetempPic: function () {
    wx: wx.request({
      url: app.globalData.urlPath + "/superadmin/deletetempPic",
      data: {
        "resumeUrl": "cetifyTemp",
      },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function (res) {
      },
    })
  },

})