import * as THREE from '../../libs/three';
import camera from './camera';

class Scene {
  constructor() {
    this.instance = null;
  }

  init() {
    /* 三要素：renderer, camera, scene */
    const renderer = this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      preserveDrawingBuffer: true, // preserve the buffers until manually cleared or overwritten.
    });
    this.renderer = renderer;

    this.camera = camera;
    this.camera.init();

    this.instance = new THREE.Scene();
    this.instance.add(new THREE.AxesHelper(100));
    this.instance.add(this.camera.instance);
  }

  render() {
    this.renderer.render(this.instance, this.camera.instance);
  }
}

export default new Scene();
