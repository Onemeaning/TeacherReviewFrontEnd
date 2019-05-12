//index.js
//获取应用实例
const app = getApp()

Page({
  data:{
    message1: '"导师评价系统"使用帮助',

    message2:'"导师评价系统"是我们团队研发的一款为本校及外校学生选择导师提供帮助的一款小程序，可为大家提供导师资料，学生评价等信息。',

    message2_1:'授权登陆',
    message2_2:'点击 主界面->授权登陆,即可进入程序,您可以选择学生身份或者导师身份登录，如果选择导师的身份，我们需要对您进行人脸识别来认证您的真实身份',

    message3_1:'第一步 进入院校选择界面',
    message3_2:'在热门导师推荐页面，您可以点击右上角的《学校》按钮来选择具体的专业，我们为您列出了这个专业的所有的老师的热度排名，您可以用左滑的形式，查看所有的导师简介，点击页面则会进入老师页面查看详细信息，您也可以在搜索栏中搜索专业信息，例如搜索《计算机科学与技术》系统会将全国数据库中所有计算机科学与技术专业的导师信息按照热度排序列出，你也可以按照左滑的形式依次查看。',

    message4_1:'第二步 点击进入导师专业详细信息界面',
    message4_2: '在这个页面可以查看导师的详细资料，点击下方的点赞按钮，您可以给心仪的老师助力，让他被更多的学生发现，您也可以点击下方评论按钮，给您喜欢的老师点评一下！',

    message5_1:'第三步 查看导师详细资料和学生评价',
    message5_2:'在这个页面可以查看导师的详细资料和学生评价，你也可以在这里发表你对导师评价,在下方的输入框中输入您的评论信息！',

    message6_1: '第四步 给心仪的老师发私信',
    message6_2: '在这个页面你可以给老师发私信，您可以详细的介绍自己，让导师可以更好的了解你，当然你也可以添加照片形式的简历，让老师全面的了解你，这也会增加你被老师选中的机会，祝你好运！',

    message7_1: '第五步 查看老师回复的私信',
    message7_2: '在这里，您可以看到老师给您的回复，同样您也可以继续回复他，愉快的交流可以让导师最终选择您的几率增大。',

    naviPhoto:[],

  },

   /* 生命周期函数--监听页面加载*/

  onLoad: function (options) {
    wx.showLoading({
      title: '正在加载，请稍后',
    })
    this.getStaticPhotoOfHelp();
  },

  /**
     * 获取静态图像的地址
     */
  getStaticPhotoOfHelp: function () {
    var that = this;
    wx: wx.request({
      url: app.globalData.urlPath + "/superadmin/getStaticPhotoOfHelp",
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function (res) {
        var searchResult = res.data.photosHelp;
        that.setData({
          naviPhoto: searchResult,
        })
        wx.hideLoading();
      },

    })
  },

})
