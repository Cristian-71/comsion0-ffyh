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
    
    document.getElementById("instructivos_guias_varios_bt").onclick = function () {
        show_text_padre("instructivos_guias_varios");
    }
    document.getElementById("presentacion_tesis_repositorio_digital_bt").onclick = function () {
        show_text_hijo("presentacion_tesis_repositorio_digital");
    }
    document.getElementById("prestamos_domicilio_bt").onclick = function () {
        show_text_hijo("prestamos_domicilio");
    }
    document.getElementById("procedimientos_documentos_digitalizados_bt").onclick = function () {
        show_text_hijo("procedimientos_documentos_digitalizados");
    }
    document.getElementById("consulta_sala_americanistas_bt").onclick = function () {
        show_text_hijo("consulta_sala_americanistas");
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
   <p><span style="color: #ff00ff"><strong>Enlace del Catalogo de Libros, Banco de Tesis, Revistas.</strong></span></p>
   <img src="./pages/biblioteca/imagenes/catalogo-imagen-biblioteca-ffyh.png" alt="Tips sacar foto al documento" style="box-sizing: border-box; margin-top: 5px; margin-bottom: 5px; width: 100%; height: 100%;">
  
 
   <p><strong>Fuente:</strong> Pagina del Catalogo de la Biblioteca Libros y Revistas.</p>
   <p>Para dirigirse al Sitio: <a href="https://ffyh.biblio.unc.edu.ar/"target="_blank" rel="noopener"><strong>Haga click aqui.</strong></a></p>`)



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
    <div class="embed-youtube" style="text-align:center; display: block;">
    <iframe loading="lazy" class="youtube-player"; 
    src="https://www.youtube.com/embed/QIvOg74QsjA?version=3&#038;rel=1&#038;showsearch=0&#038;showinfo=1&#038;iv_load_policy=1&#038;fs=1&#038;hl=es-ES&#038;autohide=2&#038;wmode=transparent"
    allowfullscreen="true" style="border:0; width: 100%; height: 80vh" sandbox="allow-scripts allow-same-origin allow-popups allow-presentation">
    </iframe>
    </div>
    `)

    incluir_seccion_hijo("acceso_busqueda_tema", "Acceso al texto completo con búsqueda avanzada por tema", "tutoriales")
    actualizar_parrafo("acceso_busqueda_tema", `
    <p>Video de tutorial de la pagina oficial de la Biblioteca FFyH </p>
    <div class="embed-youtube" style="text-align:center; display: block;">
    <iframe loading="lazy" class="youtube-player"; src="https://www.youtube.com/embed/57bmlkfI4gE?version=3&#038;rel=1&#038;showsearch=0&#038;showinfo=1&#038;iv_load_policy=1&#038;fs=1&#038;hl=es-ES&#038;autohide=2&#038;wmode=transparent" 
    allowfullscreen="true" style="border:0; width: 100%; height: 80vh" sandbox="allow-scripts allow-same-origin allow-popups allow-presentation">
    </iframe>
    </div>
    `)

    incluir_seccion_hijo("acceso_busqueda_simple_autor_titulo_tema","Búsqueda Simple por Autor, Título o Tema","tutoriales");
    actualizar_parrafo("acceso_busqueda_simple_autor_titulo_tema",`
    <p>Video de tutorial de la pagina oficial de la Biblioteca FFyH </p>
    <div class="embed-youtube" style="text-align:center; display: block;">
    <iframe loading="lazy" class="youtube-player"; src="https://www.youtube.com/embed/WsUiAgRqox8?version=3&#038;rel=1&#038;showsearch=0&#038;showinfo=1&#038;iv_load_policy=1&#038;fs=1&#038;hl=es-ES&#038;autohide=2&#038;wmode=transparent" 
    allowfullscreen="true" style="border:0; width: 100%; height: 80vh" sandbox="allow-scripts allow-same-origin allow-popups allow-presentation">
    </iframe>
    </div>
    `)
   
   incluir_seccion_hijo("acceso_busqueda_avanzada_tema","Acceso al texto completo con búsqueda avanzada por tema","tutoriales");
    actualizar_parrafo("acceso_busqueda_avanzada_tema",`
    <p>Video de tutorial de la pagina oficial de la Biblioteca FFyH </p>
    <div class="embed-youtube" style="text-align:center; display: block;">
    <iframe loading="lazy" class="youtube-player"; 

    src="https://www.youtube.com/embed/t_V5LH1ltSs?version=3&#038;rel=1&#038;showsearch=0&#038;showinfo=1&#038;iv_load_policy=1&#038;fs=1&#038;hl=es-ES&#038;autohide=2&#038;wmode=transparent" 
    
    allowfullscreen="true" style="border:0; width: 100%; height: 80vh" sandbox="allow-scripts allow-same-origin allow-popups allow-presentation">
    </iframe>
    </div>
    `)    
    incluir_seccion_hijo("acceso_busqueda_banco_tesis_psicologia","Busqueda en Banco de tesis de Psicologia.","tutoriales")
    actualizar_parrafo("acceso_busqueda_banco_tesis_psicologia",`

    <p>Video de tutorial de la pagina oficial de la Biblioteca FFyH </p>
    <div class="embed-youtube" style="text-align:center; display: block;">
    <iframe loading="lazy" class="youtube-player"; 
    src="./pages/biblioteca/documentos/Tutorial-Banco-de-Tesis-Digital-Facultad-de-Psicología-UNC.mp4"
    allowfullscreen="true" style="border:0; width: 100%; height: 80vh" sandbox="allow-scripts allow-same-origin allow-popups allow-presentation">
    </iframe>
    </div>
    `)
    incluir_seccion_padre("instructivos_guias_varios","INSTRUCTIVOS Y GUIAS VARIAS")

    incluir_seccion_hijo("presentacion_tesis_repositorio_digital","Requisitos para la Presentacion de la tesis al Repositorio Digital de la UNC","instructivos_guias_varios")
    actualizar_parrafo("presentacion_tesis_repositorio_digital",`
    <p><span style="color: #ff00ff"><i>Extracto del sitio de la Biblioteca FFyH</i><span></p>
    <p>Antes de comenzar este tiene como fin solo informar, si usted quiere saber, recurra a fuentes de información confiables y oficial de la universidad.</p>
    <p>Usted Se preguntará, <strong>¿Por qué tengo que presentar mi trabajo final/tesis/informe de PSS para que forme parte del repositorio digital de la Universidad?</strong></p>
    <p>Hay una razón detrás de esta exigencia.</p>
    <p>La universidad como institución que se encuentra a leyes nacionales, en 2007 se aprobó la Ley 26899 que contempla la Creación de Repositorios Digitales Institucionales de Acceso Abierto; en la cual exige a todas las instituciones gubernamentales o instituciones que se encuentre bajo la órbita de la nación, como el Ministerio de Educación, por lo tanto, todo el contenido que produjeron en investigación que se hayan financiado por el Estado nacional, tienen que encontrarse a disposición de todo el público.</p>
    <p>Con fin de cumplir la ley se instauró la Oficina de Conocimiento Abierto que, en nuestra Universidad es la encargada de gestionar el Repositorio Institucional Digital de la UNC (RDU), y también tiene la función de coordinar la actuación de las Bibliotecas Universitarias, designadas como nodos responsables de incorporar la producción intelectual de las Facultades al mencionado RDU.</p>
    <p>Usted se preguntará, <strong>¿Qué es un repositorio digital?</strong></p>
    <p>Un repositorio es un espacio virtual en el cual se suben archivos , imágenes y documentos para tener su acceso en cualquier sitio en el cual te encuentres. Existen repositorios de dominio público y privado.</p>
    <p>En los privados necesitas tener acceso al mismo por un nombre de usuario y una clave para poder acceder a los archivos subidos, en este caso es necesario registrarse. Las nubes vinculadas a correos electrónicos, podrían ser un ejemplo de estos de repositorios como los son: Google Drive, Dropbox, Onedrive de Outlook, etc; porque cumplen con algunas características que tienen los repositorios.</p>
    <p>Los repositorios públicos no es necesario registrarse aunque en algunos casos si, los archivos e información se encuentran a disposición de quien tenga el dispositivo adecuado para acceder. Los entes gubernamentales e instituciones bajo la órbita del estado poseen repositorios públicos porque se encuentran amparados bajo la ley del acceso público a la información de los gobiernos y sus instituciones.</p> 
    <ul>
    <li> <strong>Ley Nº 26.899</strong> de Creacion de Repositorios Digitales Institucionales de Acceso Abierto.</li>
    <li> <strong>Resolucion 753-E/2016 MINCYT:</strong> Regalmento operativo para aplicacion de la ley Nª 26.899.</li>
    <li> <strong>Ley Nacional 22.275</strong> de Acceso a la Informacion Publica.</li>
    <li> <strong>Decreto 117/2016:</strong> Plan de apertura de datos. </li>
    </ul>
    <p>Repositorio Digital de la UNC: <a href="https://rdu.unc.edu.ar/">https://rdu.unc.edu.ar/</a></p>
    <p>Programa Arqueologia Digital. Museo de Antropologia IDACOR-CONICET. Repositorio Digital Suquia: <a href="https://suquia.ffyh.unc.edu.ar/">https://suquia.ffyh.unc.edu.ar/</a></p>
    <p>Hay legislaciones a nivel internacional que ampara la existencia de repositorios abiertos al público.</p>
    <p>Entre las instituciones públicas que tienen repositorios de dominios  públicos,  las universidades nacionales, museos bajo nacional, archivos documentales provinciales y nacionales, bibliotecas, repositorios del Archivo Nacional de Argentina, bibliotecas y otras organizaciones, sitios web como Github.</p>

        
    <br><p><span style="color: #ff00ff"><strong>INSTRUCTIVO PARA SECRETARIA</strong><span></p>
    
    <p>Concluído el proceso de aprobación de la tesis de grado, la Secretaría pertinente remitirá, a la Biblioteca Central, mediante correo electrónico: <a href="mailto:rdu@ffyh.unc.edu.ar">rdu@ffyh.unc.edu.ar</a>, el siguiente material:</p>
    <ul>
    <li> Archivo correspondiente a la tesis.</li>
    <li> Archivo del formulario de carga (completado por el tesista).</li>
    </ul>
    <p>Como último paso, solicitará al nodo (Biblioteca Central) que dé acuse de recibo, a los efectos de validar la recepción.</p>
    <p>Ante cualquier duda, la Secretaría Académica, según corresponda, resolverá.</p>
    <p><span style="color: #ff00ff"><strong>INSTRUCTIVO PARA EL TESISTA</strong><span></p>
    <p><span style="color: #ff00ff"><strong>PRESENTACION DE TESIS DE GRADO EN FORMATO DIGITAL</strong><span></p>
    
    <p>Para depositar la tesis en el Repositorio Digital Universitario RDU, el tesista deberá entregar a la Secretaría los siguientes archivos:</p>
    <ul>
    <li> PDF con el contenido de su tesis (con la licencia Creative Commons inserta en el documento)..</li>
    <li> TXT con el formulario de carga, completado por el autor, con los datos necesarios para subir la tesis al Repositorio.</li>
    </ul>
    <p>A continuación se enumeran aspectos técnicos, sugerencias de inclusión y un pequeño lineamiento para la selección de la licencia CreativeCommons</p>
    <p><span style="color: #ff00ff"><strong>ASPECTOS TECNICOS:</strong><span></p>
    
    <p>La versión digital del documento debe presentarse en un solo archivo en formato PDF, y 
    en el caso de presentar anexos, éstos serán guardados por separado, agruparlos de acuerdo al 
    tipo de formato (Texto, Imagen, Audio, Video).</p>

    <p>El archivo en PDF deberá ser indexable, (no una imagen), preferentemente  un PDF etiquetado.</p>
    <p>En cuanto al nombre del archivo se solicita que se guarde con la siguiente 
    modalidad: apellido espacio guión espacio las cinco primeras palabras del 
    título, máx. 25 caracteres.</p>
   
    <p><span style="color: #ff00ff"><strong>ACCESIBILIDAD:</strong><span></p>
    <p><span style="color: #ff00ff"><strong> SUGERENCIAS A TENER EN CUENTA:</strong><span></p>

    <p>Es importante incorporar en la elaboración de los contenidos, elementos de accesibilidad, a fin de postular un conocimiento de acceso realmente abierto para todos.</p>
    <p>Mencionamos algunas:</p>
    <ul>
    <li>Diseño general y presentación: utilice alineación a la izquierda (esto ayuda a encontrar el principio del renglón).</li>
    <li>Explicar las abreviaturas y acrónimos.</p></li>
    <li>El tamaño de fuente debe ser grande: no se recomiendan letras inferiores a 12 puntos.</li>
    <li>Para las imágenes, incorporar textos explicativos, ya que el texto que forma parte de una imagen no es accesible, repetirlo por fuera.</li>
    <li>Diseño general y presentación: utilice alineación a la izquierda (esto ayuda a encontrar el principio del renglón).</li>
    <li>Para los enlaces, evitar textos como “clic aquí” o “más información”.</li>
    <li>Algunas personas ciegas navegan por las páginas leyendo únicamente el texto de los enlaces.Insertarlos siempre como hipervínculos.</li>
    
    <li>Un documento PDF etiquetado es una versión de PDF que incluye tanto el contenido deldocumento como información sobre su estructura lógica y del orden de lectura, de forma que el documento pueda ser leído correctamente por los lectores de pantalla.</li>
    </ul>
    <p><span style="color: #ff00ff"><strong> LICENCIAS CREATIVECOMMONS:</strong><span></p>
   
    <p>La licencia seleccionada debe encontrarse inserta en el cuerpo de la obra (preferentemente en la portada), de este modo, cuando el archivo es descargado, la licencia continúa ligada a la obra.</p>
    <p>Para seleccionar la licencia, remitirse a:</p>
    <p><a href="http://www.creativecommons.org.ar/"target="_blank" rel="noopener"><strong> http://www.creativecommons.org.ar/</strong></a></p>
    <p>El tesista deberá indicar que opciones elije a los efectos de construir la licencia:</p>
    <ul>
    <li>En el primer paso se selecciona la característica de la licencia, esto es: si permite adaptaciones o no.</li>
    </ul>
    <p>En el caso de responder si, hay que tildar: Sí, siempre que se comparta de la misma manera. Lo cual significa que la obra podrá tener derivados, pero, éstos deberán mantener la misma licencia.</p>
    <p>En este primer paso, el autor debe optar si permite el uso comercial, o no, de su obra.</p>
    <p>Las elecciones en este panel actualizarán los otros paneles de esta página.</p></li>
    <ul>
    <li>El segundo paso, es opcional. Aquí se pueden agregar metadatos a la licencia, tales como: datos de título y nombre completo del autor</li>
    <li>El tercer paso consiste en copiar la licencia seleccionada, que se presenta en el último panel. Copiar y pegar en el documento de la tesis.</li>
    </ul>
    <p><strong><i>Hay algunos detalles, informacion, archivos de la resolucion aprobada por la universidad, documentaciones oficiales, que quedaron fuera. Les recomendio visitar la Pagina Presentacion de trabajos finales al Repostorio Digital Universal, para acceder a la informacion que no se encuentra presente en este texto.</i></strong></p>

    <br><p><strong>Fuente:</strong> Pagina de la Presentacion de trabajos finales al Repostorio Digital Universal.</p>
    <p>Para ir al Sitio: <a href="https://ffyh.unc.edu.ar/biblioteca/presentacion-de-trabajos-al-rdu/"target="_blank" rel="noopener"><strong>https://ffyh.unc.edu.ar/biblioteca/presentacion-de-trabajos-al-rdu/</strong></a></p>`

    );

    incluir_seccion_hijo("prestamos_domicilio","Prestamos","instructivos_guias_varios")
    actualizar_parrafo("prestamos_domicilio",`
    <br>
    <p><span style="color: #ff00ff"><strong> PRÉSTAMOS A DOMICILIO:</strong><span></p>
    <br>
    <p><span style="color: #ff00ff"><strong>INSCRIPCIONES</strong><span></p>
    
    
    <p><strong>¿Quienes pueden realizar prestamos a domicilio?</strong></p>
    <p>Las personas que pueden solicitar prestamos a la biblioteca, son aquellas que se encuentren inscriptas en el registro de la biblioteca.</p>
        
    <p><strong>¿Quienes podrán inscribirse para hacer uso de préstamos de material bibliográfico?</strong></p>
    <p>Las personas que podrán inscribirse pueden ser:</p>
    <ul>
    <li>personal docente</li>
    <li>investigadores</li>
    <li>no docentes</li>
    <li>iegresados</li>
    <li>personal docente</li>
    <li>alumnos de grado</li>
    <li>postgrado</li>
    <li>vocacionales de la Facultad de Filosofía y Humanidades y de la Facultad de Psicología</li>
    <li>intercampus de la Facultad de Filosofía y Humanidades y de la Facultad de Psicología</li>
    <li>vocacionales</li>
    <li>postgrado</li>
    <li>docentes con cargo de otras Facultades de la UNC</li>
    <li>investigadores de otras Facultades de la UNC</li>
    <li>no docentes de otras Facultades de la UNC</li>
    </ul>
    
    <p><strong>¿Cuales son los requisitos que se necesita para inscribirse?</strong></p>
     
    <ul>
    <li><strong>Docentes y/o investigadores:</strong> deberan estar incluidos
     en el registro de personal de la Facultad, y  deberan 
    presentar en la Biblioteca, la Resolución del cargo actualizada y 
    documento de identidad. La Duración de 
    la inscripción es 1 año calendario.</li>

    <li><strong>No docentes:</strong> deberan estar incluidos en el 
    registro de personal de la Facultad, y tendran que presentar certificado 
    del área Personal que acredite su cargo y el documento de identidad. La Duración de la 
    inscripción es 1 año calendario.</li>
    <li><strong>Egresados:</strong> deberan cumplimentar los requisitos 
    establecidos en la solicitud entregada por la misma 
    biblioteca, y ademas el DNI y, por ultimo, deberan realizar el pago de la cuota anual. 
    La Duración de la inscripción es 1 año calendario.</li>
    <li><strong>Alumnos:</strong> deberan presentar Libreta Trabajos de Practicos, con la inscripción académica correspondiente al año lectivo en curso. 
    La Duración de la inscripción es 1 año académico.</li>
    <li><strong>Alumnos Vocacionales:</strong> se deberan inscribirse con la Libreta Trabajos 
    de Practicos y por el año en curso. 
    La Duración de la inscripción es hasta el 31 de diciembre.</li>
    <li><strong>Alumnos intercampus:</strong> se deberan inscribir, presentando 
    el carnet intercampus y el Pasaporte. La Duración de la inscripción
    es solo por el período que permanezca en las Facultades.</li>
    <li><strong>Docentes y/o investigadores de otras Facultades:</strong>
    deberan estar incluidos en el registro del personal de la 
    Facultad, a la que pertenecen, que tendran que presentar en biblioteca, 
    la Resolución del cargo de la Facultad respectiva,
    en el cual, figure la duración del proyecto, el DNI y, por ultimo, tendran que abonar la cuota. La Duración de la inscripción es 1 año calendario.</li>
    </ul>
    <br>
    
    <p>Los/as usuarios/as, deberán reinscribirse todos los años, en la fecha estipulada y actualizar los datos personales, como:</p>
    <ul>
    <li>domicilio</li>
    <li>teléfono</li>
    <li>correo electrónico</li>
    <li>y otros datos, segun correspondan y sean solicitados por el personal de la biblioteca</li>
    </ul>

    <p>Los datos personales deberán ser presentados en la biblioteca, para ser actualizados, por el titular al personal de la biblioteca.</p>
    <br>
    <p><span style="color: #ff00ff"><strong>PRÉSTAMOS A DOMICILIO:</strong><span></p>

    <p><strong>¿Cual es el requisito indispensable para acceder a los prestamos a domicilio?</strong></p>

    <p>El requisito indispensable, es estar inscripto en biblioteca, para gozar de préstamos de material 
    bibliográfico a domicilio.</p>
   
    <p>Los préstamos son personales debiendo presentar, Libreta de Trabajos Prácticos o Documento de 
    Identidad o Cédula, sin excepción, siendo el material facilitado de absoluta responsabilidad de quien 
    lo retira.</p>
    <p><strong>¿Quienes pueden realizar las devoluciones?</strong></p>
    <p>Las devoluciones no son personales y pueden ser realizadas por terceros.</p>
    </p>
    </p><strong>¿Cuantos materiales de la biblioteca pueden llevarse a su domicilio, en el prestamo?</strong></p>
    <ul>
    <li>Los/las docentes, investigadores/as, tesistas, maestrandos/as y doctorandos/as podrán retirar hasta cuatro (4) libros y cuatro (4) revistas.</li>
    <li>Los/las alumnos/as, ayudantes-alumnos/as, egresados/as y no-docentes podrán retirar hasta tres (3) libros y tres (3) revistas.</li></ul>
    <p>Dichos préstamos se efectuarán por el término de siete(7) días corridos, con excepción de los <i>"préstamos restringidos"</i> 
    de dos (2) días. Un/a mismo/a usuario/a no podrá retirar dos ejemplares iguales.</p>

    <p><strong>¿Que tipo de material puede prestarse a domicilio, de la biblioteca?</strong></p>
    <p>En el acervo bibliográfico de la biblioteca, se distinguen las siguientes categorías:</p>

    <p><strong><i>Material para préstamos en sala, a domicilio e interbibliotecario:</i></strong></p>
    <ul>
    <li>bibliografía de todas las secciones, salvo las excepciones contempladas en el apartado (2) bibliografía incluida en la modalidad Estantería Abierta que además se puede consultar sin presentación del DNI. </li>
    <li>bibliografía seleccionada por las distintas cátedras que podrán consultarse en sala de lunes a viernes y estará disponible para el préstamo a domicilio y/o interbibliotecario, los viernes a partir de las 17:00 hs. hasta el lunes siguiente antes de las 11:00 hs.</li>
    </ul>

    <p><strong><i>Material audiovisual:</i></strong></p>
    
    <ul>
    <li>método Linguaphone de inglés, francés, griego y latín, el cual se prestará por el término de quince (15) días.</li>
    </ul>
   
    <p><strong><i>Material bibliográfico disponible sólo para consulta en sala de lectura:</i></strong></p>
    
    <ul>
    <li>obras de referencia: 
    <li>enciclopedias</li> 
    <li>diccionarios</li>
    <li>guías</li>
    <li>mapas</li>
    <li>y otros materiales bibliográficos</li>
    </ul>
    <p><strong><i>Los libros de Valor Especial del acervo bibliográfico de la biblioteca:</i></strong></p>
    
    <ul>
    <li>ediciones agotadas</li>
    <li>antiguas</li>
    <li>libros ilustrados y de lujo</li>
    <li>libros anteriores a 1930 (Fondo Antiguo)</li>
    <li>códices</li>
    <li>obras que integran el fondo documental de la bibliotca “Monseñor Pablo Cabrera”</li>
    <li>y otros materriales del acervo bibliográfico</li>
    </ul>
    <br>
    <p><span style="color: #ff00ff"><strong> DEVOLUCIONES:</strong><span></p>
    <ul>
    <li>Los/as usuarios/as deberán devolver el material bibliográfico en las fechas o plazos estipulados por la Biblioteca, en caso de demora serán pasibles de las sanciones correspondientes y previstas en el art.15 del presente reglamento.</li>
    <li>Los libros devueltos en el día, se prestarán nuevamente a partir del día siguiente, con excepción de los días viernes, en que podrán volver a prestarse a partir de la apertura de la biblioteca.</li>
    <li>El/la mismo/a usuario/a no podrá retirar más de dos veces consecutivas el mismo libro.</li>
    </ul>
    <br>
    <p><strong><i>Texto modificado del original, con la intencion acercar informacion y que la lectura sea mas entendible. Fuente: Reglamento de la biblioteca.</i></strong></p>
    <p>Para mas informacion y confiable.<strong> Lea el Reglamento de la biblioteca: <a href="https://ffyh.unc.edu.ar/biblioteca/reglamento-de-la-biblioteca/">https://ffyh.unc.edu.ar/biblioteca/reglamento-de-la-biblioteca/</a></strong></p>
    <br>
    
    <p><span style="color: #ff00ff"><strong> PRÉSTAMOS INTERBIBLIOTECARIOS</strong><span></p>
    
    <p>Los prestamos son personales y todos los usuarios deberan presentar:</p>
    <ul>
    <li>su DNI y Libreta de Trabajos Practicos.</li>
    <li>su DNI, Libreta de Trabajos Practicos y/o  Pasaporte en el caso de ser usuarios extranjeros.</li>
    </ul>
    <p>Prestamos Interbibliotecarios:</p>
    <ul>
    <li><strong>UNC:</strong> Todos los socios pueden beneficiarse con este sistema y solicitar materiales no disponibles en esta biblioteca a otras bibliotecas de la UNC.</li>
    <li><strong>ABUC:</strong> Todos los socios pueden solicitar en préstamo material disponibles en bibliotecas de otras universidades de la provincia de Córdoba través de ABUC (Acuerdo de Bibliotecas Universitarias de Córdoba), abriendo un importante abanico de posibilidades en cuanto a la cooperación e intercambio de bibliografía.</li>
    
    </ul>
    <br>
    
    <p>Visite el Sitio Oficial de ABUC: <a href="https://abuc.org.ar/portal/">https://abuc.org.ar/portal/</a></p>
    
   
    <p>Reglamento Biblioteca de FFyH - Psicologia: <a href="https://ffyh.unc.edu.ar/biblioteca/reglamento-de-la-biblioteca/">https://ffyh.unc.edu.ar/biblioteca/reglamento-de-la-biblioteca/</a>
    `)


    incluir_seccion_hijo("procedimientos_documentos_digitalizados","Procedimientos para la consulta de documentos digitalizados","instructivos_guias_varios")
    actualizar_parrafo("procedimientos_documentos_digitalizados",`
    <br>
    <p><strong>¿Cuales son los Procedimientos para la consulta de documentos digitalizados?</strong></p>
    <br>
    <p><strong>En principio es Enviar el listado con los números de documentos (signatura archivística):</strong></p>
    <ul>
    <li>Completar formulario web </li>
    <li>Formulario en papel (a completar in situ).</li>

    <li>Correo electrónico a las direcciones:
    <ol>
    <li><a href="mailto:sfois@ffyh.unc.edu.ar">sfois@ffyh.unc.edu.ar</a></li>
    <li><a href="mailto:javiergonzalez@ffyh.unc.edu.ar">javiergonzalez@ffyh.unc.edu.ar</a></li>
    </ol>
    </li>
    </ul>
    <br>
    <p><strong>¿Cuales son los números de documentos (signatura archivística)?</strong></p>
    <p>Un numero de documento, es un numero que tiene un archivo, es un numero unico, como codigo barra, que se lo puede identificar.</p>
    <p>Es un numero que identifica un item dentro de una coleccion o reservorio bibliografico, que se utiliza en la archivistica.
    Para conocer el numero, es necesario hacer una busqueda en el catologo online de la Biblioteca
    para poder encontrar las siglas que identifica: la sala o el espacio en el cual se encuentra guardado.</p>
    
    <br>
   
   

    
    
    <br>
    <p><strong>Compromiso de parte del usuario, citar el documento.</strong></p>
    <p>Esto siginifica que el paper producido por su investigacion, en base a la informacion del documento/archivo/libro/publicacion, prestado por la biblioteca, tiene ó deberia ser citado por parte del investigador en donde consiguio el documento o informacion.</p>
    <p><strong><i>Departamento de Estudios Americanistas y Antropologia. Biblioteca Facultad de Filosofia y Humanidades. Universidad Nacional de Córdoba</i></strong></p>

    
    <p>Ejemplo de cita:</p>
    <p><i>Documento 11256. Colección Documental Monseñor Pablo Cabrera. Departamento de Estudios Americanistas y Antropología. Biblioteca Facultad de Filosofía y Humanidades - Facultad de Psicología. Universidad Nacional de Córdoba.</i></p>
 
   <br>
   <p>El catálogo de la Colección documental debe ser citado de la siguiente manera:</p>
    <p><i>Benito Moya, S. G. A. (2002). Catálogo Documental «Mons. Dr. Pablo Cabrera». Córdoba, Argentina : Facultad de Filosofía y Humanidades, Universidad Nacional de Córdoba.</i></p>
    <br>

    <p><strong>Consignar los siguientes datos:</strong></p>
    <br>
    <p>Agregar o completar los siguientes campos, pestañas segun corresponda:</p>

    <ul>
    <li>Signatura archivística del documento </li>
    <li>Nombre y apellido </li>
    <li>Institución de pertenencia </li>
    <li>Proyecto: Título y radicación</li>
    <li>Director del proyecto </li>
    <li>Dirección de Correo electrónico </li>
    <li>Teléfono </li>
    </ul>
    <br>
    <img src="./pages/biblioteca/imagenes/imagen-agregar-campos.png" alt="Captura de pantalla, pagina de Consultar documentos digitalizados, seccion completar campos" style="box-sizing: border-box; margin-top: 5px; margin-bottom: 5px; width: 100%; height: 100%;">

    <br>
    <p>Agregar o subir archivos/documentos en las siguientes input, pestañas:</p>
    <ul>
    <li>Archivo adjunto: Nota del director o resumen de proyecto </li>
    <li>Archivo adjunto: Listado de documentos a consultar </li>
    </ul>
    <br>
    <img src="./pages/biblioteca/imagenes/imagen-adjuntar-archivos.png" alt="Captura de pantalla, pagina de Consultar documentos digitalizados, seccion adjuntar archivos" style="box-sizing: border-box; margin-top: 5px; margin-bottom: 5px; width: 100%; height: 100%;">
    <br>
    <br>
    <p><strong>Fuente:</strong> Pagina de la Procedimientos para la consulta de documentos digitalizados.</p>
    <p>Para ir al Sitio: <a href="https://ffyh.unc.edu.ar/biblioteca/procedimientos-para-la-consulta-de-documentos-digitalizados/"target="_blank" rel="noopener"><strong>https://ffyh.unc.edu.ar/biblioteca/procedimientos-para-la-consulta-de-documentos-digitalizados/</strong></a></p>

    `)
    incluir_seccion_hijo("consulta_sala_americanistas","Consulta en sala de Americanistas, banco de tesis, fondo antiguo","instructivos_guias_varios")
    actualizar_parrafo("consulta_sala_americanistas",`


    <p><span style="color: #ff00ff"><strong> Biblioteca Elma K. de Estrabou - Consulta en sala de Americanistas, banco de tesis, fondo antiguo.</strong><span></p>
    <br>

   <p>Usted se comunicó con la Biblioteca para solicitar un turno para la consulta en el Dpto Americanistas y/o el Banco de Tesis de Psicología. Es necesario que complete este formulario y detalle la bibliografía que necesita (Autor, título y signatura topográfica) para lo cual deberá ingresar al catálogo y verificar si esta disponible: </p>
   <p><a href="https://ffyh.biblio.unc.edu.ar/"target="_blank" rel="noopener"><strong>https://ffyh.biblio.unc.edu.ar/</strong></a></p>
   <br>
   <p>Recuerde consignar su número de celular y correo electrónico y nos estaremos comunicando para otorgarle un turno.</p>

   <p>Si Ud. no esta inscripto/a en la Biblioteca en el 2021 por favor complete el formulario de este enlace:</p>
   <p><a href="https://ffyh.unc.edu.ar/biblioteca/inscripcion-a-biblioteca-2020-online/"target="_blank" rel="noopener"><strong>https://ffyh.unc.edu.ar/biblioteca/inscripcion-a-biblioteca-2020-online/</strong></a></p>
   <br>
   <p>Por cualquier consulta escribanos a: <a href="mailto:circulacion@ffyh.unc.edu.ar">circulacion@ffyh.unc.edu.ar</a></p>
    <br>
   <p><strong>Fuente:</strong> Pagina de la Consulta en el Dpto Americanistas y/o el Banco de Tesis de Psicología.</p>
    <p>Para ir al Sitio:</p>
    <p><a href="https://ffyh.unc.edu.ar/biblioteca/consulta-en-el-dpto-americanistas-y-o-el-banco-de-tesis-de-psicologia/"target="_blank" rel="noopener"><strong>https://ffyh.unc.edu.ar/biblioteca/consulta-en-el-dpto-americanistas-y-o-el-banco-de-tesis-de-psicologia/</strong></a></p>
    <br>
    <p>Para ir Formulario de Google:</p>
    <p><a href="https://docs.google.com/forms/d/e/1FAIpQLScp7PgQYM4vA7Md2E04ZI-VIkWVpcK1AJuWwnhGq7TrnLadKA/viewform"target="_blank" rel="noopener"><strong>https://docs.google.com/forms/d/e/1FAIpQLScp7PgQYM4vA7Md2E04ZI-VIkWVpcK1AJuWwnhGq7TrnLadKA/viewform</strong></a></p>

    
    
    `)

    incluir_funcion_botones();
}