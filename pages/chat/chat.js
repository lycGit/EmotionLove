// pages/chat/chat.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    all_chats: []
  },

  loadChatData: function(category){
     var that = this;
      wx.request({
         url: "https://www.qgsq.space/speakskill/chatdetail",
         data: {'categary': category},
         method: 'POST',
         header: {
          // 'Content-Type': 'application/json'
          "Content-Type": "application/x-www-form-urlencoded"
        },
         success: function(res){
          console.log('loadChatData'); 
          //  console.log(res); 
           var topicArr = []
           for (const index in res.data) {
              var jsonStr = res.data[index];
              jsonStr = jsonStr.replace(" ","");
              if(typeof jsonStr!= 'object'){
                jsonStr= jsonStr.replace(/\ufeff/g,"");//重点
                var jsonObj = JSON.parse(jsonStr);
                // jsonObj.sex = parseInt(jsonObj.sex)
                topicArr.push(jsonObj);
              }
           }
           console.log(topicArr); 
           
           that.setData({
            all_chats : topicArr
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
    console.log(options.categroy)
    this.loadChatData(options.categroy)
    // this.setData({
    //   categroy : options.categroy

    // })
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
    console.log('chat on show'); 
    // console.log(categroy); 
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