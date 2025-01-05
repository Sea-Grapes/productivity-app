class v2 extends Array {
    constructor(x = 0, y = x) {
      super(x, y)
      return this
    }
  
    get x() { return this[0] }
    get y() { return this[1] }
    set x(v) { this[0] = v }
    set y(v) { this[1] = v }
  
    set(x, y = x) {
      if (x.length) return this.copy(x)
  
      this[0] = x
      this[1] = y
      return this
    }
  
    copy(v) {
      this[0] = v[0]
      this[1] = v[1]
      return this
    }
  
    add(x = 0, y = x) {
      const v = this.clone()
      if (x.length) {
        v[0] += x[0]
        v[1] += x[1]
      }
      else {
        v[0] += x
        v[1] += y
      }
      return v
    }
  
    setAdd(x = 0, y = x) {
      if (x.length) {
        this[0] += x[0]
        this[1] += x[1]
      }
      else {
        this[0] += x
        this[1] += y
      }
      return this
    }
  
    sub(x = 0, y = x) {
      const v = this.clone()
      if (x.length) {
        v[0] -= x[0]
        v[1] -= x[1]
      }
      else {
        v[0] -= x
        v[1] -= y
      }
      return v
    }
  
    setSub(x = 0, y = x) {
      if (x.length) {
        this[0] -= x[0]
        this[1] -= x[1]
      }
      else {
        this[0] -= x
        this[1] -= y
      }
      return this
    }
  
    mult(x = 0, y = x) {
      const v = this.clone()
      if (x.length) {
        v[0] *= x[0]
        v[1] *= x[1]
      }
      else {
        v[0] *= x
        v[1] *= y
      }
      return v
    }
  
    setMult(x = 0, y = x) {
      if (x.length) {
        this[0] *= x[0]
        this[1] *= x[1]
      }
      else {
        this[0] *= x
        this[1] *= y
      }
      return this
    }
  
    div(x = 0, y = x) {
      const v = this.clone()
      if (x.length) {
        v[0] /= x[0]
        v[1] /= x[1]
      }
      else {
        v[0] /= x
        v[1] /= y
      }
      return v
    }
  
    setDiv(x = 0, y = x) {
      if (x.length) {
        this[0] /= x[0]
        this[1] /= x[1]
      }
      else {
        this[0] /= x
        this[1] /= y
      }
      return this
    }
  
    nx() { return new v2(-this[0], this[1]) }
    ny() { return new v2(this[0], -this[1]) }
  }
  
  const V2 = v2
  v2 = function(x, y) { return new V2(x, y) }
  
  v2.up = () => new v2(0, 1)
  v2.down = () => new v2(0, -1)
  v2.left = () => new v2(-1, 0)
  v2.right = () => new v2(1, 0)
  v2.negInfinity = () => new v2(-Infinity, -Infinity)
  v2.infinity = () => new v2(Infinity, Infinity)
  v2.one = () => new v2(1, 1)
  v2.zero = () => new v2(0, 0)
  v2.angle = v => Math.atan2(v[1], v[0])
  v2.constant = Object.freeze(v2.zero())
  
  export { v2 }

export const deg = rad => rad * 180/Math.PI
export const rad = deg => deg * Math.PI/180

export const lerp = (first, second, by) => first * (1 - by) + second * by
export const clamp = (num, min, max) => Math.min(Math.max(num, min), max)

export const range = (min, max) => Math.random() * (max - min) + min
