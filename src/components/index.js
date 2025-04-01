//把components的所有组件进行全局和注册
//通过插件的方式
import ImageView from './ImageView/index.vue'
import Sku from './XtxSku/index.vue'

export const componentsPlugin = {
  install(app) {
    //app.component('组件名称', 组件配置对象)
    app.component('XtxImageView', ImageView)
    app.component('XtxSku', Sku)
  }
}
