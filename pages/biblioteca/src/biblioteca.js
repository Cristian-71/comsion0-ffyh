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
    document.getElementById("contacto-redes-sociales_bt").onclick = function () {
        show_text_hijo("contacto-redes-sociales");
    }
    document.getElementById("horarios-atención_bt").onclick = function () {
        show_text_hijo("horarios-atención");
    }
    document.getElementById("localizacion_biblioteca_bt").onclick = function () {
        show_text_hijo("localizacion_biblioteca");
    }
    document.getElementById("edificio_bilbioteca_salas_bt").onclick = function () {
        show_text_hijo("edificio_bilbioteca_salas");
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
    document.getElementById("devoluciones_bt").onclick = function () {
        show_text_hijo("devoluciones");
    }
    document.getElementById("solicitud_libre_deuda_bt").onclick = function () {
        show_text_hijo("solicitud_libre_deuda");
    }
    document.getElementById("formacion_usuario_visitas_bt").onclick = function () {
        show_text_hijo("formacion_usuario_visitas");
    }
    document.getElementById("inscripcion_egresados_biblioteca_bt").onclick = function () {
        show_text_hijo("inscripcion_egresados_biblioteca");
    }
    document.getElementById("servicios_biblioteca_bt").onclick = function () {
        show_text_hijo("servicios_biblioteca");
    }
    document.getElementById("recursos_digitales_online_bt").onclick = function () {
        show_text_padre("recursos_digitales_online");
    }
    document.getElementById("biblioteca_electronica_mincyt_bt").onclick = function () {
        show_text_hijo("biblioteca_electronica_mincyt");
    }
    document.getElementById("portal_informacion_icyta_bt").onclick = function () {
        show_text_hijo("portal_informacion_icyta");
    }
    document.getElementById("portal_dacytar_bt").onclick = function () {
        show_text_hijo("portal_dacytar");
    }
    document.getElementById("biblioteca_clacso_bt").onclick = function () {
        show_text_hijo("biblioteca_clacso");
    }
    document.getElementById("biblioteca_tematica_literatura_cordoba_bt").onclick = function () {
        show_text_hijo("biblioteca_tematica_literatura_cordoba");
    }
    document.getElementById("repositorios_institucionales_digitales_bt").onclick = function () {
        show_text_hijo("repositorios_institucionales_digitales");
    }
    document.getElementById("biblioteca_digitales_bt").onclick = function () {
        show_text_hijo("biblioteca_digitales");
    }
    document.getElementById("revistas_digitales_bt").onclick = function () {
        show_text_hijo("revistas_digitales");
    }
    document.getElementById("repositorio_institucional_digital_rdu_bt").onclick = function () {
        show_text_hijo("repositorio_institucional_digital_rdu");
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
    incluir_seccion_hijo("contacto-redes-sociales","Contacto y Redes Sociales","informacion_general")
    actualizar_parrafo("contacto-redes-sociales",`
    
    <p><span style="color: #ff00ff"><strong>BIBLIOTECA ELMA KOHLMEYER DE ESTRABOU</strong></span></p>

    <p>Facultad de Filosofía y Humanidades - Facultad de Psicología</p>
    <p><strong>Dirección:</strong></p>                                  
    <ul>
    <li>Pabellón Agustín Tosco- Módulo «C», Ciudad Universitaria. X5000HUA<li>
    <li>CÓRDOBA - ARGENTINA<li>
    </ul>
    <p><strong>Teléfono:</strong></p> 
    <ul>
    <li>Teléfono IP: 5353610</li>
    </ul>
    <p><i>Los internos que corresponden a Biblioteca son:</i></p> 
    <ul>
    <li>50029 - Procesos Técnicos</li>
    <li>50030 - Dirección</li>
    <li>50031 - Dpto. Hemeroteca</li>
    <li>50223 - Dpto. Americanistas</li>
    <li>50310 - Servicios al Público</li>
    <li>50400 - Dpto. Biblioteconomía / Secretaría de la Biblioteca</li>
    <li>50401 - Depto. Comunicación Institucional / Biblioteca Digital</li>
    </ul>
    <p><strong>Horario de atención:</strong>Lunes a viernes de 9:00 a 20:00 hs.</p>
    <p><strong>Correo electrónico:</strong><a href="mailto:biblio@ffyh.unc.edu.ar"> biblio@ffyh.unc.edu.ar</a></p>
    <p><strong>Facebook:</strong><a href="https://www.facebook.com/bibliotecaelmak.deestrabou/" target="_blank" rel="noopener noreferrer"> https://www.facebook.com/bibliotecaelmak.deestrabou/</a></p>
    <p><strong>Página Web:</strong><a href="http://www.ffyh.unc.edu.ar/biblioteca/" target="_blank" rel="noopener noreferrer"> http://www.ffyh.unc.edu.ar/biblioteca/</a></p>
    <p><strong>Fuente:</strong> seccion Contacto de la pagina de la biblioteca. <a href="https://ffyh.unc.edu.ar/biblioteca/sobre-la-biblioteca/contacto/"target="_blank" rel="noopener">https://ffyh.unc.edu.ar/biblioteca/sobre-la-biblioteca/contacto/</a></p>

    `)
    incluir_seccion_hijo("horarios-atención","Horarios de atención","informacion_general")
    actualizar_parrafo("horarios-atención",`
    <p><strong>Atención de la biblioteca:</strong></p>
    <ul>
    <li>Lunes a viernes de 09:00 a 20:00 hs.</li>
    <li>Salas de lectura: 9:00 a 19:50 hs.</li>
    </ul>
    <p><strong>Hemeroteca:</strong></p>
    <ul>
    <li>Lunes a viernes de 10:00 a 18:00 hs.</li>
    </ul>
    <p><strong>Estudios Americanistas y Antropología:</strong></p>
    <ul>
    <li>Lunes a viernes de 10:00 a 18:00 hs.</li>
    </ul>
    <p><strong>Banco de Tesis de Psicología:</strong></p> 
    <ul>
    <li>Horario a definir</li>
    </ul>
    <p><strong>Fuente:</strong> seccion Horarios de Atencion de la pagina de la biblioteca. <a href="https://ffyh.unc.edu.ar/biblioteca/redes-sociales/"target="_blank" rel="noopener">https://ffyh.unc.edu.ar/biblioteca/redes-sociales/</a></p>

    `)
    incluir_seccion_hijo("localizacion_biblioteca","Cómo llegar","informacion_general")
    actualizar_parrafo("localizacion_biblioteca",`
    <p><span style="color: #ff00ff">Ubicacion del sitio exacto de la Biblioteca FFyH<span></p>
    <br>
    <div class="embed-googlemaps" style="text-align:center; display: block;">
    <iframe src="https://www.google.com/maps/d/embed?mid=1K6iW1p6IfNusae8TbmbTH6u1PnI&hl=es&ehbc=2E312F" style=" box-sizing: border-box; margin-top: 5px; margin-bottom: 5px; width: 100%; height: 80vh;"></iframe>
    </div>
    <p><strong>Fuente:</strong> seccion de Cómo llegar, de la pagina de la biblioteca, <a href="https://ffyh.unc.edu.ar/biblioteca/como-llegar/"target="_blank" rel="noopener">https://ffyh.unc.edu.ar/biblioteca/como-llegar/</a></p>
    `)
    incluir_seccion_hijo("edificio_bilbioteca_salas","Edificio y Salas","informacion_general")
    actualizar_parrafo("edificio_bilbioteca_salas",`
    <p><span style="color: #ff00ff"><strong>EDIFICIO</strong><span></p>
    <p>La Biblioteca tiene una superficie total de 2.631 metros cuadrados 
    dividida en dos plantas. En la planta alta se encuentra la Dirección,
     los Departamentos de Biblioteconomía, Procesos técnicos, Hemeroteca 
     con su sala de Lectura, Comunicación Institucional y Biblioteca 
     Digital, Sala de reuniones y la Sección de Canje y Donación con 
     su depósito; en la planta baja funcionan los Departamentos de 
     Humanidades, de Estudios Americanistas y de Antropología con 
     su sala de lectura, además el Sector del Banco de tesis de 
     la carrera de Psicología y el Fondo Antiguo de la Biblioteca. 
     Asimismo, cuenta con dos salas de lecturas principales, las 
     cuales inicialmente fueron diseñadas con una capacidad para
      300 puestos de estudio. La primera de 100 m2 y la segunda 
      de 470 m2; en las salas de lectura se incorporaron 5500
       ejemplares de libros accesibles al público a través de 
       la modalidad de estantería abierta y el Banco de tesis de la
        Facultad de Psicología. Actualmente la biblioteca cuenta con 
        200 puestos de lectura incluidos los 35 puestos de lectura 
        informatizados con acceso a internet, terminales para la
         consulta de trabajos finales de la carrera de Psicología y 
         puestos de lectura de dos pequeñas salas silenciosas situadas 
         en las secciones de Hemeroteca y Americanistas-Antropología.</p>
         <p>Seguridad en el edificio: El módulo donde se encuentra la
          Biblioteca es de construcción antisísmica, entrada amplia de 
          cuatro puertas, puertas antipánico, matafuegos distribuidos en
           las dos plantas, central de alarma de incendios, activadores 
           de alarma de incendio manual, detectores de humo y  cámaras de
            seguridad.</p>
            <p>La Biblioteca  tiene una superficie ampliada de 
            931 metros cuadrados, en dos plantas, capacidad de 
            almacenamiento para 150.000 volúmenes, y nueva sala de 
            lectura de 470 mts cuadrados, con capacidad para 300 
            puestos de estudios, ascensor, puertas de emergencias, 
            sistema contra incendio,  vidrios polarizaros en dos secciones
             para la protección del material bibliográfico de los rayos UV.</p>

             <p>En Planta baja:</p>
            
             <p>Estantería abierta, cuya finalidad es el crecimiento y 
             autonomía del usuario que le permite acceder a buscar por 
             sí mismo el material bibliográfico de mayor consulta sin la
              intermediación del bibliotecario. Además se continúa con el
               servicio de préstamo tradicional para el resto de
                la bibliografía.</p>
        <br>
                <p><span style="color: #ff00ff"><strong>SALAS DE LECTURA Y ESTANTERÍA ABIERTA</strong><span></p>
                <p><strong>CONSULTA EN SALAS DE LECTURA:</strong> socios y público en general pueden acceder a este
                 servicio con la presentación del DNI., Libreta de TP y/o Pasaporte 
                 en el caso de usuarios extranjeros. Incluye la consulta del 
                 Fondo Antiguo que posee material bibliográfico invaluable de 
                 más de 2.400 obras impresas producidas entre los siglos XVI y XX.</p>
            
                 <p><strong>ESTANTERÍA ABIERTA:</strong> es una nueva 
                 modalidad de consulta, cuya finalidad es el crecimiento
                  y autonomía del usuario ya que le permite acceder al 
                  material por sí mismo sin la intermediación del bibliotecario.
                   Comprende más de 5.000 volúmenes protegidos con sistema de 
                   seguridad anti-hurto.</p>
                   <br>
    <p><strong>Fuente:</strong> seccion de Edificio, de la pagina de la biblioteca. <a href="https://ffyh.unc.edu.ar/biblioteca/edificio/"target="_blank" rel="noopener">https://ffyh.unc.edu.ar/biblioteca/edificio/</a></p>
    <p><strong>Fuente:</strong> seccion de Salas de lectura y Estantería Abierta, de la pagina de la biblioteca. <a href="https://ffyh.unc.edu.ar/biblioteca/salas-de-lectura-y-estanteria-abierta/"target="_blank" rel="noopener">https://ffyh.unc.edu.ar/biblioteca/salas-de-lectura-y-estanteria-abierta/</a></p>

    `)

    incluir_seccion_hijo("servicios_biblioteca","Servicios","informacion_general")
    actualizar_parrafo("servicios_biblioteca",`
    <p><span style="color: #ff00ff"><strong>Servicios que brinda la Biblioteca FFyH</strong><span></p>
    <br>
    <ul>
    <li> <strong>Estanteria abierta. </strong> </li>
    <li> <strong>Netbooks para uso público en Sala.</strong> </li>
    <li> <strong>Préstamos interbibliotecarios:</strong> UNC-ABUC. </li>
    <li> <strong>Asesoramiento en el manejo de catálogos y manuales en línea.</strong> </li>
    <li> <strong>Acceso a la biblioteca electrónica del Mincyt.</strong> </li>
    <li> <strong>Inclusion educativa de personas en situación de discapacidad.</strong> </li>
    <li> <strong>Consultas en sala de lectura.</strong> </li>
    <li> <strong>Préstamos a domicilo.</strong> </li>
    <li> <strong>Visistas guiadas.</strong> </li>
    <li> <strong>WI-FI.</strong> </li>
    <li> <strong>Alerta de adquisiciones a través de la web y del correo electrónico.</strong> </li>
    <li> <strong>Catálogo de recursos en línea.</strong> </li>
    </ul>
    <br>
    <p><span style="color: #ff00ff"><strong>Netbooks y Conexión WiFi</strong><span></p>
    <p>Se dispone de Netbooks instaladas en Sala de Lectura para la utilización diaria de los usuarios, las cuales fueron donadas a la Biblioteca por Tecnología Educativa , en el marco de un proyecto que promueve mayor inclusión y una mejor calidad educativa para los estudiantes.</p>
    <p>La Biblioteca dispone de WIFI como un servicio accesible a todos sus usuarios.</p>
    <br>
    <p><strong>Fuente:</strong> pestaña Servicio, de la pagina del catalogo de la biblioteca. <a href="https://ffyh.biblio.unc.edu.ar/"target="_blank" rel="noopener">https://ffyh.biblio.unc.edu.ar/</a></p>
    <p><strong>Fuente:</strong> seccion Netbooks y Conexión WiFi, de la pagina de la biblioteca. <a href="https://ffyh.unc.edu.ar/biblioteca/netbooks-y-conexion-wifi/"target="_blank" rel="noopener">https://ffyh.unc.edu.ar/biblioteca/netbooks-y-conexion-wifi/</a></p>

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

    incluir_seccion_hijo("acceso_titulo_autor", "Acceso al texto completo por título y autor", "tutoriales")
    actualizar_parrafo("acceso_titulo_autor", `
    <p>Video de tutorial de la pagina oficial de la Biblioteca FFyH </p>
    <br>
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
    <br>
    <div class="embed-youtube" style="text-align:center; display: block;">
    <iframe loading="lazy" class="youtube-player"; src="https://www.youtube.com/embed/57bmlkfI4gE?version=3&#038;rel=1&#038;showsearch=0&#038;showinfo=1&#038;iv_load_policy=1&#038;fs=1&#038;hl=es-ES&#038;autohide=2&#038;wmode=transparent" 
    allowfullscreen="true" style="border:0; width: 100%; height: 80vh" sandbox="allow-scripts allow-same-origin allow-popups allow-presentation">
    </iframe>
    </div>
    `)

    incluir_seccion_hijo("acceso_busqueda_simple_autor_titulo_tema","Búsqueda Simple por Autor, Título o Tema","tutoriales");
    actualizar_parrafo("acceso_busqueda_simple_autor_titulo_tema",`
    <p>Video de tutorial de la pagina oficial de la Biblioteca FFyH </p>
    <br>
    <div class="embed-youtube" style="text-align:center; display: block;">
    <iframe loading="lazy" class="youtube-player"; src="https://www.youtube.com/embed/WsUiAgRqox8?version=3&#038;rel=1&#038;showsearch=0&#038;showinfo=1&#038;iv_load_policy=1&#038;fs=1&#038;hl=es-ES&#038;autohide=2&#038;wmode=transparent" 
    allowfullscreen="true" style="border:0; width: 100%; height: 80vh" sandbox="allow-scripts allow-same-origin allow-popups allow-presentation">
    </iframe>
    </div>
    `)
   
   incluir_seccion_hijo("acceso_busqueda_avanzada_tema","Acceso al texto completo con búsqueda avanzada por tema","tutoriales");
    actualizar_parrafo("acceso_busqueda_avanzada_tema",`
    <p>Video de tutorial de la pagina oficial de la Biblioteca FFyH </p>
    <br>
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
    <br>
    <div class="embed-youtube" style="text-align:center; display: block;">
    <iframe loading="lazy" class="youtube-player"; 
    src="https://www.youtube.com/embed/FvHKgXlWAqE" 
    style="border:0; width: 100%; height: 80vh";
    title="YouTube video player" frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; 
    encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen></iframe>
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
    <p><span style="color: #ff00ff"><strong>Documentos Historicos</strong></span</p>
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
    <p><a href="https://ffyh.unc.edu.ar/biblioteca/consulta-en-el-dpto-americanistas-y-o-el-banco-de-tesis-de-psicologia/"target="_blank" rel="noopener noreferrer"><strong>https://ffyh.unc.edu.ar/biblioteca/consulta-en-el-dpto-americanistas-y-o-el-banco-de-tesis-de-psicologia/</strong></a></p>
    <br>
    <p>Para ir Formulario de Google:</p>
    <p><a href="https://docs.google.com/forms/d/e/1FAIpQLScp7PgQYM4vA7Md2E04ZI-VIkWVpcK1AJuWwnhGq7TrnLadKA/viewform"target="_blank" rel="noopener noreferrer"><strong>https://docs.google.com/forms/d/e/1FAIpQLScp7PgQYM4vA7Md2E04ZI-VIkWVpcK1AJuWwnhGq7TrnLadKA/viewform</strong></a></p>
    `)
    incluir_seccion_hijo("devoluciones","Devoluciones","instructivos_guias_varios" )
    actualizar_parrafo("devoluciones",`
    <p>Las devoluciones pueden hacerlas un compañero ó un tercero .</p>
    <p>El retraso de las devoluciones tendrán una sanción: por cada día de retraso son tres días de suspensión. Tanto los días de retraso como los de suspensión serán contados de corrido.</p>
    <br>
    <p>Para mas informacion y confiable.<strong> Lea el Reglamento de la biblioteca: <a href="https://ffyh.unc.edu.ar/biblioteca/reglamento-de-la-biblioteca/ target="_blank" rel="noopener noreferrer"">https://ffyh.unc.edu.ar/biblioteca/reglamento-de-la-biblioteca/</a></strong></p>
    <p>Seccion Devolucion, pagina de la Biblioteca: <a href="https://ffyh.unc.edu.ar/biblioteca/devoluciones/" target="_blank" rel="noopener noreferrer">https://ffyh.unc.edu.ar/biblioteca/devoluciones/</a></p>
    `)
    incluir_seccion_hijo("solicitud_libre_deuda","Formulario de Solicitud de Libre Deuda", "instructivos_guias_varios")
    actualizar_parrafo("solicitud_libre_deuda",`
    <p><span style="color: #ff00ff"><strong>¿Que es la constancia de libre deuda de la Biblioteca?</strong></span></p>
    <p>La constancia de libre deuda de Biblioteca es un requisito obligatorio para la realización de todos los trámites relacionados con el egreso del alumnado o la baja de una carrera, y las renuncias o licencias del personal docente, no docente y de gestión de la institucion.</p> 
    <p>Su objetivo es garantizar el reintegro de los libros y materiales que los estudiantes/integrantes de la Facultad puedan tener en su poder (cuando realizaron prestamos domiciliarios y no realizaron la devolucion) antes de su desvinculación temporal o definitiva de la Institución. </p>
    <br>
    <p><span style="color: #ff00ff"><strong>CONSTANCIA DE LIBRE DEUDA DE BIBLIOTECA </strong></span></p>
   
    <p>Para solicitar la constancia de libre deuda tenés que haber aprobado tu último final y no tener libros de la biblioteca en préstamo. El trámite NO es personal y se puede hacer de forma presencial en la biblioteca (presentando DNI o Pasaporte si sos extranjere), o bien completando el siguiente formulario.</p>
    <br>
    <p><span style="color: #ff00ff"><strong>Formulario de Solicitud de Libre Deuda</strong></span></p>
      
    <p>Ingrese a la seccion Formulario de Solicitud de Libre Deuda, de la pagina de la Biblioteca para solicitar la constancia de libre deuda:</p>
    <p><a href="https://ffyh.unc.edu.ar/biblioteca/libre-deuda/" target="_blank" rel="noopener noreferrer">https://ffyh.unc.edu.ar/biblioteca/libre-deuda/</a></p>
   `)   
   incluir_seccion_hijo("formacion_usuario_visitas","Formación de usuarios y visitas guiadas", "instructivos_guias_varios")
   actualizar_parrafo("formacion_usuario_visitas",`
    <p><span style="color: #ff00ff"><strong>FORMACIÓN DE USUARIOS</strong></span></p>
    <p>Implementa cursos de formación de usuarios a alumnos, docentes, investigadores y público en general,  en dos niveles: </p>
    <ul>
    <li>Básico: de introducción al uso del Catálogo de la biblioteca y los recursos electrónicos disponibles.</li>
    <li>Especializado: incluye lo anterior y el uso de las herramientas para recuperar la información de las bases de datos de revistas electrónicas.</li>
    </ul>
    <p>Para solicitar estos cursos enviar correo a: <a href="mailto:circulacion@ffyh.unc.edu.ar">circulacion@ffyh.unc.edu.ar</a></p>
    <br>
    <p><span style="color: #ff00ff"><strong>VISITAS GUIADAS</strong></span></p>
    <p>Las Instituciones que deseen realizar una visita a nuestra Biblioteca, por favor enviar correo a: <a href="mailto:circulacion@ffyh.unc.edu.ar">circulacion@ffyh.unc.edu.ar</a></p>
    <br>
    <p>Visite la seccion Formación de usuarios y visitas guiadas, de la pagina de la Biblioteca:</p>
    <p><a href="https://ffyh.unc.edu.ar/biblioteca/formacion-de-usuarios-y-visitas-guiadas/" target="_blank" rel="noopener noreferrer">https://ffyh.unc.edu.ar/biblioteca/formacion-de-usuarios-y-visitas-guiadas/</a></p>
    <br>
    
    <div class="embed-youtube" style="text-align:center; display: block;"> 
    <iframe loading="lazy" class="youtube-player";
    src="https://www.youtube.com/embed/WVQuCJRC-9Y"
    title="YouTube video player" 
    style="border:0; width: 100%; height: 80vh"
    frameborder="0" 
    allow="accelerometer; 
    autoplay; clipboard-write; 
    encrypted-media; gyroscope;
    picture-in-picture"
    allowfullscreen></iframe>
    </div>
   `)
   incluir_seccion_hijo("inscripcion_egresados_biblioteca","Inscripción de Egresados","instructivos_guias_varios" )
   actualizar_parrafo("inscripcion_egresados_biblioteca",`
   <p>Solo pueden inscribirse los egresados de las Facultades de Filosofía y Humanidades de Psicología.</p>
   <br>
   <p><span style="color: #ff00ff"><strong>EGRESADOS FACULTAD DE FILOSOFÍA Y HUMANIDADES</strong></span></p>
   <p>En la pestaña de <a href="https://blogs.ffyh.unc.edu.ar/graduados/nuevo-regimen-para-asociacion-a-la-biblioteca-de-la-ffyh/" target="_blank" rel="noopener noreferrer">Asociación a la biblioteca</a>, de la pagina de la Oficina de Graduados, se encuentra el instructivo y podes descargar el formulario. 
   Podes hacer cualquier consulta escribiendo un correo a:</p>
   <p><a href="mailto:graduados@ffyh.unc.edu.ar">graduados@ffyh.unc.edu.ar</a></p>
   <br>
   <img src="./pages/biblioteca/imagenes/inscripcion-egresado-imagen.png" alt="Tips sacar foto al documento" style="box-sizing: border-box; margin-top: 5px; margin-bottom: 5px; width: 100%; height: 100%;">
   <p>Fuente de la imagen:
   <a href="https://blogs.ffyh.unc.edu.ar/graduados/nuevo-regimen-para-asociacion-a-la-biblioteca-de-la-ffyh/mesa-de-trabajo-7-2/" target="_blank" rel="noopener noreferrer">https://blogs.ffyh.unc.edu.ar/graduados/nuevo-regimen-para-asociacion-a-la-biblioteca-de-la-ffyh/mesa-de-trabajo-7-2/</a></p>
   <br>
   <p>Visite la seccion Asociate a la Biblioteca de la FFyH, de la pagina de la Oficina de Graduados:</p>
    <p><a href="https://blogs.ffyh.unc.edu.ar/graduados/nuevo-regimen-para-asociacion-a-la-biblioteca-de-la-ffyh/" target="_blank" rel="noopener noreferrer"> https://blogs.ffyh.unc.edu.ar/graduados/nuevo-regimen-para-asociacion-a-la-biblioteca-de-la-ffyh/</a></p>
    <br>
    <p><a href="./pages/home/documentos/Formulario-Socixs-Graduadxs-Biblioteca.pdf" download="Formulario Socixs Graduadxs Biblioteca.pdf">Formulario Socixs Graduadxs Biblioteca</a></p>
   <br>
   <p><span style="color: #ff00ff"><strong>EGRESADOS FACULTAD DE PSICOLOGÍA</strong></span></p>
      <p>Inscripcion de los egresados de la Facultad de Filosofia:.<strong> Requisitos de inscripción para egresados Facultad de Psicología: <a href="https://ffyh.unc.edu.ar/biblioteca/requisitos-de-inscripcion-para-egresados-facultad-de-psicologia/" target="_blank" rel="noopener noreferrer">https://ffyh.unc.edu.ar/biblioteca/requisitos-de-inscripcion-para-egresados-facultad-de-psicologia/</a></strong></p>
    <br>
    <p>Para mas informacion y confiable.<strong> Lea el Reglamento de la biblioteca: <a href="https://ffyh.unc.edu.ar/biblioteca/reglamento-de-la-biblioteca/" target="_blank" rel="noopener noreferrer">https://ffyh.unc.edu.ar/biblioteca/reglamento-de-la-biblioteca/</a></strong></p>
    <p>Visite seccion Inscripción de Egresados, pagina de la Biblioteca: <a href="https://ffyh.unc.edu.ar/biblioteca/carnet-de-egresados/" target="_blank" rel="noopener noreferrer">https://ffyh.unc.edu.ar/biblioteca/carnet-de-egresados/</a></p>
   `)
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
    incluir_seccion_hijo("portal_informacion_icyta","Portal de Información de Ciencia y Tecnología Argentino","recursos_digitales_online")
    actualizar_parrafo("portal_informacion_icyta",`
    <p><span style="color: #ff00ff"><strong>Información para la transparencia y la innovación</strong></span></p>
    <p>El Portal de información de ciencia y tecnología argentino es la puerta de acceso oficial a información de interés público en ciencia, tecnología e innovación en la República Argentina. Es una iniciativa que promueve la transparencia, el acceso a la información pública y la rendición de cuentas, ligada a las políticas de gobierno abierto y que forma parte del Plan de Apertura de Datos establecido por el Poder Ejecutivo Nacional. Está dirigido a usuarios diversos: ciudadanos curiosos, científicos, emprendedores, funcionarios de gobierno, periodistas e informáticos.</p>
    <br>
    <p><span style="color: #ff00ff"><strong>¿Quiénes somos?</strong></span></p>
    <p>Este Portal es coordinado y administrado por la Subsecretaría de Evaluación Institucional, que depende de la Secretaría de Articulación Científico Tecnológica del Ministerio de Ciencia, Tecnología e Innovación de la Nación. Los datos que encontrarás aquí involucran a las diversas áreas de la cartera y a todos los organismos bajo su órbita que poseen información en ciencia, tecnología e innovación.</p>
    <br>
    <p><span style="color: #ff00ff"><strong>Todo lo que hay para conocer sobre…</strong></span></p>
     <p>Desde este Portal podés tener un acceso fácil y claro a diferentes secciones de información pública: qué se hace en ciencia, tecnología e innovación en Argentina, quiénes lo hacen, con qué equipamientos trabajan, en qué instituciones lo hacen, qué datos científicos están disponibles, qué resultados hay de estas actividades, y datos estadísticos sobre ellas.</p>
     <br>
     <p><span style="color: #ff00ff"><strong>¿Cómo podés involucrarte?</strong></span></p>
    <ul>
    <li><strong>Curioso:</strong> Tenés instinto natural para buscar información y conocer tu entorno.
    Si estás interesado en descubrir el mundo de la ciencia y tecnología argentina no dudes en navegar este portal.</li>
    <li><strong>Científico: </strong>Descubrís, conocés e innovás para aportar al bien común.
    Accedé y descubrí toda la información que se puede aprovechar para generar nuevas ideas.</li>
    <li><strong>Emprendedor:</strong> La información es tu herramienta para innovar.
    Accedé a toda la información sobre proyectos tecnológicos, dónde se realizan y qué personas participan.</li>
    <li><strong>Desarrollador informático:</strong>Creés en una comunidad abierta.
    Accedé y descubrí toda la información disponible y sumate a nuestros proyectos para nuevos desarrollos con datos abiertos. Si ya tenés un desarrollo compartí tu experiencia con nosotros.</li>
    <li><strong>Periodista:</strong> Combinás el olfato con la capacidad de contar historias.
    Explorá nuestro portal y conocé qué, quiénes, dónde, y con qué de la ciencia y la tecnología argentina.</li>
    <li><strong>Gobierno:</strong> Sos uno de nosotros y creés en la política pública como un bien común.
    Analizá en qué aporta la ciencia y la tecnología argentina a la resolución de los problemas de todos.</li>
    </ul>
    <br>
    <p>Podés formar parte de nuestro Portal utilizando la información disponible y compartiendo tus experiencias de reutilización de los datos, ideas y sugerencias. Ellas nos ayudarán a conocerte mejor y a mejorar los servicios que podemos ofrecerte.</p>
    <br>
    <p>Visite la pagina Portal de Información Ciencia y Tecnología Argentino: <a href="https://datos.mincyt.gob.ar/#/" target="_blank" rel="noopener noreferrer">https://datos.mincyt.gob.ar/#/</a></p>
    <p>Fuente: seccion de Acerca de, del Portal de Información Ciencia y Tecnología Argentino:</p>
    <p> <a href="https://datos.mincyt.gob.ar/#/acercade" target="_blank" rel="noopener noreferrer">Seccion: Acerca de</a></p>
    `)
    incluir_seccion_hijo("portal_dacytar","Portal DACyTAr","recursos_digitales_online")
    actualizar_parrafo("portal_dacytar",`
    <br>
    <p>El portal te permite, de forma centralizada, buscar y acceder a todos los conjuntos de datos primarios de investigación disponibles en acceso abierto a través de los repositorios digitales institucionales que integran el Sistema Nacional de Repositorios Digitales (SNRD).</p>
    <br>
    <p><span style="color: #ff00ff"><strong>¿QUE ES EL PORTAL DACyTAr?</strong></span></p>
    <br>
    <p>DACyTAr es el portal de que te permite, de forma centralizada, buscar y acceder a todos los conjuntos de datos primarios de investigación disponibles en acceso abierto a través de los repositorios digitales institucionales que integran el <a href="https://repositoriosdigitales.mincyt.gob.ar/vufind/" target="_blank" rel="noopener noreferrer">Sistema Nacional de Repositorios Digitales (SNRD)</a>.</p>

    <p>DACyTAr se encuadra en la <a href="https://repositoriosdigitales.mincyt.gob.ar/files/Boletin_Oficial_Ley_26899.pdf" target="_blank" rel="noopener noreferrer">Ley No. 26.899</a> y su <a href="https://repositoriosdigitales.mincyt.gob.ar/files/Boletin_Oficial_Resolucion_753.pdf" target="_blank" rel="noopener noreferrer">reglamentación</a> que exigen, a los organismos e instituciones públicas que componen el Sistema Nacional de Ciencia, Tecnología e Innovación (SNCTI) y que reciben financiamiento del Estado nacional, a hacer disponible en Acceso Abierto a través de repositorios digitales interoperables, la producción científico-tecnológica resultante del trabajo, formación y/o proyectos, financiados total o parcialmente con fondos públicos, de sus investigadoras/res, tecnólogas/os, docentes, becarias/os de posdoctorado y estudiantes de maestría y doctorado. Esa producción científico-tecnológica abarca tanto al conjunto de documentos (artículos de revistas, trabajos técnico-científicos, tesis académicas, entre otros) como también a los datos primarios de investigación que son el resultado de actividades de investigación. A su vez, la normativa requiere a las instituciones que definan sus "Políticas Institucionales de Acceso Abierto" según los requisitos establecidos en la reglamentación y el modelo del plan de gestión de datos que debe usar su comunidad científica.</p>

    <p>Este portal es producto del cumplimiento de los estándares y protocolos de interoperabilidad establecidos por el SNRD siguiendo pautas y acuerdos internacionales. Estos estándares, permiten que los repositorios institucionales se comuniquen entre sí y se integren a redes de repositorios y/o portales como DACyTAr o SNRD. Asimismo, se promueven los Principios FAIR como una forma de producir, gestionar y compartir datos científicos.</p>
    <br>
    <p>Visite la pagina Portal de Portal DACyTAr: <a href="https://dacytar.mincyt.gob.ar/" target="_blank" rel="noopener noreferrer">https://dacytar.mincyt.gob.ar/</a></p>
    <p>Fuente: seccion de Sobre DACyTAr, del Portal DACyTAr:</p>
    <p> <a href="https://dacytar.mincyt.gob.ar/acerca" target="_blank" rel="noopener noreferrer">Seccion: Sobre DACyTAr</a></p>
    `)

    incluir_seccion_hijo("biblioteca_clacso","Biblioteca Clacso","recursos_digitales_online")
    actualizar_parrafo("biblioteca_clacso",`

    <p><span style="color: #ff00ff"><strong>¿QUE ES CLACSO?</strong></span></p>

  
    <p>El Consejo Latinoamericano de Ciencias Sociales (CLACSO) es una institución internacional no-gubernamental con status asociativo en la UNESCO, creada en 1967. Actualmente, reúne 836 centros de investigación y posgrado en el campo de las ciencias sociales y las humanidades en 55 países de América Latina y otros continentes.</p>
    <br>
    <p><span style="color: #ff00ff"><strong>Los 10 objetivos de CLACSO</strong></span></p>



    <ul>
    <li>Promover la investigación social para el combate a la pobreza y la desigualdad, el fortalecimiento de los derechos humanos y la participación democrática.</li>
    <li>Contribuir, desde los aportes de la investigación académica y del pensamiento crítico, a promover políticas de desarrollo sustentables en términos económicos, sociales y ambientales.</li>
    <li>Tender puentes entre la investigación social y las políticas públicas, impulsando acciones innovadoras, creativas y viables ante los grandes desafíos sociales, educativos, culturales y ambientales de América Latina y el Caribe.</li>
    <li>Apoyar la formación de redes de investigadores/as e instituciones que actúan en el campo de las ciencias sociales y las humanidades.</li>
    <li>Fortalecer los procesos de internacionalización académica en América Latina y el Caribe.</li>
    <li>Ampliar la cooperación y el diálogo académico Sur-Sur y Norte-Sur.</li>
    <li>Estimular el desarrollo y la consolidación de las ciencias sociales y del pensamiento crítico en los países más pobres de América Latina y el Caribe.</li>
    <li>Intervenir en el debate público nacional y regional, aportando las perspectivas y contribuciones de la investigación social basada en resultados.</li>
    <li>Colaborar con la formación de agentes gubernamentales, activistas sociales y profesionales de la prensa en temas sociales, educativos, culturales y ambientales, acercándolos a problemáticas abordadas desde las ciencias sociales y a las evidencias que la investigación social aporta.</li>
    <li>Generar condiciones de acceso abierto a la producción académica latinoamericana y caribeña, contribuyendo a la democratización del acceso al conocimiento y permitiendo su más activa utilización por parte de los gestores de políticas públicas, las organizaciones sociales y ciudadanas, la prensa y el propio sistema universitario.</li>
    </ul>
    <br>
    <p><span style="color: #ff00ff"><strong>Los 10 ejes centrales de CLACSO</strong></span></p>
    <ul>
    <li>Reducción de las desigualdades y de la injusticia social.</li>
    <li>Combate al racismo, la discriminación étnica y de género. </li>
    <li>Garantías y protección legal en los procesos migratorios y de movilidad humana.</li>
    <li>Defensa de la educación pública y ampliación del derecho a la educación de calidad para todos/as.</li>
    <li>Contribución al desarrollo de procesos de paz.</li>
    <li>Promoción del acceso abierto y la democratización del conocimiento.</li>
    <li>Promoción de políticas de seguridad ciudadana y combate a la violencia.</li>
    <li>Promoción de los derechos de la infancia y la juventud.</li>
    <li>Promoción de la participación, la movilización ciudadana y el fortalecimiento de la democracia.</li>
    <li>Promoción de políticas de desarrollo económico, social y ambientalmente sostenibles.</li>
    </ul>
    <br>
    <p><span style="color: #ff00ff"><strong>RED DE BIBLIOTECA VITUALES CLACSO</strong></span></p>

    <p>La Red de Bibliotecas Virtuales CLACSO, repositorio digital, ofrece acceso libre a más de 100.000 textos de la red CLACSO y recibe más de un millón de solicitudes por mes en CLACSO y en la colección CLACSO en Redalyc.</p>
    <p>El portal CLACSO-REDALYC ofrece acceso abierto e indicadores de 850 revistas de ciencias sociales y humanidades de Iberoamérica (350.721 artículos). Esta colección recibe más de 4 millones de descargas por mes.</p>
    <p>Es un servicio de CLACSO con la participación del los grupos publicaciones, biblioteca y multimedia de los centros miembros de CLACSO.</p>
    <br>
    <p>Visite la pagina Red de Bibliotecas virtuales de Ciencias Sociales de America Latina y El Caribe: <a href="http://www.biblioteca.clacso.edu.ar/" target="_blank" rel="noopener noreferrer">http://www.biblioteca.clacso.edu.ar/</a></p>
    <p>Fuente: seccion de ¿Que es CLACSO?, de la pagina CLACSO:</p>
    <p> <a href="https://www.clacso.org/institucional/" target="_blank" rel="noopener noreferrer">https://www.clacso.org/institucional/</a></p>
    
    `)


    incluir_seccion_hijo("biblioteca_tematica_literatura_cordoba","Biblioteca tematica de la Literatura de Cordoba","recursos_digitales_online")
    actualizar_parrafo("biblioteca_tematica_literatura_cordoba",`
    <br>
    <p><span style="color: #ff00ff"><strong>Los Escritores de Córdoba y sus Obras en la BTLC</strong></span></p>
    <br>
    <p>Este es el sitio de La Biblioteca Temática de la Literatura de Córdoba.</p>                   
    <p>Aquí nos proponemos dar conocimiento y orientar búsquedas respecto de la creación literaria, la investigación y la crítica sobre las obras de los autores de Córdoba, en especial, señalando esos textos que se guardan como acervo en las bibliotecas de las distintas facultades de la UNC. Es un espacio que integra muchas voces y textos de creadores, estudiosos e investigadores de las letras de la provincia.                            
    En esta etapa, que para nosotros es la primera, proponemos destacar la obra de los autores nacidos entre 1890 y la mitad del siglo XX, ya que se trata de un material (en general, con ediciones únicas) que carece, en su mayoría, de presencia en la web.</p>

    <p>El objetivo busca dar cuenta de una producción literaria que alcanza colores y tonos propios. Creemos que el camino a través de la biografía del autor es el más sencillo para responder al interés de la mayoría de los lectores, que focalizan nombres particulares. Se remite al lector, además, a ubicar la bibliografía mencionada, en alguna biblioteca de la UNCba <a href="https://ffyh.unc.edu.ar/biblioteca/escritores-de-cordoba/sobre-la-biblioteca-tematica-de-la-literatura-de-cordoba/" target="_blank" rel="noopener noreferrer">(Articulo completo)</a>.</p> 
    
    <p><strong><i>Autora: Bibiana Eguias</i></strong></p>
    <br> 
    <p>Visite la pagina Red de Bibliotecas virtuales de Ciencias Sociales de America Latina y El Caribe: <a href="http://www.biblioteca.clacso.edu.ar/" target="_blank" rel="noopener noreferrer">http://www.biblioteca.clacso.edu.ar/</a></p>
    <p>Fuente: seccion de Los Escritores de Córdoba y sus Obras en la BTLC, de la pagina de la Biblioteca FFyH:</p>
    <p>Visite esta pagina para conocer el indice completos de escritores de Córdoba: <a href="https://ffyh.unc.edu.ar/biblioteca/escritores-de-cordoba/" target="_blank" rel="noopener noreferrer">https://ffyh.unc.edu.ar/biblioteca/escritores-de-cordoba/</a></p>
    
    `)
    incluir_seccion_hijo("repositorios_institucionales_digitales","Repositorios Institucionales","recursos_digitales_online")
    actualizar_parrafo("repositorios_institucionales_digitales",`
    <br>
    <p><span style="color: #ff00ff"><strong>¿QUE SON LOS REPOSITORIOS DIGITALES?</strong></span></p>
    
    <p>Se consideran repositorios digitales a aquellas colecciones digitales de producción científico-tecnológica de una institución, en las que se permita la búsqueda y la recuperación para su posterior uso nacional e internacional.</p>
    <br>
    <p style="text-align: justify"><span style="font-weight: 400;font-size: 14pt">El Sistema Nacional de Repositorios Digitales (SNRD) propone el modelo de Acceso Abierto (AA) a la producción científico-tecnológica, que implica que los usuarios de este tipo de material puedan, en forma gratuita, leer, descargar, copiar, distribuir, imprimir, buscar o enlazar los textos completos de los artículos científicos, y usarlos con propósitos legítimos ligados a la investigación científica, a la educación o a la gestión de políticas públicas, sin otras barreras económicas, legales o técnicas que las que suponga Internet en sí misma.</span></p>
    <p style="text-align: justify"><span style="font-size: 14pt"><b>La única condición que plantea este modelo para la reproducción y distribución de las obras que se pongan a disposición es la obligación de otorgar a los autores el control sobre la integridad de su trabajo y el derecho a ser adecuadamente reconocidos y citados.</b></span></p>
    <br>
    <p style="text-align: justify"><span style="font-size: 14pt"><a href="http://www.biblioteca.mincyt.gob.ar/recursos/accesoabierto?geo=AR" target="_blank" rel="noopener noreferrer"><span style="font-weight: 400">Repositorios Argentinos de Acceso Abierto</span></a></span></p>
    <br>
    <p><span style="color: #ff00ff"><strong>LISTS DE REPOSITORIOS DIGITALES</strong></span></p>
    <p style="color: #FF0000"><i>Visite esta pagina para conocer la lista completa de Repositorios Institucionales: <a href="https://ffyh.unc.edu.ar/biblioteca/repositorios-institucionales/" target="_blank" rel="noopener noreferrer">https://ffyh.unc.edu.ar/biblioteca/repositorios-institucionales/</a></i></p>

    <br>
    <p style="text-align: justify"><span style="font-size: 14pt"><b>Repositorio digital de investigaciones científicas y tecnológicas de Córdoba. </b></span><span style="font-weight: 400;font-size: 14pt"><a href="http://www.corciencia.org.ar/" target="_blank" rel="noopener noreferrer">Cor-Ciencia</a> constituye una plataforma digital de acceso libre y abierto a la producción científica de la provincia de Córdoba, elaborada por el Acuerdo de Bibliotecas Universitarias de Córdoba (ABUC) y financiada por el Ministerio de Ciencia y Tecnología de Córdoba. Cor-Ciencia busca contribuir a la difusión y aumento de la visibilidad de la producción intelectual de la provincia de Córdoba. </span></p>
    <p style="text-align: justify"><span style="font-size: 14pt"><b>SIU BDU</b><b>2</b><b>: Repositorios Institucionales. </b></span><span style="font-size: 14pt"><a href="http://cosechador.siu.edu.ar/bdu3/" target="_blank" rel="noopener noreferrer"><span style="font-weight: 400">BDU2</span></a><span style="font-weight: 400"> </span><span style="font-weight: 400">es un proyecto iniciado por el SIU (Sistema Universitario Nacional) para reunir recursos de información de valor académico de libre disponibilidad para el usuario final. Dichos contenidos pueden ser Tesis de diversos grados académicos, Artículos de Publicaciones Periódicas, Libros electrónicos, Material de alto valor histórico digitalizado, Legislación Educativa, Videos, Entrevistas y otros materiales puestos a disposición por instituciones académicas nacionales. Está orientado al público en general con la misión de difundir la producción intelectual de las Universidades Nacionales y otras instituciones participantes. También se orienta a público especializado como alumnos, docentes e investigadores aportando un recurso de información y difusión importante para el apoyo de actividades académicas. </span></span></p>
    <p style="text-align: justify"><span style="font-weight: 400;font-size: 14pt"><a href="https://dash.harvard.edu/" target="_blank" rel="noopener noreferrer">DASH</a> es un repositorio centralizado que ofrece acceso abierto a la producción científica generada por los investigadores de la universidad de Harvard.</span></p>
    <p style="text-align: justify"><span style="font-weight: 400;font-size: 14pt"><a href="http://www.latindex.unam.mx" target="_blank" rel="noopener noreferrer">Latindex</a> es un sistema de información sobre las revistas de investigación científica, técnico-profesionales y de divulgación científica y cultural que se editan en los países de América Latina, el Caribe, España y Portugal. Funciona sobre la base de la cooperación regional a través de una institución responsable en cada país participante. La República Argentina lo integra desde 1998 a través del Centro Argentino de Información Científica y Tecnológica (CAICyT).</span></p>
    <p style="text-align: justify"><span style="font-weight: 400;font-size: 14pt"><a href="https://dialnet.unirioja.es/" target="_blank" rel="noopener noreferrer">Dialnet</a> es uno de los mayores portales bibliográficos de acceso libre y gratuito, cuyo principal cometido es dar mayor visibilidad a la literatura científica hispana en Internet, recopilando y facilitando el acceso a contenidos científicos, principalmente a través de alertas documentales. Además cuenta con una base de datos exhaustiva, interdisciplinaria y actualizada, que permite el depósito de contenidos a texto completo.</span></p>
    <p style="text-align: justify"><span style="font-size: 14.0pt"><a href="http://www.gutenberg.org/wiki/ES_Portada" target="_blank" rel="noopener noreferrer">Proyecto Gutenberg</a> es una de las iniciativas más importantes que han surgido por parte de voluntarios en todo el mundo, quienes han hecho posible que tengamos acceso a más de 20.000 libros digitales, y más de 100.000 si consideramos a las webs afiliadas al programa. Todos estos libros están disponibles en gran cantidad de formatos para todo tipo de dispositivos electrónicos, donde lo mejor es que no hay que pagar absolutamente nada.</span></p>
    <p style="text-align: justify"><span style="font-size: 14.0pt"><a href="https://es.wikisource.org/wiki/Portada" target="_blank" rel="noopener noreferrer">Wikisource</a>  es otro importante proyecto que surge de la Fundación Wikimedia, aquí se concentran más de 100.000 textos de dominio público todos en formato HTML.</span></p>
    <p style="text-align: justify"><span style="font-size: 14.0pt"><a href="https://books.google.es/" target="_blank" rel="noopener noreferrer">Google Books</a> es un proyecto que inició como un simple algoritmo de búsqueda, hoy en día es una de las bases de datos de libros digitalizados más grande que existe, esto gracias a sus más de 10 millones de títulos de una gran cantidad de instituciones afiliadas.</span></p>
    <p style="text-align: justify"><span style="font-size: 14.0pt">El <a href="http://repositorio.cepal.org/" target="_blank" rel="noopener noreferrer">Repositorio Digital de la Comisión Económica para América Latina y el Caribe de las Naciones Unidas</a>  fue un gran esfuerzo por parte la CEPAL que nos permite acceder a una gran cantidad de material donde podremos encontrar libros, monografías, publicaciones periódicas, series y documentos de proyectos, investigaciones, conferencias y reuniones, donde un punto importante es que se actualiza de forma periódica.</span></p>
    <p style="text-align: justify"><span style="font-size: 14.0pt"><a href="http://www.caicyt.gov.ar/" target="_blank" rel="noopener noreferrer">CAICYT</a>  es el Centro Argentino de Información Científica y Tecnológica<br />
    Base de datos bibliográfica. Incluye información sobre las publicaciones periódicas disponibles en más de 600 bibliotecas cooperantes científico-técnicas de todo el país. Permite realizar búsquedas simples y booleanas, por título, áreas temáticas, bibliotecas, editores, etc.</span></p>
    <p style="text-align: justify"><span style="font-size: 14.0pt"><a href="http://datos.bancomundial.org/" target="_blank" rel="noopener noreferrer">Banco Mundial</a> (Open Knowledge Repository) El Banco mundial ofrece acceso abierto a más de 333.539 recursos electrónicos correspondientes a las ciencias marinas y acuáticas (incluye entre otras disciplinas: acuicultura, geociencias, biología y ecología).</span></p>
    <p style="text-align: justify"><span style="font-size: 14.0pt"><a href="http://www.bentham.org/open/index.htm" target="_blank" rel="noopener noreferrer">Bentham Open</a> ofrece acceso libre a aproximadamente 200 revistas que cubren la mayoría de las disciplinas en ciencias, tecnología y medicina. Se pueden consultar a través de su listado alfabético o por materias.</span></p>
    <p style="text-align: justify"><span style="font-size: 14.0pt"><a href="http://cogprints.org/" target="_blank" rel="noopener noreferrer">CogPrints</a>  es un repositorio temático en las áreas de Psicología, Neurociencia, Lingüística, Filosofía, Inteligencia Artificial, Redes Neuronales, etc.</span></p>
    <p style="text-align: justify"><span style="font-size: 14.0pt"><a href="http://www.driver-repository.eu/" target="_blank" rel="noopener noreferrer">DRIVER</a> (Digital Repository Infrastructure Vision for European Research) brinda acceso a aproximadamente 1 millón de documentos científicos: artículos de revista, tesis y disertaciones, libros, reportes, etc., de más de 250 repositorios institucionales o temáticos de 29 países de Europa.</span></p>
    <p style="text-align: justify"><span style="font-size: 14.0pt"><a href="http://www.ejournal.unam.mx/" target="_blank" rel="noopener noreferrer">E-Journal</a> es una hemeroteca digital que integra una selecta colección de revistas científicas y humanísticas editadas por diversas dependencias académicas de la Universidad Nacional Autónoma de México y algunas instituciones asociadas. Todas las publicaciones han sido cuidadosamente seleccionadas por estrictos criterios de calidad y reconocimiento, de entre el universo de revistas de este tipo. Conforman por ello una antología de la producción editorial de publicaciones periódicas del medio académico mexicano.</span></p>
    <p style="text-align: justify"><span style="font-size: 14.0pt"><a href="http://eprints.rclis.org/" target="_blank" rel="noopener noreferrer">E-LIS</a> (E-prints in Library and Information Science) promovido por el Ministerio de Cultura de España. Permite depositar documentos sobre bibliotecología.</span></p>
    <p style="text-align: justify"><span style="font-size: 14.0pt"><a href="http://eprints.ucm.es/view/subjects/" target="_blank" rel="noopener noreferrer">E-Prints Complutense</a><b> </b>es un archivo institucional en acceso abierto desarrollado por la Biblioteca de la Universidad Complutense de Madrid para gestionar la documentación digital fruto de la actividad de sus docentes, investigadores y los grupos de investigación validados por la UCM. Contiene tesis doctorales, documentos de trabajo, artículos de revistas, actas de congresos, libros, capítulos de libros, etc., en las distintas disciplinas que se dictan en la Universidad.</span></p>
    <p style="text-align: justify"><span style="font-size: 14.0pt"><a href="http://eric.ed.gov/" target="_blank" rel="noopener noreferrer">ERIC</a> (Education Resource Information Center) es la base de datos que reúne 16 áreas temáticas distintas. Cosecha su contenido del fichero de citas de documentos <i>Resources in Education (RIE)</i> y del fichero de citas de artículos de revistas <i>Current Index to Journals in Education (CIJE)</i>. Es editada y actualizada trimestralmente por el Departamento de Educación de Estados Unidos.</span></p>
    <p style="text-align: justify"><span style="font-size: 14.0pt"><a href="http://gredos.usal.es/jspui/" target="_blank" rel="noopener noreferrer">GREDOS</a> (Gestión del Repositorio Documental de la Universidad de Salamanca) ofrece la consulta en línea de documentos digitales con contenidos históricos, científicos, didácticos e institucionales. La Universidad de Salamanca difunde en acceso abierto a través de GREDOS colecciones patrimoniales, documentos científicos y recursos docentes e informativos.</span></p>
    <p style="text-align: justify"><span style="font-size: 14.0pt"><a href="http://highwire.stanford.edu/lists/allsites.dtl?view=by+topic" target="_blank" rel="noopener noreferrer">HighWire Press</a> ofrece acceso al texto completo de artículos de revistas de distintas temáticas. La base de datos es elaborada por Stanford University Libraries.</span></p>
    <p style="text-align: justify"><span style="font-size: 14.0pt"><a href="http://lcweb2.loc.gov/hlas/espanol/mdbquery.html" target="_blank" rel="noopener noreferrer">HLAS</a> (Handbook of Latin American Studies) es una base de datos con información producida en Latinoamérica, la cual incluye libros, artículos de revistas, publicaciones oficiales, actas de congresos y en algunos casos el texto completo.</span></p>
    <p style="text-align: justify"><span style="font-size: 14.0pt"><a href="http://www.journals4free.com/" target="_blank" rel="noopener noreferrer">Journals for Free</a>  es multidisciplinaria e incluye revistas de acceso abierto y algunas otras revistas con acceso a sus materiales.</span></p>
    <p style="text-align: justify"><span style="font-size: 14.0pt"><a href="http://www.lareferencia.info/vufind/" target="_blank" rel="noopener noreferrer">LA Referencia</a> (Red Federada de Repositorios Institucionales de Publicaciones Científicas) está destinada a almacenar, compartir, dar visibilidad y acceso abierto a la producción científica de América Latina.</span></p>
    <p style="text-align: justify"><span style="font-size: 14.0pt"><a href="http://www.vanguard.edu/faculty/ddegelman/amoebaweb/index.aspx?doc_id=847" target="_blank" rel="noopener noreferrer">Listado de Revistas sobre Psicología y áreas relacionadas</a>  estas revistas ofrecen algunos artículos en texto completo y otras tienen libre acceso a los artículos que han sido publicados hace uno o dos años.</span></p>
    <p style="text-align: justify"><span style="font-size: 14.0pt"><a href="http://www.memoria.fahce.unlp.edu.ar/" target="_blank" rel="noopener noreferrer">Memoria Académica</a> es un repositorio institucional que tiene por objeto la reunión, el registro, la difusión y la preservación de la producción académico-científica de la Facultad de Humanidades y Ciencias de la Educación de la Universidad de La Plata. Las colecciones actualmente disponibles están en formación y se van enriqueciendo a medida que se procesan e incorporan los textos completos digitales que los autores van entregando para su publicación.</span></p>
    <p style="text-align: justify"><span style="font-size: 14.0pt"><a href="http://scholar.lib.vt.edu/ejournals/index.html" target="_blank" rel="noopener noreferrer">NDLTD</a> (Networked Digital Library of Theses and Dissertations) es una organización internacional dedicada a promover la adopción, producción, uso, diseminación y preservación de tesis digitales. Creada en Virginia Tech, cuenta en la actualidad con más de 100 miembros de universidades de más de 20 países. </span></p>
    <p style="text-align: justify"><span style="font-size: 14.0pt"><a href="http://nulan.mdp.edu.ar/" target="_blank" rel="noopener noreferrer">Nülan</a> conocido como el Portal de Promoción y Difusión Pública del Conocimiento Académico y Científico, es un repositorio institucional de la Facultad de Ciencias Económicas y Sociales de la Universidad Nacional de Mar del Plata. Su colección reúne una amplia variedad de tipos de documentos: artículos científicos, tesis, comunicaciones a congresos, libros e informes, entre otros.</span></p>
    <p style="text-align: justify"><span style="font-size: 14.0pt"><a href="http://oaister.worldcat.org/search?qt=wc_org_oaister&amp;scope=0&amp;oldscope=&amp;wcsbtn2w=Buscar&amp;dblist=239&amp;q=" target="_blank" rel="noopener noreferrer">OAIster</a> es un proyecto del University of Michigan Digital Library Production Service. Su meta es crear una colección de recursos digitales académicos de difícil acceso. Organiza el material localizado en las colecciones de más de 700 instituciones y ofrece cerca de un millón de registros de: libros electrónicos, artículos de revistas en línea, archivos de audio y video, imágenes, etc.</span></p>
    <p style="text-align: justify"><span style="font-size: 14.0pt"><a href="http://portal.pepsic.bvsalud.org/php/index.php?lang=es" target="_blank" rel="noopener noreferrer">PePSIC </a>(Portal de Periódicos Electrónicos de Psicología) es una fuente de la Biblioteca Virtual en Salud: Psicología de la Unión Latinoamericana de Entidades de Psicología (BVS-Psi ULAPSI) y es fruto del convenio entre el Fórum de Entidades Nacionales de la Psicología Brasileña (FENPB), la Biblioteca Dante Moreira Leite del Instituto de Psicología de la Universidad de São Paulo (IPUSP) y el Centro Latinoamericano y del Caribe de Información en Ciencias de la Salud BIREME, que cedió la metodología Scientific Electronic Library Online <a href="http://www.scielo.org/">SciELO</a> como modelo de publicación electrónica de periódicos para países en desarrollo. El PePSIC tiene como objetivo contribuir con la visibilidad del conocimiento psicológico y científico generado en los países de América Latina, a partir de la publicación de revistas científicas en acceso abierto.</span></p>
    <p style="text-align: justify"><span style="font-size: 14.0pt"><a href="http://www.revistas.unam.mx/index.php/index/index" target="_blank" rel="noopener noreferrer">Portal de revistas científicas y arbitradas de la UNAM</a> impulsa la transición de la publicación impresa a la publicación digital mediante el Sistema de Acceso Abierto, conocido como OJS por sus siglas en inglés -Open Journal Systems -. La noción de ciencia que impulsa el portal es expansiva, por ello incluye a todas aquellas revistas que publican resultados originales de investigación en todas las áreas del conocimiento sean ciencias exactas, humanidades, artes o ciencias sociales  y que utilizan un sistema de revisión por pares.</span></p>
    <p style="text-align: justify"><span style="font-size: 14.0pt"><a href="http://www.apa.org/pubs/databases/psycinfo/index.aspx" target="_blank" rel="noopener noreferrer">PsycINFO</a> es una Base de datos elaborada por la American Psychological Association (APA) con cobertura internacional sobre Psicología y disciplinas afines como Psiquiatría, Educación, Sociología, Derecho, Farmacología, etc. Contiene citas y resúmenes de artículos de revista, capítulos de libros, libros, tesis, informes, ponencias, etc. PsycINFO proporciona la cobertura sistemática de la literatura psicológica a partir de los años 1800 al presente. La base de datos también incluye registros a partir de los años 1600 y los años 1700.</span></p>
    <p style="text-align: justify"><span style="font-size: 14.0pt"><a href="http://recolecta.fecyt.es/" target="_blank" rel="noopener noreferrer">Recolecta</a> (Recolector de Ciencia Abierta) es una plataforma que agrupa a todos los repositorios científicos nacionales y que provee de servicios a los gestores de repositorios, a los investigadores y a los agentes implicados en la elaboración de políticas. Surge en 2007 gracias a la colaboración de La Fundación Española para la Ciencia y la Tecnología (FECYT) y la Red de Bibliotecas Universitarias (REBIUN) de la CRUE con el objetivo de crear una infraestructura nacional de repositorios científicos de acceso abierto españoles.</span></p>
    <p style="text-align: justify"><span style="font-size: 14.0pt"><a href="http://rephip.unr.edu.ar/" target="_blank" rel="noopener noreferrer">RepHipUNR</a> es un repositorio académico abierto creado para archivar, preservar y distribuir digitalmente, en variados formatos, tanto materiales de enseñanza y aprendizaje, como la producción científica de I+D de los profesores, profesionales e investigadores de la Universidad Nacional de Rosario. El contenido se organiza en “Comunidades” que corresponden a facultades, departamentos, centros de Investigación y otras organizaciones dedicadas a la educación y/o investigación bajo convenio con la UNR.</span></p>
    <p style="text-align: justify"><span style="font-size: 14.0pt"><a href="http://repositorio.cepal.org/" target="_blank" rel="noopener noreferrer">Repositorio Digital CEPAL</a> contiene más de 35.000 publicaciones de la Comisión Económica para América Latina y el Caribe (CEPAL). Desde la primera publicación difundida en 1948 hasta la más reciente, pueden ser consultadas y descargadas en formato digital. Incluye libros institucionales, informes anuales, coediciones, series, revistas, boletines y documentos de conferencias y reuniones, así como recursos multimedia, entre otros.</span></p>
    <p style="text-align: justify"><span style="font-size: 14.0pt"><a href="http://revistas.ucm.es/" target="_blank" rel="noopener noreferrer">Revistas Científicas Complutenses</a> es un portal de revistas científicas de la Universidad Complutense de Madrid &#8211; España.</span></p>
    <p style="text-align: justify"><span style="font-size: 14.0pt"><a href="http://www.oei.es/oeivirt/revedu.htm" target="_blank" rel="noopener noreferrer">Revistas electrónicas Educación</a> (OEI –Organización de Estados Americanos para la Educación, la Ciencia y la Cultura).</span></p>
    <p style="text-align: justify"><span style="font-size: 14.0pt"><a href="http://roar.eprints.org" target="_blank" rel="noopener noreferrer">ROAR</a> (Registro de repositorios de acceso abierto) ofrece un directorio con más de 1.550 repositorios registrados en su base de datos. Actualmente permite la búsqueda de los contenidos de los repositorios listados.</span></p>
    <p style="text-align: justify"><span style="font-size: 14.0pt"><a href="http://www.saber.ula.ve/" target="_blank" rel="noopener noreferrer">ULA</a> (Repositorio Institucional de la Universidad de los Andes) gestiona la publicación, preservación y acceso libre, a texto completo, de documentos derivados de la producción intelectual e institucional de la Universidad de Los Andes (Venezuela). Incluye artículos, papers, tesis, guías de estudio, presentaciones, estadísticas y artículos de revistas electrónicas.</span></p>
    <p style="text-align: justify"><span style="font-size: 14.0pt"><a href="http://www.scielo.org/php/index.php?lang=es" target="_blank" rel="noopener noreferrer">SciELO</a> (Scientific Electronic Library Online) se trata de una biblioteca científica electrónica en línea la cual es un modelo para la publicación electrónica cooperativa de revistas científicas en Internet. Especialmente desarrollado para responder a las necesidades de la comunicación científica en los países en desarrollo y particularmente de América Latina y el Caribe, el modelo proporciona una solución eficiente para asegurar la visibilidad y el acceso universal a su literatura científica, contribuyendo para la superación del fenómeno conocido como &#8216;ciencia perdida&#8217;.</span></p>
    <p style="text-align: justify"><span style="font-size: 14.0pt"><a href="http://www.scielo.org.ar/scielo.php" target="_blank" rel="noopener noreferrer">SciELO Argentina</a> &#8211; En Argentina este proyecto cooperativo regional forma parte de las políticas científicas del Consejo Nacional de Investigaciones Científicas y Técnicas (<a href="http://www.conicet.gov.ar/" target="_blank" rel="noopener noreferrer">CONICET</a>) y se gestiona a través del Centro Argentino de Información Científica y Tecnológica (<a href="http://www.caicyt.gov.ar/" target="_blank" rel="noopener noreferrer">CAICYT</a>), el cual es un organismo dependiente del CONICET. Las revistas que integran la colección SciELO-Argentina tienen cobertura en todas las áreas del conocimiento y cuentan con la confiabilidad que les otorga el ser parte del <a href="http://www.caicyt.gov.ar/nucleo-basico-de-revistas-cientificas" target="_blank" rel="noopener noreferrer">Núcleo Básico de Publicaciones Científicas Argentinas</a> y con el rigor científico de sus artículos evaluados por pares; quienes son miembros del Comité Científico Asesor designado por el CONICET.</span></p>
    <p style="text-align: justify"><span style="font-size: 14.0pt"><a href="http://www.scielo.br/scielo.php?script=sci_home&amp;lng=es&amp;nrm=iso" target="_blank" rel="noopener noreferrer">SciELO Brasil</a> (Scientific Electronic Library Online) .es una biblioteca electrónica que abarca una colección seleccionada de revistas científicas Brasileñas. La biblioteca es resultado de un proyecto de investigación de la <a href="http://www.fapesp.br/" target="_blank" rel="noopener noreferrer">FAPESP</a> (Fundação de Amparo à Pesquisa do Estado de São Paulo) en colaboración con <a href="http://www.bireme.br/bvs/E/ehome.htm" target="_blank" rel="noopener noreferrer">BIREME</a> (Centro Latinoamericano y del Caribe de Información en Ciencias de la Salud). A partir de 2002, el Proyecto cuenta con el apoyo del <a href="http://www.cnpq.br/" target="_blank" rel="noopener noreferrer">CNPq</a> (Conselho Nacional de Desenvolvimento Científico e Tecnológico).</span></p>
    <p style="text-align: justify"><span style="font-size: 14.0pt"><a href="http://www.scielo.cl/scielo.php" target="_blank" rel="noopener noreferrer">SciELO Chile</a> es una biblioteca científica que abarca, en esta primera etapa, una colección seleccionada de revistas científicas chilenas. Este proyecto está siendo desarrollado por la Comisión Nacional de Investigación Científica y Tecnológica (<a href="http://www.conicyt.cl/" target="_blank" rel="noopener noreferrer">CONICYT</a>) y cuenta con el apoyo de <a href="http://www.bireme.br/" target="_blank" rel="noopener noreferrer">BIREME</a> (Centro Latinoamericano y del Caribe de Información en Ciencias de la Salud) y forma parte de un proyecto de carácter regional.</span></p>
    <p style="text-align: justify"><span style="font-size: 14.0pt"><a href="http://www.scielo.org.co/scielo.php/script_sci_home/lng_es/nrm_iso" target="_blank" rel="noopener noreferrer">SciELO Colombia</a> es una biblioteca electrónica que cubre una colección selecta de revistas científicas colombianas a nivel de: Ciencias biológicas, ciencias de la salud y humanidades.</span></p>
    <p style="text-align: justify"><span style="font-size: 14.0pt"><a href="http://sedici.unlp.edu.ar/" target="_blank" rel="noopener noreferrer">SeDiCi</a> (Servicio de Difusión de la Creación Intelectual) es el repositorio institucional de la Universidad Nacional de La Plata. Se estableció en el año 2003 para facilitar el depósito de la producción de las distintas unidades académicas de la UNLP, dar mayor visibilidad y preservar las obras con una gestión adecuada. Incluye: libros, partes de libros, artículos, tesis, tesinas, reportes, obras artísticas, revistas, reseñas, documentos legales, etc. Además de las obras propias de la UNLP, contiene otras secciones tales como revistas de acceso libre y contenidos obtenidos por operaciones de cosecha de otros repositorios del mundo de naturaleza similar.</span></p>
    <p style="text-align: justify"><span style="font-size: 14.0pt"><a href="http://www.unesco.org/new/en/unesco/resources/publications/unesdoc-database/" target="_blank" rel="noopener noreferrer">UNESDOC</a> permite el acceso a documentos y publicaciones de la UNESCO (Organización de las Naciones Unidas para la Educación, la Ciencia y la Cultura).</span></p>
    <p style="text-align: justify"><span style="font-size: 14.0pt"><a href="http://www.opendoar.org/" target="_blank" rel="noopener noreferrer">OpenDOAR</a> es un directorio de repositorios de acceso abierto de probada calidad abarcando todo el mundo. OpenDOAR es mantenido por SHERPA.</span></p>
    <br>
    <p>Fuente: seccion de Repositorios Institucionales de la pagina de la Biblioteca FFyH:</p>
    <p>Visite esta pagina para conocer la lista completa de Repositorios Institucionales: <a href="https://ffyh.unc.edu.ar/biblioteca/repositorios-institucionales/" target="_blank" rel="noopener noreferrer">https://ffyh.unc.edu.ar/biblioteca/repositorios-institucionales/</a></p>

    `)
    incluir_seccion_hijo("biblioteca_digitales","Bibliotecas digitales","recursos_digitales_online")
    actualizar_parrafo("biblioteca_digitales",`
    <br>
    <div>
    <p><span style="color: #ff00ff"><strong>BIBLIOTECAS DIGITALES</strong></span></p>
    
    <p style="color: #FF0000"><i>Visite esta pagina para conocer la lista completa de Bibliotecas Digitales: <a href="https://ffyh.unc.edu.ar/biblioteca/bibliotecas-digitales/" target="_blank" rel="noopener noreferrer">https://ffyh.unc.edu.ar/biblioteca/repositorios-institucionales/</a></i></p>

    <br>
    </div>
    <div>
        <ul>
    <li style="font-weight: 400;text-align: justify"><span style="font-size: 14pt"><a href="https://www.wdl.org/es/" target="_blank" rel="noopener noreferrer"><span style="font-weight: 400">Biblioteca Digital Mundial</span></a><span style="font-weight: 400"> &#8211; En un titánico esfuerzo de la Biblioteca del Congreso de Estados Unidos y la UNESCO, la WDL contiene importantes materiales fundamentales para entender las culturas de todo el mundo, todo disponible de forma gratuita y en una gran variedad de idiomas.</span></span></li>
    <li style="font-weight: 400;text-align: justify"><span style="font-size: 14pt"><a href="http://www.cervantesvirtual.com/" target="_blank" rel="noopener noreferrer"><span style="font-weight: 400">Biblioteca Virtual Miguel de Cervantes</span></a><span style="font-weight: 400"> &#8211; Una de las más amplias y con mayor contenido en la web, en ella encontraremos una gran variedad de categorías, como historia, poesía, entre otras, todo respecto a literatura escrita en español.</span></span></li>
    </ul>
    <ul style="text-align: justify">
    <li style="font-weight: 400"><span style="font-size: 14pt"><a href="http://bdmx.mx/" target="_blank" rel="noopener noreferrer"><span style="font-weight: 400">Biblioteca Digital Mexicana (BDMX)</span></a><span style="font-weight: 400"> &#8211; Desde 2010 aquí nos podemos encontrar una de las fuentes más importantes de información de la historia de México, ya que se trata de un esfuerzo conjunto del Archivo General de la Nación, La Biblioteca Nacional de Antropología e Historia, el Centro de Estudios de Historia de México CEHM-Carso y el CONACULTA.</span></span></li>
    </ul>
    <ul style="text-align: justify">
    <li style="font-weight: 400"><span style="font-size: 14pt"><a href="http://pares.mcu.es/" target="_blank" rel="noopener noreferrer"><span style="font-weight: 400">Portal de Archivos Españoles</span></a><span style="font-weight: 400"> &#8211; Surge como una iniciativa del Ministerio de Educación, Cultura y Deporte, tiene como objetivo dar difusión del Patrimonio Histórico Documental Español a través de internet, ofrece acceso a documentos e imágenes digitalizadas de los Archivos Españoles.</span></span></li>
    <li style="font-weight: 400"><span style="font-size: 14pt"><a href="http://bvpb.mcu.es/es/estaticos/contenido.cmd?pagina=estaticos/presentacion" target="_blank" rel="noopener noreferrer"><span style="font-weight: 400">Biblioteca Virtual de Patrimonio Bibliográfico</span></a><span style="font-weight: 400"> &#8211; Un proyecto más que surge por parte del Ministerio de Educación, Cultura y Deporte español, que nos pone ante las colecciones de manuscritos y libros impresos que forman parte del Patrimonio Histórico Español.</span></span></li>
    <li style="font-weight: 400"><span style="font-size: 14pt"><a href="http://bibdigital.rjb.csic.es/spa/index.php" target="_blank" rel="noopener noreferrer"><span style="font-weight: 400">Biblioteca Digital del Real Jardín Botánico</span></a><span style="font-weight: 400"> &#8211; Por supuesto también nos encontramos con bibliotecas de temáticas especializadas, con este caso que tendremos al alcance material científico e histórico para quien busque mayor información de las especies vegetales.</span></span></li>
    <li style="font-weight: 400"><span style="font-size: 14pt"><a href="http://prensahistorica.mcu.es/es/estaticos/contenido.cmd?pagina=estaticos/presentacion" target="_blank" rel="noopener noreferrer"><span style="font-weight: 400">Biblioteca Virtual de Prensa Histórica Española</span></a><span style="font-weight: 400"> &#8211; Con el objetivo de preservar la memoria de España, aquí podemos tener acceso a un gran archivo digital de una gran variedad de diarios españoles, donde han colaborado el Ministerio de Cultura, las Comunidades Autónomas, así como otras instituciones.</span></span></li>
    <li style="font-weight: 400"><span style="font-size: 14pt"><a href="http://www.europeana.eu/portal/"><span style="font-weight: 400" target="_blank" rel="noopener noreferrer">Europeana</span></a><span style="font-weight: 400"> &#8211; Uno de los archivos digitales más importantes de Europa, ya que cuenta con el apoyo de los diferentes países de la Unión Europea, quienes son los encargados de nutrir está gran biblioteca con mapas, pinturas, libros, películas y muchos artículos más.</span></span></li>
    <li style="font-weight: 400"><span style="font-size: 14pt"><a href="http://www.bne.es/es/Inicio/index.html" target="_blank" rel="noopener noreferrer"><span style="font-weight: 400">Biblioteca Nacional de España</span></a><span style="font-weight: 400"> &#8211; 500 años de historia es lo que podemos encontrar en uno de los archivos digitales más importantes de España, donde se nos permite consultar, descargar o leer una gran cantidad de documentos, archivos, dibujos, fotografías, mapas, grabados y mucho más, todo de forma gratuita para cualquier persona.</span></span></li>
    </ul>
    <ul style="text-align: justify">
    <li style="font-weight: 400"><span style="font-size: 14pt"><a href="http://hcl.harvard.edu/collections/digital_collections/" target="_blank" rel="noopener noreferrer"><span style="font-weight: 400">Biblioteca de la Universidad de Harvard (HCL)</span></a><span style="font-weight: 400"> &#8211; Una de las universidades más importantes del mundo también ha digitalizado su acervo cultural, otorgando libre acceso a miles de fotografías históricas, folletos, manuscritos, libros, partituras, mapas y otros materiales únicos que están en poder de la universidad.</span></span></li>
    <li style="font-weight: 400"><span style="font-size: 14pt"><a href="http://www.ciberoteca.com/homecas.asp" target="_blank" rel="noopener noreferrer"><span style="font-weight: 400">Ciberoteca</span></a><span style="font-weight: 400"> &#8211; Surgida como un proyecto de Fundación Bancaja, aquí encontraremos acceso gratuito a 45.000 de textos literarios, científicos y técnicos, además de que cientos de bibliotecas virtuales están afiliadas para otorgar acceso inmediato a través de esta plataforma, por ello es conocida como «La biblioteca de las bibliotecas».</span></span></li>
    <li style="font-weight: 400"><span style="font-size: 14pt"><a href="http://www.ciudadseva.com/bdcs/bdcs.htm" target="_blank" rel="noopener noreferrer"><span style="font-weight: 400">Biblioteca Digital Ciudad Seva</span></a><span style="font-weight: 400"> &#8211; Fundada por el escritor y catedrático puertorriqueño Luis López Nieves, Ciudad Seva ha logrado digitalizar miles de cuentos, poemas, novelas, teoría, obras de teatro, ensayos y todo sobre la narrativa.</span></span></li>
    <li style="font-weight: 400"><span style="font-size: 14pt"><a href="http://www.lib.berkeley.edu/node" target="_blank" rel="noopener noreferrer"><span style="font-weight: 400">Biblioteca Digital de la Universidad de Berkeley</span></a><span style="font-weight: 400"> &#8211; La pionera en iniciativas de digitalización y acceso público, esta biblioteca es uno de los proyectos más grandes y con mayor contenido en el mundo. Entre las colecciones más importantes podemos encontrar libros medievales, así como el Proyecto para la Herencia Americana, único en su tipo.</span></span></li>
    <li style="font-weight: 400"><span style="font-size: 14pt"><a href="http://www.bl.uk/onlinegallery/index.html" target="_blank" rel="noopener noreferrer"><span style="font-weight: 400">Biblioteca Británica</span></a><span style="font-weight: 400"> &#8211; La importancia de esta colección radica en que fue la primera que hizo uso de la tecnología en forma masiva, esto gracias a la creación del famoso dispositivo &#8216;</span><i><span style="font-weight: 400">Turning the Pages</span></i><span style="font-weight: 400">&#8216;. Entre su colección de miles de libros, se encuentra el que posiblemente sea el más consultado del mundo: los manuscritos de </span><i><span style="font-weight: 400">Alice in Wonderland</span></i><span style="font-weight: 400">.</span></span></li>
    </ul>
    <ul style="text-align: justify">
    <li style="font-weight: 400"><span style="font-size: 14pt"><a href="http://www.collectionscanada.gc.ca/015/002/015002-2170-e.html#cont" target="_blank" rel="noopener noreferrer"><span style="font-weight: 400">Canada&#8217;s Digital Collections</span></a><span style="font-weight: 400"> &#8211; Un proyecto único y de los más interesantes, ya que Canadá ha decidido reunir en un solo portal, los más de 600 proyectos de digitalización emprendidos en el país, una maravillosa idea que nos brinda acceso a casi todo el patrimonio cultural, científico, literario e histórico de Canadá.</span></span></li>
    <li style="font-weight: 400"><span style="font-size: 14pt"><a href="http://www.coleccionesmexicanas.unam.mx/" target="_blank" rel="noopener noreferrer"><span style="font-weight: 400">Colecciones Mexicanas</span></a><span style="font-weight: 400"> &#8211; Otra importante iniciativa mexicana que llega de la mano de la Biblioteca Nacional de México y de la Universidad Autónoma de México (UNAM), la cual reúne la gran mayoría de los proyectos históricos del país, con miles de archivos documentales, fotográficos, videográficos, bibliográficos.</span></span></li>
    <li style="font-weight: 400"><span style="font-size: 14pt"><a href="http://es.childrenslibrary.org/" target="_blank" rel="noopener noreferrer"><span style="font-weight: 400">International Children&#8217;s Digital Library</span></a><span style="font-weight: 400"> &#8211; Es considerada la recopilación más grande de libros digitalizados para niños, ofrece acceso a textos en una gran cantidad de idiomas, y posee una gran cantidad de categorías, que van desde libros lúdicos, de actividades, hasta cuentos y lecturas de entretenimiento.</span></span></li>
    <li style="font-weight: 400"><span style="font-size: 14pt"><a href="http://publicdomain.nypl.org/pd-visualization/" target="_blank" rel="noopener noreferrer"><span style="font-weight: 400">La biblioteca pública de Nueva York</span></a><span style="font-weight: 400"> &#8211; Una de las colecciones digitales recién renovadas, la cual nos ofrece más de 187.000 imágenes de dominio público de fotografías, mapas, postales, grabados y escritos.</span></span></li>
    </ul>
    <ul style="text-align: justify">
    <li style="list-style-type: none">
    <br>
    <p><span style="color: #ff00ff font-weight: 400;font-size: 14pt"><strong>BIBLIOTECAS NACIONALES DIGITALES</strong></span></p>
   
    </ul>
    <ul style="text-align: justify">
    <li style="font-weight: 400"><span style="font-size: 14pt"><i><span style="font-weight: 400">Australia</span></i></span>
    <ul>
    <li style="font-weight: 400"><span style="font-size: 14pt"><a href="http://www.nla.gov.au" target="_blank" rel="noopener noreferrer"><span style="font-weight: 400">http://www.nla.gov.au</span></a></span></li>
    <li style="font-weight: 400"><span style="font-size: 14pt"><a href="http://pandora.nla.gov.au/" target="_blank" rel="noopener noreferrer"><span style="font-weight: 400">http://pandora.nla.gov.au/</span></a></span></li>
    </ul>
    </li>
    <li><span style="font-size: 14pt"><i><span style="font-weight: 400">España</span></i></span>
    <ul>
    <li style="font-weight: 400"><span style="font-size: 14pt"><a href="http://www.bne.es/es/Catalogos/BibliotecaDigitalHispanica/Inicio/index.html" target="_blank" rel="noopener noreferrer"><span style="font-weight: 400">http://www.bne.es/es/Catalogos/BibliotecaDigitalHispanica/Inicio/index.html</span></a></span></li>
    </ul>
    </li>
    </ul>
    <ul style="text-align: justify">
    <li style="font-weight: 400"><span style="font-size: 14pt"><i><span style="font-weight: 400">Hawai</span></i></span>
    <ul>
    <li style="font-weight: 400"><span style="font-size: 14pt"><a href="http://hawaiidigitallibrary.org/" target="_blank" rel="noopener noreferrer"><span style="font-weight: 400">http://hawaiidigitallibrary.org/</span></a></span></li>
    </ul>
    </li>
    </ul>
    <ul style="text-align: justify">
    <li style="font-weight: 400"><span style="font-size: 14pt"><i><span style="font-weight: 400">EUA</span></i></span>
    <ul>
    <li style="font-weight: 400"><span style="font-size: 14pt"><a href="http://lcweb.loc.gov/" target="_blank" rel="noopener noreferrer"><span style="font-weight: 400">http://lcweb.loc.gov/</span></a></span></li>
    </ul>
    </li>
    </ul>
    <ul style="text-align: justify">
    <li style="font-weight: 400"><span style="font-size: 14pt"><i>Hungría</i></span>
    <ul style="font-weight: 400">
    <li style="font-weight: 400"><span style="font-size: 14pt"><a href="http://mek.oszk.hu/indexeng.phtml" target="_blank" rel="noopener noreferrer"><span style="font-weight: 400">http://mek.oszk.hu/indexeng.phtml</span></a></span></li>
    </ul>
    </li>
    </ul>
    <ul style="text-align: justify">
    <li style="font-weight: 400"><span style="font-size: 14pt"><i><span style="font-weight: 400">Biblioteca Británica</span></i></span>
    <ul>
    <li style="font-weight: 400"><span style="font-size: 14pt"><a href="http://www.bl.uk/reshelp/index.html" target="_blank" rel="noopener noreferrer">http://www.bl.uk/reshelp/index.html </a></span></li>
    </ul>
    </li>
    </ul>
    <ul style="text-align: justify">
    <li style="font-weight: 400"><span style="font-size: 14pt"><i><span style="font-weight: 400">Francia</span></i></span>
    <ul>
    <li style="font-weight: 400"><span style="font-size: 14pt"><a href="http://gallica.bnf.fr/" target="_blank" rel="noopener noreferrer"><span style="font-weight: 400">http://gallica.bnf.fr/</span></a></span></li>
    </ul>
    </li>
    </ul>
    <ul style="text-align: justify">
    <li style="font-weight: 400"><span style="font-size: 14pt"><i><span style="font-weight: 400">Canadá</span></i></span>
    <ul>
    <li style="font-weight: 400"><span style="font-size: 14pt"><a href="http://www.ic.gc.ca/eic/site/icgc.nsf/eng/home" target="_blank" rel="noopener noreferrer"><span style="font-weight: 400">http://www.ic.gc.ca/eic/site/icgc.nsf/eng/home</span></a></span></li>
    </ul>
    </li>
    </ul>
    <ul style="text-align: justify">
    <li style="font-weight: 400"><span style="font-size: 14pt"><i><span style="font-weight: 400">Portugal</span></i></span>
    <ul>
    <li style="font-weight: 400"><span style="font-size: 14pt"><a href="http://purl.pt/index/geral/PT/index.html" target="_blank" rel="noopener noreferrer"><span style="font-weight: 400">http://purl.pt/index/geral/PT/index.html</span></a></span></li>
    </ul>
    </li>
    </ul>
    <ul style="text-align: justify">
    <li><span style="font-size: 14pt"><i><span style="font-weight: 400">Singapur</span></i></span>
    <ul>
    <li style="font-weight: 400"><span style="font-size: 14pt"><a href="https://www.nlb.gov.sg/" target="_blank" rel="noopener noreferrer"><span style="font-weight: 400">https://www.nlb.gov.sg/</span></a></span></li>
    </ul>
    </li>
    </ul>
    <ul style="text-align: justify">
    <li style="font-weight: 400"><span style="font-size: 14pt"><i><span style="font-weight: 400">Suecia</span></i></span>
    <ul>
    <li style="font-weight: 400"><span style="font-size: 14pt"><a href="http://www.kb.se/" target="_blank" rel="noopener noreferrer"><span style="font-weight: 400">http://www.kb.se/</span></a></span></li>
    </ul>
    </li>
    <li style="font-weight: 400"><span style="font-size: 14pt"><i><span style="font-weight: 400">Escocia</span></i></span>
    <ul>
    <li style="font-weight: 400"><span style="font-size: 14pt"><a href="http://www.nls.uk/digitallibrary/" target="_blank" rel="noopener noreferrer"><span style="font-weight: 400">http://www.nls.uk/digitallibrary/</span></a></span></li>
    </ul>
    </li>
    <li style="font-weight: 400"><span style="font-size: 14pt"><i><span style="font-weight: 400">Tíbet e Himalaya</span></i></span>
    <ul>
    <li style="font-weight: 400"><span style="font-size: 14pt"><a href="http://www.thlib.org/" target="_blank" rel="noopener noreferrer"><span style="font-weight: 400">http://www.thlib.org/</span></a></span></li>
    </ul>
    </li>
    </ul>
    <ul style="text-align: justify">
    <li style="font-weight: 400"><span style="font-size: 14pt"><i><span style="font-weight: 400">Panamá.</span></i></span>
    <ul>
    <li style="font-weight: 400"><span style="font-size: 14pt"><a href="http://binal.ac.pa/binal/index.php" target="_blank" rel="noopener noreferrer"><span style="font-weight: 400">http://binal.ac.pa/binal/index.php</span></a></span></li>
    </ul>
    </li>
    </ul>
    <ul style="text-align: justify">
    <li style="font-weight: 400"><span style="font-weight: 400;font-size: 14pt">Chile</span>
    <ul>
    <li style="font-weight: 400"><span style="font-size: 14pt"><a href="http://www.memoriachilena.cl/602/w3-channel.html" target="_blank" rel="noopener noreferrer"><span style="font-weight: 400">http://www.memoriachilena.cl/602/w3-channel.html</span></a></span></li>
    </ul>
    </li>
    </ul>
    <br>
    <p><span style="color: #ff00ff font-weight: 400;font-size: 14pt"><strong>BIBLIOTECAS DIGITALES COOPERATIVA</strong></span></p>
   
    <ul style="text-align: justify">
    <li style="font-weight: 400"><span style="font-size: 14pt"><i><span style="font-weight: 400">1. Biblioteca Europeana</span></i></span>
    <ul>
    <li style="font-weight: 400"><span style="font-size: 14pt"><a href="http://www.theeuropeanlibrary.org/tel4/"target="_blank" rel="noopener noreferrer"><span style="font-weight: 400">http://www.theeuropeanlibrary.org/tel4/</span></a></span></li>
    </ul>
    </li>
    </ul>
    <ul style="text-align: justify">
    <li style="font-weight: 400"><span style="font-size: 14pt"><i><span style="font-weight: 400">2. The World Digital Library</span></i></span>
    <ul>
    <li style="font-weight: 400"><span style="font-size: 14pt"><a href="https://www.wdl.org/es/" target="_blank" rel="noopener noreferrer"><span style="font-weight: 400">https://www.wdl.org/es/</span></a></span></li>
    </ul>
    </li>
    </ul>
    <ul>
    <li style="font-weight: 400;text-align: justify"><span style="font-size: 14pt"><i><span style="font-weight: 400">3. Digital Library Federation</span></i> </span>
    <ul>
    <li style="font-weight: 400"><span style="font-size: 14pt"><a href="http://www.diglib.org/" target="_blank" rel="noopener noreferrer">http://www.diglib.org/</a></span></li>
    </ul>
    </li>
    <li>
    <div class="texto-nota full">
    <br>
    <p style="text-align: justify"><span style="font-size: 14pt">Los libros infantiles son sin duda uno de los géneros más entrañables dentro del ámbito de lo impreso (con su extensión reciente hacia lo digital). Acaso por la audiencia misma a la que va dirigida, la literatura infantil y juvenil posee rasgos en donde confluyen lo atractivo y lo inteligente, la reflexión y las emociones, el asombro y el cuidado, entre varios más que al final dan como resultado libros sumamente hermosos, únicos, verdaderas joyas artesanales de la edición y la creatividad.</span></p>
    <p style="text-align: justify"><span style="font-size: 14pt">Como prueba de ello, basta recorrer el amplísimo catálogo de la Biblioteca Baldwin de Literatura Infantil Histórica, adscrita a la Universidad de Florida y que recientemente liberó para su consulta abierta la digitalización de más de 6 mil ejemplares del género, publicados desde mediados del siglo XIX y hasta mediados del XX, especialmente en Estados Unidos y el Reino Unido, con algunos pocos libros provenientes de Alemania, Francia, España y otros países.</span></p>
    <p style="text-align: justify"><span style="font-size: 14pt">Cabe mencionar que dicha biblioteca lleva el nombre de su coleccionista: Ruth Baldwin, quien durante 40 años reunió libros dirigidos al público infantil, en los diversos “subgéneros” que ha tenido a lo largo de la historia ese ámbito de la edición. Libros de literatura, edificantes, pedagógicos, religiosos, morales, artísticos, de entretenimiento, de valores cívicos o familiares y varios más, los cuales en casi todos los casos respondieron a momentos específicos de la sociedad en la que emergieron.</span></p>
    <br>
    <img src="https://i0.wp.com/23.253.41.33/imagesPosts/libro2.jpg?w=1200" alt="Imagen libro niño" style="box-sizing: border-box; margin-top: 5px; margin-bottom: 5px; width: 100%; height: 100%;"/>
    <br>
    <p style="text-align: justify"><span style="font-size: 14pt">En el caso del catálogo digital, es posible explorar dicha biblioteca siguiendo criterios de año o lugar de publicación, nombre del editor e incluso la categoría temática a la cual pertenece el libro. Asimismo, el catálogo cuenta con una media docena de colecciones particulares, como la de libros relacionados con los cuentos de los hermanos Grimm, con San Nicolás o con <em>Alicia en el país de las maravillas</em>.</span></p>
    <p style="text-align: justify"><span style="font-size: 14pt">Siguiendo <strong><a href="http://ufdc.ufl.edu/baldwin/all/thumbs" target="_blank" rel="nofollow noopener noreferrer">este enlace puedes revisar el catálogo de la Baldwin Library of Historical Children&#8217;s Literature</a></strong>, y seas un entusiasta de la literatura infantil, de los libros, de las ilustraciones, de la historia cultural o de la creatividad en sí, estamos seguros de que encontrarás varias ocasiones de asombro y placer. </span></p>
    </div>
    </li>
    </ul>
    </div>
    <br>
    <p>Fuente: seccion de Bibliotecas Digitales de la pagina de la Biblioteca FFyH:</p>
    <p>Visite esta pagina para conocer la lista completa de Bibliotecas Digitales: <a href="https://ffyh.unc.edu.ar/biblioteca/bibliotecas-digitales/" target="_blank" rel="noopener noreferrer">https://ffyh.unc.edu.ar/biblioteca/repositorios-institucionales/</a></p>

    `)
    incluir_seccion_hijo("revistas_digitales","Revistas digitales","recursos_digitales_online")
    actualizar_parrafo("revistas_digitales",` 
    <br>
    <p><span style="color: #ff00ff"><strong>REVISTAS DIGITALES</strong></span></p>
    <br>
    <div>
        <ul style="text-align: justify">
    <li><span style="font-size: 14pt"><a href="http://revistas.unc.edu.ar/" target="_blank" rel="noopener noreferrer"><strong>Portal de Revistas de la Universidad Nacional de Córdoba </strong></a>(Es un espacio destinado a la difusión de las investigaciones realizadas por los miembros de la Universidad y a los contenidos académicos y culturales desarrollados en las revistas electrónicas de la Universidad Nacional de Córdoba. La Ciencia es un recurso público. Por ello, la Universidad ofrece a toda su comunidad  acceso libre  a su producción científica, académica y cultural)</span></li>
    <li><span style="font-size: 14pt"><a href="http://www.revistas.unam.mx/index.php/?area=4" target="_blank" rel="noopener noreferrer"><strong>Portal de revistas científicas y arbitradas de la UNAM</strong></a></span></li>
    <li><span style="font-size: 14pt"><a href="http://revistas.ucm.es/index.php/" target="_blank" rel="noopener noreferrer"><strong>Revistas Científicas Complutenses</strong></a> (El Portal de Revistas Científicas Complutenses es un servicio orientado a la difusión de la investigación y a apoyar la edición electrónica de revistas científicas en el seno de la Universidad Complutense de Madrid. Se puede consultar y obtener el texto completo de los artículos publicados en las revistas científicas editadas por el Servicio de Publicaciones de la UCM y, asimismo, de aquellas otras revistas editadas por los departamentos de la UCM que quieren incorporarse a este proyecto de edición digital)</span></li>
    <li><span style="font-size: 14pt"><a href="http://revistascientificas.filo.uba.ar/index.php/index" target="_blank" rel="noopener noreferrer"><strong>Revistas Científicas de Filo</strong></a> (Facultad de Filosofía y letras de la  UBA)</span></li>
    </ul>
    <br>
    <p><span style="color: #ff00ff; font-size: 14pt;"><strong>ÁREAS ESPECIFICAS</strong></span></p>
    <br>
    <p style="text-align: justify"><span style="font-size: 14pt"><strong>Antropología</strong></span></p>
    <ul style="text-align: justify">
    <li><span style="font-size: 14pt"><a href="http://ojs.uo.edu.cu/index.php/Batey/issue/archive" target="_blank" rel="noopener noreferrer"><strong>Batey</strong></a> (Revista Cubana de Antropología Sociocultural <strong>, </strong>pretende ser <strong>(1)</strong> un vehículo para dar a conocer investigaciones antropológicas, etnográficas sobre Cuba y su realidad cultural; <strong>(2)</strong> un foro de debate científico-social y antropológico (social y cultural) en el que se publiquen artículos originales, que además de contribuir al conocimiento de Cuba, fomenten el debate entre los investigadores, y recojan las corrientes antropológicas, etnográficas e histórico-culturales del momento. Con una periodicidad anual, está destinada a un público amplio pero especializado en las diversas Ciencias Sociales, desde la Historia a la Geografía, desde la Sociología y la Antropología a la Economía. Las temáticas están abiertas a distintos aspectos sociales y culturales, desde una visión transnacional, que incorpore la temática cubana tanto del interior del país como de la diáspora, y sin soslayar los análisis históricos. El idioma de publicación es el español. Junto a los números misceláneos, podrán aparecer números monográficos en atención a los textos aceptados. También tendrá otros espacios menores para la publicación de reseñas, noticias de congresos, coloquios o jornadas en y fuera de Cuba. Estos textos serán evaluados por pares)</span></li>
    <li><span style="font-size: 14pt"><a href="http://www.revistakula.com.ar/numeros-anteriores/numero-10/" target="_blank" rel="noopener noreferrer"><strong>Revista Kula. Antropólogos del Atlántico Sur</strong></a> (Antropólogos del Atlántico Sur está compuesto por estudiantes (de grado y de posgrado) de la carrera de Antropología de la Facultad de Filosofía y Letras (UBA), de la carrera de Antropología de la Facultad de Ciencias Naturales y Museo (UNLP) y de la carrera de Antropología de IDAES-UNSAM. El objetivo de la publicación es divulgar trabajos de investigadores jóvenes del ámbito de las ciencias sociales en general y la antropología en particular)</span></li>
    </ul>
    <br>
    <p style="text-align: justify"><span style="font-size: 14pt"><strong>Artes</strong></span></p>
    <ul style="text-align: justify">
    <li><span style="font-size: 14pt"><a href="http://ojs.upv.es/index.php/CAA" target="_blank" rel="noopener noreferrer"><strong>Con A de animación </strong></a> (Revista de investigación centrada en el estudio de los aspectos teóricos, técnicos, artísticos y humanos de la producción de imagen animada. Se trata de una iniciativa pionera en lengua castellana, que sigue el ejemplo de otras revistas internacionales de prestigio, nacidas en el seno de la Society for Animation Studies. La revista pretende divulgar la imagen animada como expresión artística, como profesión, como valor cultural, y como elemento para vehicular reflexión sobre cualquier aspecto de nuestro momento y nuestra sociedad. Grupo de Investigación en Animación : Arte e Industria)</span></li>
    </ul>
    <br>
    <p style="text-align: justify"><span style="font-size: 14pt"><strong>Ciencias de la Comunicación</strong></span></p>
    <ul style="text-align: justify">
    <li><span style="font-size: 14pt"><strong><a href="http://www.icono14.net/ojs/index.php/icono14/issue/view/32" target="_blank" rel="noopener noreferrer">ICONO14</a></strong> (Es una publicación temática editada en español, con resúmenes, palabras clave e interfaz web en inglés. Focalizada en el área de las ciencias de la Comunicación, acepta aportaciones interdisciplinares que aborden aspectos vinculados con la comunicación y las tecnologías emergentes)</span></li>
    <li><span style="font-size: 14pt"><strong><a href="http://palabraclave.unisabana.edu.co/index.php/palabraclave/index" target="_blank" rel="noopener noreferrer">Palabra Clave</a></strong><strong> </strong>(Revista semestral que propone un espacio para la difusión de nuevo conocimiento como resultado de la investigación y la reflexión sobre temas vinculados con la comunicación y su relación con la sociedad. El contenido de la publicación tiene un enfoque científico, analítico y crítico, soportado en el humanismo y con claros aportes al desarrollo y a la solución, desde la comunicación, de los problemas de la sociedad)</span></li>
    </ul>
    <br>
    <p style="text-align: justify"><span style="font-size: 14pt"><strong>Ciencias de la Documentación</strong><strong> </strong>(Archivología, Bibliotecología)</span></p>
    <ul style="text-align: justify">
    <li><span style="font-size: 14pt"><strong><a href="http://www.abinia.org/" target="_blank" rel="noopener noreferrer">ABINA</a></strong> (Revista Asociación Bibliotecas Nacional de Iberoamérica) Órgano de difusión de ABINIA con información relevante en Bibliotecología y Ciencias de la Información: noticias, eventos, proyectos, temas de interés, misceláneas, publicaciones, etc. La Asociación de Bibliotecas Nacionales de Iberoamérica (ABINIA), fundada en México el 14 de diciembre de 1989, es un foro interregional que reunió a las 22 Bibliotecas Nacionales de Iberoamérica.</span></li>
    <li><span style="font-size: 14pt"><strong><a href="http://www.atoz.ufpr.br/index.php/atoz/issue/current" target="_blank" rel="noopener noreferrer">A.toZ. : Novas Práticas em Informaçao e Conhecimento </a></strong>(Universidade Federal do Paraná. Brasil)</span></li>
    <li><span style="font-size: 14pt"><a href="http://www.inti.gob.ar/celulosaypapel/biblioteca/pdf/boletinConservacionyrestauracion.pdf" target="_blank" rel="noopener noreferrer"><strong>Boletín sobre Conservación y Restauración</strong></a> (INTI-Celulosa y Papel/ Extensión y Desarrollo &#8211; Biblioteca)</span></li>
    <li><span style="font-size: 14pt"><a href="http://crl.acrl.org/content/current" target="_blank" rel="noopener noreferrer"><strong>College &amp; Research Libraries</strong></a> (American Library Association)</span></li>
    <li><span style="font-size: 14pt"><a href="http://sites.google.com/site/criticabibliotecologica/vol-3-no-2" target="_blank" rel="noopener noreferrer"><strong>Crítica Bibliotecológica</strong></a> (Revista de las Ciencias de la Información Documental. México)</span></li>
    <li><span style="font-size: 14pt"><a href="http://www.revistacts.net/volumen-9-numero-27" target="_blank" rel="noopener noreferrer"><strong>CTS &#8211; Revista Iberoamericana de Ciencia, Tecnología y Sociedad</strong></a>  (<strong>CTS</strong> es un ámbito para discutir las relaciones entre ciencia, tecnología y sociedad desde una perspectiva plural e interdisciplinaria y una mirada iberoamericana. Con el propósito de promover la reflexión y el debate sobre la articulación de la ciencia y la tecnología con el ambiente cultural, político y social, CTS brinda acceso libre a todos sus contenidos e invita al público interesado a participar con sus opiniones. Es una iniciativa conjunta de la Organización de Estados Iberoamericanos (OEI), el Centro de Estudios sobre Ciencia, Desarrollo y Educación Superior &#8211; REDES (Argentina) y el Instituto Universitario de Estudios de la Ciencia y la Tecnología de la Universidad de Salamanca (España). Entre 2009 y 2012 contó con el apoyo de la Agencia Española de Cooperación Internacional para el Desarrollo (AECID)</span></li>
    <li><span style="font-size: 14pt"><strong><a href="http://www.elprofesionaldelainformacion.com/index.html" target="_blank" rel="noopener noreferrer">El profesional de la información</a></strong> (Revista internacional, científica y profesional sobre información, bibliotecas y nuevas tecnologías de la información)</span></li>
    <li><span style="font-size: 14pt"><a href="http://eprints.rclis.org/" target="_blank" rel="noopener noreferrer"><strong>E-LIS</strong></a> /Es uno de los más grandes repositorios internacional abierto en el campo de la  Biblioteconomía y las Ciencias de la Documentación/Información)</span></li>
    <li><span style="font-size: 14pt"><a href="http://dialnet.unirioja.es/servlet/listaarticulos?tipo_busqueda=VOLUMEN&amp;revista_busqueda=7671&amp;clave_busqueda=8" target="_blank" rel="noopener noreferrer"><strong>Enl@ce</strong></a> (Revista venezolana de Información, Tecnología y Conocimiento)</span></li>
    <li><span style="font-size: 14pt"><a href="https://www.bn.gov.ar/" target="_blank" rel="noopener noreferrer"><strong>Estado Crítico</strong></a> (Revista bimensual de la Biblioteca Nacional Mariano Moreno</span><br />
    <span style="font-size: 14pt">Año I. Nº 1. Marzo de 2015)</span></li>
    <li><span style="font-size: 14pt"><a href="http://p3.usal.edu.ar/index.php/huellas" target="_blank" rel="noopener noreferrer"><strong>Huellas en papel </strong></a> (Publicación periódica académica cuyo objetivo es difundir los contenidos y las actividades de la Biblioteca y Archivo Históricos de la Universidad del Salvador &#8211; USAL, como así también los principios de preservación, conservación y restauración de documentos)</span></li>
    <li><span style="font-size: 14pt"><a href="http://www.ibersid.eu/ojs/index.php/ibersid/issue/archive" target="_blank" rel="noopener noreferrer"><strong>Ibersid: revista internacional de sistemas de información y documentación</strong></a> (Es una publicación anual arbitrada dedicada a la gestión de la información y el conocimiento desde una óptica sistémica e interdisciplinar. Es el órgano de comunicación de Ibersid, una red internacional con presencia en África, América y Europa, que tiene su sede en Zaragoza (España), y que celebra congresos anuales)</span></li>
    <li><span style="font-size: 14pt"><a href="http://www.nosolousabilidad.com/archivo.htm" target="_blank" rel="noopener noreferrer"><strong>No Solo Usabilidad</strong></a> (es una revista electrónica (ISSN 1886-8592) Open Access y de carácter multidisciplinar, que pretende servir de herramienta para la difusión, divulgación e intercambio de conocimiento entre profesionales e investigadores. Cualquier profesional o investigador puede enviar sus trabajos para que sean publicados en la revista)</span></li>
    <li><span style="font-size: 14pt"><a href="http://www.palabraclave.fahce.unlp.edu.ar/" target="_blank" rel="noopener noreferrer"><strong>Palabra Clave</strong><strong> </strong></a>(Es una publicación académica electrónica de periodicidad semestral, cuyas entregas aparecen en abril y octubre de cada año. La revista cubre todos los temas que hacen a la Bibliotecología y la Ciencia de la Información, en un sentido amplio e interdisciplinario, con un enfoque científico, tecnológico, histórico o profesional. Todos los artículos recibidos son sometidos a la evaluación de al menos dos expertos, conservando siempre el anonimato de los autores y de los evaluadores)</span></li>
    <li><span style="font-size: 14pt"><strong><a href="http://periodicos.ufpb.br/ojs2/index.php/pgc/issue/current/showToc" target="_blank" rel="noopener noreferrer">Perspectivas em Gestão &amp; Conhecimento</a></strong> (Revista de la Universidade Federal da Paraíba)</span></li>
    <li><span style="font-size: 14pt"><a href="http://revistes.uab.cat/redes" target="_blank" rel="noopener noreferrer"><strong>Redes</strong></a> (Revista hispana para el análisis de redes sociales; es una revista académica publicada conjuntamente por egolab-GRAFO (UAB) y el LRPC (US), orientada a ofrecer resultados de investigación sobre redes sociales y contribuciones teóricas con una perspectiva reticular, especialmente desde y para el mundo iberoamericano)</span></li>
    <li><span style="font-size: 14pt"><a href="http://redc.revistas.csic.es/index.php/redc/issue/current" target="_blank" rel="noopener noreferrer"><strong>Revista Española de Documentación Científica –REDC</strong></a> (Se publica trimestralmente desde 1977 en el Consejo Superior de Investigaciones Científicas (CSIC). Esta Revista tiene por objetivo principal servir de vehículo de transmisión del conocimiento a la comunidad científica que realiza su labor investigadora en el sector de la Información y Documentación Científica, así como a aquellos que hacen uso de información científico-técnica y estratégica para la toma de decisiones en materia de política científica. La REDC incluye originales de investigación de naturaleza experimental y teórica. Los títulos, resúmenes y palabras-clave de los artículos se publican también en lengua inglesa, a fin de facilitar su proyección internacional)</span></li>
    <li><span style="font-size: 14pt"><a href="http://diarium.usal.es/merlo/rbaa/" target="_blank" rel="noopener noreferrer"><strong>Revistas de Biblioteconomía</strong></a> (Directorios y recursos en los que se recopilan revistas académicas y profesionales sobre bibliotecas y materias relacionadas editadas en todo el mundo. Los diferentes recursos han sido elaborados por José Antonio Merlo Vega, profesor del Departamento de Biblioteconomía y Documentación de la Universidad de Salamanca, a partir de las fuentes disponibles o de las propias páginas de cada revista. La intención de esta colección de recursos sobre revistas de biblioteconomía y áreas afines es servir de apoyo a investigadores, profesionales y estudiantes)</span></li>
    <li><span style="font-size: 14pt"><a href="http://www.ibersid.eu/ojs/index.php/scire/issue/archive"  target="_blank" rel="noopener noreferrer"><strong>Scire: Representación y Organización del Conocimiento</strong></a> (Es una publicación semestral de carácter interdisciplinar sobre la representación, normalización, tratamiento, recuperación y comunicación de la información y el conocimiento)</span></li>
    </ul>
    <br>
    <p style="text-align: justify"><span style="font-size: 14pt"><strong>Ciencias de la Educación</strong></span></p>
    <ul style="text-align: justify">
    <li><span style="font-size: 14pt"><strong><a href="http://www.revistacampusvirtuales.es/index.php/es/revistaes/numeroactual" target="_blank" rel="noopener noreferrer">Campus Virtuales</a></strong> (Es una publicación semestral científica de investigación multidisciplinar en relación con el uso de las Tecnologías de la Información y la comunicación (TIC) en la educación. Con una doble vocación, recoger las experiencias de investigadores a título personal y de los Campus universitarios institucionales. De ámbito latinoamericano y editada desde octubre de 2012, la revista cuenta con un consejo científico asesor formado por investigadores prestigiosos en este ámbito tanto de las universidades españolas como de centros de investigación e instituciones superiores de América y Europa esencialmente. La gestión de manuscritos se realiza a través de la Plataforma OJS de manera profesional asegurando así la revisión por pares ciegos)</span></li>
    <li><span style="font-size: 14pt"><strong><a href="http://www.revistacomunicar.com/index.php?contenido=revista&amp;numero=actual" target="_blank" rel="noopener noreferrer">Comunicar </a></strong> (es una revista científica de ámbito iberoamericano que pretende fomentar el intercambio de ideas, la reflexión y la investigación entre dos ámbitos que se consideran prioritarios para el desarrollo de los pueblos: la educación y la comunicación. España)</span></li>
    <li><span style="font-size: 14pt"><a href="http://propuestaeducativa.flacso.org.ar/" target="_blank" rel="noopener noreferrer"><strong>Propuesta Educativa</strong></a> (Publicación del Área de Educación de la Facultad Latinoamericana de Ciencias Sociales &#8211; FLACSO &#8211; Sede Argentina. Se trata de una revista académica que enfoca temas de interés para la educación y está dirigida a investigadores, directivos, supervisores, docentes, profesores, estudiantes de grado y postgrado. En ella se publican artículos inéditos de investigación y aportes de discusión de problemas educativos, en nuestro país y el mundo)</span></li>
    <li><span style="font-size: 14pt"><a href="http://www.ride.org.mx/index.php/RIDE/index" target="_blank" rel="noopener noreferrer"><strong>RIDE &#8211; Revista Iberoamericana para la Investigación y el Desarrollo Educativo</strong></a> (Es una publicación académica arbitrada en formato electrónico con una orientación multidisciplinaria. Tiene por objeto publicar textos originales universitarios de divulgación que se centren en la confluencia de los ámbitos temáticos propios de la investigación y desarrollo en la educación. Además, la revista pretende ser una plataforma para la difusión de novedades editoriales relevantes de este mismo ámbito)</span></li>
    <li><span style="font-size: 14pt"><strong><a href="http://www.rinace.net/riejs/numeros/vol1_num1.html" target="_blank" rel="noopener noreferrer">Riejs </a></strong>(Revista Internacional de Educación para la Justicia Social. Es una publicación académica en formato electrónico arbitrada y editada por el Grupo de Investigación «Cambio Educativo para la Justicia Social» de la Universidad Autónoma de Madrid, España en colaboración con la Red Iberoamericana de Investigación sobre Cambio y Eficacia Escolar &#8211; RINACE-)</span></li>
    <li><span style="font-size: 14pt"><a href="http://www.uv.es/RELIEVE/" target="_blank" rel="noopener noreferrer"><strong>Relieve</strong></a><a href="http://www.uv.es/RELIEVE/" target="_blank" rel="noopener noreferrer"><strong> </strong></a>(Revista electrónica que tiene una orientación académica con un exigente proceso de revisión por expertos  y es totalmente gratuita. Aspira a ser un instrumento de comunicación para la comunidad educativa, en particular en temas de <em>investigación</em> y de <em>evaluación educativa</em>, entendidas en un sentido amplio. Pretende aprovechar eficazmente las posibilidades de comunicación e interactividad que ofrece Internet. Está auspiciada por <a href="http://www.uv.es/aidipe" target="_blank" rel="noopener noreferrer">AIDIPE</a> (<em>Asociación Interuniversitaria de Investigación en Pedagogía</em>) cuya sede social está en Pg. de la Vall d&#8217;Hebron, 171. 08035-Barcelona. <a href="http://www.uv.es/aidipe" target="_blank" rel="noopener noreferrer">AIDIPE</a> también edita, en formato impreso, la Revista de Investigación Educativa (<a href="http://www.um.es/~depmide/RIE" target="_blank" rel="noopener noreferrer">RIE</a>)</span></li>
    <li><span style="font-size: 14pt"><a href="http://revistas.uv.mx/index.php/cpue/issue/current" target="_blank" rel="noopener noreferrer"><strong>Revista</strong><strong> </strong><strong>CPU-e</strong></a><a href="http://www.uv.mx/cpue/num15/contenido.html" target="_blank" rel="noopener noreferrer"> </a>(Revista de Investigación Educativa, es una publicación de investigación y desarrollo; seriada, de aparición semestral y editada en una plataforma electrónica para consulta exclusiva a través de internet, de acceso gratuito y libre impresión. Su objetivo primordial es difundir resultados y avances significativos de investigaciones realizadas en el extenso campo de la educación, constituyéndose, por ende, en un acervo bibliográfico de artículos originales que registra tanto el estado de la cuestión como las etapas previas en el progreso de las investigaciones. Está dirigida a investigadores nacionales y extranjeros de cualquier área del conocimiento, principalmente hispanohablantes, cuyos intereses académicos entren en contacto con el campo de las investigaciones en educación; docentes en educación básica, media y superior, estudiantes de posgrado, licenciatura y educación normal; funcionarios de los tres niveles de gobierno cuyos cargos estén vinculados con temas educativos. Universidad Veracruzana)</span></li>
    </ul>
    <br>
    <p style="text-align: justify"><span style="font-size: 14pt"><strong>Ciencias Sociales / Cultura</strong></span></p>
    <ul style="text-align: justify">
    <li><span style="font-size: 14pt"><a href="http://revistas.up.edu.pe/index.php/apuntes/issue/current" target="_blank" rel="noopener noreferrer"><strong>Apuntes</strong></a> (Revista semestral de ciencias sociales editada por el Centro de Investigación de la Universidad del Pacífico (Perú) desde 1973. La revista tiene por finalidad publicar y difundir estudios realizados sobre economía, sociología/antropología, ciencias políticas e historia latinoamericana. Apuntes publica en cada número dos secciones. La primera se compone de artículos de investigación originales y la segunda está compuesta por notas y reseñas de libros publicados recientemente. Todos los artículos envíados a Apuntes pasan por un proceso de evaluación externa a cargo de al menos dos expertos en la materia. La edición impresa de Apuntes se encuentra catalogada en las siguientes bases de datos: International Bibliography of Social Sciences, Periodicals Index Online, PAIS International, DIALNET, LATINDEX (Catálogo) y ULRICH&#8217;S)</span></li>
    <li><span style="font-size: 14pt"><a href="http://revista.escaner.cl/" target="_blank" rel="noopener noreferrer"><strong>Escáner cultural</strong></a> (Es una revista virtural que se publica de manera gratuita en Internet. Por ser abierta, pluralista y participativa constituye una instancia de reflexión, registro e investigación en torno a todo tipo de manifestación artística inédita, alternativa, no convencional, innovadora, realizada principalmente por creadores latinoamericanos. Su interés principal se centra en difundir la obra de creadores alternativos que desarrollen un trabajo serio, constante e innovador)</span></li>
    <li><span style="font-size: 14pt"><strong><a href="http://www.flacso.org/secretaria-general/publicaciones-secretar-general" target="_blank" rel="noopener noreferrer">Flacso </a></strong>(Facultad Latinoamericana de Ciencias Sociales. Publicaciones de la Secretaría General. Descarga gratuita)</span></li>
    <li><span style="font-size: 14pt"><a href="http://teknokultura.net/index.php/tk" target="_blank" rel="noopener noreferrer"><strong>Teknokultura</strong></a> (Revista de Cultura Digital y Movimientos Sociales que se resiste a la asimilación de los estudios sociales de la tecnología y la cibercultura por sectores hegemónicos y, por tanto, a que se relegue a grupos y colectivos que apuestan por modos distintos de producción y colectivización del capital cultural. Al igual que un laboratorio de experimentación &#8211; hacklab &#8211; , Teknokultura reúne esfuerzos colectivos con el propósito de profundizar en contenciosos tecnosociales, posicionarse ante los mismos e incitar «participaciones aumentadas». Universidad Complutense de Madrid)</span></li>
    </ul>
    <ul style="text-align: justify">
    <li><span style="font-size: 14pt"><a href="http://aprendeenlinea.udea.edu.co/revistas/index.php/trashumante/issue/current/showToc" target="_blank" rel="noopener noreferrer"><strong>Trashumante. Revista Americana de Historia Social</strong></a> (Es una publicación semestral creada por la iniciativa y el apoyo del Grupo de Investigación en Historia Social (GIHS) de la Facultad de Ciencias Sociales y Humanas de la Universidad de Antioquia (Medellín, Colombia) y por la División de Ciencias Sociales y Humanidades de la Universidad Autónoma Metropolitana (UAM), unidad Cuajimalpa (México, Distrito Federal). La revista se ha constituido como un medio para la difusión de contribuciones a la historiografía social en sus múltiples acepciones académicas)</span></li>
    </ul>
    <br>
    <p style="text-align: justify"><span style="font-size: 14pt"><strong>Estudios de Género</strong></span></p>
    <ul style="text-align: justify">
    <li><span style="font-size: 14pt"><strong><a href="http://www.upo.es/revistas/index.php/ambigua/index" target="_blank" rel="noopener noreferrer">Ambigua : Revista de Investigaciones sobre Género y Estudios Culturales</a> </strong>(Es una publicación electrónica que aparece en forma de monográfico y aborda aquellos temas que se encuadran dentro de las investigaciones sobre el género y los estudios culturales desde una perspectiva interdisciplinar)</span></li>
    </ul>
    <br>
    <p style="text-align: justify"><span style="font-size: 14pt"><strong>Filosofía</strong></span></p>
    <ul style="text-align: justify">
    <li><span style="font-size: 14pt"><a href="http://www.agoraphilosophica.com/index.html" target="_blank" rel="noopener noreferrer"><strong>Agora Philosophica</strong></a> (Revista marplatense de Filosofía. Es una publicación de la Asociación Argentina de Investigaciones Éticas. Se edita semestralmente en los meses de junio y diciembre. Tiene como objetivo la publicación de artículos de filosofía originales, comunicaciones, presentaciones a congresos, estudios críticos, traducciones, ensayos cortos, reseñas bibliográficas, calendarios de reuniones, foros de discusión, comentarios de trabajos científicos y de la especialidad)</span></li>
    </ul>
    <br>
    <p style="text-align: justify"><span style="font-size: 14pt"><strong>Geografía</strong></span></p>
    <ul style="text-align: justify">
    <li><span style="font-size: 14pt"><a href="http://www.geograficando.fahce.unlp.edu.ar/" target="_blank" rel="noopener noreferrer"><strong>Geograficando</strong> </a>(Publicación semestral -junio y diciembre- del Departamento de Geografía de la Facultad de Humanidades y Ciencias de la Educación de la Universidad Nacional de La Plata. Está dirigida a científicos y profesionales, y comenzó a editarse en el año 2005 (ISSN 1850-1885). El objetivo de la revista consiste en convocar a geógrafos y estudiosos de las ciencias sociales y las humanidades para construir un pensar geográfico con responsabilidad social y promover el debate sobre posibles alternativas de articulación para la generación de conocimientos estratégicos desde nuestra “situacionalidad” y la producción de un discurso significativo. La revista aceptará artículos originales en las áreas concernientes a la disciplina. El proceso de evaluación y aprobación de los artículos es realizado por referato externo)</span></li>
    <li><span style="font-size: 14pt"><a href="http://institucional.us.es/tamericanistas/" target="_blank" rel="noopener noreferrer"><strong>Temas Americanistas</strong></a> (Revista editada por el Grupo de investigación «Andalucía y América : tierra y sociedad»)</span></li>
    </ul>
    <br>
    <p style="text-align: justify"><span style="font-size: 14pt"><strong>Historia</strong></span></p>
    <ul style="text-align: justify">
    <li><span style="font-size: 14pt"><strong><a href="http://oozebap.org/africaneando/index.htm" target="_blank" rel="noopener noreferrer">Africaneando : Revista de actualidad y experiencias</a></strong> (En línea a texto completo)</span></li>
    <li><span style="font-size: 14pt"><a href="http://www.aletheia.fahce.unlp.edu.ar/front_page" target="_blank" rel="noopener noreferrer"><strong>Aletheia</strong></a> (es una revista electrónica semestral sobre problemáticas de historia y memoria colectiva en torno al pasado reciente argentino y de las sociedades latinoamericanas, en sus aspectos sociales, económicos, políticos y culturales, editada por la Maestría en Historia y Memoria de la Facultad de Humanidades y Ciencias de la Educación de la Universidad Nacional de La Plata)</span></li>
    <li><span style="font-size: 14pt"><a href="http://alhe.mora.edu.mx/index.php/ALHE/issue/current" target="_blank" rel="noopener noreferrer"><strong>Alhe</strong><strong> </strong></a>(América Latina en la Historia Económica. México. Es una publicación cuatrimestral que difunde ensayos resultado de investigaciones originales sobre la historia material de Latinoamérica, con el propósito de estimular el debate historiográfico, los estudios interdisciplinarios y el análisis comparativo. Algunos artículos en texto completo)</span></li>
    <li><span style="font-size: 14pt"><a href="http://catedra-laicidad.unam.mx/?page_id=122" target="_blank" rel="noopener noreferrer"><strong>Colección de cuadernos “Jorge Carpizo”</strong><strong> </strong></a>(El Instituto de Investigaciones Jurídicas de la UNAM acaba de lanzar una colección de fascículos sobre laicidad. Se trata de 30 fascículos de los cuales la mitad ya está en línea y disponibles de manera gratuita, y en los cuales se problematiza el vinculo entre laicidad y resistencia, laicidad y modernidad, laicidad y constitución, etc. Las obras han sido producidas por filósofos, juristas, historiadores y científicos políticos de Europa y América. Textos completos en línea)</span></li>
    <li><span style="font-size: 14pt"><a href="http://es.wikipedia.org/wiki/Anexo:Revistas_de_estudios_africanos" target="_blank" rel="noopener noreferrer"><strong>Colección Revistas de Estudios Africanos</strong></a> (o africanistas, listado de publicaciones periódicas académicas relacionadas con los diferentes campos de estudios africanos)</span></li>
    <li><span style="font-size: 14pt"><a href="http://www.contenciosa.org/Sitio/EquipoEditorial.aspx" target="_blank" rel="noopener noreferrer"><strong>Contenciosa</strong></a> (Revista digital semestral radicada en el Centro de Estudios Sociales Interdisciplinarios del Litoral, emergente de la tarea conjunta de investigadores de las Universidades Nacionales del Litoral y de Rosario y Complutense de Madrid. Recoge tanto estudios de caso como análisis en perspectivas transnacionales y comparadas, relativos a los procesos represivos contemporáneos en los países iberoamericanos y al análisis de las actitudes y comportamientos sociales en dichos contextos)</span></li>
    <li><span style="font-size: 14pt"><a href="http://ppct.caicyt.gov.ar/index.php/coordenadas/issue/current" target="_blank" rel="noopener noreferrer"><strong>Coordenadas</strong></a> (Revista de Historia local y regional del Grupo de Investigación y Extensión en Historia Regional del Centro de Investigaciones Históricas de la Universidad Nacional de Río Cuarto (GIEHR-CIHUNRC), intenta erigirse como un espacio de socialización de resultados inéditos de investigación histórica con énfasis en perspectivas locales y regionales. Su objetivo general es promover el intercambio conceptual, historiográfico y metodológico específicos de la disciplina Histórica y, en particular, del campo de la Historia regional)</span></li>
    <li><span style="font-size: 14pt"><strong><a href="http://ppct.caicyt.gov.ar/index.php/corpus/index" target="_blank" rel="noopener noreferrer">Corpus. Archivos virtuales de la alteridad americana </a></strong>(Revista electrónica de divulgación, análisis y crítica de fuentes inéditas o desconocidas sobre la historia o etnografía de los pueblos originarios,  campesinos, discusiones en torno a raza, y a otras alteridades del continente americano)</span></li>
    <li><span style="font-size: 14pt"><a href="http://dialnet.unirioja.es/servlet/revista?codigo=19471" target="_blank" rel="noopener noreferrer"><strong>Diálogo Político</strong></a> (Publicación periódica de la Fundación Konrad Adenauer, sólidamente entroncada en la tradición del Humanismo Cristiano. Con el objetivo principal de fortalecer el diálogo político en América Latina, aborda en cada número un tema de especial relevancia tanto por su actualidad como por su proyección futura. Está enfocada fundamentalmente, en dirigentes políticos, sociales y culturales, como así también en formadores de opinión, periodistas, consultores, docentes universitarios y profesionales de diferentes áreas. Es una revista trimestral con formato libro y se distribuye a lo largo y ancho del continente americano, en la mayor parte de Europa y en ciertas regiones de Asia y África)</span></li>
    <li><span style="font-size: 14pt"><a href="http://publicaciones.sociales.uba.ar/index.php/elatina/issue/current" target="_blank" rel="noopener noreferrer"><strong>e-l@tina &#8211; Revista electrónica de estudios latinoamericanos</strong></a> (Revista electrónica de circulación trimestral que busca promover un enfoque transdisciplinario de las sociedades latinoamericanas)</span></li>
    <li><span style="font-size: 14pt"><a href="http://p3.usal.edu.ar/index.php/epocas/issue/view/246/showToc" target="_blank" rel="noopener noreferrer"><strong>épocas</strong></a> (Es una publicación de la Facultad de Historia, Geografía y Turismo de la Universidad del Salvador dirigida a investigadores, académicos y estudiantes avanzados de Historia y otras ciencias sociales. Centralmente destinada a la comunicación de investigaciones historiográficas, acoge también estudios vinculados con aspectos epistemológicos y metodológicos de la disciplina, así como aportes interdisciplinarios directamente vinculados al saber histórico)</span></li>
    <li><span style="font-size: 14pt"><a href="http://historiacritica.uniandes.edu.co/indexar.php?c=Revista+No+44" target="_blank" rel="noopener noreferrer"><strong>Historia Crítica</strong></a> (Revista del Departamento de Historia de la Universidad de los Andes Bogotá, Colombia. Tiene como objetivo publicar artículos inéditos de autores nacionales y extranjeros, que presenten resultados de investigación histórica o balances historiográficos, así como reflexiones académicas relacionadas con los estudios históricos)</span></li>
    <li><span style="font-size: 14pt"><a href="http://dialnet.unirioja.es/servlet/revista?codigo=8118" target="_blank" rel="noopener noreferrer"><strong>Historia y Sociedad</strong></a><a href="http://www.revistas.unal.edu.co/index.php/hisysoc/issue/view/3453/showToc" target="_blank" rel="noopener noreferrer"><strong> </strong></a>(La revista Historia y Sociedad publicación del Departamento de Historia de la Facultad de Ciencias Humanas y Económicas de la Universidad Nacional de Colombia, sede Medellín, desde sus inicios ha buscado abrir un espacio para la difusión de investigaciones históricas a investigadores nacionales y extranjeros, consolidando además los programas de pregrado, maestría y doctorado que el Departamento viene realizando)</span></li>
    <li><span style="font-size: 14pt"><a href="http://www.unizar.es/historiografias/numeros/1/index1.htm" target="_blank" rel="noopener noreferrer"><strong>Historiografías, revista de historia y teoría</strong><strong> </strong></a>(Publicación semestral electrónica trilingüe dedicada a los estudios historiográficos y a la teoría de la historia. Respaldada por especialistas de ámbito internacional y profesores de distintas universidades,<em> </em><em>Historiografías </em>surge en 2010 de la iniciativa del grupo de trabajo que aglutina el profesor Gonzalo Pasamar en la Universidad de Zaragoza, España)</span></li>
    <li><span style="font-size: 14pt"><a href="http://iidentidadess.wordpress.com/actual/" target="_blank" rel="noopener noreferrer"><strong>Identidades</strong></a> (Revista del Instituto de Estudios Sociales y Políticos de la Patagonia. IESyPPat.</span><br />
    <span style="font-size: 14pt">Facultad de Humanidades y Ciencias Sociales. Universidad Nacional de la Patagonia San Juan Bosco)</span></li>
    <li><span style="font-size: 14pt"><a href="http://revistaillapa.blogspot.com.ar/"target="_blank" rel="noopener noreferrer"><strong>Illapa</strong></a><a href="http://es.scribd.com/doc/42989545/Revista-ILLAPA-n%C2%BA-7-julio-2010" target="_blank" rel="noopener noreferrer"><strong> </strong></a>(Revista latinoamericana de Ciencias Sociales. Perú)</span></li>
    <li><span style="font-size: 14pt"><strong><a href="http://nuevomundo.revues.org/" target="_blank" rel="noopener noreferrer">Nuevo Mundo Nuevos Mundos</a></strong><strong> </strong>(Revista de historia y ciencias sociales que privilegia el comparatismo y las miradas cruzadas sobre las Américas y el Mundo Hispánico)</span></li>
    <li><span style="font-size: 14pt"><a href="http://www.revistas.ufg.br/index.php/Opsis/issue/view/1513/showToc#.VSwsePDAo6k" target="_blank" rel="noopener noreferrer"><strong>Opsis</strong></a> (Publicación semestral de la Unidad Académica Especial de Historia y Ciencias Sociales de la Universidad Federal de Goiás / Regional Catalão. Brasil)</span></li>
    <li><span style="font-size: 14pt"><a href="http://www.polhis.com.ar/" target="_blank" rel="noopener noreferrer"><strong>PolHis</strong></a> (Boletín Bibliográfico Electrónico del Programa Interuniversitario de Historia Política)</span></li>
    <li><span style="font-size: 14pt"><a href="http://www.refa.org.ar/index.php" target="_blank" rel="noopener noreferrer"><strong>REFA &#8211; Revista Electrónica de Fuentes y Archivos</strong></a> (Publicación virtual del Centro de Estudios Históricos Prof. Carlos S. A. Segreti, unidad asociada al CONICET. Está dedicada al análisis de la producción historiográfica local, provincial y nacional, el estudio del patrimonio documental que guardan los archivos del país y las nuevas formas de interrogar a las fuentes a partir de los recientes abordajes teórico-metodológicos de la disciplina histórica. Está abierta, además, a la recepción de información y estudios sobre patrimonio documental y repositorios de otros países del mundo. Los trabajos incluidos son seleccionados mediante un proceso de arbitraje llevado a cabo por especialistas)</span></li>
    <li><span style="font-size: 14pt"><strong><a href="http://www.revista-digital.ceemi-unr.com.ar/" target="_blank" rel="noopener noreferrer">Reseñas.Net</a></strong><strong> </strong>(Revista de reseñas bibliográficas de Historia y Ciencias Sociales en la red es una publicación del Centro de Estudios “Espacio, Memoria e Identidad” (CEEMI), perteneciente a la Facultad de Humanidades y Artes y a la Facultad de Ciencia Política y Relaciones Internacionales (RRII) de la Universidad Nacional de Rosario-Argentina)</span></li>
    <li><span style="font-size: 14pt"><strong><a href="http://reydesnudo.com.ar/rey-desnudo" target="_blank" rel="noopener noreferrer">Rey Desnudo </a></strong>(Es una revista de acceso abierto de publicación semestral dedicada a los libros de historia. Nacida a partir de la inquietud de un conjunto de historiadores de distintas áreas, ofrece una mirada sobre la producción historiográfica en diversos campos, a través de comentarios de libros tanto recientes como clásicos, y comentarios bibliográficos en torno a temáticas específicas)</span></li>
    <li><span style="font-size: 14pt"><a href="http://www.riehr.com.ar/index.php" target="_blank" rel="noopener noreferrer"><strong>RIEHR</strong> </a>(Los objetivos de la <strong>Red Interdisciplinaria de Estudios sobre Historia Reciente</strong> (RIEHR) apuntan a contribuir a la consolidación de un espacio colectivo apropiado para el intercambio trans- e interdisciplinario entre quienes investigan sobre la historia reciente de la Argentina y de los países de la región que han atravesado procesos políticos de carácter traumático)</span></li>
    <li><span style="font-size: 14pt"><a href="http://sociedadesprecapitalistas.fahce.unlp.edu.ar/" target="_blank" rel="noopener noreferrer"><strong>Sociedades precapitalistas</strong> </a>(Publicación semestral científico-académica, electrónica, cuyo objetivo es difundir estudios historiográficos focalizados en la génesis, morfología y dinámica de las estructuras sociales anteriores al capitalismo. Publica trabajos de investigación originales e inéditos)</span></li>
    <li><span style="font-size: 14pt"><a href="http://institucional.us.es/tamericanistas/" target="_blank" rel="noopener noreferrer"><strong>Temas Americanistas</strong></a> (Revista editada por el Grupo de investigación «Andalucía y América : tierra y sociedad»)</span></li>
    <li><span style="font-size: 14pt"><a href="http://www.tiemposmodernos.org/tm3/index.php/tm" target="_blank" rel="noopener noreferrer"><strong>Tiempos Modernos</strong></a> (Revista electrónica de Historia Moderna)</span></li>
    <li><span style="font-size: 14pt"><a href="https://tiempopresenterevhist.wordpress.com/category/numero-2/" target="_blank" rel="noopener noreferrer"><strong>Tiempo Presente. Revista de Historia</strong></a> (Editada en Cáceres. Departamento de Historia. Facultad de Filosofía y Letras. Universidad de Extremadura. Grupo de Historia del Tiempo Presente)</span></li>
    </ul>
    <br>
    <p style="text-align: justify"><span style="font-size: 14pt"><strong>Literatura</strong></span></p>
    <ul style="text-align: justify">
    <li><span style="font-size: 14pt"><a href="http://revistes.ub.edu/index.php/AFLC target="_blank" rel="noopener noreferrer""><strong>Anuari de filologia. Literatures contemporànies</strong></a> (Revista de libre acceso que tiene como objetivo la difusión de artículos de investigación y reseñas literarias de alto prestigio (con acceso abierto) i, por lo tanto, incluye artículos monográficos de obras y autores así como estudios de teoría de la literatura. Los artículos se publican en las lenguas impartidas en la Facultad de Filología de la Universidad de Barcelona (catalán, español, euskera, gallego, latín, griego, inglés, alemán, italiano, francés, árabe, hebreo, neerlandés, sueco, ruso, polaco y turco). El espectro temporal y temático de los artículos de la sección Literaturas Contemporáneas del Anuario cubre los siglos XIX, XX y XXI, y se dirige a científicos literarios a escala internacional. El Anuario de Filología. Literaturas Contemporáneas cuenta con un Consejo Asesor Internacional que colabora con el Consejo de Redacción en el proceso de revisión y aceptación de los artículos por pares (peer-review). Universitat de Barcelona: Facultat de Filologia)</span></li>
    <li><span style="font-size: 14pt"><strong><a href="http://www.olivar.fahce.unlp.edu.ar/" target="_blank" rel="noopener noreferrer">Olivar </a></strong>(Revista científica semestral (junio y diciembre) que publica artículos originales e inéditos, notas, documentos, entrevistas y reseñas críticas sobre temas referidos a la literatura y la cultura española de todos los tiempos como también a sus conexiones con el universo americano)</span></li>
    </ul>
    <br>
    <p style="text-align: justify"><span style="font-size: 14pt"><strong>Psicología</strong></span></p>
    <ul>
    <li style="text-align: justify"><span style="font-size: 14pt"><a href="http://aprendeenlinea.udea.edu.co/revistas/index.php/affectiosocietatis/issue/current" target="_blank" rel="noopener noreferrer"><strong>Affectio Societatis</strong></a> (Es una publicación del Departamento de Psicoanálisis de la Universidad de Antioquia (Medellín-Colombia). Creada en el año de 1998 y concebida como un espacio de difusión académica tanto de las actividades propias del Departamento de Psicoanálisis, como del psicoanálisis en general, va dirigida a docentes, investigadores, estudiantes y todos aquellos profesionales interesados en el ámbito del psicoanálisis)</span></li>
    <li style="text-align: justify"><span style="font-size: 14pt"><a href="http://revistas.um.es/analesps/" target="_blank" rel="noopener noreferrer"><strong>Anales de Psicología</strong><strong> </strong></a>(Revista de las diversas áreas temáticas de la psicología científica.  Universidad de Murcia, España)</span></li>
    <li style="text-align: justify"><span style="font-size: 14pt"><strong><a href="http://revistas.unc.edu.ar/index.php/aifp" target="_blank" rel="noopener noreferrer">Anuario de Investigaciones de la Facultad de Psicología</a></strong> (Tiene como objetivo difundir los trabajos producidos por los grupos de investigación de esta unidad académica. Esta publicación está editada por la Secretaría de Ciencia y Técnica de la Facultad de Psicología, Universidad Nacional de Córdoba)</span>
    </li>
    <li style="text-align: justify"><span style="font-size: 14pt"><a href="http://www.aperturas.org/revistas.php?n=actual" target="_blank" rel="noopener noreferrer"><strong>Aperturas psicoanalíticas</strong></a> (Revista que incluye trabajos sobre teoría, psicopatologíay técnica terapéutica en psicoanálisis y psicoterapia psicoanalítica impregnados de la visión integradora que la inspira: aperturas dentro del psicoanálisis y, también, al diálogo y confrontación con otras disciplinas como psicología cognitiva, neurociencia, lingüística, epistemología, etc. España)</span></li>
    <li style="text-align: justify"><span style="font-size: 14pt"><strong><a href="http://revistas.urosario.edu.co/index.php/apl/issue/archive" target="_blank" rel="noopener noreferrer">Avances en Psicología Latinoamericana</a></strong> (Publicación científica, con periodicidad semestral, que publica artículos sobre psicología, o áreas relacionadas, en español, portugués, francés, inglés e italiano, con resumen y palabras clave, obtenidas del Thesaurus de la American Psychological Association, en español e inglés. Universidad de Rosario)</span></li>
    <li style="text-align: justify"><span style="font-size: 14pt"><a href="http://www.uv.es/seoane/boletin/previos/index.html" target="_blank" rel="noopener noreferrer"><strong>Boletín de Psicología</strong></a> (Revista dedicada a la com­prensión de los fenómenos psicológicos y su manifestación en los distintos ámbitos de la vida personal y social. Desde los comienzos de los años ochenta viene difundiendo las aportaciones teóricas y empíricas de especialistas de distintos campos, aunque dedica es­pecial atención a las dimensiones teóricas y conceptuales. Está in­corpora­da a las bases de datos internacionales. Universidad de Valencia, España)</span></li>
    <li style="text-align: justify"><span style="font-size: 14pt"><a href="http://www.revistaenlaces.com.ar/" target="_blank" rel="noopener noreferrer"><strong>Enlaces</strong></a> (Revista de Psicoanálisis y Cultura)</span></li>
    <li style="text-align: justify"><span style="font-size: 14pt"><a href="http://www.funlam.edu.co/poiesis/" target="_blank" rel="noopener noreferrer"><strong>Poiesis</strong></a> (Revista electrónica de psicología social)</span></li>
    <li style="text-align: justify"><span style="font-size: 14pt"><a href="http://www.psicothema.com/default.asp" target="_blank" rel="noopener noreferrer"><strong>Psicothema</strong></a> (Revista editada conjuntamente por la Facultad de Psicología de la Universidad de Oviedo y el Colegio Oficial de Psicólogos de Asturias)</span></li>
    <li style="text-align: justify"><span style="font-size: 14pt"><a href="http://psikeba.wordpress.com/"target="_blank" rel="noopener noreferrer"><strong>Psikeba</strong></a><a href="http://www.psikeba.com.ar/numero/actual.htm"><strong> </strong></a>(Revista de Psicoanálisis y Estudios Culturales. Buenos Aires. Argentina)</span></li>
    <li style="text-align: justify"><span style="font-size: 14pt"><a href="http://revistas.unc.edu.ar/index.php/racc" target="_blank" rel="noopener noreferrer"><strong>Revista Argentina de Ciencia del Comportamiento</strong></a> (RACC, es una publicación trimestral que pretende cubrir un amplio espectro de investigaciones y práctica en Psicología y ciencias afines (pedagogía, biología, medicina, lingüística, neurociencias, etc) . Su objetivo principal es promover la difusión nacional e internacional de las investigaciones empíricas en estas áreas. Ingresada en las principales bases de datos bibliométricos, entre ellos REDALYC, SciElo-Argentina, DIALNET, DOAJ, PSICODOC y PsycINFO. Editada por Facultad de Psicología. Universidad Nacional de Córdoba. Argentina)</span></li>
    <li style="text-align: justify"><span style="font-size: 14pt"><a href="http://www.saludpublica.fcm.unc.edu.ar/node/169" target="_blank" rel="noopener noreferrer"><strong>Revista de la Escuela de Salud Pública</strong></a> (Argentina)</span></li>
    <li style="text-align: justify"><span style="font-size: 14pt"><a href="http://www.revistapsicologia.uchile.cl/" target="_blank" rel="noopener noreferrer"><strong>Revista de Psicología</strong></a> (Desde el año 1990, el Departamento de Psicología de la Facultad de Ciencias Sociales de la Universidad de Chile edita la Revista de Psicología, publicación científica semestral, que desde la Psicología, y con la perspectiva de contribuir al diálogo con otras disciplinas, busca la difusión de artículos que aborden problemáticas contemporáneas relevantes)</span></li>
    <li style="text-align: justify"><span style="font-size: 14pt"><strong><a href="http://www.uv.es/garzon/psicologia%20politica/index.html" target="_blank" rel="noopener noreferrer">Revista de Psicología Política</a></strong> (Revista semestral dedicada al análisis psicológico de los fenómenos políticos con especial atención a los problemas de cultura política y acción colectiva. Pretende difundir y facilitar el intercambio entre científicos sociales de distintas disciplinas, pero sobre todo es un foro de debate entre científicos de diferentes perspectivas teóricas y distintos ámbitos geográficos, interesados en el estudio de las relaciones entre Psicología y Política. La revista está incorporada en las disrintas bases de datos de la APA y Sociological Abstracts. Valencia. España)</span></li>
    <li style="text-align: justify"><span style="font-size: 14pt"><a href="http://ibero-revistas.metabiblioteca.org/index.php/ripsicologia/issue/view/68/showToc" target="_blank" rel="noopener noreferrer"><strong>Revista Iberoamericana de Psicología </strong></a> (Es la publicación científica de la Corporación Universitaria Iberoamericana de Bogotá, Colombia, indexada en Publindex en categoría C. Su misión es publicar los resultados de trabajos en Psicología originales de investigaciones  que contribuyan significativamente a enriquecer el conocimiento y la divulgación de experiencias investigativas, nuevos avances y necesidades en el campo de la psicología enmarcada en el contexto social. Se contemplarán artículos o producciones resultados de trabajos de la Iberoamericana y de otras instituciones o universidades tanto a nivel nacional como internacional dando cabida a los diferentes campos y temáticas de la psicología. La revista tendrá una periodicidad publicación semestral y va dirigida a profesionales e investigadores de la psicología y otras disciplinas relacionadas)</span></li>
    <li style="text-align: justify"><span style="font-size: 14pt"><a href="http://pepsic.bvsalud.org/scielo.php?script=sci_serial&amp;pid=0120-0534&amp;lng=pt&amp;nrm=iso" target="_blank" rel="noopener noreferrer"><strong>Revista Latinoamericana de Psicología</strong></a></span></li>
    <li style="text-align: justify"><span style="font-size: 14pt"><a href="http://polipapers.upv.es/index.php/reinad" target="_blank" rel="noopener noreferrer"><strong>Revista sobre la infancia y la adolescencia</strong></a> (La revista se presenta como un foro permanente de discusión y reflexión, en el que se dan cita profesionales e investigadores, tanto de España como del resto del mundo, que trabajan con menores o constituyen su objeto de estudio, respectivamente)</span></li>
    </ul>
    </div>
    <br>
    <p>Fuente: seccion de Revistas digitales de la pagina de la Biblioteca FFyH:</p>
    <p>Visite esta pagina para conocer la lista completa de Revistas digitales: <a href="https://ffyh.unc.edu.ar/biblioteca/revistas-digitales-2/" target="_blank" rel="noopener noreferrer">https://ffyh.unc.edu.ar/biblioteca/revistas-digitales-2/</a></p>
    `)
    incluir_seccion_hijo("repositorio_institucional_digital_rdu","Repositorio Institucional RDU","recursos_digitales_online")
    actualizar_parrafo("repositorio_institucional_digital_rdu",`
    <br>
    <p><span style="color: #ff00ff"><strong>Acerca del Repositorio Institucional</strong></span></p>
    <br>
    <div class="entry-content">
    <div class="at-above-post-page addthis_tool" data-url="https://ffyh.unc.edu.ar/biblioteca/acerca-de-nuestro-repositorio-institucional/"></div>
    <p>
    <p><a href="https://ffyh.unc.edu.ar/biblioteca/nodos-oca/" target="_blank" rel="noopener noreferrer">
    <span style="color: #ff0000"><img data-attachment-id="2713" data-permalink="https://ffyh.unc.edu.ar/biblioteca/acerca-de-nuestro-repositorio-institucional/rdu-2/" 
    data-orig-file="https://i0.wp.com/ffyh.unc.edu.ar/biblioteca/wp-content/uploads/sites/4/2018/06/RDU.jpg?fit=372%2C141&amp;ssl=1" data-orig-size="372,141" data-comments-opened="0" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" 
    data-image-title="RDU" data-image-description="" data-image-caption="" 
    data-medium-file="https://i0.wp.com/ffyh.unc.edu.ar/biblioteca/wp-content/uploads/sites/4/2018/06/RDU.jpg?fit=300%2C114&amp;ssl=1" 
    data-large-file="https://i0.wp.com/ffyh.unc.edu.ar/biblioteca/wp-content/uploads/sites/4/2018/06/RDU.jpg?fit=372%2C141&amp;ssl=1" 
    class="wp-image-2713 alignright" src="https://i0.wp.com/ffyh.unc.edu.ar/biblioteca/wp-content/uploads/sites/4/2018/06/RDU.jpg?resize=293%2C111" 
    alt="" width="293" height="111" srcset="https://i0.wp.com/ffyh.unc.edu.ar/biblioteca/wp-content/uploads/sites/4/2018/06/RDU.jpg?w=372&amp;ssl=1 372w, 
    https://i0.wp.com/ffyh.unc.edu.ar/biblioteca/wp-content/uploads/sites/4/2018/06/RDU.jpg?resize=300%2C114&amp;ssl=1 300w" sizes="(max-width: 293px) 100vw, 293px" data-recalc-dims="1" /></span>
   </a>
    </p>
   <br>
    <p><strong>NODOS DE LA BIBLIOTECA ANTE LA OFICINA DE CONOCIMIENTO  ABIERTO</strong>
    <ul>
    <li><strong>Bibl. Nora Fernández</strong></li>
    <li><strong>Correo electrónico:</strong> <a href="mailto:norafernandez@ffyh.unc.edu.ar">norafernandez@ffyh.unc.edu.ar</a></strong></li>
    <li><strong>Teléfono IP:</strong><strong> 5353610, interno 50401</strong></li>
    <li><strong>Sr. Javier González<br />
    </strong></li>
    <li><strong>Correo Electrónico: </strong><strong><span class="PbnGhe oJeWuf fb0g6 eejsDc"><a href="mailto:javiergonzalez@ffyh.unc.edu.ar"><span dir="ltr" data-tooltip="Enviar correo">javiergonzalez@ffyh.unc.edu.ar</span></a></span><br />
    </strong></li>
    <li><strong>Teléfono IP: 5353601, interno: 50223</strong></li>
    </ul>
    <br>
    <p><strong>REPOSITORIO DIGITAL UNIVERSITARIO &#8211; RDU</strong></p>
    <p><a href="https://rdu.unc.edu.ar" target="_blank" rel="noopener noreferrer">El Repositorio Digital Universitario (RDU)</a> y el <a href="https://revistas.unc.edu.ar/" target="_blank" rel="noopener noreferrer">Portal de Revistas de la UNC</a> son los Repositorios Institucionales de acceso abierto de la Universidad Nacional de Córdoba y se encuentran adheridos al Sistema Nacional de Repositorios Digitales (SNRD) del Ministerio de Ciencia, Tecnología e Innovación Productiva (MINCYT).</p>
    <p>El Repositorio Digital Universitario (RDU) es un espacio donde se almacena, organiza, preserva, provee acceso libre y da visibilidad a nivel nacional e internacional, a la<br />
    producción científica, académica y cultural en formato digital, generada por los integrantes de la Universidad Nacional de Córdoba.</p>
    <p><a href="https://ffyh.unc.edu.ar/biblioteca/nodos-oca/" target="_blank" rel="noopener noreferrer">Información acerca de los Nodos OCA</a></p>
    <br>
    <p><strong>MAS INFORMACIÓN DE INTERÉS SOBRE EL REPOSITORIO</strong></p>
    <p><a href="https://ffyh.unc.edu.ar/biblioteca/presentacion-de-trabajos-al-rdu/" target="_blank" rel="noopener noreferrer">Presentación de Tesis en Formato Digital</a></p>
    <p><a href="https://ffyh.unc.edu.ar/biblioteca/derechos-de-autor/" target="_blank" rel="noopener noreferrer">Derechos de Autor</a></p>
    <p><a href="https://ffyh.unc.edu.ar/biblioteca/acceso-abierto-2/" target="_blank" rel="noopener noreferrer">Acceso Abierto</a></p>
    <p><a href="https://ffyh.unc.edu.ar/biblioteca/licencias-creative-commons/" target="_blank" rel="noopener noreferrer">Licencias Creative Commons</a></p>
    <p><a href="https://ffyh.unc.edu.ar/biblioteca/repositorio-institucional-unc-2/" target="_blank" rel="noopener noreferrer">Normativas </a></p>
    <p>Fuente de Información: Resolución Políticas de la UNC y Página Web de la OCA</p>
    <br>
    <p>Fuente: seccion de Repositorio Institucional RDU de la pagina de la Biblioteca FFyH:</p>
    <p>Visite la pagina Repositorio Institucional RDU, de la Biblioteca FFyH: <a href="https://ffyh.unc.edu.ar/biblioteca/acerca-de-nuestro-repositorio-institucional/" target="_blank" rel="noopener noreferrer">https://ffyh.unc.edu.ar/biblioteca/acerca-de-nuestro-repositorio-institucional/</a></p>
    
    `)

    incluir_funcion_botones();
}