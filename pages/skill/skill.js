// pages/skill/skill.js
Page({
  showWebView: function() {
    wx.navigateTo({
      url: '/pages/webview/webview',
      success: (result)=>{
        
      },
      fail: ()=>{},
      complete: ()=>{}
    });
  },
  /**
   * 页面的初始数据
   */
  data: {
    all_skill_cases: [
      {
        title: "怎么和女生聊天才能让她们觉得不烦？怎么和女生聊天才能让她们觉得不烦？",
        images:[

        ],
        date: "2021-09-23",
        like: "9087"
      },
      {
       title: "怎么和女生聊天才能让她们觉得不烦？怎么和女生聊天才能让她们觉得不烦？",
       images:[

       ],
       date: "2021-09-23",
       like: "9087"
     },
     {
       title: "怎么和女生聊天才能让她们觉得不烦？怎么和女生聊天才能让她们觉得不烦？",
       images:[

       ],
       date: "2021-09-23",
       like: "9087"
     },
     {
       title: "怎么和女生聊天才能让她们觉得不烦？怎么和女生聊天才能让她们觉得不烦？",
       images:[

       ],
       date: "2021-09-23",
       like: "9087"
     },
     {
       title: "怎么和女生聊天才能让她们觉得不烦？怎么和女生聊天才能让她们觉得不烦？",
       images:[

       ],
       date: "2021-09-23",
       like: "9087"
     },
     {
       title: "怎么和女生聊天才能让她们觉得不烦？怎么和女生聊天才能让她们觉得不烦？",
       images:[

       ],
       date: "2021-09-23",
       like: "9087"
     },
     {
       title: "怎么和女生聊天才能让她们觉得不烦？怎么和女生聊天才能让她们觉得不烦？",
       images:[

       ],
       date: "2021-09-23",
       like: "9087"
     }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  }
})