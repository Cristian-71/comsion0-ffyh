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

    document.getElementById("apps_dise??o_bt").onclick = function () {
        show_text_padre("apps_dise??o");
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

    incluir_seccion_hijo("definicion", "??Que son las Herramientas Digitales?", "herramientas_digitales")
    actualizar_parrafo("definicion", `
   <p><span style="color: #ff00ff"><strong>Herramientas Digitales:</strong></span></p>
    <p>Las herramientas digitales son todos los recursos de software (algunos incluyen en su defici??n al hardware que contiene software) presentes en computadoras y dispositivos relacionados, que permite realizar o facilitar todo tipo de actividades.</p>
   <br>
    <p><strong>Fuente:</strong> Clase 1. Curso de Tecnologias Interactivas. Academia Buenos Aires Emprende, Septiembre 2022.</p>
   `)
    incluir_seccion_hijo("diferencias_web_app", "??Cuales son las diferecias entre las 'WEB APP' y 'APP'?", "herramientas_digitales")
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
        <td>Se descarga de los stores, el fronted est?? en el dispositivo del usuario (s??lo necesitamos tener backend). 
        
        </td>
           
          </tr>
          <tr>
           
            <td>Requiere tener dominio y hosting (10usd + 30 usd respectivamente por a??o aproximadamente</td>
            <td>Requiere publicar en los stors (lleva tiempo) (25usd - 100usd ??nica vez).</td>
             </tr>
          <tr>
           
            <td>No perimite recibir notificaciones (relativo).</td>
            <td>Puede recibir notificaciones</td>
          </tr>
          <tr>
            
            <td>El contenido est?? indexado en Google.</td>
            <td>S??lo la publicaci??n en los stores se indexa en Google.</td>
            
          </tr>
          <tr>
            
            <td>En principio funciona en cualquier dispositvo.</td>
            <td>Puede tener problemas de compatibilidad con diferentes sistemas operativos.</td>
            
          </tr>
          <tr>
            
            <td></td>
            <td>M??s dificil de desarrollar y recolectar estadisticas.</td>
            
           
           
          </tr>
         
        </tbody>
      </table>
      <br>
  <p>El fronted en una pagina web: es la estructura (HTML), el dise??o (CSS),
        el uso de JavaScript del lado del usuario y algunos frameworks o librer??as para crear todo tipo de interfaces de usuario.
        JavaScript que es un lenguaje de programaci??n o de secuencias de comandos que te permite implementar funciones complejas 
        en una p??ginas web.</p>
        <p>El backend se encuentra detras del fronted, el flujo de trabajo de un backend 
        consiste en darle funciones a un sitio; mientras que el frontend 
        hace un sitio est??tico, el backend despu??s le da funciones y adapta 
        el sistema programado a ese sitio web.Otras funciones que se gestionan son:</p>
        <ul>
         <li> Creaci??n de funciones que simplifiquen el proceso de desarrollo.</li>       
            <li>  Acciones de l??gica.</li> 
            <li>  Conexi??n con bases de datos.</li>
            <li> Uso de librer??as del servidor web (un ejemplo puede ser para implementar temas de cach??).
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
    <p><span style="color: #ff00ff"><i>??Qu?? es Asana?</i><span></p>
    <p>Asana es una aplicaci??n web y m??vil que permite crear, distribuir y gestionar el flujo de trabajo de tareas y proyectos con la finalidad de mantener un ciclo de productividad y orden de inicio a fin.</p>
    
    <p>Es as?? como Asana ofrece una serie de soluciones para planificar tareas y mantenerte a ti y a todos los integrantes de un equipo de trabajo coordinados en sus responsabilidades, tiempos de entrega, pasos para llevar a cabo un proyecto en su totalidad y organizaci??n de los recursos necesarios para abordar las actividades, todo esto con la ayuda de una interfaz sencilla y enfocada ??nicamente en los aspectos m??s importantes. </p> 
    <br><p><span style="color: #ff00ff"><i>Funciones</i><span></p>
    <ul>
    <li>Creaci??n de proyectos </li>
    <li>Creaci??n de tableros </li>
    <li>Creaci??n de cronogramas</li>
    <li>Creaci??n de calendarios</li>
    <li>Integraci??n de la informaci??n</li>
    <li>Integraci??n con otras aplicaciones</li>
    <li>Posibilidad de programar recordatorios</li>
   
    </ul>
    <p><strong>Fuente:</strong>Asana: ??Qu?? es y c??mo funciona?<a href="https://trabajarporelmundo.org/asana-que-es-y-como-funciona/"target="_blank" rel="noopener">Sitio informativo.</a></p>
    <br>
    <p><strong>Fuente:</strong>Descargar Asana.<a href="https://asana.com/es/download"target="_blank" rel="noopener">Sitio Oficial.</a></p>
     `);
    incluir_seccion_hijo("trello", "Trello", "apps_trabajo_colaborativo")
    actualizar_parrafo("trello", `
    <p><span style="color: #ff00ff"><i>??Que es Trello?</i><span></p>
    <p>Trello es una aplicaci??n basada en el m??todo Kanban y sirve para gestionar tareas permitiendo organizar el trabajo en grupo de forma colaborativa mediante tableros virtuales compuestos de listas de tareas en forma de columnas.</p>

    <p>Es perfecta para la gesti??n de proyectos ya que se pueden representar distintos estados y compartirlas con diferentes persona que formen el proyecto. Con ella se intenta mejorar las rutinas de trabajo de un equipo generando prioridades, tiempos, avisos y otras opciones perfectas para organizar un proyecto en el que colaboran varias personas.</p>
    <br>
    <p><span style="color: #ff00ff"><i>??Para qu?? sirve Trello? </i><span></p>
    
    <p>El objetivo principal de Trello puede resumirse en una ??nica tarea: proveer una herramienta para la organizaci??n de la informaci??n. Esta plataforma est?? optimizada para hacer m??s sencillas las tareas de los equipos de trabajo. </p>

    <p>Mediante una interfaz interactiva, los usuarios pueden acceder a informaci??n ordenada sobre un proyecto, un plan de trabajo o una meta a cumplir. Por ello, Trello funciona a trav??s de la creaci??n de medios de comunicaci??n inteligentes e intuitivos basados en visualizaciones claras de los datos que se intentan transmitir. </p>
    <p>Entre sus principales funcionalidades podemos destacar:</p>
    <ul>
    <li>Facilita la organizaci??n y la informaci??n por medio de recursos visuales. </li>
    <li>Ayuda en la gesti??n de peque??as y grandes tareas. </li>

    <li>Cuenta con recursos creativos, como herramientas de lluvia de ideas. </li>
    <li>Auxilia en la concreci??n de objetivos y la ejecuci??n de planes de trabajo. </li>
    <li>Da cuenta del progreso en el cumplimiento de un plan. </li>

    <li>Permite el acceso a un plan de trabajo a diferentes usuarios. </li> 
    </ul>
    <p><strong>Fuente:</strong>Asana: Trello. Qu?? es, para qu?? sirve y c??mo funciona<a href="https://www.expertosnegociosonline.com/que-es-trello-para-que-sirve/"target="_blank" rel="noopener">Sitio informativo.</a></p>
    <p><strong>Fuente:</strong>Asana: ??Qu?? es Trello?<a href="https://blog.hubspot.es/marketing/que-es-trello"target="_blank" rel="noopener">Sitio informativo.</a></p>
    
    <br>
    <p><strong>Fuente:</strong> Trello.<a href="https://asana.com/es/download"target="_blank" rel="noopener">Sitio Oficial.</a></p>
   
   `);
    incluir_seccion_hijo("mindmeister", "Midmeister", "apps_trabajo_colaborativo")
    actualizar_parrafo("mindmeister", `
    <p><span style="color: #ff00ff"><i>??Qu?? es MindMeister?</i><span></p>

    <p>MindMeister es una herramienta para generar mapas mentales en l??nea que te permite:<p>
    <ul>
    <li>Crear, editar y presentar (hasta tres) mapas mentales.</li>
    <li>Almacenar tus trabajos en l??nea y acceder a ellos desde cualquier lugar y momento.</li>        
    <li>Realizar mapas mentales de manera colaborativa en tiempo real junto con otras personas.</li>      
    </ul>
    <br>
    <p><span style="color: #ff00ff"><i>??C??mo comenzar a crear un mapa mental?</i><span></p>

    <p>Un mapa mental comienza con una idea principal en el centro del mapa. Crea subtemas ilimitados y analiza tus ideas con la gama disponible de c??digos de colores para favorecer la precisi??n y dar un toque de estilo. A medida que tu mapa tome forma, contextualiza los temas con archivos adjuntos, incorpora archivos multimedia y m??s. Las funciones de MindMeister te gu??an desde tus primeros mapas mentales hasta alcanzar tu m??ximo nivel de creatividad. </p>
   
    <br>
    <p><span style="color: #ff00ff"><i>??Qu?? se puede hacer con MindMeister?</i><span></p>

    <p>Con Mindmeister podr??s:</p>

    <ul>
    <li>Presentar y editar tus mapas conceptuales y diagramas con otras personas en tiempo real.</li>
    <li>Seleccionar diferentes plantillas de mapas mentales o iniciar desde cero en el dise??o.</li>        
    <li>Dibujar conexiones entre temas.</li>   
    <li>A??adir iconos, figuras, estilo de letra, im??genes, v??deos y documentos.</li>  
    <li>Imprimir o exportar el mapa mental a PDF o imagen.</li>  
    <li> Google ha incluido la posibilidad de convertir una vi??eta en un mapa mental o conceptual desde Google Docs sin necesidad de crear una cuenta.</li>    
    </ul>



    <p><strong>Fuente:</strong>??Por qu?? Mindmeister es una herramienta ??til para la educaci??n?<a href="https://www.nubedigital.mx/flexo/post/por-que-mindmeister-es-una-herramienta-util-para-la-educacion"target="_blank" rel="noopener">Sitio informativo.</a></p>
    <p><strong>Fuente:</strong>MindMeister - Herramienta para crear mapas mentales <a href="https://www.educarchile.cl/herramientas-tic/mindmeister-herramienta-para-crear-mapas-mentales"target="_blank" rel="noopener">Sitio informativo.</a></p>
    
    <br>
    <p><strong>Fuente:</strong> MindMeister.<a href="https://www.mindmeister.com/es" target="_blank" rel="noopener">Sitio Oficial.</a></p>
   `);

    incluir_seccion_hijo("mattermost", "Mattermost", "apps_trabajo_colaborativo")
    actualizar_parrafo("mattermost", `
    <p><span style="color: #ff00ff"><i>??Qu?? es Mattermost?</i><span></p>
    <p>Mattermost es una herramienta colaborativa para trabajar con un equipo de trabajo de manera ??gil y efectiva. 
    Muchas personas la comparan con Slack, dado que sirve para hablar por chat y enviar archivos. Pero atenci??n, a esas funciones principales se le suman otras muy interesantes que detallaremos a continuaci??n.</p>
    <p>La plataforma es de c??digo abierto, lo que quiere decir que los usuarios pueden tener acceso al c??digo de la misma y modificarlo seg??n sus necesidades.</p>
    <br><p><span style="color: #ff00ff"><i>??Para qu?? sirve?</i><span></p>
    
    <p>Este software es multidispositivo y apto para organizar las charlas de un equipo a trav??s de canales personalizados. En el momento de que un usuario env??a un mensaje, los dem??s miembros reciben una notificaci??n al instante.</p>

    <p>Es necesario aclarar que los grupos dentro de Mattermost pueden ser p??blicos o privados y que a los mensajes en cuesti??n se le pueden a??adir elementos extra como iconos o im??genes.</p>

    <p>Otra de las ventajas que presenta es que se puede integrar con otras apps y complementos de sistemas externos. Por ejemplo, se puede integrar con Jira, Trello, GitLab, etc. Y tambi??n con redes sociales como Twitter y Facebook.</p>



    
    
    <p>Desde la Biblioteca Elma Kohlmeyer de Estrabou se dise??aron tutoriales que orientan en la realizaci??n de b??squedas en el cat??logo, desde las simples hasta las estrategias m??s avanzadas de b??squedas para acceder al texto completo por medio de enlaces en los registros.</p> 
    <p>En estos tutoriales se describe paso a paso el uso del cat??logo de la Biblioteca donde se muestran varias maneras de llegar a la informaci??n que se necesita, delimitando los resultados con expresiones propias del sistema, refinando las b??squedas mediante diversas opciones que se presentan para tal fin o usando conectores en b??squedas avanzadas.</p>
    <p>Asimismo se describe c??mo est??n conformados los registros, detallando la informaci??n que proporcionan y como utilizarla; indicando si el material se encuentra en la biblioteca electr??nica del Mincyt o si posee versi??n digital de acceso abierto en la web. A fin de brindar esta informaci??n el equipo de la Biblioteca lleva enlazados en su cat??logo m??s de dos mil registros a sitios seguros desde donde se acceden a los textos completos.</p>
   
    <br>
    <p><strong>Fuente:</strong>Qu?? es Mattermost <a href="https://www.neolo.com/blog/que-es-mattermost-y-para-que-sirve.php" target="_blank" rel="noopener">Sitio informativo.</a></p>
    
    <br>
    <p><strong>Fuente:</strong> Mattermost.<a href="https://mattermost.com/" target="_blank" rel="noopener">Sitio Oficial.</a></p>
   
   
    `);
    incluir_seccion_padre("apps_dise??o", "APPS DISE??O")

    incluir_seccion_hijo("canva", "Canva", "apps_dise??o")
    actualizar_parrafo("canva", `
    <p><span style="color: #ff00ff"><i>??Qu?? es Canva?</i><span></p>
    <p>Canva es una web de dise??o gr??fico y composici??n de im??genes para la comunicaci??n fundada en 2012, y que ofrece herramientas online para crear tus propios dise??os, tanto si son para ocio como si son profesionales. Su m??todo es el de ofrecer un servicio freemium, que puedes utilizar de forma gratuita, pero con la alternativa de pagar para obtener opciones avanzadas.</p>

    <p>Sirve tanto para dise??adores aficionados como para los m??s experimentados, incluyendo su propio banco de im??genes y una serie de herramientas variadas. Si eres un dise??ador experimentado podr??s obtener muy buenos resultados de forma r??pida y sencilla, y si eres un aficionado no necesitar??s conocimientos para obtener resultados decentes.</p>

    <p>Canva ofrece una colecci??n de 8000 plantillas gratuitas para 100 tipos de dise??o con m??ltiples finalidades. Tambi??n te permite hacer tus propios dise??os desde cero, a??adi??ndoles im??genes, otros elementos y textos. Para ello utiliza una interfaz en la que s??lo tienes que mover con el rat??n los elementos del men?? a la composici??n.</p>

    <p>Entre los dise??os que puedes crear con Canva tienes logos, posters y tarjetas de visita. Tambi??n puedes crear flyers, portadas, programas e invitaciones, as?? como folletos, calendarios, horarios, encabezados para correos electr??nicos y publicaciones para redes sociales entre otras muchas cosas.</p>

    <p>Pero esta web no s??lo te permite crear los dise??os, en el caso de que est??s creando el dise??o para algo p??blico tambi??n te va a permitir comprar la impresi??n para que se te env??e lo que has dise??ado. Por lo tanto, adem??s de dise??o tambi??n ofrece servicios de papeler??a.</p>

    <p>Canva es lo suficientemente flexible como para hacer cosas simples como imprimir tus fotograf??as, aunque debes recordar que no es una herramienta de retoque fotogr??fico, sino de composici??n de im??genes para la comunicaci??n. Esto quiere decir que si quieres editar una de tus fotos tendr??s que hacerlo en otra aplicaci??n y luego subirla.</p>
    <br>
    <br>
    <p><strong>Fuente:</strong>Qu?? es Canva, c??mo funciona y c??mo usarlo para crear un dise??o  <a href="https://www.xataka.com/basics/que-canva-como-funciona-como-usarlo-para-crear-diseno" target="_blank" rel="noopener">Sitio informativo.</a></p>
    
    <br>
    <p><strong>Fuente:</strong> Canva.<a href="https://www.canva.com/es_mx/descargar/" target="_blank" rel="noopener">Sitio Oficial.</a></p>
   
   
    `    );
    incluir_seccion_hijo("google_slides", "Google Slides", "apps_dise??o")
    actualizar_parrafo("google_slides", `
    <p><span style="color: #ff00ff"><i>??Qu?? es y para qu?? sirve Google Slides?</i><span></p>
    <p>???Un editor de presentaciones online??? ser??a una buena manera de recoger el concepto de Google Slides.</p>
    <p>Funciona de manera similar a la edici??n en PowerPoint, solo que en la nube, donde se guardar??n todos los cambios que realices. Puedes editar una plantilla previamente dise??ada o crear una nueva desde el principio.</p>
    <br>
    <p><span style="color: #ff00ff"><i>??Para qu?? sirve Google Slides?</i><span></p>
    <p>Una presentaci??n en Google Slides tiene la misma finalidad que una presentaci??n de PowerPoint: servir de soporte visual en una exposici??n oral. 
    No obstante, Google Slides ofrece diferentes ventajas como poder tener tu presentaci??n en la nube de Google y poder tener acceso a ella desde cualquier lugar y dispositivo, 
    que varios usuarios puedan modificar la misma presentaci??n al mismo tiempo o que todos los cambios se guarden autom??ticamente gracias al autoguardado.</p>

    <br>
    <p><strong>Fuente:</strong>Qu?? es y para qu?? sirve Google Slides <a href="https://slidesgo.com/es/slidesgo-school/tutoriales-de-google-slides/que-es-y-para-que-sirve-google-slides" target="_blank" rel="noopener">Sitio informativo.</a></p>
    
    <br>
    <p><strong>Fuente:</strong> Google Slides.<a href="https://docs.google.com/presentation/u/0/" target="_blank" rel="noopener">Sitio Oficial.</a></p>
     `);

    incluir_seccion_hijo("befunky", "BeFunky", "apps_dise??o")
    actualizar_parrafo("befunky", `
    <p><span style="color: #ff00ff"><i> ??Qu?? es Befunky?.</i><span></p>
   
    <p>Befunky es un incre??ble editor de fotograf??as con m??ltiples funciones, realmente ??tiles para el dise??o de contenido visual. Cuentan con funciones muy ??tiles como las plantillas, arrastrar y soltar, y una gran cantidad de complementos de personalizaci??n.</p>

    <p>En pocas palabras, Befunky se ha convertido en la ayuda ideal para crear gr??ficos e im??genes de cualquier tipo. Con esta herramienta, no necesitar??s invertir una gran cantidad de dinero en software caros y complejos. T?? mismo podr??s crear im??genes incre??bles para tus redes sociales o tu plataforma web de negocios.</p>

    <p><span style="color: #ff00ff"><i>??Para qu?? sirve Befunky?</i><span></p>

    <p>Como ya hemos mencionado al principio, Befunky es la plataforma definitiva para ayudarte con tu contenido visual en cualquiera de tus redes sociales o incluso con tu web corporativa. Befunky te permite crear:</p>
    <ul>
    <li>Publicaciones creativas y din??micas en tus redes sociales.</li>
    <li>Cambiar el color, poner efectos y marcos a tus im??genes.</li>
    <li>Ajustar formato y tama??o de tus dise??os.</li>
    <li>Crear logos personalizados.</li>
    <li>Infograf??as para tu blog.</li>
    <li> Encabezados para tu p??gina web.</li>
    <li>Banners.</li>
    <li>Compartir tus creaciones en las redes sociales.</li>
    <li>Ver contenido de otros usuarios.</li>
    </ul>
    <li></li>

    <p>Sin duda, todo lo que necesites para convertirte en un dise??ador est?? aqu??. 
    Adem??s, te ofrece una enorme cantidad de efectos de la m??s alta calidad para mejorar 
    la apariencia de tu negocio. Incluso si no tienes experiencia, con Befunky puedes crear tantos anuncios
    de calidad para tu negocio como desees.</p>
    <br>
    <p><strong>Fuente:</strong>Befunky: ??Qu?? es y para qu?? sirve?. <a href="https://econsultoria.net/blog/befunky-que-es-y-para-que-sirve/" target="_blank" rel="noopener">Sitio informativo.</a></p>
    
    <br>
    <p><strong>Fuente:</strong> Befunky.<a href="https://www.befunky.com/es/" target="_blank" rel="noopener">Sitio Oficial.</a></p>
    ` );
    incluir_seccion_hijo("animoto", "Animoto", "apps_dise??o")
    actualizar_parrafo("animoto", `
    <p><span style="color: #ff00ff"><i>??Qu?? es Animoto?</i><span></p>
    
    <p>Animoto es una herramienta online que sirve para crear v??deos animados. Las posibilidades son ilimitadas, pero como te dec??a antes, yo la veo m??s para presentar un producto.</p>
    <p>Al igual que Spark, es muy sencilla de usar y puedes crear un v??deo de forma muy r??pida y con un acabado muy profesional. Pero antes de tirar las campanas al vuelo, veamos m??s en profundidad lo bueno y lo malo.</p>
    <p><span style="color: #ff00ff"><i>Ventajas y desventajas de Animoto</i><span></p>
   
    <p>Adem??s de analizarla de forma general, vamos a compararla con las caracter??stica de Adobe Spark.</p>

    <table class="table">
        <thead>
          <tr>
         
            <th scope="col">Ventajas</th>
            <th scope="col">Desventajas</th>
           
            
          </tr>
        </thead>
        <tbody>
          <tr>
           
            <td>Hiperdummie: su eslogan lo dice todo: ??hazlo sencillo, hazlo bonito??. Muy, muy sencilla de usar (Spark tambi??n es muy intuitiva).</td>
        <td>No es gratuita: Animoto te da un ??trial?? de 14 d??as. Despu??s podr??s seguir us??ndola pero con marca de agua.</td>
           
          </tr>
          <tr>
           
            <td>App m??vil: tiene aplicaci??n gratis para Iphone y Android (Spark tambi??n tiene app).</td>
            <td>Solo v??deos: aunque tampoco es que sea algo malo, simplemente est?? especializada. Con Spark tambi??n puedes crear im??genes para redes.</td>
             </tr>
          <tr>
           
            <td>Calidad: permite HD (solo en la versi??n de pago). En la gratuita, llega a 720 p??xeles.</td>
            <td>Uso tosco de los textos: Spark no te dejaba cambiar los textos de sitio porque los editaba de forma que siempre se visualizaran bien. Animoto te da m??s libertad, pero no es ??gil.</td>
          </tr>
          <tr>
            
            <td>Redes Sociales: puedes compartir de forma directa con Facebook, Twitter, YouTube, Pinterest, WordPress, etc. (Spark tiene bastantes menos opciones).</td>
            <td>Como gran ventaja, Animoto tiene el que se pueden incorporar clips de v??deo. Spark gana en que tiene m??s funcionalidades y en que es gratuita.</td>
            
          </tr>
          <tr>
            
            <td>Clips de v??deo: mientras que en Adobe Spark solo pod??as incluir im??genes, aqu?? s?? podemos incluir v??deos. Da m??s dinamismo y el resultado final es m??s atractivo.</td>
            <td></td>
            
          </tr>
          
         </tbody>
      </table>  
   
      <br>
      <p><strong>Fuente:</strong>Animoto: c??mo crear v??deos animados para promocionar tus productos y servicios.<a href="https://javiermanzaneque.com/animoto-crear-videos-animados/" target="_blank" rel="noopener">Sitio informativo.</a></p>
      
      <br>
      <p><strong>Fuente:</strong> Animoto.<a href="https://animoto.com/" target="_blank" rel="noopener">Sitio Oficial.</a></p>
    `
    );
    incluir_seccion_hijo("biteable", "Biteable", "apps_dise??o")
    actualizar_parrafo("biteable", `
    <p><span style="color: #ff00ff"><i>??Que es Biteable?</i><span></p>
    <p>Se trata de una aplicaci??n web, con una modalidad completamente gratuita para crear v??deos ilimitados, que se define como la herramienta web m??s sencilla del mundo para crear v??deos.</p>

    <p>Lo cierto es que ofrece muchas posibilidades para crear todo tipo de v??deos sin necesidad de un aprendizaje previo y con unos resultados mucho m??s que aceptables.</p>
    <br>
    <p><span style="color: #ff00ff"><i> Algunas caracter??sticas de Biteable:</i><span></p>
    
    <ul> 
   
    <li>Crea todo tipo de v??deos completamente gratis.</li>
    <li>No necesitas ning??n tipo de conocimientos previos en edici??n de v??deo.</li>
    <li>La modalidad gratuita permite crear v??deos ilimitados y enviarlos a YouTube, Twitter y Facebook.</li>
    <li>La modalidad de pago permite tambi??n la descarga de los v??deos.</li>
    <li>Creaci??n de v??deos realmente sencilla partiendo de plantillas predise??adas que puedes personalizar.</li>
    <li>Crea tus v??deos en cinco sencillos pasos.</li>
    </ul>
    <br>
    <p><strong>Fuente:</strong>Biteable: la aplicaci??n web m??s sencilla para crear excelentes v??deos<a href="https://www.softandapps.info/2016/08/08/biteable-aplicacion-web-sencilla-crear-videos/" target="_blank" rel="noopener">Sitio informativo.</a></p>
    
    <br>
    <p><strong>Fuente:</strong> Biteable.<a href="https://biteable.com/" target="_blank" rel="noopener">Sitio Oficial.</a></p>
    `);

    incluir_seccion_padre("desarrollo_web", "DESARROLO WEB")
    incluir_seccion_hijo("wix", "Wix", "desarrollo_web")
    actualizar_parrafo("wix", `
   
    <p><span style="color: #ff00ff"><strong>??Que es Wix?</strong></span></p>
    <p>WIx es una plataforma de desarrollo web que basa su sistema en la nube, en la cual puedes hacer tu sitio web sin tener conocimientos profundos en programaci??n. Te ofrece cientos de plantillas y funciones con las cu??les podr??s jugar para crear tu sitio web, blog o tienda online.</p>
    <p>Lo ??nico que debes hacer es registrarte en la plataforma y responder un par de preguntas que el sitio realiza antes de que puedas elegir el tipo de plantillas que deseas implementar.</p> 
    <br>
    <p><span style="color: #ff00ff"><strong>??Para qu?? sirve Wix?</strong></span></p>

    <p>Wix sirve para crear y dise??ar sitios web sin necesidad de un experto en el ??rea y con la calidad de un profesional. Esto es ideal para las personas que van comenzando con un negocio, pues pueden crear su sitio, tienda o blog sin costo alguno y con mucha facilidad.</p>
    <br>
    <p><strong>Fuente:</strong>??Que es wix y para qu?? sirve? <a href="https://ecdisis.com/que-es-wix-y-para-que-sirve/" target="_blank" rel="noopener">Sitio informativo.</a></p>
    <br>
    <p><strong>Fuente:</strong> Wix.<a href="https://es.wix.com/" target="_blank" rel="noopener">Sitio Oficial.</a></p>
    `)
    incluir_seccion_hijo("wordpress", "Wordpress", "desarrollo_web")
    actualizar_parrafo("wordpress", `
   
    <p><span style="color: #ff00ff"><strong>??Qu?? es WordPress?</strong></span></p>
    
   
    <p>WordPress es un sistema de gesti??n de contenidos web (CMS o content management system), 
    que en pocas palabras es un sistema para publicar contenido en la web de forma sencilla, es decir
    que permite crear y mantener un blog u otro tipo de web.</p>
    <p>Con casi 10 a??os (desde el 2010) de existencia y m??s de un millar de temas (plantillas) disponibles en su web oficial, no es solo un sistema sencillo e intuitivo para crear un blog personal, sino que permite realizar toda clase de web m??s complejas.</p>
    <br>
    <p><span style="color: #ff00ff"><strong>??Qu?? se puede hacer con WordPress?</strong></span></p>
    <p>En muchas ocasiones se asocia WordPress con una herramienta que solo sirve para hacer blogs.</p>

    <p>Esto no es correcto: con WordPress podemos crear un crear un blog y mucho m??s: webs empresariales, tiendas online, peri??dico digital, central de reservas, etc.</p>
    
    <br>
    <p><strong>Fuente:</strong>??Qu?? es WordPress?<a href="https://www.webempresa.com/wordpress/que-es-wordpress.html" target="_blank" rel="noopener">Sitio informativo.</a></p>
    <p><strong>Fuente:</strong>WordPress, ??Qu?? es?<a href="https://institutocajasol.com/que-es-wordpress-y-como-funciona/" target="_blank" rel="noopener">Sitio informativo.</a></p>

    <br>
    <p><strong>Fuente:</strong> WordPress.<a href="https://wordpress.com/es/" target="_blank" rel="noopener">Sitio Oficial.</a></p>
    `)

    incluir_seccion_padre("softwares_alternativos_microsoft_office", "SOFTWARES ALTERNATIVOS A MICROSOFT OFFICE");

    incluir_seccion_hijo("libre_office", "Libre Office", "softwares_alternativos_microsoft_office")
    actualizar_parrafo("libre_office", `
   <p><span style="color: #ff00ff"><strong>??Qu?? es Libre Office?</strong></span></p>
   <p>LibreOffice es un conjunto de aplicaciones inform??ticas de productividad que, por una subscribci??n al mes
   ofrece soporte personalizado para entornos profesionales, as?? como actualizaciones autom??ticas. 
   Aunque tambi??n cuenta con una versi??n gratis.</p>
    <p>Los archivos generados se guardan por defecto en formato Microsoft Office (.doc, .xls, .ppt, etc.)
    por lo que se pueden compartir de forma totalmente transparente con usuarios que est??n utilizando este
    programa. LibreOffice permite tambi??n trabajar con archivos en formato <strong>Open Document Format</strong> (.odf),
    el est??ndar internacional cada vez m??s utilizado en entornos de Administraci??n P??blica y Educaci??n
    (ISO26300 para el almacenamiento de documentos ofim??ticos, es decir, documentos de oficina).</p>
    <p>Adem??s: </p>
    <ul> 
    <li>Los documentos generados con LibreOffice <strong>se pueden exportar directamente en formato Adobe (PDF) </strong> sin necesidad de software adicional.</li>
    <li>Los usuarios de LibreOffice pueden disfrutar de soporte t??cnico espec??fico para resolver
    cualquier duda sobre funcionalidades y/o incidencias, en caso de que las hubiera. El acceso a
    dicho soporte est?? disponible, a trav??s de chat, en las propias aplicaciones de LibreOffice. 
    Esto quiere decir que detr??s del software LibreOffice, hay una comunidad de desarrolladores y colaboradores muy activa, en actualizar y resolver fallas del programa, que sean reportadas.</li>
    </ul>
    <br>
    <p><span style="color: #ff00ff"><strong>??Qu?? ventajas ofrece LibreOffice?</strong></span></p>
    <ul> 
    <li><strong>Flexibilidad y ahorro en coste e inversiones:</strong> Podr??s adecuar tu cuota de subscripci??n del software ofim??tico 
    seg??n evolucionen tus necesidades. As?? pagar?? m??s o menos al mes, en funci??n de lo que
    necesite, y podr?? distribuir el coste del software, sin un desembolso
    inicial grande.
    </li>
    <li><strong>Tranquilidad y seguridad:</strong> Siempre estar?? utilizando una versi??n legal del software, sin ninguna limitaci??n funcional. Servicio de
    actualizaci??n permanente, lo que garantiza que su PC ser?? menos vulnerable a infecciones por virus.
    Usted no tendr?? que preocuparse por nada, porque el agente proporcionado por Movistar se ocupa
    de todo esto por usted.</li>
    <li><strong>Asesor??a y soporte:</strong> ??Tiene dudas? Al otro lado del CHAT hay un experto asesor que le ayudar?? a resolver las
    dudas relacionadas con la aplicaci??n. Ahora no est?? solo, la respuesta es inmediata.</li>
    </ul>

    <br>
    <p><span style="color: #ff00ff"><strong>??Qu?? puedo hacer con LibreOffice?</strong></span></p>
    <p>LibreOffice es una suite de herramientas de uso ofim??tico universal que
    integra las siguientes aplicaciones: </p>
    <ul> 
    <li><strong>Calc. Hojas de c??lculo:</strong> Aplicaci??n de manipulaci??n y c??lculo de datos num??ricos y alfanum??ricos
    dispuestos en forma de tablas. Con Calc mantendr?? de manera sencilla un control sobre sus finanzas.</li>
    <li><strong>Writer. Procesador de textos:</strong> Software para la creaci??n, edici??n y maquetaci??n de documentos de
    texto en distintos formatos. Con Writer tendr?? una excelente herramienta para editar sus documentos, sin
    cambiar la forma en que lo ven??a haciendo hasta ahora con otros programas de similares caracter??sticas.</li>
    <li><strong>Impress. Presentaciones:</strong> Impress le ayudar?? a realizar presentaciones profesionales ayudando a
    trasmitir las ideas de su negocio de forma r??pida y sencilla.</li>
    <li><strong>Draw. Herramientas para el dibujo vectorial:</strong> Software destinado a la creaci??n y edici??n de dibujos
    vectoriales. Con Draw podr?? dise??ar volantes, tr??pticos, o anuncios de una manera sencilla y din??mica, sin
    ning??n conocimiento previo. Herramienta id??nea tanto para dibujos t??cnicos como art??sticos.</li>
    <li><strong>Base. Bases de Datos:</strong> Sistema de gesti??n de bases de datos le permitir?? crear y modificar tablas,
    formularios, consultas, informes, etc., que mantendr??n su negocio al d??a. Base genera reportes, consultas
    r??pidas, permite el uso de gr??ficos de amplias dimensiones, etc. No echar?? de menos su habitual programa de
    gesti??n de bases de datos.</li>
    <li><strong>Y un editor de HTML:</strong> ??LibreOffice tambi??n
    dispone de una herramienta que permite la
    creaci??n y edici??n de p??ginas Web!.</li>
    </ul>
    <br>
    <p><strong>Fuente:</strong> ??Qu?? es LibreOffice? <a href=" https://www.aplicateca.es/Resources/45c94dcb-1ca4-4523-8133-e089d0721780/Ficha%20LibreOfficev4.pdf" target="_blank" rel="noopener">Documento informativo.</a></p>
    <br>
    <p><span style="color: #ff00ff"><strong><i>Enlaces de Inter??s</i></strong></span></p>
    
    <p><strong>Sitio web oficial:</strong> <a href="http://es.libreoffice.org/" target="_blank" rel="noopener">http://es.libreoffice.org/</a></p>
    <p><strong>Requerimientos:</strong> <a href="http://es.libreoffice.org/recibe-ayuda/requisitos-del-sistema/" target="_blank" rel="noopener">http://es.libreoffice.org/recibe-ayuda/requisitos-del-sistema/</a></p>
    <p><strong>Descarga Versi??n nueva:</strong> <a href=" http://es.libreoffice.org/descarga/libreoffice-nuevo/" target="_blank" rel="noopener"> http://es.libreoffice.org/descarga/libreoffice-nuevo/</a></p>
    <p><strong>Descarga Versi??n estable:</strong> <a href="http://es.libreoffice.org/descarga/libreoffice-estable/" target="_blank" rel="noopener">http://es.libreoffice.org/descarga/libreoffice-estable/</a></p>
    <br>
    <p><strong>Fuente:</strong> ??Qu?? es y para que sirve LibreOffice? <a href="https://www.codedimension.com.ar/noticias-sobre-tecnologia/noticias/que-es-y-para-que-sirve-libreoffice/98" target="_blank" rel="noopener">Sitio informativo.</a></p>
    <br>
    <p><strong>Fuente:</strong> Talleres de Herramientas Inform??ticas de la Investigaci??n en Humanidades. Secretaria de Oficina de Graduados FFyH. Centro de Investigaciones de la Facultad de Filosof??a y Humanidades de la Universidad Nacional de C??rdoba Octubre 2019.</p>
    <p><strong>Fuente:</strong> Links y recursos del taller ???Ladran, pero no muerden???. <a href="https://errejulian.github.io/ladran/" target="_blank" rel="noopener">Recursos del taller.</a></p>
    `)
    incluir_seccion_hijo("open_office", "Apache Open Office", "softwares_alternativos_microsoft_office")
    actualizar_parrafo("open_office", `
    <p><span style="color: #ff00ff"><strong>??Qu?? es Apache Open Office?</strong></span></p>
    <p>Apache OpenOffice es una suite de oficina de c??digo abierto l??der para el procesamiento 
    de palabras, hojas de c??lculo, presentaciones, gr??ficos, bases de datos y m??s. 
    Open Office es un paquete de oficina. Esto quiere decir, que es un conjunto de programas inform??ticos 
    que permiten desarrollar distintas tareas, como la creaci??n, la edici??n y el almacenamiento de 
    documentos que suelen usarse en el ??mbito laboral. Se encuentra disponible en varios idiomas y funciona en todos los sistemas comunes. Almacena todos sus datos 
    en un formato que es un est??ndar internacional y puede tambi??n leer y escribir archivos producidos
    por otros paquetes de oficina. Puede ser descargado y utilizado completamente sin cargo para 
    cualquier prop??sito.</p>

    <p>Dado que su c??digo fuente puede ser utilizado, modificado y redistribuido libremente, Open Office 
    es un software libre. Adem??s dispone de c??digo abierto: <strong>se basa en la colaboraci??n de los usuarios.</strong></p>
    <br>
    <p><i>Este paquete de oficina, consta de seis programas:</i></p>
    <ul>
    <li><strong>Writer:</strong> es el procesador de textos de Open Office. Sus caracter??sticas son semejantes a las de Microsoft Word. Entre sus prestaciones, se incluye la posibilidad de realizar la exportaci??n de archivos de texto a los formatos HTML y PDF.</li>
    <li><strong>Calc:</strong> es la hoja de c??lculo de Open Office. Es muy similar a Microsoft Excel, 
    aunque brinda opciones adicionales y tambi??n permite exportar documentos a PDF.</li>
    <li><strong>Draw:</strong> es el editor de gr??ficos vectoriales de Open Office.</li>
    <li><strong>Base:</strong> es un programa de base de datos.</li>
    <li><strong>Impress:</strong> es un programa de presentaciones como Microsoft PowerPoint.</li>
    <li><strong>Math:</strong> es la aplicaci??n de Open Office para crear y editar f??rmulas matem??ticas.</li>
    </ul>
    <br>
    <p><span style="color: #ff00ff"><strong><i>Ventajas y desventajas de Apache Open Office</i></strong></span></p>
    <p><strong><i>Ventajas:</i></strong></span></p>
    
    <ul>
    <li>La primera ventaja de Open Office es las otras alternativas Microsoft Office es que no cuesta dinero.</li>
    <li>Es muy tentador para aquellas personas que no cuenten con un presupuesto necesario y no quiere recurrir 
    a la pirateria ?? robar.</li>
    <li>Como Apache OpenOffice es el resultado de m??s de dos d??cadas de trabajo. Su Dise??o desde el principio 
    como un ??nico programa, ofrece una consistencia que otros softwares no pueden igualar.</li>
    <li>Apache OpenOffice es producto de un proceso de desarrollo completamente abierto, esto significa 
    que todos pueden reportar errores, pedir nuevas caracter??sticas o mejorar el programa.</li>
    <li>El dinero que invierte en un programa comercial muchas veces repercute en su 
    calidaden la presencia de un equipo de atenci??n al cliente las 24 horas, en actualizaciones frecuentes y en una mayor compatibilidad con el resto de los 
    productos del mercado.</li>
    <li>Apache OpenOffice es f??cil de aprender, si usted est?? ya acostumbrado a utilizar 
    otros paquetes de oficina comprender?? r??pidamente c??mo funciona Apache OpenOffice.</li>
    <li>Dada su amplia comunidad internacional, muy probablemente Apache OpenOffice est?? disponible y 
    tenga soporte en su propio idioma.</li>
    <li>Puede ejecutar archivos provenientes de otros paquetes de oficina.</li>
    <li>Apache OpenOffice es libre, es decir, que puede ser descargado y utilizado en forma 
    completamente libre sin pagar licencias. Apache OpenOffice est?? liberado bajo la 
    <strong>licencia Apache 2.0</strong>. Esto significa que se puede utilizar el programa para cualquier
    prop??sito: dom??stico, comercial, educacional, administraci??n p??blica. Por lo tanto se puede 
    instalar en tantas computadoras como desee; y se puede hacer muchas copias y distribuirlas 
    entre sus familiares, amigos, estudiantes, empleados???  y a cualquier persona que desee.</li>
    </ul>
    <br>
    <p><strong><i>Desventajas:</i></strong></span></p>
    <ul>
    <li>Una de las desventajas en los programas de libre distribuci??n y fuente abiertas, es que no suelen estar actualizados 
    y cualquier error reportado tarda en ser resuelto, dependiendo de la comunidad de usuarios, colaboradores y desarrolladores,
    debido a la falta de organizaci??n, presupuesto y direcci??n.</li>
    <li>El dinero que invierte en un programa comercial (como Microsoft Office) repercute en su 
    calidad, en la presencia de un equipo de atenci??n al cliente las 24 horas,
    en actualizaciones frecuentes y en una mayor compatibilidad con el resto de los productos del mercado.</li>
    <li>Unas de las desventajas de Open Office y las ofertas similares es que <strong>no siempre son f??ciles de 
    aprender, para los veteranos de sus contrapartidas comerciales</strong>. 
    Ya que Microsoft Office existe desde mucho tiempo antes, y gran porcentaje de los usuarios de PC
    dieron sus primeros pasos por el mundo de la ofim??tica ?? programas de paquete de oficina, 
    a trav??s de Word, Excel y PowerPoint. Entonces cuando se enfrentan a utilizar programas 
    aparentemente equivalentes pero con tantas diferencias en su funcionamiento, se confunden 
    y se frustran con facilidad.</li>
    <li>En algunos casos ser?? necesario invertir un poco de tiempo en el aprendizaje 
    de las caracterisitcas de los programas Open Office.</li>
    <li>Un caso similar ocurre con GIMP, una aplicaci??n para editar im??genes que se presenta 
    como una excelente alternativa gratuita a Photoshop.
    Aunque sus prestaciones son dignas de atenci??n e incluso han innovado en ciertos aspectos que 
    Photoshop adquiri?? m??s tarde, <strong>sus herramientas no resultan 
    intuitivas para los usuarios de la competencia</strong>, y esta curva de aprendizaje suele ser crucial.</li> 
    </ul>


   <br>
   <p><strong>Fuente:</strong> Por qu?? Apache OpenOffice. <a href="https://www.openoffice.org/es/por-que/" target="_blank" rel="noopener">Sitio informativo.</a></p>
   <p><strong>Fuente:</strong> Definici??n de Open Office. <a href="https://definicion.de/open-office/" target="_blank" rel="noopener">Sitio informativo.</a></p>
   <br>
   <p><strong>Descargar software:</strong> Apache Open Office. <a href="https://www.openoffice.org/es/descargar/" target="_blank" rel="noopener">https://www.openoffice.org/es/descargar/</a></p>
    <br>
    <p><strong>Fuente:</strong> Talleres de Herramientas Inform??ticas de la Investigaci??n en Humanidades. Secretaria de Oficina de Graduados FFyH. Centro de Investigaciones de la Facultad de Filosof??a y Humanidades de la Universidad Nacional de C??rdoba Octubre 2019.</p>
    <p><strong>Fuente:</strong> Links y recursos del taller ???Ladran, pero no muerden???. <a href="https://errejulian.github.io/ladran/" target="_blank" rel="noopener">Recursos del taller.</a></p>
    `)
    incluir_seccion_hijo("google_docs", "Google Docs", "softwares_alternativos_microsoft_office")
    actualizar_parrafo("google_docs", `
   <p><span style="color: #ff00ff"><strong>??Qu?? es Google Docs?</strong></span></p>
   <p>GOOGLE DOCS es una aplicaci??n muy similar a Microsoft Office, la cual permite crear, 
   almacenar, y compartir documentos de texto, hojas de c??lculo y presentaciones en l??nea. 
   Estos documentos se pueden trabajar de manera simult??nea y en tiempo real entre varios usuarios. 
   Los archivos pueden ser exportados en diversos formatos (descargados al computador) o ser enviados 
   a trav??s de correo electr??nico. Incluye adem??s una combinaci??n de servicios integrados tales como 
   el chat y el correo electr??nico para, con estos servicios, aumentar la interacci??n y comunicaci??n 
   entre usuarios. Para poder utilizar esta aplicaci??n es necesario contar con una cuenta de correo Gmail.</p>
   <br>
   <p><strong>REQUISITOS PARA UTILIZAR GOOGLE DOCS:<strong></p>
    <ul>
    <li><strong>DISPONIBILIDAD:</strong> EN LINEA.</li>
    <li><strong>CONEXI??N A INTERNET:</strong> REQUIERE.</li>
    <li><strong>INSTALACI??N AL PC:</strong> NO REQUIERE.</li>
    <li><strong>TIPO DE LICENCIA:</strong>  GRATUITA.</li>
    </ul>
    <br>
    <p><span style="color: #ff00ff"><strong>Orientaciones de uso</strong></span></p>
    <p><strong><i>PROYECTOS COLABORATIVOS</i></strong></span></p>

    <p>Google Docs es una excelente aplicaci??n para la realizaci??n de informes, presentaciones, 
    trabajos, proyectos grupales. Permite la participaci??n de todos los integrantes en un mismo documento 
    y de manera simult??nea. Adem??s, la herramienta chat posibilita el intercambio entre usuarios mientras 
    se participa en la edici??n del documento.</p>
    <br>
    <p><strong><i>MATERIAL DOCENTE</i></strong></span></p>

    <p>Google Docs es una excelente aplicaci??n que permite preparar material did??ctico para una clase.</p> 
    <p>Adem??s en caso de cursos con m??s de un docente, facilita la construcci??n del mismo en colaboraci??n.</p>
    <br>
    <p><strong><i>EVALUACI??N</i></strong></span></p>
    <p>Google Docs es una excelente aplicaci??n que permite visualizar y monitorear el trabajo
    realizado por cada usuario o un grupo de estudiantes al acceder al documento en l??nea, 
    identificando lo realizado por cada uno.</p>
    <br>
    <p><strong>Fuente:</strong> Google Docs. <a href="https://recursostic.ucv.cl/wordpress/index.php/essential_grid/google-docs-perfil-docente/#1468251697253-cddcfd6a-9f58" target="_blank" rel="noopener">Sitio informativo.</a></p>
    <br>
    <p><strong>Ir a herramienta colaboraborativa online:</strong> Google Docs. <a href="https://www.google.com/intl/es_AR/docs/about/" target="_blank" rel="noopener">Ir a Google Docs.</a></p>
    <br>
    <p><strong>Fuente:</strong> Talleres de Herramientas Inform??ticas de la Investigaci??n en Humanidades. Secretaria de Oficina de Graduados FFyH. Centro de Investigaciones de la Facultad de Filosof??a y Humanidades de la Universidad Nacional de C??rdoba Octubre 2019.</p>
    <p><strong>Fuente:</strong> Links y recursos del taller ???Ladran, pero no muerden???. <a href="https://errejulian.github.io/ladran/" target="_blank" rel="noopener">Recursos del taller.</a></p>
    `)

    incluir_seccion_padre("softwares_orientados_documentos_escritos", "SOFTWARES ORIENTADOS A DOCUMENTOS ESCRITOS")
    incluir_seccion_hijo("latex", "Latex", "softwares_orientados_documentos_escritos")
    actualizar_parrafo("latex", `
    <p><span style="color: #ff00ff"><strong>??Qu?? es Latex?</strong></span></p>
    <p>LATEX es un sistema de composici??n de textos que permite obtener f??cilmente 
    resultados de calidad profesional. 
    Para asimilar correctamente la forma de trabajar con LATEX
    conviene entender desde el primer momento que el LATEX no es en absoluto un procesador
    de textos, sino <span style="color:#ff0000"><strong>un lenguaje de programaci??n orientado 
    a la generaci??n de textos</strong></span>. 
    Un procesador de textos es una aplicaci??n inform??tica que permite al usuario ir generando el
    texto deseado, mientras que <strong>las aplicaciones que nos permiten trabajar con LATEX no son
    ???el LATEX???, sino aplicaciones capaces de leer un <i>???c??digo fuente???</i> escrito por el usuario en el
    lenguaje LATEX e interpretarlo para generar un texto a partir de ??l.</strong></p>
    <br>
    <p><span style="color: #ff00ff"><strong>??C??mo surgi?? Latex?</strong></span></p>
    <p>Para entender el funcionamiento actual del LATEX conviene conocer un poco de su
    historia. En 1978 Donald Knuth present?? la primera versi??n del lenguaje TEX, cuya
    naturaleza es la misma que acabamos de describir para el LATEX, pero con la diferencia
    de que es un lenguaje de relativamente ???bajo nivel???, es decir, que requiere generar mucho
    c??digo fuente para conseguir que el texto generado tenga alguna caracter??stica deseada.
    Sin embargo, entre las caracter??sticas que confieren al TEX su gran potencia se encuentra
    la de que permite generar ???macros???, es decir, ???programas???, bloques de c??digo, que definen
    instrucciones complejas a partir de otras m??s simples, de modo que basta escribir una
    instrucci??n definida en una ???macro??? para obtener r??pidamente un efecto que puede requerir
    muchas y complejas l??neas de instrucciones TEX. En 1983 Leslie Lamport present?? la
    primera versi??n del LATEX, que no es sino una ???macro" gigantesca de TEX que define un
    lenguaje de ???alto nivel??? con el que resulta mucho m??s f??cil el trabajo. La versi??n actual
    de LATEX se llama LATEX 2?? y data de 1994.</p>
    
    
    
    <br>
    <p><strong>Fuente:</strong> Introducci??n a Latex. <a href="https://www.uv.es/~ivorra/Latex/LaTeX.pdf" target="_blank" rel="noopener">Documento informativo.</a></p>
    <p><strong>Fuente:</strong> Definici??n de Open Office. <a href="https://definicion.de/open-office/" target="_blank" rel="noopener">Sitio informativo.</a></p>
    <br>
    <p><span style="color: #ff00ff"><strong>Entonces Latex es...</strong></span></p>
    
    <p>Latex, es un sistema que ayuda al usuario a preparar un documento. Con ??l puedes preparar 
    cualquier tipo de documento para presentarlo tanto en papel como en pantalla tales como 
    manuscritos, cartas, art??culos de revistas y tesis.</p>

    <p>Existen procesadores de textos tales como Microsoft Word, la diferencia es la calidad     
    profesional de los documentos que produce Latex. La calidad de imprenta de Latex pueden 
    ser usados en areas como qu??mica, f??sica, computaci??n, biolog??a, leyes, literatura, m??sica 
    y en cualquier otro tema el cu??l usen simbolog??as.</p>

    <p>Otra catacter??stica es que te permite separar el contenido y el formato del documento. 
    As?? tener la oportunidad de concentrarte en generar y escribir ideas en una parte y 
    plasmar esas ideas en otra.</p>
    <br>
    <p><strong>Fuente:</strong> ??Qu?? es LaTeX y para qu?? sirve? <a href="http://micaminomaster.com.co/herramientas-desarrollo/que-es-latex-y-para-que-sirve/" target="_blank" rel="noopener">Sitio informativo.</a></p>
    <br>

    <p><strong>Descargar software:</strong> Proyect Latex Windows. <a href="https://latex-project.softonic.com/" target="_blank" rel="noopener">https://latex-project.softonic.com/</a></p>
    
    <br>
    <p><span style="color: #ff00ff"><strong>Gu??a y tutoriales para utilizar LaTex.</strong></span></p>
    <p><strong>Fuente:</strong> ??Cu??l es el mejor procesador de textos LaTeX para tu tesis, PFC o TFM? 
    <a href="https://borrowbits.com/2013/04/procesador-de-textos-gummi/" target="_blank" rel="noopener">Sitio informativo.</a></p>
    <p><strong>Post de Blog:</strong> LaTeX, escribiendo con clases (parte 1). <a href="https://blog.desdelinux.net/latex-escribiendo-con-clase-parte-1/" target="_blank" rel="noopener">Sitio informativo.</a></p>
    <p><strong>Post de Blog:</strong> LaTeX, escribiendo con clases (parte 2). <a href="https://blog.desdelinux.net/latex-escribiendo-con-clase-parte-2/" target="_blank" rel="noopener">Sitio informativo.</a></p>
    <p><strong>Post de Blog:</strong> LaTeX, escribiendo con clases (parte 3). <a href="https://blog.desdelinux.net/latex-escribiendo-con-clase-parte-3/" target="_blank" rel="noopener">Sitio informativo.</a></p>
    <p><strong>Post de Blog:</strong> LaTeX, escribiendo con clases (parte 4). <a href="https://blog.desdelinux.net/latex-escribiendo-con-clase-parte-4/" target="_blank" rel="noopener">Sitio informativo.</a></p>
    <br>
    <p><strong><i>LATEX, COMO SE MENCIONADO, ES MAS QUE UN PROCESADOR DE TEXTO, ES SIMILAR A UN LENGUAJE
    DE PROGRAMACI??N, QUE SE UTILIZAN COMANDOS, PALABRAS CLAVES, PARA HACER UN TITULO, AGREGAR UN PARRAFO,
    AGREGAR METADATOS DEL DOCUMENTO, ETC. LO IMPORTANTE EN UTILIZAR ESTE SISTEMA, ES QUE TE PERMITE PRODUCIR
    DESDE UN "CODIGO FUENTE" VARIOS TIPOS DE DOCUMENTOS, EN DIFERENTES FORMATOS. QUIZ??S TE SEA ??TIL, SI QUER??S
    PUBLICAR UNA REVISTA, HACER TU TESIS, Y A POSTERIOR MODIFICARLA PARA PUBLICAR. LATEX TE FACILITAR??A, CAMBIAR
    DE FORMATO, CON S??LO HABER ESCRITO UNA S??LA VEZ. POR ESO ES IMPORTANTE APRENDER A MANEJAR LATES.
    COMO EL SISTEMA OPERATIVO QUE MANEJO ES LINUX/GNU, LA MAYORIA DE LAS RECOMENDACIONES APUNTAN A ESE SISTEMA OPERATIVO.
    ESPERO QUE TE HAYA SIDO ??TIL ESTA INFORMACI??N RECOPILADA.</i></strong></p>
    
    
    
    <br>
    <p><strong>Fuente:</strong> Talleres de Herramientas Inform??ticas de la Investigaci??n en Humanidades. Secretaria de Oficina de Graduados FFyH. Centro de Investigaciones de la Facultad de Filosof??a y Humanidades de la Universidad Nacional de C??rdoba Octubre 2019.</p>
    <p><strong>Fuente:</strong> Links y recursos del taller ???Ladran, pero no muerden???<a href="https://errejulian.github.io/ladran/" target="_blank" rel="noopener">Recursos del taller</a></p>
    `)
    incluir_seccion_hijo("lyx", "Lyx", "softwares_orientados_documentos_escritos")
    actualizar_parrafo("lyx", `
   <p><span style="color: #ff00ff"><strong>??Qu?? es Lyx?</strong></span></p>
    <br>
   <p>Podemos decir que: </p>
   <p>LyX es un procesador de documentos que fomenta un enfoque basado en la estructura 
    (WYSIWYM) y no simplemente en el formato o el aspecto (WYSIWYG) para la composici??n de documentos.</p>
    <br>
    <p>LyX combina la potencia de TeX/LaTeX con la facilidad de uso de una interfaz gr??fica. </p> <br>
    <p>Esto resulta en un soporte universal para la creaci??n de contenido matem??tico (mediante un editor de 
    ecuaciones totalmente integrado) y documentos estructurados como art??culos acad??micos, tesis o libros. </p>
    <br>
    <p>LyX quienes dar a sus escritos un aspecto excelente, de manera directa e inmediata.  </p> <br>
    <p>Est?? publicado como software libre, y est?? disponible para distintos sistemas operativos incluidos 
   aquellos no libres.</p>
    <br>
   <p>Pero manejar un procesador con tanta potencia de edici??n y opciones es algo sencillo cuando se 
   le dedica tiempo y adem??s se encuentran recursos tan buenos como el libro que ha escrito Ricardo G. 
   Berlasso tambi??n conocido como ??El Ping??ino Tolkiano??. Que acaba de publicar un extenso libro sobre 
   que viene a completar, corregir y ampliar los art??culos que de vez en cuando ha publicado en su blog. </p>
    <br>
   <p>Todo ese material bien revisado, estructurado, compilado y reunido en un 
   libro que acaba de publicar y que puedes consultar de manera libre, ya que est?? publicado bajo licencia CC-by-sa. </p>
    <br>
   <p>Ricardo aka RGB presenta un libro sobre LyX, se titula ??LyX, la otra forma de escribir?? 
   y tal como el propio escritor nos dice, est?? escrito mayormente en la versi??n 2.2, aunque tambi??n 
    presenta las principales novedades.</p>
    <br>
    <p>Son 196 p??ginas de puro formato y tipograf??a que te ayudar??n a obtener resultados inimaginables 
   con otros procesadores de documentos. </p>
    <br>
   <p>El libro parte de la base y hace un repaso inicial a qu?? es para despu??s profundizar 
   en todas las opciones que nos ofrece para conseguir sacarle todo el potencial y saber
   aprovecharnos de todas las funcionalidades que nos brinda. </p>
    <br>
   <p><strong>Si est??s buscando un buen libro para aprender a manejar LyX o aprender cosas nuevas que quiz??s no 
   conoc??as te recomiendo pasar por su p??gina oficial y desde all?? conseguir este gran libro para manejar 
   este procesador de documentos.</strong> </p>
    <br>
   <p>Como he dicho el libro est?? publicado con licencia libre y puedes descargarlo de manera 
   libre en formato PDF, pero puedes adem??s conseguirlo en otros formatos.</p>
    <br>
   <p>Adem??s si el libro te ha resultado especialmente ??til e interesante tambi??n puedes agradec??rselo al 
   escritor mediante una donaci??n.</p>
   
    <br>
   <p><strong>Fuente:</strong> Blog informativo de Lyx: "Victorhck in the free world". <a href="https://victorhckinthefreeworld.com/2017/11/21/aprende-a-manejar-el-procesador-de-documentos-lyx/" target="_blank" rel="noopener">Aprende a manejar el procesador de documentos LyX.</a></p>
   
   <br>
    <p><strong>Fuente:</strong> Talleres de Herramientas Inform??ticas de la Investigaci??n en Humanidades. Secretaria de Oficina de Graduados FFyH. Centro de Investigaciones de la Facultad de Filosof??a y Humanidades de la Universidad Nacional de C??rdoba Octubre 2019.</p>
    
    
    <p><strong>Fuente:</strong> Links y recursos del taller: ???Ladran, pero no muerden???. <a href="https://errejulian.github.io/ladran/" target="_blank" rel="noopener">Recursos del taller</a></p>
    `)
    incluir_seccion_hijo("texmaker", "TexMaker", "softwares_orientados_documentos_escritos")
    actualizar_parrafo("texmaker", `
   <p><span style="color: #ff00ff"><strong>??Qu?? es TexMaker?</strong></span></p>
    <p>Las herramientas digitales son todos los recursos de software (algunos incluyen en su defici??n al hardware que contiene software) presentes en computadoras y dispositivos relacionados, que permite realizar o facilitar todo tipo de actividades.</p>
    <br>
    <p><strong>Fuente:</strong> Talleres de Herramientas Inform??ticas de la Investigaci??n en Humanidades. Secretaria de Oficina de Graduados FFyH. Centro de Investigaciones de la Facultad de Filosof??a y Humanidades de la Universidad Nacional de C??rdoba Octubre 2019.</p>
    <p><strong>Fuente:</strong> Links y recursos del taller ???Ladran, pero no muerden???<a href="https://errejulian.github.io/ladran/" target="_blank" rel="noopener">Recursos del taller</a></p>
    `)

    incluir_seccion_padre("softwares_escribir_markdown", "SOFTWARES PARA ESCRIBIR EN MARKDOWN")
    incluir_seccion_hijo("zettir", "??Que son las Herramientas Digitales?", "softwares_escribir_markdown")
    actualizar_parrafo("zettir", `
   <p><span style="color: #ff00ff"><strong>Herramientas Digitales:</strong></span></p>
    <p>Las herramientas digitales son todos los recursos de software (algunos incluyen en su defici??n al hardware que contiene software) presentes en computadoras y dispositivos relacionados, que permite realizar o facilitar todo tipo de actividades.</p>
    <br>
    <p><strong>Fuente:</strong> Talleres de Herramientas Inform??ticas de la Investigaci??n en Humanidades. Secretaria de Oficina de Graduados FFyH. Centro de Investigaciones de la Facultad de Filosof??a y Humanidades de la Universidad Nacional de C??rdoba Octubre 2019.</p>
    <p><strong>Fuente:</strong> Links y recursos del taller ???Ladran, pero no muerden???<a href="https://errejulian.github.io/ladran/" target="_blank" rel="noopener">Recursos del taller</a></p>
     `)
    incluir_seccion_hijo("obsidian", "??Que son las Herramientas Digitales?", "softwares_escribir_markdown")
    actualizar_parrafo("obsidian", `
   <p><span style="color: #ff00ff"><strong>Herramientas Digitales:</strong></span></p>
    <p>Las herramientas digitales son todos los recursos de software (algunos incluyen en su defici??n al hardware que contiene software) presentes en computadoras y dispositivos relacionados, que permite realizar o facilitar todo tipo de actividades.</p>
   <br>
    <p><strong>Fuente:</strong> Clase 1. Curso de Tecnologias Interactivas. Academia Buenos Aires Emprende, Septiembre 2022.</p>
   `)
    incluir_seccion_hijo("stackedit", "??Que son las Herramientas Digitales?", "softwares_escribir_markdown")
    actualizar_parrafo("stackedit", `
   <p><span style="color: #ff00ff"><strong>Herramientas Digitales:</strong></span></p>
    <p>Las herramientas digitales son todos los recursos de software (algunos incluyen en su defici??n al hardware que contiene software) presentes en computadoras y dispositivos relacionados, que permite realizar o facilitar todo tipo de actividades.</p>
    <br>
    <p><strong>Fuente:</strong> Talleres de Herramientas Inform??ticas de la Investigaci??n en Humanidades. Secretaria de Oficina de Graduados FFyH. Centro de Investigaciones de la Facultad de Filosof??a y Humanidades de la Universidad Nacional de C??rdoba Octubre 2019.</p>
    <p><strong>Fuente:</strong> Links y recursos del taller ???Ladran, pero no muerden???<a href="https://errejulian.github.io/ladran/" target="_blank" rel="noopener">Recursos del taller</a></p>
    `)
    incluir_seccion_hijo("hackmd", "??Que son las Herramientas Digitales?", "softwares_escribir_markdown")
    actualizar_parrafo("hackmd", `
   <p><span style="color: #ff00ff"><strong>Herramientas Digitales:</strong></span></p>
    <p>Las herramientas digitales son todos los recursos de software (algunos incluyen en su defici??n al hardware que contiene software) presentes en computadoras y dispositivos relacionados, que permite realizar o facilitar todo tipo de actividades.</p>
    <br>
    <p><strong>Fuente:</strong> Talleres de Herramientas Inform??ticas de la Investigaci??n en Humanidades. Secretaria de Oficina de Graduados FFyH. Centro de Investigaciones de la Facultad de Filosof??a y Humanidades de la Universidad Nacional de C??rdoba Octubre 2019.</p>
    <p><strong>Fuente:</strong> Links y recursos del taller ???Ladran, pero no muerden???<a href="https://errejulian.github.io/ladran/" target="_blank" rel="noopener">Recursos del taller</a></p>
    `)

    incluir_seccion_padre("nubes_repositorios_digitales_remotos", "NUBES Y REPOSITORIOS DIGITALES REMOTOS");
    incluir_seccion_hijo("filen", "??Que son las Herramientas Digitales?", "nubes_repositorios_digitales_remotos")
    actualizar_parrafo("filen", `
   <p><span style="color: #ff00ff"><strong>Herramientas Digitales:</strong></span></p>
    <p>Las herramientas digitales son todos los recursos de software (algunos incluyen en su defici??n al hardware que contiene software) presentes en computadoras y dispositivos relacionados, que permite realizar o facilitar todo tipo de actividades.</p>
    <br>
    <p><strong>Fuente:</strong> Talleres de Herramientas Inform??ticas de la Investigaci??n en Humanidades. Secretaria de Oficina de Graduados FFyH. Centro de Investigaciones de la Facultad de Filosof??a y Humanidades de la Universidad Nacional de C??rdoba Octubre 2019.</p>
    <p><strong>Fuente:</strong> Links y recursos del taller ???Ladran, pero no muerden???<a href="https://errejulian.github.io/ladran/" target="_blank" rel="noopener">Recursos del taller</a></p>
    `)
    incluir_seccion_hijo("koofr", "??Que son las Herramientas Digitales?", "nubes_repositorios_digitales_remotos")
    actualizar_parrafo("koofr", `
   <p><span style="color: #ff00ff"><strong>Herramientas Digitales:</strong></span></p>
    <p>Las herramientas digitales son todos los recursos de software (algunos incluyen en su defici??n al hardware que contiene software) presentes en computadoras y dispositivos relacionados, que permite realizar o facilitar todo tipo de actividades.</p>
    <br>
    <p><strong>Fuente:</strong> Talleres de Herramientas Inform??ticas de la Investigaci??n en Humanidades. Secretaria de Oficina de Graduados FFyH. Centro de Investigaciones de la Facultad de Filosof??a y Humanidades de la Universidad Nacional de C??rdoba Octubre 2019.</p>
    <p><strong>Fuente:</strong> Links y recursos del taller ???Ladran, pero no muerden???<a href="https://errejulian.github.io/ladran/" target="_blank" rel="noopener">Recursos del taller</a></p>
    `)
    incluir_seccion_hijo("sync_com", "??Que son las Herramientas Digitales?", "nubes_repositorios_digitales_remotos")
    actualizar_parrafo("sync_com", `
   <p><span style="color: #ff00ff"><strong>Herramientas Digitales:</strong></span></p>
    <p>Las herramientas digitales son todos los recursos de software (algunos incluyen en su defici??n al hardware que contiene software) presentes en computadoras y dispositivos relacionados, que permite realizar o facilitar todo tipo de actividades.</p>
    <br>
    <p><strong>Fuente:</strong> Talleres de Herramientas Inform??ticas de la Investigaci??n en Humanidades. Secretaria de Oficina de Graduados FFyH. Centro de Investigaciones de la Facultad de Filosof??a y Humanidades de la Universidad Nacional de C??rdoba Octubre 2019.</p>
    <p><strong>Fuente:</strong> Links y recursos del taller ???Ladran, pero no muerden???<a href="https://errejulian.github.io/ladran/" target="_blank" rel="noopener">Recursos del taller</a></p>
    `)
    incluir_seccion_hijo("dropbox", "??Que son las Herramientas Digitales?", "nubes_repositorios_digitales_remotos")
    actualizar_parrafo("dropbox", `
   <p><span style="color: #ff00ff"><strong>Herramientas Digitales:</strong></span></p>
    <p>Las herramientas digitales son todos los recursos de software (algunos incluyen en su defici??n al hardware que contiene software) presentes en computadoras y dispositivos relacionados, que permite realizar o facilitar todo tipo de actividades.</p>
    <br>
    <p><strong>Fuente:</strong> Talleres de Herramientas Inform??ticas de la Investigaci??n en Humanidades. Secretaria de Oficina de Graduados FFyH. Centro de Investigaciones de la Facultad de Filosof??a y Humanidades de la Universidad Nacional de C??rdoba Octubre 2019.</p>
    <p><strong>Fuente:</strong> Links y recursos del taller ???Ladran, pero no muerden???<a href="https://errejulian.github.io/ladran/" target="_blank" rel="noopener">Recursos del taller</a></p>
    `)
    incluir_seccion_hijo("googledrive", "??Que son las Herramientas Digitales?", "nubes_repositorios_digitales_remotos")
    actualizar_parrafo("googledrive", `
   <p><span style="color: #ff00ff"><strong>Herramientas Digitales:</strong></span></p>
    <p>Las herramientas digitales son todos los recursos de software (algunos incluyen en su defici??n al hardware que contiene software) presentes en computadoras y dispositivos relacionados, que permite realizar o facilitar todo tipo de actividades.</p>
    <br>
    <p><strong>Fuente:</strong> Talleres de Herramientas Inform??ticas de la Investigaci??n en Humanidades. Secretaria de Oficina de Graduados FFyH. Centro de Investigaciones de la Facultad de Filosof??a y Humanidades de la Universidad Nacional de C??rdoba Octubre 2019.</p>
    <p><strong>Fuente:</strong> Links y recursos del taller ???Ladran, pero no muerden???<a href="https://errejulian.github.io/ladran/" target="_blank" rel="noopener">Recursos del taller</a></p>
    `)
    incluir_seccion_hijo("box", "??Que son las Herramientas Digitales?", "nubes_repositorios_digitales_remotos")
    actualizar_parrafo("box", `
   <p><span style="color: #ff00ff"><strong>Herramientas Digitales:</strong></span></p>
    <p>Las herramientas digitales son todos los recursos de software (algunos incluyen en su defici??n al hardware que contiene software) presentes en computadoras y dispositivos relacionados, que permite realizar o facilitar todo tipo de actividades.</p>
    <br>
    <p><strong>Fuente:</strong> Talleres de Herramientas Inform??ticas de la Investigaci??n en Humanidades. Secretaria de Oficina de Graduados FFyH. Centro de Investigaciones de la Facultad de Filosof??a y Humanidades de la Universidad Nacional de C??rdoba Octubre 2019.</p>
    <p><strong>Fuente:</strong> Links y recursos del taller ???Ladran, pero no muerden???<a href="https://errejulian.github.io/ladran/" target="_blank" rel="noopener">Recursos del taller</a></p>
    `)

    incluir_seccion_padre("softwares_sistema_gestor_cambios", "SOFTWARES DE SISTEMA DE GESTOR DE CAMBIOS");
    incluir_seccion_hijo("git", "??Que son las Herramientas Digitales?", "softwares_sistema_gestor_cambios")
    actualizar_parrafo("git", `
   <p><span style="color: #ff00ff"><strong>Herramientas Digitales:</strong></span></p>
    <p>Las herramientas digitales son todos los recursos de software (algunos incluyen en su defici??n al hardware que contiene software) presentes en computadoras y dispositivos relacionados, que permite realizar o facilitar todo tipo de actividades.</p>
    <br>
    <p><strong>Fuente:</strong> Talleres de Herramientas Inform??ticas de la Investigaci??n en Humanidades. Secretaria de Oficina de Graduados FFyH. Centro de Investigaciones de la Facultad de Filosof??a y Humanidades de la Universidad Nacional de C??rdoba Octubre 2019.</p>
    <p><strong>Fuente:</strong> Links y recursos del taller ???Ladran, pero no muerden???<a href="https://errejulian.github.io/ladran/" target="_blank" rel="noopener">Recursos del taller</a></p>
    `)
    incluir_seccion_hijo("github", "??Que son las Herramientas Digitales?", "softwares_sistema_gestor_cambios")
    actualizar_parrafo("github", `
   <p><span style="color: #ff00ff"><strong>Herramientas Digitales:</strong></span></p>
    <p>Las herramientas digitales son todos los recursos de software (algunos incluyen en su defici??n al hardware que contiene software) presentes en computadoras y dispositivos relacionados, que permite realizar o facilitar todo tipo de actividades.</p>
    <br>
    <p><strong>Fuente:</strong> Talleres de Herramientas Inform??ticas de la Investigaci??n en Humanidades. Secretaria de Oficina de Graduados FFyH. Centro de Investigaciones de la Facultad de Filosof??a y Humanidades de la Universidad Nacional de C??rdoba Octubre 2019.</p>
    <p><strong>Fuente:</strong> Links y recursos del taller ???Ladran, pero no muerden???<a href="https://errejulian.github.io/ladran/" target="_blank" rel="noopener">Recursos del taller</a></p>
    `)
    incluir_seccion_hijo("gitlab", "??Que son las Herramientas Digitales?", "softwares_sistema_gestor_cambios")
    actualizar_parrafo("gitlab", `
   <p><span style="color: #ff00ff"><strong>Herramientas Digitales:</strong></span></p>
    <p>Las herramientas digitales son todos los recursos de software (algunos incluyen en su defici??n al hardware que contiene software) presentes en computadoras y dispositivos relacionados, que permite realizar o facilitar todo tipo de actividades.</p>
    <br>
    <p><strong>Fuente:</strong> Talleres de Herramientas Inform??ticas de la Investigaci??n en Humanidades. Secretaria de Oficina de Graduados FFyH. Centro de Investigaciones de la Facultad de Filosof??a y Humanidades de la Universidad Nacional de C??rdoba Octubre 2019.</p>
    <p><strong>Fuente:</strong> Links y recursos del taller ???Ladran, pero no muerden???<a href="https://errejulian.github.io/ladran/" target="_blank" rel="noopener">Recursos del taller</a></p>
    `)

    incluir_seccion_padre("softwares_gestores_bibliograficos", "SOFTWARES DE GESTORES BIBLIOGRAFICOS");
    incluir_seccion_hijo("zotero", "??Que son las Herramientas Digitales?", "softwares_gestores_bibliograficos")
    actualizar_parrafo("zotero", `
    <p><span style="color: #ff00ff"><strong>Herramientas Digitales:</strong></span></p>
     <p>Las herramientas digitales son todos los recursos de software (algunos incluyen en su defici??n al hardware que contiene software) presentes en computadoras y dispositivos relacionados, que permite realizar o facilitar todo tipo de actividades.</p>
     <br>
     <p><strong>Fuente:</strong> Talleres de Herramientas Inform??ticas de la Investigaci??n en Humanidades. Secretaria de Oficina de Graduados FFyH. Centro de Investigaciones de la Facultad de Filosof??a y Humanidades de la Universidad Nacional de C??rdoba Octubre 2019.</p>
     <p><strong>Fuente:</strong> Links y recursos del taller ???Ladran, pero no muerden???<a href="https://errejulian.github.io/ladran/" target="_blank" rel="noopener">Recursos del taller</a></p>
     `)
    incluir_seccion_hijo("zotfile", "??Que son las Herramientas Digitales?", "softwares_gestores_bibliograficos")
    actualizar_parrafo("zotfile", `
    <p><span style="color: #ff00ff"><strong>Herramientas Digitales:</strong></span></p>
     <p>Las herramientas digitales son todos los recursos de software (algunos incluyen en su defici??n al hardware que contiene software) presentes en computadoras y dispositivos relacionados, que permite realizar o facilitar todo tipo de actividades.</p>
     <br>
     <p><strong>Fuente:</strong> Talleres de Herramientas Inform??ticas de la Investigaci??n en Humanidades. Secretaria de Oficina de Graduados FFyH. Centro de Investigaciones de la Facultad de Filosof??a y Humanidades de la Universidad Nacional de C??rdoba Octubre 2019.</p>
     <p><strong>Fuente:</strong> Links y recursos del taller ???Ladran, pero no muerden???<a href="https://errejulian.github.io/ladran/" target="_blank" rel="noopener">Recursos del taller</a></p>
     `)
    incluir_seccion_hijo("better_bibtex", "??Que son las Herramientas Digitales?", "softwares_gestores_bibliograficos")
    actualizar_parrafo("better_bibtex", `
    <p><span style="color: #ff00ff"><strong>Herramientas Digitales:</strong></span></p>
     <p>Las herramientas digitales son todos los recursos de software (algunos incluyen en su defici??n al hardware que contiene software) presentes en computadoras y dispositivos relacionados, que permite realizar o facilitar todo tipo de actividades.</p>
     <br>
     <p><strong>Fuente:</strong> Talleres de Herramientas Inform??ticas de la Investigaci??n en Humanidades. Secretaria de Oficina de Graduados FFyH. Centro de Investigaciones de la Facultad de Filosof??a y Humanidades de la Universidad Nacional de C??rdoba Octubre 2019.</p>
     <p><strong>Fuente:</strong> Links y recursos del taller ???Ladran, pero no muerden???<a href="https://errejulian.github.io/ladran/" target="_blank" rel="noopener">Recursos del taller</a></p>
     `)
    incluir_seccion_hijo("zotero_bib", "??Que son las Herramientas Digitales?", "softwares_gestores_bibliograficos")
    actualizar_parrafo("zotero_bib", `
    <p><span style="color: #ff00ff"><strong>Herramientas Digitales:</strong></span></p>
     <p>Las herramientas digitales son todos los recursos de software (algunos incluyen en su defici??n al hardware que contiene software) presentes en computadoras y dispositivos relacionados, que permite realizar o facilitar todo tipo de actividades.</p>
     <br>
     <p><strong>Fuente:</strong> Talleres de Herramientas Inform??ticas de la Investigaci??n en Humanidades. Secretaria de Oficina de Graduados FFyH. Centro de Investigaciones de la Facultad de Filosof??a y Humanidades de la Universidad Nacional de C??rdoba Octubre 2019.</p>
     <p><strong>Fuente:</strong> Links y recursos del taller ???Ladran, pero no muerden???<a href="https://errejulian.github.io/ladran/" target="_blank" rel="noopener">Recursos del taller</a></p>
     `)
    incluir_seccion_hijo("bibtex", "??Que son las Herramientas Digitales?", "softwares_gestores_bibliograficos")
    actualizar_parrafo("bibtex", `
    <p><span style="color: #ff00ff"><strong>Herramientas Digitales:</strong></span></p>
     <p>Las herramientas digitales son todos los recursos de software (algunos incluyen en su defici??n al hardware que contiene software) presentes en computadoras y dispositivos relacionados, que permite realizar o facilitar todo tipo de actividades.</p>
     <br>
     <p><strong>Fuente:</strong> Talleres de Herramientas Inform??ticas de la Investigaci??n en Humanidades. Secretaria de Oficina de Graduados FFyH. Centro de Investigaciones de la Facultad de Filosof??a y Humanidades de la Universidad Nacional de C??rdoba Octubre 2019.</p>
     <p><strong>Fuente:</strong> Links y recursos del taller ???Ladran, pero no muerden???<a href="https://errejulian.github.io/ladran/" target="_blank" rel="noopener">Recursos del taller</a></p>
     `)
    incluir_seccion_hijo("jabref", "??Que son las Herramientas Digitales?", "softwares_gestores_bibliograficos")
    actualizar_parrafo("jabref", `
    <p><span style="color: #ff00ff"><strong>Herramientas Digitales:</strong></span></p>
     <p>Las herramientas digitales son todos los recursos de software (algunos incluyen en su defici??n al hardware que contiene software) presentes en computadoras y dispositivos relacionados, que permite realizar o facilitar todo tipo de actividades.</p>
     <br>
     <p><strong>Fuente:</strong> Talleres de Herramientas Inform??ticas de la Investigaci??n en Humanidades. Secretaria de Oficina de Graduados FFyH. Centro de Investigaciones de la Facultad de Filosof??a y Humanidades de la Universidad Nacional de C??rdoba Octubre 2019.</p>
     <p><strong>Fuente:</strong> Links y recursos del taller ???Ladran, pero no muerden???<a href="https://errejulian.github.io/ladran/" target="_blank" rel="noopener">Recursos del taller</a></p>
     `)

    incluir_seccion_padre("softwares_reconocimiento_optico_caracteres", "SOFTWARES DE RECONOCIMIENTO OPTICO DE CARACTERES");
    incluir_seccion_hijo("cognitive_open_ocr", "??Que son las Herramientas Digitales?", "softwares_reconocimiento_optico_caracteres")
    actualizar_parrafo("cognitive_open_ocr", `
    <p><span style="color: #ff00ff"><strong>Herramientas Digitales:</strong></span></p>
     <p>Las herramientas digitales son todos los recursos de software (algunos incluyen en su defici??n al hardware que contiene software) presentes en computadoras y dispositivos relacionados, que permite realizar o facilitar todo tipo de actividades.</p>
     <br>
     <p><strong>Fuente:</strong> Talleres de Herramientas Inform??ticas de la Investigaci??n en Humanidades. Secretaria de Oficina de Graduados FFyH. Centro de Investigaciones de la Facultad de Filosof??a y Humanidades de la Universidad Nacional de C??rdoba Octubre 2019.</p>
     <p><strong>Fuente:</strong> Links y recursos del taller ???Ladran, pero no muerden???<a href="https://errejulian.github.io/ladran/" target="_blank" rel="noopener">Recursos del taller</a></p>
     `)
    incluir_seccion_hijo("tesseract", "??Que son las Herramientas Digitales?", "softwares_reconocimiento_optico_caracteres")
    actualizar_parrafo("tesseract", `
    <p><span style="color: #ff00ff"><strong>Herramientas Digitales:</strong></span></p>
    <p>Las herramientas digitales son todos los recursos de software (algunos incluyen en su defici??n al hardware que contiene software) presentes en computadoras y dispositivos relacionados, que permite realizar o facilitar todo tipo de actividades.</p>
    <br>
    <p><strong>Fuente:</strong> Talleres de Herramientas Inform??ticas de la Investigaci??n en Humanidades. Secretaria de Oficina de Graduados FFyH. Centro de Investigaciones de la Facultad de Filosof??a y Humanidades de la Universidad Nacional de C??rdoba Octubre 2019.</p>
    <p><strong>Fuente:</strong> Links y recursos del taller ???Ladran, pero no muerden???<a href="https://errejulian.github.io/ladran/" target="_blank" rel="noopener">Recursos del taller</a></p>
    `)

    incluir_seccion_padre("softwares_analisis_datos_cualitativos", "SOFTWARES DE ANALISIS DE DATOS CUALITATIVOS");
    incluir_seccion_hijo("atlas_ti", "??Que son las Herramientas Digitales?", "softwares_analisis_datos_cualitativos")
    actualizar_parrafo("atlas_ti", `
    <p><span style="color: #ff00ff"><strong>Herramientas Digitales:</strong></span></p>
    <p>Las herramientas digitales son todos los recursos de software (algunos incluyen en su defici??n al hardware que contiene software) presentes en computadoras y dispositivos relacionados, que permite realizar o facilitar todo tipo de actividades.</p>
    <br>
    <p><strong>Fuente:</strong> Talleres de Herramientas Inform??ticas de la Investigaci??n en Humanidades. Secretaria de Oficina de Graduados FFyH. Centro de Investigaciones de la Facultad de Filosof??a y Humanidades de la Universidad Nacional de C??rdoba Octubre 2019.</p>
    <p><strong>Fuente:</strong> Links y recursos del taller ???Ladran, pero no muerden???<a href="https://errejulian.github.io/ladran/" target="_blank" rel="noopener">Recursos del taller</a></p>
    `)
    incluir_seccion_hijo("qualcoder", "??Que son las Herramientas Digitales?", "softwares_analisis_datos_cualitativos")
    actualizar_parrafo("qualcoder", `
    <p><span style="color: #ff00ff"><strong>Herramientas Digitales:</strong></span></p>
    <p>Las herramientas digitales son todos los recursos de software (algunos incluyen en su defici??n al hardware que contiene software) presentes en computadoras y dispositivos relacionados, que permite realizar o facilitar todo tipo de actividades.</p>
    <br>
    <p><strong>Fuente:</strong> Talleres de Herramientas Inform??ticas de la Investigaci??n en Humanidades. Secretaria de Oficina de Graduados FFyH. Centro de Investigaciones de la Facultad de Filosof??a y Humanidades de la Universidad Nacional de C??rdoba Octubre 2019.</p>
    <p><strong>Fuente:</strong> Links y recursos del taller ???Ladran, pero no muerden???<a href="https://errejulian.github.io/ladran/" target="_blank" rel="noopener">Recursos del taller</a></p>
    `)
    incluir_seccion_hijo("taguette", "??Que son las Herramientas Digitales?", "softwares_analisis_datos_cualitativos")
    actualizar_parrafo("taguette", `
    <p><span style="color: #ff00ff"><strong>Herramientas Digitales:</strong></span></p>
    <p>Las herramientas digitales son todos los recursos de software (algunos incluyen en su defici??n al hardware que contiene software) presentes en computadoras y dispositivos relacionados, que permite realizar o facilitar todo tipo de actividades.</p>
    <br>
    <p><strong>Fuente:</strong> Talleres de Herramientas Inform??ticas de la Investigaci??n en Humanidades. Secretaria de Oficina de Graduados FFyH. Centro de Investigaciones de la Facultad de Filosof??a y Humanidades de la Universidad Nacional de C??rdoba Octubre 2019.</p>
    <p><strong>Fuente:</strong> Links y recursos del taller ???Ladran, pero no muerden???<a href="https://errejulian.github.io/ladran/" target="_blank" rel="noopener">Recursos del taller</a></p>
    `)
    incluir_seccion_hijo("catma", "??Que son las Herramientas Digitales?", "softwares_analisis_datos_cualitativos")
    actualizar_parrafo("catma", `
    <p><span style="color: #ff00ff"><strong>Herramientas Digitales:</strong></span></p>
    <p>Las herramientas digitales son todos los recursos de software (algunos incluyen en su defici??n al hardware que contiene software) presentes en computadoras y dispositivos relacionados, que permite realizar o facilitar todo tipo de actividades.</p>
    <br>
    <p><strong>Fuente:</strong> Talleres de Herramientas Inform??ticas de la Investigaci??n en Humanidades. Secretaria de Oficina de Graduados FFyH. Centro de Investigaciones de la Facultad de Filosof??a y Humanidades de la Universidad Nacional de C??rdoba Octubre 2019.</p>
    <p><strong>Fuente:</strong> Links y recursos del taller ???Ladran, pero no muerden???<a href="https://errejulian.github.io/ladran/" target="_blank" rel="noopener">Recursos del taller</a></p>
    `)
    incluir_seccion_hijo("kh_koder", "??Que son las Herramientas Digitales?", "softwares_analisis_datos_cualitativos")
    actualizar_parrafo("kh_koder", `
    <p><span style="color: #ff00ff"><strong>Herramientas Digitales:</strong></span></p>
    <p>Las herramientas digitales son todos los recursos de software (algunos incluyen en su defici??n al hardware que contiene software) presentes en computadoras y dispositivos relacionados, que permite realizar o facilitar todo tipo de actividades.</p>
    <br>
    <p><strong>Fuente:</strong> Talleres de Herramientas Inform??ticas de la Investigaci??n en Humanidades. Secretaria de Oficina de Graduados FFyH. Centro de Investigaciones de la Facultad de Filosof??a y Humanidades de la Universidad Nacional de C??rdoba Octubre 2019.</p>
    <p><strong>Fuente:</strong> Links y recursos del taller ???Ladran, pero no muerden???<a href="https://errejulian.github.io/ladran/" target="_blank" rel="noopener">Recursos del taller</a></p>
    `)
    incluir_seccion_hijo("rqda", "??Que son las Herramientas Digitales?", "softwares_analisis_datos_cualitativos")
    actualizar_parrafo("rqda", `
    <p><span style="color: #ff00ff"><strong>Herramientas Digitales:</strong></span></p>
    <p>Las herramientas digitales son todos los recursos de software (algunos incluyen en su defici??n al hardware que contiene software) presentes en computadoras y dispositivos relacionados, que permite realizar o facilitar todo tipo de actividades.</p>
    <br>
    <p><strong>Fuente:</strong> Talleres de Herramientas Inform??ticas de la Investigaci??n en Humanidades. Secretaria de Oficina de Graduados FFyH. Centro de Investigaciones de la Facultad de Filosof??a y Humanidades de la Universidad Nacional de C??rdoba Octubre 2019.</p>
    <p><strong>Fuente:</strong> Links y recursos del taller ???Ladran, pero no muerden???<a href="https://errejulian.github.io/ladran/" target="_blank" rel="noopener">Recursos del taller</a></p>
    `)
    incluir_seccion_hijo("lista_software_acd", "??Que son las Herramientas Digitales?", "softwares_analisis_datos_cualitativos")
    actualizar_parrafo("lista_software_acd", `
    <p><span style="color: #ff00ff"><strong>Herramientas Digitales:</strong></span></p>
    <p>Las herramientas digitales son todos los recursos de software (algunos incluyen en su defici??n al hardware que contiene software) presentes en computadoras y dispositivos relacionados, que permite realizar o facilitar todo tipo de actividades.</p>
    <br>
    <p><strong>Fuente:</strong> Talleres de Herramientas Inform??ticas de la Investigaci??n en Humanidades. Secretaria de Oficina de Graduados FFyH. Centro de Investigaciones de la Facultad de Filosof??a y Humanidades de la Universidad Nacional de C??rdoba Octubre 2019.</p>
    <p><strong>Fuente:</strong> Links y recursos del taller ???Ladran, pero no muerden???<a href="https://errejulian.github.io/ladran/" target="_blank" rel="noopener">Recursos del taller</a></p>
    `)

    incluir_seccion_padre("recursos_informacion_publicar", "RECURSOS E INFORMACI??N PARA PUBLICAR");
    incluir_seccion_hijo("rdu_repositorio_digital_universidad", "??Que son las Herramientas Digitales?", "recursos_informacion_publicar")
    actualizar_parrafo("rdu_repositorio_digital_universidad", `
    <p><span style="color: #ff00ff"><strong>Herramientas Digitales:</strong></span></p>
    <p>Las herramientas digitales son todos los recursos de software (algunos incluyen en su defici??n al hardware que contiene software) presentes en computadoras y dispositivos relacionados, que permite realizar o facilitar todo tipo de actividades.</p>
    <br>
    <p><strong>Fuente:</strong> Talleres de Herramientas Inform??ticas de la Investigaci??n en Humanidades. Secretaria de Oficina de Graduados FFyH. Centro de Investigaciones de la Facultad de Filosof??a y Humanidades de la Universidad Nacional de C??rdoba Octubre 2019.</p>
    <p><strong>Fuente:</strong> Links y recursos del taller ???Ladran, pero no muerden???<a href="https://errejulian.github.io/ladran/" target="_blank" rel="noopener">Recursos del taller</a></p>
    `)
    incluir_seccion_hijo("miar", "??Que son las Herramientas Digitales?", "recursos_informacion_publicar")
    actualizar_parrafo("miar", `
    <p><span style="color: #ff00ff"><strong>Herramientas Digitales:</strong></span></p>
    <p>Las herramientas digitales son todos los recursos de software (algunos incluyen en su defici??n al hardware que contiene software) presentes en computadoras y dispositivos relacionados, que permite realizar o facilitar todo tipo de actividades.</p>
    <br>
    <p><strong>Fuente:</strong> Talleres de Herramientas Inform??ticas de la Investigaci??n en Humanidades. Secretaria de Oficina de Graduados FFyH. Centro de Investigaciones de la Facultad de Filosof??a y Humanidades de la Universidad Nacional de C??rdoba Octubre 2019.</p>
    <p><strong>Fuente:</strong> Links y recursos del taller ???Ladran, pero no muerden???<a href="https://errejulian.github.io/ladran/" target="_blank" rel="noopener">Recursos del taller</a></p>
    `)
    incluir_seccion_hijo("donde_lo_publico", "??Que son las Herramientas Digitales?", "recursos_informacion_publicar")
    actualizar_parrafo("donde_lo_publico", `
    <p><span style="color: #ff00ff"><strong>Herramientas Digitales:</strong></span></p>
    <p>Las herramientas digitales son todos los recursos de software (algunos incluyen en su defici??n al hardware que contiene software) presentes en computadoras y dispositivos relacionados, que permite realizar o facilitar todo tipo de actividades.</p>
    <br>
    <p><strong>Fuente:</strong> Talleres de Herramientas Inform??ticas de la Investigaci??n en Humanidades. Secretaria de Oficina de Graduados FFyH. Centro de Investigaciones de la Facultad de Filosof??a y Humanidades de la Universidad Nacional de C??rdoba Octubre 2019.</p>
    <p><strong>Fuente:</strong> Links y recursos del taller ???Ladran, pero no muerden???<a href="https://errejulian.github.io/ladran/" target="_blank" rel="noopener">Recursos del taller</a></p>
    `)
    incluir_seccion_hijo("lib_gen", "??Que son las Herramientas Digitales?", "recursos_informacion_publicar")
    actualizar_parrafo("lib_gen", `
    <p><span style="color: #ff00ff"><strong>Herramientas Digitales:</strong></span></p>
    <p>Las herramientas digitales son todos los recursos de software (algunos incluyen en su defici??n al hardware que contiene software) presentes en computadoras y dispositivos relacionados, que permite realizar o facilitar todo tipo de actividades.</p>
    <br>
    <p><strong>Fuente:</strong> Talleres de Herramientas Inform??ticas de la Investigaci??n en Humanidades. Secretaria de Oficina de Graduados FFyH. Centro de Investigaciones de la Facultad de Filosof??a y Humanidades de la Universidad Nacional de C??rdoba Octubre 2019.</p>
    <p><strong>Fuente:</strong> Links y recursos del taller ???Ladran, pero no muerden???<a href="https://errejulian.github.io/ladran/" target="_blank" rel="noopener">Recursos del taller</a></p>
    `)
    incluir_seccion_hijo("mirror_other_link", "??Que son las Herramientas Digitales?", "recursos_informacion_publicar")
    actualizar_parrafo("mirror_other_link", `
    <p><span style="color: #ff00ff"><strong>Herramientas Digitales:</strong></span></p>
    <p>Las herramientas digitales son todos los recursos de software (algunos incluyen en su defici??n al hardware que contiene software) presentes en computadoras y dispositivos relacionados, que permite realizar o facilitar todo tipo de actividades.</p>
    <br>
    <p><strong>Fuente:</strong> Talleres de Herramientas Inform??ticas de la Investigaci??n en Humanidades. Secretaria de Oficina de Graduados FFyH. Centro de Investigaciones de la Facultad de Filosof??a y Humanidades de la Universidad Nacional de C??rdoba Octubre 2019.</p>
    <p><strong>Fuente:</strong> Links y recursos del taller ???Ladran, pero no muerden???<a href="https://errejulian.github.io/ladran/" target="_blank" rel="noopener">Recursos del taller</a></p>
    `)
    incluir_seccion_hijo("sci_hub", "??Que son las Herramientas Digitales?", "recursos_informacion_publicar")
    actualizar_parrafo("sci_hub", `
    <p><span style="color: #ff00ff"><strong>Herramientas Digitales:</strong></span></p>
    <p>Las herramientas digitales son todos los recursos de software (algunos incluyen en su defici??n al hardware que contiene software) presentes en computadoras y dispositivos relacionados, que permite realizar o facilitar todo tipo de actividades.</p>
    <br>
    <p><strong>Fuente:</strong> Talleres de Herramientas Inform??ticas de la Investigaci??n en Humanidades. Secretaria de Oficina de Graduados FFyH. Centro de Investigaciones de la Facultad de Filosof??a y Humanidades de la Universidad Nacional de C??rdoba Octubre 2019.</p>
    <p><strong>Fuente:</strong> Links y recursos del taller ???Ladran, pero no muerden???<a href="https://errejulian.github.io/ladran/" target="_blank" rel="noopener">Recursos del taller</a></p>
    `)

    incluir_seccion_padre("otros_recursos_utiles", "OTROS RECURSOS ??TILES");
    incluir_seccion_hijo("anki", "Anki", "otros_recursos_utiles")
    actualizar_parrafo("anki", `
    <p><span style="color: #ff00ff"><strong>Herramientas Digitales:</strong></span></p>
    <p>Las herramientas digitales son todos los recursos de software (algunos incluyen en su defici??n al hardware que contiene software) presentes en computadoras y dispositivos relacionados, que permite realizar o facilitar todo tipo de actividades.</p>
    <br>
    <p><strong>Fuente:</strong> Clase 1. Curso de Tecnologias Interactivas. Academia Buenos Aires Emprende, Septiembre 2022.</p>
    `)

    incluir_funcion_botones();
}
