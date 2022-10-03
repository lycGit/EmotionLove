// pages/skill/skill.js
Page({
  showWebView: function(e) {
    let artid = e.currentTarget.dataset.entity.artid;
    console.log(artid)
    wx.navigateTo({
      url: '/pages/webview/webview?artid=' + artid,
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
    currentPage: 1,
    pageSize: 20,
    all_skill_cases: [
      // {
      //   title: "怎么和女生聊天才能让她们觉得不烦？怎么和女生聊天才能让她们觉得不烦？",
      //   images:[

      //   ],
      //   date: "2021-09-23",
      //   like: "9087"
      // }
    ]
  },

  loadLoveSkillData: function(){
    var that = this;
     wx.request({
        url: "https://www.qgsq.space/loveskill/loveskill",
        data: {
         'pageNO': that.data.currentPage.toString(),
         'pageSize': that.data.pageSize.toString(),
          },
        method: 'POST',
        header: {
         "Content-Type": "application/x-www-form-urlencoded"
       },
        success: function(res){
          console.log(res.data); 
          that.setData({
            all_skill_cases : that.data.all_skill_cases.concat(res.data) 
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
    this.loadLoveSkillData()
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
    // 页码+1
    this.data.currentPage++;
    // 调用事件函数
    this.loadLoveSkillData();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})