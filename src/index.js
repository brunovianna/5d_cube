import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

import * as PENTERACT from './penteract.js';

import * as NAVIGATION from './navigation.js';
import { Line } from 'three';

var zoom = 200;

var scaler = 190.0 * ( window.innerWidth / 1024) * (zoom /  window.innerWidth);

const my_penteract = new PENTERACT.Penteract(scaler);

NAVIGATION.create_navigation();



const images = [
    "01shered.png", //00
    "02ciculo.png", //1
    "03cross.png", //2
    "04tri.png", //3 
    "05line.png", //4
    "06dot.png", //5
    "07giotto.png", //6
    "08udridero.png", //7
    "09hell.png", //8 
    "10CircleofBaccioBaldini.png", //9
    "11papanachtok.png", //10
    "12coatlcue.png", //1
    "13auroraophanim.png", //2
    "14inner.png", //3 
    "15gabriel.png", //4
    "16trifonisneuvoldor.png", //5
    "17almauno.png", //6
    "18legion.png", //7
    "19cielo.png", //8 
    "20esfera.png", //9
    "21masajco.png", //20
    "22monstruo.png", //1
    "23singingmass.png", //2
    "24semiarchiboldo.png", //3 
    "25man.png", //4
    "26wicker.png", //5
    "27nation.png", //6
    "28cirmanr.png", //7
    "29wildmannn.png", //8 
    "30niemandoutis.png", //9
    "31niemand.png", //30
    "32hauser.png", //1
    "33matervivac.png", //2
    "34aspens.png", //3 
    "35hormiguerac.png", //4
    "36dragon.png", //5
    "37fungi.png", //6
    "38eelcatfish.png", //7
    "39cordiseps.png", //8 
    "40pepino.png", //9
    "41microfosil.png", //40
    "42endling.png", //1
    "43higado.png", //2
    "44fungi.png", //3 
    "45spheram3.png", //4
    "46cincod.png", //5
    "47mandelbroot.png", //6
    "48sunflower.png", //7
    "49helicoid2.png", //8 
    "50hyperbolicspace.png", //9
    "51internet.png", //50
    "52hiperbole.png", //1
    "53doblez.png", //2
    "54bezoar2.png", //3 
    "55metatorion.png", //4
    "56onfalo.png", //5
    "57romawolf.png", //6
    "58daemon.png", //7
    "59familytree.png", //8 
    "60nasos.png", //9
    "61flygia.png", //60
    "62pneuma.png", //1
    "63hercules.png", //2
    "64sade.png", //3  
    "65monoespejo.png", //4
    "66narciso.png", //5
    "67vitruvio.png", //6
    "68perpecteur.png", //7
    "69hobbes-leviathan.png", //8 
    "70against2.png", //9
    "71flemishstate.png", //70
    "72lsolo.png", //1
    "73colossobn.png", //2
    "74caballotroya.png", //3 
    "75reyone.png", //4
    "76stomach.png", //5
    "77laocconok.png", //6
    "78reymultok.png", //7
    "79laocconup.png", //8 
    "80laooconpriest.png", //9
];




const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
window.addEventListener('resize', function () {
    renderer.setSize( window.innerWidth, window.innerHeight );
});


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

const controls = new OrbitControls( camera, renderer.domElement );
controls.update();

//temporary line between faces test
const face_a = 10;
const face_b = 79;

const num_segments = 10;

const purple_line_material = new THREE.LineBasicMaterial( {color: 0x804F62} );
my_penteract.add_connector(face_a,face_b,num_segments,0.02) ;
my_penteract.add_connector(0,10,num_segments,0.02) ;

var connectors = []


// for (var c of my_penteract.get_projected_connectors()) {
//     const g = new THREE.BufferGeometry().setFromPoints( c);
//     const connector = new THREE.Line( g, purple_line_material );
//     connectors.push(connector);
//     scene.add(connector);

// }

var cylinders = [];
const cylinder_materials = [];

for (var n =0;n<num_segments;n++) {
    const cylinder_material = new THREE.MeshBasicMaterial({color: 0x009900});
    cylinder_material.color.r = 0.1 + 0.08 * n;
    cylinder_material.color.b = 0.6 - 0.08 * n;
    cylinder_materials.push(cylinder_material);

}


var p_connectors = my_penteract.get_projected_connectors();

var cylinder_mesh;

var point_a = new THREE.Vector3(0,0,0);
var point_b = new THREE.Vector3(0,0,0);

for (var c of p_connectors) {
    for (var point_index in c){
        if (point_index < (c.length - 1))  { //last point doesn't get drawn, it is just a reference to point the last before
           
            point_a.set(c[point_index][0],c[point_index][1],c[point_index][2]);
            point_b.set(c[Number(point_index)+1][0],c[Number(point_index)+1][1],c[Number(point_index)+1][2]);

            var cylinder_height = point_a.distanceTo(point_b);

            const g = new THREE.CylinderGeometry( 1, 1, cylinder_height, 6 );

            cylinder_mesh = new THREE.Mesh( g, cylinder_materials[point_index] );
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

        projected_faces_meshes[face_index].geometry.attributes.position.needsUpdate = true;
 
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

    var cylinder_index = 0;

    for (var index in connector_array) {
        var c = connector_array[index];
        for (var point_index in c) {
            if (point_index < (c.length - 1))  { //last point doesn't get drawn, it is just a reference to point the last before

                //var cylinder_index = parseFloat(index*connector_array[index].length) + parseFloat(point_index);

                cylinders[cylinder_index].children[0].geometry.dispose();

                point_a.set(c[point_index][0],c[point_index][1],c[point_index][2]);
                point_b.set(c[Number(point_index)+1][0],c[Number(point_index)+1][1],c[Number(point_index)+1][2]);
    
                cylinder_height = point_a.distanceTo(point_b);
    

                const new_cyl_g = new THREE.CylinderGeometry( 1, 1, cylinder_height, 6 );
                cylinders[cylinder_index].children[0].geometry = new_cyl_g;

                cylinders[cylinder_index].position.set (point_a.x,point_a.y,point_a.z);
                cylinders[cylinder_index].lookAt(point_b);
                cylinders[cylinder_index].rotateY(Math.PI/2);
                cylinders[cylinder_index].rotateZ(Math.PI/2);
                cylinders[cylinder_index].translateY(cylinder_height/2);

                cylinder_index++;

            }
        }
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


    if (NAVIGATION.r5d.update_flag===true) {
        update_geometries();
        NAVIGATION.r5d.update_flag = false;
        console.log("["+my_penteract.v+", "+my_penteract.w+", "+my_penteract.x+", "+my_penteract.y+", "+my_penteract.z+"] "+my_penteract.scale);
        
    }

    if (NAVIGATION.r5d.iterate_all_rotations===true) {
        iterate_all_rotations();
        update_geometries();
        NAVIGATION.r5d.iterate_all_rotations = false;
        console.log("["+my_penteract.v+", "+my_penteract.w+", "+my_penteract.x+", "+my_penteract.y+", "+my_penteract.z+"]");

    }


    if (NAVIGATION.r5d.toggle_numbers===true) {
        NAVIGATION.r5d.toggle_numbers = false;
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
    


    controls.update();
    renderer.render( scene, camera );
}


//initial position
NAVIGATION.r5d.w = -180.0;
NAVIGATION.r5d.x = -155.0;
NAVIGATION.r5d.y = 60.0;
NAVIGATION.r5d.z = 60.0;
NAVIGATION.r5d.scale = 0.83;
update_geometries();

animate();