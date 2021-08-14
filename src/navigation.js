import * as THREE from 'three';

class Rotation5D {
    constructor (s) {
        this.v = 0;
        this.w = 0;
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.step = s;
        this.scale = 1;
    }
}

class Interface_Flags {
    constructor () {
        this.update_flag = false;
        this.toggle_numbers = false;
        this.iterate_all_rotations = false;
        this.double_click = false;
        this.toggle_faces = false;
    }
}

let r5d = new Rotation5D(5);
let interface_flags = new Interface_Flags();
const pointer = new THREE.Vector2();


// var rotate_timer;
const rotate_info = { amount: 0, axis: ""};

function lets_rotate () {
    // rotate_timer=setInterval(function(){
        switch (rotate_info.axis) {
            case "v":
                r5d.v += r5d.step * rotate_info.amount;
                break;
            case "w":
                r5d.w += r5d.step * rotate_info.amount;
                break;
            case "x":   
                r5d.x += r5d.step * rotate_info.amount;
                break;
            case "y":
                r5d.y += r5d.step * rotate_info.amount;
                break;
            case "z":
                r5d.z += r5d.step * rotate_info.amount;
                break;
                                    
            default:
                break;
        }
        interface_flags.update_flag = true;
//    }, 25); // the above code is executed every 25 ms
}

function global_key_up (event) {

    if (event.key==='0') {
        interface_flags.toggle_numbers = true; 
    }
    if (event.key===' ') {
        interface_flags.iterate_all_rotations = true; 
    }
    if (event.key==='9') {
        interface_flags.toggle_faces = true; 
    }

}



function key_rotation(event) {
    switch (event.key) {
        case '1':
            rotate_info.amount = 1; rotate_info.axis = "v"; 
            lets_rotate();
            break;
        case 'q':
        case 'Q':
            rotate_info.amount = -1; rotate_info.axis = "v"; 
            lets_rotate();
            break;
        case '2':
            rotate_info.amount = 1; rotate_info.axis = "w"; 
            lets_rotate();
            break;
        case 'w':
        case 'W':
            rotate_info.amount = -1; rotate_info.axis = "w"; 
            lets_rotate();
            break;
        case '3':
            rotate_info.amount = 1; rotate_info.axis = "x"; 
            lets_rotate();
            break;
        case 'e':
        case 'E':
            rotate_info.amount = -1; rotate_info.axis = "x"; 
            lets_rotate();
            break;
        case '4':
            rotate_info.amount = 1; rotate_info.axis = "y"; 
            lets_rotate();
            break;
        case 'r':
        case 'R':
            rotate_info.amount = -1; rotate_info.axis = "y"; 
            lets_rotate();
            break;
        case '5':
            rotate_info.amount = 1; rotate_info.axis = "z"; 
            lets_rotate();
            break;
        case 't':
        case 'T':
            rotate_info.amount = -1; rotate_info.axis = "z"; 
            lets_rotate();
            break;
        case '+':
            r5d.scale += 0.01;
            interface_flags.update_flag = true;
            break;
        case '-':
            r5d.scale -= 0.01;
            interface_flags.update_flag = true;
            break;

                                            
        default:
            rotate_info.amount = 0;
            break;
    }
}

function toggle_visibility (el) {
    if (el.style.visibility === 'hidden') {
        el.style.visibility = 'visible';
    } else {
        el.style.visibility = 'hidden';
    }
}

function double_click (event) {
    interface_flags.double_click = true;
}


function global_movemouse (event) {
    pointer.x = ( event.clientX / window.innerWidth ) * 2 - 1;
    pointer.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
}

function create_navigation () {

    window.addEventListener("keydown", key_rotation);
    window.addEventListener("keyup",    global_key_up);
    window.addEventListener("dblclick", double_click, true);
    window.addEventListener("mousemove", global_movemouse, true);

    // document.body.addEventListener("mouseup", global_stop_rotation, true);

    // 5d rotate controls

    document.getElementById("5d_click").addEventListener("mouseup", function() {

        var toggable_5d = document.getElementById("toggable_rotate_controls");
        if (toggable_5d.style.visibility === 'visible') {

            toggable_5d.style.visibility = 'hidden';
        } else {
            toggable_5d.style.visibility = 'visible';
        }
    });


    document.getElementById("vminus").addEventListener("mousedown", function() {
        rotate_info.amount = 1; rotate_info.axis = "v"; 
        lets_rotate();
    }, true);
    document.getElementById("vplus").addEventListener("mousedown", function() {
        rotate_info.amount = -1; rotate_info.axis = "v"; 
        lets_rotate();
    }, true);
    document.getElementById("wminus").addEventListener("mousedown", function() {
        rotate_info.amount = -1; rotate_info.axis = "w"; 
        lets_rotate();
    }, true);
    document.getElementById("wplus").addEventListener("mousedown", function() {
        rotate_info.amount = 1; rotate_info.axis = "w"; 
        lets_rotate();
    }, true);
    document.getElementById("xminus").addEventListener("mousedown", function() {
        rotate_info.amount = -1; rotate_info.axis = "x"; 
        lets_rotate();
    }, true);
    document.getElementById("xplus").addEventListener("mousedown", function() {
        rotate_info.amount = 1; rotate_info.axis = "x"; 
        lets_rotate();
    }, true);
    document.getElementById("yminus").addEventListener("mousedown", function() {
        rotate_info.amount = -1; rotate_info.axis = "y"; 
        lets_rotate();
    }, true);
    document.getElementById("yplus").addEventListener("mousedown", function() {
        rotate_info.amount = 1; rotate_info.axis = "y"; 
        lets_rotate();
    }, true);
    document.getElementById("zminus").addEventListener("mousedown", function() {
        rotate_info.amount = -1; rotate_info.axis = "z"; 
        lets_rotate();
    }, true);
    document.getElementById("zplus").addEventListener("mousedown", function() {
        rotate_info.amount = 1; rotate_info.axis = "z"; 
        lets_rotate();
    }, true);




    // footer left panel
    let penteract_panel =  document.getElementById("penteract_panel");


    let question_mark = document.getElementById('question_mark');
    let instructions_box = document.getElementById('instructions_box');
    question_mark.onclick = function () {
        toggle_visibility(instructions_box);
        
    };
    instructions_box.onclick = function( ) {instructions_box.style.visibility="hidden"; };

    let equal_sign = document.getElementById('equal_sign');
    let equal_panel = document.getElementById('equal_panel');
    equal_panel.style.visibility="hidden";  
    equal_sign.onclick = function () {
        equal_panel_img.src = require('./assets/equal_chart.png') ;
        toggle_visibility(equal_panel);
    };
    equal_panel.onclick = function( ) {equal_panel.style.visibility="hidden"; };

    let plus_sign = document.getElementById('plus_sign');
    let plus_panel = document.getElementById('plus_panel');
    plus_panel.style.visibility="hidden";  
    plus_sign.onclick = function () {
        plus_panel_img.src = require('./assets/sense_scale.png') ;
        toggle_visibility(plus_panel);
    };
    plus_panel.onclick = function( ) {plus_panel.style.visibility="hidden"; };

    let minus_sign = document.getElementById('minus_sign');
    let minus_panel = document.getElementById('minus_panel');
    minus_panel.style.visibility="hidden";  
    minus_sign.onclick = function () {
        minus_panel_img.src = require('./assets/scale.png') ;
        toggle_visibility(minus_panel);
        
    };
    minus_panel.onclick = function( ) {minus_panel.style.visibility="hidden"; };

    let ampersand = document.getElementById('ampersand');
    let ampersand_panel = document.getElementById('ampersand_panel');
    ampersand_panel.style.visibility="hidden";
    ampersand.onclick = function () {
        ampersand_panel_img.src = require('./assets/klein_bottle.png') ;
        toggle_visibility(ampersand_panel);
    };
    ampersand_panel.onclick = function( ) {ampersand_panel.style.visibility="hidden"; };

    let quotes = document.getElementById('quotes');
    quotes.onclick = function () {penteract_panel.style.visibility="visible";  };



}

//lines
function draw_line() {
    

    if (!canvas.getContext) {
        return;
    }
    const ctx = canvas.getContext('2d');
    ctx.width  = window.screen.width;
    ctx.height = window.screen.height;

    // set line stroke and line width
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 5;
    

    // draw a red line
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(300, 100);
    ctx.stroke();

}

 draw_line();

export {create_navigation, r5d, interface_flags, pointer}  