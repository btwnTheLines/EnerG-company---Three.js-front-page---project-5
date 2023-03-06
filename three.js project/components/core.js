import { IcosahedronGeometry, MeshStandardMaterial, Mesh } from "../node_modules/three/build/three.module.js";

////
//
// Navigation elements
//
////

const navBtns = document.getElementsByClassName("nav-btn");

var geometry = new IcosahedronGeometry(1, 1);

class Shape{
    static colorVar;
    static material;
    static core;
}

var coreObj = new Shape();

coreObj.colorVar = "#8af9ff";

coreObj.material = new MeshStandardMaterial({
    color: coreObj.colorVar
});


coreObj.core = new Mesh(geometry, coreObj.material);

var coreMesh = coreObj.core;

export { coreMesh, navBtns };