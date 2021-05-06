makeTorus = function() {
    torus_shape = new THREE.TorusGeometry(100,25,16, 100);
    torus_material = new THREE.MeshBasicMaterial( {
      color: 0x3333ff
    });
    return new THREE.Mesh(torus_shape, torus_material);
}

animate = function() {

}