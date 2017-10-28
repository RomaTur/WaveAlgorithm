// window.onload = function() {
//
//   var scene = new THREE.Scene();
//   var camera = new THREE.PerspectiveCamera( 65, window.innerWidth/window.innerHeight, 0.1, 10000 );
//
//   var renderer = new THREE.WebGLRenderer({ antialias:true });
//   renderer.setSize( window.innerWidth, window.innerHeight );
//   renderer.setClearColor( 0xFFFFFF );
//   document.body.appendChild( renderer.domElement );
//
//   camera.position.z = 190;
//
//   var light = new THREE.DirectionalLight( 0xfcf9e8, 1 );
//   scene.add(light);
//
//   var ambiColor = "#cbc9bb";
//   var ambientLight = new THREE.AmbientLight(ambiColor);
//   scene.add(ambientLight);
//
//
//   var manager = new THREE.LoadingManager();
//   var loader  = new THREE.ImageLoader( manager );
//
//   manager.onProgress = function ( item, loaded, total ) {
//
// 	};
//
//   var textureBody = new THREE.Texture();
//   var textureHead = new THREE.Texture();
//
//   var onProgress = function ( xhr ) {
// 					if ( xhr.lengthComputable ) {
// 						var percentComplete = xhr.loaded / xhr.total * 100;
// 						console.log( Math.round(percentComplete, 2) + '% downloaded' );
// 					}
//   };
//
//   var onError = function ( xhr ) { };
//
//   loader.load( 'model/Body diff MAP.jpg', function ( image ) {
//     textureBody.image = image;
//     textureBody.needsUpdate = true;
//   });
//
//   loader.load( 'model/HEAD diff MAP.jpg', function ( image ) {
//     textureHead.image = image;
//     textureHead.needsUpdate = true;
//   });
//
//   var meshes = [];
//
//   var objLoader = new THREE.OBJLoader();
//
//   objLoader.load( 'model/bb8.obj', function ( object ) {
//
//     console.log(object);
//
//     object.traverse( function ( child )
//     {
//       if ( child instanceof THREE.Mesh )
//       {
//         meshes.push(child);
//       }
//     });
//
//     var head = meshes[0];
//     var body = meshes[1];
//
//     head.position.y = -80;
//     body.position.y = -80;
//
//     head.rotation.y = Math.PI/3;
//     body.rotation.y = Math.PI/3;
//
//     var mapHeightBody = new THREE.TextureLoader().load( "model/BODY bump MAP.jpg" );
//     var mapHeightHead = new THREE.TextureLoader().load( "model/HEAD bump MAP.jpg" );
//
//     head.material = new THREE.MeshPhongMaterial({map: textureHead, specular: 0xfceed2, bumpMap: mapHeightHead, bumpScale: 0.4, shininess: 25});
//     body.material = new THREE.MeshPhongMaterial({map: textureBody, specular: 0xfceed2, bumpMap: mapHeightBody, bumpScale: 0.4, shininess: 25});
//
//     console.log('head', head);
//
//     scene.add(head);
//     scene.add(body);
//
//   }, onProgress, onError );
//
//   controls = new THREE.TrackballControls( camera );
//
// 	controls.rotateSpeed = 1.0;
// 	controls.zoomSpeed = 1.2;
// 	controls.panSpeed = 0.8;
//
//   var render = function () {
//     requestAnimationFrame( render );
//     controls.update();
//   	renderer.render(scene, camera);
//   };
//
//   render();
//
// };


//
// window.onload = function() {
//
//     var scene = new THREE.Scene();
//     var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//
//     var renderer = new THREE.WebGLRenderer();
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     document.body.appendChild(renderer.domElement);
//
//     var geometry = new THREE.BoxGeometry(1, 1, 1);
//     var material = new THREE.MeshBasicMaterial({
//         color: 0x00ff00
//     });
//     var cube = new THREE.Mesh(geometry, material);
//     scene.add(cube);
//
//     camera.position.z = 5;
//
//
//     function render() {
//         requestAnimationFrame(render);
//
//
//
//         cube.rotation.x += 0.05;
//         cube.rotation.y += 0.05;
//
//
//         renderer.render(scene, camera);
//     }
//     render();
//
//
// };









//
//
// /////////////////////////////////////////
// // Scene Setup
// /////////////////////////////////////////
//
// var scene,
//     camera,
//     renderer,
//     controls;
//
// scene = new THREE.Scene();
//
// camera = new THREE.PerspectiveCamera(10, window.innerWidth / window.innerHeight, 1, 1000);
// camera.position.set(-3, 8, 15);
// // camera.rotation.set(0,90,0);
// camera.lookAt(scene.position);
//
// renderer = new THREE.WebGLRenderer({
//     alpha: true,
//     // antialias: true
// });
// renderer.setPixelRatio(window.devicePixelRatio);
// renderer.setSize(window.innerWidth, window.innerHeight);
//
// document.body.appendChild(renderer.domElement);
//
//
// /////////////////////////////////////////
// // Trackball Controller
// /////////////////////////////////////////
//
// controls = new THREE.TrackballControls(camera);
// controls.rotateSpeed = 5.0;
// controls.zoomSpeed = 3.2;
// controls.panSpeed = 0.8;
// controls.noZoom = false;
// controls.noPan = true;
// controls.staticMoving = false;
// controls.dynamicDampingFactor = 0.2;
//
//
// /////////////////////////////////////////
// // Lighting
// /////////////////////////////////////////
//
// // var iphone_color  = '#FAFAFA';
// var ambientLight = new THREE.AmbientLight('#BBB');
// // var hemiLight     = new THREE.HemisphereLight( iphone_color, iphone_color, 0 ),
// var light  = new THREE.PointLight( '#CCC', 1, 100 );
//
// // hemiLight.position.set( 0, 50, 0 );
// // light.position.set( 0, 20, 10 );
//
// scene.add(ambientLight);
// // scene.add( hemiLight );
// scene.add( light );
//
//
// /////////////////////////////////////////
// // Utilities
// /////////////////////////////////////////
//
// var axisHelper = new THREE.AxisHelper(1.25);
// scene.add(axisHelper);
//
//
//
// /////////////////////////////////////////
// // Object Loader
// /////////////////////////////////////////
//
// var dae;
// var loader = new THREE.ColladaLoader();
//
// function loadCollada(collada) {
//     dae = collada.scene;
//     scene.add(dae);
//     dae.position.set(-0.5, 0, -1.5);
//     dae.translateX(-0.5);
//     dae.translateY(-0.749);
//     dae.translateZ(1);
//     dae.rotation.set(0, -1.58, 0);
//
//     // renderPhone();
// }
//
// loader.options.convertUpAxis = true;
// loader.load('model/multiMac/model.dae', loadCollada);
//
//
//
// /////////////////////////////////////////
// // Render Loop
// /////////////////////////////////////////
//
// function renderPhone() {
//     renderer.render(scene, camera);
//
// }
//
// // Render the scene when the controls have changed.
// // If you don’t have other animations or changes in your scene,
// // you won’t be draining system resources every frame to render a scene.
// // controls.addEventListener('change', renderPhone);
//
// // Avoid constantly rendering the scene by only
// // updating the controls every requestAnimationFrame
// function animationLoop() {
//     requestAnimationFrame(animationLoop);
//     controls.update();
//
//
//     renderer.render(scene, camera);
// }
//
// animationLoop();
//
//
// /////////////////////////////////////////
// // Window Resizing
// /////////////////////////////////////////
//
// window.addEventListener('resize', function() {
//     camera.aspect = window.innerWidth / window.innerHeight;
//     camera.updateProjectionMatrix();
//     renderer.setSize(window.innerWidth, window.innerHeight);
// }, false);



var camera, scene, renderer;
var geometry, material, mesh;
var controls;
var objects = [];
var raycaster;
var blocker = document.getElementById('blocker');
var instructions = document.getElementById('instructions');

var havePointerLock = 'pointerLockElement' in document || 'mozPointerLockElement' in document || 'webkitPointerLockElement' in document;
if (havePointerLock) {
    var element = document.body;
    var pointerlockchange = function(event) {
        if (document.pointerLockElement === element || document.mozPointerLockElement === element || document.webkitPointerLockElement === element) {
            controlsEnabled = true;
            controls.enabled = true;
            blocker.style.display = 'none';
        } else {
            controls.enabled = false;
            blocker.style.display = '-webkit-box';
            blocker.style.display = '-moz-box';
            blocker.style.display = 'box';
            instructions.style.display = '';
        }
    };
    var pointerlockerror = function(event) {
        instructions.style.display = '';
    };

    document.addEventListener('pointerlockchange', pointerlockchange, false);
    document.addEventListener('mozpointerlockchange', pointerlockchange, false);
    document.addEventListener('webkitpointerlockchange', pointerlockchange, false);
    document.addEventListener('pointerlockerror', pointerlockerror, false);
    document.addEventListener('mozpointerlockerror', pointerlockerror, false);
    document.addEventListener('webkitpointerlockerror', pointerlockerror, false);
    instructions.addEventListener('click', function(event) {
        instructions.style.display = 'none';
        // Ask the browser to lock the pointer
        element.requestPointerLock = element.requestPointerLock || element.mozRequestPointerLock || element.webkitRequestPointerLock;
        element.requestPointerLock();
    }, false);
} else {
    instructions.innerHTML = 'Your browser doesn\'t seem to support Pointer Lock API';
}
init();
animate();
var controlsEnabled = false;
var moveForward = false;
var moveBackward = false;
var moveLeft = false;
var moveRight = false;
var moveDown = false;
var moveUp = false;
var canJump = false;
var prevTime = performance.now();
var velocity = new THREE.Vector3();

function init() {
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.01, 1000);
    camera.position.set(0, 1, 0);
    // camera.rotation.set(1, 0, 0);

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);
    scene.fog = new THREE.Fog(0xffffff, 0, 200);

    var light = new THREE.HemisphereLight(0xeeeeff, 0x777788, 0.75);
    light.position.set(0.5, 1, 0.75);
    scene.add(light);



    controls = new THREE.PointerLockControls(camera);
    scene.add(controls.getObject());
    var onKeyDown = function(event) {
        switch (event.keyCode) {
            case 38: // up
            case 87: // w
                moveForward = true;
                break;
            case 37: // left
            case 65: // a
                moveLeft = true;
                break;
            case 40: // down
            case 83: // s
                moveBackward = true;
                break;
            case 39: // right
            case 68: // d
                moveRight = true;
                break;
            case 32: // space
                moveUp = true
                break;
            case 17: // ctrl
                moveDown = true
                break;
        }
    };
    var onKeyUp = function(event) {
        switch (event.keyCode) {
            case 38: // up
            case 87: // w
                moveForward = false;
                break;
            case 37: // left
            case 65: // a
                moveLeft = false;
                break;
            case 40: // down
            case 83: // s
                moveBackward = false;
                break;
            case 39: // right
            case 68: // d
                moveRight = false;
                break;
            case 32: // space
            moveUp = false
                break;
            case 17: // ctrl
            moveDown = false
                break;
        }
    };
    document.addEventListener('keydown', onKeyDown, false);
    document.addEventListener('keyup', onKeyUp, false);





    raycaster = new THREE.Raycaster(new THREE.Vector3(), new THREE.Vector3(0, -1, 0), 0, 10);
    // floor
    geometry = new THREE.PlaneGeometry(2000, 2000, 100, 100);
    geometry.rotateX(-Math.PI / 2);
    for (var i = 0, l = geometry.vertices.length; i < l; i++) {
        var vertex = geometry.vertices[i];
        vertex.x += Math.random() * 20 - 10;
        vertex.y += Math.random() * 2;
        vertex.z += Math.random() * 20 - 10;
    }
    for (var i = 0, l = geometry.faces.length; i < l; i++) {
        var face = geometry.faces[i];
        face.vertexColors[0] = new THREE.Color().setHSL(Math.random() * 0.3 + 0.5, 0.75, Math.random() * 0.25 + 0.75);
        face.vertexColors[1] = new THREE.Color().setHSL(Math.random() * 0.3 + 0.5, 0.75, Math.random() * 0.25 + 0.75);
        face.vertexColors[2] = new THREE.Color().setHSL(Math.random() * 0.3 + 0.5, 0.75, Math.random() * 0.25 + 0.75);
    }
    material = new THREE.MeshBasicMaterial({
        vertexColors: THREE.VertexColors
    });
    mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    var dae;
    var loader = new THREE.ColladaLoader();

    function loadCollada(collada) {
        dae = collada.scene;
        scene.add(dae);
        dae.position.set(-8, 1.2, -20);
        dae.rotation.set(0, -1.58, 0);
        // dae.translateX(0);
        // dae.translateY(1.2);
        // dae.translateZ(0);
        dae.scale.set(0.2,0.2,0.2);


    }

    loader.options.convertUpAxis = true;
    loader.load('model/multiMac/model.dae', loadCollada);


    //
    renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    //
    window.addEventListener('resize', onWindowResize, false);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
    requestAnimationFrame(animate);
    if (controlsEnabled) {
        // raycaster.ray.origin.copy(controls.getObject().position);
        // raycaster.ray.origin.y -= 10;
        // var intersections = raycaster.intersectObjects(objects);
        // var isOnObject = intersections.length > 0;
        var time = performance.now();
        var delta = (time - prevTime) / 1000;
        velocity.x -= velocity.x * 10.0 * delta;
        velocity.z -= velocity.z * 10.0 * delta;
        velocity.y -= velocity.y * 10.0 * delta; // 100.0 = mass
        if (moveForward) velocity.z -= 100.0 * delta;
        if (moveBackward) velocity.z += 100.0 * delta;
        if (moveLeft) velocity.x -= 100.0 * delta;
        if (moveRight) velocity.x += 100.0 * delta;
        if (moveDown) velocity.y -= 100.0 * delta;
        if (moveUp) velocity.y += 100.0 * delta;
        // if (isOnObject === true) {
        //     velocity.y = Math.max(0, velocity.y);
        //     canJump = true;
        // }
        controls.getObject().translateX(velocity.x * delta);
        controls.getObject().translateY(velocity.y * delta);
        controls.getObject().translateZ(velocity.z * delta);
        // if (controls.getObject().position.y < 10) {
        //     velocity.y = 0;
        //     controls.getObject().position.y = 10;
        //     canJump = true;
        // }
        prevTime = time;
    }
    renderer.render(scene, camera);
}



////////////////////////////////



///////////////////////////////
