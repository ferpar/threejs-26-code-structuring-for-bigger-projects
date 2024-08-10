import * as THREE from "three";
import EventEmitter from "./EventEmitter";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

export default class Resources extends EventEmitter {
  constructor(sources) {
    super();
    // Options
    this.sources = sources;

    // Setup
    this.items = {};
    this.toLoad = this.sources.length;
    this.loaded = 0;
    this.setLoaders();
    this.startLoading();
  }

  setLoaders() {
    this.loaders = {};
    this.loaders.gltfLoader = new GLTFLoader();
    this.loaders.textureLoader = new THREE.TextureLoader();
    this.loaders.cubeTextureLoader = new THREE.CubeTextureLoader();
  }

  startLoading() {
    // Load each source
    for (const source of this.sources) {
      if (source.type === "gltfModel") {
        this.loaders.gltfLoader.load(
          source.path,
          (gltf) => {
            this.sourceLoaded(source, gltf);
          },
          undefined,
          (error) => {
            console.error(`[Resources] ${source.name} not found`);
          }
        );
      } else if (source.type === "texture") {
        this.loaders.textureLoader.load(
          source.path,
          (texture) => {
            this.sourceLoaded(source, texture);
          },
          undefined,
          (error) => {
            console.error(`[Resources] ${source.name} not found`);
          }
        );
      } else if (source.type === "cubeTexture") {
        this.loaders.cubeTextureLoader.load(
          source.path,
          (cubeTexture) => {
            this.sourceLoaded(source, cubeTexture);
          },
          undefined,
          (error) => {
            console.error(`[Resources] ${source.name} not found`);
          }
        );
      }
    }
  }

  sourceLoaded(source, file) {
    console.log(`[Resources] ${source.name} loaded`);
    this.items[source.name] = file;
    this.loaded++;
    if (this.loaded === this.toLoad) {
      this.trigger("ready");
    }
  }
}
