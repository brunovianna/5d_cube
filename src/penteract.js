import * as THREE from 'three';
import { Points } from 'three';

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

function stereographic_project(d, pt) {
	var last_elem = pt[pt.length - 1];
	var target_len = pt.length - 1;
	var projmat = createProjectMat(pt.length, target_len, d, pt);
	var projected_pt = matmulvec(projmat, pt);
	return projected_pt;
}


function rotate5dZV(angle, pt5d) {
	var rad = Math.PI / 180.0 * angle;
	var rotmat45 = [
		[Math.cos(rad), 0, 0, 0, -Math.sin(rad)],
		[0, 1, 0, 0, 0],
		[0, 0, 1, 0, 0],
		[0, 0, 0, 1, 0],
		[Math.sin(rad), 0, 0, 0, Math.cos(rad)],
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
 
class Penteract  {
    constructor (sc) {
        this.vertices = penteract_vertices.slice(); //thats how  you copy an array in js
        this.scaler = sc;
        this.connectors = [];
    }

    rotate (VW, WX, XY, YZ, ZV) {

        for (var v in this.vertices) {
            var rotated_pt = rotate5dVW(VW, this.vertices[v]);
            rotated_pt = rotate5dWX(WX,rotated_pt);
            rotated_pt = rotate5dXY(XY,rotated_pt);
            rotated_pt = rotate5dYZ(YZ,rotated_pt);
            this.vertices[v] = rotate5dZV(ZV,rotated_pt);
        }



        for (var i in this.connectors) {
            for (var j in this.connectors[i]) {
                var rotated_pt = rotate5dVW(VW, this.connectors[i][j]);
                rotated_pt = rotate5dWX(WX,rotated_pt);
                rotated_pt = rotate5dXY(XY,rotated_pt);
                rotated_pt = rotate5dYZ(YZ,rotated_pt);
                this.connectors[i][j] = rotate5dZV(ZV,rotated_pt);
            }
        }

    }

    set_rotation (VW, WX, XY, YZ, ZV) {
        for (var index =0;index<penteract_vertices.length;index++) { 

            var rotated_pt = rotate5dVW(VW, penteract_vertices[index]);
            rotated_pt = rotate5dWX(WX,rotated_pt);
            rotated_pt = rotate5dXY(XY,rotated_pt);
            rotated_pt = rotate5dYZ(YZ,rotated_pt); 
            this.vertices[index] = rotate5dZV(ZV,rotated_pt);

        }
    }


    get_projected_face (face_index) {
        var projected_vertices = [];
        const penteract_faces_vertices = penteract_faces[face_index];

        for (const penteract_faces_vertex of penteract_faces_vertices) {
            var temp_pt = stereographic_project(2, this.vertices[penteract_faces_vertex]);
            temp_pt[0]  *= this.scaler; 
            temp_pt[1]  *= this.scaler; 
            temp_pt[2]  *= this.scaler; 
            
            projected_vertices.push ( [temp_pt[0],temp_pt[1],temp_pt[2]]); //temp_pt has 4 elements the last one is useless
        
        }
        
        return projected_vertices;
        
    }

    get_projected_line(line_index) {
        var projected_points = [];
        //first vertex of the line
        var temp_pt = stereographic_project(2, this.vertices[penteract_lines[line_index][0]]);
        temp_pt[0]  *= this.scaler; 
        temp_pt[1]  *= this.scaler; 
        temp_pt[2]  *= this.scaler; 

        projected_points.push( new THREE.Vector3( temp_pt[0], temp_pt[1], temp_pt[2] ) );
        
        //second vertex of the line
        temp_pt = stereographic_project(2, this.vertices[penteract_lines[line_index][1]]);
        temp_pt[0]  *= this.scaler; 
        temp_pt[1]  *= this.scaler; 
        temp_pt[2]  *= this.scaler; 

        projected_points.push( new THREE.Vector3( temp_pt[0], temp_pt[1], temp_pt[2] ) );

        return (projected_points);

    }
    
    add_connector (face_a, face_b, num_points, jaggedness) {

        //jaggedness 0 (not jagged) to 1 (a lot)

        var middle_face_a = []
        var middle_face_b = []

        var connector_points = [];
        var steps = [];

        middle_face_a[0] = (this.vertices[penteract_faces[face_a][0]][0] + this.vertices[penteract_faces[face_a][2]][0])/2;
        middle_face_a[1] = (this.vertices[penteract_faces[face_a][0]][1] + this.vertices[penteract_faces[face_a][2]][1])/2;
        middle_face_a[2] = (this.vertices[penteract_faces[face_a][0]][2] + this.vertices[penteract_faces[face_a][2]][2])/2;
        middle_face_a[3] = (this.vertices[penteract_faces[face_a][0]][3] + this.vertices[penteract_faces[face_a][2]][3])/2;
        middle_face_a[4] = (this.vertices[penteract_faces[face_a][0]][4] + this.vertices[penteract_faces[face_a][2]][4])/2;

        middle_face_b[0] = (this.vertices[penteract_faces[face_b][0]][0] + this.vertices[penteract_faces[face_b][2]][0])/2;
        middle_face_b[1] = (this.vertices[penteract_faces[face_b][0]][1] + this.vertices[penteract_faces[face_b][2]][1])/2;
        middle_face_b[2] = (this.vertices[penteract_faces[face_b][0]][2] + this.vertices[penteract_faces[face_b][2]][2])/2;
        middle_face_b[3] = (this.vertices[penteract_faces[face_b][0]][3] + this.vertices[penteract_faces[face_b][2]][3])/2;
        middle_face_b[4] = (this.vertices[penteract_faces[face_b][0]][4] + this.vertices[penteract_faces[face_b][2]][4])/2;

        steps[0] = (middle_face_b[0]-middle_face_a[0])/(num_points-1);
        steps[1] = (middle_face_b[1]-middle_face_a[1])/(num_points-1);
        steps[2] = (middle_face_b[2]-middle_face_a[2])/(num_points-1);
        steps[3] = (middle_face_b[3]-middle_face_a[3])/(num_points-1);
        steps[4] = (middle_face_b[4]-middle_face_a[4])/(num_points-1);

        //first and las point have no jaggedness
        var point = [
            middle_face_a[0],
            middle_face_a[1],
            middle_face_a[2],
            middle_face_a[3],
            middle_face_a[4]
        ]

        connector_points.push(point);

        for (var index=1;index<num_points-1;index++) { 
            point = [
                middle_face_a[0]+steps[0]*index+jaggedness*this.scaler*Math.random(),
                middle_face_a[1]+steps[1]*index+jaggedness*this.scaler*Math.random(),
                middle_face_a[2]+steps[2]*index+jaggedness*this.scaler*Math.random(),
                middle_face_a[3]+steps[3]*index+jaggedness*this.scaler*Math.random(),
                middle_face_a[4]+steps[4]*index+jaggedness*this.scaler*Math.random()
            ]

            connector_points.push(point);

        }
        
        point = [
            middle_face_b[0],
            middle_face_b[1],
            middle_face_b[2],
            middle_face_b[3],
            middle_face_b[4]
        ]

        connector_points.push(point);

        this.connectors.push (connector_points);

    }
    

    get_projected_connectors () {
        var projected_connectors = [];

        for (var c of this.connectors){

            var projected_points = [];

            for (var point of c){

                var temp_pt = stereographic_project(2, point);
                temp_pt[0]  *= this.scaler; 
                temp_pt[1]  *= this.scaler; 
                temp_pt[2]  *= this.scaler; 

                projected_points.push( new THREE.Vector3( temp_pt[0], temp_pt[1], temp_pt[2] ) );
            }

            projected_connectors.push(projected_points);
        }

        return (projected_connectors);
    }

}


export {penteract_vertices, penteract_lines, penteract_faces, 
    rotate5dZV, rotate5dYZ , rotate5dXY, rotate5dWX, rotate5dVW, 
    stereographic_project, Penteract };