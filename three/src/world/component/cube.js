import {BoxGeometry,MeshBasicMaterial,Color,Mesh} from '../../../vendor/three/build/three.module'
const createCube = () => {
// create a geometry
const geometry = new BoxGeometry(2, 2, 2);
// create a default (white) Basic material
const material = new MeshBasicMaterial({color: new Color('white')});
// create a Mesh containing the geometry and material
const cube = new Mesh(geometry, material);
return cube
}


export {createCube}