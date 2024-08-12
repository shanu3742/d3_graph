import {DirectionalLight,Color} from '../../../vendor/three/build/three.module'

const sunLight = () => {
    const light = new DirectionalLight(new Color('white'),1);
    light.position.set(20,10,10)
    return light;

}

export {sunLight};