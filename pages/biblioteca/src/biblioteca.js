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
    document.getElementById("horarios-atenci??n_bt").onclick = function () {
        show_text_hijo("horarios-atenci??n");
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

    <p>Facultad de Filosof??a y Humanidades - Facultad de Psicolog??a</p>
    <p><strong>Direcci??n:</strong></p>                                  
    <ul>
    <li>Pabell??n Agust??n Tosco- M??dulo ??C??, Ciudad Universitaria. X5000HUA<li>
    <li>C??RDOBA - ARGENTINA<li>
    </ul>
    <p><strong>Tel??fono:</strong></p> 
    <ul>
    <li>Tel??fono IP: 5353610</li>
    </ul>
    <p><i>Los internos que corresponden a Biblioteca son:</i></p> 
    <ul>
    <li>50029 - Procesos T??cnicos</li>
    <li>50030 - Direcci??n</li>
    <li>50031 - Dpto. Hemeroteca</li>
    <li>50223 - Dpto. Americanistas</li>
    <li>50310 - Servicios al P??blico</li>
    <li>50400 - Dpto. Biblioteconom??a / Secretar??a de la Biblioteca</li>
    <li>50401 - Depto. Comunicaci??n Institucional / Biblioteca Digital</li>
    </ul>
    <p><strong>Horario de atenci??n:</strong>Lunes a viernes de 9:00 a 20:00 hs.</p>
    <p><strong>Correo electr??nico:</strong><a href="mailto:biblio@ffyh.unc.edu.ar"> biblio@ffyh.unc.edu.ar</a></p>
    <p><strong>Facebook:</strong><a href="https://www.facebook.com/bibliotecaelmak.deestrabou/" target="_blank" rel="noopener noreferrer"> https://www.facebook.com/bibliotecaelmak.deestrabou/</a></p>
    <p><strong>P??gina Web:</strong><a href="http://www.ffyh.unc.edu.ar/biblioteca/" target="_blank" rel="noopener noreferrer"> http://www.ffyh.unc.edu.ar/biblioteca/</a></p>
    <p><strong>Fuente:</strong> seccion Contacto de la pagina de la biblioteca. <a href="https://ffyh.unc.edu.ar/biblioteca/sobre-la-biblioteca/contacto/"target="_blank" rel="noopener">https://ffyh.unc.edu.ar/biblioteca/sobre-la-biblioteca/contacto/</a></p>

    `)
    incluir_seccion_hijo("horarios-atenci??n","Horarios de atenci??n","informacion_general")
    actualizar_parrafo("horarios-atenci??n",`
    <p><strong>Atenci??n de la biblioteca:</strong></p>
    <ul>
    <li>Lunes a viernes de 09:00 a 20:00 hs.</li>
    <li>Salas de lectura: 9:00 a 19:50 hs.</li>
    </ul>
    <p><strong>Hemeroteca:</strong></p>
    <ul>
    <li>Lunes a viernes de 10:00 a 18:00 hs.</li>
    </ul>
    <p><strong>Estudios Americanistas y Antropolog??a:</strong></p>
    <ul>
    <li>Lunes a viernes de 10:00 a 18:00 hs.</li>
    </ul>
    <p><strong>Banco de Tesis de Psicolog??a:</strong></p> 
    <ul>
    <li>Horario a definir</li>
    </ul>
    <p><strong>Fuente:</strong> seccion Horarios de Atencion de la pagina de la biblioteca. <a href="https://ffyh.unc.edu.ar/biblioteca/redes-sociales/"target="_blank" rel="noopener">https://ffyh.unc.edu.ar/biblioteca/redes-sociales/</a></p>

    `)
    incluir_seccion_hijo("localizacion_biblioteca","C??mo llegar","informacion_general")
    actualizar_parrafo("localizacion_biblioteca",`
    <p><span style="color: #ff00ff">Ubicacion del sitio exacto de la Biblioteca FFyH<span></p>
    <br>
    <div class="embed-googlemaps" style="text-align:center; display: block;">
    <iframe src="https://www.google.com/maps/d/embed?mid=1K6iW1p6IfNusae8TbmbTH6u1PnI&hl=es&ehbc=2E312F" style=" box-sizing: border-box; margin-top: 5px; margin-bottom: 5px; width: 100%; height: 80vh;"></iframe>
    </div>
    <p><strong>Fuente:</strong> seccion de C??mo llegar, de la pagina de la biblioteca, <a href="https://ffyh.unc.edu.ar/biblioteca/como-llegar/"target="_blank" rel="noopener">https://ffyh.unc.edu.ar/biblioteca/como-llegar/</a></p>
    `)
    incluir_seccion_hijo("edificio_bilbioteca_salas","Edificio y Salas","informacion_general")
    actualizar_parrafo("edificio_bilbioteca_salas",`
    <p><span style="color: #ff00ff"><strong>EDIFICIO</strong><span></p>
    <p>La Biblioteca tiene una superficie total de 2.631 metros cuadrados 
    dividida en dos plantas. En la planta alta se encuentra la Direcci??n,
     los Departamentos de Biblioteconom??a, Procesos t??cnicos, Hemeroteca 
     con su sala de Lectura, Comunicaci??n Institucional y Biblioteca 
     Digital, Sala de reuniones y la Secci??n de Canje y Donaci??n con 
     su dep??sito; en la planta baja funcionan los Departamentos de 
     Humanidades, de Estudios Americanistas y de Antropolog??a con 
     su sala de lectura, adem??s el Sector del Banco de tesis de 
     la carrera de Psicolog??a y el Fondo Antiguo de la Biblioteca. 
     Asimismo, cuenta con dos salas de lecturas principales, las 
     cuales inicialmente fueron dise??adas con una capacidad para
      300 puestos de estudio. La primera de 100 m2 y la segunda 
      de 470 m2; en las salas de lectura se incorporaron 5500
       ejemplares de libros accesibles al p??blico a trav??s de 
       la modalidad de estanter??a abierta y el Banco de tesis de la
        Facultad de Psicolog??a. Actualmente la biblioteca cuenta con 
        200 puestos de lectura incluidos los 35 puestos de lectura 
        informatizados con acceso a internet, terminales para la
         consulta de trabajos finales de la carrera de Psicolog??a y 
         puestos de lectura de dos peque??as salas silenciosas situadas 
         en las secciones de Hemeroteca y Americanistas-Antropolog??a.</p>
         <p>Seguridad en el edificio: El m??dulo donde se encuentra la
          Biblioteca es de construcci??n antis??smica, entrada amplia de 
          cuatro puertas, puertas antip??nico, matafuegos distribuidos en
           las dos plantas, central de alarma de incendios, activadores 
           de alarma de incendio manual, detectores de humo y  c??maras de
            seguridad.</p>
            <p>La Biblioteca  tiene una superficie ampliada de 
            931 metros cuadrados, en dos plantas, capacidad de 
            almacenamiento para 150.000 vol??menes, y nueva sala de 
            lectura de 470 mts cuadrados, con capacidad para 300 
            puestos de estudios, ascensor, puertas de emergencias, 
            sistema contra incendio,  vidrios polarizaros en dos secciones
             para la protecci??n del material bibliogr??fico de los rayos UV.</p>

             <p>En Planta baja:</p>
            
             <p>Estanter??a abierta, cuya finalidad es el crecimiento y 
             autonom??a del usuario que le permite acceder a buscar por 
             s?? mismo el material bibliogr??fico de mayor consulta sin la
              intermediaci??n del bibliotecario. Adem??s se contin??a con el
               servicio de pr??stamo tradicional para el resto de
                la bibliograf??a.</p>
        <br>
                <p><span style="color: #ff00ff"><strong>SALAS DE LECTURA Y ESTANTER??A ABIERTA</strong><span></p>
                <p><strong>CONSULTA EN SALAS DE LECTURA:</strong> socios y p??blico en general pueden acceder a este
                 servicio con la presentaci??n del DNI., Libreta de TP y/o Pasaporte 
                 en el caso de usuarios extranjeros. Incluye la consulta del 
                 Fondo Antiguo que posee material bibliogr??fico invaluable de 
                 m??s de 2.400 obras impresas producidas entre los siglos XVI y XX.</p>
            
                 <p><strong>ESTANTER??A ABIERTA:</strong> es una nueva 
                 modalidad de consulta, cuya finalidad es el crecimiento
                  y autonom??a del usuario ya que le permite acceder al 
                  material por s?? mismo sin la intermediaci??n del bibliotecario.
                   Comprende m??s de 5.000 vol??menes protegidos con sistema de 
                   seguridad anti-hurto.</p>
                   <br>
    <p><strong>Fuente:</strong> seccion de Edificio, de la pagina de la biblioteca. <a href="https://ffyh.unc.edu.ar/biblioteca/edificio/"target="_blank" rel="noopener">https://ffyh.unc.edu.ar/biblioteca/edificio/</a></p>
    <p><strong>Fuente:</strong> seccion de Salas de lectura y Estanter??a Abierta, de la pagina de la biblioteca. <a href="https://ffyh.unc.edu.ar/biblioteca/salas-de-lectura-y-estanteria-abierta/"target="_blank" rel="noopener">https://ffyh.unc.edu.ar/biblioteca/salas-de-lectura-y-estanteria-abierta/</a></p>

    `)

    incluir_seccion_hijo("servicios_biblioteca","Servicios","informacion_general")
    actualizar_parrafo("servicios_biblioteca",`
    <p><span style="color: #ff00ff"><strong>Servicios que brinda la Biblioteca FFyH</strong><span></p>
    <br>
    <ul>
    <li> <strong>Estanteria abierta. </strong> </li>
    <li> <strong>Netbooks para uso p??blico en Sala.</strong> </li>
    <li> <strong>Pr??stamos interbibliotecarios:</strong> UNC-ABUC. </li>
    <li> <strong>Asesoramiento en el manejo de cat??logos y manuales en l??nea.</strong> </li>
    <li> <strong>Acceso a la biblioteca electr??nica del Mincyt.</strong> </li>
    <li> <strong>Inclusion educativa de personas en situaci??n de discapacidad.</strong> </li>
    <li> <strong>Consultas en sala de lectura.</strong> </li>
    <li> <strong>Pr??stamos a domicilo.</strong> </li>
    <li> <strong>Visistas guiadas.</strong> </li>
    <li> <strong>WI-FI.</strong> </li>
    <li> <strong>Alerta de adquisiciones a trav??s de la web y del correo electr??nico.</strong> </li>
    <li> <strong>Cat??logo de recursos en l??nea.</strong> </li>
    </ul>
    <br>
    <p><span style="color: #ff00ff"><strong>Netbooks y Conexi??n WiFi</strong><span></p>
    <p>Se dispone de Netbooks instaladas en Sala de Lectura para la utilizaci??n diaria de los usuarios, las cuales fueron donadas a la Biblioteca por Tecnolog??a Educativa , en el marco de un proyecto que promueve mayor inclusi??n y una mejor calidad educativa para los estudiantes.</p>
    <p>La Biblioteca dispone de WIFI como un servicio accesible a todos sus usuarios.</p>
    <br>
    <p><strong>Fuente:</strong> pesta??a Servicio, de la pagina del catalogo de la biblioteca. <a href="https://ffyh.biblio.unc.edu.ar/"target="_blank" rel="noopener">https://ffyh.biblio.unc.edu.ar/</a></p>
    <p><strong>Fuente:</strong> seccion Netbooks y Conexi??n WiFi, de la pagina de la biblioteca. <a href="https://ffyh.unc.edu.ar/biblioteca/netbooks-y-conexion-wifi/"target="_blank" rel="noopener">https://ffyh.unc.edu.ar/biblioteca/netbooks-y-conexion-wifi/</a></p>

    `)
    incluir_seccion_padre("tutoriales", "TUTORIALES");

    incluir_seccion_hijo("introduccion_tutoriales","Introduccion: Tutoriales de la Biblioteca","tutoriales")
    actualizar_parrafo("introduccion_tutoriales",`
    <p><span style="color: #ff00ff"><i>Extracto del sitio de la Biblioteca FFyH</i><span></p>
    <p>Desde la Biblioteca Elma Kohlmeyer de Estrabou se dise??aron tutoriales que orientan en la realizaci??n de b??squedas en el cat??logo, desde las simples hasta las estrategias m??s avanzadas de b??squedas para acceder al texto completo por medio de enlaces en los registros.</p> 
    <p>En estos tutoriales se describe paso a paso el uso del cat??logo de la Biblioteca donde se muestran varias maneras de llegar a la informaci??n que se necesita, delimitando los resultados con expresiones propias del sistema, refinando las b??squedas mediante diversas opciones que se presentan para tal fin o usando conectores en b??squedas avanzadas.</p>
    <p>Asimismo se describe c??mo est??n conformados los registros, detallando la informaci??n que proporcionan y como utilizarla; indicando si el material se encuentra en la biblioteca electr??nica del Mincyt o si posee versi??n digital de acceso abierto en la web. A fin de brindar esta informaci??n el equipo de la Biblioteca lleva enlazados en su cat??logo m??s de dos mil registros a sitios seguros desde donde se acceden a los textos completos.</p>
    <p><strong>Fuente:</strong> Pagina de la biblioteca, <a href="https://ffyh.unc.edu.ar/biblioteca/tutoriales-de-la-biblioteca/"target="_blank" rel="noopener">seccion de los tutoriales.</a></p>
   `);

    incluir_seccion_hijo("acceso_titulo_autor", "Acceso al texto completo por t??tulo y autor", "tutoriales")
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

    incluir_seccion_hijo("acceso_busqueda_tema", "Acceso al texto completo con b??squeda avanzada por tema", "tutoriales")
    actualizar_parrafo("acceso_busqueda_tema", `
    <p>Video de tutorial de la pagina oficial de la Biblioteca FFyH </p>
    <br>
    <div class="embed-youtube" style="text-align:center; display: block;">
    <iframe loading="lazy" class="youtube-player"; src="https://www.youtube.com/embed/57bmlkfI4gE?version=3&#038;rel=1&#038;showsearch=0&#038;showinfo=1&#038;iv_load_policy=1&#038;fs=1&#038;hl=es-ES&#038;autohide=2&#038;wmode=transparent" 
    allowfullscreen="true" style="border:0; width: 100%; height: 80vh" sandbox="allow-scripts allow-same-origin allow-popups allow-presentation">
    </iframe>
    </div>
    `)

    incluir_seccion_hijo("acceso_busqueda_simple_autor_titulo_tema","B??squeda Simple por Autor, T??tulo o Tema","tutoriales");
    actualizar_parrafo("acceso_busqueda_simple_autor_titulo_tema",`
    <p>Video de tutorial de la pagina oficial de la Biblioteca FFyH </p>
    <br>
    <div class="embed-youtube" style="text-align:center; display: block;">
    <iframe loading="lazy" class="youtube-player"; src="https://www.youtube.com/embed/WsUiAgRqox8?version=3&#038;rel=1&#038;showsearch=0&#038;showinfo=1&#038;iv_load_policy=1&#038;fs=1&#038;hl=es-ES&#038;autohide=2&#038;wmode=transparent" 
    allowfullscreen="true" style="border:0; width: 100%; height: 80vh" sandbox="allow-scripts allow-same-origin allow-popups allow-presentation">
    </iframe>
    </div>
    `)
   
   incluir_seccion_hijo("acceso_busqueda_avanzada_tema","Acceso al texto completo con b??squeda avanzada por tema","tutoriales");
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
    <p>Antes de comenzar este tiene como fin solo informar, si usted quiere saber, recurra a fuentes de informaci??n confiables y oficial de la universidad.</p>
    <p>Usted Se preguntar??, <strong>??Por qu?? tengo que presentar mi trabajo final/tesis/informe de PSS para que forme parte del repositorio digital de la Universidad?</strong></p>
    <p>Hay una raz??n detr??s de esta exigencia.</p>
    <p>La universidad como instituci??n que se encuentra a leyes nacionales, en 2007 se aprob?? la Ley 26899 que contempla la Creaci??n de Repositorios Digitales Institucionales de Acceso Abierto; en la cual exige a todas las instituciones gubernamentales o instituciones que se encuentre bajo la ??rbita de la naci??n, como el Ministerio de Educaci??n, por lo tanto, todo el contenido que produjeron en investigaci??n que se hayan financiado por el Estado nacional, tienen que encontrarse a disposici??n de todo el p??blico.</p>
    <p>Con fin de cumplir la ley se instaur?? la Oficina de Conocimiento Abierto que, en nuestra Universidad es la encargada de gestionar el Repositorio Institucional Digital de la UNC (RDU), y tambi??n tiene la funci??n de coordinar la actuaci??n de las Bibliotecas Universitarias, designadas como nodos responsables de incorporar la producci??n intelectual de las Facultades al mencionado RDU.</p>
    <p>Usted se preguntar??, <strong>??Qu?? es un repositorio digital?</strong></p>
    <p>Un repositorio es un espacio virtual en el cual se suben archivos , im??genes y documentos para tener su acceso en cualquier sitio en el cual te encuentres. Existen repositorios de dominio p??blico y privado.</p>
    <p>En los privados necesitas tener acceso al mismo por un nombre de usuario y una clave para poder acceder a los archivos subidos, en este caso es necesario registrarse. Las nubes vinculadas a correos electr??nicos, podr??an ser un ejemplo de estos de repositorios como los son: Google Drive, Dropbox, Onedrive de Outlook, etc; porque cumplen con algunas caracter??sticas que tienen los repositorios.</p>
    <p>Los repositorios p??blicos no es necesario registrarse aunque en algunos casos si, los archivos e informaci??n se encuentran a disposici??n de quien tenga el dispositivo adecuado para acceder. Los entes gubernamentales e instituciones bajo la ??rbita del estado poseen repositorios p??blicos porque se encuentran amparados bajo la ley del acceso p??blico a la informaci??n de los gobiernos y sus instituciones.</p> 
    <ul>
    <li> <strong>Ley N?? 26.899</strong> de Creacion de Repositorios Digitales Institucionales de Acceso Abierto.</li>
    <li> <strong>Resolucion 753-E/2016 MINCYT:</strong> Regalmento operativo para aplicacion de la ley N?? 26.899.</li>
    <li> <strong>Ley Nacional 22.275</strong> de Acceso a la Informacion Publica.</li>
    <li> <strong>Decreto 117/2016:</strong> Plan de apertura de datos. </li>
    </ul>
    <p>Repositorio Digital de la UNC: <a href="https://rdu.unc.edu.ar/" target="_blank" rel="noopener noreferrer">https://rdu.unc.edu.ar/</a></p>
    <p>Programa Arqueologia Digital. Museo de Antropologia IDACOR-CONICET. Repositorio Digital Suquia: <a href="https://suquia.ffyh.unc.edu.ar/" target="_blank" rel="noopener noreferrer">https://suquia.ffyh.unc.edu.ar/</a></p>
    <p>Hay legislaciones a nivel internacional que ampara la existencia de repositorios abiertos al p??blico.</p>
    <p>Entre las instituciones p??blicas que tienen repositorios de dominios  p??blicos,  las universidades nacionales, museos bajo nacional, archivos documentales provinciales y nacionales, bibliotecas, repositorios del Archivo Nacional de Argentina, bibliotecas y otras organizaciones, sitios web como Github.</p>

     <br>   
    <br><p><span style="color: #ff00ff"><strong>INSTRUCTIVO PARA SECRETARIA</strong><span></p>
    
    <p>Conclu??do el proceso de aprobaci??n de la tesis de grado, la Secretar??a pertinente remitir??, a la Biblioteca Central, mediante correo electr??nico: <a href="mailto:rdu@ffyh.unc.edu.ar">rdu@ffyh.unc.edu.ar</a>, el siguiente material:</p>
    <ul>
    <li> Archivo correspondiente a la tesis.</li>
    <li> Archivo del formulario de carga (completado por el tesista).</li>
    </ul>
    <p>Como ??ltimo paso, solicitar?? al nodo (Biblioteca Central) que d?? acuse de recibo, a los efectos de validar la recepci??n.</p>
    <p>Ante cualquier duda, la Secretar??a Acad??mica, seg??n corresponda, resolver??.</p>
    <p><span style="color: #ff00ff"><strong>INSTRUCTIVO PARA EL TESISTA</strong><span></p>
    <br> 
    <p><span style="color: #ff00ff"><strong>PRESENTACION DE TESIS DE GRADO EN FORMATO DIGITAL</strong><span></p>
    
    <p>Para depositar la tesis en el Repositorio Digital Universitario RDU, el tesista deber?? entregar a la Secretar??a los siguientes archivos:</p>
    <ul>
    <li> PDF con el contenido de su tesis (con la licencia Creative Commons inserta en el documento)..</li>
    <li> TXT con el formulario de carga, completado por el autor, con los datos necesarios para subir la tesis al Repositorio.</li>
    </ul>
    <p>A continuaci??n se enumeran aspectos t??cnicos, sugerencias de inclusi??n y un peque??o lineamiento para la selecci??n de la licencia CreativeCommons</p>
    <br>
    <p><span style="color: #ff00ff"><strong>ASPECTOS TECNICOS:</strong><span></p>
    
    <p>La versi??n digital del documento debe presentarse en un solo archivo en formato PDF, y 
    en el caso de presentar anexos, ??stos ser??n guardados por separado, agruparlos de acuerdo al 
    tipo de formato (Texto, Imagen, Audio, Video).</p>

    <p>El archivo en PDF deber?? ser indexable, (no una imagen), preferentemente  un PDF etiquetado.</p>
    <p>En cuanto al nombre del archivo se solicita que se guarde con la siguiente 
    modalidad: apellido espacio gui??n espacio las cinco primeras palabras del 
    t??tulo, m??x. 25 caracteres.</p>
    <br> 
    <p><span style="color: #ff00ff"><strong>ACCESIBILIDAD:</strong><span></p>
    <br> 
    <p><span style="color: #ff00ff"><strong> SUGERENCIAS A TENER EN CUENTA:</strong><span></p>

    <p>Es importante incorporar en la elaboraci??n de los contenidos, elementos de accesibilidad, a fin de postular un conocimiento de acceso realmente abierto para todos.</p>
    <p>Mencionamos algunas:</p>
    <ul>
    <li>Dise??o general y presentaci??n: utilice alineaci??n a la izquierda (esto ayuda a encontrar el principio del rengl??n).</li>
    <li>Explicar las abreviaturas y acr??nimos.</p></li>
    <li>El tama??o de fuente debe ser grande: no se recomiendan letras inferiores a 12 puntos.</li>
    <li>Para las im??genes, incorporar textos explicativos, ya que el texto que forma parte de una imagen no es accesible, repetirlo por fuera.</li>
    <li>Dise??o general y presentaci??n: utilice alineaci??n a la izquierda (esto ayuda a encontrar el principio del rengl??n).</li>
    <li>Para los enlaces, evitar textos como ???clic aqu????? o ???m??s informaci??n???.</li>
    <li>Algunas personas ciegas navegan por las p??ginas leyendo ??nicamente el texto de los enlaces.Insertarlos siempre como hiperv??nculos.</li>
    
    <li>Un documento PDF etiquetado es una versi??n de PDF que incluye tanto el contenido deldocumento como informaci??n sobre su estructura l??gica y del orden de lectura, de forma que el documento pueda ser le??do correctamente por los lectores de pantalla.</li>
    </ul>
    <br> 
    <p><span style="color: #ff00ff"><strong> LICENCIAS CREATIVECOMMONS:</strong><span></p>
   
    <p>La licencia seleccionada debe encontrarse inserta en el cuerpo de la obra (preferentemente en la portada), de este modo, cuando el archivo es descargado, la licencia contin??a ligada a la obra.</p>
    <p>Para seleccionar la licencia, remitirse a:</p>
    <p><a href="http://www.creativecommons.org.ar/"target="_blank" rel="noopener"><strong> http://www.creativecommons.org.ar/</strong></a></p>
    <p>El tesista deber?? indicar que opciones elije a los efectos de construir la licencia:</p>
    <ul>
    <li>En el primer paso se selecciona la caracter??stica de la licencia, esto es: si permite adaptaciones o no.</li>
    </ul>
    <p>En el caso de responder si, hay que tildar: S??, siempre que se comparta de la misma manera. Lo cual significa que la obra podr?? tener derivados, pero, ??stos deber??n mantener la misma licencia.</p>
    <p>En este primer paso, el autor debe optar si permite el uso comercial, o no, de su obra.</p>
    <p>Las elecciones en este panel actualizar??n los otros paneles de esta p??gina.</p></li>
    <ul>
    <li>El segundo paso, es opcional. Aqu?? se pueden agregar metadatos a la licencia, tales como: datos de t??tulo y nombre completo del autor</li>
    <li>El tercer paso consiste en copiar la licencia seleccionada, que se presenta en el ??ltimo panel. Copiar y pegar en el documento de la tesis.</li>
    </ul>
    <br>
    <p><strong><i>Hay algunos detalles, informacion, archivos de la resolucion aprobada por la universidad, documentaciones oficiales, que quedaron fuera. Les recomendio visitar la Pagina Presentacion de trabajos finales al Repostorio Digital Universal, para acceder a la informacion que no se encuentra presente en este texto.</i></strong></p>

    <br><p><strong>Fuente:</strong> Pagina de la Presentacion de trabajos finales al Repostorio Digital Universal.</p>
    <p>Para ir al Sitio: <a href="https://ffyh.unc.edu.ar/biblioteca/presentacion-de-trabajos-al-rdu/"target="_blank" rel="noopener"><strong>https://ffyh.unc.edu.ar/biblioteca/presentacion-de-trabajos-al-rdu/</strong></a></p>`

    );

    incluir_seccion_hijo("prestamos_domicilio","Prestamos","instructivos_guias_varios")
    actualizar_parrafo("prestamos_domicilio",`
    <br>
    <p><span style="color: #ff00ff"><strong> PR??STAMOS A DOMICILIO:</strong><span></p>
    <br>
    <p><span style="color: #ff00ff"><strong>INSCRIPCIONES</strong><span></p>
    
    
    <p><strong>??Quienes pueden realizar prestamos a domicilio?</strong></p>
    <p>Las personas que pueden solicitar prestamos a la biblioteca, son aquellas que se encuentren inscriptas en el registro de la biblioteca.</p>
        
    <p><strong>??Quienes podr??n inscribirse para hacer uso de pr??stamos de material bibliogr??fico?</strong></p>
    <p>Las personas que podr??n inscribirse pueden ser:</p>
    <ul>
    <li>personal docente</li>
    <li>investigadores</li>
    <li>no docentes</li>
    <li>iegresados</li>
    <li>personal docente</li>
    <li>alumnos de grado</li>
    <li>postgrado</li>
    <li>vocacionales de la Facultad de Filosof??a y Humanidades y de la Facultad de Psicolog??a</li>
    <li>intercampus de la Facultad de Filosof??a y Humanidades y de la Facultad de Psicolog??a</li>
    <li>vocacionales</li>
    <li>postgrado</li>
    <li>docentes con cargo de otras Facultades de la UNC</li>
    <li>investigadores de otras Facultades de la UNC</li>
    <li>no docentes de otras Facultades de la UNC</li>
    </ul>
    
    <p><strong>??Cuales son los requisitos que se necesita para inscribirse?</strong></p>
     
    <ul>
    <li><strong>Docentes y/o investigadores:</strong> deberan estar incluidos
     en el registro de personal de la Facultad, y  deberan 
    presentar en la Biblioteca, la Resoluci??n del cargo actualizada y 
    documento de identidad. La Duraci??n de 
    la inscripci??n es 1 a??o calendario.</li>

    <li><strong>No docentes:</strong> deberan estar incluidos en el 
    registro de personal de la Facultad, y tendran que presentar certificado 
    del ??rea Personal que acredite su cargo y el documento de identidad. La Duraci??n de la 
    inscripci??n es 1 a??o calendario.</li>
    <li><strong>Egresados:</strong> deberan cumplimentar los requisitos 
    establecidos en la solicitud entregada por la misma 
    biblioteca, y ademas el DNI y, por ultimo, deberan realizar el pago de la cuota anual. 
    La Duraci??n de la inscripci??n es 1 a??o calendario.</li>
    <li><strong>Alumnos:</strong> deberan presentar Libreta Trabajos de Practicos, con la inscripci??n acad??mica correspondiente al a??o lectivo en curso. 
    La Duraci??n de la inscripci??n es 1 a??o acad??mico.</li>
    <li><strong>Alumnos Vocacionales:</strong> se deberan inscribirse con la Libreta Trabajos 
    de Practicos y por el a??o en curso. 
    La Duraci??n de la inscripci??n es hasta el 31 de diciembre.</li>
    <li><strong>Alumnos intercampus:</strong> se deberan inscribir, presentando 
    el carnet intercampus y el Pasaporte. La Duraci??n de la inscripci??n
    es solo por el per??odo que permanezca en las Facultades.</li>
    <li><strong>Docentes y/o investigadores de otras Facultades:</strong>
    deberan estar incluidos en el registro del personal de la 
    Facultad, a la que pertenecen, que tendran que presentar en biblioteca, 
    la Resoluci??n del cargo de la Facultad respectiva,
    en el cual, figure la duraci??n del proyecto, el DNI y, por ultimo, tendran que abonar la cuota. La Duraci??n de la inscripci??n es 1 a??o calendario.</li>
    </ul>
    <br>
    
    <p>Los/as usuarios/as, deber??n reinscribirse todos los a??os, en la fecha estipulada y actualizar los datos personales, como:</p>
    <ul>
    <li>domicilio</li>
    <li>tel??fono</li>
    <li>correo electr??nico</li>
    <li>y otros datos, segun correspondan y sean solicitados por el personal de la biblioteca</li>
    </ul>

    <p>Los datos personales deber??n ser presentados en la biblioteca, para ser actualizados, por el titular al personal de la biblioteca.</p>
    <br>
    <p><span style="color: #ff00ff"><strong>PR??STAMOS A DOMICILIO:</strong><span></p>

    <p><strong>??Cual es el requisito indispensable para acceder a los prestamos a domicilio?</strong></p>

    <p>El requisito indispensable, es estar inscripto en biblioteca, para gozar de pr??stamos de material 
    bibliogr??fico a domicilio.</p>
   
    <p>Los pr??stamos son personales debiendo presentar, Libreta de Trabajos Pr??cticos o Documento de 
    Identidad o C??dula, sin excepci??n, siendo el material facilitado de absoluta responsabilidad de quien 
    lo retira.</p>
    <p><strong>??Quienes pueden realizar las devoluciones?</strong></p>
    <p>Las devoluciones no son personales y pueden ser realizadas por terceros.</p>
    </p>
    </p><strong>??Cuantos materiales de la biblioteca pueden llevarse a su domicilio, en el prestamo?</strong></p>
    <ul>
    <li>Los/las docentes, investigadores/as, tesistas, maestrandos/as y doctorandos/as podr??n retirar hasta cuatro (4) libros y cuatro (4) revistas.</li>
    <li>Los/las alumnos/as, ayudantes-alumnos/as, egresados/as y no-docentes podr??n retirar hasta tres (3) libros y tres (3) revistas.</li></ul>
    <p>Dichos pr??stamos se efectuar??n por el t??rmino de siete(7) d??as corridos, con excepci??n de los <i>"pr??stamos restringidos"</i> 
    de dos (2) d??as. Un/a mismo/a usuario/a no podr?? retirar dos ejemplares iguales.</p>

    <p><strong>??Que tipo de material puede prestarse a domicilio, de la biblioteca?</strong></p>
    <p>En el acervo bibliogr??fico de la biblioteca, se distinguen las siguientes categor??as:</p>

    <p><strong><i>Material para pr??stamos en sala, a domicilio e interbibliotecario:</i></strong></p>
    <ul>
    <li>bibliograf??a de todas las secciones, salvo las excepciones contempladas en el apartado (2) bibliograf??a incluida en la modalidad Estanter??a Abierta que adem??s se puede consultar sin presentaci??n del DNI. </li>
    <li>bibliograf??a seleccionada por las distintas c??tedras que podr??n consultarse en sala de lunes a viernes y estar?? disponible para el pr??stamo a domicilio y/o interbibliotecario, los viernes a partir de las 17:00 hs. hasta el lunes siguiente antes de las 11:00 hs.</li>
    </ul>

    <p><strong><i>Material audiovisual:</i></strong></p>
    
    <ul>
    <li>m??todo Linguaphone de ingl??s, franc??s, griego y lat??n, el cual se prestar?? por el t??rmino de quince (15) d??as.</li>
    </ul>
   
    <p><strong><i>Material bibliogr??fico disponible s??lo para consulta en sala de lectura:</i></strong></p>
    
    <ul>
    <li>obras de referencia: 
    <li>enciclopedias</li> 
    <li>diccionarios</li>
    <li>gu??as</li>
    <li>mapas</li>
    <li>y otros materiales bibliogr??ficos</li>
    </ul>
    <p><strong><i>Los libros de Valor Especial del acervo bibliogr??fico de la biblioteca:</i></strong></p>
    
    <ul>
    <li>ediciones agotadas</li>
    <li>antiguas</li>
    <li>libros ilustrados y de lujo</li>
    <li>libros anteriores a 1930 (Fondo Antiguo)</li>
    <li>c??dices</li>
    <li>obras que integran el fondo documental de la bibliotca ???Monse??or Pablo Cabrera???</li>
    <li>y otros materriales del acervo bibliogr??fico</li>
    </ul>
    <br>
    <p><span style="color: #ff00ff"><strong> DEVOLUCIONES:</strong><span></p>
    <ul>
    <li>Los/as usuarios/as deber??n devolver el material bibliogr??fico en las fechas o plazos estipulados por la Biblioteca, en caso de demora ser??n pasibles de las sanciones correspondientes y previstas en el art.15 del presente reglamento.</li>
    <li>Los libros devueltos en el d??a, se prestar??n nuevamente a partir del d??a siguiente, con excepci??n de los d??as viernes, en que podr??n volver a prestarse a partir de la apertura de la biblioteca.</li>
    <li>El/la mismo/a usuario/a no podr?? retirar m??s de dos veces consecutivas el mismo libro.</li>
    </ul>
    <br>
    <p><strong><i>Texto modificado del original, con la intencion acercar informacion y que la lectura sea mas entendible. Fuente: Reglamento de la biblioteca.</i></strong></p>
    <p>Para mas informacion y confiable.<strong> Lea el Reglamento de la biblioteca: <a href="https://ffyh.unc.edu.ar/biblioteca/reglamento-de-la-biblioteca/">https://ffyh.unc.edu.ar/biblioteca/reglamento-de-la-biblioteca/</a></strong></p>
    <br>
    
    <p><span style="color: #ff00ff"><strong> PR??STAMOS INTERBIBLIOTECARIOS</strong><span></p>
    
    <p>Los prestamos son personales y todos los usuarios deberan presentar:</p>
    <ul>
    <li>su DNI y Libreta de Trabajos Practicos.</li>
    <li>su DNI, Libreta de Trabajos Practicos y/o  Pasaporte en el caso de ser usuarios extranjeros.</li>
    </ul>
    <p>Prestamos Interbibliotecarios:</p>
    <ul>
    <li><strong>UNC:</strong> Todos los socios pueden beneficiarse con este sistema y solicitar materiales no disponibles en esta biblioteca a otras bibliotecas de la UNC.</li>
    <li><strong>ABUC:</strong> Todos los socios pueden solicitar en pr??stamo material disponibles en bibliotecas de otras universidades de la provincia de C??rdoba trav??s de ABUC (Acuerdo de Bibliotecas Universitarias de C??rdoba), abriendo un importante abanico de posibilidades en cuanto a la cooperaci??n e intercambio de bibliograf??a.</li>
    
    </ul>
    <br>
    
    <p>Visite el Sitio Oficial de ABUC: <a href="https://abuc.org.ar/portal/">https://abuc.org.ar/portal/</a></p>
    
   
    <p>Reglamento Biblioteca de FFyH - Psicologia: <a href="https://ffyh.unc.edu.ar/biblioteca/reglamento-de-la-biblioteca/">https://ffyh.unc.edu.ar/biblioteca/reglamento-de-la-biblioteca/</a>
    `)


    incluir_seccion_hijo("procedimientos_documentos_digitalizados","Procedimientos para la consulta de documentos digitalizados","instructivos_guias_varios")
    actualizar_parrafo("procedimientos_documentos_digitalizados",`
    <p><span style="color: #ff00ff"><strong>Documentos Historicos</strong></span</p>
    <br>
    <p><strong>??Cuales son los Procedimientos para la consulta de documentos digitalizados?</strong></p>
    <br>
    <p><strong>En principio es Enviar el listado con los n??meros de documentos (signatura archiv??stica):</strong></p>
    <ul>
    <li>Completar formulario web </li>
    <li>Formulario en papel (a completar in situ).</li>

    <li>Correo electr??nico a las direcciones:
    <ol>
    <li><a href="mailto:sfois@ffyh.unc.edu.ar">sfois@ffyh.unc.edu.ar</a></li>
    <li><a href="mailto:javiergonzalez@ffyh.unc.edu.ar">javiergonzalez@ffyh.unc.edu.ar</a></li>
    </ol>
    </li>
    </ul>
    <br>
    <p><strong>??Cuales son los n??meros de documentos (signatura archiv??stica)?</strong></p>
    <p>Un numero de documento, es un numero que tiene un archivo, es un numero unico, como codigo barra, que se lo puede identificar.</p>
    <p>Es un numero que identifica un item dentro de una coleccion o reservorio bibliografico, que se utiliza en la archivistica.
    Para conocer el numero, es necesario hacer una busqueda en el catologo online de la Biblioteca
    para poder encontrar las siglas que identifica: la sala o el espacio en el cual se encuentra guardado.</p>
    
    <br>
   
   

    
    
    <br>
    <p><strong>Compromiso de parte del usuario, citar el documento.</strong></p>
    <p>Esto siginifica que el paper producido por su investigacion, en base a la informacion del documento/archivo/libro/publicacion, prestado por la biblioteca, tiene ?? deberia ser citado por parte del investigador en donde consiguio el documento o informacion.</p>
    <p><strong><i>Departamento de Estudios Americanistas y Antropologia. Biblioteca Facultad de Filosofia y Humanidades. Universidad Nacional de C??rdoba</i></strong></p>

    
    <p>Ejemplo de cita:</p>
    <p><i>Documento 11256. Colecci??n Documental Monse??or Pablo Cabrera. Departamento de Estudios Americanistas y Antropolog??a. Biblioteca Facultad de Filosof??a y Humanidades - Facultad de Psicolog??a. Universidad Nacional de C??rdoba.</i></p>
 
   <br>
   <p>El cat??logo de la Colecci??n documental debe ser citado de la siguiente manera:</p>
    <p><i>Benito Moya, S. G. A. (2002). Cat??logo Documental ??Mons. Dr. Pablo Cabrera??. C??rdoba, Argentina : Facultad de Filosof??a y Humanidades, Universidad Nacional de C??rdoba.</i></p>
    <br>

    <p><strong>Consignar los siguientes datos:</strong></p>
    <br>
    <p>Agregar o completar los siguientes campos, pesta??as segun corresponda:</p>

    <ul>
    <li>Signatura archiv??stica del documento </li>
    <li>Nombre y apellido </li>
    <li>Instituci??n de pertenencia </li>
    <li>Proyecto: T??tulo y radicaci??n</li>
    <li>Director del proyecto </li>
    <li>Direcci??n de Correo electr??nico </li>
    <li>Tel??fono </li>
    </ul>
    <br>
    <img src="./pages/biblioteca/imagenes/imagen-agregar-campos.png" alt="Captura de pantalla, pagina de Consultar documentos digitalizados, seccion completar campos" style="box-sizing: border-box; margin-top: 5px; margin-bottom: 5px; width: 100%; height: 100%;">

    <br>
    <p>Agregar o subir archivos/documentos en las siguientes input, pesta??as:</p>
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

   <p>Usted se comunic?? con la Biblioteca para solicitar un turno para la consulta en el Dpto Americanistas y/o el Banco de Tesis de Psicolog??a. Es necesario que complete este formulario y detalle la bibliograf??a que necesita (Autor, t??tulo y signatura topogr??fica) para lo cual deber?? ingresar al cat??logo y verificar si esta disponible: </p>
   <p><a href="https://ffyh.biblio.unc.edu.ar/"target="_blank" rel="noopener"><strong>https://ffyh.biblio.unc.edu.ar/</strong></a></p>
   <br>
   <p>Recuerde consignar su n??mero de celular y correo electr??nico y nos estaremos comunicando para otorgarle un turno.</p>

   <p>Si Ud. no esta inscripto/a en la Biblioteca en el 2021 por favor complete el formulario de este enlace:</p>
   <p><a href="https://ffyh.unc.edu.ar/biblioteca/inscripcion-a-biblioteca-2020-online/"target="_blank" rel="noopener"><strong>https://ffyh.unc.edu.ar/biblioteca/inscripcion-a-biblioteca-2020-online/</strong></a></p>
   <br>
   <p>Por cualquier consulta escribanos a: <a href="mailto:circulacion@ffyh.unc.edu.ar">circulacion@ffyh.unc.edu.ar</a></p>
    <br>
   <p><strong>Fuente:</strong> Pagina de la Consulta en el Dpto Americanistas y/o el Banco de Tesis de Psicolog??a.</p>
    <p>Para ir al Sitio:</p>
    <p><a href="https://ffyh.unc.edu.ar/biblioteca/consulta-en-el-dpto-americanistas-y-o-el-banco-de-tesis-de-psicologia/"target="_blank" rel="noopener noreferrer"><strong>https://ffyh.unc.edu.ar/biblioteca/consulta-en-el-dpto-americanistas-y-o-el-banco-de-tesis-de-psicologia/</strong></a></p>
    <br>
    <p>Para ir Formulario de Google:</p>
    <p><a href="https://docs.google.com/forms/d/e/1FAIpQLScp7PgQYM4vA7Md2E04ZI-VIkWVpcK1AJuWwnhGq7TrnLadKA/viewform"target="_blank" rel="noopener noreferrer"><strong>https://docs.google.com/forms/d/e/1FAIpQLScp7PgQYM4vA7Md2E04ZI-VIkWVpcK1AJuWwnhGq7TrnLadKA/viewform</strong></a></p>
    `)
    incluir_seccion_hijo("devoluciones","Devoluciones","instructivos_guias_varios" )
    actualizar_parrafo("devoluciones",`
    <p>Las devoluciones pueden hacerlas un compa??ero ?? un tercero .</p>
    <p>El retraso de las devoluciones tendr??n una sanci??n: por cada d??a de retraso son tres d??as de suspensi??n. Tanto los d??as de retraso como los de suspensi??n ser??n contados de corrido.</p>
    <br>
    <p>Para mas informacion y confiable.<strong> Lea el Reglamento de la biblioteca: <a href="https://ffyh.unc.edu.ar/biblioteca/reglamento-de-la-biblioteca/ target="_blank" rel="noopener noreferrer"">https://ffyh.unc.edu.ar/biblioteca/reglamento-de-la-biblioteca/</a></strong></p>
    <p>Seccion Devolucion, pagina de la Biblioteca: <a href="https://ffyh.unc.edu.ar/biblioteca/devoluciones/" target="_blank" rel="noopener noreferrer">https://ffyh.unc.edu.ar/biblioteca/devoluciones/</a></p>
    `)
    incluir_seccion_hijo("solicitud_libre_deuda","Formulario de Solicitud de Libre Deuda", "instructivos_guias_varios")
    actualizar_parrafo("solicitud_libre_deuda",`
    <p><span style="color: #ff00ff"><strong>??Que es la constancia de libre deuda de la Biblioteca?</strong></span></p>
    <p>La constancia de libre deuda de Biblioteca es un requisito obligatorio para la realizaci??n de todos los tr??mites relacionados con el egreso del alumnado o la baja de una carrera, y las renuncias o licencias del personal docente, no docente y de gesti??n de la institucion.</p> 
    <p>Su objetivo es garantizar el reintegro de los libros y materiales que los estudiantes/integrantes de la Facultad puedan tener en su poder (cuando realizaron prestamos domiciliarios y no realizaron la devolucion) antes de su desvinculaci??n temporal o definitiva de la Instituci??n. </p>
    <br>
    <p><span style="color: #ff00ff"><strong>CONSTANCIA DE LIBRE DEUDA DE BIBLIOTECA </strong></span></p>
   
    <p>Para solicitar la constancia de libre deuda ten??s que haber aprobado tu ??ltimo final y no tener libros de la biblioteca en pr??stamo. El tr??mite NO es personal y se puede hacer de forma presencial en la biblioteca (presentando DNI o Pasaporte si sos extranjere), o bien completando el siguiente formulario.</p>
    <br>
    <p><span style="color: #ff00ff"><strong>Formulario de Solicitud de Libre Deuda</strong></span></p>
      
    <p>Ingrese a la seccion Formulario de Solicitud de Libre Deuda, de la pagina de la Biblioteca para solicitar la constancia de libre deuda:</p>
    <p><a href="https://ffyh.unc.edu.ar/biblioteca/libre-deuda/" target="_blank" rel="noopener noreferrer">https://ffyh.unc.edu.ar/biblioteca/libre-deuda/</a></p>
   `)   
   incluir_seccion_hijo("formacion_usuario_visitas","Formaci??n de usuarios y visitas guiadas", "instructivos_guias_varios")
   actualizar_parrafo("formacion_usuario_visitas",`
    <p><span style="color: #ff00ff"><strong>FORMACI??N DE USUARIOS</strong></span></p>
    <p>Implementa cursos de formaci??n de usuarios a alumnos, docentes, investigadores y p??blico en general,  en dos niveles: </p>
    <ul>
    <li>B??sico: de introducci??n al uso del Cat??logo de la biblioteca y los recursos electr??nicos disponibles.</li>
    <li>Especializado: incluye lo anterior y el uso de las herramientas para recuperar la informaci??n de las bases de datos de revistas electr??nicas.</li>
    </ul>
    <p>Para solicitar estos cursos enviar correo a: <a href="mailto:circulacion@ffyh.unc.edu.ar">circulacion@ffyh.unc.edu.ar</a></p>
    <br>
    <p><span style="color: #ff00ff"><strong>VISITAS GUIADAS</strong></span></p>
    <p>Las Instituciones que deseen realizar una visita a nuestra Biblioteca, por favor enviar correo a: <a href="mailto:circulacion@ffyh.unc.edu.ar">circulacion@ffyh.unc.edu.ar</a></p>
    <br>
    <p>Visite la seccion Formaci??n de usuarios y visitas guiadas, de la pagina de la Biblioteca:</p>
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
   incluir_seccion_hijo("inscripcion_egresados_biblioteca","Inscripci??n de Egresados","instructivos_guias_varios" )
   actualizar_parrafo("inscripcion_egresados_biblioteca",`
   <p>Solo pueden inscribirse los egresados de las Facultades de Filosof??a y Humanidades de Psicolog??a.</p>
   <br>
   <p><span style="color: #ff00ff"><strong>EGRESADOS FACULTAD DE FILOSOF??A Y HUMANIDADES</strong></span></p>
   <p>En la pesta??a de <a href="https://blogs.ffyh.unc.edu.ar/graduados/nuevo-regimen-para-asociacion-a-la-biblioteca-de-la-ffyh/" target="_blank" rel="noopener noreferrer">Asociaci??n a la biblioteca</a>, de la pagina de la Oficina de Graduados, se encuentra el instructivo y podes descargar el formulario. 
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
   <p><span style="color: #ff00ff"><strong>EGRESADOS FACULTAD DE PSICOLOG??A</strong></span></p>
      <p>Inscripcion de los egresados de la Facultad de Filosofia:.<strong> Requisitos de inscripci??n para egresados Facultad de Psicolog??a: <a href="https://ffyh.unc.edu.ar/biblioteca/requisitos-de-inscripcion-para-egresados-facultad-de-psicologia/" target="_blank" rel="noopener noreferrer">https://ffyh.unc.edu.ar/biblioteca/requisitos-de-inscripcion-para-egresados-facultad-de-psicologia/</a></strong></p>
    <br>
    <p>Para mas informacion y confiable.<strong> Lea el Reglamento de la biblioteca: <a href="https://ffyh.unc.edu.ar/biblioteca/reglamento-de-la-biblioteca/" target="_blank" rel="noopener noreferrer">https://ffyh.unc.edu.ar/biblioteca/reglamento-de-la-biblioteca/</a></strong></p>
    <p>Visite seccion Inscripci??n de Egresados, pagina de la Biblioteca: <a href="https://ffyh.unc.edu.ar/biblioteca/carnet-de-egresados/" target="_blank" rel="noopener noreferrer">https://ffyh.unc.edu.ar/biblioteca/carnet-de-egresados/</a></p>
   `)
    incluir_seccion_padre("recursos_digitales_online","RECURSOS DIGITALES Y ONLINE")
    incluir_seccion_hijo("biblioteca_electronica_mincyt","Biblioteca Elcetr??nica Mincyt","recursos_digitales_online")
    actualizar_parrafo("biblioteca_electronica_mincyt",`
   
    <p><span style="color: #ff00ff"><strong>??Que es Biblioteca Elcetr??nica Mincyt?</strong></span></p>
    <br>
    <p>Es una biblioteca online, con recursos y base de datos de muchas instituciones.</p>
    <p>Su principal objetivo es brindar acceso, a trav??s de Internet, 
   a art??culos completos de publicaciones peri??dicas cient??ficas y
    tecnol??gicas, bases de datos referenciales, res??menes y dem??s 
    informaci??n bibliogr??fica nacional e internacional de inter??s
     para los integrantes del Sistema de Ciencia y Tecnolog??a.</p>
     <p>Se trata de una herramienta que brinda bibliograf??a local e 
     internacional, res??menes e informaci??n de inter??s a los integrantes 
     del Sistema Nacional de Ciencia y Tecnolog??a, mediante Internet. 
     Fue creada en diciembre de 2002, en l??nea con lo establecido por 
     la Ley de Ciencia, Tecnolog??a e Innovaci??n, N?? 25.467.</p>
    <p>Correo Electronico:<a href="mailto:biblioteca@mincyt.gob.ar">biblioteca@mincyt.gob.ar.</a></p>

     <br>
     <p>Visite pagina de la Biblioteca Elcetr??nica Mincyt: <a href="https://biblioteca.mincyt.gob.ar/" target="_blank" rel="noopener noreferrer">https://biblioteca.mincyt.gob.ar/</a></p>
     <p>Visite el articulo de noticia, de la pagina Argentina. Investigadores podr??n acceder a la Biblioteca Electr??nica de Ciencia y Tecnolog??a desde sus hogares:</p>
     <p> <a href="https://www.argentina.gob.ar/noticias/investigadores-podran-acceder-la-biblioteca-electronica-de-ciencia-y-tecnologia-desde-sus#:~:text=Se%20trata%20de%20una%20herramienta,Tecnolog%C3%ADa%20e%20Innovaci%C3%B3n%2C%20N%C2%BA%2025.467." target="_blank" rel="noopener noreferrer">Articulo:  Investigadores podr??n acceder a la Biblioteca Electr??nica de Ciencia y Tecnolog??a desde sus hogares.</a></p>
    `)
    incluir_seccion_hijo("portal_informacion_icyta","Portal de Informaci??n de Ciencia y Tecnolog??a Argentino","recursos_digitales_online")
    actualizar_parrafo("portal_informacion_icyta",`
    <p><span style="color: #ff00ff"><strong>Informaci??n para la transparencia y la innovaci??n</strong></span></p>
    <p>El Portal de informaci??n de ciencia y tecnolog??a argentino es la puerta de acceso oficial a informaci??n de inter??s p??blico en ciencia, tecnolog??a e innovaci??n en la Rep??blica Argentina. Es una iniciativa que promueve la transparencia, el acceso a la informaci??n p??blica y la rendici??n de cuentas, ligada a las pol??ticas de gobierno abierto y que forma parte del Plan de Apertura de Datos establecido por el Poder Ejecutivo Nacional. Est?? dirigido a usuarios diversos: ciudadanos curiosos, cient??ficos, emprendedores, funcionarios de gobierno, periodistas e inform??ticos.</p>
    <br>
    <p><span style="color: #ff00ff"><strong>??Qui??nes somos?</strong></span></p>
    <p>Este Portal es coordinado y administrado por la Subsecretar??a de Evaluaci??n Institucional, que depende de la Secretar??a de Articulaci??n Cient??fico Tecnol??gica del Ministerio de Ciencia, Tecnolog??a e Innovaci??n de la Naci??n. Los datos que encontrar??s aqu?? involucran a las diversas ??reas de la cartera y a todos los organismos bajo su ??rbita que poseen informaci??n en ciencia, tecnolog??a e innovaci??n.</p>
    <br>
    <p><span style="color: #ff00ff"><strong>Todo lo que hay para conocer sobre???</strong></span></p>
     <p>Desde este Portal pod??s tener un acceso f??cil y claro a diferentes secciones de informaci??n p??blica: qu?? se hace en ciencia, tecnolog??a e innovaci??n en Argentina, qui??nes lo hacen, con qu?? equipamientos trabajan, en qu?? instituciones lo hacen, qu?? datos cient??ficos est??n disponibles, qu?? resultados hay de estas actividades, y datos estad??sticos sobre ellas.</p>
     <br>
     <p><span style="color: #ff00ff"><strong>??C??mo pod??s involucrarte?</strong></span></p>
    <ul>
    <li><strong>Curioso:</strong> Ten??s instinto natural para buscar informaci??n y conocer tu entorno.
    Si est??s interesado en descubrir el mundo de la ciencia y tecnolog??a argentina no dudes en navegar este portal.</li>
    <li><strong>Cient??fico: </strong>Descubr??s, conoc??s e innov??s para aportar al bien com??n.
    Acced?? y descubr?? toda la informaci??n que se puede aprovechar para generar nuevas ideas.</li>
    <li><strong>Emprendedor:</strong> La informaci??n es tu herramienta para innovar.
    Acced?? a toda la informaci??n sobre proyectos tecnol??gicos, d??nde se realizan y qu?? personas participan.</li>
    <li><strong>Desarrollador inform??tico:</strong>Cre??s en una comunidad abierta.
    Acced?? y descubr?? toda la informaci??n disponible y sumate a nuestros proyectos para nuevos desarrollos con datos abiertos. Si ya ten??s un desarrollo compart?? tu experiencia con nosotros.</li>
    <li><strong>Periodista:</strong> Combin??s el olfato con la capacidad de contar historias.
    Explor?? nuestro portal y conoc?? qu??, qui??nes, d??nde, y con qu?? de la ciencia y la tecnolog??a argentina.</li>
    <li><strong>Gobierno:</strong> Sos uno de nosotros y cre??s en la pol??tica p??blica como un bien com??n.
    Analiz?? en qu?? aporta la ciencia y la tecnolog??a argentina a la resoluci??n de los problemas de todos.</li>
    </ul>
    <br>
    <p>Pod??s formar parte de nuestro Portal utilizando la informaci??n disponible y compartiendo tus experiencias de reutilizaci??n de los datos, ideas y sugerencias. Ellas nos ayudar??n a conocerte mejor y a mejorar los servicios que podemos ofrecerte.</p>
    <br>
    <p>Visite la pagina Portal de Informaci??n Ciencia y Tecnolog??a Argentino: <a href="https://datos.mincyt.gob.ar/#/" target="_blank" rel="noopener noreferrer">https://datos.mincyt.gob.ar/#/</a></p>
    <p>Fuente: seccion de Acerca de, del Portal de Informaci??n Ciencia y Tecnolog??a Argentino:</p>
    <p> <a href="https://datos.mincyt.gob.ar/#/acercade" target="_blank" rel="noopener noreferrer">Seccion: Acerca de</a></p>
    `)
    incluir_seccion_hijo("portal_dacytar","Portal DACyTAr","recursos_digitales_online")
    actualizar_parrafo("portal_dacytar",`
    <br>
    <p>El portal te permite, de forma centralizada, buscar y acceder a todos los conjuntos de datos primarios de investigaci??n disponibles en acceso abierto a trav??s de los repositorios digitales institucionales que integran el Sistema Nacional de Repositorios Digitales (SNRD).</p>
    <br>
    <p><span style="color: #ff00ff"><strong>??QUE ES EL PORTAL DACyTAr?</strong></span></p>
    <br>
    <p>DACyTAr es el portal de que te permite, de forma centralizada, buscar y acceder a todos los conjuntos de datos primarios de investigaci??n disponibles en acceso abierto a trav??s de los repositorios digitales institucionales que integran el <a href="https://repositoriosdigitales.mincyt.gob.ar/vufind/" target="_blank" rel="noopener noreferrer">Sistema Nacional de Repositorios Digitales (SNRD)</a>.</p>

    <p>DACyTAr se encuadra en la <a href="https://repositoriosdigitales.mincyt.gob.ar/files/Boletin_Oficial_Ley_26899.pdf" target="_blank" rel="noopener noreferrer">Ley No. 26.899</a> y su <a href="https://repositoriosdigitales.mincyt.gob.ar/files/Boletin_Oficial_Resolucion_753.pdf" target="_blank" rel="noopener noreferrer">reglamentaci??n</a> que exigen, a los organismos e instituciones p??blicas que componen el Sistema Nacional de Ciencia, Tecnolog??a e Innovaci??n (SNCTI) y que reciben financiamiento del Estado nacional, a hacer disponible en Acceso Abierto a trav??s de repositorios digitales interoperables, la producci??n cient??fico-tecnol??gica resultante del trabajo, formaci??n y/o proyectos, financiados total o parcialmente con fondos p??blicos, de sus investigadoras/res, tecn??logas/os, docentes, becarias/os de posdoctorado y estudiantes de maestr??a y doctorado. Esa producci??n cient??fico-tecnol??gica abarca tanto al conjunto de documentos (art??culos de revistas, trabajos t??cnico-cient??ficos, tesis acad??micas, entre otros) como tambi??n a los datos primarios de investigaci??n que son el resultado de actividades de investigaci??n. A su vez, la normativa requiere a las instituciones que definan sus "Pol??ticas Institucionales de Acceso Abierto" seg??n los requisitos establecidos en la reglamentaci??n y el modelo del plan de gesti??n de datos que debe usar su comunidad cient??fica.</p>

    <p>Este portal es producto del cumplimiento de los est??ndares y protocolos de interoperabilidad establecidos por el SNRD siguiendo pautas y acuerdos internacionales. Estos est??ndares, permiten que los repositorios institucionales se comuniquen entre s?? y se integren a redes de repositorios y/o portales como DACyTAr o SNRD. Asimismo, se promueven los Principios FAIR como una forma de producir, gestionar y compartir datos cient??ficos.</p>
    <br>
    <p>Visite la pagina Portal de Portal DACyTAr: <a href="https://dacytar.mincyt.gob.ar/" target="_blank" rel="noopener noreferrer">https://dacytar.mincyt.gob.ar/</a></p>
    <p>Fuente: seccion de Sobre DACyTAr, del Portal DACyTAr:</p>
    <p> <a href="https://dacytar.mincyt.gob.ar/acerca" target="_blank" rel="noopener noreferrer">Seccion: Sobre DACyTAr</a></p>
    `)

    incluir_seccion_hijo("biblioteca_clacso","Biblioteca Clacso","recursos_digitales_online")
    actualizar_parrafo("biblioteca_clacso",`

    <p><span style="color: #ff00ff"><strong>??QUE ES CLACSO?</strong></span></p>

  
    <p>El Consejo Latinoamericano de Ciencias Sociales (CLACSO) es una instituci??n internacional no-gubernamental con status asociativo en la UNESCO, creada en 1967. Actualmente, re??ne 836 centros de investigaci??n y posgrado en el campo de las ciencias sociales y las humanidades en 55 pa??ses de Am??rica Latina y otros continentes.</p>
    <br>
    <p><span style="color: #ff00ff"><strong>Los 10 objetivos de CLACSO</strong></span></p>



    <ul>
    <li>Promover la investigaci??n social para el combate a la pobreza y la desigualdad, el fortalecimiento de los derechos humanos y la participaci??n democr??tica.</li>
    <li>Contribuir, desde los aportes de la investigaci??n acad??mica y del pensamiento cr??tico, a promover pol??ticas de desarrollo sustentables en t??rminos econ??micos, sociales y ambientales.</li>
    <li>Tender puentes entre la investigaci??n social y las pol??ticas p??blicas, impulsando acciones innovadoras, creativas y viables ante los grandes desaf??os sociales, educativos, culturales y ambientales de Am??rica Latina y el Caribe.</li>
    <li>Apoyar la formaci??n de redes de investigadores/as e instituciones que act??an en el campo de las ciencias sociales y las humanidades.</li>
    <li>Fortalecer los procesos de internacionalizaci??n acad??mica en Am??rica Latina y el Caribe.</li>
    <li>Ampliar la cooperaci??n y el di??logo acad??mico Sur-Sur y Norte-Sur.</li>
    <li>Estimular el desarrollo y la consolidaci??n de las ciencias sociales y del pensamiento cr??tico en los pa??ses m??s pobres de Am??rica Latina y el Caribe.</li>
    <li>Intervenir en el debate p??blico nacional y regional, aportando las perspectivas y contribuciones de la investigaci??n social basada en resultados.</li>
    <li>Colaborar con la formaci??n de agentes gubernamentales, activistas sociales y profesionales de la prensa en temas sociales, educativos, culturales y ambientales, acerc??ndolos a problem??ticas abordadas desde las ciencias sociales y a las evidencias que la investigaci??n social aporta.</li>
    <li>Generar condiciones de acceso abierto a la producci??n acad??mica latinoamericana y caribe??a, contribuyendo a la democratizaci??n del acceso al conocimiento y permitiendo su m??s activa utilizaci??n por parte de los gestores de pol??ticas p??blicas, las organizaciones sociales y ciudadanas, la prensa y el propio sistema universitario.</li>
    </ul>
    <br>
    <p><span style="color: #ff00ff"><strong>Los 10 ejes centrales de CLACSO</strong></span></p>
    <ul>
    <li>Reducci??n de las desigualdades y de la injusticia social.</li>
    <li>Combate al racismo, la discriminaci??n ??tnica y de g??nero. </li>
    <li>Garant??as y protecci??n legal en los procesos migratorios y de movilidad humana.</li>
    <li>Defensa de la educaci??n p??blica y ampliaci??n del derecho a la educaci??n de calidad para todos/as.</li>
    <li>Contribuci??n al desarrollo de procesos de paz.</li>
    <li>Promoci??n del acceso abierto y la democratizaci??n del conocimiento.</li>
    <li>Promoci??n de pol??ticas de seguridad ciudadana y combate a la violencia.</li>
    <li>Promoci??n de los derechos de la infancia y la juventud.</li>
    <li>Promoci??n de la participaci??n, la movilizaci??n ciudadana y el fortalecimiento de la democracia.</li>
    <li>Promoci??n de pol??ticas de desarrollo econ??mico, social y ambientalmente sostenibles.</li>
    </ul>
    <br>
    <p><span style="color: #ff00ff"><strong>RED DE BIBLIOTECA VITUALES CLACSO</strong></span></p>

    <p>La Red de Bibliotecas Virtuales CLACSO, repositorio digital, ofrece acceso libre a m??s de 100.000 textos de la red CLACSO y recibe m??s de un mill??n de solicitudes por mes en CLACSO y en la colecci??n CLACSO en Redalyc.</p>
    <p>El portal CLACSO-REDALYC ofrece acceso abierto e indicadores de 850 revistas de ciencias sociales y humanidades de Iberoam??rica (350.721 art??culos). Esta colecci??n recibe m??s de 4 millones de descargas por mes.</p>
    <p>Es un servicio de CLACSO con la participaci??n del los grupos publicaciones, biblioteca y multimedia de los centros miembros de CLACSO.</p>
    <br>
    <p>Visite la pagina Red de Bibliotecas virtuales de Ciencias Sociales de America Latina y El Caribe: <a href="http://www.biblioteca.clacso.edu.ar/" target="_blank" rel="noopener noreferrer">http://www.biblioteca.clacso.edu.ar/</a></p>
    <p>Fuente: seccion de ??Que es CLACSO?, de la pagina CLACSO:</p>
    <p> <a href="https://www.clacso.org/institucional/" target="_blank" rel="noopener noreferrer">https://www.clacso.org/institucional/</a></p>
    
    `)


    incluir_seccion_hijo("biblioteca_tematica_literatura_cordoba","Biblioteca tematica de la Literatura de Cordoba","recursos_digitales_online")
    actualizar_parrafo("biblioteca_tematica_literatura_cordoba",`
    <br>
    <p><span style="color: #ff00ff"><strong>Los Escritores de C??rdoba y sus Obras en la BTLC</strong></span></p>
    <br>
    <p>Este es el sitio de La Biblioteca Tem??tica de la Literatura de C??rdoba.</p>                   
    <p>Aqu?? nos proponemos dar conocimiento y orientar b??squedas respecto de la creaci??n literaria, la investigaci??n y la cr??tica sobre las obras de los autores de C??rdoba, en especial, se??alando esos textos que se guardan como acervo en las bibliotecas de las distintas facultades de la UNC. Es un espacio que integra muchas voces y textos de creadores, estudiosos e investigadores de las letras de la provincia.                            
    En esta etapa, que para nosotros es la primera, proponemos destacar la obra de los autores nacidos entre 1890 y la mitad del siglo XX, ya que se trata de un material (en general, con ediciones ??nicas) que carece, en su mayor??a, de presencia en la web.</p>

    <p>El objetivo busca dar cuenta de una producci??n literaria que alcanza colores y tonos propios. Creemos que el camino a trav??s de la biograf??a del autor es el m??s sencillo para responder al inter??s de la mayor??a de los lectores, que focalizan nombres particulares. Se remite al lector, adem??s, a ubicar la bibliograf??a mencionada, en alguna biblioteca de la UNCba <a href="https://ffyh.unc.edu.ar/biblioteca/escritores-de-cordoba/sobre-la-biblioteca-tematica-de-la-literatura-de-cordoba/" target="_blank" rel="noopener noreferrer">(Articulo completo)</a>.</p> 
    
    <p><strong><i>Autora: Bibiana Eguias</i></strong></p>
    <br> 
    <p>Visite la pagina Red de Bibliotecas virtuales de Ciencias Sociales de America Latina y El Caribe: <a href="http://www.biblioteca.clacso.edu.ar/" target="_blank" rel="noopener noreferrer">http://www.biblioteca.clacso.edu.ar/</a></p>
    <p>Fuente: seccion de Los Escritores de C??rdoba y sus Obras en la BTLC, de la pagina de la Biblioteca FFyH:</p>
    <p>Visite esta pagina para conocer el indice completos de escritores de C??rdoba: <a href="https://ffyh.unc.edu.ar/biblioteca/escritores-de-cordoba/" target="_blank" rel="noopener noreferrer">https://ffyh.unc.edu.ar/biblioteca/escritores-de-cordoba/</a></p>
    
    `)
    incluir_seccion_hijo("repositorios_institucionales_digitales","Repositorios Institucionales","recursos_digitales_online")
    actualizar_parrafo("repositorios_institucionales_digitales",`
    <br>
    <p><span style="color: #ff00ff"><strong>??QUE SON LOS REPOSITORIOS DIGITALES?</strong></span></p>
    
    <p>Se consideran repositorios digitales a aquellas colecciones digitales de producci??n cient??fico-tecnol??gica de una instituci??n, en las que se permita la b??squeda y la recuperaci??n para su posterior uso nacional e internacional.</p>
    <br>
    <p style="text-align: justify"><span style="font-weight: 400;font-size: 14pt">El Sistema Nacional de Repositorios Digitales (SNRD) propone el modelo de Acceso Abierto (AA) a la producci??n cient??fico-tecnol??gica, que implica que los usuarios de este tipo de material puedan, en forma gratuita, leer, descargar, copiar, distribuir, imprimir, buscar o enlazar los textos completos de los art??culos cient??ficos, y usarlos con prop??sitos leg??timos ligados a la investigaci??n cient??fica, a la educaci??n o a la gesti??n de pol??ticas p??blicas, sin otras barreras econ??micas, legales o t??cnicas que las que suponga Internet en s?? misma.</span></p>
    <p style="text-align: justify"><span style="font-size: 14pt"><b>La ??nica condici??n que plantea este modelo para la reproducci??n y distribuci??n de las obras que se pongan a disposici??n es la obligaci??n de otorgar a los autores el control sobre la integridad de su trabajo y el derecho a ser adecuadamente reconocidos y citados.</b></span></p>
    <br>
    <p style="text-align: justify"><span style="font-size: 14pt"><a href="http://www.biblioteca.mincyt.gob.ar/recursos/accesoabierto?geo=AR" target="_blank" rel="noopener noreferrer"><span style="font-weight: 400">Repositorios Argentinos de Acceso Abierto</span></a></span></p>
    <br>
    <p><span style="color: #ff00ff"><strong>LISTS DE REPOSITORIOS DIGITALES</strong></span></p>
    <p style="color: #FF0000"><i>Visite esta pagina para conocer la lista completa de Repositorios Institucionales: <a href="https://ffyh.unc.edu.ar/biblioteca/repositorios-institucionales/" target="_blank" rel="noopener noreferrer">https://ffyh.unc.edu.ar/biblioteca/repositorios-institucionales/</a></i></p>

    <br>
    <p style="text-align: justify"><span style="font-size: 14pt"><b>Repositorio digital de investigaciones cient??ficas y tecnol??gicas de C??rdoba. </b></span><span style="font-weight: 400;font-size: 14pt"><a href="http://www.corciencia.org.ar/" target="_blank" rel="noopener noreferrer">Cor-Ciencia</a> constituye una plataforma digital de acceso libre y abierto a la producci??n cient??fica de la provincia de C??rdoba, elaborada por el Acuerdo de Bibliotecas Universitarias de C??rdoba (ABUC) y financiada por el Ministerio de Ciencia y Tecnolog??a de C??rdoba. Cor-Ciencia busca contribuir a la difusi??n y aumento de la visibilidad de la producci??n intelectual de la provincia de C??rdoba. </span></p>
    <p style="text-align: justify"><span style="font-size: 14pt"><b>SIU BDU</b><b>2</b><b>: Repositorios Institucionales. </b></span><span style="font-size: 14pt"><a href="http://cosechador.siu.edu.ar/bdu3/" target="_blank" rel="noopener noreferrer"><span style="font-weight: 400">BDU2</span></a><span style="font-weight: 400"> </span><span style="font-weight: 400">es un proyecto iniciado por el SIU (Sistema Universitario Nacional) para reunir recursos de informaci??n de valor acad??mico de libre disponibilidad para el usuario final. Dichos contenidos pueden ser Tesis de diversos grados acad??micos, Art??culos de Publicaciones Peri??dicas, Libros electr??nicos, Material de alto valor hist??rico digitalizado, Legislaci??n Educativa, Videos, Entrevistas y otros materiales puestos a disposici??n por instituciones acad??micas nacionales. Est?? orientado al p??blico en general con la misi??n de difundir la producci??n intelectual de las Universidades Nacionales y otras instituciones participantes. Tambi??n se orienta a p??blico especializado como alumnos, docentes e investigadores aportando un recurso de informaci??n y difusi??n importante para el apoyo de actividades acad??micas. </span></span></p>
    <p style="text-align: justify"><span style="font-weight: 400;font-size: 14pt"><a href="https://dash.harvard.edu/" target="_blank" rel="noopener noreferrer">DASH</a> es un repositorio centralizado que ofrece acceso abierto a la producci??n cient??fica generada por los investigadores de la universidad de Harvard.</span></p>
    <p style="text-align: justify"><span style="font-weight: 400;font-size: 14pt"><a href="http://www.latindex.unam.mx" target="_blank" rel="noopener noreferrer">Latindex</a> es un sistema de informaci??n sobre las revistas de investigaci??n cient??fica, t??cnico-profesionales y de divulgaci??n cient??fica y cultural que se editan en los pa??ses de Am??rica Latina, el Caribe, Espa??a y Portugal. Funciona sobre la base de la cooperaci??n regional a trav??s de una instituci??n responsable en cada pa??s participante. La Rep??blica Argentina lo integra desde 1998 a trav??s del Centro Argentino de Informaci??n Cient??fica y Tecnol??gica (CAICyT).</span></p>
    <p style="text-align: justify"><span style="font-weight: 400;font-size: 14pt"><a href="https://dialnet.unirioja.es/" target="_blank" rel="noopener noreferrer">Dialnet</a> es uno de los mayores portales bibliogr??ficos de acceso libre y gratuito, cuyo principal cometido es dar mayor visibilidad a la literatura cient??fica hispana en Internet, recopilando y facilitando el acceso a contenidos cient??ficos, principalmente a trav??s de alertas documentales. Adem??s cuenta con una base de datos exhaustiva, interdisciplinaria y actualizada, que permite el dep??sito de contenidos a texto completo.</span></p>
    <p style="text-align: justify"><span style="font-size: 14.0pt"><a href="http://www.gutenberg.org/wiki/ES_Portada" target="_blank" rel="noopener noreferrer">Proyecto Gutenberg</a> es una de las iniciativas m??s importantes que han surgido por parte de voluntarios en todo el mundo, quienes han hecho posible que tengamos acceso a m??s de 20.000 libros digitales, y m??s de 100.000 si consideramos a las webs afiliadas al programa. Todos estos libros est??n disponibles en gran cantidad de formatos para todo tipo de dispositivos electr??nicos, donde lo mejor es que no hay que pagar absolutamente nada.</span></p>
    <p style="text-align: justify"><span style="font-size: 14.0pt"><a href="https://es.wikisource.org/wiki/Portada" target="_blank" rel="noopener noreferrer">Wikisource</a>  es otro importante proyecto que surge de la Fundaci??n Wikimedia, aqu?? se concentran m??s de 100.000 textos de dominio p??blico todos en formato HTML.</span></p>
    <p style="text-align: justify"><span style="font-size: 14.0pt"><a href="https://books.google.es/" target="_blank" rel="noopener noreferrer">Google Books</a> es un proyecto que inici?? como un simple algoritmo de b??squeda, hoy en d??a es una de las bases de datos de libros digitalizados m??s grande que existe, esto gracias a sus m??s de 10 millones de t??tulos de una gran cantidad de instituciones afiliadas.</span></p>
    <p style="text-align: justify"><span style="font-size: 14.0pt">El <a href="http://repositorio.cepal.org/" target="_blank" rel="noopener noreferrer">Repositorio Digital de la Comisi??n Econ??mica para Am??rica Latina y el Caribe de las Naciones Unidas</a>  fue un gran esfuerzo por parte la CEPAL que nos permite acceder a una gran cantidad de material donde podremos encontrar libros, monograf??as, publicaciones peri??dicas, series y documentos de proyectos, investigaciones, conferencias y reuniones, donde un punto importante es que se actualiza de forma peri??dica.</span></p>
    <p style="text-align: justify"><span style="font-size: 14.0pt"><a href="http://www.caicyt.gov.ar/" target="_blank" rel="noopener noreferrer">CAICYT</a>  es el Centro Argentino de Informaci??n Cient??fica y Tecnol??gica<br />
    Base de datos bibliogr??fica. Incluye informaci??n sobre las publicaciones peri??dicas disponibles en m??s de 600 bibliotecas cooperantes cient??fico-t??cnicas de todo el pa??s. Permite realizar b??squedas simples y booleanas, por t??tulo, ??reas tem??ticas, bibliotecas, editores, etc.</span></p>
    <p style="text-align: justify"><span style="font-size: 14.0pt"><a href="http://datos.bancomundial.org/" target="_blank" rel="noopener noreferrer">Banco Mundial</a> (Open Knowledge Repository) El Banco mundial ofrece acceso abierto a m??s de 333.539 recursos electr??nicos correspondientes a las ciencias marinas y acu??ticas (incluye entre otras disciplinas: acuicultura, geociencias, biolog??a y ecolog??a).</span></p>
    <p style="text-align: justify"><span style="font-size: 14.0pt"><a href="http://www.bentham.org/open/index.htm" target="_blank" rel="noopener noreferrer">Bentham Open</a> ofrece acceso libre a aproximadamente 200 revistas que cubren la mayor??a de las disciplinas en ciencias, tecnolog??a y medicina. Se pueden consultar a trav??s de su listado alfab??tico o por materias.</span></p>
    <p style="text-align: justify"><span style="font-size: 14.0pt"><a href="http://cogprints.org/" target="_blank" rel="noopener noreferrer">CogPrints</a>  es un repositorio tem??tico en las ??reas de Psicolog??a, Neurociencia, Ling????stica, Filosof??a, Inteligencia Artificial, Redes Neuronales, etc.</span></p>
    <p style="text-align: justify"><span style="font-size: 14.0pt"><a href="http://www.driver-repository.eu/" target="_blank" rel="noopener noreferrer">DRIVER</a> (Digital Repository Infrastructure Vision for European Research) brinda acceso a aproximadamente 1 mill??n de documentos cient??ficos: art??culos de revista, tesis y disertaciones, libros, reportes, etc., de m??s de 250 repositorios institucionales o tem??ticos de 29 pa??ses de Europa.</span></p>
    <p style="text-align: justify"><span style="font-size: 14.0pt"><a href="http://www.ejournal.unam.mx/" target="_blank" rel="noopener noreferrer">E-Journal</a> es una hemeroteca digital que integra una selecta colecci??n de revistas cient??ficas y human??sticas editadas por diversas dependencias acad??micas de la Universidad Nacional Aut??noma de M??xico y algunas instituciones asociadas. Todas las publicaciones han sido cuidadosamente seleccionadas por estrictos criterios de calidad y reconocimiento, de entre el universo de revistas de este tipo. Conforman por ello una antolog??a de la producci??n editorial de publicaciones peri??dicas del medio acad??mico mexicano.</span></p>
    <p style="text-align: justify"><span style="font-size: 14.0pt"><a href="http://eprints.rclis.org/" target="_blank" rel="noopener noreferrer">E-LIS</a> (E-prints in Library and Information Science) promovido por el Ministerio de Cultura de Espa??a. Permite depositar documentos sobre bibliotecolog??a.</span></p>
    <p style="text-align: justify"><span style="font-size: 14.0pt"><a href="http://eprints.ucm.es/view/subjects/" target="_blank" rel="noopener noreferrer">E-Prints Complutense</a><b> </b>es un archivo institucional en acceso abierto desarrollado por la Biblioteca de la Universidad Complutense de Madrid para gestionar la documentaci??n digital fruto de la actividad de sus docentes, investigadores y los grupos de investigaci??n validados por la UCM. Contiene tesis doctorales, documentos de trabajo, art??culos de revistas, actas de congresos, libros, cap??tulos de libros, etc., en las distintas disciplinas que se dictan en la Universidad.</span></p>
    <p style="text-align: justify"><span style="font-size: 14.0pt"><a href="http://eric.ed.gov/" target="_blank" rel="noopener noreferrer">ERIC</a> (Education Resource Information Center) es la base de datos que re??ne 16 ??reas tem??ticas distintas. Cosecha su contenido del fichero de citas de documentos <i>Resources in Education (RIE)</i> y del fichero de citas de art??culos de revistas <i>Current Index to Journals in Education (CIJE)</i>. Es editada y actualizada trimestralmente por el Departamento de Educaci??n de Estados Unidos.</span></p>
    <p style="text-align: justify"><span style="font-size: 14.0pt"><a href="http://gredos.usal.es/jspui/" target="_blank" rel="noopener noreferrer">GREDOS</a> (Gesti??n del Repositorio Documental de la Universidad de Salamanca) ofrece la consulta en l??nea de documentos digitales con contenidos hist??ricos, cient??ficos, did??cticos e institucionales. La Universidad de Salamanca difunde en acceso abierto a trav??s de GREDOS colecciones patrimoniales, documentos cient??ficos y recursos docentes e informativos.</span></p>
    <p style="text-align: justify"><span style="font-size: 14.0pt"><a href="http://highwire.stanford.edu/lists/allsites.dtl?view=by+topic" target="_blank" rel="noopener noreferrer">HighWire Press</a> ofrece acceso al texto completo de art??culos de revistas de distintas tem??ticas. La base de datos es elaborada por Stanford University Libraries.</span></p>
    <p style="text-align: justify"><span style="font-size: 14.0pt"><a href="http://lcweb2.loc.gov/hlas/espanol/mdbquery.html" target="_blank" rel="noopener noreferrer">HLAS</a> (Handbook of Latin American Studies) es una base de datos con informaci??n producida en Latinoam??rica, la cual incluye libros, art??culos de revistas, publicaciones oficiales, actas de congresos y en algunos casos el texto completo.</span></p>
    <p style="text-align: justify"><span style="font-size: 14.0pt"><a href="http://www.journals4free.com/" target="_blank" rel="noopener noreferrer">Journals for Free</a>  es multidisciplinaria e incluye revistas de acceso abierto y algunas otras revistas con acceso a sus materiales.</span></p>
    <p style="text-align: justify"><span style="font-size: 14.0pt"><a href="http://www.lareferencia.info/vufind/" target="_blank" rel="noopener noreferrer">LA Referencia</a> (Red Federada de Repositorios Institucionales de Publicaciones Cient??ficas) est?? destinada a almacenar, compartir, dar visibilidad y acceso abierto a la producci??n cient??fica de Am??rica Latina.</span></p>
    <p style="text-align: justify"><span style="font-size: 14.0pt"><a href="http://www.vanguard.edu/faculty/ddegelman/amoebaweb/index.aspx?doc_id=847" target="_blank" rel="noopener noreferrer">Listado de Revistas sobre Psicolog??a y ??reas relacionadas</a>  estas revistas ofrecen algunos art??culos en texto completo y otras tienen libre acceso a los art??culos que han sido publicados hace uno o dos a??os.</span></p>
    <p style="text-align: justify"><span style="font-size: 14.0pt"><a href="http://www.memoria.fahce.unlp.edu.ar/" target="_blank" rel="noopener noreferrer">Memoria Acad??mica</a> es un repositorio institucional que tiene por objeto la reuni??n, el registro, la difusi??n y la preservaci??n de la producci??n acad??mico-cient??fica de la Facultad de Humanidades y Ciencias de la Educaci??n de la Universidad de La Plata. Las colecciones actualmente disponibles est??n en formaci??n y se van enriqueciendo a medida que se procesan e incorporan los textos completos digitales que los autores van entregando para su publicaci??n.</span></p>
    <p style="text-align: justify"><span style="font-size: 14.0pt"><a href="http://scholar.lib.vt.edu/ejournals/index.html" target="_blank" rel="noopener noreferrer">NDLTD</a> (Networked Digital Library of Theses and Dissertations) es una organizaci??n internacional dedicada a promover la adopci??n, producci??n, uso, diseminaci??n y preservaci??n de tesis digitales. Creada en Virginia Tech, cuenta en la actualidad con m??s de 100 miembros de universidades de m??s de 20 pa??ses. </span></p>
    <p style="text-align: justify"><span style="font-size: 14.0pt"><a href="http://nulan.mdp.edu.ar/" target="_blank" rel="noopener noreferrer">N??lan</a> conocido como el Portal de Promoci??n y Difusi??n P??blica del Conocimiento Acad??mico y Cient??fico, es un repositorio institucional de la Facultad de Ciencias Econ??micas y Sociales de la Universidad Nacional de Mar del Plata. Su colecci??n re??ne una amplia variedad de tipos de documentos: art??culos cient??ficos, tesis, comunicaciones a congresos, libros e informes, entre otros.</span></p>
    <p style="text-align: justify"><span style="font-size: 14.0pt"><a href="http://oaister.worldcat.org/search?qt=wc_org_oaister&amp;scope=0&amp;oldscope=&amp;wcsbtn2w=Buscar&amp;dblist=239&amp;q=" target="_blank" rel="noopener noreferrer">OAIster</a> es un proyecto del University of Michigan Digital Library Production Service. Su meta es crear una colecci??n de recursos digitales acad??micos de dif??cil acceso. Organiza el material localizado en las colecciones de m??s de 700 instituciones y ofrece cerca de un mill??n de registros de: libros electr??nicos, art??culos de revistas en l??nea, archivos de audio y video, im??genes, etc.</span></p>
    <p style="text-align: justify"><span style="font-size: 14.0pt"><a href="http://portal.pepsic.bvsalud.org/php/index.php?lang=es" target="_blank" rel="noopener noreferrer">PePSIC </a>(Portal de Peri??dicos Electr??nicos de Psicolog??a) es una fuente de la Biblioteca Virtual en Salud: Psicolog??a de la Uni??n Latinoamericana de Entidades de Psicolog??a (BVS-Psi ULAPSI) y es fruto del convenio entre el F??rum de Entidades Nacionales de la Psicolog??a Brasile??a (FENPB), la Biblioteca Dante Moreira Leite del Instituto de Psicolog??a de la Universidad de S??o Paulo (IPUSP) y el Centro Latinoamericano y del Caribe de Informaci??n en Ciencias de la Salud BIREME, que cedi?? la metodolog??a Scientific Electronic Library Online <a href="http://www.scielo.org/">SciELO</a> como modelo de publicaci??n electr??nica de peri??dicos para pa??ses en desarrollo. El PePSIC tiene como objetivo contribuir con la visibilidad del conocimiento psicol??gico y cient??fico generado en los pa??ses de Am??rica Latina, a partir de la publicaci??n de revistas cient??ficas en acceso abierto.</span></p>
    <p style="text-align: justify"><span style="font-size: 14.0pt"><a href="http://www.revistas.unam.mx/index.php/index/index" target="_blank" rel="noopener noreferrer">Portal de revistas cient??ficas y arbitradas de la UNAM</a> impulsa la transici??n de la publicaci??n impresa a la publicaci??n digital mediante el Sistema de Acceso Abierto, conocido como OJS por sus siglas en ingl??s -Open Journal Systems -. La noci??n de ciencia que impulsa el portal es expansiva, por ello incluye a todas aquellas revistas que publican resultados originales de investigaci??n en todas las ??reas del conocimiento sean ciencias exactas, humanidades, artes o ciencias sociales  y que utilizan un sistema de revisi??n por pares.</span></p>
    <p style="text-align: justify"><span style="font-size: 14.0pt"><a href="http://www.apa.org/pubs/databases/psycinfo/index.aspx" target="_blank" rel="noopener noreferrer">PsycINFO</a> es una Base de datos elaborada por la American Psychological Association (APA) con cobertura internacional sobre Psicolog??a y disciplinas afines como Psiquiatr??a, Educaci??n, Sociolog??a, Derecho, Farmacolog??a, etc. Contiene citas y res??menes de art??culos de revista, cap??tulos de libros, libros, tesis, informes, ponencias, etc. PsycINFO proporciona la cobertura sistem??tica de la literatura psicol??gica a partir de los a??os 1800 al presente. La base de datos tambi??n incluye registros a partir de los a??os 1600 y los a??os 1700.</span></p>
    <p style="text-align: justify"><span style="font-size: 14.0pt"><a href="http://recolecta.fecyt.es/" target="_blank" rel="noopener noreferrer">Recolecta</a> (Recolector de Ciencia Abierta) es una plataforma que agrupa a todos los repositorios cient??ficos nacionales y que provee de servicios a los gestores de repositorios, a los investigadores y a los agentes implicados en la elaboraci??n de pol??ticas. Surge en 2007 gracias a la colaboraci??n de La Fundaci??n Espa??ola para la Ciencia y la Tecnolog??a (FECYT) y la Red de Bibliotecas Universitarias (REBIUN) de la CRUE con el objetivo de crear una infraestructura nacional de repositorios cient??ficos de acceso abierto espa??oles.</span></p>
    <p style="text-align: justify"><span style="font-size: 14.0pt"><a href="http://rephip.unr.edu.ar/" target="_blank" rel="noopener noreferrer">RepHipUNR</a> es un repositorio acad??mico abierto creado para archivar, preservar y distribuir digitalmente, en variados formatos, tanto materiales de ense??anza y aprendizaje, como la producci??n cient??fica de I+D de los profesores, profesionales e investigadores de la Universidad Nacional de Rosario. El contenido se organiza en ???Comunidades??? que corresponden a facultades, departamentos, centros de Investigaci??n y otras organizaciones dedicadas a la educaci??n y/o investigaci??n bajo convenio con la UNR.</span></p>
    <p style="text-align: justify"><span style="font-size: 14.0pt"><a href="http://repositorio.cepal.org/" target="_blank" rel="noopener noreferrer">Repositorio Digital CEPAL</a> contiene m??s de 35.000 publicaciones de la Comisi??n Econ??mica para Am??rica Latina y el Caribe (CEPAL). Desde la primera publicaci??n difundida en 1948 hasta la m??s reciente, pueden ser consultadas y descargadas en formato digital. Incluye libros institucionales, informes anuales, coediciones, series, revistas, boletines y documentos de conferencias y reuniones, as?? como recursos multimedia, entre otros.</span></p>
    <p style="text-align: justify"><span style="font-size: 14.0pt"><a href="http://revistas.ucm.es/" target="_blank" rel="noopener noreferrer">Revistas Cient??ficas Complutenses</a> es un portal de revistas cient??ficas de la Universidad Complutense de Madrid &#8211; Espa??a.</span></p>
    <p style="text-align: justify"><span style="font-size: 14.0pt"><a href="http://www.oei.es/oeivirt/revedu.htm" target="_blank" rel="noopener noreferrer">Revistas electr??nicas Educaci??n</a> (OEI ???Organizaci??n de Estados Americanos para la Educaci??n, la Ciencia y la Cultura).</span></p>
    <p style="text-align: justify"><span style="font-size: 14.0pt"><a href="http://roar.eprints.org" target="_blank" rel="noopener noreferrer">ROAR</a> (Registro de repositorios de acceso abierto) ofrece un directorio con m??s de 1.550 repositorios registrados en su base de datos. Actualmente permite la b??squeda de los contenidos de los repositorios listados.</span></p>
    <p style="text-align: justify"><span style="font-size: 14.0pt"><a href="http://www.saber.ula.ve/" target="_blank" rel="noopener noreferrer">ULA</a> (Repositorio Institucional de la Universidad de los Andes) gestiona la publicaci??n, preservaci??n y acceso libre, a texto completo, de documentos derivados de la producci??n intelectual e institucional de la Universidad de Los Andes (Venezuela). Incluye art??culos, papers, tesis, gu??as de estudio, presentaciones, estad??sticas y art??culos de revistas electr??nicas.</span></p>
    <p style="text-align: justify"><span style="font-size: 14.0pt"><a href="http://www.scielo.org/php/index.php?lang=es" target="_blank" rel="noopener noreferrer">SciELO</a> (Scientific Electronic Library Online) se trata de una biblioteca cient??fica electr??nica en l??nea la cual es un modelo para la publicaci??n electr??nica cooperativa de revistas cient??ficas en Internet. Especialmente desarrollado para responder a las necesidades de la comunicaci??n cient??fica en los pa??ses en desarrollo y particularmente de Am??rica Latina y el Caribe, el modelo proporciona una soluci??n eficiente para asegurar la visibilidad y el acceso universal a su literatura cient??fica, contribuyendo para la superaci??n del fen??meno conocido como &#8216;ciencia perdida&#8217;.</span></p>
    <p style="text-align: justify"><span style="font-size: 14.0pt"><a href="http://www.scielo.org.ar/scielo.php" target="_blank" rel="noopener noreferrer">SciELO Argentina</a> &#8211; En Argentina este proyecto cooperativo regional forma parte de las pol??ticas cient??ficas del Consejo Nacional de Investigaciones Cient??ficas y T??cnicas (<a href="http://www.conicet.gov.ar/" target="_blank" rel="noopener noreferrer">CONICET</a>) y se gestiona a trav??s del Centro Argentino de Informaci??n Cient??fica y Tecnol??gica (<a href="http://www.caicyt.gov.ar/" target="_blank" rel="noopener noreferrer">CAICYT</a>), el cual es un organismo dependiente del CONICET. Las revistas que integran la colecci??n SciELO-Argentina tienen cobertura en todas las ??reas del conocimiento y cuentan con la confiabilidad que les otorga el ser parte del <a href="http://www.caicyt.gov.ar/nucleo-basico-de-revistas-cientificas" target="_blank" rel="noopener noreferrer">N??cleo B??sico de Publicaciones Cient??ficas Argentinas</a> y con el rigor cient??fico de sus art??culos evaluados por pares; quienes son miembros del Comit?? Cient??fico Asesor designado por el CONICET.</span></p>
    <p style="text-align: justify"><span style="font-size: 14.0pt"><a href="http://www.scielo.br/scielo.php?script=sci_home&amp;lng=es&amp;nrm=iso" target="_blank" rel="noopener noreferrer">SciELO Brasil</a> (Scientific Electronic Library Online) .es una biblioteca electr??nica que abarca una colecci??n seleccionada de revistas cient??ficas Brasile??as. La biblioteca es resultado de un proyecto de investigaci??n de la <a href="http://www.fapesp.br/" target="_blank" rel="noopener noreferrer">FAPESP</a> (Funda????o de Amparo ?? Pesquisa do Estado de S??o Paulo) en colaboraci??n con <a href="http://www.bireme.br/bvs/E/ehome.htm" target="_blank" rel="noopener noreferrer">BIREME</a> (Centro Latinoamericano y del Caribe de Informaci??n en Ciencias de la Salud). A partir de 2002, el Proyecto cuenta con el apoyo del <a href="http://www.cnpq.br/" target="_blank" rel="noopener noreferrer">CNPq</a> (Conselho Nacional de Desenvolvimento Cient??fico e Tecnol??gico).</span></p>
    <p style="text-align: justify"><span style="font-size: 14.0pt"><a href="http://www.scielo.cl/scielo.php" target="_blank" rel="noopener noreferrer">SciELO Chile</a> es una biblioteca cient??fica que abarca, en esta primera etapa, una colecci??n seleccionada de revistas cient??ficas chilenas. Este proyecto est?? siendo desarrollado por la Comisi??n Nacional de Investigaci??n Cient??fica y Tecnol??gica (<a href="http://www.conicyt.cl/" target="_blank" rel="noopener noreferrer">CONICYT</a>) y cuenta con el apoyo de <a href="http://www.bireme.br/" target="_blank" rel="noopener noreferrer">BIREME</a> (Centro Latinoamericano y del Caribe de Informaci??n en Ciencias de la Salud) y forma parte de un proyecto de car??cter regional.</span></p>
    <p style="text-align: justify"><span style="font-size: 14.0pt"><a href="http://www.scielo.org.co/scielo.php/script_sci_home/lng_es/nrm_iso" target="_blank" rel="noopener noreferrer">SciELO Colombia</a> es una biblioteca electr??nica que cubre una colecci??n selecta de revistas cient??ficas colombianas a nivel de: Ciencias biol??gicas, ciencias de la salud y humanidades.</span></p>
    <p style="text-align: justify"><span style="font-size: 14.0pt"><a href="http://sedici.unlp.edu.ar/" target="_blank" rel="noopener noreferrer">SeDiCi</a> (Servicio de Difusi??n de la Creaci??n Intelectual) es el repositorio institucional de la Universidad Nacional de La Plata. Se estableci?? en el a??o 2003 para facilitar el dep??sito de la producci??n de las distintas unidades acad??micas de la UNLP, dar mayor visibilidad y preservar las obras con una gesti??n adecuada. Incluye: libros, partes de libros, art??culos, tesis, tesinas, reportes, obras art??sticas, revistas, rese??as, documentos legales, etc. Adem??s de las obras propias de la UNLP, contiene otras secciones tales como revistas de acceso libre y contenidos obtenidos por operaciones de cosecha de otros repositorios del mundo de naturaleza similar.</span></p>
    <p style="text-align: justify"><span style="font-size: 14.0pt"><a href="http://www.unesco.org/new/en/unesco/resources/publications/unesdoc-database/" target="_blank" rel="noopener noreferrer">UNESDOC</a> permite el acceso a documentos y publicaciones de la UNESCO (Organizaci??n de las Naciones Unidas para la Educaci??n, la Ciencia y la Cultura).</span></p>
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
    <li style="font-weight: 400;text-align: justify"><span style="font-size: 14pt"><a href="https://www.wdl.org/es/" target="_blank" rel="noopener noreferrer"><span style="font-weight: 400">Biblioteca Digital Mundial</span></a><span style="font-weight: 400"> &#8211; En un tit??nico esfuerzo de la Biblioteca del Congreso de Estados Unidos y la UNESCO, la WDL contiene importantes materiales fundamentales para entender las culturas de todo el mundo, todo disponible de forma gratuita y en una gran variedad de idiomas.</span></span></li>
    <li style="font-weight: 400;text-align: justify"><span style="font-size: 14pt"><a href="http://www.cervantesvirtual.com/" target="_blank" rel="noopener noreferrer"><span style="font-weight: 400">Biblioteca Virtual Miguel de Cervantes</span></a><span style="font-weight: 400"> &#8211; Una de las m??s amplias y con mayor contenido en la web, en ella encontraremos una gran variedad de categor??as, como historia, poes??a, entre otras, todo respecto a literatura escrita en espa??ol.</span></span></li>
    </ul>
    <ul style="text-align: justify">
    <li style="font-weight: 400"><span style="font-size: 14pt"><a href="http://bdmx.mx/" target="_blank" rel="noopener noreferrer"><span style="font-weight: 400">Biblioteca Digital Mexicana (BDMX)</span></a><span style="font-weight: 400"> &#8211; Desde 2010 aqu?? nos podemos encontrar una de las fuentes m??s importantes de informaci??n de la historia de M??xico, ya que se trata de un esfuerzo conjunto del Archivo General de la Naci??n, La Biblioteca Nacional de Antropolog??a e Historia, el Centro de Estudios de Historia de M??xico CEHM-Carso y el CONACULTA.</span></span></li>
    </ul>
    <ul style="text-align: justify">
    <li style="font-weight: 400"><span style="font-size: 14pt"><a href="http://pares.mcu.es/" target="_blank" rel="noopener noreferrer"><span style="font-weight: 400">Portal de Archivos Espa??oles</span></a><span style="font-weight: 400"> &#8211; Surge como una iniciativa del Ministerio de Educaci??n, Cultura y Deporte, tiene como objetivo dar difusi??n del Patrimonio Hist??rico Documental Espa??ol a trav??s de internet, ofrece acceso a documentos e im??genes digitalizadas de los Archivos Espa??oles.</span></span></li>
    <li style="font-weight: 400"><span style="font-size: 14pt"><a href="http://bvpb.mcu.es/es/estaticos/contenido.cmd?pagina=estaticos/presentacion" target="_blank" rel="noopener noreferrer"><span style="font-weight: 400">Biblioteca Virtual de Patrimonio Bibliogr??fico</span></a><span style="font-weight: 400"> &#8211; Un proyecto m??s que surge por parte del Ministerio de Educaci??n, Cultura y Deporte espa??ol, que nos pone ante las colecciones de manuscritos y libros impresos que forman parte del Patrimonio Hist??rico Espa??ol.</span></span></li>
    <li style="font-weight: 400"><span style="font-size: 14pt"><a href="http://bibdigital.rjb.csic.es/spa/index.php" target="_blank" rel="noopener noreferrer"><span style="font-weight: 400">Biblioteca Digital del Real Jard??n Bot??nico</span></a><span style="font-weight: 400"> &#8211; Por supuesto tambi??n nos encontramos con bibliotecas de tem??ticas especializadas, con este caso que tendremos al alcance material cient??fico e hist??rico para quien busque mayor informaci??n de las especies vegetales.</span></span></li>
    <li style="font-weight: 400"><span style="font-size: 14pt"><a href="http://prensahistorica.mcu.es/es/estaticos/contenido.cmd?pagina=estaticos/presentacion" target="_blank" rel="noopener noreferrer"><span style="font-weight: 400">Biblioteca Virtual de Prensa Hist??rica Espa??ola</span></a><span style="font-weight: 400"> &#8211; Con el objetivo de preservar la memoria de Espa??a, aqu?? podemos tener acceso a un gran archivo digital de una gran variedad de diarios espa??oles, donde han colaborado el Ministerio de Cultura, las Comunidades Aut??nomas, as?? como otras instituciones.</span></span></li>
    <li style="font-weight: 400"><span style="font-size: 14pt"><a href="http://www.europeana.eu/portal/"><span style="font-weight: 400" target="_blank" rel="noopener noreferrer">Europeana</span></a><span style="font-weight: 400"> &#8211; Uno de los archivos digitales m??s importantes de Europa, ya que cuenta con el apoyo de los diferentes pa??ses de la Uni??n Europea, quienes son los encargados de nutrir est?? gran biblioteca con mapas, pinturas, libros, pel??culas y muchos art??culos m??s.</span></span></li>
    <li style="font-weight: 400"><span style="font-size: 14pt"><a href="http://www.bne.es/es/Inicio/index.html" target="_blank" rel="noopener noreferrer"><span style="font-weight: 400">Biblioteca Nacional de Espa??a</span></a><span style="font-weight: 400"> &#8211; 500 a??os de historia es lo que podemos encontrar en uno de los archivos digitales m??s importantes de Espa??a, donde se nos permite consultar, descargar o leer una gran cantidad de documentos, archivos, dibujos, fotograf??as, mapas, grabados y mucho m??s, todo de forma gratuita para cualquier persona.</span></span></li>
    </ul>
    <ul style="text-align: justify">
    <li style="font-weight: 400"><span style="font-size: 14pt"><a href="http://hcl.harvard.edu/collections/digital_collections/" target="_blank" rel="noopener noreferrer"><span style="font-weight: 400">Biblioteca de la Universidad de Harvard (HCL)</span></a><span style="font-weight: 400"> &#8211; Una de las universidades m??s importantes del mundo tambi??n ha digitalizado su acervo cultural, otorgando libre acceso a miles de fotograf??as hist??ricas, folletos, manuscritos, libros, partituras, mapas y otros materiales ??nicos que est??n en poder de la universidad.</span></span></li>
    <li style="font-weight: 400"><span style="font-size: 14pt"><a href="http://www.ciberoteca.com/homecas.asp" target="_blank" rel="noopener noreferrer"><span style="font-weight: 400">Ciberoteca</span></a><span style="font-weight: 400"> &#8211; Surgida como un proyecto de Fundaci??n Bancaja, aqu?? encontraremos acceso gratuito a 45.000 de textos literarios, cient??ficos y t??cnicos, adem??s de que cientos de bibliotecas virtuales est??n afiliadas para otorgar acceso inmediato a trav??s de esta plataforma, por ello es conocida como ??La biblioteca de las bibliotecas??.</span></span></li>
    <li style="font-weight: 400"><span style="font-size: 14pt"><a href="http://www.ciudadseva.com/bdcs/bdcs.htm" target="_blank" rel="noopener noreferrer"><span style="font-weight: 400">Biblioteca Digital Ciudad Seva</span></a><span style="font-weight: 400"> &#8211; Fundada por el escritor y catedr??tico puertorrique??o Luis L??pez Nieves, Ciudad Seva ha logrado digitalizar miles de cuentos, poemas, novelas, teor??a, obras de teatro, ensayos y todo sobre la narrativa.</span></span></li>
    <li style="font-weight: 400"><span style="font-size: 14pt"><a href="http://www.lib.berkeley.edu/node" target="_blank" rel="noopener noreferrer"><span style="font-weight: 400">Biblioteca Digital de la Universidad de Berkeley</span></a><span style="font-weight: 400"> &#8211; La pionera en iniciativas de digitalizaci??n y acceso p??blico, esta biblioteca es uno de los proyectos m??s grandes y con mayor contenido en el mundo. Entre las colecciones m??s importantes podemos encontrar libros medievales, as?? como el Proyecto para la Herencia Americana, ??nico en su tipo.</span></span></li>
    <li style="font-weight: 400"><span style="font-size: 14pt"><a href="http://www.bl.uk/onlinegallery/index.html" target="_blank" rel="noopener noreferrer"><span style="font-weight: 400">Biblioteca Brit??nica</span></a><span style="font-weight: 400"> &#8211; La importancia de esta colecci??n radica en que fue la primera que hizo uso de la tecnolog??a en forma masiva, esto gracias a la creaci??n del famoso dispositivo &#8216;</span><i><span style="font-weight: 400">Turning the Pages</span></i><span style="font-weight: 400">&#8216;. Entre su colecci??n de miles de libros, se encuentra el que posiblemente sea el m??s consultado del mundo: los manuscritos de </span><i><span style="font-weight: 400">Alice in Wonderland</span></i><span style="font-weight: 400">.</span></span></li>
    </ul>
    <ul style="text-align: justify">
    <li style="font-weight: 400"><span style="font-size: 14pt"><a href="http://www.collectionscanada.gc.ca/015/002/015002-2170-e.html#cont" target="_blank" rel="noopener noreferrer"><span style="font-weight: 400">Canada&#8217;s Digital Collections</span></a><span style="font-weight: 400"> &#8211; Un proyecto ??nico y de los m??s interesantes, ya que Canad?? ha decidido reunir en un solo portal, los m??s de 600 proyectos de digitalizaci??n emprendidos en el pa??s, una maravillosa idea que nos brinda acceso a casi todo el patrimonio cultural, cient??fico, literario e hist??rico de Canad??.</span></span></li>
    <li style="font-weight: 400"><span style="font-size: 14pt"><a href="http://www.coleccionesmexicanas.unam.mx/" target="_blank" rel="noopener noreferrer"><span style="font-weight: 400">Colecciones Mexicanas</span></a><span style="font-weight: 400"> &#8211; Otra importante iniciativa mexicana que llega de la mano de la Biblioteca Nacional de M??xico y de la Universidad Aut??noma de M??xico (UNAM), la cual re??ne la gran mayor??a de los proyectos hist??ricos del pa??s, con miles de archivos documentales, fotogr??ficos, videogr??ficos, bibliogr??ficos.</span></span></li>
    <li style="font-weight: 400"><span style="font-size: 14pt"><a href="http://es.childrenslibrary.org/" target="_blank" rel="noopener noreferrer"><span style="font-weight: 400">International Children&#8217;s Digital Library</span></a><span style="font-weight: 400"> &#8211; Es considerada la recopilaci??n m??s grande de libros digitalizados para ni??os, ofrece acceso a textos en una gran cantidad de idiomas, y posee una gran cantidad de categor??as, que van desde libros l??dicos, de actividades, hasta cuentos y lecturas de entretenimiento.</span></span></li>
    <li style="font-weight: 400"><span style="font-size: 14pt"><a href="http://publicdomain.nypl.org/pd-visualization/" target="_blank" rel="noopener noreferrer"><span style="font-weight: 400">La biblioteca p??blica de Nueva York</span></a><span style="font-weight: 400"> &#8211; Una de las colecciones digitales reci??n renovadas, la cual nos ofrece m??s de 187.000 im??genes de dominio p??blico de fotograf??as, mapas, postales, grabados y escritos.</span></span></li>
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
    <li><span style="font-size: 14pt"><i><span style="font-weight: 400">Espa??a</span></i></span>
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
    <li style="font-weight: 400"><span style="font-size: 14pt"><i>Hungr??a</i></span>
    <ul style="font-weight: 400">
    <li style="font-weight: 400"><span style="font-size: 14pt"><a href="http://mek.oszk.hu/indexeng.phtml" target="_blank" rel="noopener noreferrer"><span style="font-weight: 400">http://mek.oszk.hu/indexeng.phtml</span></a></span></li>
    </ul>
    </li>
    </ul>
    <ul style="text-align: justify">
    <li style="font-weight: 400"><span style="font-size: 14pt"><i><span style="font-weight: 400">Biblioteca Brit??nica</span></i></span>
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
    <li style="font-weight: 400"><span style="font-size: 14pt"><i><span style="font-weight: 400">Canad??</span></i></span>
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
    <li style="font-weight: 400"><span style="font-size: 14pt"><i><span style="font-weight: 400">T??bet e Himalaya</span></i></span>
    <ul>
    <li style="font-weight: 400"><span style="font-size: 14pt"><a href="http://www.thlib.org/" target="_blank" rel="noopener noreferrer"><span style="font-weight: 400">http://www.thlib.org/</span></a></span></li>
    </ul>
    </li>
    </ul>
    <ul style="text-align: justify">
    <li style="font-weight: 400"><span style="font-size: 14pt"><i><span style="font-weight: 400">Panam??.</span></i></span>
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
    <p style="text-align: justify"><span style="font-size: 14pt">Los libros infantiles son sin duda uno de los g??neros m??s entra??ables dentro del ??mbito de lo impreso (con su extensi??n reciente hacia lo digital). Acaso por la audiencia misma a la que va dirigida, la literatura infantil y juvenil posee rasgos en donde confluyen lo atractivo y lo inteligente, la reflexi??n y las emociones, el asombro y el cuidado, entre varios m??s que al final dan como resultado libros sumamente hermosos, ??nicos, verdaderas joyas artesanales de la edici??n y la creatividad.</span></p>
    <p style="text-align: justify"><span style="font-size: 14pt">Como prueba de ello, basta recorrer el ampl??simo cat??logo de la Biblioteca Baldwin de Literatura Infantil Hist??rica, adscrita a la Universidad de Florida y que recientemente liber?? para su consulta abierta la digitalizaci??n de m??s de 6 mil ejemplares del g??nero, publicados desde mediados del siglo XIX y hasta mediados del XX, especialmente en Estados Unidos y el Reino Unido, con algunos pocos libros provenientes de Alemania, Francia, Espa??a y otros pa??ses.</span></p>
    <p style="text-align: justify"><span style="font-size: 14pt">Cabe mencionar que dicha biblioteca lleva el nombre de su coleccionista: Ruth Baldwin, quien durante 40 a??os reuni?? libros dirigidos al p??blico infantil, en los diversos ???subg??neros??? que ha tenido a lo largo de la historia ese ??mbito de la edici??n. Libros de literatura, edificantes, pedag??gicos, religiosos, morales, art??sticos, de entretenimiento, de valores c??vicos o familiares y varios m??s, los cuales en casi todos los casos respondieron a momentos espec??ficos de la sociedad en la que emergieron.</span></p>
    <br>
    <img src="https://i0.wp.com/23.253.41.33/imagesPosts/libro2.jpg?w=1200" alt="Imagen libro ni??o" style="box-sizing: border-box; margin-top: 5px; margin-bottom: 5px; width: 100%; height: 100%;"/>
    <br>
    <p style="text-align: justify"><span style="font-size: 14pt">En el caso del cat??logo digital, es posible explorar dicha biblioteca siguiendo criterios de a??o o lugar de publicaci??n, nombre del editor e incluso la categor??a tem??tica a la cual pertenece el libro. Asimismo, el cat??logo cuenta con una media docena de colecciones particulares, como la de libros relacionados con los cuentos de los hermanos Grimm, con San Nicol??s o con <em>Alicia en el pa??s de las maravillas</em>.</span></p>
    <p style="text-align: justify"><span style="font-size: 14pt">Siguiendo <strong><a href="http://ufdc.ufl.edu/baldwin/all/thumbs" target="_blank" rel="nofollow noopener noreferrer">este enlace puedes revisar el cat??logo de la Baldwin Library of Historical Children&#8217;s Literature</a></strong>, y seas un entusiasta de la literatura infantil, de los libros, de las ilustraciones, de la historia cultural o de la creatividad en s??, estamos seguros de que encontrar??s varias ocasiones de asombro y placer. </span></p>
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
    <li><span style="font-size: 14pt"><a href="http://revistas.unc.edu.ar/" target="_blank" rel="noopener noreferrer"><strong>Portal de Revistas de la Universidad Nacional de C??rdoba </strong></a>(Es un espacio destinado a la difusi??n de las investigaciones realizadas por los miembros de la Universidad y a los contenidos acad??micos y culturales desarrollados en las revistas electr??nicas de la Universidad Nacional de C??rdoba. La Ciencia es un recurso p??blico. Por ello, la Universidad ofrece a toda su comunidad  acceso libre  a su producci??n cient??fica, acad??mica y cultural)</span></li>
    <li><span style="font-size: 14pt"><a href="http://www.revistas.unam.mx/index.php/?area=4" target="_blank" rel="noopener noreferrer"><strong>Portal de revistas cient??ficas y arbitradas de la UNAM</strong></a></span></li>
    <li><span style="font-size: 14pt"><a href="http://revistas.ucm.es/index.php/" target="_blank" rel="noopener noreferrer"><strong>Revistas Cient??ficas Complutenses</strong></a> (El Portal de Revistas Cient??ficas Complutenses es un servicio orientado a la difusi??n de la investigaci??n y a apoyar la edici??n electr??nica de revistas cient??ficas en el seno de la Universidad Complutense de Madrid. Se puede consultar y obtener el texto completo de los art??culos publicados en las revistas cient??ficas editadas por el Servicio de Publicaciones de la UCM y, asimismo, de aquellas otras revistas editadas por los departamentos de la UCM que quieren incorporarse a este proyecto de edici??n digital)</span></li>
    <li><span style="font-size: 14pt"><a href="http://revistascientificas.filo.uba.ar/index.php/index" target="_blank" rel="noopener noreferrer"><strong>Revistas Cient??ficas de Filo</strong></a> (Facultad de Filosof??a y letras de la  UBA)</span></li>
    </ul>
    <br>
    <p><span style="color: #ff00ff; font-size: 14pt;"><strong>??REAS ESPECIFICAS</strong></span></p>
    <br>
    <p style="text-align: justify"><span style="font-size: 14pt"><strong>Antropolog??a</strong></span></p>
    <ul style="text-align: justify">
    <li><span style="font-size: 14pt"><a href="http://ojs.uo.edu.cu/index.php/Batey/issue/archive" target="_blank" rel="noopener noreferrer"><strong>Batey</strong></a> (Revista Cubana de Antropolog??a Sociocultural <strong>, </strong>pretende ser <strong>(1)</strong> un veh??culo para dar a conocer investigaciones antropol??gicas, etnogr??ficas sobre Cuba y su realidad cultural; <strong>(2)</strong> un foro de debate cient??fico-social y antropol??gico (social y cultural) en el que se publiquen art??culos originales, que adem??s de contribuir al conocimiento de Cuba, fomenten el debate entre los investigadores, y recojan las corrientes antropol??gicas, etnogr??ficas e hist??rico-culturales del momento. Con una periodicidad anual, est?? destinada a un p??blico amplio pero especializado en las diversas Ciencias Sociales, desde la Historia a la Geograf??a, desde la Sociolog??a y la Antropolog??a a la Econom??a. Las tem??ticas est??n abiertas a distintos aspectos sociales y culturales, desde una visi??n transnacional, que incorpore la tem??tica cubana tanto del interior del pa??s como de la di??spora, y sin soslayar los an??lisis hist??ricos. El idioma de publicaci??n es el espa??ol. Junto a los n??meros miscel??neos, podr??n aparecer n??meros monogr??ficos en atenci??n a los textos aceptados. Tambi??n tendr?? otros espacios menores para la publicaci??n de rese??as, noticias de congresos, coloquios o jornadas en y fuera de Cuba. Estos textos ser??n evaluados por pares)</span></li>
    <li><span style="font-size: 14pt"><a href="http://www.revistakula.com.ar/numeros-anteriores/numero-10/" target="_blank" rel="noopener noreferrer"><strong>Revista Kula. Antrop??logos del Atl??ntico Sur</strong></a> (Antrop??logos del Atl??ntico Sur est?? compuesto por estudiantes (de grado y de posgrado) de la carrera de Antropolog??a de la Facultad de Filosof??a y Letras (UBA), de la carrera de Antropolog??a de la Facultad de Ciencias Naturales y Museo (UNLP) y de la carrera de Antropolog??a de IDAES-UNSAM. El objetivo de la publicaci??n es divulgar trabajos de investigadores j??venes del ??mbito de las ciencias sociales en general y la antropolog??a en particular)</span></li>
    </ul>
    <br>
    <p style="text-align: justify"><span style="font-size: 14pt"><strong>Artes</strong></span></p>
    <ul style="text-align: justify">
    <li><span style="font-size: 14pt"><a href="http://ojs.upv.es/index.php/CAA" target="_blank" rel="noopener noreferrer"><strong>Con A de animaci??n </strong></a> (Revista de investigaci??n centrada en el estudio de los aspectos te??ricos, t??cnicos, art??sticos y humanos de la producci??n de imagen animada. Se trata de una iniciativa pionera en lengua castellana, que sigue el ejemplo de otras revistas internacionales de prestigio, nacidas en el seno de la Society for Animation Studies. La revista pretende divulgar la imagen animada como expresi??n art??stica, como profesi??n, como valor cultural, y como elemento para vehicular reflexi??n sobre cualquier aspecto de nuestro momento y nuestra sociedad. Grupo de Investigaci??n en Animaci??n : Arte e Industria)</span></li>
    </ul>
    <br>
    <p style="text-align: justify"><span style="font-size: 14pt"><strong>Ciencias de la Comunicaci??n</strong></span></p>
    <ul style="text-align: justify">
    <li><span style="font-size: 14pt"><strong><a href="http://www.icono14.net/ojs/index.php/icono14/issue/view/32" target="_blank" rel="noopener noreferrer">ICONO14</a></strong> (Es una publicaci??n tem??tica editada en espa??ol, con res??menes, palabras clave e interfaz web en ingl??s. Focalizada en el ??rea de las ciencias de la Comunicaci??n, acepta aportaciones interdisciplinares que aborden aspectos vinculados con la comunicaci??n y las tecnolog??as emergentes)</span></li>
    <li><span style="font-size: 14pt"><strong><a href="http://palabraclave.unisabana.edu.co/index.php/palabraclave/index" target="_blank" rel="noopener noreferrer">Palabra Clave</a></strong><strong> </strong>(Revista semestral que propone un espacio para la difusi??n de nuevo conocimiento como resultado de la investigaci??n y la reflexi??n sobre temas vinculados con la comunicaci??n y su relaci??n con la sociedad. El contenido de la publicaci??n tiene un enfoque cient??fico, anal??tico y cr??tico, soportado en el humanismo y con claros aportes al desarrollo y a la soluci??n, desde la comunicaci??n, de los problemas de la sociedad)</span></li>
    </ul>
    <br>
    <p style="text-align: justify"><span style="font-size: 14pt"><strong>Ciencias de la Documentaci??n</strong><strong> </strong>(Archivolog??a, Bibliotecolog??a)</span></p>
    <ul style="text-align: justify">
    <li><span style="font-size: 14pt"><strong><a href="http://www.abinia.org/" target="_blank" rel="noopener noreferrer">ABINA</a></strong> (Revista Asociaci??n Bibliotecas Nacional de Iberoam??rica) ??rgano de difusi??n de ABINIA con informaci??n relevante en Bibliotecolog??a y Ciencias de la Informaci??n: noticias, eventos, proyectos, temas de inter??s, miscel??neas, publicaciones, etc. La Asociaci??n de Bibliotecas Nacionales de Iberoam??rica (ABINIA), fundada en M??xico el 14 de diciembre de 1989, es un foro interregional que reuni?? a las 22 Bibliotecas Nacionales de Iberoam??rica.</span></li>
    <li><span style="font-size: 14pt"><strong><a href="http://www.atoz.ufpr.br/index.php/atoz/issue/current" target="_blank" rel="noopener noreferrer">A.toZ. : Novas Pr??ticas em Informa??ao e Conhecimento </a></strong>(Universidade Federal do Paran??. Brasil)</span></li>
    <li><span style="font-size: 14pt"><a href="http://www.inti.gob.ar/celulosaypapel/biblioteca/pdf/boletinConservacionyrestauracion.pdf" target="_blank" rel="noopener noreferrer"><strong>Bolet??n sobre Conservaci??n y Restauraci??n</strong></a> (INTI-Celulosa y Papel/ Extensi??n y Desarrollo &#8211; Biblioteca)</span></li>
    <li><span style="font-size: 14pt"><a href="http://crl.acrl.org/content/current" target="_blank" rel="noopener noreferrer"><strong>College &amp; Research Libraries</strong></a> (American Library Association)</span></li>
    <li><span style="font-size: 14pt"><a href="http://sites.google.com/site/criticabibliotecologica/vol-3-no-2" target="_blank" rel="noopener noreferrer"><strong>Cr??tica Bibliotecol??gica</strong></a> (Revista de las Ciencias de la Informaci??n Documental. M??xico)</span></li>
    <li><span style="font-size: 14pt"><a href="http://www.revistacts.net/volumen-9-numero-27" target="_blank" rel="noopener noreferrer"><strong>CTS &#8211; Revista Iberoamericana de Ciencia, Tecnolog??a y Sociedad</strong></a>  (<strong>CTS</strong> es un ??mbito para discutir las relaciones entre ciencia, tecnolog??a y sociedad desde una perspectiva plural e interdisciplinaria y una mirada iberoamericana. Con el prop??sito de promover la reflexi??n y el debate sobre la articulaci??n de la ciencia y la tecnolog??a con el ambiente cultural, pol??tico y social, CTS brinda acceso libre a todos sus contenidos e invita al p??blico interesado a participar con sus opiniones. Es una iniciativa conjunta de la Organizaci??n de Estados Iberoamericanos (OEI), el Centro de Estudios sobre Ciencia, Desarrollo y Educaci??n Superior &#8211; REDES (Argentina) y el Instituto Universitario de Estudios de la Ciencia y la Tecnolog??a de la Universidad de Salamanca (Espa??a). Entre 2009 y 2012 cont?? con el apoyo de la Agencia Espa??ola de Cooperaci??n Internacional para el Desarrollo (AECID)</span></li>
    <li><span style="font-size: 14pt"><strong><a href="http://www.elprofesionaldelainformacion.com/index.html" target="_blank" rel="noopener noreferrer">El profesional de la informaci??n</a></strong> (Revista internacional, cient??fica y profesional sobre informaci??n, bibliotecas y nuevas tecnolog??as de la informaci??n)</span></li>
    <li><span style="font-size: 14pt"><a href="http://eprints.rclis.org/" target="_blank" rel="noopener noreferrer"><strong>E-LIS</strong></a> /Es uno de los m??s grandes repositorios internacional abierto en el campo de la  Biblioteconom??a y las Ciencias de la Documentaci??n/Informaci??n)</span></li>
    <li><span style="font-size: 14pt"><a href="http://dialnet.unirioja.es/servlet/listaarticulos?tipo_busqueda=VOLUMEN&amp;revista_busqueda=7671&amp;clave_busqueda=8" target="_blank" rel="noopener noreferrer"><strong>Enl@ce</strong></a> (Revista venezolana de Informaci??n, Tecnolog??a y Conocimiento)</span></li>
    <li><span style="font-size: 14pt"><a href="https://www.bn.gov.ar/" target="_blank" rel="noopener noreferrer"><strong>Estado Cr??tico</strong></a> (Revista bimensual de la Biblioteca Nacional Mariano Moreno</span><br />
    <span style="font-size: 14pt">A??o I. N?? 1. Marzo de 2015)</span></li>
    <li><span style="font-size: 14pt"><a href="http://p3.usal.edu.ar/index.php/huellas" target="_blank" rel="noopener noreferrer"><strong>Huellas en papel </strong></a> (Publicaci??n peri??dica acad??mica cuyo objetivo es difundir los contenidos y las actividades de la Biblioteca y Archivo Hist??ricos de la Universidad del Salvador &#8211; USAL, como as?? tambi??n los principios de preservaci??n, conservaci??n y restauraci??n de documentos)</span></li>
    <li><span style="font-size: 14pt"><a href="http://www.ibersid.eu/ojs/index.php/ibersid/issue/archive" target="_blank" rel="noopener noreferrer"><strong>Ibersid: revista internacional de sistemas de informaci??n y documentaci??n</strong></a> (Es una publicaci??n anual arbitrada dedicada a la gesti??n de la informaci??n y el conocimiento desde una ??ptica sist??mica e interdisciplinar. Es el ??rgano de comunicaci??n de Ibersid, una red internacional con presencia en ??frica, Am??rica y Europa, que tiene su sede en Zaragoza (Espa??a), y que celebra congresos anuales)</span></li>
    <li><span style="font-size: 14pt"><a href="http://www.nosolousabilidad.com/archivo.htm" target="_blank" rel="noopener noreferrer"><strong>No Solo Usabilidad</strong></a> (es una revista electr??nica (ISSN 1886-8592) Open Access y de car??cter multidisciplinar, que pretende servir de herramienta para la difusi??n, divulgaci??n e intercambio de conocimiento entre profesionales e investigadores. Cualquier profesional o investigador puede enviar sus trabajos para que sean publicados en la revista)</span></li>
    <li><span style="font-size: 14pt"><a href="http://www.palabraclave.fahce.unlp.edu.ar/" target="_blank" rel="noopener noreferrer"><strong>Palabra Clave</strong><strong> </strong></a>(Es una publicaci??n acad??mica electr??nica de periodicidad semestral, cuyas entregas aparecen en abril y octubre de cada a??o. La revista cubre todos los temas que hacen a la Bibliotecolog??a y la Ciencia de la Informaci??n, en un sentido amplio e interdisciplinario, con un enfoque cient??fico, tecnol??gico, hist??rico o profesional. Todos los art??culos recibidos son sometidos a la evaluaci??n de al menos dos expertos, conservando siempre el anonimato de los autores y de los evaluadores)</span></li>
    <li><span style="font-size: 14pt"><strong><a href="http://periodicos.ufpb.br/ojs2/index.php/pgc/issue/current/showToc" target="_blank" rel="noopener noreferrer">Perspectivas em Gest??o &amp; Conhecimento</a></strong> (Revista de la Universidade Federal da Para??ba)</span></li>
    <li><span style="font-size: 14pt"><a href="http://revistes.uab.cat/redes" target="_blank" rel="noopener noreferrer"><strong>Redes</strong></a> (Revista hispana para el an??lisis de redes sociales; es una revista acad??mica publicada conjuntamente por egolab-GRAFO (UAB) y el LRPC (US), orientada a ofrecer resultados de investigaci??n sobre redes sociales y contribuciones te??ricas con una perspectiva reticular, especialmente desde y para el mundo iberoamericano)</span></li>
    <li><span style="font-size: 14pt"><a href="http://redc.revistas.csic.es/index.php/redc/issue/current" target="_blank" rel="noopener noreferrer"><strong>Revista Espa??ola de Documentaci??n Cient??fica ???REDC</strong></a> (Se publica trimestralmente desde 1977 en el Consejo Superior de Investigaciones Cient??ficas (CSIC). Esta Revista tiene por objetivo principal servir de veh??culo de transmisi??n del conocimiento a la comunidad cient??fica que realiza su labor investigadora en el sector de la Informaci??n y Documentaci??n Cient??fica, as?? como a aquellos que hacen uso de informaci??n cient??fico-t??cnica y estrat??gica para la toma de decisiones en materia de pol??tica cient??fica. La REDC incluye originales de investigaci??n de naturaleza experimental y te??rica. Los t??tulos, res??menes y palabras-clave de los art??culos se publican tambi??n en lengua inglesa, a fin de facilitar su proyecci??n internacional)</span></li>
    <li><span style="font-size: 14pt"><a href="http://diarium.usal.es/merlo/rbaa/" target="_blank" rel="noopener noreferrer"><strong>Revistas de Biblioteconom??a</strong></a> (Directorios y recursos en los que se recopilan revistas acad??micas y profesionales sobre bibliotecas y materias relacionadas editadas en todo el mundo. Los diferentes recursos han sido elaborados por Jos?? Antonio Merlo Vega, profesor del Departamento de Biblioteconom??a y Documentaci??n de la Universidad de Salamanca, a partir de las fuentes disponibles o de las propias p??ginas de cada revista. La intenci??n de esta colecci??n de recursos sobre revistas de biblioteconom??a y ??reas afines es servir de apoyo a investigadores, profesionales y estudiantes)</span></li>
    <li><span style="font-size: 14pt"><a href="http://www.ibersid.eu/ojs/index.php/scire/issue/archive"  target="_blank" rel="noopener noreferrer"><strong>Scire: Representaci??n y Organizaci??n del Conocimiento</strong></a> (Es una publicaci??n semestral de car??cter interdisciplinar sobre la representaci??n, normalizaci??n, tratamiento, recuperaci??n y comunicaci??n de la informaci??n y el conocimiento)</span></li>
    </ul>
    <br>
    <p style="text-align: justify"><span style="font-size: 14pt"><strong>Ciencias de la Educaci??n</strong></span></p>
    <ul style="text-align: justify">
    <li><span style="font-size: 14pt"><strong><a href="http://www.revistacampusvirtuales.es/index.php/es/revistaes/numeroactual" target="_blank" rel="noopener noreferrer">Campus Virtuales</a></strong> (Es una publicaci??n semestral cient??fica de investigaci??n multidisciplinar en relaci??n con el uso de las Tecnolog??as de la Informaci??n y la comunicaci??n (TIC) en la educaci??n. Con una doble vocaci??n, recoger las experiencias de investigadores a t??tulo personal y de los Campus universitarios institucionales. De ??mbito latinoamericano y editada desde octubre de 2012, la revista cuenta con un consejo cient??fico asesor formado por investigadores prestigiosos en este ??mbito tanto de las universidades espa??olas como de centros de investigaci??n e instituciones superiores de Am??rica y Europa esencialmente. La gesti??n de manuscritos se realiza a trav??s de la Plataforma OJS de manera profesional asegurando as?? la revisi??n por pares ciegos)</span></li>
    <li><span style="font-size: 14pt"><strong><a href="http://www.revistacomunicar.com/index.php?contenido=revista&amp;numero=actual" target="_blank" rel="noopener noreferrer">Comunicar </a></strong> (es una revista cient??fica de ??mbito iberoamericano que pretende fomentar el intercambio de ideas, la reflexi??n y la investigaci??n entre dos ??mbitos que se consideran prioritarios para el desarrollo de los pueblos: la educaci??n y la comunicaci??n. Espa??a)</span></li>
    <li><span style="font-size: 14pt"><a href="http://propuestaeducativa.flacso.org.ar/" target="_blank" rel="noopener noreferrer"><strong>Propuesta Educativa</strong></a> (Publicaci??n del ??rea de Educaci??n de la Facultad Latinoamericana de Ciencias Sociales &#8211; FLACSO &#8211; Sede Argentina. Se trata de una revista acad??mica que enfoca temas de inter??s para la educaci??n y est?? dirigida a investigadores, directivos, supervisores, docentes, profesores, estudiantes de grado y postgrado. En ella se publican art??culos in??ditos de investigaci??n y aportes de discusi??n de problemas educativos, en nuestro pa??s y el mundo)</span></li>
    <li><span style="font-size: 14pt"><a href="http://www.ride.org.mx/index.php/RIDE/index" target="_blank" rel="noopener noreferrer"><strong>RIDE &#8211; Revista Iberoamericana para la Investigaci??n y el Desarrollo Educativo</strong></a> (Es una publicaci??n acad??mica arbitrada en formato electr??nico con una orientaci??n multidisciplinaria. Tiene por objeto publicar textos originales universitarios de divulgaci??n que se centren en la confluencia de los ??mbitos tem??ticos propios de la investigaci??n y desarrollo en la educaci??n. Adem??s, la revista pretende ser una plataforma para la difusi??n de novedades editoriales relevantes de este mismo ??mbito)</span></li>
    <li><span style="font-size: 14pt"><strong><a href="http://www.rinace.net/riejs/numeros/vol1_num1.html" target="_blank" rel="noopener noreferrer">Riejs </a></strong>(Revista Internacional de Educaci??n para la Justicia Social. Es una publicaci??n acad??mica en formato electr??nico arbitrada y editada por el Grupo de Investigaci??n ??Cambio Educativo para la Justicia Social?? de la Universidad Aut??noma de Madrid, Espa??a en colaboraci??n con la Red Iberoamericana de Investigaci??n sobre Cambio y Eficacia Escolar &#8211; RINACE-)</span></li>
    <li><span style="font-size: 14pt"><a href="http://www.uv.es/RELIEVE/" target="_blank" rel="noopener noreferrer"><strong>Relieve</strong></a><a href="http://www.uv.es/RELIEVE/" target="_blank" rel="noopener noreferrer"><strong> </strong></a>(Revista electr??nica que tiene una orientaci??n acad??mica con un exigente proceso de revisi??n por expertos  y es totalmente gratuita. Aspira a ser un instrumento de comunicaci??n para la comunidad educativa, en particular en temas de <em>investigaci??n</em> y de <em>evaluaci??n educativa</em>, entendidas en un sentido amplio. Pretende aprovechar eficazmente las posibilidades de comunicaci??n e interactividad que ofrece Internet. Est?? auspiciada por <a href="http://www.uv.es/aidipe" target="_blank" rel="noopener noreferrer">AIDIPE</a> (<em>Asociaci??n Interuniversitaria de Investigaci??n en Pedagog??a</em>) cuya sede social est?? en Pg. de la Vall d&#8217;Hebron, 171. 08035-Barcelona. <a href="http://www.uv.es/aidipe" target="_blank" rel="noopener noreferrer">AIDIPE</a> tambi??n edita, en formato impreso, la Revista de Investigaci??n Educativa (<a href="http://www.um.es/~depmide/RIE" target="_blank" rel="noopener noreferrer">RIE</a>)</span></li>
    <li><span style="font-size: 14pt"><a href="http://revistas.uv.mx/index.php/cpue/issue/current" target="_blank" rel="noopener noreferrer"><strong>Revista</strong><strong> </strong><strong>CPU-e</strong></a><a href="http://www.uv.mx/cpue/num15/contenido.html" target="_blank" rel="noopener noreferrer"> </a>(Revista de Investigaci??n Educativa, es una publicaci??n de investigaci??n y desarrollo; seriada, de aparici??n semestral y editada en una plataforma electr??nica para consulta exclusiva a trav??s de internet, de acceso gratuito y libre impresi??n. Su objetivo primordial es difundir resultados y avances significativos de investigaciones realizadas en el extenso campo de la educaci??n, constituy??ndose, por ende, en un acervo bibliogr??fico de art??culos originales que registra tanto el estado de la cuesti??n como las etapas previas en el progreso de las investigaciones. Est?? dirigida a investigadores nacionales y extranjeros de cualquier ??rea del conocimiento, principalmente hispanohablantes, cuyos intereses acad??micos entren en contacto con el campo de las investigaciones en educaci??n; docentes en educaci??n b??sica, media y superior, estudiantes de posgrado, licenciatura y educaci??n normal; funcionarios de los tres niveles de gobierno cuyos cargos est??n vinculados con temas educativos. Universidad Veracruzana)</span></li>
    </ul>
    <br>
    <p style="text-align: justify"><span style="font-size: 14pt"><strong>Ciencias Sociales / Cultura</strong></span></p>
    <ul style="text-align: justify">
    <li><span style="font-size: 14pt"><a href="http://revistas.up.edu.pe/index.php/apuntes/issue/current" target="_blank" rel="noopener noreferrer"><strong>Apuntes</strong></a> (Revista semestral de ciencias sociales editada por el Centro de Investigaci??n de la Universidad del Pac??fico (Per??) desde 1973. La revista tiene por finalidad publicar y difundir estudios realizados sobre econom??a, sociolog??a/antropolog??a, ciencias pol??ticas e historia latinoamericana. Apuntes publica en cada n??mero dos secciones. La primera se compone de art??culos de investigaci??n originales y la segunda est?? compuesta por notas y rese??as de libros publicados recientemente. Todos los art??culos env??ados a Apuntes pasan por un proceso de evaluaci??n externa a cargo de al menos dos expertos en la materia. La edici??n impresa de Apuntes se encuentra catalogada en las siguientes bases de datos: International Bibliography of Social Sciences, Periodicals Index Online, PAIS International, DIALNET, LATINDEX (Cat??logo) y ULRICH&#8217;S)</span></li>
    <li><span style="font-size: 14pt"><a href="http://revista.escaner.cl/" target="_blank" rel="noopener noreferrer"><strong>Esc??ner cultural</strong></a> (Es una revista virtural que se publica de manera gratuita en Internet. Por ser abierta, pluralista y participativa constituye una instancia de reflexi??n, registro e investigaci??n en torno a todo tipo de manifestaci??n art??stica in??dita, alternativa, no convencional, innovadora, realizada principalmente por creadores latinoamericanos. Su inter??s principal se centra en difundir la obra de creadores alternativos que desarrollen un trabajo serio, constante e innovador)</span></li>
    <li><span style="font-size: 14pt"><strong><a href="http://www.flacso.org/secretaria-general/publicaciones-secretar-general" target="_blank" rel="noopener noreferrer">Flacso </a></strong>(Facultad Latinoamericana de Ciencias Sociales. Publicaciones de la Secretar??a General. Descarga gratuita)</span></li>
    <li><span style="font-size: 14pt"><a href="http://teknokultura.net/index.php/tk" target="_blank" rel="noopener noreferrer"><strong>Teknokultura</strong></a> (Revista de Cultura Digital y Movimientos Sociales que se resiste a la asimilaci??n de los estudios sociales de la tecnolog??a y la cibercultura por sectores hegem??nicos y, por tanto, a que se relegue a grupos y colectivos que apuestan por modos distintos de producci??n y colectivizaci??n del capital cultural. Al igual que un laboratorio de experimentaci??n &#8211; hacklab &#8211; , Teknokultura re??ne esfuerzos colectivos con el prop??sito de profundizar en contenciosos tecnosociales, posicionarse ante los mismos e incitar ??participaciones aumentadas??. Universidad Complutense de Madrid)</span></li>
    </ul>
    <ul style="text-align: justify">
    <li><span style="font-size: 14pt"><a href="http://aprendeenlinea.udea.edu.co/revistas/index.php/trashumante/issue/current/showToc" target="_blank" rel="noopener noreferrer"><strong>Trashumante. Revista Americana de Historia Social</strong></a> (Es una publicaci??n semestral creada por la iniciativa y el apoyo del Grupo de Investigaci??n en Historia Social (GIHS) de la Facultad de Ciencias Sociales y Humanas de la Universidad de Antioquia (Medell??n, Colombia) y por la Divisi??n de Ciencias Sociales y Humanidades de la Universidad Aut??noma Metropolitana (UAM), unidad Cuajimalpa (M??xico, Distrito Federal). La revista se ha constituido como un medio para la difusi??n de contribuciones a la historiograf??a social en sus m??ltiples acepciones acad??micas)</span></li>
    </ul>
    <br>
    <p style="text-align: justify"><span style="font-size: 14pt"><strong>Estudios de G??nero</strong></span></p>
    <ul style="text-align: justify">
    <li><span style="font-size: 14pt"><strong><a href="http://www.upo.es/revistas/index.php/ambigua/index" target="_blank" rel="noopener noreferrer">Ambigua : Revista de Investigaciones sobre G??nero y Estudios Culturales</a> </strong>(Es una publicaci??n electr??nica que aparece en forma de monogr??fico y aborda aquellos temas que se encuadran dentro de las investigaciones sobre el g??nero y los estudios culturales desde una perspectiva interdisciplinar)</span></li>
    </ul>
    <br>
    <p style="text-align: justify"><span style="font-size: 14pt"><strong>Filosof??a</strong></span></p>
    <ul style="text-align: justify">
    <li><span style="font-size: 14pt"><a href="http://www.agoraphilosophica.com/index.html" target="_blank" rel="noopener noreferrer"><strong>Agora Philosophica</strong></a> (Revista marplatense de Filosof??a. Es una publicaci??n de la Asociaci??n Argentina de Investigaciones ??ticas. Se edita semestralmente en los meses de junio y diciembre. Tiene como objetivo la publicaci??n de art??culos de filosof??a originales, comunicaciones, presentaciones a congresos, estudios cr??ticos, traducciones, ensayos cortos, rese??as bibliogr??ficas, calendarios de reuniones, foros de discusi??n, comentarios de trabajos cient??ficos y de la especialidad)</span></li>
    </ul>
    <br>
    <p style="text-align: justify"><span style="font-size: 14pt"><strong>Geograf??a</strong></span></p>
    <ul style="text-align: justify">
    <li><span style="font-size: 14pt"><a href="http://www.geograficando.fahce.unlp.edu.ar/" target="_blank" rel="noopener noreferrer"><strong>Geograficando</strong> </a>(Publicaci??n semestral -junio y diciembre- del Departamento de Geograf??a de la Facultad de Humanidades y Ciencias de la Educaci??n de la Universidad Nacional de La Plata. Est?? dirigida a cient??ficos y profesionales, y comenz?? a editarse en el a??o 2005 (ISSN 1850-1885). El objetivo de la revista consiste en convocar a ge??grafos y estudiosos de las ciencias sociales y las humanidades para construir un pensar geogr??fico con responsabilidad social y promover el debate sobre posibles alternativas de articulaci??n para la generaci??n de conocimientos estrat??gicos desde nuestra ???situacionalidad??? y la producci??n de un discurso significativo. La revista aceptar?? art??culos originales en las ??reas concernientes a la disciplina. El proceso de evaluaci??n y aprobaci??n de los art??culos es realizado por referato externo)</span></li>
    <li><span style="font-size: 14pt"><a href="http://institucional.us.es/tamericanistas/" target="_blank" rel="noopener noreferrer"><strong>Temas Americanistas</strong></a> (Revista editada por el Grupo de investigaci??n ??Andaluc??a y Am??rica : tierra y sociedad??)</span></li>
    </ul>
    <br>
    <p style="text-align: justify"><span style="font-size: 14pt"><strong>Historia</strong></span></p>
    <ul style="text-align: justify">
    <li><span style="font-size: 14pt"><strong><a href="http://oozebap.org/africaneando/index.htm" target="_blank" rel="noopener noreferrer">Africaneando : Revista de actualidad y experiencias</a></strong> (En l??nea a texto completo)</span></li>
    <li><span style="font-size: 14pt"><a href="http://www.aletheia.fahce.unlp.edu.ar/front_page" target="_blank" rel="noopener noreferrer"><strong>Aletheia</strong></a> (es una revista electr??nica semestral sobre problem??ticas de historia y memoria colectiva en torno al pasado reciente argentino y de las sociedades latinoamericanas, en sus aspectos sociales, econ??micos, pol??ticos y culturales, editada por la Maestr??a en Historia y Memoria de la Facultad de Humanidades y Ciencias de la Educaci??n de la Universidad Nacional de La Plata)</span></li>
    <li><span style="font-size: 14pt"><a href="http://alhe.mora.edu.mx/index.php/ALHE/issue/current" target="_blank" rel="noopener noreferrer"><strong>Alhe</strong><strong> </strong></a>(Am??rica Latina en la Historia Econ??mica. M??xico. Es una publicaci??n cuatrimestral que difunde ensayos resultado de investigaciones originales sobre la historia material de Latinoam??rica, con el prop??sito de estimular el debate historiogr??fico, los estudios interdisciplinarios y el an??lisis comparativo. Algunos art??culos en texto completo)</span></li>
    <li><span style="font-size: 14pt"><a href="http://catedra-laicidad.unam.mx/?page_id=122" target="_blank" rel="noopener noreferrer"><strong>Colecci??n de cuadernos ???Jorge Carpizo???</strong><strong> </strong></a>(El Instituto de Investigaciones Jur??dicas de la UNAM acaba de lanzar una colecci??n de fasc??culos sobre laicidad. Se trata de 30 fasc??culos de los cuales la mitad ya est?? en l??nea y disponibles de manera gratuita, y en los cuales se problematiza el vinculo entre laicidad y resistencia, laicidad y modernidad, laicidad y constituci??n, etc. Las obras han sido producidas por fil??sofos, juristas, historiadores y cient??ficos pol??ticos de Europa y Am??rica. Textos completos en l??nea)</span></li>
    <li><span style="font-size: 14pt"><a href="http://es.wikipedia.org/wiki/Anexo:Revistas_de_estudios_africanos" target="_blank" rel="noopener noreferrer"><strong>Colecci??n Revistas de Estudios Africanos</strong></a> (o africanistas, listado de publicaciones peri??dicas acad??micas relacionadas con los diferentes campos de estudios africanos)</span></li>
    <li><span style="font-size: 14pt"><a href="http://www.contenciosa.org/Sitio/EquipoEditorial.aspx" target="_blank" rel="noopener noreferrer"><strong>Contenciosa</strong></a> (Revista digital semestral radicada en el Centro de Estudios Sociales Interdisciplinarios del Litoral, emergente de la tarea conjunta de investigadores de las Universidades Nacionales del Litoral y de Rosario y Complutense de Madrid. Recoge tanto estudios de caso como an??lisis en perspectivas transnacionales y comparadas, relativos a los procesos represivos contempor??neos en los pa??ses iberoamericanos y al an??lisis de las actitudes y comportamientos sociales en dichos contextos)</span></li>
    <li><span style="font-size: 14pt"><a href="http://ppct.caicyt.gov.ar/index.php/coordenadas/issue/current" target="_blank" rel="noopener noreferrer"><strong>Coordenadas</strong></a> (Revista de Historia local y regional del Grupo de Investigaci??n y Extensi??n en Historia Regional del Centro de Investigaciones Hist??ricas de la Universidad Nacional de R??o Cuarto (GIEHR-CIHUNRC), intenta erigirse como un espacio de socializaci??n de resultados in??ditos de investigaci??n hist??rica con ??nfasis en perspectivas locales y regionales. Su objetivo general es promover el intercambio conceptual, historiogr??fico y metodol??gico espec??ficos de la disciplina Hist??rica y, en particular, del campo de la Historia regional)</span></li>
    <li><span style="font-size: 14pt"><strong><a href="http://ppct.caicyt.gov.ar/index.php/corpus/index" target="_blank" rel="noopener noreferrer">Corpus. Archivos virtuales de la alteridad americana </a></strong>(Revista electr??nica de divulgaci??n, an??lisis y cr??tica de fuentes in??ditas o desconocidas sobre la historia o etnograf??a de los pueblos originarios,  campesinos, discusiones en torno a raza, y a otras alteridades del continente americano)</span></li>
    <li><span style="font-size: 14pt"><a href="http://dialnet.unirioja.es/servlet/revista?codigo=19471" target="_blank" rel="noopener noreferrer"><strong>Di??logo Pol??tico</strong></a> (Publicaci??n peri??dica de la Fundaci??n Konrad Adenauer, s??lidamente entroncada en la tradici??n del Humanismo Cristiano. Con el objetivo principal de fortalecer el di??logo pol??tico en Am??rica Latina, aborda en cada n??mero un tema de especial relevancia tanto por su actualidad como por su proyecci??n futura. Est?? enfocada fundamentalmente, en dirigentes pol??ticos, sociales y culturales, como as?? tambi??n en formadores de opini??n, periodistas, consultores, docentes universitarios y profesionales de diferentes ??reas. Es una revista trimestral con formato libro y se distribuye a lo largo y ancho del continente americano, en la mayor parte de Europa y en ciertas regiones de Asia y ??frica)</span></li>
    <li><span style="font-size: 14pt"><a href="http://publicaciones.sociales.uba.ar/index.php/elatina/issue/current" target="_blank" rel="noopener noreferrer"><strong>e-l@tina &#8211; Revista electr??nica de estudios latinoamericanos</strong></a> (Revista electr??nica de circulaci??n trimestral que busca promover un enfoque transdisciplinario de las sociedades latinoamericanas)</span></li>
    <li><span style="font-size: 14pt"><a href="http://p3.usal.edu.ar/index.php/epocas/issue/view/246/showToc" target="_blank" rel="noopener noreferrer"><strong>??pocas</strong></a> (Es una publicaci??n de la Facultad de Historia, Geograf??a y Turismo de la Universidad del Salvador dirigida a investigadores, acad??micos y estudiantes avanzados de Historia y otras ciencias sociales. Centralmente destinada a la comunicaci??n de investigaciones historiogr??ficas, acoge tambi??n estudios vinculados con aspectos epistemol??gicos y metodol??gicos de la disciplina, as?? como aportes interdisciplinarios directamente vinculados al saber hist??rico)</span></li>
    <li><span style="font-size: 14pt"><a href="http://historiacritica.uniandes.edu.co/indexar.php?c=Revista+No+44" target="_blank" rel="noopener noreferrer"><strong>Historia Cr??tica</strong></a> (Revista del Departamento de Historia de la Universidad de los Andes Bogot??, Colombia. Tiene como objetivo publicar art??culos in??ditos de autores nacionales y extranjeros, que presenten resultados de investigaci??n hist??rica o balances historiogr??ficos, as?? como reflexiones acad??micas relacionadas con los estudios hist??ricos)</span></li>
    <li><span style="font-size: 14pt"><a href="http://dialnet.unirioja.es/servlet/revista?codigo=8118" target="_blank" rel="noopener noreferrer"><strong>Historia y Sociedad</strong></a><a href="http://www.revistas.unal.edu.co/index.php/hisysoc/issue/view/3453/showToc" target="_blank" rel="noopener noreferrer"><strong> </strong></a>(La revista Historia y Sociedad publicaci??n del Departamento de Historia de la Facultad de Ciencias Humanas y Econ??micas de la Universidad Nacional de Colombia, sede Medell??n, desde sus inicios ha buscado abrir un espacio para la difusi??n de investigaciones hist??ricas a investigadores nacionales y extranjeros, consolidando adem??s los programas de pregrado, maestr??a y doctorado que el Departamento viene realizando)</span></li>
    <li><span style="font-size: 14pt"><a href="http://www.unizar.es/historiografias/numeros/1/index1.htm" target="_blank" rel="noopener noreferrer"><strong>Historiograf??as, revista de historia y teor??a</strong><strong> </strong></a>(Publicaci??n semestral electr??nica triling??e dedicada a los estudios historiogr??ficos y a la teor??a de la historia. Respaldada por especialistas de ??mbito internacional y profesores de distintas universidades,<em> </em><em>Historiograf??as </em>surge en 2010 de la iniciativa del grupo de trabajo que aglutina el profesor Gonzalo Pasamar en la Universidad de Zaragoza, Espa??a)</span></li>
    <li><span style="font-size: 14pt"><a href="http://iidentidadess.wordpress.com/actual/" target="_blank" rel="noopener noreferrer"><strong>Identidades</strong></a> (Revista del Instituto de Estudios Sociales y Pol??ticos de la Patagonia. IESyPPat.</span><br />
    <span style="font-size: 14pt">Facultad de Humanidades y Ciencias Sociales. Universidad Nacional de la Patagonia San Juan Bosco)</span></li>
    <li><span style="font-size: 14pt"><a href="http://revistaillapa.blogspot.com.ar/"target="_blank" rel="noopener noreferrer"><strong>Illapa</strong></a><a href="http://es.scribd.com/doc/42989545/Revista-ILLAPA-n%C2%BA-7-julio-2010" target="_blank" rel="noopener noreferrer"><strong> </strong></a>(Revista latinoamericana de Ciencias Sociales. Per??)</span></li>
    <li><span style="font-size: 14pt"><strong><a href="http://nuevomundo.revues.org/" target="_blank" rel="noopener noreferrer">Nuevo Mundo Nuevos Mundos</a></strong><strong> </strong>(Revista de historia y ciencias sociales que privilegia el comparatismo y las miradas cruzadas sobre las Am??ricas y el Mundo Hisp??nico)</span></li>
    <li><span style="font-size: 14pt"><a href="http://www.revistas.ufg.br/index.php/Opsis/issue/view/1513/showToc#.VSwsePDAo6k" target="_blank" rel="noopener noreferrer"><strong>Opsis</strong></a> (Publicaci??n semestral de la Unidad Acad??mica Especial de Historia y Ciencias Sociales de la Universidad Federal de Goi??s / Regional Catal??o. Brasil)</span></li>
    <li><span style="font-size: 14pt"><a href="http://www.polhis.com.ar/" target="_blank" rel="noopener noreferrer"><strong>PolHis</strong></a> (Bolet??n Bibliogr??fico Electr??nico del Programa Interuniversitario de Historia Pol??tica)</span></li>
    <li><span style="font-size: 14pt"><a href="http://www.refa.org.ar/index.php" target="_blank" rel="noopener noreferrer"><strong>REFA &#8211; Revista Electr??nica de Fuentes y Archivos</strong></a> (Publicaci??n virtual del Centro de Estudios Hist??ricos Prof. Carlos S. A. Segreti, unidad asociada al CONICET. Est?? dedicada al an??lisis de la producci??n historiogr??fica local, provincial y nacional, el estudio del patrimonio documental que guardan los archivos del pa??s y las nuevas formas de interrogar a las fuentes a partir de los recientes abordajes te??rico-metodol??gicos de la disciplina hist??rica. Est?? abierta, adem??s, a la recepci??n de informaci??n y estudios sobre patrimonio documental y repositorios de otros pa??ses del mundo. Los trabajos incluidos son seleccionados mediante un proceso de arbitraje llevado a cabo por especialistas)</span></li>
    <li><span style="font-size: 14pt"><strong><a href="http://www.revista-digital.ceemi-unr.com.ar/" target="_blank" rel="noopener noreferrer">Rese??as.Net</a></strong><strong> </strong>(Revista de rese??as bibliogr??ficas de Historia y Ciencias Sociales en la red es una publicaci??n del Centro de Estudios ???Espacio, Memoria e Identidad??? (CEEMI), perteneciente a la Facultad de Humanidades y Artes y a la Facultad de Ciencia Pol??tica y Relaciones Internacionales (RRII) de la Universidad Nacional de Rosario-Argentina)</span></li>
    <li><span style="font-size: 14pt"><strong><a href="http://reydesnudo.com.ar/rey-desnudo" target="_blank" rel="noopener noreferrer">Rey Desnudo </a></strong>(Es una revista de acceso abierto de publicaci??n semestral dedicada a los libros de historia. Nacida a partir de la inquietud de un conjunto de historiadores de distintas ??reas, ofrece una mirada sobre la producci??n historiogr??fica en diversos campos, a trav??s de comentarios de libros tanto recientes como cl??sicos, y comentarios bibliogr??ficos en torno a tem??ticas espec??ficas)</span></li>
    <li><span style="font-size: 14pt"><a href="http://www.riehr.com.ar/index.php" target="_blank" rel="noopener noreferrer"><strong>RIEHR</strong> </a>(Los objetivos de la <strong>Red Interdisciplinaria de Estudios sobre Historia Reciente</strong> (RIEHR) apuntan a contribuir a la consolidaci??n de un espacio colectivo apropiado para el intercambio trans- e interdisciplinario entre quienes investigan sobre la historia reciente de la Argentina y de los pa??ses de la regi??n que han atravesado procesos pol??ticos de car??cter traum??tico)</span></li>
    <li><span style="font-size: 14pt"><a href="http://sociedadesprecapitalistas.fahce.unlp.edu.ar/" target="_blank" rel="noopener noreferrer"><strong>Sociedades precapitalistas</strong> </a>(Publicaci??n semestral cient??fico-acad??mica, electr??nica, cuyo objetivo es difundir estudios historiogr??ficos focalizados en la g??nesis, morfolog??a y din??mica de las estructuras sociales anteriores al capitalismo. Publica trabajos de investigaci??n originales e in??ditos)</span></li>
    <li><span style="font-size: 14pt"><a href="http://institucional.us.es/tamericanistas/" target="_blank" rel="noopener noreferrer"><strong>Temas Americanistas</strong></a> (Revista editada por el Grupo de investigaci??n ??Andaluc??a y Am??rica : tierra y sociedad??)</span></li>
    <li><span style="font-size: 14pt"><a href="http://www.tiemposmodernos.org/tm3/index.php/tm" target="_blank" rel="noopener noreferrer"><strong>Tiempos Modernos</strong></a> (Revista electr??nica de Historia Moderna)</span></li>
    <li><span style="font-size: 14pt"><a href="https://tiempopresenterevhist.wordpress.com/category/numero-2/" target="_blank" rel="noopener noreferrer"><strong>Tiempo Presente. Revista de Historia</strong></a> (Editada en C??ceres. Departamento de Historia. Facultad de Filosof??a y Letras. Universidad de Extremadura. Grupo de Historia del Tiempo Presente)</span></li>
    </ul>
    <br>
    <p style="text-align: justify"><span style="font-size: 14pt"><strong>Literatura</strong></span></p>
    <ul style="text-align: justify">
    <li><span style="font-size: 14pt"><a href="http://revistes.ub.edu/index.php/AFLC target="_blank" rel="noopener noreferrer""><strong>Anuari de filologia. Literatures contempor??nies</strong></a> (Revista de libre acceso que tiene como objetivo la difusi??n de art??culos de investigaci??n y rese??as literarias de alto prestigio (con acceso abierto) i, por lo tanto, incluye art??culos monogr??ficos de obras y autores as?? como estudios de teor??a de la literatura. Los art??culos se publican en las lenguas impartidas en la Facultad de Filolog??a de la Universidad de Barcelona (catal??n, espa??ol, euskera, gallego, lat??n, griego, ingl??s, alem??n, italiano, franc??s, ??rabe, hebreo, neerland??s, sueco, ruso, polaco y turco). El espectro temporal y tem??tico de los art??culos de la secci??n Literaturas Contempor??neas del Anuario cubre los siglos XIX, XX y XXI, y se dirige a cient??ficos literarios a escala internacional. El Anuario de Filolog??a. Literaturas Contempor??neas cuenta con un Consejo Asesor Internacional que colabora con el Consejo de Redacci??n en el proceso de revisi??n y aceptaci??n de los art??culos por pares (peer-review). Universitat de Barcelona: Facultat de Filologia)</span></li>
    <li><span style="font-size: 14pt"><strong><a href="http://www.olivar.fahce.unlp.edu.ar/" target="_blank" rel="noopener noreferrer">Olivar </a></strong>(Revista cient??fica semestral (junio y diciembre) que publica art??culos originales e in??ditos, notas, documentos, entrevistas y rese??as cr??ticas sobre temas referidos a la literatura y la cultura espa??ola de todos los tiempos como tambi??n a sus conexiones con el universo americano)</span></li>
    </ul>
    <br>
    <p style="text-align: justify"><span style="font-size: 14pt"><strong>Psicolog??a</strong></span></p>
    <ul>
    <li style="text-align: justify"><span style="font-size: 14pt"><a href="http://aprendeenlinea.udea.edu.co/revistas/index.php/affectiosocietatis/issue/current" target="_blank" rel="noopener noreferrer"><strong>Affectio Societatis</strong></a> (Es una publicaci??n del Departamento de Psicoan??lisis de la Universidad de Antioquia (Medell??n-Colombia). Creada en el a??o de 1998 y concebida como un espacio de difusi??n acad??mica tanto de las actividades propias del Departamento de Psicoan??lisis, como del psicoan??lisis en general, va dirigida a docentes, investigadores, estudiantes y todos aquellos profesionales interesados en el ??mbito del psicoan??lisis)</span></li>
    <li style="text-align: justify"><span style="font-size: 14pt"><a href="http://revistas.um.es/analesps/" target="_blank" rel="noopener noreferrer"><strong>Anales de Psicolog??a</strong><strong> </strong></a>(Revista de las diversas ??reas tem??ticas de la psicolog??a cient??fica.  Universidad de Murcia, Espa??a)</span></li>
    <li style="text-align: justify"><span style="font-size: 14pt"><strong><a href="http://revistas.unc.edu.ar/index.php/aifp" target="_blank" rel="noopener noreferrer">Anuario de Investigaciones de la Facultad de Psicolog??a</a></strong> (Tiene como objetivo difundir los trabajos producidos por los grupos de investigaci??n de esta unidad acad??mica. Esta publicaci??n est?? editada por la Secretar??a de Ciencia y T??cnica de la Facultad de Psicolog??a, Universidad Nacional de C??rdoba)</span>
    </li>
    <li style="text-align: justify"><span style="font-size: 14pt"><a href="http://www.aperturas.org/revistas.php?n=actual" target="_blank" rel="noopener noreferrer"><strong>Aperturas psicoanal??ticas</strong></a> (Revista que incluye trabajos sobre teor??a, psicopatolog??ay t??cnica terap??utica en psicoan??lisis y psicoterapia psicoanal??tica impregnados de la visi??n integradora que la inspira: aperturas dentro del psicoan??lisis y, tambi??n, al di??logo y confrontaci??n con otras disciplinas como psicolog??a cognitiva, neurociencia, ling????stica, epistemolog??a, etc. Espa??a)</span></li>
    <li style="text-align: justify"><span style="font-size: 14pt"><strong><a href="http://revistas.urosario.edu.co/index.php/apl/issue/archive" target="_blank" rel="noopener noreferrer">Avances en Psicolog??a Latinoamericana</a></strong> (Publicaci??n cient??fica, con periodicidad semestral, que publica art??culos sobre psicolog??a, o ??reas relacionadas, en espa??ol, portugu??s, franc??s, ingl??s e italiano, con resumen y palabras clave, obtenidas del Thesaurus de la American Psychological Association, en espa??ol e ingl??s. Universidad de Rosario)</span></li>
    <li style="text-align: justify"><span style="font-size: 14pt"><a href="http://www.uv.es/seoane/boletin/previos/index.html" target="_blank" rel="noopener noreferrer"><strong>Bolet??n de Psicolog??a</strong></a> (Revista dedicada a la com??prensi??n de los fen??menos psicol??gicos y su manifestaci??n en los distintos ??mbitos de la vida personal y social. Desde los comienzos de los a??os ochenta viene difundiendo las aportaciones te??ricas y emp??ricas de especialistas de distintos campos, aunque dedica es??pecial atenci??n a las dimensiones te??ricas y conceptuales. Est?? in??corpora??da a las bases de datos internacionales. Universidad de Valencia, Espa??a)</span></li>
    <li style="text-align: justify"><span style="font-size: 14pt"><a href="http://www.revistaenlaces.com.ar/" target="_blank" rel="noopener noreferrer"><strong>Enlaces</strong></a> (Revista de Psicoan??lisis y Cultura)</span></li>
    <li style="text-align: justify"><span style="font-size: 14pt"><a href="http://www.funlam.edu.co/poiesis/" target="_blank" rel="noopener noreferrer"><strong>Poiesis</strong></a> (Revista electr??nica de psicolog??a social)</span></li>
    <li style="text-align: justify"><span style="font-size: 14pt"><a href="http://www.psicothema.com/default.asp" target="_blank" rel="noopener noreferrer"><strong>Psicothema</strong></a> (Revista editada conjuntamente por la Facultad de Psicolog??a de la Universidad de Oviedo y el Colegio Oficial de Psic??logos de Asturias)</span></li>
    <li style="text-align: justify"><span style="font-size: 14pt"><a href="http://psikeba.wordpress.com/"target="_blank" rel="noopener noreferrer"><strong>Psikeba</strong></a><a href="http://www.psikeba.com.ar/numero/actual.htm"><strong> </strong></a>(Revista de Psicoan??lisis y Estudios Culturales. Buenos Aires. Argentina)</span></li>
    <li style="text-align: justify"><span style="font-size: 14pt"><a href="http://revistas.unc.edu.ar/index.php/racc" target="_blank" rel="noopener noreferrer"><strong>Revista Argentina de Ciencia del Comportamiento</strong></a> (RACC, es una publicaci??n trimestral que pretende cubrir un amplio espectro de investigaciones y pr??ctica en Psicolog??a y ciencias afines (pedagog??a, biolog??a, medicina, ling????stica, neurociencias, etc) . Su objetivo principal es promover la difusi??n nacional e internacional de las investigaciones emp??ricas en estas ??reas. Ingresada en las principales bases de datos bibliom??tricos, entre ellos REDALYC, SciElo-Argentina, DIALNET, DOAJ, PSICODOC y PsycINFO. Editada por Facultad de Psicolog??a. Universidad Nacional de C??rdoba. Argentina)</span></li>
    <li style="text-align: justify"><span style="font-size: 14pt"><a href="http://www.saludpublica.fcm.unc.edu.ar/node/169" target="_blank" rel="noopener noreferrer"><strong>Revista de la Escuela de Salud P??blica</strong></a> (Argentina)</span></li>
    <li style="text-align: justify"><span style="font-size: 14pt"><a href="http://www.revistapsicologia.uchile.cl/" target="_blank" rel="noopener noreferrer"><strong>Revista de Psicolog??a</strong></a> (Desde el a??o 1990, el Departamento de Psicolog??a de la Facultad de Ciencias Sociales de la Universidad de Chile edita la Revista de Psicolog??a, publicaci??n cient??fica semestral, que desde la Psicolog??a, y con la perspectiva de contribuir al di??logo con otras disciplinas, busca la difusi??n de art??culos que aborden problem??ticas contempor??neas relevantes)</span></li>
    <li style="text-align: justify"><span style="font-size: 14pt"><strong><a href="http://www.uv.es/garzon/psicologia%20politica/index.html" target="_blank" rel="noopener noreferrer">Revista de Psicolog??a Pol??tica</a></strong> (Revista semestral dedicada al an??lisis psicol??gico de los fen??menos pol??ticos con especial atenci??n a los problemas de cultura pol??tica y acci??n colectiva. Pretende difundir y facilitar el intercambio entre cient??ficos sociales de distintas disciplinas, pero sobre todo es un foro de debate entre cient??ficos de diferentes perspectivas te??ricas y distintos ??mbitos geogr??ficos, interesados en el estudio de las relaciones entre Psicolog??a y Pol??tica. La revista est?? incorporada en las disrintas bases de datos de la APA y Sociological Abstracts. Valencia. Espa??a)</span></li>
    <li style="text-align: justify"><span style="font-size: 14pt"><a href="http://ibero-revistas.metabiblioteca.org/index.php/ripsicologia/issue/view/68/showToc" target="_blank" rel="noopener noreferrer"><strong>Revista Iberoamericana de Psicolog??a </strong></a> (Es la publicaci??n cient??fica de la Corporaci??n Universitaria Iberoamericana de Bogot??, Colombia, indexada en Publindex en categor??a C. Su misi??n es publicar los resultados de trabajos en Psicolog??a originales de investigaciones  que contribuyan significativamente a enriquecer el conocimiento y la divulgaci??n de experiencias investigativas, nuevos avances y necesidades en el campo de la psicolog??a enmarcada en el contexto social. Se contemplar??n art??culos o producciones resultados de trabajos de la Iberoamericana y de otras instituciones o universidades tanto a nivel nacional como internacional dando cabida a los diferentes campos y tem??ticas de la psicolog??a. La revista tendr?? una periodicidad publicaci??n semestral y va dirigida a profesionales e investigadores de la psicolog??a y otras disciplinas relacionadas)</span></li>
    <li style="text-align: justify"><span style="font-size: 14pt"><a href="http://pepsic.bvsalud.org/scielo.php?script=sci_serial&amp;pid=0120-0534&amp;lng=pt&amp;nrm=iso" target="_blank" rel="noopener noreferrer"><strong>Revista Latinoamericana de Psicolog??a</strong></a></span></li>
    <li style="text-align: justify"><span style="font-size: 14pt"><a href="http://polipapers.upv.es/index.php/reinad" target="_blank" rel="noopener noreferrer"><strong>Revista sobre la infancia y la adolescencia</strong></a> (La revista se presenta como un foro permanente de discusi??n y reflexi??n, en el que se dan cita profesionales e investigadores, tanto de Espa??a como del resto del mundo, que trabajan con menores o constituyen su objeto de estudio, respectivamente)</span></li>
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
    <li><strong>Bibl. Nora Fern??ndez</strong></li>
    <li><strong>Correo electr??nico:</strong> <a href="mailto:norafernandez@ffyh.unc.edu.ar">norafernandez@ffyh.unc.edu.ar</a></strong></li>
    <li><strong>Tel??fono IP:</strong><strong> 5353610, interno 50401</strong></li>
    <li><strong>Sr. Javier Gonz??lez<br />
    </strong></li>
    <li><strong>Correo Electr??nico: </strong><strong><span class="PbnGhe oJeWuf fb0g6 eejsDc"><a href="mailto:javiergonzalez@ffyh.unc.edu.ar"><span dir="ltr" data-tooltip="Enviar correo">javiergonzalez@ffyh.unc.edu.ar</span></a></span><br />
    </strong></li>
    <li><strong>Tel??fono IP: 5353601, interno: 50223</strong></li>
    </ul>
    <br>
    <p><strong>REPOSITORIO DIGITAL UNIVERSITARIO &#8211; RDU</strong></p>
    <p><a href="https://rdu.unc.edu.ar" target="_blank" rel="noopener noreferrer">El Repositorio Digital Universitario (RDU)</a> y el <a href="https://revistas.unc.edu.ar/" target="_blank" rel="noopener noreferrer">Portal de Revistas de la UNC</a> son los Repositorios Institucionales de acceso abierto de la Universidad Nacional de C??rdoba y se encuentran adheridos al Sistema Nacional de Repositorios Digitales (SNRD) del Ministerio de Ciencia, Tecnolog??a e Innovaci??n Productiva (MINCYT).</p>
    <p>El Repositorio Digital Universitario (RDU) es un espacio donde se almacena, organiza, preserva, provee acceso libre y da visibilidad a nivel nacional e internacional, a la<br />
    producci??n cient??fica, acad??mica y cultural en formato digital, generada por los integrantes de la Universidad Nacional de C??rdoba.</p>
    <p><a href="https://ffyh.unc.edu.ar/biblioteca/nodos-oca/" target="_blank" rel="noopener noreferrer">Informaci??n acerca de los Nodos OCA</a></p>
    <br>
    <p><strong>MAS INFORMACI??N DE INTER??S SOBRE EL REPOSITORIO</strong></p>
    <p><a href="https://ffyh.unc.edu.ar/biblioteca/presentacion-de-trabajos-al-rdu/" target="_blank" rel="noopener noreferrer">Presentaci??n de Tesis en Formato Digital</a></p>
    <p><a href="https://ffyh.unc.edu.ar/biblioteca/derechos-de-autor/" target="_blank" rel="noopener noreferrer">Derechos de Autor</a></p>
    <p><a href="https://ffyh.unc.edu.ar/biblioteca/acceso-abierto-2/" target="_blank" rel="noopener noreferrer">Acceso Abierto</a></p>
    <p><a href="https://ffyh.unc.edu.ar/biblioteca/licencias-creative-commons/" target="_blank" rel="noopener noreferrer">Licencias Creative Commons</a></p>
    <p><a href="https://ffyh.unc.edu.ar/biblioteca/repositorio-institucional-unc-2/" target="_blank" rel="noopener noreferrer">Normativas </a></p>
    <p>Fuente de Informaci??n: Resoluci??n Pol??ticas de la UNC y P??gina Web de la OCA</p>
    <br>
    <p>Fuente: seccion de Repositorio Institucional RDU de la pagina de la Biblioteca FFyH:</p>
    <p>Visite la pagina Repositorio Institucional RDU, de la Biblioteca FFyH: <a href="https://ffyh.unc.edu.ar/biblioteca/acerca-de-nuestro-repositorio-institucional/" target="_blank" rel="noopener noreferrer">https://ffyh.unc.edu.ar/biblioteca/acerca-de-nuestro-repositorio-institucional/</a></p>
    
    `)

    incluir_funcion_botones();
}