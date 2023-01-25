// pages/buy/buy.js
Page({
  buyVIP: function(e) {
    let price = e.currentTarget.dataset.price;
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
            console.log(price)
            wx.request({
              
              url: "https://www.qgsq.space/pay/create",
              data: {'openid': res.data['openid'],'REMOTE_ADDR': '127.0.0.1','price': price},
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
                    "success":function(res){
                      console.log('pay success');
                      wx.setStorageSync("xinyuanhaspay", "1");
                    },
                    "fail":function(res){
                      console.log('pay failed');
                    },
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
  loadPriceData: function(){
    var that = this;
     wx.request({
        url: "https://www.qgsq.space/my/pricelist",
        data: {},
        method: 'GET',
        header: {'Content-Type': 'application/json'},
        success: function(res){
          console.log(res.data); 
          that.setData({
            pricesArray : res.data
          });
     
        },
        fail: function(){xe
          console.log(xe);
        }
  
      })
  },
  loadScrollerList: function(){
    var that = this;
     wx.request({
        url: "https://www.qgsq.space/my/scollerlist",
        data: {},
        method: 'GET',
        header: {'Content-Type': 'application/json'},
        success: function(res){
          console.log(res.data); 
          that.setData({
            textArray : res.data
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
    pricesArray:[
    ],
    text: "",
    textArray: [
    ],
    step: 1, // 滚动速度
    distance: 40, // 初始滚动距离
    space: 400,
    interval: 20 // 时间间隔
  },
  onShow: function() {
    var that = this;
    var query = wx.createSelectorQuery();
    // 选择id
    query.select('#mjltest').boundingClientRect();
    query.exec(function(res) {
      var length = res[0].width;
      var windowWidth = wx.getSystemInfoSync().windowWidth; // 屏幕宽度
      that.setData({
        length: length,
        windowWidth: windowWidth,
        space:windowWidth
      });
      that.scrollling(); // 第一个字消失后立即从右边出现
    });
  },
  scrollling: function() {
    var that = this;
    var length = that.data.length; // 滚动文字的宽度
    var windowWidth = that.data.windowWidth; // 屏幕宽度
    var interval = setInterval(function() {
     let index = Math.floor(Math.random() * that.data.textArray.length)
      var maxscrollwidth = length + that.data.space;
      var left = that.data.distance;
      if (left < maxscrollwidth) { // 判断是否滚动到最大宽度
        that.setData({
          distance: left + that.data.step
        })
      } else {
        that.setData({
          distance: 0 ,// 直接重新滚动
          text: that.data.textArray[index]
        });
        clearInterval(interval);
        that.scrollling();
      }
    }, that.data.interval);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadPriceData()
    this.loadScrollerList()

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  // onShow: function () {

  // },

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