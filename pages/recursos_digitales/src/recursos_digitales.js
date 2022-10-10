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

    document.getElementById("herramientas_digitales_bt").onclick = function () {
        show_text_padre("herramientas_digitales");
    }
    document.getElementById("definicion_bt").onclick = function () {
        show_text_hijo("definicion");
    }
    document.getElementById("diferencias_web_app_bt").onclick = function () {
        show_text_hijo("diferencias_web_app");
    }

    document.getElementById("apps_trabajo_colaborativo_bt").onclick = function () {
        show_text_padre("apps_trabajo_colaborativo");
    }
    document.getElementById("asana_bt").onclick = function () {
        show_text_hijo("asana");
    }
    document.getElementById("trello_bt").onclick = function () {
        show_text_hijo("trello");
    }
    document.getElementById("mindmeister_bt").onclick = function () {
        show_text_hijo("mindmeister");
    }
    document.getElementById("mattermost_bt").onclick = function () {
        show_text_hijo("mattermost");
    }

    document.getElementById("apps_diseño_bt").onclick = function () {
        show_text_padre("apps_diseño");
    }
    document.getElementById("canva_bt").onclick = function () {
        show_text_hijo("canva");
    }
    document.getElementById("google_slides_bt").onclick = function () {
        show_text_hijo("google_slides");
    }
    document.getElementById("befunky_bt").onclick = function () {
        show_text_hijo("befunky");
    }
    document.getElementById("animoto_bt").onclick = function () {
        show_text_hijo("animoto");
    }
    document.getElementById("biteable_bt").onclick = function () {
        show_text_hijo("biteable");
    }


    document.getElementById("desarrollo_web_bt").onclick = function () {
        show_text_padre("desarrollo_web");
    }
    document.getElementById("wix_bt").onclick = function () {
        show_text_hijo("wix");
    }
    document.getElementById("wordpress_bt").onclick = function () {
        show_text_hijo("wordpress");
    }

    document.getElementById("softwares_alternativos_microsoft_office_bt").onclick = function () {
        show_text_padre("softwares_alternativos_microsoft_office");
    }
    document.getElementById("libre_office_bt").onclick = function () {
        show_text_hijo("libre_office");
    }
    document.getElementById("open_office_bt").onclick = function () {
        show_text_hijo("open_office");
    }
    document.getElementById("google_docs_bt").onclick = function () {
        show_text_hijo("google_docs");
    }

    document.getElementById("softwares_orientados_documentos_escritos_bt").onclick = function () {
        show_text_padre("softwares_orientados_documentos_escritos");
    }
    document.getElementById("latex_bt").onclick = function () {
        show_text_hijo("latex");
    }
    document.getElementById("lyx_bt").onclick = function () {
        show_text_hijo("lyx");
    }
    document.getElementById("texmaker_bt").onclick = function () {
        show_text_hijo("texmaker");
    }

    document.getElementById("softwares_escribir_markdown_bt").onclick = function () {
        show_text_padre("softwares_escribir_markdown");
    }
    document.getElementById("zettir_bt").onclick = function () {
        show_text_hijo("zettir");
    }
    document.getElementById("obsidian_bt").onclick = function () {
        show_text_hijo("obsidian");
    }
    document.getElementById("stackedit_bt").onclick = function () {
        show_text_hijo("stackedit");
    }
    document.getElementById("hackmd_bt").onclick = function () {
        show_text_hijo("hackmd");
    }

    document.getElementById("nubes_repositorios_digitales_remotos_bt").onclick = function () {
        show_text_padre("nubes_repositorios_digitales_remotos");
    }
    document.getElementById("filen_bt").onclick = function () {
        show_text_hijo("filen");
    }
    document.getElementById("koofr_bt").onclick = function () {
        show_text_hijo("koofr");
    }
    document.getElementById("sync_com_bt").onclick = function () {
        show_text_hijo("sync_com");
    }
    document.getElementById("dropbox_bt").onclick = function () {
        show_text_hijo("dropbox");
    }
    document.getElementById("googledrive_bt").onclick = function () {
        show_text_hijo("googledrive");
    }
    document.getElementById("box_bt").onclick = function () {
        show_text_hijo("box");
    }

    document.getElementById("softwares_sistema_gestor_cambios_bt").onclick = function () {
        show_text_padre("softwares_sistema_gestor_cambios");
    }
    document.getElementById("git_bt").onclick = function () {
        show_text_hijo("git");
    }
    document.getElementById("github_bt").onclick = function () {
        show_text_hijo("github");
    }
    document.getElementById("gitlab_bt").onclick = function () {
        show_text_hijo("gitlab");
    }

    document.getElementById("softwares_gestores_bibliograficos_bt").onclick = function () {
        show_text_padre("softwares_gestores_bibliograficos");
    }
    document.getElementById("zotero_bt").onclick = function () {
        show_text_hijo("zotero");
    }
    document.getElementById("zotfile_bt").onclick = function () {
        show_text_hijo("zotfile");
    }
    document.getElementById("better_bibtex_bt").onclick = function () {
        show_text_hijo("better_bibtex");
    }
    document.getElementById("zotero_bib_bt").onclick = function () {
        show_text_hijo("zotero_bib");
    }
    document.getElementById("bibtex_bt").onclick = function () {
        show_text_hijo("bibtex");
    }
    document.getElementById("jabref_bt").onclick = function () {
        show_text_hijo("jabref");
    }

    document.getElementById("softwares_reconocimiento_optico_caracteres_bt").onclick = function () {
        show_text_padre("softwares_reconocimiento_optico_caracteres");
    }
    document.getElementById("cognitive_open_ocr_bt").onclick = function () {
        show_text_hijo("cognitive_open_ocr");
    }
    document.getElementById("tesseract_bt").onclick = function () {
        show_text_hijo("tesseract");
    }

    document.getElementById("softwares_analisis_datos_cualitativos_bt").onclick = function () {
        show_text_padre("softwares_analisis_datos_cualitativos");
    }
    document.getElementById("atlas_ti_bt").onclick = function () {
        show_text_hijo("atlas_ti");
    }
    document.getElementById("qualcoder_bt").onclick = function () {
        show_text_hijo("qualcoder");
    }
    document.getElementById("taguette_bt").onclick = function () {
        show_text_hijo("taguette");
    }
    document.getElementById("catma_bt").onclick = function () {
        show_text_hijo("catma");
    }
    document.getElementById("kh_koder_bt").onclick = function () {
        show_text_hijo("kh_koder");
    }
    document.getElementById("rqda_bt").onclick = function () {
        show_text_hijo("rqda");
    }
    document.getElementById("lista_software_acd_bt").onclick = function () {
        show_text_hijo("lista_software_acd");
    }

    document.getElementById("recursos_informacion_publicar_bt").onclick = function () {
        show_text_padre("recursos_informacion_publicar");
    }
    document.getElementById("rdu_repositorio_digital_universidad_bt").onclick = function () {
        show_text_hijo("rdu_repositorio_digital_universidad");
    }
    document.getElementById("miar_bt").onclick = function () {
        show_text_hijo("miar");
    }
    document.getElementById("donde_lo_publico_bt").onclick = function () {
        show_text_hijo("donde_lo_publico");
    }
    document.getElementById("lib_gen_bt").onclick = function () {
        show_text_hijo("lib_gen");
    }
    document.getElementById("mirror_other_link_bt").onclick = function () {
        show_text_hijo("mirror_other_link");
    }
    document.getElementById("sci_hub_bt").onclick = function () {
        show_text_hijo("sci_hub");
    }

    document.getElementById("otros_recursos_utiles_bt").onclick = function () {
        show_text_padre("otros_recursos_utiles");
    }
    document.getElementById("anki_bt").onclick = function () {
        show_text_hijo("anki");
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

    incluir_seccion_padre("herramientas_digitales", "HERRAMIENTAS DIGITALES");

    incluir_seccion_hijo("definicion", "¿Que son las Herramientas Digitales?", "herramientas_digitales")
    actualizar_parrafo("definicion", `
   <p><span style="color: #ff00ff"><strong>Herramientas Digitales:</strong></span></p>
    <p>Las herramientas digitales son todos los recursos de software (algunos incluyen en su defición al hardware que contiene software) presentes en computadoras y dispositivos relacionados, que permite realizar o facilitar todo tipo de actividades.</p>
   <br>
    <p><strong>Fuente:</strong> Clase 1. Curso de Tecnologias Interactivas. Academia Buenos Aires Emprende, Septiembre 2022.</p>
   `)
    incluir_seccion_hijo("diferencias_web_app", "¿Cuales son las diferecias entre las 'WEB APP' y 'APP'?", "herramientas_digitales")
    actualizar_parrafo("diferencias_web_app", `
  <p><span style="color: #ff00ff"><strong>Herramientas Digitales:</strong></span></p>
   
  <table class="table">
        <thead>
          <tr>
         
            <th scope="col">WEB APP</th>
            <th scope="col">APP</th>
           
            
          </tr>
        </thead>
        <tbody>
          <tr>
           
            <td>El fronted se descarga de nuestro servidor.</td>
        <td>Se descarga de los stores, el fronted está en el dispositivo del usuario (sólo necesitamos tener backend). 
        
        </td>
           
          </tr>
          <tr>
           
            <td>Requiere tener dominio y hosting (10usd + 30 usd respectivamente por año aproximadamente</td>
            <td>Requiere publicar en los stors (lleva tiempo) (25usd - 100usd única vez).</td>
             </tr>
          <tr>
           
            <td>No perimite recibir notificaciones (relativo).</td>
            <td>Puede recibir notificaciones</td>
          </tr>
          <tr>
            
            <td>El contenido está indexado en Google.</td>
            <td>Sòlo la publicación en los stores se indexa en Google.</td>
            
          </tr>
          <tr>
            
            <td>En principio funciona en cualquier dispositvo.</td>
            <td>Puede tener problemas de compatibilidad con diferentes sistemas operativos.</td>
            
          </tr>
          <tr>
            
            <td></td>
            <td>Más dificil de desarrollar y recolectar estadisticas.</td>
            
           
           
          </tr>
         
        </tbody>
      </table>
      <br>
  <p>El fronted en una pagina web: es la estructura (HTML), el diseño (CSS),
        el uso de JavaScript del lado del usuario y algunos frameworks o librerías para crear todo tipo de interfaces de usuario.
        JavaScript que es un lenguaje de programación o de secuencias de comandos que te permite implementar funciones complejas 
        en una páginas web.</p>
        <p>El backend se encuentra detras del fronted, el flujo de trabajo de un backend 
        consiste en darle funciones a un sitio; mientras que el frontend 
        hace un sitio estático, el backend después le da funciones y adapta 
        el sistema programado a ese sitio web.Otras funciones que se gestionan son:</p>
        <ul>
         <li> Creación de funciones que simplifiquen el proceso de desarrollo.</li>       
            <li>  Acciones de lógica.</li> 
            <li>  Conexión con bases de datos.</li>
            <li> Uso de librerías del servidor web (un ejemplo puede ser para implementar temas de caché).
            </li>   
         </ul>


        <br>

        <p><strong>Fuente:</strong> Fronted y Backend. <a href="https://www.servnet.mx/blog/backend-y-frontend-partes-fundamentales-de-la-programacion-de-una-aplicacion-web"target="_blank" rel="noopener">Sitio informativo</a></p>
        <p><strong>Fuente:</strong> Javascript. <a href="https://developer.mozilla.org/es/docs/Learn/JavaScript/First_steps/What_is_JavaScript"target="_blank" rel="noopener">Sitio informativo</a></p>

  <p><strong>Fuente:</strong> Clase 1. Curso de Tecnologias Interactivas. Academia Buenos Aires Emprende, Septiembre 2022.</p>
  `)

    incluir_seccion_padre("apps_trabajo_colaborativo", "APPS PARA PARA TRABAJO COLABORATIVO");

    incluir_seccion_hijo("asana", "Asana", "apps_trabajo_colaborativo")
    actualizar_parrafo("asana", `
    <p><span style="color: #ff00ff"><i>¿Qué es Asana?</i><span></p>
    <p>Asana es una aplicación web y móvil que permite crear, distribuir y gestionar el flujo de trabajo de tareas y proyectos con la finalidad de mantener un ciclo de productividad y orden de inicio a fin.</p>
    
    <p>Es así como Asana ofrece una serie de soluciones para planificar tareas y mantenerte a ti y a todos los integrantes de un equipo de trabajo coordinados en sus responsabilidades, tiempos de entrega, pasos para llevar a cabo un proyecto en su totalidad y organización de los recursos necesarios para abordar las actividades, todo esto con la ayuda de una interfaz sencilla y enfocada únicamente en los aspectos más importantes. </p> 
    <br><p><span style="color: #ff00ff"><i>Funciones</i><span></p>
    <ul>
    <li>Creación de proyectos </li>
    <li>Creación de tableros </li>
    <li>Creación de cronogramas</li>
    <li>Creación de calendarios</li>
    <li>Integración de la información</li>
    <li>Integración con otras aplicaciones</li>
    <li>Posibilidad de programar recordatorios</li>
   
    </ul>
    <p><strong>Fuente:</strong>Asana: ¿Qué es y cómo funciona?<a href="https://trabajarporelmundo.org/asana-que-es-y-como-funciona/"target="_blank" rel="noopener">Sitio informativo.</a></p>
    <br>
    <p><strong>Fuente:</strong>Descargar Asana.<a href="https://asana.com/es/download"target="_blank" rel="noopener">Sitio Oficial.</a></p>
     `);
    incluir_seccion_hijo("trello", "Trello", "apps_trabajo_colaborativo")
    actualizar_parrafo("trello", `
    <p><span style="color: #ff00ff"><i>¿Que es Trello?</i><span></p>
    <p>Trello es una aplicación basada en el método Kanban y sirve para gestionar tareas permitiendo organizar el trabajo en grupo de forma colaborativa mediante tableros virtuales compuestos de listas de tareas en forma de columnas.</p>

    <p>Es perfecta para la gestión de proyectos ya que se pueden representar distintos estados y compartirlas con diferentes persona que formen el proyecto. Con ella se intenta mejorar las rutinas de trabajo de un equipo generando prioridades, tiempos, avisos y otras opciones perfectas para organizar un proyecto en el que colaboran varias personas.</p>
    <br>
    <p><span style="color: #ff00ff"><i>¿Para qué sirve Trello? </i><span></p>
    
    <p>El objetivo principal de Trello puede resumirse en una única tarea: proveer una herramienta para la organización de la información. Esta plataforma está optimizada para hacer más sencillas las tareas de los equipos de trabajo. </p>

    <p>Mediante una interfaz interactiva, los usuarios pueden acceder a información ordenada sobre un proyecto, un plan de trabajo o una meta a cumplir. Por ello, Trello funciona a través de la creación de medios de comunicación inteligentes e intuitivos basados en visualizaciones claras de los datos que se intentan transmitir. </p>
    <p>Entre sus principales funcionalidades podemos destacar:</p>
    <ul>
    <li>Facilita la organización y la información por medio de recursos visuales. </li>
    <li>Ayuda en la gestión de pequeñas y grandes tareas. </li>

    <li>Cuenta con recursos creativos, como herramientas de lluvia de ideas. </li>
    <li>Auxilia en la concreción de objetivos y la ejecución de planes de trabajo. </li>
    <li>Da cuenta del progreso en el cumplimiento de un plan. </li>

    <li>Permite el acceso a un plan de trabajo a diferentes usuarios. </li> 
    </ul>
    <p><strong>Fuente:</strong>Asana: Trello. Qué es, para qué sirve y cómo funciona<a href="https://www.expertosnegociosonline.com/que-es-trello-para-que-sirve/"target="_blank" rel="noopener">Sitio informativo.</a></p>
    <p><strong>Fuente:</strong>Asana: ¿Qué es Trello?<a href="https://blog.hubspot.es/marketing/que-es-trello"target="_blank" rel="noopener">Sitio informativo.</a></p>
    
    <br>
    <p><strong>Fuente:</strong> Trello.<a href="https://asana.com/es/download"target="_blank" rel="noopener">Sitio Oficial.</a></p>
   
   `);
    incluir_seccion_hijo("mindmeister", "Midmeister", "apps_trabajo_colaborativo")
    actualizar_parrafo("mindmeister", `
    <p><span style="color: #ff00ff"><i>¿Qué es MindMeister?</i><span></p>

    <p>MindMeister es una herramienta para generar mapas mentales en línea que te permite:<p>
    <ul>
    <li>Crear, editar y presentar (hasta tres) mapas mentales.</li>
    <li>Almacenar tus trabajos en línea y acceder a ellos desde cualquier lugar y momento.</li>        
    <li>Realizar mapas mentales de manera colaborativa en tiempo real junto con otras personas.</li>      
    </ul>
    <br>
    <p><span style="color: #ff00ff"><i>¿Cómo comenzar a crear un mapa mental?</i><span></p>

    <p>Un mapa mental comienza con una idea principal en el centro del mapa. Crea subtemas ilimitados y analiza tus ideas con la gama disponible de códigos de colores para favorecer la precisión y dar un toque de estilo. A medida que tu mapa tome forma, contextualiza los temas con archivos adjuntos, incorpora archivos multimedia y más. Las funciones de MindMeister te guían desde tus primeros mapas mentales hasta alcanzar tu máximo nivel de creatividad. </p>
   
    <br>
    <p><span style="color: #ff00ff"><i>¿Qué se puede hacer con MindMeister?</i><span></p>

    <p>Con Mindmeister podrás:</p>

    <ul>
    <li>Presentar y editar tus mapas conceptuales y diagramas con otras personas en tiempo real.</li>
    <li>Seleccionar diferentes plantillas de mapas mentales o iniciar desde cero en el diseño.</li>        
    <li>Dibujar conexiones entre temas.</li>   
    <li>Añadir iconos, figuras, estilo de letra, imágenes, vídeos y documentos.</li>  
    <li>Imprimir o exportar el mapa mental a PDF o imagen.</li>  
    <li> Google ha incluido la posibilidad de convertir una viñeta en un mapa mental o conceptual desde Google Docs sin necesidad de crear una cuenta.</li>    
    </ul>



    <p><strong>Fuente:</strong>¿Por qué Mindmeister es una herramienta útil para la educación?<a href="https://www.nubedigital.mx/flexo/post/por-que-mindmeister-es-una-herramienta-util-para-la-educacion"target="_blank" rel="noopener">Sitio informativo.</a></p>
    <p><strong>Fuente:</strong>MindMeister - Herramienta para crear mapas mentales <a href="https://www.educarchile.cl/herramientas-tic/mindmeister-herramienta-para-crear-mapas-mentales"target="_blank" rel="noopener">Sitio informativo.</a></p>
    
    <br>
    <p><strong>Fuente:</strong> MindMeister.<a href="https://www.mindmeister.com/es" target="_blank" rel="noopener">Sitio Oficial.</a></p>
   `);

    incluir_seccion_hijo("mattermost", "Mattermost", "apps_trabajo_colaborativo")
    actualizar_parrafo("mattermost", `
    <p><span style="color: #ff00ff"><i>¿Qué es Mattermost?</i><span></p>
    <p>Mattermost es una herramienta colaborativa para trabajar con un equipo de trabajo de manera ágil y efectiva. 
    Muchas personas la comparan con Slack, dado que sirve para hablar por chat y enviar archivos. Pero atención, a esas funciones principales se le suman otras muy interesantes que detallaremos a continuación.</p>
    <p>La plataforma es de código abierto, lo que quiere decir que los usuarios pueden tener acceso al código de la misma y modificarlo según sus necesidades.</p>
    <br><p><span style="color: #ff00ff"><i>¿Para qué sirve?</i><span></p>
    
    <p>Este software es multidispositivo y apto para organizar las charlas de un equipo a través de canales personalizados. En el momento de que un usuario envía un mensaje, los demás miembros reciben una notificación al instante.</p>

    <p>Es necesario aclarar que los grupos dentro de Mattermost pueden ser públicos o privados y que a los mensajes en cuestión se le pueden añadir elementos extra como iconos o imágenes.</p>

    <p>Otra de las ventajas que presenta es que se puede integrar con otras apps y complementos de sistemas externos. Por ejemplo, se puede integrar con Jira, Trello, GitLab, etc. Y también con redes sociales como Twitter y Facebook.</p>



    
    
    <p>Desde la Biblioteca Elma Kohlmeyer de Estrabou se diseñaron tutoriales que orientan en la realización de búsquedas en el catálogo, desde las simples hasta las estrategias más avanzadas de búsquedas para acceder al texto completo por medio de enlaces en los registros.</p> 
    <p>En estos tutoriales se describe paso a paso el uso del catálogo de la Biblioteca donde se muestran varias maneras de llegar a la información que se necesita, delimitando los resultados con expresiones propias del sistema, refinando las búsquedas mediante diversas opciones que se presentan para tal fin o usando conectores en búsquedas avanzadas.</p>
    <p>Asimismo se describe cómo están conformados los registros, detallando la información que proporcionan y como utilizarla; indicando si el material se encuentra en la biblioteca electrónica del Mincyt o si posee versión digital de acceso abierto en la web. A fin de brindar esta información el equipo de la Biblioteca lleva enlazados en su catálogo más de dos mil registros a sitios seguros desde donde se acceden a los textos completos.</p>
   
    <br>
    <p><strong>Fuente:</strong>Qué es Mattermost <a href="https://www.neolo.com/blog/que-es-mattermost-y-para-que-sirve.php" target="_blank" rel="noopener">Sitio informativo.</a></p>
    
    <br>
    <p><strong>Fuente:</strong> Mattermost.<a href="https://mattermost.com/" target="_blank" rel="noopener">Sitio Oficial.</a></p>
   
   
    `);
    incluir_seccion_padre("apps_diseño", "APPS DISEÑO")

    incluir_seccion_hijo("canva", "Canva", "apps_diseño")
    actualizar_parrafo("canva", `
    <p><span style="color: #ff00ff"><i>¿Qué es Canva?</i><span></p>
    <p>Canva es una web de diseño gráfico y composición de imágenes para la comunicación fundada en 2012, y que ofrece herramientas online para crear tus propios diseños, tanto si son para ocio como si son profesionales. Su método es el de ofrecer un servicio freemium, que puedes utilizar de forma gratuita, pero con la alternativa de pagar para obtener opciones avanzadas.</p>

    <p>Sirve tanto para diseñadores aficionados como para los más experimentados, incluyendo su propio banco de imágenes y una serie de herramientas variadas. Si eres un diseñador experimentado podrás obtener muy buenos resultados de forma rápida y sencilla, y si eres un aficionado no necesitarás conocimientos para obtener resultados decentes.</p>

    <p>Canva ofrece una colección de 8000 plantillas gratuitas para 100 tipos de diseño con múltiples finalidades. También te permite hacer tus propios diseños desde cero, añadiéndoles imágenes, otros elementos y textos. Para ello utiliza una interfaz en la que sólo tienes que mover con el ratón los elementos del menú a la composición.</p>

    <p>Entre los diseños que puedes crear con Canva tienes logos, posters y tarjetas de visita. También puedes crear flyers, portadas, programas e invitaciones, así como folletos, calendarios, horarios, encabezados para correos electrónicos y publicaciones para redes sociales entre otras muchas cosas.</p>

    <p>Pero esta web no sólo te permite crear los diseños, en el caso de que estés creando el diseño para algo público también te va a permitir comprar la impresión para que se te envíe lo que has diseñado. Por lo tanto, además de diseño también ofrece servicios de papelería.</p>

    <p>Canva es lo suficientemente flexible como para hacer cosas simples como imprimir tus fotografías, aunque debes recordar que no es una herramienta de retoque fotográfico, sino de composición de imágenes para la comunicación. Esto quiere decir que si quieres editar una de tus fotos tendrás que hacerlo en otra aplicación y luego subirla.</p>
    <br>
    <br>
    <p><strong>Fuente:</strong>Qué es Canva, cómo funciona y cómo usarlo para crear un diseño  <a href="https://www.xataka.com/basics/que-canva-como-funciona-como-usarlo-para-crear-diseno" target="_blank" rel="noopener">Sitio informativo.</a></p>
    
    <br>
    <p><strong>Fuente:</strong> Canva.<a href="https://www.canva.com/es_mx/descargar/" target="_blank" rel="noopener">Sitio Oficial.</a></p>
   
   
    `    );
    incluir_seccion_hijo("google_slides", "Google Slides", "apps_diseño")
    actualizar_parrafo("google_slides", `
    <p><span style="color: #ff00ff"><i>¿Qué es y para qué sirve Google Slides?</i><span></p>
    <p>“Un editor de presentaciones online” sería una buena manera de recoger el concepto de Google Slides.</p>
    <p>Funciona de manera similar a la edición en PowerPoint, solo que en la nube, donde se guardarán todos los cambios que realices. Puedes editar una plantilla previamente diseñada o crear una nueva desde el principio.</p>
    <br>
    <p><span style="color: #ff00ff"><i>¿Para qué sirve Google Slides?</i><span></p>
    <p>Una presentación en Google Slides tiene la misma finalidad que una presentación de PowerPoint: servir de soporte visual en una exposición oral. 
    No obstante, Google Slides ofrece diferentes ventajas como poder tener tu presentación en la nube de Google y poder tener acceso a ella desde cualquier lugar y dispositivo, 
    que varios usuarios puedan modificar la misma presentación al mismo tiempo o que todos los cambios se guarden automáticamente gracias al autoguardado.</p>

    <br>
    <p><strong>Fuente:</strong>Qué es y para qué sirve Google Slides <a href="https://slidesgo.com/es/slidesgo-school/tutoriales-de-google-slides/que-es-y-para-que-sirve-google-slides" target="_blank" rel="noopener">Sitio informativo.</a></p>
    
    <br>
    <p><strong>Fuente:</strong> Google Slides.<a href="https://docs.google.com/presentation/u/0/" target="_blank" rel="noopener">Sitio Oficial.</a></p>
     `);

    incluir_seccion_hijo("befunky", "BeFunky", "apps_diseño")
    actualizar_parrafo("befunky", `
    <p><span style="color: #ff00ff"><i> ¿Qué es Befunky?.</i><span></p>
   
    <p>Befunky es un increíble editor de fotografías con múltiples funciones, realmente útiles para el diseño de contenido visual. Cuentan con funciones muy útiles como las plantillas, arrastrar y soltar, y una gran cantidad de complementos de personalización.</p>

    <p>En pocas palabras, Befunky se ha convertido en la ayuda ideal para crear gráficos e imágenes de cualquier tipo. Con esta herramienta, no necesitarás invertir una gran cantidad de dinero en software caros y complejos. Tú mismo podrás crear imágenes increíbles para tus redes sociales o tu plataforma web de negocios.</p>

    <p><span style="color: #ff00ff"><i>¿Para qué sirve Befunky?</i><span></p>

    <p>Como ya hemos mencionado al principio, Befunky es la plataforma definitiva para ayudarte con tu contenido visual en cualquiera de tus redes sociales o incluso con tu web corporativa. Befunky te permite crear:</p>
    <ul>
    <li>Publicaciones creativas y dinámicas en tus redes sociales.</li>
    <li>Cambiar el color, poner efectos y marcos a tus imágenes.</li>
    <li>Ajustar formato y tamaño de tus diseños.</li>
    <li>Crear logos personalizados.</li>
    <li>Infografías para tu blog.</li>
    <li> Encabezados para tu página web.</li>
    <li>Banners.</li>
    <li>Compartir tus creaciones en las redes sociales.</li>
    <li>Ver contenido de otros usuarios.</li>
    </ul>
    <li></li>

    <p>Sin duda, todo lo que necesites para convertirte en un diseñador está aquí. 
    Además, te ofrece una enorme cantidad de efectos de la más alta calidad para mejorar 
    la apariencia de tu negocio. Incluso si no tienes experiencia, con Befunky puedes crear tantos anuncios
    de calidad para tu negocio como desees.</p>
    <br>
    <p><strong>Fuente:</strong>Befunky: ¿Qué es y para qué sirve?. <a href="https://econsultoria.net/blog/befunky-que-es-y-para-que-sirve/" target="_blank" rel="noopener">Sitio informativo.</a></p>
    
    <br>
    <p><strong>Fuente:</strong> Befunky.<a href="https://www.befunky.com/es/" target="_blank" rel="noopener">Sitio Oficial.</a></p>
    ` );
    incluir_seccion_hijo("animoto", "Animoto", "apps_diseño")
    actualizar_parrafo("animoto", `
    <p><span style="color: #ff00ff"><i>¿Qué es Animoto?</i><span></p>
    
    <p>Animoto es una herramienta online que sirve para crear vídeos animados. Las posibilidades son ilimitadas, pero como te decía antes, yo la veo más para presentar un producto.</p>
    <p>Al igual que Spark, es muy sencilla de usar y puedes crear un vídeo de forma muy rápida y con un acabado muy profesional. Pero antes de tirar las campanas al vuelo, veamos más en profundidad lo bueno y lo malo.</p>
    <p><span style="color: #ff00ff"><i>Ventajas y desventajas de Animoto</i><span></p>
   
    <p>Además de analizarla de forma general, vamos a compararla con las característica de Adobe Spark.</p>

    <table class="table">
        <thead>
          <tr>
         
            <th scope="col">Ventajas</th>
            <th scope="col">Desventajas</th>
           
            
          </tr>
        </thead>
        <tbody>
          <tr>
           
            <td>Hiperdummie: su eslogan lo dice todo: «hazlo sencillo, hazlo bonito». Muy, muy sencilla de usar (Spark también es muy intuitiva).</td>
        <td>No es gratuita: Animoto te da un «trial» de 14 días. Después podrás seguir usándola pero con marca de agua.</td>
           
          </tr>
          <tr>
           
            <td>App móvil: tiene aplicación gratis para Iphone y Android (Spark también tiene app).</td>
            <td>Solo vídeos: aunque tampoco es que sea algo malo, simplemente está especializada. Con Spark también puedes crear imágenes para redes.</td>
             </tr>
          <tr>
           
            <td>Calidad: permite HD (solo en la versión de pago). En la gratuita, llega a 720 píxeles.</td>
            <td>Uso tosco de los textos: Spark no te dejaba cambiar los textos de sitio porque los editaba de forma que siempre se visualizaran bien. Animoto te da más libertad, pero no es ágil.</td>
          </tr>
          <tr>
            
            <td>Redes Sociales: puedes compartir de forma directa con Facebook, Twitter, YouTube, Pinterest, WordPress, etc. (Spark tiene bastantes menos opciones).</td>
            <td>Como gran ventaja, Animoto tiene el que se pueden incorporar clips de vídeo. Spark gana en que tiene más funcionalidades y en que es gratuita.</td>
            
          </tr>
          <tr>
            
            <td>Clips de vídeo: mientras que en Adobe Spark solo podías incluir imágenes, aquí sí podemos incluir vídeos. Da más dinamismo y el resultado final es más atractivo.</td>
            <td></td>
            
          </tr>
          
         </tbody>
      </table>  
   
      <br>
      <p><strong>Fuente:</strong>Animoto: cómo crear vídeos animados para promocionar tus productos y servicios.<a href="https://javiermanzaneque.com/animoto-crear-videos-animados/" target="_blank" rel="noopener">Sitio informativo.</a></p>
      
      <br>
      <p><strong>Fuente:</strong> Animoto.<a href="https://animoto.com/" target="_blank" rel="noopener">Sitio Oficial.</a></p>
    `
    );
    incluir_seccion_hijo("biteable", "Biteable", "apps_diseño")
    actualizar_parrafo("biteable", `
    <p><span style="color: #ff00ff"><i>¿Que es Biteable?</i><span></p>
    <p>Se trata de una aplicación web, con una modalidad completamente gratuita para crear vídeos ilimitados, que se define como la herramienta web más sencilla del mundo para crear vídeos.</p>

    <p>Lo cierto es que ofrece muchas posibilidades para crear todo tipo de vídeos sin necesidad de un aprendizaje previo y con unos resultados mucho más que aceptables.</p>
    <br>
    <p><span style="color: #ff00ff"><i> Algunas características de Biteable:</i><span></p>
    
    <ul> 
   
    <li>Crea todo tipo de vídeos completamente gratis.</li>
    <li>No necesitas ningún tipo de conocimientos previos en edición de vídeo.</li>
    <li>La modalidad gratuita permite crear vídeos ilimitados y enviarlos a YouTube, Twitter y Facebook.</li>
    <li>La modalidad de pago permite también la descarga de los vídeos.</li>
    <li>Creación de vídeos realmente sencilla partiendo de plantillas prediseñadas que puedes personalizar.</li>
    <li>Crea tus vídeos en cinco sencillos pasos.</li>
    </ul>
    <br>
    <p><strong>Fuente:</strong>Biteable: la aplicación web más sencilla para crear excelentes vídeos<a href="https://www.softandapps.info/2016/08/08/biteable-aplicacion-web-sencilla-crear-videos/" target="_blank" rel="noopener">Sitio informativo.</a></p>
    
    <br>
    <p><strong>Fuente:</strong> Biteable.<a href="https://biteable.com/" target="_blank" rel="noopener">Sitio Oficial.</a></p>
    `);

    incluir_seccion_padre("desarrollo_web", "DESARROLO WEB")
    incluir_seccion_hijo("wix", "Wix", "desarrollo_web")
    actualizar_parrafo("wix", `
   
    <p><span style="color: #ff00ff"><strong>¿Que es Wix?</strong></span></p>
    <p>WIx es una plataforma de desarrollo web que basa su sistema en la nube, en la cual puedes hacer tu sitio web sin tener conocimientos profundos en programación. Te ofrece cientos de plantillas y funciones con las cuáles podrás jugar para crear tu sitio web, blog o tienda online.</p>
    <p>Lo único que debes hacer es registrarte en la plataforma y responder un par de preguntas que el sitio realiza antes de que puedas elegir el tipo de plantillas que deseas implementar.</p> 
    <br>
    <p><span style="color: #ff00ff"><strong>¿Para qué sirve Wix?</strong></span></p>

    <p>Wix sirve para crear y diseñar sitios web sin necesidad de un experto en el área y con la calidad de un profesional. Esto es ideal para las personas que van comenzando con un negocio, pues pueden crear su sitio, tienda o blog sin costo alguno y con mucha facilidad.</p>
    <br>
    <p><strong>Fuente:</strong>¿Que es wix y para què sirve? <a href="https://ecdisis.com/que-es-wix-y-para-que-sirve/" target="_blank" rel="noopener">Sitio informativo.</a></p>
    <br>
    <p><strong>Fuente:</strong> Wix.<a href="https://es.wix.com/" target="_blank" rel="noopener">Sitio Oficial.</a></p>
    `)
    incluir_seccion_hijo("wordpress", "Wordpress", "desarrollo_web")
    actualizar_parrafo("wordpress", `
   
    <p><span style="color: #ff00ff"><strong>¿Qué es WordPress?</strong></span></p>
    
   
    <p>WordPress es un sistema de gestión de contenidos web (CMS o content management system), 
    que en pocas palabras es un sistema para publicar contenido en la web de forma sencilla, es decir
    que permite crear y mantener un blog u otro tipo de web.</p>
    <p>Con casi 10 años (desde el 2010) de existencia y más de un millar de temas (plantillas) disponibles en su web oficial, no es solo un sistema sencillo e intuitivo para crear un blog personal, sino que permite realizar toda clase de web más complejas.</p>
    <br>
    <p><span style="color: #ff00ff"><strong>¿Qué se puede hacer con WordPress?</strong></span></p>
    <p>En muchas ocasiones se asocia WordPress con una herramienta que solo sirve para hacer blogs.</p>

    <p>Esto no es correcto: con WordPress podemos crear un crear un blog y mucho más: webs empresariales, tiendas online, periódico digital, central de reservas, etc.</p>
    
    <br>
    <p><strong>Fuente:</strong>¿Qué es WordPress?<a href="https://www.webempresa.com/wordpress/que-es-wordpress.html" target="_blank" rel="noopener">Sitio informativo.</a></p>
    <p><strong>Fuente:</strong>WordPress, ¿Qué es?<a href="https://institutocajasol.com/que-es-wordpress-y-como-funciona/" target="_blank" rel="noopener">Sitio informativo.</a></p>

    <br>
    <p><strong>Fuente:</strong> WordPress.<a href="https://wordpress.com/es/" target="_blank" rel="noopener">Sitio Oficial.</a></p>
    `)

    incluir_seccion_padre("softwares_alternativos_microsoft_office", "SOFTWARES ALTERNATIVOS A MICROSOFT OFFICE");

    incluir_seccion_hijo("libre_office", "Libre Office", "softwares_alternativos_microsoft_office")
    actualizar_parrafo("libre_office", `
   <p><span style="color: #ff00ff"><strong>¿Qué es Libre Office?</strong></span></p>
   <p>LibreOffice es un conjunto de aplicaciones informáticas de productividad que, por una subscribción al mes
   ofrece soporte personalizado para entornos profesionales, así como actualizaciones automáticas. 
   Aunque tambièn cuenta con una versiòn gratis.</p>
    <p>Los archivos generados se guardan por defecto en formato Microsoft Office (.doc, .xls, .ppt, etc.)
    por lo que se pueden compartir de forma totalmente transparente con usuarios que estén utilizando este
    programa. LibreOffice permite también trabajar con archivos en formato <strong>Open Document Format</strong> (.odf),
    el estándar internacional cada vez más utilizado en entornos de Administración Pública y Educación
    (ISO26300 para el almacenamiento de documentos ofimáticos, es decir, documentos de oficina).</p>
    <p>Además: </p>
    <ul> 
    <li>Los documentos generados con LibreOffice <strong>se pueden exportar directamente en formato Adobe (PDF) </strong> sin necesidad de software adicional.</li>
    <li>Los usuarios de LibreOffice pueden disfrutar de soporte técnico específico para resolver
    cualquier duda sobre funcionalidades y/o incidencias, en caso de que las hubiera. El acceso a
    dicho soporte está disponible, a través de chat, en las propias aplicaciones de LibreOffice. 
    Esto quiere decir que detrás del software LibreOffice, hay una comunidad de desarrolladores y colaboradores muy activa, en actualizar y resolver fallas del programa, que sean reportadas.</li>
    </ul>
    <br>
    <p><span style="color: #ff00ff"><strong>¿Qué ventajas ofrece LibreOffice?</strong></span></p>
    <ul> 
    <li><strong>Flexibilidad y ahorro en coste e inversiones:</strong> Podrás adecuar tu cuota de subscripción del software ofimático 
    según evolucionen tus necesidades. Así pagará más o menos al mes, en función de lo que
    necesite, y podrá distribuir el coste del software, sin un desembolso
    inicial grande.
    </li>
    <li><strong>Tranquilidad y seguridad:</strong> Siempre estará utilizando una versión legal del software, sin ninguna limitación funcional. Servicio de
    actualización permanente, lo que garantiza que su PC será menos vulnerable a infecciones por virus.
    Usted no tendrá que preocuparse por nada, porque el agente proporcionado por Movistar se ocupa
    de todo esto por usted.</li>
    <li><strong>Asesoría y soporte:</strong> ¿Tiene dudas? Al otro lado del CHAT hay un experto asesor que le ayudará a resolver las
    dudas relacionadas con la aplicación. Ahora no está solo, la respuesta es inmediata.</li>
    </ul>

    <br>
    <p><span style="color: #ff00ff"><strong>¿Qué puedo hacer con LibreOffice?</strong></span></p>
    <p>LibreOffice es una suite de herramientas de uso ofimático universal que
    integra las siguientes aplicaciones: </p>
    <ul> 
    <li><strong>Calc. Hojas de cálculo:</strong> Aplicación de manipulación y cálculo de datos numéricos y alfanuméricos
    dispuestos en forma de tablas. Con Calc mantendrá de manera sencilla un control sobre sus finanzas.</li>
    <li><strong>Writer. Procesador de textos:</strong> Software para la creación, edición y maquetación de documentos de
    texto en distintos formatos. Con Writer tendrá una excelente herramienta para editar sus documentos, sin
    cambiar la forma en que lo venía haciendo hasta ahora con otros programas de similares características.</li>
    <li><strong>Impress. Presentaciones:</strong> Impress le ayudará a realizar presentaciones profesionales ayudando a
    trasmitir las ideas de su negocio de forma rápida y sencilla.</li>
    <li><strong>Draw. Herramientas para el dibujo vectorial:</strong> Software destinado a la creación y edición de dibujos
    vectoriales. Con Draw podrá diseñar volantes, trípticos, o anuncios de una manera sencilla y dinámica, sin
    ningún conocimiento previo. Herramienta idónea tanto para dibujos técnicos como artísticos.</li>
    <li><strong>Base. Bases de Datos:</strong> Sistema de gestión de bases de datos le permitirá crear y modificar tablas,
    formularios, consultas, informes, etc., que mantendrán su negocio al día. Base genera reportes, consultas
    rápidas, permite el uso de gráficos de amplias dimensiones, etc. No echará de menos su habitual programa de
    gestión de bases de datos.</li>
    <li><strong>Y un editor de HTML:</strong> ¡LibreOffice también
    dispone de una herramienta que permite la
    creación y edición de páginas Web!.</li>
    </ul>
    <br>
    <p><strong>Fuente:</strong> ¿Qué es LibreOffice? <a href=" https://www.aplicateca.es/Resources/45c94dcb-1ca4-4523-8133-e089d0721780/Ficha%20LibreOfficev4.pdf" target="_blank" rel="noopener">Documento informativo.</a></p>
    <br>
    <p><span style="color: #ff00ff"><strong><i>Enlaces de Interés</i></strong></span></p>
    
    <p><strong>Sitio web oficial:</strong> <a href="http://es.libreoffice.org/" target="_blank" rel="noopener">http://es.libreoffice.org/</a></p>
    <p><strong>Requerimientos:</strong> <a href="http://es.libreoffice.org/recibe-ayuda/requisitos-del-sistema/" target="_blank" rel="noopener">http://es.libreoffice.org/recibe-ayuda/requisitos-del-sistema/</a></p>
    <p><strong>Descarga Versión nueva:</strong> <a href=" http://es.libreoffice.org/descarga/libreoffice-nuevo/" target="_blank" rel="noopener"> http://es.libreoffice.org/descarga/libreoffice-nuevo/</a></p>
    <p><strong>Descarga Versión estable:</strong> <a href="http://es.libreoffice.org/descarga/libreoffice-estable/" target="_blank" rel="noopener">http://es.libreoffice.org/descarga/libreoffice-estable/</a></p>
    <br>
    <p><strong>Fuente:</strong> ¿Qué es y para que sirve LibreOffice? <a href="https://www.codedimension.com.ar/noticias-sobre-tecnologia/noticias/que-es-y-para-que-sirve-libreoffice/98" target="_blank" rel="noopener">Sitio informativo.</a></p>
    <br>
    <p><strong>Fuente:</strong> Talleres de Herramientas Informáticas de la Investigación en Humanidades. Secretaria de Oficina de Graduados FFyH. Centro de Investigaciones de la Facultad de Filosofía y Humanidades de la Universidad Nacional de Córdoba Octubre 2019.</p>
    <p><strong>Fuente:</strong> Links y recursos del taller “Ladran, pero no muerden”. <a href="https://errejulian.github.io/ladran/" target="_blank" rel="noopener">Recursos del taller.</a></p>
    `)
    incluir_seccion_hijo("open_office", "Apache Open Office", "softwares_alternativos_microsoft_office")
    actualizar_parrafo("open_office", `
    <p><span style="color: #ff00ff"><strong>¿Qué es Apache Open Office?</strong></span></p>
    <p>Apache OpenOffice es una suite de oficina de código abierto líder para el procesamiento 
    de palabras, hojas de cálculo, presentaciones, gráficos, bases de datos y más. 
    Open Office es un paquete de oficina. Esto quiere decir, que es un conjunto de programas informáticos 
    que permiten desarrollar distintas tareas, como la creación, la edición y el almacenamiento de 
    documentos que suelen usarse en el ámbito laboral. Se encuentra disponible en varios idiomas y funciona en todos los sistemas comunes. Almacena todos sus datos 
    en un formato que es un estándar internacional y puede también leer y escribir archivos producidos
    por otros paquetes de oficina. Puede ser descargado y utilizado completamente sin cargo para 
    cualquier propósito.</p>

    <p>Dado que su código fuente puede ser utilizado, modificado y redistribuido libremente, Open Office 
    es un software libre. Además dispone de código abierto: <strong>se basa en la colaboración de los usuarios.</strong></p>
    <br>
    <p><i>Este paquete de oficina, consta de seis programas:</i></p>
    <ul>
    <li><strong>Writer:</strong> es el procesador de textos de Open Office. Sus características son semejantes a las de Microsoft Word. Entre sus prestaciones, se incluye la posibilidad de realizar la exportación de archivos de texto a los formatos HTML y PDF.</li>
    <li><strong>Calc:</strong> es la hoja de cálculo de Open Office. Es muy similar a Microsoft Excel, 
    aunque brinda opciones adicionales y también permite exportar documentos a PDF.</li>
    <li><strong>Draw:</strong> es el editor de gráficos vectoriales de Open Office.</li>
    <li><strong>Base:</strong> es un programa de base de datos.</li>
    <li><strong>Impress:</strong> es un programa de presentaciones como Microsoft PowerPoint.</li>
    <li><strong>Math:</strong> es la aplicación de Open Office para crear y editar fórmulas matemáticas.</li>
    </ul>
    <br>
    <p><span style="color: #ff00ff"><strong><i>Ventajas y desventajas de Apache Open Office</i></strong></span></p>
    <p><strong><i>Ventajas:</i></strong></span></p>
    
    <ul>
    <li>La primera ventaja de Open Office es las otras alternativas Microsoft Office es que no cuesta dinero.</li>
    <li>Es muy tentador para aquellas personas que no cuenten con un presupuesto necesario y no quiere recurrir 
    a la pirateria ó robar.</li>
    <li>Como Apache OpenOffice es el resultado de más de dos dècadas de trabajo. Su Diseño desde el principio 
    como un único programa, ofrece una consistencia que otros softwares no pueden igualar.</li>
    <li>Apache OpenOffice es producto de un proceso de desarrollo completamente abierto, esto significa 
    que todos pueden reportar errores, pedir nuevas características o mejorar el programa.</li>
    <li>El dinero que invierte en un programa comercial muchas veces repercute en su 
    calidaden la presencia de un equipo de atención al cliente las 24 horas, en actualizaciones frecuentes y en una mayor compatibilidad con el resto de los 
    productos del mercado.</li>
    <li>Apache OpenOffice es fácil de aprender, si usted está ya acostumbrado a utilizar 
    otros paquetes de oficina comprenderá rápidamente cómo funciona Apache OpenOffice.</li>
    <li>Dada su amplia comunidad internacional, muy probablemente Apache OpenOffice esté disponible y 
    tenga soporte en su propio idioma.</li>
    <li>Puede ejecutar archivos provenientes de otros paquetes de oficina.</li>
    <li>Apache OpenOffice es libre, es decir, que puede ser descargado y utilizado en forma 
    completamente libre sin pagar licencias. Apache OpenOffice está liberado bajo la 
    <strong>licencia Apache 2.0</strong>. Esto significa que se puede utilizar el programa para cualquier
    propósito: doméstico, comercial, educacional, administración pública. Por lo tanto se puede 
    instalar en tantas computadoras como desee; y se puede hacer muchas copias y distribuirlas 
    entre sus familiares, amigos, estudiantes, empleados…  y a cualquier persona que desee.</li>
    </ul>
    <br>
    <p><strong><i>Desventajas:</i></strong></span></p>
    <ul>
    <li>Una de las desventajas en los programas de libre distribución y fuente abiertas, es que no suelen estar actualizados 
    y cualquier error reportado tarda en ser resuelto, dependiendo de la comunidad de usuarios, colaboradores y desarrolladores,
    debido a la falta de organización, presupuesto y dirección.</li>
    <li>El dinero que invierte en un programa comercial (como Microsoft Office) repercute en su 
    calidad, en la presencia de un equipo de atención al cliente las 24 horas,
    en actualizaciones frecuentes y en una mayor compatibilidad con el resto de los productos del mercado.</li>
    <li>Unas de las desventajas de Open Office y las ofertas similares es que <strong>no siempre son fáciles de 
    aprender, para los veteranos de sus contrapartidas comerciales</strong>. 
    Ya que Microsoft Office existe desde mucho tiempo antes, y gran porcentaje de los usuarios de PC
    dieron sus primeros pasos por el mundo de la ofimática ò programas de paquete de oficina, 
    a través de Word, Excel y PowerPoint. Entonces cuando se enfrentan a utilizar programas 
    aparentemente equivalentes pero con tantas diferencias en su funcionamiento, se confunden 
    y se frustran con facilidad.</li>
    <li>En algunos casos será necesario invertir un poco de tiempo en el aprendizaje 
    de las caracterisitcas de los programas Open Office.</li>
    <li>Un caso similar ocurre con GIMP, una aplicación para editar imágenes que se presenta 
    como una excelente alternativa gratuita a Photoshop.
    Aunque sus prestaciones son dignas de atención e incluso han innovado en ciertos aspectos que 
    Photoshop adquirió más tarde, <strong>sus herramientas no resultan 
    intuitivas para los usuarios de la competencia</strong>, y esta curva de aprendizaje suele ser crucial.</li> 
    </ul>


   <br>
   <p><strong>Fuente:</strong> Por qué Apache OpenOffice. <a href="https://www.openoffice.org/es/por-que/" target="_blank" rel="noopener">Sitio informativo.</a></p>
   <p><strong>Fuente:</strong> Definición de Open Office. <a href="https://definicion.de/open-office/" target="_blank" rel="noopener">Sitio informativo.</a></p>
   <br>
   <p><strong>Descargar software:</strong> Apache Open Office. <a href="https://www.openoffice.org/es/descargar/" target="_blank" rel="noopener">https://www.openoffice.org/es/descargar/</a></p>
    <br>
    <p><strong>Fuente:</strong> Talleres de Herramientas Informáticas de la Investigación en Humanidades. Secretaria de Oficina de Graduados FFyH. Centro de Investigaciones de la Facultad de Filosofía y Humanidades de la Universidad Nacional de Córdoba Octubre 2019.</p>
    <p><strong>Fuente:</strong> Links y recursos del taller “Ladran, pero no muerden”. <a href="https://errejulian.github.io/ladran/" target="_blank" rel="noopener">Recursos del taller.</a></p>
    `)
    incluir_seccion_hijo("google_docs", "Google Docs", "softwares_alternativos_microsoft_office")
    actualizar_parrafo("google_docs", `
   <p><span style="color: #ff00ff"><strong>¿Qué es Google Docs?</strong></span></p>
   <p>GOOGLE DOCS es una aplicación muy similar a Microsoft Office, la cual permite crear, 
   almacenar, y compartir documentos de texto, hojas de cálculo y presentaciones en línea. 
   Estos documentos se pueden trabajar de manera simultánea y en tiempo real entre varios usuarios. 
   Los archivos pueden ser exportados en diversos formatos (descargados al computador) o ser enviados 
   a través de correo electrónico. Incluye además una combinación de servicios integrados tales como 
   el chat y el correo electrónico para, con estos servicios, aumentar la interacción y comunicación 
   entre usuarios. Para poder utilizar esta aplicación es necesario contar con una cuenta de correo Gmail.</p>
   <br>
   <p><strong>REQUISITOS PARA UTILIZAR GOOGLE DOCS:<strong></p>
    <ul>
    <li><strong>DISPONIBILIDAD:</strong> EN LINEA.</li>
    <li><strong>CONEXIÓN A INTERNET:</strong> REQUIERE.</li>
    <li><strong>INSTALACIÓN AL PC:</strong> NO REQUIERE.</li>
    <li><strong>TIPO DE LICENCIA:</strong>  GRATUITA.</li>
    </ul>
    <br>
    <p><span style="color: #ff00ff"><strong>Orientaciones de uso</strong></span></p>
    <p><strong><i>PROYECTOS COLABORATIVOS</i></strong></span></p>

    <p>Google Docs es una excelente aplicación para la realización de informes, presentaciones, 
    trabajos, proyectos grupales. Permite la participación de todos los integrantes en un mismo documento 
    y de manera simultánea. Además, la herramienta chat posibilita el intercambio entre usuarios mientras 
    se participa en la edición del documento.</p>
    <br>
    <p><strong><i>MATERIAL DOCENTE</i></strong></span></p>

    <p>Google Docs es una excelente aplicación que permite preparar material didáctico para una clase.</p> 
    <p>Además en caso de cursos con más de un docente, facilita la construcción del mismo en colaboración.</p>
    <br>
    <p><strong><i>EVALUACIÓN</i></strong></span></p>
    <p>Google Docs es una excelente aplicación que permite visualizar y monitorear el trabajo
    realizado por cada usuario o un grupo de estudiantes al acceder al documento en línea, 
    identificando lo realizado por cada uno.</p>
    <br>
    <p><strong>Fuente:</strong> Google Docs. <a href="https://recursostic.ucv.cl/wordpress/index.php/essential_grid/google-docs-perfil-docente/#1468251697253-cddcfd6a-9f58" target="_blank" rel="noopener">Sitio informativo.</a></p>
    <br>
    <p><strong>Ir a herramienta colaboraborativa online:</strong> Google Docs. <a href="https://www.google.com/intl/es_AR/docs/about/" target="_blank" rel="noopener">Ir a Google Docs.</a></p>
    <br>
    <p><strong>Fuente:</strong> Talleres de Herramientas Informáticas de la Investigación en Humanidades. Secretaria de Oficina de Graduados FFyH. Centro de Investigaciones de la Facultad de Filosofía y Humanidades de la Universidad Nacional de Córdoba Octubre 2019.</p>
    <p><strong>Fuente:</strong> Links y recursos del taller “Ladran, pero no muerden”. <a href="https://errejulian.github.io/ladran/" target="_blank" rel="noopener">Recursos del taller.</a></p>
    `)

    incluir_seccion_padre("softwares_orientados_documentos_escritos", "SOFTWARE ORIENTADOS A DOCUMENTOS ESCRITOS")
    incluir_seccion_hijo("latex", "¿Que son las Herramientas Digitales?", "softwares_orientados_documentos_escritos")
    actualizar_parrafo("latex", `
   <p><span style="color: #ff00ff"><strong>Herramientas Digitales:</strong></span></p>
    <p>Las herramientas digitales son todos los recursos de software (algunos incluyen en su defición al hardware que contiene software) presentes en computadoras y dispositivos relacionados, que permite realizar o facilitar todo tipo de actividades.</p>
    <br>
    <p><strong>Fuente:</strong> Talleres de Herramientas Informáticas de la Investigación en Humanidades. Secretaria de Oficina de Graduados FFyH. Centro de Investigaciones de la Facultad de Filosofía y Humanidades de la Universidad Nacional de Córdoba Octubre 2019.</p>
    <p><strong>Fuente:</strong> Links y recursos del taller “Ladran, pero no muerden”<a href="https://errejulian.github.io/ladran/" target="_blank" rel="noopener">Recursos del taller</a></p>
    `)
    incluir_seccion_hijo("lyx", "¿Que son las Herramientas Digitales?", "softwares_orientados_documentos_escritos")
    actualizar_parrafo("lyx", `
   <p><span style="color: #ff00ff"><strong>Herramientas Digitales:</strong></span></p>
    <p>Las herramientas digitales son todos los recursos de software (algunos incluyen en su defición al hardware que contiene software) presentes en computadoras y dispositivos relacionados, que permite realizar o facilitar todo tipo de actividades.</p>
    <br>
    <p><strong>Fuente:</strong> Talleres de Herramientas Informáticas de la Investigación en Humanidades. Secretaria de Oficina de Graduados FFyH. Centro de Investigaciones de la Facultad de Filosofía y Humanidades de la Universidad Nacional de Córdoba Octubre 2019.</p>
    <p><strong>Fuente:</strong> Links y recursos del taller “Ladran, pero no muerden”<a href="https://errejulian.github.io/ladran/" target="_blank" rel="noopener">Recursos del taller</a></p>
    `)
    incluir_seccion_hijo("texmaker", "¿Que son las Herramientas Digitales?", "softwares_orientados_documentos_escritos")
    actualizar_parrafo("texmaker", `
   <p><span style="color: #ff00ff"><strong>Herramientas Digitales:</strong></span></p>
    <p>Las herramientas digitales son todos los recursos de software (algunos incluyen en su defición al hardware que contiene software) presentes en computadoras y dispositivos relacionados, que permite realizar o facilitar todo tipo de actividades.</p>
    <br>
    <p><strong>Fuente:</strong> Talleres de Herramientas Informáticas de la Investigación en Humanidades. Secretaria de Oficina de Graduados FFyH. Centro de Investigaciones de la Facultad de Filosofía y Humanidades de la Universidad Nacional de Córdoba Octubre 2019.</p>
    <p><strong>Fuente:</strong> Links y recursos del taller “Ladran, pero no muerden”<a href="https://errejulian.github.io/ladran/" target="_blank" rel="noopener">Recursos del taller</a></p>
    `)

    incluir_seccion_padre("softwares_escribir_markdown", "SOFTWARES PARA ESCRIBIR EN MARKDOWN")
    incluir_seccion_hijo("zettir", "¿Que son las Herramientas Digitales?", "softwares_escribir_markdown")
    actualizar_parrafo("zettir", `
   <p><span style="color: #ff00ff"><strong>Herramientas Digitales:</strong></span></p>
    <p>Las herramientas digitales son todos los recursos de software (algunos incluyen en su defición al hardware que contiene software) presentes en computadoras y dispositivos relacionados, que permite realizar o facilitar todo tipo de actividades.</p>
    <br>
    <p><strong>Fuente:</strong> Talleres de Herramientas Informáticas de la Investigación en Humanidades. Secretaria de Oficina de Graduados FFyH. Centro de Investigaciones de la Facultad de Filosofía y Humanidades de la Universidad Nacional de Córdoba Octubre 2019.</p>
    <p><strong>Fuente:</strong> Links y recursos del taller “Ladran, pero no muerden”<a href="https://errejulian.github.io/ladran/" target="_blank" rel="noopener">Recursos del taller</a></p>
     `)
    incluir_seccion_hijo("obsidian", "¿Que son las Herramientas Digitales?", "softwares_escribir_markdown")
    actualizar_parrafo("obsidian", `
   <p><span style="color: #ff00ff"><strong>Herramientas Digitales:</strong></span></p>
    <p>Las herramientas digitales son todos los recursos de software (algunos incluyen en su defición al hardware que contiene software) presentes en computadoras y dispositivos relacionados, que permite realizar o facilitar todo tipo de actividades.</p>
   <br>
    <p><strong>Fuente:</strong> Clase 1. Curso de Tecnologias Interactivas. Academia Buenos Aires Emprende, Septiembre 2022.</p>
   `)
    incluir_seccion_hijo("stackedit", "¿Que son las Herramientas Digitales?", "softwares_escribir_markdown")
    actualizar_parrafo("stackedit", `
   <p><span style="color: #ff00ff"><strong>Herramientas Digitales:</strong></span></p>
    <p>Las herramientas digitales son todos los recursos de software (algunos incluyen en su defición al hardware que contiene software) presentes en computadoras y dispositivos relacionados, que permite realizar o facilitar todo tipo de actividades.</p>
    <br>
    <p><strong>Fuente:</strong> Talleres de Herramientas Informáticas de la Investigación en Humanidades. Secretaria de Oficina de Graduados FFyH. Centro de Investigaciones de la Facultad de Filosofía y Humanidades de la Universidad Nacional de Córdoba Octubre 2019.</p>
    <p><strong>Fuente:</strong> Links y recursos del taller “Ladran, pero no muerden”<a href="https://errejulian.github.io/ladran/" target="_blank" rel="noopener">Recursos del taller</a></p>
    `)
    incluir_seccion_hijo("hackmd", "¿Que son las Herramientas Digitales?", "softwares_escribir_markdown")
    actualizar_parrafo("hackmd", `
   <p><span style="color: #ff00ff"><strong>Herramientas Digitales:</strong></span></p>
    <p>Las herramientas digitales son todos los recursos de software (algunos incluyen en su defición al hardware que contiene software) presentes en computadoras y dispositivos relacionados, que permite realizar o facilitar todo tipo de actividades.</p>
    <br>
    <p><strong>Fuente:</strong> Talleres de Herramientas Informáticas de la Investigación en Humanidades. Secretaria de Oficina de Graduados FFyH. Centro de Investigaciones de la Facultad de Filosofía y Humanidades de la Universidad Nacional de Córdoba Octubre 2019.</p>
    <p><strong>Fuente:</strong> Links y recursos del taller “Ladran, pero no muerden”<a href="https://errejulian.github.io/ladran/" target="_blank" rel="noopener">Recursos del taller</a></p>
    `)

    incluir_seccion_padre("nubes_repositorios_digitales_remotos", "NUBES Y REPOSITORIOS DIGITALES REMOTOS");
    incluir_seccion_hijo("filen", "¿Que son las Herramientas Digitales?", "nubes_repositorios_digitales_remotos")
    actualizar_parrafo("filen", `
   <p><span style="color: #ff00ff"><strong>Herramientas Digitales:</strong></span></p>
    <p>Las herramientas digitales son todos los recursos de software (algunos incluyen en su defición al hardware que contiene software) presentes en computadoras y dispositivos relacionados, que permite realizar o facilitar todo tipo de actividades.</p>
    <br>
    <p><strong>Fuente:</strong> Talleres de Herramientas Informáticas de la Investigación en Humanidades. Secretaria de Oficina de Graduados FFyH. Centro de Investigaciones de la Facultad de Filosofía y Humanidades de la Universidad Nacional de Córdoba Octubre 2019.</p>
    <p><strong>Fuente:</strong> Links y recursos del taller “Ladran, pero no muerden”<a href="https://errejulian.github.io/ladran/" target="_blank" rel="noopener">Recursos del taller</a></p>
    `)
    incluir_seccion_hijo("koofr", "¿Que son las Herramientas Digitales?", "nubes_repositorios_digitales_remotos")
    actualizar_parrafo("koofr", `
   <p><span style="color: #ff00ff"><strong>Herramientas Digitales:</strong></span></p>
    <p>Las herramientas digitales son todos los recursos de software (algunos incluyen en su defición al hardware que contiene software) presentes en computadoras y dispositivos relacionados, que permite realizar o facilitar todo tipo de actividades.</p>
    <br>
    <p><strong>Fuente:</strong> Talleres de Herramientas Informáticas de la Investigación en Humanidades. Secretaria de Oficina de Graduados FFyH. Centro de Investigaciones de la Facultad de Filosofía y Humanidades de la Universidad Nacional de Córdoba Octubre 2019.</p>
    <p><strong>Fuente:</strong> Links y recursos del taller “Ladran, pero no muerden”<a href="https://errejulian.github.io/ladran/" target="_blank" rel="noopener">Recursos del taller</a></p>
    `)
    incluir_seccion_hijo("sync_com", "¿Que son las Herramientas Digitales?", "nubes_repositorios_digitales_remotos")
    actualizar_parrafo("sync_com", `
   <p><span style="color: #ff00ff"><strong>Herramientas Digitales:</strong></span></p>
    <p>Las herramientas digitales son todos los recursos de software (algunos incluyen en su defición al hardware que contiene software) presentes en computadoras y dispositivos relacionados, que permite realizar o facilitar todo tipo de actividades.</p>
    <br>
    <p><strong>Fuente:</strong> Talleres de Herramientas Informáticas de la Investigación en Humanidades. Secretaria de Oficina de Graduados FFyH. Centro de Investigaciones de la Facultad de Filosofía y Humanidades de la Universidad Nacional de Córdoba Octubre 2019.</p>
    <p><strong>Fuente:</strong> Links y recursos del taller “Ladran, pero no muerden”<a href="https://errejulian.github.io/ladran/" target="_blank" rel="noopener">Recursos del taller</a></p>
    `)
    incluir_seccion_hijo("dropbox", "¿Que son las Herramientas Digitales?", "nubes_repositorios_digitales_remotos")
    actualizar_parrafo("dropbox", `
   <p><span style="color: #ff00ff"><strong>Herramientas Digitales:</strong></span></p>
    <p>Las herramientas digitales son todos los recursos de software (algunos incluyen en su defición al hardware que contiene software) presentes en computadoras y dispositivos relacionados, que permite realizar o facilitar todo tipo de actividades.</p>
    <br>
    <p><strong>Fuente:</strong> Talleres de Herramientas Informáticas de la Investigación en Humanidades. Secretaria de Oficina de Graduados FFyH. Centro de Investigaciones de la Facultad de Filosofía y Humanidades de la Universidad Nacional de Córdoba Octubre 2019.</p>
    <p><strong>Fuente:</strong> Links y recursos del taller “Ladran, pero no muerden”<a href="https://errejulian.github.io/ladran/" target="_blank" rel="noopener">Recursos del taller</a></p>
    `)
    incluir_seccion_hijo("googledrive", "¿Que son las Herramientas Digitales?", "nubes_repositorios_digitales_remotos")
    actualizar_parrafo("googledrive", `
   <p><span style="color: #ff00ff"><strong>Herramientas Digitales:</strong></span></p>
    <p>Las herramientas digitales son todos los recursos de software (algunos incluyen en su defición al hardware que contiene software) presentes en computadoras y dispositivos relacionados, que permite realizar o facilitar todo tipo de actividades.</p>
    <br>
    <p><strong>Fuente:</strong> Talleres de Herramientas Informáticas de la Investigación en Humanidades. Secretaria de Oficina de Graduados FFyH. Centro de Investigaciones de la Facultad de Filosofía y Humanidades de la Universidad Nacional de Córdoba Octubre 2019.</p>
    <p><strong>Fuente:</strong> Links y recursos del taller “Ladran, pero no muerden”<a href="https://errejulian.github.io/ladran/" target="_blank" rel="noopener">Recursos del taller</a></p>
    `)
    incluir_seccion_hijo("box", "¿Que son las Herramientas Digitales?", "nubes_repositorios_digitales_remotos")
    actualizar_parrafo("box", `
   <p><span style="color: #ff00ff"><strong>Herramientas Digitales:</strong></span></p>
    <p>Las herramientas digitales son todos los recursos de software (algunos incluyen en su defición al hardware que contiene software) presentes en computadoras y dispositivos relacionados, que permite realizar o facilitar todo tipo de actividades.</p>
    <br>
    <p><strong>Fuente:</strong> Talleres de Herramientas Informáticas de la Investigación en Humanidades. Secretaria de Oficina de Graduados FFyH. Centro de Investigaciones de la Facultad de Filosofía y Humanidades de la Universidad Nacional de Córdoba Octubre 2019.</p>
    <p><strong>Fuente:</strong> Links y recursos del taller “Ladran, pero no muerden”<a href="https://errejulian.github.io/ladran/" target="_blank" rel="noopener">Recursos del taller</a></p>
    `)

    incluir_seccion_padre("softwares_sistema_gestor_cambios", "SOFTWARES DE SISTEMA DE GESTOR DE CAMBIOS");
    incluir_seccion_hijo("git", "¿Que son las Herramientas Digitales?", "softwares_sistema_gestor_cambios")
    actualizar_parrafo("git", `
   <p><span style="color: #ff00ff"><strong>Herramientas Digitales:</strong></span></p>
    <p>Las herramientas digitales son todos los recursos de software (algunos incluyen en su defición al hardware que contiene software) presentes en computadoras y dispositivos relacionados, que permite realizar o facilitar todo tipo de actividades.</p>
    <br>
    <p><strong>Fuente:</strong> Talleres de Herramientas Informáticas de la Investigación en Humanidades. Secretaria de Oficina de Graduados FFyH. Centro de Investigaciones de la Facultad de Filosofía y Humanidades de la Universidad Nacional de Córdoba Octubre 2019.</p>
    <p><strong>Fuente:</strong> Links y recursos del taller “Ladran, pero no muerden”<a href="https://errejulian.github.io/ladran/" target="_blank" rel="noopener">Recursos del taller</a></p>
    `)
    incluir_seccion_hijo("github", "¿Que son las Herramientas Digitales?", "softwares_sistema_gestor_cambios")
    actualizar_parrafo("github", `
   <p><span style="color: #ff00ff"><strong>Herramientas Digitales:</strong></span></p>
    <p>Las herramientas digitales son todos los recursos de software (algunos incluyen en su defición al hardware que contiene software) presentes en computadoras y dispositivos relacionados, que permite realizar o facilitar todo tipo de actividades.</p>
    <br>
    <p><strong>Fuente:</strong> Talleres de Herramientas Informáticas de la Investigación en Humanidades. Secretaria de Oficina de Graduados FFyH. Centro de Investigaciones de la Facultad de Filosofía y Humanidades de la Universidad Nacional de Córdoba Octubre 2019.</p>
    <p><strong>Fuente:</strong> Links y recursos del taller “Ladran, pero no muerden”<a href="https://errejulian.github.io/ladran/" target="_blank" rel="noopener">Recursos del taller</a></p>
    `)
    incluir_seccion_hijo("gitlab", "¿Que son las Herramientas Digitales?", "softwares_sistema_gestor_cambios")
    actualizar_parrafo("gitlab", `
   <p><span style="color: #ff00ff"><strong>Herramientas Digitales:</strong></span></p>
    <p>Las herramientas digitales son todos los recursos de software (algunos incluyen en su defición al hardware que contiene software) presentes en computadoras y dispositivos relacionados, que permite realizar o facilitar todo tipo de actividades.</p>
    <br>
    <p><strong>Fuente:</strong> Talleres de Herramientas Informáticas de la Investigación en Humanidades. Secretaria de Oficina de Graduados FFyH. Centro de Investigaciones de la Facultad de Filosofía y Humanidades de la Universidad Nacional de Córdoba Octubre 2019.</p>
    <p><strong>Fuente:</strong> Links y recursos del taller “Ladran, pero no muerden”<a href="https://errejulian.github.io/ladran/" target="_blank" rel="noopener">Recursos del taller</a></p>
    `)

    incluir_seccion_padre("softwares_gestores_bibliograficos", "SOFTWARES DE GESTORES BIBLIOGRAFICOS");
    incluir_seccion_hijo("zotero", "¿Que son las Herramientas Digitales?", "softwares_gestores_bibliograficos")
    actualizar_parrafo("zotero", `
    <p><span style="color: #ff00ff"><strong>Herramientas Digitales:</strong></span></p>
     <p>Las herramientas digitales son todos los recursos de software (algunos incluyen en su defición al hardware que contiene software) presentes en computadoras y dispositivos relacionados, que permite realizar o facilitar todo tipo de actividades.</p>
     <br>
     <p><strong>Fuente:</strong> Talleres de Herramientas Informáticas de la Investigación en Humanidades. Secretaria de Oficina de Graduados FFyH. Centro de Investigaciones de la Facultad de Filosofía y Humanidades de la Universidad Nacional de Córdoba Octubre 2019.</p>
     <p><strong>Fuente:</strong> Links y recursos del taller “Ladran, pero no muerden”<a href="https://errejulian.github.io/ladran/" target="_blank" rel="noopener">Recursos del taller</a></p>
     `)
    incluir_seccion_hijo("zotfile", "¿Que son las Herramientas Digitales?", "softwares_gestores_bibliograficos")
    actualizar_parrafo("zotfile", `
    <p><span style="color: #ff00ff"><strong>Herramientas Digitales:</strong></span></p>
     <p>Las herramientas digitales son todos los recursos de software (algunos incluyen en su defición al hardware que contiene software) presentes en computadoras y dispositivos relacionados, que permite realizar o facilitar todo tipo de actividades.</p>
     <br>
     <p><strong>Fuente:</strong> Talleres de Herramientas Informáticas de la Investigación en Humanidades. Secretaria de Oficina de Graduados FFyH. Centro de Investigaciones de la Facultad de Filosofía y Humanidades de la Universidad Nacional de Córdoba Octubre 2019.</p>
     <p><strong>Fuente:</strong> Links y recursos del taller “Ladran, pero no muerden”<a href="https://errejulian.github.io/ladran/" target="_blank" rel="noopener">Recursos del taller</a></p>
     `)
    incluir_seccion_hijo("better_bibtex", "¿Que son las Herramientas Digitales?", "softwares_gestores_bibliograficos")
    actualizar_parrafo("better_bibtex", `
    <p><span style="color: #ff00ff"><strong>Herramientas Digitales:</strong></span></p>
     <p>Las herramientas digitales son todos los recursos de software (algunos incluyen en su defición al hardware que contiene software) presentes en computadoras y dispositivos relacionados, que permite realizar o facilitar todo tipo de actividades.</p>
     <br>
     <p><strong>Fuente:</strong> Talleres de Herramientas Informáticas de la Investigación en Humanidades. Secretaria de Oficina de Graduados FFyH. Centro de Investigaciones de la Facultad de Filosofía y Humanidades de la Universidad Nacional de Córdoba Octubre 2019.</p>
     <p><strong>Fuente:</strong> Links y recursos del taller “Ladran, pero no muerden”<a href="https://errejulian.github.io/ladran/" target="_blank" rel="noopener">Recursos del taller</a></p>
     `)
    incluir_seccion_hijo("zotero_bib", "¿Que son las Herramientas Digitales?", "softwares_gestores_bibliograficos")
    actualizar_parrafo("zotero_bib", `
    <p><span style="color: #ff00ff"><strong>Herramientas Digitales:</strong></span></p>
     <p>Las herramientas digitales son todos los recursos de software (algunos incluyen en su defición al hardware que contiene software) presentes en computadoras y dispositivos relacionados, que permite realizar o facilitar todo tipo de actividades.</p>
     <br>
     <p><strong>Fuente:</strong> Talleres de Herramientas Informáticas de la Investigación en Humanidades. Secretaria de Oficina de Graduados FFyH. Centro de Investigaciones de la Facultad de Filosofía y Humanidades de la Universidad Nacional de Córdoba Octubre 2019.</p>
     <p><strong>Fuente:</strong> Links y recursos del taller “Ladran, pero no muerden”<a href="https://errejulian.github.io/ladran/" target="_blank" rel="noopener">Recursos del taller</a></p>
     `)
    incluir_seccion_hijo("bibtex", "¿Que son las Herramientas Digitales?", "softwares_gestores_bibliograficos")
    actualizar_parrafo("bibtex", `
    <p><span style="color: #ff00ff"><strong>Herramientas Digitales:</strong></span></p>
     <p>Las herramientas digitales son todos los recursos de software (algunos incluyen en su defición al hardware que contiene software) presentes en computadoras y dispositivos relacionados, que permite realizar o facilitar todo tipo de actividades.</p>
     <br>
     <p><strong>Fuente:</strong> Talleres de Herramientas Informáticas de la Investigación en Humanidades. Secretaria de Oficina de Graduados FFyH. Centro de Investigaciones de la Facultad de Filosofía y Humanidades de la Universidad Nacional de Córdoba Octubre 2019.</p>
     <p><strong>Fuente:</strong> Links y recursos del taller “Ladran, pero no muerden”<a href="https://errejulian.github.io/ladran/" target="_blank" rel="noopener">Recursos del taller</a></p>
     `)
    incluir_seccion_hijo("jabref", "¿Que son las Herramientas Digitales?", "softwares_gestores_bibliograficos")
    actualizar_parrafo("jabref", `
    <p><span style="color: #ff00ff"><strong>Herramientas Digitales:</strong></span></p>
     <p>Las herramientas digitales son todos los recursos de software (algunos incluyen en su defición al hardware que contiene software) presentes en computadoras y dispositivos relacionados, que permite realizar o facilitar todo tipo de actividades.</p>
     <br>
     <p><strong>Fuente:</strong> Talleres de Herramientas Informáticas de la Investigación en Humanidades. Secretaria de Oficina de Graduados FFyH. Centro de Investigaciones de la Facultad de Filosofía y Humanidades de la Universidad Nacional de Córdoba Octubre 2019.</p>
     <p><strong>Fuente:</strong> Links y recursos del taller “Ladran, pero no muerden”<a href="https://errejulian.github.io/ladran/" target="_blank" rel="noopener">Recursos del taller</a></p>
     `)

    incluir_seccion_padre("softwares_reconocimiento_optico_caracteres", "SOFTWARES DE RECONOCIMIENTO OPTICO DE CARACTERES");
    incluir_seccion_hijo("cognitive_open_ocr", "¿Que son las Herramientas Digitales?", "softwares_reconocimiento_optico_caracteres")
    actualizar_parrafo("cognitive_open_ocr", `
    <p><span style="color: #ff00ff"><strong>Herramientas Digitales:</strong></span></p>
     <p>Las herramientas digitales son todos los recursos de software (algunos incluyen en su defición al hardware que contiene software) presentes en computadoras y dispositivos relacionados, que permite realizar o facilitar todo tipo de actividades.</p>
     <br>
     <p><strong>Fuente:</strong> Talleres de Herramientas Informáticas de la Investigación en Humanidades. Secretaria de Oficina de Graduados FFyH. Centro de Investigaciones de la Facultad de Filosofía y Humanidades de la Universidad Nacional de Córdoba Octubre 2019.</p>
     <p><strong>Fuente:</strong> Links y recursos del taller “Ladran, pero no muerden”<a href="https://errejulian.github.io/ladran/" target="_blank" rel="noopener">Recursos del taller</a></p>
     `)
    incluir_seccion_hijo("tesseract", "¿Que son las Herramientas Digitales?", "softwares_reconocimiento_optico_caracteres")
    actualizar_parrafo("tesseract", `
    <p><span style="color: #ff00ff"><strong>Herramientas Digitales:</strong></span></p>
    <p>Las herramientas digitales son todos los recursos de software (algunos incluyen en su defición al hardware que contiene software) presentes en computadoras y dispositivos relacionados, que permite realizar o facilitar todo tipo de actividades.</p>
    <br>
    <p><strong>Fuente:</strong> Talleres de Herramientas Informáticas de la Investigación en Humanidades. Secretaria de Oficina de Graduados FFyH. Centro de Investigaciones de la Facultad de Filosofía y Humanidades de la Universidad Nacional de Córdoba Octubre 2019.</p>
    <p><strong>Fuente:</strong> Links y recursos del taller “Ladran, pero no muerden”<a href="https://errejulian.github.io/ladran/" target="_blank" rel="noopener">Recursos del taller</a></p>
    `)

    incluir_seccion_padre("softwares_analisis_datos_cualitativos", "SOFTWARES DE ANALISIS DE DATOS CUALITATIVOS");
    incluir_seccion_hijo("atlas_ti", "¿Que son las Herramientas Digitales?", "softwares_analisis_datos_cualitativos")
    actualizar_parrafo("atlas_ti", `
    <p><span style="color: #ff00ff"><strong>Herramientas Digitales:</strong></span></p>
    <p>Las herramientas digitales son todos los recursos de software (algunos incluyen en su defición al hardware que contiene software) presentes en computadoras y dispositivos relacionados, que permite realizar o facilitar todo tipo de actividades.</p>
    <br>
    <p><strong>Fuente:</strong> Talleres de Herramientas Informáticas de la Investigación en Humanidades. Secretaria de Oficina de Graduados FFyH. Centro de Investigaciones de la Facultad de Filosofía y Humanidades de la Universidad Nacional de Córdoba Octubre 2019.</p>
    <p><strong>Fuente:</strong> Links y recursos del taller “Ladran, pero no muerden”<a href="https://errejulian.github.io/ladran/" target="_blank" rel="noopener">Recursos del taller</a></p>
    `)
    incluir_seccion_hijo("qualcoder", "¿Que son las Herramientas Digitales?", "softwares_analisis_datos_cualitativos")
    actualizar_parrafo("qualcoder", `
    <p><span style="color: #ff00ff"><strong>Herramientas Digitales:</strong></span></p>
    <p>Las herramientas digitales son todos los recursos de software (algunos incluyen en su defición al hardware que contiene software) presentes en computadoras y dispositivos relacionados, que permite realizar o facilitar todo tipo de actividades.</p>
    <br>
    <p><strong>Fuente:</strong> Talleres de Herramientas Informáticas de la Investigación en Humanidades. Secretaria de Oficina de Graduados FFyH. Centro de Investigaciones de la Facultad de Filosofía y Humanidades de la Universidad Nacional de Córdoba Octubre 2019.</p>
    <p><strong>Fuente:</strong> Links y recursos del taller “Ladran, pero no muerden”<a href="https://errejulian.github.io/ladran/" target="_blank" rel="noopener">Recursos del taller</a></p>
    `)
    incluir_seccion_hijo("taguette", "¿Que son las Herramientas Digitales?", "softwares_analisis_datos_cualitativos")
    actualizar_parrafo("taguette", `
    <p><span style="color: #ff00ff"><strong>Herramientas Digitales:</strong></span></p>
    <p>Las herramientas digitales son todos los recursos de software (algunos incluyen en su defición al hardware que contiene software) presentes en computadoras y dispositivos relacionados, que permite realizar o facilitar todo tipo de actividades.</p>
    <br>
    <p><strong>Fuente:</strong> Talleres de Herramientas Informáticas de la Investigación en Humanidades. Secretaria de Oficina de Graduados FFyH. Centro de Investigaciones de la Facultad de Filosofía y Humanidades de la Universidad Nacional de Córdoba Octubre 2019.</p>
    <p><strong>Fuente:</strong> Links y recursos del taller “Ladran, pero no muerden”<a href="https://errejulian.github.io/ladran/" target="_blank" rel="noopener">Recursos del taller</a></p>
    `)
    incluir_seccion_hijo("catma", "¿Que son las Herramientas Digitales?", "softwares_analisis_datos_cualitativos")
    actualizar_parrafo("catma", `
    <p><span style="color: #ff00ff"><strong>Herramientas Digitales:</strong></span></p>
    <p>Las herramientas digitales son todos los recursos de software (algunos incluyen en su defición al hardware que contiene software) presentes en computadoras y dispositivos relacionados, que permite realizar o facilitar todo tipo de actividades.</p>
    <br>
    <p><strong>Fuente:</strong> Talleres de Herramientas Informáticas de la Investigación en Humanidades. Secretaria de Oficina de Graduados FFyH. Centro de Investigaciones de la Facultad de Filosofía y Humanidades de la Universidad Nacional de Córdoba Octubre 2019.</p>
    <p><strong>Fuente:</strong> Links y recursos del taller “Ladran, pero no muerden”<a href="https://errejulian.github.io/ladran/" target="_blank" rel="noopener">Recursos del taller</a></p>
    `)
    incluir_seccion_hijo("kh_koder", "¿Que son las Herramientas Digitales?", "softwares_analisis_datos_cualitativos")
    actualizar_parrafo("kh_koder", `
    <p><span style="color: #ff00ff"><strong>Herramientas Digitales:</strong></span></p>
    <p>Las herramientas digitales son todos los recursos de software (algunos incluyen en su defición al hardware que contiene software) presentes en computadoras y dispositivos relacionados, que permite realizar o facilitar todo tipo de actividades.</p>
    <br>
    <p><strong>Fuente:</strong> Talleres de Herramientas Informáticas de la Investigación en Humanidades. Secretaria de Oficina de Graduados FFyH. Centro de Investigaciones de la Facultad de Filosofía y Humanidades de la Universidad Nacional de Córdoba Octubre 2019.</p>
    <p><strong>Fuente:</strong> Links y recursos del taller “Ladran, pero no muerden”<a href="https://errejulian.github.io/ladran/" target="_blank" rel="noopener">Recursos del taller</a></p>
    `)
    incluir_seccion_hijo("rqda", "¿Que son las Herramientas Digitales?", "softwares_analisis_datos_cualitativos")
    actualizar_parrafo("rqda", `
    <p><span style="color: #ff00ff"><strong>Herramientas Digitales:</strong></span></p>
    <p>Las herramientas digitales son todos los recursos de software (algunos incluyen en su defición al hardware que contiene software) presentes en computadoras y dispositivos relacionados, que permite realizar o facilitar todo tipo de actividades.</p>
    <br>
    <p><strong>Fuente:</strong> Talleres de Herramientas Informáticas de la Investigación en Humanidades. Secretaria de Oficina de Graduados FFyH. Centro de Investigaciones de la Facultad de Filosofía y Humanidades de la Universidad Nacional de Córdoba Octubre 2019.</p>
    <p><strong>Fuente:</strong> Links y recursos del taller “Ladran, pero no muerden”<a href="https://errejulian.github.io/ladran/" target="_blank" rel="noopener">Recursos del taller</a></p>
    `)
    incluir_seccion_hijo("lista_software_acd", "¿Que son las Herramientas Digitales?", "softwares_analisis_datos_cualitativos")
    actualizar_parrafo("lista_software_acd", `
    <p><span style="color: #ff00ff"><strong>Herramientas Digitales:</strong></span></p>
    <p>Las herramientas digitales son todos los recursos de software (algunos incluyen en su defición al hardware que contiene software) presentes en computadoras y dispositivos relacionados, que permite realizar o facilitar todo tipo de actividades.</p>
    <br>
    <p><strong>Fuente:</strong> Talleres de Herramientas Informáticas de la Investigación en Humanidades. Secretaria de Oficina de Graduados FFyH. Centro de Investigaciones de la Facultad de Filosofía y Humanidades de la Universidad Nacional de Córdoba Octubre 2019.</p>
    <p><strong>Fuente:</strong> Links y recursos del taller “Ladran, pero no muerden”<a href="https://errejulian.github.io/ladran/" target="_blank" rel="noopener">Recursos del taller</a></p>
    `)

    incluir_seccion_padre("recursos_informacion_publicar", "RECURSOS E INFORMACIÓN PARA PUBLICAR");
    incluir_seccion_hijo("rdu_repositorio_digital_universidad", "¿Que son las Herramientas Digitales?", "recursos_informacion_publicar")
    actualizar_parrafo("rdu_repositorio_digital_universidad", `
    <p><span style="color: #ff00ff"><strong>Herramientas Digitales:</strong></span></p>
    <p>Las herramientas digitales son todos los recursos de software (algunos incluyen en su defición al hardware que contiene software) presentes en computadoras y dispositivos relacionados, que permite realizar o facilitar todo tipo de actividades.</p>
    <br>
    <p><strong>Fuente:</strong> Talleres de Herramientas Informáticas de la Investigación en Humanidades. Secretaria de Oficina de Graduados FFyH. Centro de Investigaciones de la Facultad de Filosofía y Humanidades de la Universidad Nacional de Córdoba Octubre 2019.</p>
    <p><strong>Fuente:</strong> Links y recursos del taller “Ladran, pero no muerden”<a href="https://errejulian.github.io/ladran/" target="_blank" rel="noopener">Recursos del taller</a></p>
    `)
    incluir_seccion_hijo("miar", "¿Que son las Herramientas Digitales?", "recursos_informacion_publicar")
    actualizar_parrafo("miar", `
    <p><span style="color: #ff00ff"><strong>Herramientas Digitales:</strong></span></p>
    <p>Las herramientas digitales son todos los recursos de software (algunos incluyen en su defición al hardware que contiene software) presentes en computadoras y dispositivos relacionados, que permite realizar o facilitar todo tipo de actividades.</p>
    <br>
    <p><strong>Fuente:</strong> Talleres de Herramientas Informáticas de la Investigación en Humanidades. Secretaria de Oficina de Graduados FFyH. Centro de Investigaciones de la Facultad de Filosofía y Humanidades de la Universidad Nacional de Córdoba Octubre 2019.</p>
    <p><strong>Fuente:</strong> Links y recursos del taller “Ladran, pero no muerden”<a href="https://errejulian.github.io/ladran/" target="_blank" rel="noopener">Recursos del taller</a></p>
    `)
    incluir_seccion_hijo("donde_lo_publico", "¿Que son las Herramientas Digitales?", "recursos_informacion_publicar")
    actualizar_parrafo("donde_lo_publico", `
    <p><span style="color: #ff00ff"><strong>Herramientas Digitales:</strong></span></p>
    <p>Las herramientas digitales son todos los recursos de software (algunos incluyen en su defición al hardware que contiene software) presentes en computadoras y dispositivos relacionados, que permite realizar o facilitar todo tipo de actividades.</p>
    <br>
    <p><strong>Fuente:</strong> Talleres de Herramientas Informáticas de la Investigación en Humanidades. Secretaria de Oficina de Graduados FFyH. Centro de Investigaciones de la Facultad de Filosofía y Humanidades de la Universidad Nacional de Córdoba Octubre 2019.</p>
    <p><strong>Fuente:</strong> Links y recursos del taller “Ladran, pero no muerden”<a href="https://errejulian.github.io/ladran/" target="_blank" rel="noopener">Recursos del taller</a></p>
    `)
    incluir_seccion_hijo("lib_gen", "¿Que son las Herramientas Digitales?", "recursos_informacion_publicar")
    actualizar_parrafo("lib_gen", `
    <p><span style="color: #ff00ff"><strong>Herramientas Digitales:</strong></span></p>
    <p>Las herramientas digitales son todos los recursos de software (algunos incluyen en su defición al hardware que contiene software) presentes en computadoras y dispositivos relacionados, que permite realizar o facilitar todo tipo de actividades.</p>
    <br>
    <p><strong>Fuente:</strong> Talleres de Herramientas Informáticas de la Investigación en Humanidades. Secretaria de Oficina de Graduados FFyH. Centro de Investigaciones de la Facultad de Filosofía y Humanidades de la Universidad Nacional de Córdoba Octubre 2019.</p>
    <p><strong>Fuente:</strong> Links y recursos del taller “Ladran, pero no muerden”<a href="https://errejulian.github.io/ladran/" target="_blank" rel="noopener">Recursos del taller</a></p>
    `)
    incluir_seccion_hijo("mirror_other_link", "¿Que son las Herramientas Digitales?", "recursos_informacion_publicar")
    actualizar_parrafo("mirror_other_link", `
    <p><span style="color: #ff00ff"><strong>Herramientas Digitales:</strong></span></p>
    <p>Las herramientas digitales son todos los recursos de software (algunos incluyen en su defición al hardware que contiene software) presentes en computadoras y dispositivos relacionados, que permite realizar o facilitar todo tipo de actividades.</p>
    <br>
    <p><strong>Fuente:</strong> Talleres de Herramientas Informáticas de la Investigación en Humanidades. Secretaria de Oficina de Graduados FFyH. Centro de Investigaciones de la Facultad de Filosofía y Humanidades de la Universidad Nacional de Córdoba Octubre 2019.</p>
    <p><strong>Fuente:</strong> Links y recursos del taller “Ladran, pero no muerden”<a href="https://errejulian.github.io/ladran/" target="_blank" rel="noopener">Recursos del taller</a></p>
    `)
    incluir_seccion_hijo("sci_hub", "¿Que son las Herramientas Digitales?", "recursos_informacion_publicar")
    actualizar_parrafo("sci_hub", `
    <p><span style="color: #ff00ff"><strong>Herramientas Digitales:</strong></span></p>
    <p>Las herramientas digitales son todos los recursos de software (algunos incluyen en su defición al hardware que contiene software) presentes en computadoras y dispositivos relacionados, que permite realizar o facilitar todo tipo de actividades.</p>
    <br>
    <p><strong>Fuente:</strong> Talleres de Herramientas Informáticas de la Investigación en Humanidades. Secretaria de Oficina de Graduados FFyH. Centro de Investigaciones de la Facultad de Filosofía y Humanidades de la Universidad Nacional de Córdoba Octubre 2019.</p>
    <p><strong>Fuente:</strong> Links y recursos del taller “Ladran, pero no muerden”<a href="https://errejulian.github.io/ladran/" target="_blank" rel="noopener">Recursos del taller</a></p>
    `)

    incluir_seccion_padre("otros_recursos_utiles", "OTROS RECURSOS ÚTILES");
    incluir_seccion_hijo("anki", "Anki", "otros_recursos_utiles")
    actualizar_parrafo("anki", `
    <p><span style="color: #ff00ff"><strong>Herramientas Digitales:</strong></span></p>
    <p>Las herramientas digitales son todos los recursos de software (algunos incluyen en su defición al hardware que contiene software) presentes en computadoras y dispositivos relacionados, que permite realizar o facilitar todo tipo de actividades.</p>
    <br>
    <p><strong>Fuente:</strong> Clase 1. Curso de Tecnologias Interactivas. Academia Buenos Aires Emprende, Septiembre 2022.</p>
    `)

    incluir_funcion_botones();
}