/*torus = {
  shape,
  make = () => {
    torus_shape = new THREE.TorusGeometry(100,25,16, 25);
    torus_material = new THREE.MeshBasicMaterial( {
      color: 0x3333ff,
      wireframe:true,
    });
    shape = new THREE.Mesh(torus_shape, torus_material);
  },

  rotate = () => {
    torus.rotation.x = Date.now() * 0.0005;
    torus.rotation.y = Date.now() * 0.001;
  }
}*/

/*icos = {
  shape,
  make = () => {
    ico_shape = new THREE.IcosahedronGeometry(200,1);
    ico_material = new THREE.MeshBasicMaterial( {
      color: 0xffffff,
      wireframe: true,
    })
    shape =  new THREE.Mesh(ico_shape, ico_material);
  },

  rotate = () => {
    shape.rotation.x = Date.now() * 0.0005;
    shape.rotation.y = Date.now() * 0.001;
  }
}*/