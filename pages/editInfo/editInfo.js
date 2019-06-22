const app = getApp();

Page({

 data: {
    type: "student",
    //学生的个人信息
    uNickname:"",
    uSchool:"",
    uCollege:"",
    uDepartment:"",
    uStudentId:"",
    uTeacherName:"",

    //老师的个人信息
    tName:"",
    tAffiliation:"",
    tResearchInterest:"",
    tIntroduction:"",
    tPublishedPaper:"",
    tProjects:"",
    tEmail:"",

    isTeacher:false,
    detailInfo:null,//老师的个人信息
    myinfos:null,//学生的个人信息
  },
 
  onLoad: function (options) {
    var isTe = app.globalData.isTeacher;
    var id = app.globalData.openid;
    if(isTe){
      this.setData({
        type: "teacher",
        isTeacher:isTe,
      });
      this.queryInfo(id);  
    }
    else{
      this.getWxUserDetail();
    }
  },


  onShow: function () {

    var isTe = app.globalData.isTeacher;
    this.setData({
      type: "student",
      isTeacher: isTe,
    });

  },


  handleTypeChange(e) {
    var that = this;
    var identity = e.detail.value;
    if(identity=="teacher")
    {
      wx.showModal({
        title: '前往授权',
        content: '您点击了老师身份，我们需要对您的身份进行验证，前往验证？',
        success: function (res) {
          if (res.confirm) {
              wx.navigateTo({
                url: '../../pages/teacherCetify/teacherCetify',
              })
          }
          else if (res.cancel) {
            var isTe = app.globalData.isTeacher;
            that.setData({
              type: "student",
              isTeacher: isTe,
            });
          }
        }
      })
    }
    else{

      wx.showModal({
        title: '温馨提示',
        content: '切换为学生身份，系统将删除您老师身份，您将失去修改【导师信息】权限，是否确认？',
        success: function (res) {
          if (res.confirm) {
            wx.removeStorageSync("isTeacher")
            app.globalData.isTeacher = false;
            wx.switchTab({
              url: '/pages/aboutme/aboutme'
            })
           
          }
          else if (res.cancel) {
            var isTe = app.globalData.isTeacher;
            that.setData({
              type: "teacher",
              isTeacher: isTe,
            });
          }
        }
      })

    }
    
  },


  handleNameChange(e) {
    this.data.uNickname = e.detail.value;
  },

  handleSchoolChange(e) {
    this.data.uSchool = e.detail.value;
  },

  handleCollegeChange(e) {
    this.data.uCollege = e.detail.value;
  },

  handleDepartmentChange(e) {
    this.data.uDepartment = e.detail.value;
  },

  handleStudentIdChange(e) {
    this.data.uStudentId = e.detail.value;
  },
  
  handleTutorChange(e) {
    this.data.uTeacherName = e.detail.value;
  },

//处理老师修改的信息

  handleTeaNameChange(e) {
    this.data.tName = e.detail.value;
  },

  handleAffchange(e) {
    this.data.tAffiliation = e.detail.value;
  },

  handlEmailChange(e) {
    this.data.tEmail = e.detail.value;
  },

  getResearch: function (e) {
    this.setData({
      tResearchInterest: e.detail.value,
    })
  },

  getIntroduce: function (e) {
    this.setData({
      tIntroduction: e.detail.value,
    })
  },

  getPapers: function (e) {
    this.setData({
      tPublishedPaper: e.detail.value,
    })
  },

  getAllProjects: function (e) {
    this.setData({
      tProjects: e.detail.value,
    })
  },



  handleSubmit() {
    var that = this;
    wx.showLoading({
      title: '正在更新',
    });
    
    if(that.data.isTeacher){

      console.log(that.data.tProjects)
      wx.request({
        url: app.globalData.urlPath + "/superadmin/modifyTeacherInfo",//自己的服务接口地址
        method: "POST",
        data: {
          "tId": app.globalData.openid,
          "tName": that.data.tName,
          "tAffiliation": that.data.tAffiliation,
          "tEmail":that.data.tEmail,
          "tResearchInterest": that.data.tResearchInterest,
          "tIntroduction": that.data.tIntroduction,
          "tPublishedPaper": that.data.tPublishedPaper,
          "tProjects": that.data.tProjects,
        },

        success: function (res) {
          wx.hideLoading();
          wx.navigateBack({
          })

        },
      })
    }
    else
    {
      wx.request({
        url: app.globalData.urlPath + "/superadmin/modifyUserInfo",//自己的服务接口地址
        method: "POST",
        data: {
          "uWxid": app.globalData.openid,
          "uNickname": that.data.uNickname,
          "uSchool": that.data.uSchool,
          "uCollege": that.data.uCollege,
          "uDepartment": that.data.uDepartment,
          "uStudentId": that.data.uStudentId,
          "uTeacherName": that.data.uTeacherName,
        },

        success: function (res) {
          wx.hideLoading();
          wx.navigateBack({
          })

        },
      })
    }
  },


 /**
 * 按照老师的ID查询信息
 * 
 */
  queryInfo: function (teacherId) {
    var that = this;
    wx.showLoading({
      title: '正在加载，请稍后',
    })
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
            tName: t_data.tName,
            tEmail: t_data.tEmail,
            tAffiliation: t_data.tAffiliation,
            tResearchInterest: t_data.tResearchInterest,
            tIntroduction: t_data.tIntroduction,
            tPublishedPaper: t_data.tPublishedPaper,
            tProjects: t_data.tProjects,
          })
          wx.hideLoading();
        }
      },
    })
  },

  /**
   * 获取个人详细信息：
   */
  getWxUserDetail: function () {
    var that = this;
    var id = app.globalData.openid;
    wx: wx.request({
      url: app.globalData.urlPath + "/superadmin/getUserInfo",
      data: {
        uWxid: id,
      },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function (res) {
        that.setData({
          myinfos: res.data.success,
          uNickname: res.data.success.uNickname,
          uSchool: res.data.success.uSchool,
          uCollege: res.data.success.uCollege,
          uDepartment: res.data.success.uDepartment,
          uStudentId: res.data.success.uStudentId,
          uTeacherName: res.data.success.uTeacherName,
        })
      },
    })
  },

})
