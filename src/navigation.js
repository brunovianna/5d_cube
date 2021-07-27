function toggle_questionmark() {

}

function toggle_equalsign() {
    alert("oi");
}


function create_interface () {
    var footer_help = document.createElement('div');
    
    footer_help.style.bottom = "20px";
    footer_help.style.left = "20px";
    footer_help.style.position = "absolute";
    footer_help.style.color = "#f9c41e";

    var spacer = document.createElement('span');
    spacer.innerHTML = " ";
 
    var question_mark = document.createElement('span');
    question_mark.innerHTML = "?";
    question_mark.onclick = toggle_questionmark;
    footer_help.appendChild(question_mark);

    footer_help.appendChild(spacer);

    var equal_sign = document.createElement('span');
    equal_sign.innerHTML = "=";
    equal_sign.onclick = toggle_equalsign;
    footer_help.appendChild(equal_sign);

	// font-family: gotham;
    // font-size: 40px;
    // font-weight: 800;


    document.body.appendChild(footer_help);
};  

export {
    create_interface,
  };
