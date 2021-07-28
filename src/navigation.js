
class Rotation5D {
    constructor (s) {
        this.v = 0;
        this.w = 0;
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.step = s;
    }
}

let r5d = new Rotation5D(0.25);
var rotate_timer;
const rotate_info = { amount: 0, axis: ""};

function lets_rotate () {
    rotate_timer=setInterval(function(){
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
   }, 25); // the above code is executed every 25 ms
}

function global_mouse_up () {
    if (rotate_timer) clearInterval(rotate_timer);
}

function create_navigation () {

    document.body.addEventListener("mouseup", global_mouse_up, true);

    // 5d rotate controls
    document.getElementById("vminus").addEventListener("mousedown", function() {
        rotate_info.amount = 1; rotate_info.axis = "v"; 
        lets_rotate();
    }, false);
    document.getElementById("vplus").addEventListener("mousedown", function() {
        rotate_info.amount = -1; rotate_info.axis = "v"; 
        lets_rotate();
    }, false);
    document.getElementById("wminus").addEventListener("mousedown", function() {
        rotate_info.amount = -1; rotate_info.axis = "w"; 
        lets_rotate();
    }, false);
    document.getElementById("wplus").addEventListener("mousedown", function() {
        rotate_info.amount = 1; rotate_info.axis = "w"; 
        lets_rotate();
    }, false);
    document.getElementById("xminus").addEventListener("mousedown", function() {
        rotate_info.amount = -1; rotate_info.axis = "x"; 
        lets_rotate();
    }, false);
    document.getElementById("xplus").addEventListener("mousedown", function() {
        rotate_info.amount = 1; rotate_info.axis = "x"; 
        lets_rotate();
    }, false);
    document.getElementById("yminus").addEventListener("mousedown", function() {
        rotate_info.amount = -1; rotate_info.axis = "y"; 
        lets_rotate();
    }, false);
    document.getElementById("yplus").addEventListener("mousedown", function() {
        rotate_info.amount = 1; rotate_info.axis = "y"; 
        lets_rotate();
    }, false);
    document.getElementById("zminus").addEventListener("mousedown", function() {
        rotate_info.amount = -1; rotate_info.axis = "z"; 
        lets_rotate();
    }, false);
    document.getElementById("zplus").addEventListener("mousedown", function() {
        rotate_info.amount = 1; rotate_info.axis = "z"; 
        lets_rotate();
    }, false);

    // document.getElementById("vminus").onclick = function() {r5d.v -= r5d.step}
    // document.getElementById("vplus").onclick = function() {r5d.v += r5d.step}
    document.getElementById("wminus").onclick = function() {r5d.w -= r5d.step}
    document.getElementById("wplus").onclick = function() {r5d.w += r5d.step}
    document.getElementById("xminus").onclick = function() {r5d.x -= r5d.step}
    document.getElementById("xplus").onclick = function() {r5d.x += r5d.step}
    document.getElementById("yminus").onclick = function() {r5d.y -= r5d.step}
    document.getElementById("yplus").onclick = function() {r5d.y += r5d.step}
    document.getElementById("zminus").onclick = function() {r5d.z -= r5d.step}
    document.getElementById("zplus").onclick = function() {r5d.z += r5d.step}

    // footer left panel
    let penteract_panel_img = document.getElementById("penteract_panel_img");
    penteract_panel_img.src = require('./assets/equal_chart.png') ;
    let penteract_panel =  document.getElementById("penteract_panel");
    penteract_panel.onclick = function( ) {penteract_panel.style.visibility="hidden"; };


    let question_mark = document.getElementById('question_mark');
    question_mark.onclick = function () {
          };

    let equal_sign = document.getElementById('equal_sign');
    equal_sign.onclick = function () {
        penteract_panel_img.src = require('./assets/equal_chart.png') ;
        penteract_panel.style.visibility="visible";  
    };

    let plus_sign = document.getElementById('plus_sign');
    plus_sign.onclick = function () {
        penteract_panel_img.src = require('./assets/sense_scale.png') ;
        penteract_panel.style.visibility="visible";  
    };

    let minus_sign = document.getElementById('minus_sign');
    minus_sign.onclick = function () {
        penteract_panel_img.src = require('./assets/scale.png') ;
        penteract_panel.style.visibility="visible";  
    };

    let ampersand = document.getElementById('ampersand');
    ampersand.onclick = function () {
        penteract_panel_img.src = require('./assets/klein_bottle.png') ;
        penteract_panel.style.visibility="visible";  
    };
    let quotes = document.getElementById('quotes');
    quotes.onclick = function () {penteract_panel.style.visibility="visible";  };



}



export {create_navigation, r5d}  