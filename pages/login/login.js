// pages/login/login.js
Page({
  paymoney: function() {
    wx.navigateTo({
      url: '/pages/buy/buy',
      success: (result)=>{
        
      },
      fail: ()=>{},
      complete: ()=>{}
    });
  },
  clickprivacy: function() {
    wx.navigateTo({
      url: '/pages/webview/webview?artid=' + 'a001',
      success: (result)=>{
        
      },
      fail: ()=>{},
      complete: ()=>{}
    });
  },

  login: function() {
    wx.login({
      //成功放回
      success:(res)=>{
        console.log(res);
        let code=res.code

        wx.request({
          url: "https://www.qgsq.space/getopenid",
          data: {'code': code},
          method: 'GET',
          header: {'Content-Type': 'application/json'},
          success: function(res){
            console.log('login success');
            console.log(res);
            // openid = res.data['openid']
            console.log(res.data['openid']);

            wx.request({
              url: "https://www.qgsq.space/pay/create",
              data: {'openid': res.data['openid'],'REMOTE_ADDR': '127.0.0.1'},
              method: 'GET',
              header: {'Content-Type': 'application/json'},
              success: function(res){
                console.log('start pay success');
                console.log(res);
                
                  wx.requestPayment(
                    {
                    "timeStamp":res.data.data.timeStamp,
                    "nonceStr": res.data.data.nonceStr,
                    "package": res.data.data.package,
                    "signType": res.data.data.signType,
                    "paySign": res.data.data.paySign,
                    "success":function(res){},
                    "fail":function(res){},
                    "complete":function(res){}
                    })
                    
                
              },
              fail: function(){xe
                console.log(xe);
              }

            })


          },
          fail: function(){xe
            console.log(xe);
          }
        })

      }
    })
  },


  clickAction: function(evt){
    const idx = evt.currentTarget.dataset.index;
    console.log(idx)

    // wx.request({
    //   url: "https://www.qgsq.space/pay/create",
    //   data: {'openid': code},
    //   method: 'POST',
    //   header: {'Content-Type': 'application/json'},
    //   success: function(res){
    //     console.log('login success');
    //     console.log(res);
    //     // openid = res.data['openid']
    //     console.log(res.data['openid']);

    //     wx.request({
    //       url: "https://www.qgsq.space/pay/create",
    //       data: {openid: res.data['openid']},
    //       method: 'GET',
    //       header: {'Content-Type': 'application/json'},
    //       success: function(res){
    //         console.log('start pay success');
    //         console.log(res);
    //       },
    //       fail: function(){xe
    //         console.log(xe);
    //       }

    //     })


    //   },
    //   fail: function(){xe
    //     console.log(xe);
    //   }
    // })

  },

  loadProfileList: function(){
    var hideState = false
    if (getApp().freeVersion == getApp().currentVersion()) {
      hideState = true
    }
    var that = this;
     wx.request({
        url: "https://www.qgsq.space/my/profilelist",
        data: {},
        method: 'GET',
        header: {'Content-Type': 'application/json'},
        success: function(res){
          console.log(res.data); 
          that.setData({
            items : res.data,
            isHidden: hideState
          });
     
        },
        fail: function(){xe
          console.log(xe);
        }
  
      })
  },

  data: {
    isHidden:false,
    buytitle:'购买激活码',
    items:[
      // {
      //   icon: 'tianxiejihuoma.png',
      //   title: '激活码解锁',
      //   discribe: '微信号码：123455'
      // },
      // {
      //   icon: 'aichat.png',
      //   title: '投诉建议',
      //   discribe: '微信号码：123455'
      // },
      // {
      //   icon: 'lianxikefu.png',
      //   title: '联系客服',
      //   discribe: '微信号码：123455'
      // }
    ]
  },

  onLoad: function (options) {
    this.loadProfileList()

  },
  onShow: function () {
    var flag = wx.getStorageSync("xinyuanhaspay")
    if (flag == "1") {
      this.setData({
        buytitle:'已激活',
      });
    }
  },
   /**
   * 用户点击右上角分享
   */
    onShareAppMessage: function () {
      return {
        title: '购买激活码',
        path: 'pages/login/login',
        imageUrl: '/pages/assets/imgs/tuodanshenqi.png'//自定义图片路径，可以是本地文件路径、代码包文件路径或者网络图片路径。支持PNG及JPG。显示图片长宽比是 5:4。
      }
  
    }
 
})