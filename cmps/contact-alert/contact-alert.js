// cmps/contact-alert/contact-alert.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    showModel:{
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    showDialog:function(){
      this.setData({
        showModel: true,
       }) 

    },
    hideDialog:function(){
      this.setData({
        showModel: false,
       }) 
    }

  }

})
