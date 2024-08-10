import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import Experience from "./Experience.js";

export  default class Camera {
  constructor () {
    this.experience = new Experience() // same instance cause of singleton
    this.sizes = this.experience.sizes
    this.scene = this.experience.scene
    this.canvas = this.experience.canvas

    this.setInstance()
    this.setOrbitControls()
    console.log("Camera created")
  }

  setInstance() {
    this. instance = new THREE.PerspectiveCamera(
      35,
      this.sizes.width / this.sizes.height,
      0.1,
      100
    )
    this.instance.position.set(6, 4, 8)
    this.scene.add(this.instance)
  }

  setOrbitControls() {
    console.log("domElement @ OrbitControls", this.canvas)
    this.controls = new OrbitControls(this.instance, this.canvas)
    this.controls.enableDamping = true

  }

  resize() {
    this.instance.aspect = this.sizes.width / this.sizes.height
    this.instance.updateProjectionMatrix()
  }

  update() {
    this.controls.update()
  }
}