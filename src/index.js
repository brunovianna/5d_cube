import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const penteract_vertices = [
	[-1.0, -1.0, -1.0, -1.0, -1.0],
	[1.0, -1.0, -1.0, -1.0, -1.0],
	[1.0, 1.0, -1.0, -1.0, -1.0],
	[-1.0, 1.0, -1.0, -1.0, -1.0],
	[-1.0, -1.0, 1.0, -1.0, -1.0],
	[1.0, -1.0, 1.0, -1.0, -1.0],
	[1.0, 1.0, 1.0, -1.0, -1.0],
	[-1.0, 1.0, 1.0, -1.0, -1.0],
	[-1.0, -1.0, -1.0, 1.0, -1.0],
	[1.0, -1.0, -1.0, 1.0, -1.0],
	[1.0, 1.0, -1.0, 1.0, -1.0],
	[-1.0, 1.0, -1.0, 1.0, -1.0],
	[-1.0, -1.0, 1.0, 1.0, -1.0],
	[1.0, -1.0, 1.0, 1.0, -1.0],
	[1.0, 1.0, 1.0, 1.0, -1.0],
	[-1.0, 1.0, 1.0, 1.0, -1.0],

	[-1.0, -1.0, -1.0, -1.0, 1.0],
	[1.0, -1.0, -1.0, -1.0, 1.0],
	[1.0, 1.0, -1.0, -1.0, 1.0],
	[-1.0, 1.0, -1.0, -1.0, 1.0],
	[-1.0, -1.0, 1.0, -1.0, 1.0],
	[1.0, -1.0, 1.0, -1.0, 1.0],
	[1.0, 1.0, 1.0, -1.0, 1.0],
	[-1.0, 1.0, 1.0, -1.0, 1.0],
	[-1.0, -1.0, -1.0, 1.0, 1.0],
	[1.0, -1.0, -1.0, 1.0, 1.0],
	[1.0, 1.0, -1.0, 1.0, 1.0],
	[-1.0, 1.0, -1.0, 1.0, 1.0],
	[-1.0, -1.0, 1.0, 1.0, 1.0],
	[1.0, -1.0, 1.0, 1.0, 1.0],
	[1.0, 1.0, 1.0, 1.0, 1.0],
	[-1.0, 1.0, 1.0, 1.0, 1.0],
];

const penteract_lines = [ //numbers represent the index of the vertices
    [0,1],
    [0,3],
    [0,4],
    [0,8],
    [0,16],
    [1,2],
    [1,5],
    [1,9],
    [1,17],
    [2,3],
    [2,6],
    [2,10],
    [2,18],
    [3,7],
    [3,11],
    [3,19],
    [4,5],
    [4,7],
    [4,12],
    [4,20],
    [5,6],
    [5,13],
    [5,21],
    [6,7],
    [6,14],
    [6,22],
    [7,15],
    [7,23],
    [8,9],
    [8,11],
    [8,12],
    [8,24],
    [9,10],
    [9,13],
    [9,25],
    [10,11],
    [10,14],
    [10,26],
    [11,15],
    [11,27],
    [12,13],
    [12,15],
    [12,28],
    [13,14],
    [13,29],
    [14,15],
    [14,30],
    [15,31],
    [16,17],
    [16,19],
    [16,20],
    [16,24],
    [17,18],
    [17,21],
    [17,25],
    [18,19],
    [18,22],
    [18,26],
    [19,23],
    [19,27],
    [20,21],
    [20,23],
    [20,28],
    [21,22],
    [21,29],
    [22,23],
    [22,30],
    [23,31],
    [24,25],
    [24,27],
    [24,28],
    [25,26],
    [25,29],
    [26,27],
    [26,30],
    [27,31],
    [28,29],
    [28,31],
    [29,30],
    [30,31],   
    ]
;

var penteract_faces = [ //numbers represent the index of the vertices
    [0,3,2,1],
    [0,4,5,1],
    [0,8,9,1],
    [0,16,17,1],
    [0,4,7,3],
    [0,8,11,3],
    [0,16,19,3],
    [0,8,12,4],
    [0,16,20,4],
    [0,16,24,8],
    [1,5,6,2],
    [1,9,10,2],
    [1,17,18,2],
    [1,9,13,5],
    [1,17,21,5],
    [1,17,25,9],
    [3,7,6,2],
    [3,11,10,2],
    [3,19,18,2],
    [2,10,14,6],
    [2,18,22,6],
    [2,18,26,10],
    [3,11,15,7],
    [3,19,23,7],
    [3,19,27,11],
    [4,7,6,5],
    [4,12,13,5],
    [4,20,21,5],
    [4,12,15,7],
    [4,20,23,7],
    [4,20,28,12],
    [5,13,14,6],
    [5,21,22,6],
    [5,21,29,13],
    [7,15,14,6],
    [7,23,22,6],
    [6,22,30,14], 
    [7,23,31,15],
    [8,11,10,9],
    [8,12,13,9],
    [8,24,25,9],
    [8,12,15,11],
    [8,24,27,11],
    [8,24,28,12],
    [9,13,14,10],
    [9,25,26,10],
    [9,25,29,13],
    [11,15,14,10],
    [11,27,26,10],
    [10,26,30,14],
    [11,27,31,15],
    [12,15,14,13],
    [12,28,29,13],
    [12,28,31,15],
    [13,29,30,14],
    [15,31,30,14],
    [16,19,18,17],
    [16,20,21,17],
    [16,24,25,17],
    [16,20,23,19],
    [16,24,27,19],
    [16,24,28,20],
    [17,21,22,18],
    [17,25,26,18],
    [17,25,29,21],
    [19,23,22,18],
    [19,27,26,18],
    [18,26,30,22],
    [19,27,31,23],
    [20,23,22,21],
    [20,28,29,21],
    [20,28,31,23],
    [21,29,30,22],
    [23,31,30,22],
    [24,27,26,25],
    [24,28,29,25],
    [24,28,31,27],
    [25,29,30,26],
    [27,31,30,26],
    [28,31,30,29]
    ];
    
const images = [
    "reymultok.png",
    "laocconok.png",
    "insuperabilis.png",
    "hobbes-leviathanok.png",
    "hobbes-leviathanfloatingok.png",
    "caballotroya copy.png",
    "against2.png"
];


function matmulvec(mat, vec) {
    if (mat[0].length != vec.length) return null;
    var out_vec = new Array(mat.length);
    for (var i = 0; i < mat.length; ++i) {
        out_vec[i] = 0;
        for (var j = 0; j < mat[i].length; ++j) {
            out_vec[i] += mat[i][j] * vec[j];
        }
    }
    return out_vec;
}


function rotate5dZW(angle, pt5d) {
	var rad = Math.PI / 180.0 * angle;
	var rotmat45 = [
		[1, 0, 0, 0, 0],
		[0, 1, 0, 0, 0],
		[0, 0, 1, 0, 0],
		[0, 0, 0, Math.cos(rad), -Math.sin(rad)],
		[0, 0, 0, Math.sin(rad), Math.cos(rad)],
	];

	return matmulvec(rotmat45, pt5d);
}

function rotate5dYZ(angle, pt5d) {
	var rad = Math.PI / 180.0 * angle;
	var rotmat45 = [
		[1, 0, 0, 0, 0],
		[0, 1, 0, 0, 0],
		[0, 0, 1, 0, 0],
		[0, 0, 0, Math.cos(rad), -Math.sin(rad)],
		[0, 0, 0, Math.sin(rad), Math.cos(rad)],
	];

	return matmulvec(rotmat45, pt5d);
}

function rotate5dXY(angle, pt5d) {
	var rad = Math.PI / 180.0 * angle;
	var rotmat45 = [
		[1, 0, 0, 0, 0],
		[0, 1, 0, 0, 0],
		[0, 0, Math.cos(rad), -Math.sin(rad), 0],
		[0, 0, Math.sin(rad), Math.cos(rad), 0],
		[0, 0, 0, 0, 1],
	];

	return matmulvec(rotmat45, pt5d);
}

function rotate5dWX(angle, pt5d) {
	var rad = Math.PI / 180.0 * angle;
	var rotmat45 = [
		[1, 0, 0, 0, 0],
		[0, Math.cos(rad), -Math.sin(rad), 0, 0],
		[0, Math.sin(rad), Math.cos(rad), 0, 0],
		[0, 0, 0, 1, 0],
		[0, 0, 0, 0, 1],
	];
	return matmulvec(rotmat45, pt5d);
}

function rotate5dVW(angle, pt5d) {
	var rad = Math.PI / 180.0 * angle;
	var rotmat45 = [
		[Math.cos(rad), -Math.sin(rad), 0, 0, 0],
		[Math.sin(rad), Math.cos(rad), 0, 0, 0],
		[0, 0, 1, 0, 0],
		[0, 0, 0, 1, 0],
		[0, 0, 0, 0, 1],
	];


	return matmulvec(rotmat45, pt5d);
}

function stereographic_project(d, pt) {
	var last_elem = pt[pt.length - 1];
	var target_len = pt.length - 1;
	var projmat = createProjectMat(pt.length, target_len, d, pt);
	var projected_pt = matmulvec(projmat, pt);
	return projected_pt;
}

function createProjectMat(n, m, d, pt) {
	var mat = new Array(m);
	for (var i = 0; i < m; ++i) {
		mat[i] = new Array(n);
		for (var j = 0; j < n; ++j) {
			if (j == i) {
				mat[i][j] = 1.0 / ((d *1.0) - pt[pt.length - 1]);
			} else {
				mat[i][j] = 0.0;
			}
		}
	}
	return mat;
}

function draw_face (points, mat) {
    var face = new THREE.shape(points);
    var geometry = new THREE.ShapeGeometry( face );
    var mesh = new THREE.Mesh( geometry, mat ) ;
    scene.add( mesh );
}

var angleYZ = 0;
var angleXY = 0;
var angleWX = 0;
var angleVW = 0;

var zoom = 200;

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

var scaler = 190.0 * ( window.innerWidth / 1024) * (zoom /  window.innerWidth);

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

for (const penteract_faces_vertices of penteract_faces) {
    var projected_obj = [];
    var temp_geometry = new THREE.BufferGeometry();

    var projected_vertices = []
    for (const penteract_faces_vertex of penteract_faces_vertices) {
        var temp_pt = stereographic_project(2, penteract_vertices[penteract_faces_vertex]);
        temp_pt[0]  *= scaler; 
        temp_pt[1]  *= scaler; 
        temp_pt[2]  *= scaler; 
        
        projected_vertices.push ( [temp_pt[0],temp_pt[1],temp_pt[2]]); //temp_pt has 4 elements the last one is useless
    }


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
    const positionNumComponents = 3;

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

for (const oneline of penteract_lines) {

    const points = [];

    //first vertex of the line
    var temp_pt = stereographic_project(2, penteract_vertices[oneline[0]]);
    temp_pt[0]  *= scaler; 
    temp_pt[1]  *= scaler; 
    temp_pt[2]  *= scaler; 

    points.push( new THREE.Vector3( temp_pt[0], temp_pt[1], temp_pt[2] ) );
    
    //second vertex of the line
    temp_pt = stereographic_project(2, penteract_vertices[oneline[1]]);
    temp_pt[0]  *= scaler; 
    temp_pt[1]  *= scaler; 
    temp_pt[2]  *= scaler; 

    points.push( new THREE.Vector3( temp_pt[0], temp_pt[1], temp_pt[2] ) );
    
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

function animate() {
    requestAnimationFrame( animate );


    for (const f of projected_faces_meshes) {
        f.rotation.y -=0.005;
    }

    for (const l of projected_lines) {
        l.rotation.y -=0.005;
    }

    controls.update();
    renderer.render( scene, camera );
}
animate();