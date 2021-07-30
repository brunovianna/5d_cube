
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
            rotate_info.amount = 1; rotate_info.axis = "v"; 
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

function create_navigation () {

    window.addEventListener("keydown", key_rotation);
    window.addEventListener("keyup",    global_stop_rotation);

    document.body.addEventListener("mouseup", global_stop_rotation, true);

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