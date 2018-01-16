const steady = require('..')
const should = require('should')
const sleep = require('promise.sleep')

describe('Simple Test', function() {
  it('it works', function(done) {
    const start = Date.now()
    let seq = 1
    const maxI = 23

    // invoke
    const fn = steady(i => {
      console.log('invoke i = %s, time passed = %s', i, Date.now() - start)
      console.log('---------')
      ;(Date.now() - start).should.approximately(seq * 100, 30)
      seq++

      // finish test
      if (i === maxI - 1) {
        setTimeout(done, 100)
      }
    }, 100)

    // call
    ;(async () => {
      for (var i = 0; i < maxI; i++) {
        console.log('call i = %s, time passed = %s', i, Date.now() - start)
        fn(i)
        await sleep(20)
      }

      // wait stopCheck
      await sleep(100)
    })()
  })
})
