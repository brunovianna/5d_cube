import * as THREE from 'three';
import { BufferGeometryLoader } from 'three';
import { ceilPowerOfTwo } from 'three/src/math/MathUtils';
import * as DATA from './data.js'

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
        this.show_connectors = "";
        this.color_faces = "";
    }
}

let r5d = new Rotation5D(5);
let interface_flags = new Interface_Flags();
const pointer = new THREE.Vector2();
let explanation_index = 0;
let colon_index = 0;
let plus_index = "0";


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
        el.style.z = 100;
        el.style.visibility = 'visible';
    } else {
        el.style.z = 10;
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


function update_color_schema () {
    var index = Number((this.id.slice(6)));
    (index % 2 === 0 ? index /=2  : index=(index+1)/2 );
    var new_src = require('./assets/'+index+'.png') ;
    if (color_schema_panel.style.visibility === "visible") {
        if (new_src !== color_schema_img.src) {
            color_schema_img.src = new_src;
            interface_flags.color_faces = String(index);
        } else {
            toggle_visibility(color_schema_panel);
            interface_flags.color_faces = "";
        }
    } else {
        color_schema_img.src = new_src;
        toggle_visibility(color_schema_panel);
        interface_flags.color_faces = String(index);
    }
    interface_flags.update_flag = true;
}

function update_connector_schema () {
    var index = (this.id.slice(10));
    if (interface_flags.show_connectors === index) {
        interface_flags.show_connectors = "";
        toggle_visibility(connector_schema_panel);
    } else {
        var new_src = require('./assets/'+index+'.png') ;
        connector_schema_img.src = new_src;
        if (interface_flags.show_connectors === "") {
            toggle_visibility(connector_schema_panel);
        }
        interface_flags.show_connectors = index;
        

    }
    interface_flags.update_flag = true;

}

function update_explanation() {
    var side = this.id.slice(6);
    if (side === "right") {
        if (explanation_index<6) {
            if (explanation_index === 0) {
                arrow_left.style.visibility = "visible";
            }  
            if (explanation_index===5) {
                    arrow_right.style.visibility = "hidden";
            }
            explanation_index++;
        }
        explanation_left.innerHTML = DATA.explanation_texts_html[explanation_index][0];
        explanation_right.innerHTML = DATA.explanation_texts_html[explanation_index][1];
    } else {
        if (explanation_index > 0) {
            if (explanation_index === 1) {
                arrow_left.style.visibility = "hidden";
            } 
            if (explanation_index===6) {
                arrow_right.style.visibility = "visible";
            }
            explanation_index--;
        }
        explanation_left.innerHTML = DATA.explanation_texts_html[explanation_index][0];
        explanation_right.innerHTML = DATA.explanation_texts_html[explanation_index][1];
    }
}


function rotate_colon () {
    colon_panel_img.src = require ("./assets/colon_"+colon_index+".png");
    if (colon_index===0) {
        colon_panel.style.visibility = "visible"
        colon_index++;
    } else {
        if (colon_index<6) {
            colon_index++;
        } else {
            colon_index=0;
            colon_panel.style.visibility = "hidden";

        }
    }
}

function close_all_signs() {
    instructions_box.style.visibility = "hidden";
    instructions_box_2.style.visibility = "hidden";
    credits_box_panel.style.visibility = "hidden";
    colon_panel.style.visibility = "hidden";
    equal_panel.style.visibility = "hidden";
    minus_panel.style.visibility = "hidden";
    plus_panel.style.visibility = "hidden";
    ampersand_panel.style.visibility = "hidden";
    quotes_panel.style.visibility = "hidden";
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



    instructions_box_2.style.visibility = "hidden";
    question_mark.onclick = function () {

        if (instructions_box.style.visibility!==instructions_box_2.style.visibility) {
            instructions_box.style.visibility=instructions_box_2.style.visibility;
        }
        toggle_visibility(instructions_box);
        toggle_visibility(instructions_box_2);
        toggle_visibility(credits_box_panel);
        
        //instructions_box_content.style.height = "600px";
        //instructions_box_content.innerHTML = DATA.complete_instructions_html;
    };
    instructions_box.onclick = function( ) {
        instructions_box.style.visibility="hidden"; 
        instructions_box_2.style.visibility = "hidden";
        credits_box_panel.style.visibility = "hidden";
    };
    instructions_box_2.onclick = function( ) {
        instructions_box.style.visibility="hidden"; 
        instructions_box_2.style.visibility = "hidden";
        credits_box_panel.style.visibility = "hidden";
    };
    credits_box_panel.onclick = function( ) {
        instructions_box.style.visibility="hidden"; 
        instructions_box_2.style.visibility = "hidden";
        credits_box_panel.style.visibility = "hidden";
    };

    credits_box_img.src = require ("./assets/credits.png");
    credits_box_panel.style.visibility = "hidden";

    colon_panel.style.visibility = "hidden";
    colon_sign.onclick = rotate_colon; 

    colon_panel.onclick = function () {
        colon_panel.style.visibility = "hidden";
        colon_index =0;
    }

    equal_panel.style.visibility="hidden";  
    equal_sign.onclick = function () {
        equal_panel_img.src = require('./assets/equal_chart.png') ;
        toggle_visibility(equal_panel);
    };
    equal_panel.onclick = function( ) {equal_panel.style.visibility="hidden"; };
    
    minus_panel.style.visibility="hidden";  
    minus_panel_img_1.src=require("./assets/text2a.png")
    minus_panel_img_2.src=require("./assets/text2b.png")
    minus_panel_img_3.src=require("./assets/text2c.png")
    minus_sign.onclick = function () {
        toggle_visibility(minus_panel);
        
    };
    minus_panel.onclick = function( ) {minus_panel.style.visibility="hidden"; };

    plus_panel.style.visibility="hidden";  
    plus_sign.onclick = function () {
        switch (plus_index) {
            case '0':
                plus_panel.style.visibility="visible";
                plus_panel_img_1.src=require("./assets/text3a.png");  
                plus_panel_img_2.src=require("./assets/text3b.png");
                plus_index='1';
                break;
            case '1':
                plus_panel_img_1.src=require("./assets/text4a.png");  
                plus_panel_img_2.src=require("./assets/text4b.png");
                plus_index='2';
                break;
            case '2':
                plus_panel.style.visibility="hidden";
                plus_index='0';
                break;
    
        }

    };
    plus_panel.onclick = function( ) {plus_panel.style.visibility="hidden"; };



    ampersand_panel.style.visibility="hidden";
    ampersand_panel_img_1.src=require("./assets/text5a.png")
    ampersand_panel_img_2.src=require("./assets/text5b.png")
    ampersand_panel_img_3.src=require("./assets/iconological.png")

    ampersand.onclick = function () {
        toggle_visibility(ampersand_panel);
    };
    ampersand_panel.onclick = function( ) {ampersand_panel.style.visibility="hidden"; };

    quotes_panel.style.visibility="hidden";
    quotes_panel_img_1.src=require("./assets/text6.png")
    quotes_panel_img_2.src=require("./assets/klein_bottle.png")
    quotes.onclick = function () {
        toggle_visibility(quotes_panel);
    };
    quotes_panel.onclick = function () {quotes_panel.style.visibility="hidden";}


    for (var index =1;index<15;index++) {
        document.getElementById("color_"+index).onclick = update_color_schema;
        
    }

    color_schema_panel.onclick = function( ) {color_schema_panel.style.visibility="hidden"; };
    color_schema_panel.style.visibility = "hidden";

    connector_c.onclick = update_connector_schema; 
    connector_t.onclick = update_connector_schema; 
    connector_w.onclick = update_connector_schema; 
    complete_schema_panel.style.visibility = "hidden";
    complete_schema_img.src = require("./assets/complete_schema.png");
    connector_h.onclick = function () { complete_schema_panel.style.visibility = "visible";}
    complete_schema_panel.onclick = function () {complete_schema_panel.style.visibility = "hidden";}

    connector_schema_panel.onclick = function( ) {connector_schema_panel.style.visibility="hidden"; };
    connector_schema_panel.style.visibility = "hidden";


}

// //lines
// function draw_line(ctx, from_x, from_y, to_x, to_y, line_color) {
    

//     // set line stroke and line width
//     ctx.strokeStyle = line_color;
//     ctx.lineWidth = 2;
    

//     // draw a red line
//     ctx.beginPath();
//     ctx.moveTo(from_x, from_y);
//     ctx.lineTo(to_x, to_y);
//     ctx.stroke();

// }

// //  draw_line();
// function get_element_center (element_id) {
//         var e = document.getElementById(element_id);
//         let box = e.getBoundingClientRect();
    
//         return [((box.left + box.right)/2), ((box.top + box.bottom)/2)];
//     }
    
// export {create_navigation, r5d, interface_flags, pointer, draw_line, get_element_center}  
export {create_navigation, r5d, interface_flags, pointer}  