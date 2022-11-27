// pages/home/home.js
Page({
   showChatView: function(e) {
      // console.log(e.currentTarget.dataset.category)
      let categroy = e.currentTarget.dataset.category;
      wx.navigateTo({
        url: '/pages/chat/chat?categroy=' + categroy,
        success: (result)=>{
          
        },
        fail: ()=>{},
        complete: ()=>{}
      });
    },

    searchChatView: function() {
      console.log(this.data.inputValue)
      wx.navigateTo({
        url: '/pages/chat/chat?word=' + this.data.inputValue,
        success: (result)=>{
          
        },
        fail: ()=>{},
        complete: ()=>{}
      });
    },

    bindKeyInput:function(e){
      this.setData({
         inputValue:e.detail.value
      })
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
    loadChatSkill: function(){
      var that = this;
      wx.request({
         url: "https://www.qgsq.space/speakskill/talkskill",
         data: {},
         method: 'GET',
         header: {'Content-Type': 'application/json'},
         success: function(res){
            //  console.log(res); 
           var topicArr = []
           for (const index in res.data) {
              let item = res.data[index];
              let title = item.title;
              let topics = item.childs;
              let itemDic = {'title': title, 'topics': topics}; 
            
            topicArr.push(itemDic);
           }
         //   console.log(topicArr)
           
           that.setData({
            all_topics : topicArr
           });
      
         },
         fail: function(){xe
           console.log(xe);
         }
   
       })
    },
  /**
   * 页面的初始数据
   */
  data: {
       inputValue: '',
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
      this.loadChatSkill();
  },



})