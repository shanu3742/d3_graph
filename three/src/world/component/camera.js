import {PerspectiveCamera} from '../../../vendor/three/build/three.module'
const createCamera = (container) => {
const fov =35  // aka field of view ;
const aspectRatio = container.clientWidth / container.clientHeight;
const near = 0.1; // the near clipping plane
const far = 100; // the far clipping plane
const camera = new PerspectiveCamera(fov,aspectRatio,near,far);
camera.position.set(0, 0, 10);
return camera
}
export {createCamera}