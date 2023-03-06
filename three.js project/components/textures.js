import { TextureLoader } from "../node_modules/three/build/three.module.js";

////
//
// Texture importing 
//
////
var textureLoader = new TextureLoader();
var colorMap = textureLoader.load("three.js project/components/hexagonal_tiles/hexagonal_concrete_paving_diff_2k.png");
var normalMap = textureLoader.load("three.js project/components/hexagonal_tiles/hexagonal_concrete_paving_nor_gl_2k.png");
var heightMap = textureLoader.load("three.js project/components/hexagonal_tiles/hexagonal_concrete_paving_disp_2k.png");
var aoMap = textureLoader.load("three.js project/components/hexagonal_tiles/hexagonal_concrete_paving_arm_2k.png");

export {
    colorMap,
    normalMap,
    heightMap,
    aoMap
};