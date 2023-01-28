// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    this.validVersion()
  },
  globalData: {
    userInfo: null,
    freeVersion: ""
  },

  validVersion: function(){
    var that = this;
    wx.request({
       url: "https://www.qgsq.space/my/validversion",
       data: {'version': '2'},
       method: 'GET',
       header: {'Content-Type': 'application/json'},
       success: function(res){
           console.log(res.data); 
           that.freeVersion = res.data

       },
       fail: function(){xe
         console.log(xe);
       }
 
     })
  },

  currentVersion: function(){
    return "1.0.4"
  },

  needBuyVIP: function(){
    // wx.setStorageSync("xinyuanhaspay", "0");
   var flag = wx.getStorageSync("xinyuanhaspay")
   if (flag == "1" ) {
    return false
   }else{
    if (this.freeVersion != this.currentVersion()) {
      wx.navigateTo({
        url: '/pages/buy/buy',
        success: (result)=>{
          
        },
        fail: ()=>{},
        complete: ()=>{}
      });
      return true
    }else{
      return false 
    }

   }

  }



})
