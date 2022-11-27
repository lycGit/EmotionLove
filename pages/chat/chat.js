// pages/chat/chat.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentPage: 1,
    pageSize: 20,
    categroy: '',
    all_chats: []
  },

  loadChatData: function(category){
     var that = this;
      wx.request({
         url: "https://www.qgsq.space/speakskill/chatdetail",
         data: {
          'categary': category,
          'pageNO': that.data.currentPage.toString(),
          'pageSize': that.data.pageSize.toString(),
           },
         method: 'POST',
         header: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
         success: function(res){
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
            all_chats : that.data.all_chats.concat(topicArr) 
           });
      
         },
         fail: function(){xe
           console.log(xe);
         }
   
       })
  },


  searchChatData: function(word){
    var that = this;
     wx.request({
        url: "https://www.qgsq.space/speakskill/seachchatdetail",
        data: {
         'word': word,
         'pageNO': that.data.currentPage.toString(),
         'pageSize': that.data.pageSize.toString(),
          },
        method: 'POST',
        header: {
         "Content-Type": "application/x-www-form-urlencoded"
       },
        success: function(res){
          var topicArr = []
          for (const index in res.data) {
             var jsonStr = res.data[index];
             jsonStr = jsonStr.replace(" ","");
             if(typeof jsonStr!= 'object'){
               jsonStr= jsonStr.replace(/\ufeff/g,"");//重点
               var jsonObj = JSON.parse(jsonStr);
               topicArr.push(jsonObj);
             }
          }
          console.log(topicArr); 
          
          that.setData({
           all_chats : that.data.all_chats.concat(topicArr) 
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
    if(Object.keys(options.categroy).length >0) {
      console.log(options.categroy)
      this.data.categary = options.categroy
      this.loadChatData(options.categroy)
    }else if(Object.keys(options.word).length >0) {
      console.log(options.word)
      this.searchChatData(options.word)
    }

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

    // 页码+1
    this.data.currentPage++;
    // 调用事件函数
    this.loadChatData(this.data.categary);
 
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})