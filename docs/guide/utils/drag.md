#### 功能
支持PC、移动端拖拽
#### 安装
```js
npm install -S @thinkacademy/vitas-utils
// or
yarn add @thinkacademy/vitas-utils
```
#### 使用方式
```js
// 使用局部指令方式引入
import { drag } from '@thinkacademy/vitas-utils'
directives: {
  drag
}
<div v-drag></div>

// 使用全局指令方式引入
import { drag } from '@thinkacademy/vitas-utils'
Vue.use(drag)
<div v-drag></div>

```
#### 参数说明
将元素相对于外层的 left top 暴露出来，使用方式如下：
```js
<div v-drag="elementPos"></div>


data() {
  return {
    elementPos: {
      left: null,
      top: null,
    },
  }
},
watch: {
  elementPos: {
    handler(val) {
      console.log('elementPos', val)
    },
    deep: true
  }
},
```