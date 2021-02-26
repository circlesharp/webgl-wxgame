import * as THREE from '../libs/three';
import game from './game/game';

window.THREE = THREE; // 挂到 window


/* 面向对象改写 */
class Main {
  constructor() { }

  static init() {
    game.init();
  }
}

export default Main;
