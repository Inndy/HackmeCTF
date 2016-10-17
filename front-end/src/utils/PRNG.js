class WeakPRNG {
  constructor(seed) {
    this.s1 = (seed || new Date()) | 0
    this.s2 = (seed || new Date() * 3) | 0
    this.s3 = this.s1 ^ this.s2 ^ 0xdeadbeef
  }

  next() {
    this.s1 = ((this.s1 * 1103515245 + 12345) & 0x7fffffff)
    this.s2 = ((this.s2 * 33797 + 1) & 0x7fffffff)
    this.s3 = this.s3 ^ (0x7fffffff * Math.random())
    var v1 = (this.s1 >> 11) & 0xffff
    var v2 = ((this.s2 >> 13) & 0xffff) < 15
    var v3 = (this.s3 >> 17) & 0x0f0f0f0f
    return v1 ^ v2 ^ v3
  }

  rand(n) {
    return this.next() % n
  }

  choice(array) {
    return array[this.rand(array.length)]
  }

  shuffle(array) {
    for(var i = 0; i < array.length; i++) {
      var j = this.rand(array.length)
      var t = array[i]
      array[i] = array[j]
      array[j] = t
    }
    return array
  }
}

export {
  WeakPRNG
}
