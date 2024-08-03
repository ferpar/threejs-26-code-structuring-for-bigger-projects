import EventEmitter from "./EventEmitter";
export default class Time extends EventEmitter {
  constructor() {
    super()

    // Setup
    this.start = Date.now()
    this.current = this.start
    this.elaosed = 0
    this.delta = 16 // to avoid bugs when starting the animation loop with 0

    window.requestAnimationFrame(() => {
      this.tick()
    })
  }

  tick() {
    const currentTime = Date.now()
    this.delta = currentTime - this.current
    this.current = currentTime
    this.elapsed = this.current - this.start

    this.trigger("tick")

    window.requestAnimationFrame(() => {
      this.tick()
    })
  }
}