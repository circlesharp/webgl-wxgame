import * as THREE from '../../libs/three';
import BaseBlock from './base';

export default class Cylinder extends BaseBlock {
  constructor(x, y, z, width) {
    super('cuboid');

    const size = width || this.width; // 父类的 this.width
    const geometry = new THREE.CylinderGeometry(size / 2, size / 2, this.height, 120); // radiusTop, radiusBottom, height, radialSegments
    const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
    this.instance = new THREE.Mesh(geometry, material);
    this.instance.name = 'block'; // 方便日后查找

    this.instance.position.x = this.x = x;
    this.instance.position.y = this.y = y;
    this.instance.position.z = this.z = z;
  }
}
