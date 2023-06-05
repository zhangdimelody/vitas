
const isMobile = () => {
  return /Android|webOS|iPhone|iPod|BlackBerry|symbianos|windows phone/i.test(navigator.userAgent);
};
const mobileFuncName = {
  start: 'touchstart',
  move: 'touchmove',
  end: 'touchend'
}
const pcFuncName = {
  start: 'mousedown',
  move: 'mousemove',
  end: 'mouseup'
}
const funcName = isMobile() ? mobileFuncName : pcFuncName;
export default {
  bind: function (el, params) {
    let dragBox = el;
    dragBox.style.position = 'fixed';
    dragBox.addEventListener(funcName.start, e => {
      //鼠标相对元素的位置
      let cur = e.touches ? e.touches[0] : e;
      let disX = cur.clientX - dragBox.offsetLeft;
      let disY = cur.clientY - dragBox.offsetTop;

      const preventFunc = (e) => { e.preventDefault() };
      const moveFunc =  e => {
        let cur = e.touches ? e.touches[0] : e;
        let left = cur.clientX - disX;
        let top = cur.clientY - disY;
        dragBox.style.left = left + 'px';
        dragBox.style.top = top + 'px';
        window.addEventListener(funcName.move, preventFunc, { passive: false })
      }
      const endFunc = () => {
        document.removeEventListener(funcName.move, moveFunc)
        document.removeEventListener(funcName.end, endFunc) // 预防鼠标弹起来后还会循环（即预防鼠标放上去的时候还会移动）
        document.removeEventListener(funcName.move, preventFunc)
        // 如果传参数了就对外暴露元素相对于父级位置
        if(params.value) {
          params.value.left = dragBox.style.left;
          params.value.top = dragBox.style.top;
        }
      }
      document.addEventListener(funcName.move, moveFunc);
      document.addEventListener(funcName.end, endFunc);
    }, false);
  },
}