#### 功能
支持电话号码中间4位加密
#### 安装
```js
npm install -S @thinkacademy/vitas-utils
// or
yarn add @thinkacademy/vitas-utils
```
#### 使用方式
```js
// 使用 filters 方式引入
import { encryptPhone } from '@thinkacademy/vitas-utils'

filters: {
  encryptPhone
},

<p>{{ telephone | encryptPhone }}</p>
```