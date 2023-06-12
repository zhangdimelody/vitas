/* eslint-disable no-undef */
const { verifyKey } = process.env

const loadData = (result, loadingTime, context, successCount) => {
  console.log(result, loadingTime, context, successCount, 'loadData');
  if (context.Sensors) {
    context.Sensors.track('recaptcha_js_load', {
      is_successed: result === 'success' ? 1 : 0,
      loading_time: loadingTime,
      success_count: successCount,
    })
  }
}
const getTokenStatus = (result, loadingTime, context, status) => {
  console.log(result, loadingTime, 'loadStatus')
  if (context.Sensors) {
    context.Sensors.track('recaptcha_interface_call', {
      is_successed: result === 'success' ? 1 : 0,
      loading_time: loadingTime,
      is_grecaptcha_defined: status || true,
    })
  }
}

let successCount = 0;

function createScript(key = '') {
  const verifyUrl = `https://www.recaptcha.net/recaptcha/enterprise.js?render=${key || verifyKey}`
  let loadResult = ''
  const startTime = new Date().getTime();
  successCount += 1
  const script = document.createElement('script')
  script.type = 'text/javascript'
  script.src = verifyUrl
  script.async = true
  script.onload = () => {
    loadResult = 'success';
    const completionTime = new Date().getTime();
    loadData(loadResult, completionTime - startTime, this, successCount)
    successCount = 0;
  }
  script.onerror = () => {
    loadResult = 'error';
    const completionTime = new Date().getTime();
    loadData(loadResult, completionTime - startTime, this)
  }
  const timer = setTimeout(() => {
    if (loadResult !== 'success') {
      clearTimeout(timer);
      createScript();
    }
  }, 5000);
  document.getElementsByTagName('head')[0].appendChild(script)
}

function getToken(key = '') {
  const startTime = new Date().getTime()
  if (!grecaptcha) { getTokenStatus('error', 0, this, false) }
  return new Promise((resolve, reject) => {
    grecaptcha.enterprise.ready(async () => {
      try {
        const token = await grecaptcha.enterprise.execute(key || verifyKey, { action: 'leads' })
        if (token !== '') {
          const result = 'success'
          const endTime = new Date().getTime()
          getTokenStatus(result, endTime - startTime, this)
        }
        resolve(token)
      } catch (error) {
        const result = 'error'
        const endTime = new Date().getTime()
        getTokenStatus(result, endTime - startTime, this)
        reject(error)
      }
    })
  })
}

export default { createScript, getToken }