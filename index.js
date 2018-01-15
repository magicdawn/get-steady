/**
 * throttle

function(){
  arg = latest

  last-execution-time
  cur-time

  if cur-time - last-execution-time

}
 */

function throttle(fn, wait, options) {
  let checkTimer
  let stopCheckTimer
  let lastInvokeTime

  let lastCallTime
  let lastThis
  let lastArgs

  function check() {
    // 如果上次调用 & 现在之前有调用的话, 则调用一次
    const now = Date.now()
    if (lastCallTime > lastInvokeTime && lastCallTime <= now) {
      invoke()
    }
  }

  function stopCheck() {
    clearInterval(checkTimer)
    checkTimer = null
    stopCheckTimer = null
  }

  function invoke() {
    lastInvokeTime = Date.now()
    return fn.apply(lastThis, lastArgs)
  }

  return function() {
    lastCallTime = Date.now()
    lastThis = this
    lastArgs = [].slice.call(arguments)

    // 每次延后清除
    clearTimeout(stopCheckTimer)
    stopCheckTimer = setTimeout(stopCheck, wait)

    if (!checkTimer) {
      checkTimer = setInterval(check, wait)
      return invoke()
    }
  }
}
