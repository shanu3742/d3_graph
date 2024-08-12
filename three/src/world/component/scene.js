import {Scene,Color} from '../../../vendor/three/build/three.module'

const createScene  = () => {
const scene = new Scene();
//set the background of scene 
scene.background = new Color('skyblue');
return scene;
}

export {createScene}
