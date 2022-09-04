// pages/buy/buy.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pricesArray:[
      {
        name:'月卡会员',
        price:'38.8元',
        oldprice:'58.8元'
      },
      {
        name:'年卡会员',
        price:'98.8元',
        oldprice:'298.8元'
      },
      {
        name:'终身会员',
        price:'188.8元',
        oldprice:'488.8元'
      }
    ],
    text: "需要滚动的字幕",
    textArray: [
      'aaa',
      'bbb',
      'ccc',
      'ddd',
      'eee',
      'fff',
      'ggg',
      'hhh',
    ],
    step: 1, // 滚动速度
    distance: 40, // 初始滚动距离
    space: 300,
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