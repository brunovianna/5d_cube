import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

import * as PENTERACT from './penteract.js';

import * as NAVIGATION from './navigation.js';

var zoom = 200;

var scaler = 190.0 * ( window.innerWidth / 1024) * (zoom /  window.innerWidth);

const my_penteract = new PENTERACT.Penteract(scaler);

NAVIGATION.create_navigation();



const images = [
    "reymultok.png",
    "laocconok.png",
    "insuperabilis.png",
    "hobbes-leviathanok.png",
    "hobbes-leviathanfloatingok.png",
    "caballotroya copy.png",
    "against2.png",
    "aguila2ok.png",
    "a_man.png",
    "aurora_ophanim.png",
    "cabezaok.png",
    "Circle_of_Baccio_Baldini.png",
    "gobernmentok.png",
    "heavenok.png",
    "hecate_animal.png",
    "monstruo.png",
    "niemandok.png",
    "papa_nachtok.png",
    "rey_globook.png",
    "round.png",
    "sade.png",
    "trifonis_neu_voldor.png",
    "Untitled_1.png",
    "Untitled_2.png",
    "vetruvio.png",
    "wildbatonok.png",
];




const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


//drawing a test cube

// const geometry = new THREE.BoxGeometry();
// const material = new THREE.MeshBasicMaterial( { color: 0x00ffff } );
// const cube = new THREE.Mesh( geometry, material );
//scene.add( cube );

var loader = new THREE.TextureLoader();
const cat = require('./textures/cat.png') ;
var texture = loader.load( cat);

const image_textures = []
const image_materials = []

for (var i of images) {
    const f = require('./textures/'+i);
    const t = loader.load(f);
    image_textures.push(t);
    const m = new THREE.MeshBasicMaterial( { map: t, transparent: true, opacity: 1, side:THREE.DoubleSide } );
    image_materials.push(m);
}



// texture.wrapS = THREE.RepeatWrapping;
// texture.wrapT = THREE.RepeatWrapping;
// texture.repeat.set( 4, 4 );


//const red_material = new THREE.MeshBasicMaterial( { color: 0xaaaa00 } );
const cat_material = new THREE.MeshBasicMaterial( { map: texture, transparent: true, opacity: 1, side:THREE.DoubleSide } );
 
//const meshphong_material = new THREE.MeshPhongMaterial({color, map: texture});





// playing with plane geometry
// const plane_geometry = new THREE.PlaneGeometry(1,1);
// var face_shape = new THREE.Shape([[-1,-1],[-1,1],[1,1],[1,-1]]);
// var shape_geometry = new THREE.ShapeGeometry( face_shape );




// create just one of the cube faces using buffer geometry
// const buffer_geometry = new THREE.BufferGeometry();
// const buffer_vertices = [
//     // front: two triangles
//     { pos: [-1, -1,  1], norm: [ 0,  0,  1], uv: [0, 0], },
//     { pos: [ 1, -1,  1], norm: [ 0,  0,  1], uv: [1, 0], },
//     { pos: [-1,  1,  1], norm: [ 0,  0,  1], uv: [0, 1], },

//     { pos: [-1,  1,  1], norm: [ 0,  0,  1], uv: [0, 1], },
//     { pos: [ 1, -1,  1], norm: [ 0,  0,  1], uv: [1, 0], },
//     { pos: [ 1,  1,  1], norm: [ 0,  0,  1], uv: [1, 1], },
// ];
// var positions = [];
// var normals = [];
// var uvs = [];
// for (const vertex of buffer_vertices) {
//   positions.push(...vertex.pos);
//   normals.push(...vertex.norm);
//   uvs.push(...vertex.uv);
// }
// const positionNumComponents = 3;
// const normalNumComponents = 3;
// const uvNumComponents = 2;
// buffer_geometry.setAttribute(
//     'position',
//     new THREE.BufferAttribute(new Float32Array(positions), positionNumComponents));
// buffer_geometry.setAttribute(
//     'normal',
//     new THREE.BufferAttribute(new Float32Array(normals), normalNumComponents));
// buffer_geometry.setAttribute(
//     'uv',
//     new THREE.BufferAttribute(new Float32Array(uvs), uvNumComponents));
// buffer_geometry.computeVertexNormals();
// const face = new THREE.Mesh(buffer_geometry, cat_material);
// face.position.z = 0;
// scene.add(face);


//creating projected faces geometry

var projected_faces_geometries  = [];
var projected_faces_meshes  = [];




const projected_uvs = [
    0,0,
    0,1,
    1,0,
    1,0,
    0,1,
    1,1
];



const projected_normals = [ //just to test
    0,0,-1,
    0,0,-1,
    0,0,-1,
    0,0,-1,
    0,0,-1,
    0,0,-1    
];

var images_index = 0;


const positionNumComponents = 3;

for (let face_index=0; face_index < PENTERACT.penteract_faces.length ; face_index++) {

    var temp_geometry = new THREE.BufferGeometry();

    var projected_vertices = my_penteract.get_projected_face(face_index);



    //lets make two triangles from the faces
    const projected_vertix_pos = [ 
        projected_vertices[0], 
        projected_vertices[1],
        projected_vertices[3],

        projected_vertices[3],
        projected_vertices[1],
        projected_vertices[2],
    ];

    var positions = [];


    for (const vertex of projected_vertix_pos) {
        positions.push(...vertex);

      }


    //now we can set the position attribute

    temp_geometry.setAttribute(
        'position',
        new THREE.BufferAttribute(new Float32Array(positions), positionNumComponents));

    temp_geometry.computeVertexNormals(); // please compute from the face direction i hope this works

    temp_geometry.setAttribute(
        'normal',
        new THREE.BufferAttribute(new Float32Array(projected_normals), positionNumComponents));



    const uvNumComponents = 2;
    temp_geometry.setAttribute(
        'uv',
        new THREE.BufferAttribute(new Float32Array(projected_uvs), uvNumComponents));

    projected_faces_geometries.push(temp_geometry);

    //reverse order just to make the textures appear on top
    
    if (images_index < image_materials.length) {
        var temp_face =  new THREE.Mesh(temp_geometry, image_materials[images_index]);
        projected_faces_meshes.push(temp_face);
        scene.add(temp_face);
        images_index++;
    }  else {
        var temp_face =  new THREE.Mesh(temp_geometry, cat_material);
        projected_faces_meshes.push(temp_face);
        scene.add(temp_face);
    }


}




// now lets make the edges (lines)
const line_material = new THREE.LineBasicMaterial( { color: 0xf9c41e} );

var projected_lines_geometries = [];
var projected_lines = [];

for (var line_index=0; line_index< PENTERACT.penteract_lines.length; line_index++) {

    
    const points = my_penteract.get_projected_line(line_index);

    const line_geometry = new THREE.BufferGeometry().setFromPoints( points );
    projected_lines_geometries.push(line_geometry);
    const line = new THREE.Line( line_geometry, line_material );
    projected_lines.push(line);
    scene.add( line );
}


// scene.add(projected_faces_meshes[0]);

// projected_faces_meshes[0].position.z = 0;


// console.log(projected_faces_meshes[0]);


camera.position.z = 100;

const controls = new OrbitControls( camera, renderer.domElement );
controls.update();

//temporary line between faces test
const face_a = 10;
const face_b = 79;


const purple_line_material = new THREE.LineBasicMaterial( {color: 0x804F62} );
my_penteract.add_projected_line_between_faces(face_a,face_b,10,0.5) ;

var face_connector_geometries = []

for (c in my_penteract.get_projected_connectors()) {
    face_connector_geometries.push ( new THREE.BufferGeometry().setFromPoints( c));
}



// const purple_mesh_material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
// for (var index =0;index<50;index++) {
//     var temp_geometry = new THREE.SphereGeometry(5,8,8);
//     face_line_geometry.push(temp_geometry);
//     const sphere = new THREE.Sphere(purple_line_material, temp_geometry);
//     scene.add( sphere );
// }

// const face_line = new THREE.Line( face_line_geometry, purple_line_material );
// scene.add(face_line);

function animate() {
    requestAnimationFrame( animate );

    // for (const f of projected_faces_meshes) { 
    //     f.rotation.y -=0.005;
    // }

    //angleYZ -=0.5; 

    // rotate VW, WX, XY, YZ
    my_penteract.rotate (NAVIGATION.r5d.v,NAVIGATION.r5d.w,NAVIGATION.r5d.x,NAVIGATION.r5d.y,NAVIGATION.r5d.z);
    // my_penteract.get_projected_face(i); 
    // my_penteract.get_projected_line(i);
    for ( var face_index = 0; face_index < PENTERACT.penteract_faces.length; face_index++) {

        var projected_vertices = my_penteract.get_projected_face(face_index);

        //lets make two triangles from the faces
        const projected_vertix_pos = [ 
            projected_vertices[0],
            projected_vertices[1],
            projected_vertices[3],

            projected_vertices[3],
            projected_vertices[1],
            projected_vertices[2],
            ];

        var positions = [];


        let vertex_index = 0;
        for (const vertex of projected_vertix_pos) {
            positions.push(...vertex);

        }; 

 
        projected_faces_meshes[face_index].geometry.attributes.position.array.set (positions);

        projected_faces_meshes[face_index].geometry.attributes.position.needsUpdate = true;
 
    }

    

    for (var line_index=0; line_index< PENTERACT.penteract_lines.length; line_index++) {
        const points = my_penteract.get_projected_line(line_index);
        projected_lines[line_index].geometry.setFromPoints( points );;
        
    }



    // face_line_geometry.needsUpdate = true;

    controls.update();
    renderer.render( scene, camera );
}
animate();