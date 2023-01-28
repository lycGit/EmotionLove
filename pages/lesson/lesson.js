// pages/lesson/lesson.js
Page({
  clicklesson: function(e) {
    if (getApp().needBuyVIP()) {
      return  
    }
  },
  /**
   * 页面的初始数据
   */
  data: {
    all_lesson_cases:[
      {
        image:'',
        title:'本栏目会员方可查看，可加客服微信获取权限',
        contact:'a13068795632',
        count: '43',
        students:'579'
      },
      {
        image:'',
        title:'本栏目会员方可查看，可加客服微信获取权限',
        contact:'a13068795632',
        count: '23',
        students:'876'
      },
      // {
      //   image:'',
      //   title:'因敏感因素暂停板块，可咨询客服获取相关资料',
      //   contact:'a13068795632',
      //   count: '23',
      //   students:'876'
      // },
      // {
      //   image:'',
      //   title:'因敏感因素暂停板块，可咨询客服获取相关资料',
      //   contact:'a13068795632',
      //   count: '23',
      //   students:'876'
      // },
      // {
      //   image:'',
      //   title:'因敏感因素暂停板块，可咨询客服获取相关资料',
      //   contact:'a13068795632',
      //   count: '23',
      //   students:'876'
      // }
    ]
  },

  loadLessonData: function(){
    if (getApp().freeVersion == getApp().currentVersion()) {
      return
    }
    var that = this;
     wx.request({
        url: "https://www.qgsq.space/lesson/lesson",
        method: 'GET',
        success: function(res){
          var topicArr = []
          for (const index in res.data) {
             var item = res.data[index];
             topicArr.push(item);
          }
          console.log(topicArr); 
          
          that.setData({
            all_lesson_cases : topicArr
          });
     
        },
        fail: function(){xe
          console.log(xe);
        }
  
      })
 },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     this.loadLessonData()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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
    return {
      title: '会员免费课程',
      path: 'pages/lesson/lesson',
      imageUrl: '/pages/assets/imgs/tuodanshenqi.png'//自定义图片路径，可以是本地文件路径、代码包文件路径或者网络图片路径。支持PNG及JPG。显示图片长宽比是 5:4。
    }

  }
})