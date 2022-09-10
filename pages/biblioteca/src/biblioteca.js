let secciones_hijos = [];
let botones_hijos = [];
let contenidos_hijos = [];
let secciones_padres = [];
let botones_padres = [];
let contenidos_padres = [];
let menu_lateral = false;


function incluir_seccion_padre(id_seccion, nombre_seccion) {
    let nombre_boton = id_seccion + "_bt";
    let nombre_contenido = id_seccion + "_contenido";

    const div_seccion = document.createElement('div');
    div_seccion.className = "seccion";
    div_seccion.id = id_seccion
    div_seccion.innerHTML = `   
        <button class = seccion_bt id = ${nombre_boton}>
            ${nombre_seccion}
        </button>
        <div class = "seccion_parrafo seccion_parrafo_padre" id= ${nombre_contenido}>
        </div>`;
    document.getElementById("contenido_main").appendChild(div_seccion);
    secciones_padres.push(id_seccion);
    botones_padres.push(nombre_boton);
    contenidos_padres.push(nombre_contenido);
}

function incluir_seccion_hijo(id_seccion, nombre_seccion, id_padre) {
    let nombre_boton = id_seccion + "_bt";
    let nombre_contenido = id_seccion + "_contenido";
    let nombre_parrafo = id_seccion + "_parrafo";
    let nombre_contenido_padre = id_padre + "_contenido";

    const div_seccion = document.createElement('div');
    div_seccion.className = "seccion";
    div_seccion.id = id_seccion
    div_seccion.innerHTML = `   
        <button class = seccion_bt id = ${nombre_boton}>
            ${nombre_seccion}
        </button>
        <div class = seccion_parrafo id= ${nombre_contenido}>
        <p id = ${nombre_parrafo}>
        </p>
        </div>`;

    document.getElementById(nombre_contenido_padre).appendChild(div_seccion);
    secciones_hijos.push(id_seccion);
    botones_hijos.push(nombre_boton);
    contenidos_hijos.push(nombre_contenido);
}

function actualizar_parrafo(id_seccion, parrafo) {
    let nombre_parrafo = id_seccion + "_parrafo";
    document.getElementById(nombre_parrafo).innerHTML = `
        ${parrafo}
    `;
}


function change_html(enlace) {
    window.location.href = enlace;
}


function show_text_hijo(id_seccion) {
    let nombre_contenido = id_seccion + "_contenido";
    let nombre_boton = id_seccion + "_bt";

    var contenido = document.getElementById(nombre_contenido)

    if (window.getComputedStyle(contenido).display === "none") {
        for (i in contenidos_hijos) {
            if (contenidos_hijos[i] !== nombre_contenido) {
                document.getElementById(contenidos_hijos[i]).style.display = "none";
            }
        }
        for (i in botones_hijos) {
            if (botones_hijos[i] !== nombre_boton) {
                document.getElementById(botones_hijos[i]).style.borderBottomWidth = "1px"
                document.getElementById(botones_hijos[i]).style.borderBottomLeftRadius = "3px";
                document.getElementById(botones_hijos[i]).style.borderBottomRightRadius = "3px";
            }
        }
        contenido.style.display = "inline-block"
        document.getElementById(nombre_boton).style.borderBottomWidth = "0px"
        document.getElementById(nombre_boton).style.borderBottomLeftRadius = "0px";
        document.getElementById(nombre_boton).style.borderBottomRightRadius = "0px";
    } else {
        contenido.style.display = "none"
        document.getElementById(nombre_boton).style.borderBottomWidth = "1px"
        document.getElementById(nombre_boton).style.borderBottomLeftRadius = "3px";
        document.getElementById(nombre_boton).style.borderBottomRightRadius = "3px";
    }

}


function show_text_padre(id_seccion) {
    let nombre_contenido = id_seccion + "_contenido";
    let nombre_boton = id_seccion + "_bt";

    var contenido = document.getElementById(nombre_contenido)

    if (window.getComputedStyle(contenido).display === "none") {
        for (i in contenidos_padres) {
            if (contenidos_padres[i] !== nombre_contenido) {
                document.getElementById(contenidos_padres[i]).style.display = "none";
            }
        }
        for (i in botones_padres) {
            if (botones_padres[i] !== nombre_boton) {
                document.getElementById(botones_padres[i]).style.borderBottomWidth = "1px"
                document.getElementById(botones_padres[i]).style.borderBottomLeftRadius = "3px";
                document.getElementById(botones_padres[i]).style.borderBottomRightRadius = "3px";
            }
        }
        contenido.style.display = "inline-block"
        document.getElementById(nombre_boton).style.borderBottomWidth = "0px"
        document.getElementById(nombre_boton).style.borderBottomLeftRadius = "0px";
        document.getElementById(nombre_boton).style.borderBottomRightRadius = "0px";
    } else {
        contenido.style.display = "none"
        document.getElementById(nombre_boton).style.borderBottomWidth = "1px"
        document.getElementById(nombre_boton).style.borderBottomLeftRadius = "3px";
        document.getElementById(nombre_boton).style.borderBottomRightRadius = "3px";
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
        document.getElementById("contenido").style.alignSelf = "flex-start"

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
        document.getElementById("contenido").style.alignSelf = "flex-start"
    }
}


function incluir_funcion_botones() {

    document.getElementById("catalogo_bt").onclick = function () {
        show_text_padre("catalogo");
    }


    document.getElementById("catalogo_enlace_bt").onclick = function () {
        show_text_hijo("catalogo_enlace");
    }



    document.getElementById("tutoriales_bt").onclick = function () {
        show_text_padre("tutoriales");
    }
    document.getElementById("introduccion_tutoriales_bt").onclick = function () {
        show_text_hijo("introduccion_tutoriales");
    }
    document.getElementById("acceso_titulo_autor_bt").onclick = function () {
        show_text_hijo("acceso_titulo_autor");
    }
    document.getElementById("acceso_busqueda_tema_bt").onclick = function () {
        show_text_hijo("acceso_busqueda_tema");
    }

    document.getElementById("acceso_busqueda_simple_autor_titulo_tema_bt").onclick = function () {
        show_text_hijo("acceso_busqueda_simple_autor_titulo_tema");
    }
    document.getElementById("acceso_busqueda_avanzada_tema_bt").onclick = function () {
        show_text_hijo("acceso_busqueda_avanzada_tema");
    }
    document.getElementById("acceso_busqueda_banco_tesis_psicologia_bt").onclick = function () {
        show_text_hijo("acceso_busqueda_banco_tesis_psicologia");
    }
    
    document.getElementById("boton_menu_smartphone").onclick = function () {
        mostrar_menu_lateral();
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

}


function carga_inicial() {

    incluir_seccion_padre("catalogo", "CATALOGO DE LA BIBLIOTECA FFYH");

    incluir_seccion_hijo("catalogo_enlace", "Catalogo de Libros y Revistas", "catalogo")
    actualizar_parrafo("catalogo_enlace", `
   <p><span style="color: #ff00ff"><strong>Enlace del Catalogo de Libros, Banco de Tesis, Revistas.</strong></span> <span style="color: #ff00ff"><strong>verifiques</strong></span></p>
   
    <iframe src="https://ffyh.biblio.unc.edu.ar/" title="Pagina del Catalogo de la Biblioteca Libros y Revistas"></iframe>
    
   <p><strong>Fuente:</strong> Pagina del Catalogo de la Biblioteca Libros y Revistas.<a href="https://ffyh.biblio.unc.edu.ar/"target="_blank" rel="noopener">Haga click aqui.</a></p>`)



    incluir_seccion_padre("tutoriales", "TUTORIALES");

    incluir_seccion_hijo("introduccion_tutoriales","Introduccion: Tutoriales de la Biblioteca","tutoriales")
    actualizar_parrafo("introduccion_tutoriales",`
    <p><span style="color: #ff00ff"><i>Extracto del sitio de la Biblioteca FFyH</i><span></p>
    <p>Desde la Biblioteca Elma Kohlmeyer de Estrabou se diseñaron tutoriales que orientan en la realización de búsquedas en el catálogo, desde las simples hasta las estrategias más avanzadas de búsquedas para acceder al texto completo por medio de enlaces en los registros.</p> 
    <p>En estos tutoriales se describe paso a paso el uso del catálogo de la Biblioteca donde se muestran varias maneras de llegar a la información que se necesita, delimitando los resultados con expresiones propias del sistema, refinando las búsquedas mediante diversas opciones que se presentan para tal fin o usando conectores en búsquedas avanzadas.</p>
    <p>Asimismo se describe cómo están conformados los registros, detallando la información que proporcionan y como utilizarla; indicando si el material se encuentra en la biblioteca electrónica del Mincyt o si posee versión digital de acceso abierto en la web. A fin de brindar esta información el equipo de la Biblioteca lleva enlazados en su catálogo más de dos mil registros a sitios seguros desde donde se acceden a los textos completos.</p>
    <p><strong>Fuente:</strong> Pagina de la biblioteca, <a href="https://ffyh.unc.edu.ar/biblioteca/tutoriales-de-la-biblioteca/"target="_blank" rel="noopener">seccion de los tutoriales.</a></p>
   `);

    incluir_seccion_hijo("acceso_titulo_autor", "Acceso al texto completo por título y autor", "tutoriales")
    actualizar_parrafo("acceso_titulo_autor", `
    <p>Video de tutorial de la pagina oficial de la Biblioteca FFyH </p>
    <div>
    <span class="embed-youtube" style="text-align:center; display: block;">
    <iframe loading="lazy" class="youtube-player" width="1200" height="675" src="https://www.youtube.com/embed/QIvOg74QsjA?version=3&#038;rel=1&#038;showsearch=0&#038;showinfo=1&#038;iv_load_policy=1&#038;fs=1&#038;hl=es-ES&#038;autohide=2&#038;wmode=transparent" allowfullscreen="true" style="border:0;" sandbox="allow-scripts allow-same-origin allow-popups allow-presentation">
    </iframe>
    </span>
    </div>
    `)

    incluir_seccion_hijo("acceso_busqueda_tema", "Acceso al texto completo con búsqueda avanzada por tema", "tutoriales")
    actualizar_parrafo("acceso_busqueda_tema", `
    <p>Video de tutorial de la pagina oficial de la Biblioteca FFyH </p>
    <div>
    <span class="embed-youtube" style="text-align:center; display: block;">
    <iframe loading="lazy" class="youtube-player" width="1200" height="675" src="https://www.youtube.com/embed/57bmlkfI4gE?version=3&#038;rel=1&#038;showsearch=0&#038;showinfo=1&#038;iv_load_policy=1&#038;fs=1&#038;hl=es-ES&#038;autohide=2&#038;wmode=transparent" allowfullscreen="true" style="border:0;" sandbox="allow-scripts allow-same-origin allow-popups allow-presentation">
    </iframe>
    </span>
    </div>
    `)

    incluir_seccion_hijo("acceso_busqueda_simple_autor_titulo_tema","Búsqueda Simple por Autor, Título o Tema","tutoriales");
    actualizar_parrafo("acceso_busqueda_simple_autor_titulo_tema",`
    <p>Video de tutorial de la pagina oficial de la Biblioteca FFyH </p>
    <div>
    <span class="embed-youtube" style="text-align:center; display: block;">
    <iframe loading="lazy" class="youtube-player" width="1200" height="675" src="https://www.youtube.com/embed/WsUiAgRqox8?version=3&#038;rel=1&#038;showsearch=0&#038;showinfo=1&#038;iv_load_policy=1&#038;fs=1&#038;hl=es-ES&#038;autohide=2&#038;wmode=transparent" 
    allowfullscreen="true" style="border:0;" sandbox="allow-scripts allow-same-origin allow-popups allow-presentation">
    </iframe>
    </span>
    </div>
    `)
   
   incluir_seccion_hijo("acceso_busqueda_avanzada_tema","Acceso al texto completo con búsqueda avanzada por tema","tutoriales");
    actualizar_parrafo("acceso_busqueda_avanzada_tema",`
    <p>Video de tutorial de la pagina oficial de la Biblioteca FFyH </p>
    <div>
    <span class="embed-youtube" style="text-align:center; display: block;">
    <iframe loading="lazy" class="youtube-player" width="1200" height="675" src="https://www.youtube.com/embed/t_V5LH1ltSs?version=3&#038;rel=1&#038;showsearch=0&#038;showinfo=1&#038;iv_load_policy=1&#038;fs=1&#038;hl=es-ES&#038;autohide=2&#038;wmode=transparent" 
    allowfullscreen="true" style="border:0;" 
    sandbox="allow-scripts allow-same-origin allow-popups allow-presentation">
    </iframe>
    </span>
    </div>
    
    `)    
    incluir_seccion_hijo("acceso_busqueda_banco_tesis_psicologia","Busqueda en Banco de tesis de Psicologia.","tutoriales")
    actualizar_parrafo("acceso_busqueda_banco_tesis_psicologia",`
    <p>Video de tutorial de la pagina oficial de la Biblioteca FFyH </p>
    <div>
    <span class="embed-youtube" style="text-align:center; display: block;">
    <iframe loading="lazy" width="1200" height="675" 
    src="./pages/biblioteca/documentos/Tutorial-Banco-de-Tesis-Digital Facultad-de-Psicología-UNC.mp4" 
    allowfullscreen="true" style="border:0;" sandbox="allow-scripts allow-same-origin allow-popups allow-presentation">
    </iframe></span>
    </div>
    `)

    incluir_funcion_botones();
}