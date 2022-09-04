// pages/home/home.js
Page({
   showChatView: function() {
      wx.navigateTo({
        url: '/pages/chat/chat',
        success: (result)=>{
          
        },
        fail: ()=>{},
        complete: ()=>{}
      });
    },
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
       all_search_topics: [
         '要照片','拒绝好人卡','寻找话题','哄女生','表情话术','土味情话','异地恋'
       ],

      all_topics: [
        {
           title: '最受欢迎',
           topics:['要照片','拒绝好人卡','寻找话题','哄女生','表情话术','土味情话','异地恋']
        },
        {
          title: '最受欢迎',
          topics:['要照片','拒绝好人卡','寻找话题','哄女生','表情话术','土味情话']
       },
       {
          title: '最受欢迎',
          topics:['要照片','拒绝好人卡','寻找话题','哄女生','表情话术','土味情话','异地恋','土味情话']
       },
       {
          title: '最受欢迎',
          topics:['要照片','拒绝好人卡','寻找话题','哄女生','表情话术','土味情话','异地恋']
       },
       {
          title: '最受欢迎',
          topics:['要照片','拒绝好人卡','寻找话题','哄女生','表情话术','土味情话','异地恋']
       }
      ],
      all_cases: [
         {
            image_url: '',
            title: '小哥哥这么会****',
            detail_url:''
         },
         {
            image_url: '',
            title: '小哥哥这么会****',
            detail_url:''
         },
         {
            image_url: '',
            title: '小哥哥这么会****',
            detail_url:''
         },
         {
            image_url: '',
            title: '小哥哥这么会****',
            detail_url:''
         },
         {
            image_url: '',
            title: '小哥哥这么会****',
            detail_url:''
         }
      ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     var reqTask = wx.request({
        url: 'http://106.14.121.13/idlist',
        data: {},
        header: {'content-type':'application/json'},
        method: 'GET',
        dataType: 'json',
        responseType: 'text',
        success: (result)=>{
          print(result)
        },
        fail: ()=>{},
        complete: ()=>{}
      });
  },

  refresh: function (evt) {
   var reqTask = wx.request({
      url: 'http://106.14.121.13/idlist',
      data: {},
      header: {'content-type':'application/json'},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (result)=>{
        console.log(result.data)
      },
      fail: ()=>{},
      complete: ()=>{}
    });
}

})