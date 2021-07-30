
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
// var rotate_timer;
const rotate_info = { amount: 0, axis: ""};

function lets_rotate () {
    // rotate_timer=setInterval(function(){
        switch (rotate_info.axis) {
            case "v":
                r5d.v = r5d.step * rotate_info.amount;
                break;
            case "w":
                r5d.w = r5d.step * rotate_info.amount;
                break;
            case "x":
                r5d.x = r5d.step * rotate_info.amount;
                break;
            case "y":
                r5d.y = r5d.step * rotate_info.amount;
                break;
            case "z":
                r5d.z = r5d.step * rotate_info.amount;
                break;
                                    
            default:
                break;
        }
//    }, 25); // the above code is executed every 25 ms
}

function global_stop_rotation () {
    // if (rotate_timer) clearInterval(rotate_timer);
    r5d.v = 0;
    r5d.w = 0;
    r5d.x = 0;
    r5d.y = 0;
    r5d.z = 0;
}


function key_rotation(event) {
    console.log(event.key);
    switch (event.key) {
        case '1':
            rotate_info.amount = -1; rotate_info.axis = "v"; 
            break;
        case 'q':
            rotate_info.amount = 11; rotate_info.axis = "v"; 
            break;
        case '2':
            rotate_info.amount = 1; rotate_info.axis = "w"; 
            break;
        case 'w':
            rotate_info.amount = -1; rotate_info.axis = "w"; 
            break;
        case '3':
            rotate_info.amount = 1; rotate_info.axis = "x"; 
            break;
        case 'e':
            rotate_info.amount = -1; rotate_info.axis = "x"; 
            break;
        case '4':
            rotate_info.amount = 1; rotate_info.axis = "y"; 
            break;
        case 'r':
            rotate_info.amount = -1; rotate_info.axis = "y"; 
            break;
        case '5':
            rotate_info.amount = 1; rotate_info.axis = "z"; 
            break;
        case 't':
            rotate_info.amount = -1; rotate_info.axis = "z"; 
            break;
                                            
        default:
            break;
    }
    lets_rotate();
}

function toggle_visibility (el) {
    if (el.style.visibility === 'hidden') {
        el.style.visibility = 'visible';
    } else {
        el.style.visibility = 'hidden';
    }
}

function create_navigation () {

    window.addEventListener("keydown", key_rotation);
    window.addEventListener("keyup",    global_stop_rotation);

    document.body.addEventListener("mouseup", global_stop_rotation, true);

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
    question_mark.onclick = function () {
    
          };

    let equal_sign = document.getElementById('equal_sign');
    let equal_panel = document.getElementById('equal_panel');
    equal_panel.style.visibility="hidden";  
    equal_sign.onclick = function () {
        equal_panel_img.src = require('./assets/equal_chart.png') ;
        toggle_visibility(equal_panel);
        equal_panel.onclick = function( ) {equal_panel.style.visibility="hidden"; };
    };

    let plus_sign = document.getElementById('plus_sign');
    let plus_panel = document.getElementById('plus_panel');
    plus_panel.style.visibility="hidden";  
    plus_sign.onclick = function () {
        plus_panel_img.src = require('./assets/sense_scale.png') ;
        toggle_visibility(plus_panel);
        plus_panel.onclick = function( ) {plus_panel.style.visibility="hidden"; };
    };

    let minus_sign = document.getElementById('minus_sign');
    let minus_panel = document.getElementById('minus_panel');
    minus_panel.style.visibility="hidden";  
    minus_sign.onclick = function () {
        minus_panel_img.src = require('./assets/scale.png') ;
        toggle_visibility(minus_panel);
        minus_panel.onclick = function( ) {minus_panel.style.visibility="hidden"; };
    };

    let ampersand = document.getElementById('ampersand');
    let ampersand_panel = document.getElementById('ampersand_panel');
    ampersand_panel.style.visibility="hidden";
    ampersand.onclick = function () {
        ampersand_panel_img.src = require('./assets/klein_bottle.png') ;
        toggle_visibility(ampersand_panel);
        ampersand_panel.onclick = function( ) {ampersand_panel.style.visibility="hidden"; };
    };

    let quotes = document.getElementById('quotes');
    quotes.onclick = function () {penteract_panel.style.visibility="visible";  };



}



export {create_navigation, r5d}  