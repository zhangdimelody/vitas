#### 功能
谷歌recaptcha防刷机制

#### 安装
```js
npm install -S @thinkacademy/vitas-utils
// or
yarn add -S @thinkacademy/vitas-utils
```
#### 使用方式
```js
import gRecaptcha from '@thinkacademy/vitas-utils/gRecaptcha';
// Step one:
mounted() {
  const { verifyKey } = process.env;
  gRecaptcha.createScript.call(this, verifyKey)
},

// Step Two:
methods: {
  submit() {
    const { verifyKey } = process.env
    const token = await gRecaptcha.getToken.call(this, verifyKey)
    // 将 token 放入req.headers 中
    // eg: 防刷机制参数
    config.headers['GRC-Action'] = 'leads'; // 防刷的动作名称
    config.headers['GRC-Token'] = token || ''; // 防刷的token
  }
}
```
#### verifyKey
```js
  // beta环境 or 本地开发环境  
  verifyKey: '6Lfv_BYlAAAAAMkEdD_g-7IWQ_-mVU9A58tPnAcK',

  // 线上环境 or 预发环境
  verifyKey: '6LfXHR4lAAAAANWS9OnKl1DjCYGeGKu9-lu-ltUh',

```