// cmps/skill-item/skill-item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    date:{
      type: String,
      value: ""
    },
     entity:{
       type:Object,
       value: null
     }
  },

  /**
   * 组件的初始数据
   */
  data: {
    skill_item_images: [
      {
       imageSrc: "/pages/assets/imgs/ic_cat_music.png"
      },
      // {
      //   imageSrc: "/pages/assets/imgs/ic_cat_music.png"
      // },
      {
        imageSrc: "/pages/assets/imgs/ic_cat_music.png"
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
