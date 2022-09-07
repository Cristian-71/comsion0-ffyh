
/*

let materias = [];
let botones = [];
let contenidos = [];
let menu_lateral = false;
function incluir_materia(id_materia, nombre) {
    let nombre_boton = id_materia + "_bt";
    let nombre_contenido = id_materia + "_contenido";
    let nombre_parrafo = id_materia + "_parrafo";
    let nombre_lista = id_materia + "_lista";

    const div_materia = document.createElement('div');
    div_materia.className = "materia";
    div_materia.id = id_materia
    div_materia.innerHTML = `   
        <button class= materia_bt id = ${nombre_boton}>
            ${nombre}
        </button>
        <div class = materia_contenido id= ${nombre_contenido}>
            <p id = ${nombre_parrafo}>
            </p>
            <ul id = ${nombre_lista}>
            </ul>
        </div>`;
    document.getElementById("contenido_main").appendChild(div_materia);
    materias.push(id_materia);
    botones.push(nombre_boton);
    contenidos.push(nombre_contenido);
}

function actualizar_parrafo(id_materia, parrafo) {
    let nombre_parrafo = id_materia + "_parrafo";
    document.getElementById(nombre_parrafo).innerHTML = `
        ${parrafo}
    `;
}

function actualizar_lista(id_materia, link, texto_link) {
    let nombre_lista = id_materia + "_lista";

    const nuevo_link = document.createElement('li');
    nuevo_link.innerHTML = `   
    <a href= ${link} target="_blank" rel="noopener noreferrer" > ${texto_link} </a>`;
    document.getElementById(nombre_lista).appendChild(nuevo_link);
}

/*
function show_text(id_materia, link_img){
    let nombre_contenido =  id_materia + "_contenido";
    let nombre_boton = id_materia + "_bt";

    var contenido = document.getElementById(nombre_contenido)
    
    if (window.getComputedStyle(contenido).display === "none") {
      /*  for (i in contenidos) {
            (contenidos[i] !== nombre_contenido){
                document.getElementById(contenidos[i]).style.display = "none";
            }
        }*/
/* for (i in botones) {
     if(botones[i] !== nombre_boton){
         document.getElementById(botones[i]).style.borderBottomWidth = "1px"
         document.getElementById(botones[i]).style.borderBottomLeftRadius = "3px";
         document.getElementById(botones[i]).style.borderBottomRightRadius = "3px";
     }
 }
 contenido.style.display = "inline-block"
 document.getElementById(nombre_boton).style.borderBottomWidth = "0px"
 document.getElementById(nombre_boton).style.borderBottomLeftRadius = "0px";
 document.getElementById(nombre_boton).style.borderBottomRightRadius = "0px";
 //document.getElementById("imagen_barra_lateral").src= link_img;
}else{
 contenido.style.display = "none"
 document.getElementById(nombre_boton).style.borderBottomWidth = "1px"
 document.getElementById(nombre_boton).style.borderBottomLeftRadius = "3px";
 document.getElementById(nombre_boton).style.borderBottomRightRadius = "3px";
 //document.getElementById("imagen_barra_lateral").src="./pages/carreras/images/fcefyn-logo.png";
}
 
}
*/

let  menu_lateral = false;

function mostrar_menu_lateral(){
    if(menu_lateral){
        document.getElementById("menu_div_smartphone").style.display="none";
        menu_lateral = false;
        document.getElementById("boton_menu_smartphone").innerHTML = `   
        <svg class="icono-menu" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
        </svg> `;
        document.getElementById("main").style.height = "100%";
        document.getElementById("main").style.overflow = "hidden";
    }else{
        document.getElementById("menu_div_smartphone").style.display="flex";
        menu_lateral = true;
        document.getElementById("boton_menu_smartphone").innerHTML = `   
        <svg class="icono-menu" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-left" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
        <path fill-rule="evenodd" d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
        </svg>`;
    document.getElementById("main").style.height = "100vh";
        document.getElementById("main").style.overflow = "hidden";
    }
}

function mostrar_conntenido(id) {
    var contenido = document.getElementById(id)
    if (window.getComputedStyle(contenido).display === "none") {
        contenido.style.display = "flex";
    } else {
        contenido.style.display = "none";
    }
}

function mostrar_menu_lateral() {
    if (menu_lateral) {
        document.getElementById("menu_div_smartphone").style.display = "none";
        menu_lateral = false;
        document.getElementById("boton_menu_smartphone").innerHTML = `   
        <svg class="icono-menu" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
        </svg> `;
        document.getElementById("contenido").style.height = "100%";
        document.getElementById("contenido").style.overflow = "hidden";
    } else {
        document.getElementById("menu_div_smartphone").style.display = "flex";
        menu_lateral = true;
        document.getElementById("boton_menu_smartphone").innerHTML = `   
        <svg class="icono-menu" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-left" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
        <path fill-rule="evenodd" d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
        </svg>`;
        document.getElementById("contenido").style.height = "100vh";
        document.getElementById("contenido").style.overflow = "hidden";
    }
}


window.onresize = function () {
    var anchoVentana = window.innerWidth;
    if (anchoVentana >= 886) {
        document.getElementById("menu_div_smartphone").style.display = "none";
        menu_lateral = false;
        document.getElementById("boton_menu_smartphone").innerHTML = `   
            <svg class="icono-menu" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
            </svg>`;
    }
};



function incluir_funcion_botones() {
    document.getElementById("boton_menu_smartphone").onclick = function() {
        mostrar_menu_lateral();
    }

    document.getElementById("departamento_antropologia_boton").onclick = function () {
        mostrar_conntenido("departamento_antropologia_contenido");
    }
    document.getElementById("escuela_archivología_boton").onclick = function () {
        mostrar_conntenido("escuela_archivología_contenido");
    }
    document.getElementById("escuela_bibliotecología_boton").onclick = function () {
        mostrar_conntenido("escuela_bibliotecología_contenido");
    }
    document.getElementById("escuela_ciencias_educación_boton").onclick = function () {
        mostrar_conntenido("escuela_ciencias_educación_contenido");
    }
    document.getElementById("escuela_filosofía_boton").onclick = function () {
        mostrar_conntenido("escuela_filosofía_contenido");
    }

    document.getElementById("departamento_geografía_boton").onclick = function () {
        mostrar_conntenido("departamento_geografía_contenido");
    }
    document.getElementById("escuela_historia_boton").onclick = function () {
        mostrar_conntenido("escuela_historia_contenido");
    }
    document.getElementById("escuela_letras_boton").onclick = function () {
        mostrar_conntenido("escuela_letras_contenido");
    }
}



function change_html(enlace) {
    window.location.href = enlace;
}

function carga_inicial(){
    incluir_funcion_botones();
}
