import { scene } from '../scene/index';
import Cuboid from '../block/cuboid';
import Cylinder from '../block/cylinder';

export default class GamePage {
  constructor(callbacks) {
    this.callbacks = callbacks;
  }

  init() {
    this.scene = scene;
    this.scene.init();

    this.addInitBlock();

    this.render();
  }

  addInitBlock() {
    const cuboidBlock = new Cuboid(-15, 0, 0);
    const cylinderBlock = new Cylinder(23, 0, 0);

    this.scene.instance.add(cuboidBlock.instance);
    this.scene.instance.add(cylinderBlock.instance);
  }

  render() {
    this.scene.render();
    requestAnimationFrame(this.render.bind(this));
  }
}
