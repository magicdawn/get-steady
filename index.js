function throttle(fn, wait, options) {
  var checkTimer
  var stopCheckTimer

  // context
  var lastThis
  var lastArgs

  // sequence
  var called = 0
  var invoked = 0

  function check() {
    // if there exists un invoked, time to invoke
    if (invoked < called) {
      invoke()
    }
  }

  function stopCheck() {
    clearInterval(checkTimer)
    checkTimer = null
    stopCheckTimer = null
    check()
  }

  function invoke() {
    invoked = called
    return fn.apply(lastThis, lastArgs)
  }

  return function() {
    called++
    lastThis = this
    lastArgs = [].slice.call(arguments)

    // begin to check
    if (!checkTimer) {
      checkTimer = setInterval(check, wait)
    }

    // debounce  stopCheck
    clearTimeout(stopCheckTimer)
    stopCheckTimer = setTimeout(stopCheck, wait)
  }
}
