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

    document.getElementById("informacion_general_bt").onclick = function () {
        show_text_padre("informacion_general");
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
    
    document.getElementById("instructivos_guias_varios_bt").onclick = function () {
        show_text_padre("instructivos_guias_varios");
    }
    document.getElementById("presentacion_tesis_repositorio_digital_bt").onclick = function () {
        show_text_hijo("presentacion_tesis_repositorio_digital");
    }
   

    document.getElementById("recursos_digitales_online_bt").onclick = function () {
        show_text_padre("recursos_digitales_online");
    }
    document.getElementById("biblioteca_electronica_mincyt_bt").onclick = function () {
        show_text_hijo("biblioteca_electronica_mincyt");
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

    incluir_seccion_padre("informacion_general", "INFORMACION GENERAL DE LA BIBLIOTECA FFYH");

    incluir_seccion_hijo("catalogo_enlace", "Catalogo de Libros y Revistas","informacion_general")
    actualizar_parrafo("catalogo_enlace", `
   <p><span style="color: #ff00ff"><strong>Enlace del Catalogo de Libros, Banco de Tesis, Revistas.</strong></span></p>
   <img src="./pages/biblioteca/imagenes/catalogo-imagen-biblioteca-ffyh.png" alt="Tips sacar foto al documento" style="box-sizing: border-box; margin-top: 5px; margin-bottom: 5px; width: 100%; height: 100%;">
  <p><strong>Fuente:</strong> Pagina del Catalogo de la Biblioteca Libros y Revistas.</p>
   <p>Para dirigirse al Sitio: <a href="https://ffyh.biblio.unc.edu.ar/"target="_blank" rel="noopener"><strong>Haga click aqui.</strong></a></p>
   `)
   
    incluir_seccion_padre("tutoriales", "TUTORIALES");

    incluir_seccion_hijo("introduccion_tutoriales","Introduccion: Tutoriales de la Biblioteca","tutoriales")
    actualizar_parrafo("introduccion_tutoriales",`
    <p><span style="color: #ff00ff"><i>Extracto del sitio de la Biblioteca FFyH</i><span></p>
    <p>Desde la Biblioteca Elma Kohlmeyer de Estrabou se diseñaron tutoriales que orientan en la realización de búsquedas en el catálogo, desde las simples hasta las estrategias más avanzadas de búsquedas para acceder al texto completo por medio de enlaces en los registros.</p> 
    <p>En estos tutoriales se describe paso a paso el uso del catálogo de la Biblioteca donde se muestran varias maneras de llegar a la información que se necesita, delimitando los resultados con expresiones propias del sistema, refinando las búsquedas mediante diversas opciones que se presentan para tal fin o usando conectores en búsquedas avanzadas.</p>
    <p>Asimismo se describe cómo están conformados los registros, detallando la información que proporcionan y como utilizarla; indicando si el material se encuentra en la biblioteca electrónica del Mincyt o si posee versión digital de acceso abierto en la web. A fin de brindar esta información el equipo de la Biblioteca lleva enlazados en su catálogo más de dos mil registros a sitios seguros desde donde se acceden a los textos completos.</p>
    <p><strong>Fuente:</strong> Pagina de la biblioteca, <a href="https://ffyh.unc.edu.ar/biblioteca/tutoriales-de-la-biblioteca/"target="_blank" rel="noopener">seccion de los tutoriales.</a></p>
   `);

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
    <p>Repositorio Digital de la UNC: <a href="https://rdu.unc.edu.ar/" target="_blank" rel="noopener noreferrer">https://rdu.unc.edu.ar/</a></p>
    <p>Programa Arqueologia Digital. Museo de Antropologia IDACOR-CONICET. Repositorio Digital Suquia: <a href="https://suquia.ffyh.unc.edu.ar/" target="_blank" rel="noopener noreferrer">https://suquia.ffyh.unc.edu.ar/</a></p>
    <p>Hay legislaciones a nivel internacional que ampara la existencia de repositorios abiertos al público.</p>
    <p>Entre las instituciones públicas que tienen repositorios de dominios  públicos,  las universidades nacionales, museos bajo nacional, archivos documentales provinciales y nacionales, bibliotecas, repositorios del Archivo Nacional de Argentina, bibliotecas y otras organizaciones, sitios web como Github.</p>

     <br>   
    <br><p><span style="color: #ff00ff"><strong>INSTRUCTIVO PARA SECRETARIA</strong><span></p>
    
    <p>Concluído el proceso de aprobación de la tesis de grado, la Secretaría pertinente remitirá, a la Biblioteca Central, mediante correo electrónico: <a href="mailto:rdu@ffyh.unc.edu.ar">rdu@ffyh.unc.edu.ar</a>, el siguiente material:</p>
    <ul>
    <li> Archivo correspondiente a la tesis.</li>
    <li> Archivo del formulario de carga (completado por el tesista).</li>
    </ul>
    <p>Como último paso, solicitará al nodo (Biblioteca Central) que dé acuse de recibo, a los efectos de validar la recepción.</p>
    <p>Ante cualquier duda, la Secretaría Académica, según corresponda, resolverá.</p>
    <p><span style="color: #ff00ff"><strong>INSTRUCTIVO PARA EL TESISTA</strong><span></p>
    <br> 
    <p><span style="color: #ff00ff"><strong>PRESENTACION DE TESIS DE GRADO EN FORMATO DIGITAL</strong><span></p>
    
    <p>Para depositar la tesis en el Repositorio Digital Universitario RDU, el tesista deberá entregar a la Secretaría los siguientes archivos:</p>
    <ul>
    <li> PDF con el contenido de su tesis (con la licencia Creative Commons inserta en el documento)..</li>
    <li> TXT con el formulario de carga, completado por el autor, con los datos necesarios para subir la tesis al Repositorio.</li>
    </ul>
    <p>A continuación se enumeran aspectos técnicos, sugerencias de inclusión y un pequeño lineamiento para la selección de la licencia CreativeCommons</p>
    <br>
    <p><span style="color: #ff00ff"><strong>ASPECTOS TECNICOS:</strong><span></p>
    
    <p>La versión digital del documento debe presentarse en un solo archivo en formato PDF, y 
    en el caso de presentar anexos, éstos serán guardados por separado, agruparlos de acuerdo al 
    tipo de formato (Texto, Imagen, Audio, Video).</p>

    <p>El archivo en PDF deberá ser indexable, (no una imagen), preferentemente  un PDF etiquetado.</p>
    <p>En cuanto al nombre del archivo se solicita que se guarde con la siguiente 
    modalidad: apellido espacio guión espacio las cinco primeras palabras del 
    título, máx. 25 caracteres.</p>
    <br> 
    <p><span style="color: #ff00ff"><strong>ACCESIBILIDAD:</strong><span></p>
    <br> 
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
    <br> 
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
    <br>
    <p><strong><i>Hay algunos detalles, informacion, archivos de la resolucion aprobada por la universidad, documentaciones oficiales, que quedaron fuera. Les recomendio visitar la Pagina Presentacion de trabajos finales al Repostorio Digital Universal, para acceder a la informacion que no se encuentra presente en este texto.</i></strong></p>

    <br><p><strong>Fuente:</strong> Pagina de la Presentacion de trabajos finales al Repostorio Digital Universal.</p>
    <p>Para ir al Sitio: <a href="https://ffyh.unc.edu.ar/biblioteca/presentacion-de-trabajos-al-rdu/"target="_blank" rel="noopener"><strong>https://ffyh.unc.edu.ar/biblioteca/presentacion-de-trabajos-al-rdu/</strong></a></p>`

    );

    incluir_seccion_padre("recursos_digitales_online","RECURSOS DIGITALES Y ONLINE")
    incluir_seccion_hijo("biblioteca_electronica_mincyt","Biblioteca Elcetrónica Mincyt","recursos_digitales_online")
    actualizar_parrafo("biblioteca_electronica_mincyt",`
   
    <p><span style="color: #ff00ff"><strong>¿Que es Biblioteca Elcetrónica Mincyt?</strong></span></p>
    <br>
    <p>Es una biblioteca online, con recursos y base de datos de muchas instituciones.</p>
    <p>Su principal objetivo es brindar acceso, a través de Internet, 
   a artículos completos de publicaciones periódicas científicas y
    tecnológicas, bases de datos referenciales, resúmenes y demás 
    información bibliográfica nacional e internacional de interés
     para los integrantes del Sistema de Ciencia y Tecnología.</p>
     <p>Se trata de una herramienta que brinda bibliografía local e 
     internacional, resúmenes e información de interés a los integrantes 
     del Sistema Nacional de Ciencia y Tecnología, mediante Internet. 
     Fue creada en diciembre de 2002, en línea con lo establecido por 
     la Ley de Ciencia, Tecnología e Innovación, Nº 25.467.</p>
    <p>Correo Electronico:<a href="mailto:biblioteca@mincyt.gob.ar">biblioteca@mincyt.gob.ar.</a></p>

     <br>
     <p>Visite pagina de la Biblioteca Elcetrónica Mincyt: <a href="https://biblioteca.mincyt.gob.ar/" target="_blank" rel="noopener noreferrer">https://biblioteca.mincyt.gob.ar/</a></p>
     <p>Visite el articulo de noticia, de la pagina Argentina. Investigadores podrán acceder a la Biblioteca Electrónica de Ciencia y Tecnología desde sus hogares:</p>
     <p> <a href="https://www.argentina.gob.ar/noticias/investigadores-podran-acceder-la-biblioteca-electronica-de-ciencia-y-tecnologia-desde-sus#:~:text=Se%20trata%20de%20una%20herramienta,Tecnolog%C3%ADa%20e%20Innovaci%C3%B3n%2C%20N%C2%BA%2025.467." target="_blank" rel="noopener noreferrer">Articulo:  Investigadores podrán acceder a la Biblioteca Electrónica de Ciencia y Tecnología desde sus hogares.</a></p>
    `)
    
    incluir_funcion_botones();
}