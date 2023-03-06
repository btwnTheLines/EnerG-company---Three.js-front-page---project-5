import { WebGLRenderer } from "../node_modules/three/build/three.module.js";

////
//
// Renderer
//
////

//Render to canvas element  with id of 'model'
const renderer = new WebGLRenderer({
    canvas: document.querySelector('#model'),
});

renderer.setSize( window.innerWidth, window.innerHeight );

export { renderer };