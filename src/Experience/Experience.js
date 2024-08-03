import Sizes from "./Utils/Sizes.js";
import Time from "./Utils/Time.js";

export default class Experience {
  constructor(canvas) {
    // Global Access
    window.experience = this;

    // Options
    this.canvas = canvas;

    // Setup
    this.sizes = new Sizes();
    this.time = new Time();

    // resize event of sizes instance (triggered by window resize)
    this.sizes.on("resize", () => {
      this.resize();
    });

    // tick event of time instance (triggered by requestAnimationFrame)
    this.time.on("tick", () => {
      this.update();
    });
  }

  resize() {
    console.log("resizing");
  }

  update() {
    console.log("update the experience");
  }
}
