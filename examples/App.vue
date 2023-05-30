<template>
  <div id="app">
    <Demo />
    <p>{{ telephone | encryptPhone }}</p>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div v-drag class="drag-box">Drag this</div>
  </div>
</template>

<script>
import Demo from '../packages/demo-vitas/dist';
// import encryptPhone from '../packages/vitas-utils/encryptPhone.js';
// import drag from '../packages/vitas-utils/drag.js';

import { encryptPhone, drag } from '../packages/vitas-utils/dist/index.es.js';

export default {
  name: 'App',
  components: {
    Demo
  },
  filters: {
    encryptPhone
  },
  directives: {
    drag
  },
  data() {
    return {
      telephone: '13888888888',
      // 元素相对于父级位置
      elementPos: {
        left: null,
        top: null,
      },
    }
  },
  watch: {
    elementPos: {
      handler(val) {
        console.log('watch', val)
      },
      deep: true
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.drag-box {
  width: 100px;
  height: 100px;
  background-color: #ccc;
  border: 1px solid #2c3e50;
}
</style>
