#### 谷歌recaptcha防刷机制

#### 安装
```js
npm install -S @thinkacademy/vitas-utils
// or
yarn add @thinkacademy/vitas-utils
```
#### 使用方式
```js
// 使用 filters 方式引入
import { gRecaptcha } from '@thinkacademy/vitas-utils'

methods: {
  submit() {
    const token = await gRecaptcha.getToken.call(this)
    // 将 token 放入req.headers 中
    // eg: 防刷机制参数
    config.headers['GRC-Action'] = 'leads'; // 防刷的动作名称
    config.headers['GRC-Token'] = token || ''; // 防刷的token
  }
}
```
