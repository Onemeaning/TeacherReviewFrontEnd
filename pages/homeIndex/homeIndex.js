var model = require('../../model/model.js')
const app = getApp();
var show = false;
var item = {};
Page({

    data:{
      province: "",//学校
      city: "",//学院
      county: "",//系专业

      showScrollView: true,
      item: {
        show: show
      }
    },

  /**
   * 通过学校按钮查询系中所有老师列表
   */
  searchByAffilication: function (affication) {
    wx.showNavigationBarLoading();
    wx: wx.request({
      url: app.globalData.urlPath + "/superadmin/findByAffiliation",
      data: {
        tAffiliation: affication
      },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function (res) {
        var searchResult = res.data.teachers;
        if (searchResult != null && searchResult.length > 0) {
          app.globalData.findedTeachers = searchResult;//将查询到数据放置到全局变量中
          wx.navigateTo({
            url: "../../pages/teachers/teachers",
          })
        }
        else {
          wx.showToast({
            title: '该系暂未录入系统',
            icon: 'loding',
            duration: 2000,
          })
        }

      },
      fail: function (res) { },
      complete: function (res) { },

    })
    wx.hideNavigationBarLoading();
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
    console.log("id = " + e.target.dataset.id)
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

      this.searchByAffilication(affication);
      // this.func_lisTopFive(affication);
      this.setData({
        searchContent: ''
      })
    }
    else {
      this.setData({
        searchContent: ''
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
   * ***************帮助和意见反馈****************************
   */
  func_help: function () {
    wx.navigateTo({
      url: "../../pages/help/help",
    })
  },

  func_advice: function () {

    wx.navigateTo({
      url: "../../pages/advice/advice",
    })
  },
})