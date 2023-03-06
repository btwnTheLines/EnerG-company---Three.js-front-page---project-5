import { IcosahedronGeometry, MeshPhongMaterial, Mesh } from "../node_modules/three/build/three.module.js";

////
//
// Hexagonal tiles - Texture import
//
////
import { colorMap, normalMap, heightMap, aoMap } from "./textures.js";

////
//
// Geometry
//
////
const geometry = new IcosahedronGeometry( 3.2, 4);

////
//
// Material + Texture
//
////
var material = new MeshPhongMaterial({
    map: colorMap,
    aoMap: aoMap,
    displacementMap: heightMap,
    normalMap: normalMap,
    transparent: true,
    opacity: 0.2
});

////
//
// Mesh
//
////
var icosahedron = new Mesh( geometry, material );

export { icosahedron };