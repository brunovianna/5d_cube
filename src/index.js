import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
//import { OrbitControls } from './OrbitControls.js';

import * as PENTERACT from './penteract.js';

import * as NAVIGATION from './navigation.js';

import * as DATA from './data.js';

import { Line } from 'three';

var zoom = 200;

var scaler = 190.0 * ( window.innerWidth / 1024) * (zoom /  window.innerWidth);

const my_penteract = new PENTERACT.Penteract(scaler);

NAVIGATION.create_navigation();

// const canvas_div = document.getElementById('canvas_div');
// const canvas = document.getElementById('canvas');

// canvas_div.style.position = "fixed";
// canvas_div.style.width  = window.innerWidth;
// canvas_div.style.height = window.innerHeight ;
// canvas_div.style.pointerEvents = "none";

// canvas.position = "fixed";
// canvas.width  = window.innerWidth;
// canvas.height = window.innerHeight;
// canvas.pointerEvents = "none";


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();

const renderer_div = document.getElementById('renderer_div');
renderer_div.style.position = "fixed";
renderer_div.style.width  = window.innerWidth;
renderer_div.style.height = window.innerHeight ;

renderer.setSize( window.innerWidth, window.innerHeight );
renderer_div.appendChild( renderer.domElement );

//document.body.appendChild( renderer.domElement );

window.addEventListener('resize', function () {
    // canvas.width  = window.innerWidth; 
    // canvas.height = window.innerHeight ;
    renderer.setSize( window.innerWidth, window.innerHeight );
}); 

// const [fromx, fromy] = NAVIGATION.get_element_center('question_mark');
// const [tox, toy] = NAVIGATION.get_element_center('instructions_box');


// NAVIGATION.draw_line( canvas.getContext('2d'), fromx,fromy,tox,toy,'yellow');
// NAVIGATION.draw_line( canvas.getContext('2d'), 30,632,286,338,'yellow');
// NAVIGATION.draw_line( canvas.getContext('2d'), 30,632,150,100,'yellow');




var loader = new THREE.TextureLoader();
const cat = require('./textures/cat.png') ;
var texture = loader.load( cat);

const image_textures = []
const image_materials = []

for (var i of DATA.images) {
    var t = '';
    var f = '';
    if (i==="") {
        t = texture;
    } else {
        f = require('./textures/'+i);
        t = loader.load(f);
    }
    t.name = i;
    image_textures.push(t);
    const m = new THREE.MeshBasicMaterial( { map: t, transparent: true, opacity: 1, side:THREE.DoubleSide } );
    m.name = i;
    m.color.set (0xcccccc); //a bit darker so it can be highlighted on mouseover
    image_materials.push(m);
    
}

const number_materials = [];
var number_material_flag = false;

for (var i=0;i<80;i++) {
    var s = "0" + i;
    s = s.substr(s.length-2);
    const f = require('./textures/'+s+'.png');
    const t = loader.load(f);
    const m = new THREE.MeshBasicMaterial( { map: t, transparent: true, opacity: 1, side:THREE.DoubleSide } );
    m.color.set (0xcccccc); //a bit darker so it can be highlighted on mouseover
    m.name = i;
    number_materials.push(m);
}




const cat_material = new THREE.MeshBasicMaterial( { map: texture, transparent: true, opacity: 1, side:THREE.DoubleSide } );
 


//creating projected faces geometry

var projected_faces_geometries  = [];
var projected_faces_meshes  = [];


const projected_uvs = [
    0,0,
    0,1,
    1,1,
    1,1,
    1,0,
    0,0
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

// we go in reverse because the first faces are "hidden" in the penteract

for (let face_index = PENTERACT.penteract_faces.length -1; face_index>=0; face_index--) {

    var temp_geometry = new THREE.PlaneGeometry(1,1);

    var projected_vertices = my_penteract.get_projected_face(face_index);



  
    const projected_vertix_pos = [ 
        projected_vertices[1],
        projected_vertices[0], 
        projected_vertices[2],
        projected_vertices[3],
    ];

    var positions = [];


    for (const vertex of projected_vertix_pos) {
            positions.push(...vertex);
      }


    //now we can set the position attribute

    temp_geometry.setAttribute(
        'position',
        new THREE.BufferAttribute(new Float32Array(positions), positionNumComponents));

    // temp_geometry.computeVertexNormals(); // please compute from the face direction i hope this works

    // temp_geometry.setAttribute(
    //     'normal',
    //     new THREE.BufferAttribute(new Float32Array(projected_normals), positionNumComponents));



    const uvNumComponents = 2;
    // temp_geometry.setAttribute(
    //     'uv',
    //     new THREE.BufferAttribute(new Float32Array(projected_uvs), uvNumComponents));

    projected_faces_geometries.push(temp_geometry);

    //reverse order just to make the textures appear on top
    
    var temp_face =  new THREE.Mesh(temp_geometry, image_materials[images_index]);
    temp_face.name  = images_index;
    projected_faces_meshes.push(temp_face);
    scene.add(temp_face);
    images_index++;

}




// now lets make the edges (lines)
const line_material = new THREE.LineBasicMaterial( { color: 0xf9c41e} );

var projected_lines = [];

for (var line_index=0; line_index< PENTERACT.penteract_lines.length; line_index++) {

    
    const points = my_penteract.get_projected_line(line_index);

    const line_geometry = new THREE.BufferGeometry().setFromPoints( points );
    const line = new THREE.Line( line_geometry, line_material );
    projected_lines.push(line);
    scene.add( line );
}


// scene.add(projected_faces_meshes[0]);

// projected_faces_meshes[0].position.z = 0;


// console.log(projected_faces_meshes[0]);


camera.position.z = 100;
camera.position.x = -100;

const controls = new OrbitControls( camera, renderer.domElement );
controls.update();

let raycaster = new THREE.Raycaster();
let last_pointer = new THREE.Vector2();
let intersected;


const color_faces = {};
color_faces ["1"] = [68,69,70,71,72,73,74,75,76,77,78,79];
color_faces ["8"] = [68,69,70,71,72,73,74,75,76,77,78,79];
color_faces["2"] = [32,33,34,35,36,37,38,39,40,41,42,43];
color_faces["9"] = [32,33,34,35,36,37,38,39,40,41,42,43];
color_faces["3"] = [56,57,58,59,60,61,62,63,64,65,66,67];
color_faces["10"] = [56,57,58,59,60,61,62,63,64,65,66,67];
color_faces["4"] = [44,45,46,47,48,49,50,51,52,53,54,55];
color_faces["11"] = [44,45,46,47,48,49,50,51,52,53,54,55];
color_faces["5"] = [20,21,22,23,24,25,26,27,28,29,30,31,32];
color_faces["12"] = [20,21,22,23,24,25,26,27,28,29,30,31,32];
color_faces["6"] = [8,9,10,11,12,13,14,15,16,17,18,19];
color_faces["13"] = [8,9,10,11,12,13,14,15,16,17,18,19];
color_faces["7"] = [0,1,2,3,4,5,6,7];
color_faces["14"] = [0,1,2,3,4,5,6,7];

const num_segments = 30;
const jaggedness = 0;
const cylinder_radius = 0.8;

// const purple_line_material = new THREE.LineBasicMaterial( {color: 0x804F62} );
// my_penteract.add_connector_2_faces(face_a,face_b,num_segments,0.02, 0.2) ;
// my_penteract.add_connector_2_faces(0,10,num_segments,0.02,0.4) ;

// my_penteract.add_connector_multi([0,75,22,40],3,0.2);


var connector_faces = {}
var connector_lists = {}

//c cohesion



connector_faces ["c"] =  [8,68,49,36,30,6,1,65];
connector_lists["c"] = [0,6];
my_penteract.add_connector_2_faces (8,68,num_segments,jaggedness,0); //hell to leviathan
my_penteract.add_connector_2_faces (68,49,num_segments,jaggedness,0); // leviathan to horizonplan/hyperbolic space
my_penteract.add_connector_2_faces (49,36,num_segments,jaggedness,0); // horizonplan/hyperbolic space to fungi
my_penteract.add_connector_2_faces (36,30,num_segments,jaggedness,0); // fungi to niemand
my_penteract.add_connector_2_faces (30,6,num_segments,jaggedness,0); // niemand to miseenalarm/giotto
my_penteract.add_connector_2_faces (6,1,num_segments,jaggedness,0); // miseenalarm/giotto to sphere/loop
my_penteract.add_connector_2_faces (1,65,num_segments,jaggedness,0); // sphere/loop to narcisse

//t time
connector_faces["t"] = [44,13,33,58,73,31,2];
connector_lists["t"] = [7,12];
my_penteract.add_connector_2_faces (44,13,num_segments,jaggedness,0.2); //multishperes to metempsy
my_penteract.add_connector_2_faces (13,33,num_segments,jaggedness,0.2); // metempsy to root/aspens
my_penteract.add_connector_2_faces (33,58,num_segments,jaggedness,0.2); // root/aspens to familty tree/blood
my_penteract.add_connector_2_faces (58,73,num_segments,jaggedness,0.2); // familty tree/blood to troian horse
my_penteract.add_connector_2_faces (73,31,num_segments,jaggedness,0.2); // troian horse to hauser
my_penteract.add_connector_2_faces (31,2,num_segments,jaggedness,0.2); // hauser to cross

//w will
connector_faces["w"] = [47,7,22,38,16,67,74,4];
connector_lists["w"] = [13,19];
my_penteract.add_connector_2_faces (47,7,num_segments,jaggedness,0.55); //patterns to pudridero
my_penteract.add_connector_2_faces (7,22,num_segments,jaggedness,0.55); // pudridero to singing mass
my_penteract.add_connector_2_faces (22,38,num_segments,jaggedness,0.55); // singing mass to cordiscerps
my_penteract.add_connector_2_faces (38,16,num_segments,jaggedness,0.55); // cordiscerps to almauno
my_penteract.add_connector_2_faces (16,67,num_segments,jaggedness,0.55); // a  lma una to vanishing point /percepteur
my_penteract.add_connector_2_faces (67,74,num_segments,jaggedness,0.55); // vanishing point /percepteur to reyuno/kingone
my_penteract.add_connector_2_faces (74,4,num_segments,jaggedness,0.55); //  reyuno/kingone to line



var cylinders = [];


var p_connectors = my_penteract.get_projected_connectors();

var cylinder_mesh;

var point_a = new THREE.Vector3(0,0,0);
var point_b = new THREE.Vector3(0,0,0);


var connector_index = 0;
for (var c of p_connectors) {
    for (var point_index in c) {
        if (point_index < (c.length - 1))  { //last point doesn't get drawn, it is just a reference to point the last before
           
            point_a.set(c[point_index][0],c[point_index][1],c[point_index][2]);
            point_b.set(c[Number(point_index)+1][0],c[Number(point_index)+1][1],c[Number(point_index)+1][2]);

            var cylinder_height = point_a.distanceTo(point_b);

            const g = new THREE.CylinderGeometry( cylinder_radius, cylinder_radius, cylinder_height, 6 );

            cylinder_mesh = new THREE.Mesh( g, my_penteract.connector_materials[connector_index][point_index] );
            const cylinder = new THREE.Group();
            cylinder.add(cylinder_mesh); //just so we can deal with the mesh as an object
            cylinder.position.set (point_a.x,point_a.y,point_a.z);
            //
            // cylinder.up.set (0,0,1);
            point_a.set(c[point_index][0],c[point_index][1],c[point_index][2]);
            point_b.set(c[Number(point_index)+1][0],c[Number(point_index)+1][1],c[Number(point_index)+1][2]);

            cylinder_height = point_a.distanceTo(point_b);
            cylinder.position.set (point_a.x,point_a.y,point_a.z);

            cylinder.lookAt(point_b.x,point_b.y,point_b.z);
            cylinder.rotateY(Math.PI/2);
            cylinder.rotateZ(Math.PI/2);
            //   console.log(cylinder_height);
            cylinder.translateY(cylinder_height/2);

            //cylinder.setRotationFromAxisAngle(new THREE.Vector3(1,0,0), Math.PI/2);
            cylinders.push(cylinder);
            scene.add(cylinder);
            
        }
            
    }
    connector_index++;
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

function update_geometries() {

    my_penteract.set_rotation (NAVIGATION.r5d.v,NAVIGATION.r5d.w,NAVIGATION.r5d.x,NAVIGATION.r5d.y,NAVIGATION.r5d.z);
    my_penteract.set_scale (NAVIGATION.r5d.scale);
    
    //update faces
    for ( var face_index = 0; face_index < PENTERACT.penteract_faces.length; face_index++) {

        var projected_vertices = my_penteract.get_projected_face(face_index);

        const projected_vertix_pos = [ 
            projected_vertices[1],
            projected_vertices[0], 
            projected_vertices[2],
            projected_vertices[3],
        ];
    
        var positions = [];
    
    
        for (const vertex of projected_vertix_pos) {
                positions.push(...vertex);
          }



 
        projected_faces_meshes[face_index].geometry.attributes.position.array.set (positions);

        if (NAVIGATION.interface_flags.color_faces !== "") {
            if (color_faces[NAVIGATION.interface_flags.color_faces].includes(face_index)) {
                projected_faces_meshes[face_index].visible = true;
            } else {
                projected_faces_meshes[face_index].visible = false;
            }
        } else {
            projected_faces_meshes[face_index].visible = true;
            
        }

        projected_faces_meshes[face_index].geometry.attributes.position.needsUpdate = true;
        projected_faces_meshes[face_index].needsUpdate = true;
    }


    //update lines/edges
    for (var line_index=0; line_index< PENTERACT.penteract_lines.length; line_index++) {
        const points = my_penteract.get_projected_line(line_index);
        var position = [points[0].x,points[0].y,points[0].z,points[1].x,points[1].y,points[1].z ];
        projected_lines[line_index].geometry.attributes.position.array.set (position);
        projected_lines[line_index].geometry.attributes.position.needsUpdate = true;
        // projected_lines[line_index].geometry.setFromPoints( points );;        

    }



    //update connectors
    const connector_array = my_penteract.get_projected_connectors();

    //erase old cylinders
    for (var c of cylinders) {
        c.children[0].geometry.dispose();
    }

    
   
    var begin_connector;
    var end_connector;

    if (NAVIGATION.interface_flags.show_connectors==="") {
        begin_connector = 0;
        end_connector = connector_array.length -1;
    } else {
        begin_connector = connector_lists[NAVIGATION.interface_flags.show_connectors][0];
        end_connector = connector_lists[NAVIGATION.interface_flags.show_connectors][1];
    } 

    var cylinder_index = 0;

    for (var index = 0; index < connector_array.length ; index++) {
        var c = connector_array[index];


        for (var point_index in c) {
            if (point_index < (c.length - 1))  { //last point doesn't get drawn, it is just a reference to point the last before

                //var cylinder_index = parseFloat(index*connector_array[index].length) + parseFloat(point_index);



                //cylinders[cylinder_index].children[0].geometry.dispose();

                point_a.set(c[point_index][0],c[point_index][1],c[point_index][2]);
                point_b.set(c[Number(point_index)+1][0],c[Number(point_index)+1][1],c[Number(point_index)+1][2]);
    
                cylinder_height = point_a.distanceTo(point_b);
    

                const new_cyl_g = new THREE.CylinderGeometry( cylinder_radius, cylinder_radius, cylinder_height, 6 );
                cylinders[cylinder_index].children[0].geometry = new_cyl_g;

                cylinders[cylinder_index].position.set (point_a.x,point_a.y,point_a.z);
                cylinders[cylinder_index].lookAt(point_b);
                cylinders[cylinder_index].rotateY(Math.PI/2);
                cylinders[cylinder_index].rotateZ(Math.PI/2);
                cylinders[cylinder_index].translateY(cylinder_height/2);

                if ((index >= begin_connector)&&(index<=end_connector)) {
                    cylinders[cylinder_index].visible = true;
                } else {
                    cylinders[cylinder_index].visible = false;
                }

                cylinder_index++;



            }
        }
    }


    //turn on/off connectors c t w
    if (NAVIGATION.interface_flags.show_connectors !== "") {

        //faces
        var connectors_on = connector_faces[NAVIGATION.interface_flags.show_connectors] ;
        for (var index =0; index<PENTERACT.penteract_faces.length; index++) {
            if (connectors_on.includes(index)===true) {
                projected_faces_meshes[index].visible = true;
            } else {
                projected_faces_meshes[index].visible = false;
            }
            projected_faces_meshes[index].needsUpdate = true;
        }

        //connectors


    } 

}


function iterate_all_rotations() {
    if (NAVIGATION.r5d.z === 270) {
        NAVIGATION.r5d.z = 0;
        if (NAVIGATION.r5d.y === 270) {
            NAVIGATION.r5d.y = 0;
            if (NAVIGATION.r5d.x === 270) {
                NAVIGATION.r5d.x = 0;
                if (NAVIGATION.r5d.w === 270) {
                    NAVIGATION.r5d.w = 0;
                    if (NAVIGATION.r5d.v === 270) {
                        NAVIGATION.r5d.v = 0;
                    } else {
                        // my_penteract.v += 90;
                        NAVIGATION.r5d.v += 90;
                    }
                } else {
                    // my_penteract.w +- 90;
                    NAVIGATION.r5d.w += 90;
                }
            } else {
                // my_penteract.x += 90;
                NAVIGATION.r5d.x += 90;
            }
        } else {
            // my_penteract.y += 90;
            NAVIGATION.r5d.y += 90;
        }
    } else {
        // my_penteract.z += 90;
        NAVIGATION.r5d.z += 90;
    }

}

function animate() {
    requestAnimationFrame( animate );


    if (NAVIGATION.interface_flags.update_flag===true) {
        update_geometries();
        NAVIGATION.interface_flags.update_flag = false;
        console.log("["+my_penteract.v+", "+my_penteract.w+", "+my_penteract.x+", "+my_penteract.y+", "+my_penteract.z+"] "+my_penteract.scale);
        
    }

    if (NAVIGATION.interface_flags.iterate_all_rotations===true) {
        iterate_all_rotations();
        update_geometries();
        NAVIGATION.interface_flags.iterate_all_rotations = false;
        console.log("["+my_penteract.v+", "+my_penteract.w+", "+my_penteract.x+", "+my_penteract.y+", "+my_penteract.z+"]");

    }


    if (NAVIGATION.interface_flags.toggle_numbers===true) {
        NAVIGATION.interface_flags.toggle_numbers = false;
        if (number_material_flag===true) {
            for (var i in projected_faces_meshes) {
                projected_faces_meshes[i].material = image_materials[i];
                projected_faces_meshes[i].material.needsUpdate = true;
            }
            number_material_flag = false;
        } else {
            for (var i in projected_faces_meshes) {
                projected_faces_meshes[i].material = number_materials[i];
                projected_faces_meshes[i].material.needsUpdate = true;
            }
            number_material_flag = true;
        }
    }
    
    if (NAVIGATION.interface_flags.toggle_faces === true ) {
        NAVIGATION.interface_flags.toggle_faces = false;
        if (projected_faces_meshes[0].visible === true) {
            for (var m of projected_faces_meshes) {
                m.visible = false;
            }
        } else {
            for (var m of projected_faces_meshes) {
                m.visible = true;
            }
        }
    }

    //raytracing/picking faces
    if (!last_pointer.equals (NAVIGATION.pointer)) {

        last_pointer.copy (NAVIGATION.pointer);
        raycaster.setFromCamera( NAVIGATION.pointer, camera );

        const intersects = raycaster.intersectObjects( scene.children );


        if ( intersects.length > 0 ) {

            //find nearest visible object
            let interesting_object;
            for (var o of intersects) {
                if (o.object.material !== line_material)   {
                    if (o.object.visible) {
                        interesting_object = o;
                        break;
                    }
                }
            }

            if (interesting_object) {    
                if ( intersected != interesting_object.object ) {

                    if ( intersected ) intersected.material.color.set( 0xcccccc);

                    intersected = interesting_object.object;
                    intersected.material.color.set ( 0xffffff);

                    var image_number = Number(intersected.name);

                    document.getElementById("card_box").style.visibility = "visible";
                    document.getElementById("card_title").innerHTML = DATA.cards[image_number].title;
                    document.getElementById("card_content").innerHTML = DATA.cards[image_number].text;
                }
            }


        } else {

            if ( intersected ) intersected.material.color.set (0xcccccc);


            document.getElementById("card_box").style.visibility = "hidden";
            intersected = null;

        }



    }


    

    controls.update();
    renderer.render( scene, camera );
}


//initial position
NAVIGATION.r5d.v = -0.0;
NAVIGATION.r5d.w = -180.0;
NAVIGATION.r5d.x = 5.0;
NAVIGATION.r5d.y = -305.0;
NAVIGATION.r5d.z = 65.0;
NAVIGATION.r5d.scale = 0.92;
update_geometries();

animate();