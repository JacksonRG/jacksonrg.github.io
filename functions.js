var animation_functions = [
  // () => {spinIcos();},
  // () => {spinTorus();},
  spinIcos,
  spinTorus,
  // eatTorus
];

function makeTorus() {
  torus_shape = new THREE.TorusGeometry(140,25,16, 10);
  torus_material = new THREE.MeshBasicMaterial( {
    color: 0x888888,
    wireframe:true,
  });
  return new THREE.Mesh(torus_shape, torus_material);
}

function eatTorus() {
  scene.remove(torus);
  var torus_shape = new THREE.TorusGeometry(140,25,16, 10, date%(Math.PI*2));
  var torus_material = new THREE.MeshBasicMaterial( {
    color: 0x3333ff,
    wireframe:true,
  });
  torus = THREE.Mesh(torus_shape, torus_material);
  scene.add(torus);
}

function spinTorus() {
  // torus.rotation.x = Date.now() * 0.0005;
  torus.rotation.y = Math.PI/4;
  torus.rotation.x = Date.now() * 0.001;
}

function makeIcos() {
  ico_shape = new THREE.IcosahedronGeometry(100,1);
  ico_material = new THREE.MeshBasicMaterial( {
    color: 0xbbbbbb,
    wireframe: true,
  })
  return new THREE.Mesh(ico_shape, ico_material);
}

function spinIcos() {
  ico.rotation.y = Date.now() * (0.0005);
  ico.rotation.x = Date.now() * (0.001);
}

function animate() {
  requestAnimationFrame(animate);

  // scene.remove(torus);
  // torus_shape = new THREE.TorusGeometry(140,25,16, 10);
  // torus_material = new THREE.MeshBasicMaterial( {
  //   color: 0x3333ff,
  //   wireframe:true,
  // });
  // torus = new THREE.MeshBasicMaterial(torus_shape, torus_material);
  // scene.add(torus);

  for (i = 0; i < animation_functions.length; i++ ) {
    animation_functions[i]();
  }
  
  renderer.render(scene,camera);
}