const app = getApp();

Page({
  data: {
    address: "点击选择，要勾选哦~",
  },

  staticData: {
    type: "student",

    uNickname:"",
    uSchool:"",
    uCollege:"",
    uDepartment:"",
    uStudentId:"",
    uTeacherName:"",
  },
 



  handleAddressClick() {
    wx.chooseLocation({
      success: this.handleChooseLocationSucc.bind(this)
    })
  },

  handleChooseLocationSucc(res) {
    console.log(res);
    this.setData({
      address: res.address
    });

  },

  handleTypeChange(e) {
    this.staticData.type = e.detail.value;
  },

  handleNameChange(e) {
    this.staticData.uNickname = e.detail.value;
  },


  handleSchoolChange(e) {
    this.staticData.uSchool = e.detail.value;
  },

  handleCollegeChange(e) {
    this.staticData.uCollege = e.detail.value;
  },

  handleDepartmentChange(e) {
    this.staticData.uDepartment = e.detail.value;
  },

  handleStudentIdChange(e) {
    this.staticData.uStudentId = e.detail.value;
  },
  
  handleTutorChange(e) {
    this.staticData.uTeacherName = e.detail.value;
  },

  handleSubmit() {
    var that = this;
    wx.showLoading({
      title: '正在更新',
    });
    // if (this.data.address === "点击选择，要勾选哦~" || !this.data.address) {
    //   wx.showToast({
    //     title: '请填写地址',
    //     icon: 'loading',
    //     duration: 2000
    //   })
    //   return;
    // }
    if (!this.staticData.uNickname) {
      wx.showToast({
        title: '请填写姓名',
        icon: 'loading',
        duration: 2000
      })
      return;
    }
    if (!this.staticData.uCollege) {
      wx.showToast({
        title: '请填写学校',
        icon: 'loading',
        duration: 2000
      })
      return;
    }
    wx.request({
      url: app.globalData.urlPath + "/superadmin/modifyUserInfo",//自己的服务接口地址
      method: "POST",
      data: {
        "uWxid": app.globalData.openid,
        "uNickname": that.staticData.uNickname,
        "uSchool": that.staticData.uSchool,
        "uCollege": that.staticData.uCollege,
        "uDepartment": that.staticData.uDepartment,
        "uStudentId": that.staticData.uStudentId,
        "uTeacherName": that.staticData.uTeacherName,
      },
      
      success: function (res) {
        wx.hideLoading();
        wx.navigateBack({  
        })

      },
    })
  },

})
