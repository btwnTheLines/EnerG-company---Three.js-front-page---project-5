import { PerspectiveCamera } from "../node_modules/three/build/three.module.js";

////
//
// Perspective Camera
//
////
var camera = new PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// Update sizes
var sizes = { 
    width: window.innerWidth
};

if(sizes.width>920){
    camera.position.z = 20;
}else if(sizes.width>650 && sizes.width<921){
    camera.position.z = 22;
}else if(sizes.width>425 && sizes.width<651){
    camera.position.z = 26;
}else{
    camera.position.z = 28;
}

export{ camera };