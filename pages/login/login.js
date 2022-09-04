// pages/login/login.js
Page({
  // login: function() {
  //   wx.navigateTo({
  //     url: '/pages/buy/buy',
  //     success: (result)=>{
        
  //     },
  //     fail: ()=>{},
  //     complete: ()=>{}
  //   });
  // },

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

  data: {
    items:[
      {
        icon: 'tianxiejihuoma.png',
        title: '激活码解锁',
        discribe: '微信号码：123455'
      },
      {
        icon: 'aichat.png',
        title: '投诉建议',
        discribe: '微信号码：123455'
      },
      {
        icon: 'lianxikefu.png',
        title: '联系客服',
        discribe: '微信号码：123455'
      }
    ]
  },
 
})