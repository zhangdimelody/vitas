(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('core-js/modules/es6.regexp.replace.js')) :
  typeof define === 'function' && define.amd ? define(['exports', 'core-js/modules/es6.regexp.replace.js'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.vitasUtils = {}));
})(this, (function (exports) { 'use strict';

  function encryptPhone(phone) {
    return phone.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2');
  }

  var isMobile = function isMobile() {
    return /Android|webOS|iPhone|iPod|BlackBerry|symbianos|windows phone/i.test(navigator.userAgent);
  };
  var mobileFuncName = {
    start: 'touchstart',
    move: 'touchmove',
    end: 'touchend'
  };
  var pcFuncName = {
    start: 'mousedown',
    move: 'mousemove',
    end: 'mouseup'
  };
  var funcName = isMobile() ? mobileFuncName : pcFuncName;
  var drag = {
    //只调用一次，指令第一次绑定到元素时调用，用这个钩子函数可以定义一个在绑定时执行一次的初始化动作
    bind: function bind(el, params) {
      var dragBox = el; //获取当前元素
      dragBox.style.position = 'absolute'; // 拖拽元素使用定位，脱离文档流
      dragBox.addEventListener(funcName.start, function (e) {
        //鼠标相对元素的位置
        var cur = e.touches ? e.touches[0] : e;
        var disX = cur.clientX - dragBox.offsetLeft;
        var disY = cur.clientY - dragBox.offsetTop;
        var preventFunc = function preventFunc(e) {
          e.preventDefault();
        };
        var moveFunc = function moveFunc(e) {
          var cur = e.touches ? e.touches[0] : e;
          //鼠标的位置减去鼠标相对元素的位置，得到元素的位置
          var left = cur.clientX - disX;
          var top = cur.clientY - disY;
          dragBox.style.left = left + 'px';
          dragBox.style.top = top + 'px';
          window.addEventListener('touchmove', preventFunc, {
            passive: false
          });
        };
        var endFunc = function endFunc() {
          document.removeEventListener(funcName.move, moveFunc);
          document.removeEventListener(funcName.end, endFunc); // 预防鼠标弹起来后还会循环（即预防鼠标放上去的时候还会移动）
          document.removeEventListener('touchmove', preventFunc);
          // 如果传参数了就对外暴露元素相对于父级位置
          if (params.value) {
            params.value.left = dragBox.style.left;
            params.value.top = dragBox.style.top;
          }
        };
        document.addEventListener(funcName.move, moveFunc);
        document.addEventListener(funcName.end, endFunc);
      }, false);
    },
    update: function update() {
      //被绑定元素所在的模板更新时调用，而不论绑定值是否变化。通过比较更新前后的绑定值，可以忽略不必要的模板更新
    },
    componentUpdated: function componentUpdated() {
      //被绑定元素所在模板完成一次更新周期时调用
    },
    unbind: function unbind() {
      //只调用一次， 指令与元素解绑时调用
    }
  };

  exports.drag = drag;
  exports.encryptPhone = encryptPhone;

}));
