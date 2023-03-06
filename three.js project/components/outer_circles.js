import { SphereGeometry, PointsMaterial, Points } from "../node_modules/three/build/three.module.js";

////
//
// Geometry
//
////
const geometry = new SphereGeometry( 8, 100 );


////
//
// Material 
//
////
var material = new PointsMaterial({
    color: '#6b6a6a',
    size: 0.0008
});


////
//
// Mesh * 2
//
////
var large_circle = new Points( geometry, material );

var large_circle_2 = new Points( geometry, material );

export { large_circle, large_circle_2 };