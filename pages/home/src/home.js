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

function mostrar_conntenido(id){
    var contenido = document.getElementById(id)
    if (window.getComputedStyle(contenido).display === "none") {
        contenido.style.display = "flex";
    }else{
        contenido.style.display = "none";
    }
}

function incluir_funcion_botones(){
    document.getElementById("boton_menu_smartphone").onclick = function() {
        mostrar_menu_lateral();
    }
    document.getElementById("quienes_somos_boton").onclick = function() {
        mostrar_conntenido("quinenes_somos_contenido");
    }
    document.getElementById("ayuda_boton").onclick = function() {
        mostrar_conntenido("ayuda_contenido");
    }
    document.getElementById("inscripcion_boton").onclick = function() {
        mostrar_conntenido("inscripcion_contenido");
    }
    document.getElementById("links_boton").onclick = function() {
        mostrar_conntenido("links_contenido");
    }
    document.getElementById("mapas_boton").onclick = function() {
        mostrar_conntenido("mapas_contenido");
    }

    document.getElementById("planta_baja_boton").onclick = function() {
        mostrar_conntenido("imagen_planta_baja");
    }
    document.getElementById("planta_alta_boton").onclick = function() {
        mostrar_conntenido("imagen_planta_alta");
    }
    document.getElementById("mapa_sede_ciudad_boton").onclick = function() {
        mostrar_conntenido("mapa_sede_ciudad");
    }
    document.getElementById("mapa_sede_centro_boton").onclick = function() {
        mostrar_conntenido("mapa_sede_centro");
    }

    document.getElementById("calendario_boton").onclick = function() {
        mostrar_conntenido("calendario_contenido");
    }

    window.onresize = function(){
        var anchoVentana = window.innerWidth;
        if(anchoVentana >= 886){
            document.getElementById("menu_div_smartphone").style.display="none";
            menu_lateral = false;
            document.getElementById("boton_menu_smartphone").innerHTML = `   
            <svg class="icono-menu" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
            </svg>`;
        }
    };
}

function change_html(enlace) {
    window.location.href = enlace;
}


function carga_inicial(){
    incluir_funcion_botones();
}