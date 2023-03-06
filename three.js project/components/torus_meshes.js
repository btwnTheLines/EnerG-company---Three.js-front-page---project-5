import { TorusGeometry, PointsMaterial, Points } from "../node_modules/three/build/three.module.js";

////
//
// Geometry * 2
//
////
var geometry = new TorusGeometry( 5, 0.6, 20, 20 );

var geometry_2 = new TorusGeometry( 6.5, 0.6, 40, 35 );

////
//
// Material * 2
//
////
var material = new PointsMaterial({
    color: '#00ffdd',
    size: 0.004,
});

var material_2 = new PointsMaterial({
    color: '#00ffdd',
    size: 0.003,
});

////
//
// Mesh * 2
//
////
var torus = new Points( geometry, material );

var torus_2 = new Points( geometry_2, material_2 );

export { torus, torus_2 };