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
  },
  globalData: {
    userInfo: null
  },


  needBuyVIP: function(){
   var flag = wx.getStorageSync("xinyuanhaspay")
   if (flag == "1") {
    return false
   }else{
    wx.navigateTo({
      url: '/pages/buy/buy',
      success: (result)=>{
        
      },
      fail: ()=>{},
      complete: ()=>{}
    });
    return true
   }

  }

})
