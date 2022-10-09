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
    document.getElementById("midmeister_bt").onclick = function () {
        show_text_hijo("midmeister");
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

    incluir_seccion_hijo("definicion", "¿Que son las Herramientas Ditiales?","herramientas_digitales")
    actualizar_parrafo("definicion", `
   <p><span style="color: #ff00ff"><strong>Herramientas Digitales:</strong></span></p>
    <p>Las herramientas digitales son todos los recursos de software (algunos incluyen en su defición al hardware que contiene software) presentes en computadoras y dispositivos relacionados, que permite realizar o facilitar todo tipo de actividades.</p>
   <p><strong>Fuente:</strong> Clase 1. Curso de Tecnologias Interactivas. Academia Buenos Aires Emprende, Septiembre 2022.</p>
   `)
   incluir_seccion_hijo("diferencias_web_app", "¿Cuales son las diferecias entre las 'WEB APP' y 'APP'?","herramientas_digitales")
   actualizar_parrafo("diferencias_web_app", `
  <p><span style="color: #ff00ff"><strong>Herramientas Digitales:</strong></span></p>
   
  <table class="table" style="margin: 0 auto; border-collapse: collapse;">
        <thead>
          <tr>
          <th scope="col">#</th>
            <th scope="col">WEB APP</th>
            <th scope="col">APP</th>
           
            
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>El fronted se descarga de nuestro servidor. El fronted en una pagina web: es la estructura (HTML), el diseño (CSS),
            el uso de JavaScript del lado del usuario y algunos frameworks o librerías para crear todo tipo de interfaces de usuario.
            JavaScript que es un lenguaje de programación o de secuencias de comandos que te permite implementar funciones complejas 
            en una páginas web.</td>
        <td>Se descarga de los stores, el fronted está en el dispositivo del usuario (sólo necesitamos tener backend). 
        El backend se encuentra detras del fronted, el flujo de trabajo de un backend 
        consiste en darle funciones a un sitio; mientras que el frontend 
        hace un sitio estático, el backend después le da funciones y adapta 
        el sistema programado a ese sitio web.Otras funciones que se gestionan son:
        <ul>
         <li> Creación de funciones que simplifiquen el proceso de desarrollo.</li>       
            <li>  Acciones de lógica.</li> 
            <li>  Conexión con bases de datos.</li>
            <li> Uso de librerías del servidor web (un ejemplo puede ser para implementar temas de caché).
            </li>   
         </ul>

        </td>
           
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Requiere tener dominio y hosting (10usd + 30 usd respectivamente por año aproximadamente</td>
            <td>Requiere publicar en los stors (lleva tiempo) (25usd - 100usd única vez).</td>
             </tr>
          <tr>
            <th scope="row">3</th>
            <td colspan="2">No perimite recibir notificaciones (relativo).</td>
            <td>Puede recibir notificaciones</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>El contenido está indexado en Google.</td>
            <td>Sòlo la publicación en los stores se indexa en Google.</td>
            
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>En principio funciona en cualquier dispositvo.</td>
            <td>Puede tener problemas de compatibilidad con diferentes sistemas operativos.</td>
            
          </tr>
          <tr>
            <th scope="row">6</th>
            <td colspan="2"></td>
            <td>Más dificil de desarrollar y recolectar estadisticas.</td>
            
           
           
          </tr>
         
        </tbody>
      </table>
  
  <p><strong>Fuente:</strong> Clase 1. Curso de Tecnologias Interactivas. Academia Buenos Aires Emprende, Septiembre 2022.</p>
  `)
   
    incluir_seccion_padre("apps_trabajo_colaborativo", "APPS PARA PARA TRABAJO COLABORATIVO");

    incluir_seccion_hijo("asana","Asana","apps_trabajo_colaborativo")
    actualizar_parrafo("asana",`
    <p><span style="color: #ff00ff"><i>Extracto del sitio de la Biblioteca FFyH</i><span></p>
    <p>Desde la Biblioteca Elma Kohlmeyer de Estrabou se diseñaron tutoriales que orientan en la realización de búsquedas en el catálogo, desde las simples hasta las estrategias más avanzadas de búsquedas para acceder al texto completo por medio de enlaces en los registros.</p> 
    <p>En estos tutoriales se describe paso a paso el uso del catálogo de la Biblioteca donde se muestran varias maneras de llegar a la información que se necesita, delimitando los resultados con expresiones propias del sistema, refinando las búsquedas mediante diversas opciones que se presentan para tal fin o usando conectores en búsquedas avanzadas.</p>
    <p>Asimismo se describe cómo están conformados los registros, detallando la información que proporcionan y como utilizarla; indicando si el material se encuentra en la biblioteca electrónica del Mincyt o si posee versión digital de acceso abierto en la web. A fin de brindar esta información el equipo de la Biblioteca lleva enlazados en su catálogo más de dos mil registros a sitios seguros desde donde se acceden a los textos completos.</p>
    <p><strong>Fuente:</strong> Pagina de la biblioteca, <a href="https://ffyh.unc.edu.ar/biblioteca/tutoriales-de-la-biblioteca/"target="_blank" rel="noopener">seccion de los tutoriales.</a></p>
   `);
   incluir_seccion_hijo("trello","Trello","apps_trabajo_colaborativo")
    actualizar_parrafo("trello",`
    <p><span style="color: #ff00ff"><i>Extracto del sitio de la Biblioteca FFyH</i><span></p>
    <p>Desde la Biblioteca Elma Kohlmeyer de Estrabou se diseñaron tutoriales que orientan en la realización de búsquedas en el catálogo, desde las simples hasta las estrategias más avanzadas de búsquedas para acceder al texto completo por medio de enlaces en los registros.</p> 
    <p>En estos tutoriales se describe paso a paso el uso del catálogo de la Biblioteca donde se muestran varias maneras de llegar a la información que se necesita, delimitando los resultados con expresiones propias del sistema, refinando las búsquedas mediante diversas opciones que se presentan para tal fin o usando conectores en búsquedas avanzadas.</p>
    <p>Asimismo se describe cómo están conformados los registros, detallando la información que proporcionan y como utilizarla; indicando si el material se encuentra en la biblioteca electrónica del Mincyt o si posee versión digital de acceso abierto en la web. A fin de brindar esta información el equipo de la Biblioteca lleva enlazados en su catálogo más de dos mil registros a sitios seguros desde donde se acceden a los textos completos.</p>
    <p><strong>Fuente:</strong> Pagina de la biblioteca, <a href="https://ffyh.unc.edu.ar/biblioteca/tutoriales-de-la-biblioteca/"target="_blank" rel="noopener">seccion de los tutoriales.</a></p>
   `);
   incluir_seccion_hijo("midmeister","Midmeister","apps_trabajo_colaborativo")
    actualizar_parrafo("midmeister",`
    <p><span style="color: #ff00ff"><i>Extracto del sitio de la Biblioteca FFyH</i><span></p>
    <p>Desde la Biblioteca Elma Kohlmeyer de Estrabou se diseñaron tutoriales que orientan en la realización de búsquedas en el catálogo, desde las simples hasta las estrategias más avanzadas de búsquedas para acceder al texto completo por medio de enlaces en los registros.</p> 
    <p>En estos tutoriales se describe paso a paso el uso del catálogo de la Biblioteca donde se muestran varias maneras de llegar a la información que se necesita, delimitando los resultados con expresiones propias del sistema, refinando las búsquedas mediante diversas opciones que se presentan para tal fin o usando conectores en búsquedas avanzadas.</p>
    <p>Asimismo se describe cómo están conformados los registros, detallando la información que proporcionan y como utilizarla; indicando si el material se encuentra en la biblioteca electrónica del Mincyt o si posee versión digital de acceso abierto en la web. A fin de brindar esta información el equipo de la Biblioteca lleva enlazados en su catálogo más de dos mil registros a sitios seguros desde donde se acceden a los textos completos.</p>
    <p><strong>Fuente:</strong> Pagina de la biblioteca, <a href="https://ffyh.unc.edu.ar/biblioteca/tutoriales-de-la-biblioteca/"target="_blank" rel="noopener">seccion de los tutoriales.</a></p>
   `);

   incluir_seccion_hijo("mattermost","Mattermost","apps_trabajo_colaborativo")
    actualizar_parrafo("mattermost",`
    <p><span style="color: #ff00ff"><i>Extracto del sitio de la Biblioteca FFyH</i><span></p>
    <p>Desde la Biblioteca Elma Kohlmeyer de Estrabou se diseñaron tutoriales que orientan en la realización de búsquedas en el catálogo, desde las simples hasta las estrategias más avanzadas de búsquedas para acceder al texto completo por medio de enlaces en los registros.</p> 
    <p>En estos tutoriales se describe paso a paso el uso del catálogo de la Biblioteca donde se muestran varias maneras de llegar a la información que se necesita, delimitando los resultados con expresiones propias del sistema, refinando las búsquedas mediante diversas opciones que se presentan para tal fin o usando conectores en búsquedas avanzadas.</p>
    <p>Asimismo se describe cómo están conformados los registros, detallando la información que proporcionan y como utilizarla; indicando si el material se encuentra en la biblioteca electrónica del Mincyt o si posee versión digital de acceso abierto en la web. A fin de brindar esta información el equipo de la Biblioteca lleva enlazados en su catálogo más de dos mil registros a sitios seguros desde donde se acceden a los textos completos.</p>
    <p><strong>Fuente:</strong> Pagina de la biblioteca, <a href="https://ffyh.unc.edu.ar/biblioteca/tutoriales-de-la-biblioteca/"target="_blank" rel="noopener">seccion de los tutoriales.</a></p>
   `);
    incluir_seccion_padre("apps_diseño","APPS DISEÑO")

    incluir_seccion_hijo("canva","Canva","apps_diseño")
    actualizar_parrafo("canva",`
    <p><span style="color: #ff00ff"><i>Extracto del sitio de la Biblioteca FFyH</i><span></p>
    <p>Antes de comenzar este tiene como fin solo informar, si usted quiere saber, recurra a fuentes de información confiables y oficial de la universidad.</p>
    <p>Usted Se preguntará, <strong>¿Por qué tengo que presentar mi trabajo final/tesis/informe de PSS para que forme parte del repositorio digital de la Universidad?</strong></p>
   <p>Para ir al Sitio: <a href="https://ffyh.unc.edu.ar/biblioteca/presentacion-de-trabajos-al-rdu/"target="_blank" rel="noopener"><strong>https://ffyh.unc.edu.ar/biblioteca/presentacion-de-trabajos-al-rdu/</strong></a></p>`

    );
    incluir_seccion_hijo("google_slides","Google Slides","apps_diseño")
    actualizar_parrafo("google_slides",`
    <p><span style="color: #ff00ff"><i>Extracto del sitio de la Biblioteca FFyH</i><span></p>
    <p>Antes de comenzar este tiene como fin solo informar, si usted quiere saber, recurra a fuentes de información confiables y oficial de la universidad.</p>
    <p>Usted Se preguntará, <strong>¿Por qué tengo que presentar mi trabajo final/tesis/informe de PSS para que forme parte del repositorio digital de la Universidad?</strong></p>
   <p>Para ir al Sitio: <a href="https://ffyh.unc.edu.ar/biblioteca/presentacion-de-trabajos-al-rdu/"target="_blank" rel="noopener"><strong>https://ffyh.unc.edu.ar/biblioteca/presentacion-de-trabajos-al-rdu/</strong></a></p>`

    );
    incluir_seccion_hijo("befunky","BeFunky","apps_diseño")
    actualizar_parrafo("befunky",`
    <p><span style="color: #ff00ff"><i>Extracto del sitio de la Biblioteca FFyH</i><span></p>
    <p>Antes de comenzar este tiene como fin solo informar, si usted quiere saber, recurra a fuentes de información confiables y oficial de la universidad.</p>
    <p>Usted Se preguntará, <strong>¿Por qué tengo que presentar mi trabajo final/tesis/informe de PSS para que forme parte del repositorio digital de la Universidad?</strong></p>
   <p>Para ir al Sitio: <a href="https://ffyh.unc.edu.ar/biblioteca/presentacion-de-trabajos-al-rdu/"target="_blank" rel="noopener"><strong>https://ffyh.unc.edu.ar/biblioteca/presentacion-de-trabajos-al-rdu/</strong></a></p>`

    );
    incluir_seccion_hijo("animoto","Animoto","apps_diseño")
    actualizar_parrafo("animoto",`
    <p><span style="color: #ff00ff"><i>Extracto del sitio de la Biblioteca FFyH</i><span></p>
    <p>Antes de comenzar este tiene como fin solo informar, si usted quiere saber, recurra a fuentes de información confiables y oficial de la universidad.</p>
    <p>Usted Se preguntará, <strong>¿Por qué tengo que presentar mi trabajo final/tesis/informe de PSS para que forme parte del repositorio digital de la Universidad?</strong></p>
   <p>Para ir al Sitio: <a href="https://ffyh.unc.edu.ar/biblioteca/presentacion-de-trabajos-al-rdu/"target="_blank" rel="noopener"><strong>https://ffyh.unc.edu.ar/biblioteca/presentacion-de-trabajos-al-rdu/</strong></a></p>`

    );
    incluir_seccion_hijo("biteable","Biteable","apps_diseño")
    actualizar_parrafo("biteable",`
    <p><span style="color: #ff00ff"><i>Extracto del sitio de la Biblioteca FFyH</i><span></p>
    <p>Antes de comenzar este tiene como fin solo informar, si usted quiere saber, recurra a fuentes de información confiables y oficial de la universidad.</p>
    <p>Usted Se preguntará, <strong>¿Por qué tengo que presentar mi trabajo final/tesis/informe de PSS para que forme parte del repositorio digital de la Universidad?</strong></p>
   <p>Para ir al Sitio: <a href="https://ffyh.unc.edu.ar/biblioteca/presentacion-de-trabajos-al-rdu/"target="_blank" rel="noopener"><strong>https://ffyh.unc.edu.ar/biblioteca/presentacion-de-trabajos-al-rdu/</strong></a></p>`

    );

    incluir_seccion_padre("desarrollo_web","DESARROLO WEB")
    incluir_seccion_hijo("wix","Biblioteca Elcetrónica Mincyt","desarrollo_web")
    actualizar_parrafo("wix",`
   
    <p><span style="color: #ff00ff"><strong>¿Que es Biblioteca Elcetrónica Mincyt?</strong></span></p>
    <br>
    <p>Es una biblioteca online, con recursos y base de datos de muchas instituciones.</p>
    <p>Correo Electronico:<a href="mailto:biblioteca@mincyt.gob.ar">biblioteca@mincyt.gob.ar.</a></p>

    <br>
    <p>Visite pagina de la Biblioteca Elcetrónica Mincyt: <a href="https://biblioteca.mincyt.gob.ar/" target="_blank" rel="noopener noreferrer">https://biblioteca.mincyt.gob.ar/</a></p>
    <p>Visite el articulo de noticia, de la pagina Argentina. Investigadores podrán acceder a la Biblioteca Electrónica de Ciencia y Tecnología desde sus hogares:</p>
    <p> <a href="https://www.argentina.gob.ar/noticias/investigadores-podran-acceder-la-biblioteca-electronica-de-ciencia-y-tecnologia-desde-sus#:~:text=Se%20trata%20de%20una%20herramienta,Tecnolog%C3%ADa%20e%20Innovaci%C3%B3n%2C%20N%C2%BA%2025.467." target="_blank" rel="noopener noreferrer">Articulo:  Investigadores podrán acceder a la Biblioteca Electrónica de Ciencia y Tecnología desde sus hogares.</a></p>
    `)
    incluir_seccion_hijo("wordpress","Wordpress","desarrollo_web")
    actualizar_parrafo("wordpress",`
   
    <p><span style="color: #ff00ff"><strong>¿Que es Biblioteca Elcetrónica Mincyt?</strong></span></p>
    <br>
    <p>Es una biblioteca online, con recursos y base de datos de muchas instituciones.</p>
    <p>Correo Electronico:<a href="mailto:biblioteca@mincyt.gob.ar">biblioteca@mincyt.gob.ar.</a></p>

    <br>
    <p>Visite pagina de la Biblioteca Elcetrónica Mincyt: <a href="https://biblioteca.mincyt.gob.ar/" target="_blank" rel="noopener noreferrer">https://biblioteca.mincyt.gob.ar/</a></p>
    <p>Visite el articulo de noticia, de la pagina Argentina. Investigadores podrán acceder a la Biblioteca Electrónica de Ciencia y Tecnología desde sus hogares:</p>
    <p> <a href="https://www.argentina.gob.ar/noticias/investigadores-podran-acceder-la-biblioteca-electronica-de-ciencia-y-tecnologia-desde-sus#:~:text=Se%20trata%20de%20una%20herramienta,Tecnolog%C3%ADa%20e%20Innovaci%C3%B3n%2C%20N%C2%BA%2025.467." target="_blank" rel="noopener noreferrer">Articulo:  Investigadores podrán acceder a la Biblioteca Electrónica de Ciencia y Tecnología desde sus hogares.</a></p>
    `)
    
    incluir_funcion_botones();
}