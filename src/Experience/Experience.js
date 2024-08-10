import * as THREE from "three";
import Sizes from "./Utils/Sizes.js";
import Time from "./Utils/Time.js";
import Camera from "./Camera.js";
import Renderer from "./Renderer.js"

let instance = null;
export default class Experience {
  constructor(canvas) {
    // Singleton, return the instance if it already exists
    if (instance) {
      return instance;
    }
    instance = this;
    // // Global Access
    // window.experience = this;

    // Options
    this.canvas = canvas;

    // Setup
    this.sizes = new Sizes();
    this.time = new Time();
    this.scene = new THREE.Scene();
    this.camera = new Camera();
    this.renderer = new Renderer();

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
    this.camera.resize()
    this.renderer.resize()
  }

  update() {
    console.log("update the experience");
    this.camera.update()
    this.renderer.update()
  }
}
