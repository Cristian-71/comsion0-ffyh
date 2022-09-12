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

    document.getElementById("ingreso_bt").onclick = function () {
        show_text_padre("ingreso");
    }

    document.getElementById("pregunta_ingreso_bt").onclick = function () {
        show_text_hijo("pregunta_ingreso");
    }
    document.getElementById("documentos_necesarios_inscribirse_bt").onclick = function () {
        show_text_hijo("documentos_necesarios_inscribirse");
    }
    document.getElementById("tips_sacar_fotos_bt").onclick = function () {
        show_text_hijo("tips_sacar_fotos");
    }

    document.getElementById("pregunta_ingresantes_extranjeros_bt").onclick = function () {
        show_text_hijo("pregunta_ingresantes_extranjeros");
    }
    document.getElementById("sec_incompleta_bt").onclick = function () {
        show_text_hijo("sec_incompleta");
    }
    document.getElementById("regimen_cursado_bt").onclick = function () {
        show_text_hijo("regimen_cursado");
    }
    document.getElementById("acceder_materias_ingreso_bt").onclick = function () {
        show_text_hijo("acceder_materias_ingreso");
    }
    document.getElementById("contenido_cursos_nivelacion_bt").onclick = function () {
        show_text_hijo("contenido_cursos_nivelacion");
    }
    document.getElementById("horarios_cursos_nivelacion_bt").onclick = function () {
        show_text_hijo("horarios_cursos_nivelacion");
    }
    document.getElementById("libre_curso_nivelacion_bt").onclick = function () {
        show_text_hijo("libre_curso_nivelacion");
    }
    document.getElementById("asig_pend_secundario_bt").onclick = function () {
        show_text_hijo("asig_pend_secundario");
    }
    document.getElementById("solicitar_pase_universidad_bt").onclick = function () {
        show_text_hijo("solicitar_pase_universidad");
    }
    document.getElementById("pregunta_incripcion_otra_carrera_bt").onclick = function () {
        show_text_hijo("pregunta_incripcion_otra_carrera");
    }
    document.getElementById("falla_subir_titulo_terciario_guarani_bt").onclick = function () {
        show_text_hijo("falla_subir_titulo_terciario_guarani");
    }
    document.getElementById("falla_preinscripcion_bt").onclick = function () {
        show_text_hijo("falla_preinscripcion");
    }



    document.getElementById("cursado_bt").onclick = function () {
        show_text_padre("cursado");
    }
    document.getElementById("pregunta_despacho_alumno_bt").onclick = function () {
        show_text_hijo("pregunta_despacho_alumno");
    }
    document.getElementById("tramites_frecuentes_despacho_alumno_bt").onclick = function () {
        show_text_hijo("tramites_frecuentes_despacho_alumno");
    }
    document.getElementById("promocion_bt").onclick = function () {
        show_text_hijo("promocion");
    }
    document.getElementById("inscripciones_bt").onclick = function () {
        show_text_hijo("inscripciones");
    }
    document.getElementById("becas_bt").onclick = function () {
        show_text_hijo("becas");
    }
    document.getElementById("regular_bt").onclick = function () {
        show_text_hijo("regular");
    }
    document.getElementById("cond_cursado_bt").onclick = function () {
        show_text_hijo("cond_cursado");
    }
    document.getElementById("tips_sacar_foto_bt").onclick = function () {
        show_text_hijo("tips_sacar_foto");
    }


    document.getElementById("biblioteca_bt").onclick = function () {
        show_text_padre("biblioteca");
    }
    document.getElementById("horarios_atencion_bt").onclick = function () {
        show_text_hijo("horarios_atencion");
    }
    document.getElementById("pregunta_asociarse_biblioteca_bt").onclick = function () {
        show_text_hijo("pregunta_asociarse_biblioteca");
    }
    document.getElementById("pregunta_prestar_domicilio_biblioteca_bt").onclick = function () {
        show_text_hijo("pregunta_prestar_domicilio_biblioteca");
    }
    document.getElementById("acceder_catalogo_biblioteca_bt").onclick = function () {
        show_text_hijo("acceder_catalogo_biblioteca");
    }
    document.getElementById("acceder_cuenta_biblioteca_bt").onclick = function () {
        show_text_hijo("acceder_cuenta_biblioteca");
    }
    document.getElementById("requisito_asocirse_biblioteca_bt").onclick = function () {
        show_text_hijo("requisito_asocirse_biblioteca");
    }
    document.getElementById("retraso_devolucion_biblioteca_bt").onclick = function () {
        show_text_hijo("retraso_devolucion_biblioteca");
    }
    document.getElementById("pregunta_reservar_libro_bt").onclick = function () {
        show_text_hijo("pregunta_reservar_libro");
    }
    document.getElementById("pregunta_tiempo_devolucion_libro_bt").onclick = function () {
        show_text_hijo("pregunta_tiempo_devolucion_libro");
    }
    document.getElementById("bajar_texto_biblioteca_electronica_bt").onclick = function () {
        show_text_hijo("bajar_texto_biblioteca_electronica");
    }
    document.getElementById("recibir_donaciones_biblioteca_bt").onclick = function () {
        show_text_hijo("recibir_donaciones_biblioteca");
    }
    document.getElementById("pregunta_imprimir_biblioteca_bt").onclick = function () {
        show_text_hijo("pregunta_imprimir_biblioteca");
    }
    document.getElementById("retirar_tercero_biblioteca_bt").onclick = function () {
        show_text_hijo("retirar_tercero_biblioteca");
    }
    document.getElementById("devolver_tercero_biblioteca_bt").onclick = function () {
        show_text_hijo("devolver_tercero_biblioteca");
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

    incluir_seccion_padre("ingreso", "SOBRE EL INGRESO");

    incluir_seccion_hijo("pregunta_ingreso", "¿Como me inscribo?", "ingreso");
    actualizar_parrafo("pregunta_ingreso", `
    <p>Todo el proceso de inscripción se realizará de manera virtual. <a href="https://blogs.ffyh.unc.edu.ar/ingreso" target="_blank" rel="noopener">Aqui encontras un instructivo</a><br/></p> `);

    incluir_seccion_hijo("documentos_necesarios_inscribirse", "¿Qué documentación necesito para iniciar el trámite?", "ingreso")
    actualizar_parrafo("documentos_necesarios_inscribirse", `
    <p>Documentos necesarios:</p>
    
    <ul>
    <li style="text-align: left;" aria-level="1"><span style="color: #003366;"><strong>DNI</strong></span>: (frente y dorso)</li>
    <li style="text-align: left;" aria-level="1"><span style="color: #003366;"><strong>Constancia de Título</strong></span> en trámite <strong>con la leyenda</strong> si “adeuda o no adeudas materias”, <b>ó</b> <span style="color: #003366;"><strong>Certificado Analítico de Estudio Secundario finalizado</strong></span> (frente y dorso).</li>
    <li style="text-align: left;" aria-level="1"><strong><span style="color: #003366;">Foto tipo carnet</span> </strong>4&#215;4 actualizada</li>
    </ul>`)
    incluir_seccion_hijo("tips_sacar_fotos", "¿Como sacar fotos desde un celular a documentos (para hacer tramites), ó tareas (para subir y enviar por mail)?", "ingreso")
    actualizar_parrafo("tips_sacar_fotos", `
    <p><span style="color: #ff00ff"><strong>Tips para fotografiar tareas o documentacion</span></p>
    <img src="./pages/preguntas/imagenes/Infografia-de-digitalizacion.jpeg" alt="Tips sacar foto al documento" style="box-sizing: border-box; margin-top: 5px; margin-bottom: 5px; width: 100%; height: 100%;">
    `)
    incluir_seccion_hijo("pregunta_ingresantes_extranjeros", "¿Cuál es el procedimiento si soy estudiante extranjero/a?", "ingreso")
    actualizar_parrafo("pregunta_ingresantes_extranjeros", `
    <p><a href="https://blogs.ffyh.unc.edu.ar/ingreso/2021/10/12/estudiantes-extranjeros-y-extranjeras/" target="_blank" rel="noopener"><strong>Aqui podras consultar</strong></a> las particularidades para estudiantes extranjeros y extranjeras</p>    
    `)

    incluir_seccion_hijo("sec_incompleta", "Adeudo materias ¿me puedo inscribir?", "ingreso");
    actualizar_parrafo("sec_incompleta", `
    <p>Si adeudas materias o todavía no tenes el analítico de finalización del secundario llenar igualmente los dos pasos de la inscripción y completa la Declaración Jurada de compromiso que te indica el formulario de inscripción. Tenes hasta el 30 de abril del 2022 para presentar la documentación adeudada.</p>
    `);
    incluir_seccion_hijo("asig_pend_secundario", "¿Qué pasa si no aparece mi Título/Institución de Secundario?", "ingreso");
    actualizar_parrafo("asig_pend_secundario", `
    <p>El título del secundario es un dato obligatorio que a futuro quedará reflejado en varias documentaciones que necesites, por lo que si no aparece comunicate con el Despacho de alumnxs a fin de<br />registrarlo. <a href="https://blogs.ffyh.unc.edu.ar/casaVerde/ingresantes/" target="_blank" rel="noopener">ClicK aqUí para ir al formulario</a></p>
    `);

    incluir_seccion_hijo("regimen_cursado", "¿Cual es el regimen de cursado?", "ingreso")
    actualizar_parrafo("regimen_cursado", `
    <p>El curso de nivelación se realiza en formato presencial y podrás consultar el programa y los materiales de estudio a partir de diciembre del 2022. Todas las carreras ofrecen horario de cursado vespertino y únicamente las carreras de Antropología e Historia tienen también turno matutino. Nuestra Facultad ofrece protocolos de accesibilidad para personas en situación de discapacidad y tiene reglamentaciones especiales para estudiantes trabajadores y/o con familiar a cargo. Para más información mira la pestaña de Información General de este Blog. (subpestaña Régimen de asistencia a Clases)</p>
    `)

    incluir_seccion_hijo("acceder_materias_ingreso", "¿Como puedo acceder a las materias de ingreso?", "ingreso")
    actualizar_parrafo("acceder_materias_ingreso", `
    <p>El material para el Ciclo Lectivo 2023 no estará disponible hasta finales de este año. Sin embargo, podes solicitar el que se está utilizando en este Ciclo 2022 (que puede llegar a modificarse para el próximo año). <br />Para adquirirlo virtualmente te recomendamos que te contactes con el Centro de Estudiantes y se los solicites: centrodelosestudiantes.ffyh@gmail.com (También podes escribirle a sus redes sociales en facebook e Instagram)</p>
    `)

    incluir_seccion_hijo("contenido_cursos_nivelacion", "¿Cual es el contenido de los cursos de Nivelacion en las carreras?", "ingreso")
    actualizar_parrafo("contenido_cursos_nivelacion", `
    <ol><li><strong>Primer Módulo:</strong> <br /><span style="color: #800080"><strong>Introducción a la  Vida Universitaria</strong> </span><br />Este módulo abordará los aspectos fundamentales de la vida en la Universidad Nacional de Córdoba y el derecho al acceso a la Educación Superior como manera de constitución de una identidad universitaria. Se trabajan contenidos referidos a las dinámicas propias de la UNC y la facultad, la alfabetización en temáticas relevantes social y académicamente. Entre ellos, temáticas que han  ido tomando relevancia a partir de las necesidades propias de los contextos sociales tales como  Derechos Humanos,   Género, Educación Sexual Integral y el aprendizaje en los entornos virtuales.</li>
    <li><strong>Segundo Módulo<br /></strong><span style="color: #800080"><strong>Aportes teóricos-políticos feministas a los campos de conocimiento disciplinar</strong></span> <br />A partir de la Resolución Decanal 02/2020 se propone abordar contenidos de formación vinculados al Género y Educación Sexual Integral que provean herramientas teóricas de análisis y las vinculen con la formación disciplinar.</li>
    <li><strong>Tercer Módulo</strong><br /><span style="color: #800080"><strong>Introducción a los estudios disciplinares</strong></span><br />Este momento es la introducción a los estudios propios de la disciplina que se articulan con el primer año del cursado de la carrera elegida. Esta instancia pretende brindar las primeras herramientas y conceptualizaciones centrales que acompañarán el cursado del/la estudiante a lo largo de la carrera. </li>
    </ol> 
    `)

    incluir_seccion_hijo("horarios_cursos_nivelacion", "¿Cuáles son los horarios de curso de nivelación por carrera?", "ingreso")
    actualizar_parrafo("horarios_cursos_nivelacion", `
    <p>En diciembre se publicarán los horarios definitivos de todas las carreras. Te adelantamos que todas las carreras ofrecen horario de cursado vespertino y únicamente las carreras de Antropología e Historia tienen también turno matutino.</p>
    `)
    incluir_seccion_hijo("libre_curso_nivelacion", "¿Es posible rendir el Curso de Nivelación de manera libre?", "ingreso")
    actualizar_parrafo("libre_curso_nivelacion", `
    <p>Sí.</p>
    <p>Para ello, necesitarás:</p>
    <p>Estudiar todo el material de los tres módulos. Te sugerimos contactarte con las y los docentes a cargo del Curso de tu carrera o bien contactarte con ellos por correo electrónico desde el Aula Virtual para que te expliquen la modalidad del examen.<br />Inscribirte a través del Sistema Guaraní al examen en las fechas establecidas por Calendario Académico. La inscripción para poder rendir tiene fecha de vencimiento y suele ser varios días antes de la fecha de examen.</p>
    <p>Si no aprobás dicho examen, en la mayoría de las carreras podés empezar a cursar materias luego de hacer la <strong>Matriculación anual</strong> y la inscripción en las <strong>materias de primer año</strong>. (para saber las correlatividades de las materias de la carrera que elegiste cursar comunícate con su Secretaría Técnica)</p>
    <p>Pero deberás rendir y aprobar el Curso de Nivelación en los próximos turnos de exámenes del año 2023.</p>
    `)

    incluir_seccion_hijo("solicitar_pase_universidad", "Voy a solicitar un Pase de Universidad ¿me tengo que preinscribir en Diciembre?", "ingreso")
    actualizar_parrafo("solicitar_pase_universidad", `
   <p>No, en este caso tenés que iniciar un expediente por mesa de entrada en periodo habilitado por Calendario Academico. <a href="https://blogs.ffyh.unc.edu.ar/casaVerde/2021/02/10/procedimientos-para-solicitudes-de-pases-y-equivalencias/" target="_blank" rel="noopener"><strong>Clic aquí para realizar el trámite</strong></a></p>
   `)

    incluir_seccion_hijo("pregunta_incripcion_otra_carrera", "Estoy cursando una carrera de la misma Escuela,  ejemplo: Licenciatura en Historia y ahora me quiero inscribir al Profesorado en Historia ¿tengo que realizar preinscripción nuevamente?", "ingreso")
    actualizar_parrafo("pregunta_incripcion_otra_carrera", `
   <p>Al ser ya estudiante de una carrera de la misma Escuela de la FFyH-UNC no te tenes que preinscribir ahora, sino que tenés<br />que solicitar la inscripción en marzo del próximo año a <a href="https://blogs.ffyh.unc.edu.ar/casaVerde/ingresantes/" target="_blank" rel="noopener"><strong>Despacho de </strong></a><a href="https://blogs.ffyh.unc.edu.ar/casaVerde/ingresantes/" target="_blank" rel="noopener"><strong>alumnos. </strong></a></p>
   `)
    incluir_seccion_hijo("falla_subir_titulo_terciario_guarani", "No puedo subir el certificado y título del terciario en Sistema Guaraní", "ingreso")
    actualizar_parrafo("falla_subir_titulo_terciario_guarani", `
    <p>En este caso solamente se presenta por Formulario de la Etapa 2 de preinscripción.</p>
    `)
    incluir_seccion_hijo("falla_preinscripcion", "¿Qué pasa si no completo las <strong>dos etapas obligatorias de preinscripción</strong>? (1º etapa por Sistema Guaraní y 2º etapa por formulario google)</span>", "ingreso")
    actualizar_parrafo("falla_preinscripcion", `
   <p><span style="color: #ff00ff"><strong>Ambas etapas son obligatorias.</strong></span> Si una de ellas está completa, <strong>no quedarás inscripte en la carrera</strong>. Por ello es importante que <span style="color: #ff00ff"><strong>verifiques</strong></span> en tu <em>bandeja de entrada, spam o correo no deseado</em> <strong>si te ha llegado la notificación del comprobante del formulario Google con tus respuestas,</strong> para estar segure de que completaste todos los pasos. </p>
   <p>En el mes de Diciembre, Despacho de alumnxs procesará tu solicitud y enviará -al correo informado-, el comprobante con la inscripción a la carrera y al curso de nivelación. </p>
   <p>En el mes de Marzo, Despacho de Alumnxs, te citará con turno específico para realizar la Matrícula Definitiva y la habilitación de libreta de estudiantes; en este momento se corrobora la documentación original<br />presentada en la preinscripción.</p> 
   `)



    incluir_seccion_padre("cursado", "SOBRE EL CURSADO");

    incluir_seccion_hijo("pregunta_despacho_alumno", "¿Que es Despacho de Alumno y Oficilia? ¿Como solicitar hacer un tramite?", "cursado")
    actualizar_parrafo("pregunta_despacho_alumno", `
    <section id="instructivo">
    <p><span style="color: #ff00ff"><strong>Despacho de Alumnos/as</strong></span></p>
    <p>Es el espacio de la Facultad al cual se dirigen los tramites a realizar.</p>
    <p> Debido a la situación de emergencia sanitaria que se vivió por la pandemia por el Covid-19, Despacho de Alumnos/as decidió atender por correo electrónico, para evitar la aglomeraciones de personas que se producían años anteriores, en Casa Verde.</p>
    <p>Para facilitarle la realizacion de los tramites/consultas a Despacho de Alumnos/as es necesario enviar la información de la siguiente manera.</p>
        <p> Enviar correo electrónico a <a href="mailto:despachocasaverde@ffyh.unc.edu.ar">despachocasaverde@ffyh.unc.edu.ar</a> especificando en el asunto NOMBRE DEL TRAMITE A REALIZAR, en el texto especificar:</p>
   <ul>
    <li>NOMBRE Y APELLIDO</li>
    <li>NUMERO DOCUMENTO</li>
    <li>CARRERA A LA QUE PERTENECE</li>
    </ul>
    <p>Es necesario describir con detalles, la explicación del problema, especificar trámite que desea realizar, pasos qué realizó, error que menciona el sistema Guarani; y copiar exactamente la leyenda que aparece en cartel, en el cuerpo del mail.</p>
    <p>Por ultimo, es importante ser paciente, en la espera de una respuesta.</p>
    
    <p><span style="color: #ff00ff"><strong>Oficialia</strong></span></p>
    <p><a href="https://blogs.ffyh.unc.edu.ar/casaVerde/horario-de-atencion/" target="_blank" rel="noopener noreferrer">HORARIO DE ATENCIÓN</a> DE TELETRABAJO DE LUNES A VIERNES DE 08:00 a 14:00 Hs</p>

    <p>Para consultas de Oficialia dirigir un correo a <a href="mailto:oficialia@ffyh.unc.edu.ar">oficialia@ffyh.unc.edu.ar</a></p>
    <p><a href="https://blogs.ffyh.unc.edu.ar/casaVerde/horario-de-atencion/" target="_blank" rel="noopener noreferrer">Horario de Atención - Despacho de Alumnos/as.</a></p>
    </section>
    `)

    incluir_seccion_hijo("tramites_frecuentes_despacho_alumno", "¿Cuales son los tramites frecuentes en Despacho de Alumnos/as?", "cursado")
    actualizar_parrafo("tramites_frecuentes_despacho_alumno", `
    <p>Los tramites mas frecuentes son</p>
    
    <p><span style="color: #ff00ff"><strong>CERTIFICACIONES:</strong></span></p>
    <ul>
    <li><strong>Certificado de alumno regular:</strong> se imprimen directamente del Guaraní. No tiene costo y no requiere sello ni firma de parte del Despacho de Alumnos.</li>
    <li><strong>Certificados de examen parcial y final:</strong> se utilizan para justificar días de estudio en el trabajo. Se puede retirar el formulario por Despacho de Alumnos o bien imprimir desde el sistema Guaraní. En ambos casos deben ser controlados y firmados en Despacho una vez que un docente de la cátedra los haya firmado (Titular, Adjunto o Asistente, no pueden ser firmado por adscriptos y/o ayudantes alumnos).</li>
    <li><strong>Certificado de reinscripción anual:</strong> ya que a partir del año lectivo 2014 no se sellan más las libretas con la matriculación anual, en caso de requerir dicha constancia deberá presentar un certificado de alumno regular o una constancia de reinscripción anual (ambas se gestionan vía sistema Guaraní).</li>
    <li><strong>Certificado de materias rendidas (analítico):</strong> se solicitan en Despacho de Alumnos.</li>
    </ul>
    <p><span style="color: #ff00ff"><strong>REINSCRIPCIÓN ANUAL:</strong></span></p>
    <p>Todos los años deberás reinscribirte (vía Guaraní) para poder realizar cualquier actividad académica (cursar materias, rendir regular o libre, etc.). Consultar las fechas de matriculación anual en el Calendario Académico.</p>
    <p><span style="color: #ff00ff"><strong>INSCRIPCIÓN A CURSADAS:</strong></span></p>

    <p>Una vez que hayas realizado la matriculación anual, podrás inscribirte en las materias que quieras cursar seleccionando la comisión correspondiente (se recomienda consultar previamente los horarios y días de cursado para elegir la opción conveniente).</p>
    <p><span style="color: #ff00ff"><strong>EXTRAVÍO O DETERIORO DE LIBRETAS:</strong></span></p>
    <p>Si perdiste o se deterioró tu libreta de trabajos prácticos, debés hacer un duplicado. Para ello, deberás realizar una exposición policial por el extravío y traer el comprobante, comprar una libreta nueva en el centro comercial de Ciencias Económicas. El trámite se realiza en Despacho de Alumnos los días y horarios de atención.</p>
    <p><span style="color: #ff00ff"><strong>PROBLEMAS O CONSULTAS SOBRE EL SISTEMA GUARANÍ:</strong></span></p>
    <p>Podés comunicarte con <a href="https://blogs.ffyh.unc.edu.ar/casaVerde/horario-de-atencion/" target="_blank" rel="noopener noreferrer"><strong>Despacho de Alumnos</strong></a> en los días y horarios de atención o vía e-mail a: <a href="mailto:despachocasaverde@ffyh.unc.edu.ar">despachocasaverde@ffyh.unc.edu.ar</a></p>
    <p><span style="color: #ff00ff"><strong>PROBLEMAS O CONSULTAS SOBRE EL AULA VIRTUAL:</strong></span></p>
    <p>Podés comunicarte al siguiente mail: <a href="mailto:despachocasaverde@ffyh.unc.edu.ar">despachocasaverde@ffyh.unc.edu.ar</a></p>
    Ademas podes seguir el siguiente instructivo que se encuentra descripto en la pregunta: <span style="color: #FF0000"><strong><i>¿Que es Despacho de Alumno y Oficilia? ¿Como solicitar hacer un tramite?</i></strong></span></p>
    `)
    incluir_seccion_hijo("promocion", "¿Qué es promocionar? ¿Qué significa?", "cursado");
    actualizar_parrafo("promocion", `
   Se denomina promoción haber cumplido todas las condiciones presentadas en el programa de una catedra en particular.<br>
   En general las condiciones de promocion son:
    <ul>
    <li> Asitir a mas del 80% de las clases de trabajos practicos. </li>
    <li> Haber aprobado el 80% de los trabajos practicos con un promedio de 7.</li>
    <li> Haber aprobado los dos parciales con un promedio de 7.</li>
    <li> Aunque hay catedras que tienen requisitos particulares para acreditar la promocion, como talleres y seminarios. </li>
    </ul>
    Al finalizar el cuatrimestre o la catedra, se evaluan los contenidos que se dieron en el cursado, acreditar la condicion de promocion, en algunos casos te exhime de rendir o el contenido es menor a quien tiene que rendir la evaluacion con condicion de regular.
   `);


    incluir_seccion_hijo("inscripciones", "¿Cuando se realizan las inscripciones?", "cursado");
    actualizar_parrafo("inscripciones", `
   El primer paso para ingresar a la UNC es realizar la preinscripcion a la carrera que hayas elegido en la facultad o escuela correspondiente. La preinscripcion se realiza entre fines de noviembre y comienzos de diciembre, pero tenes que confirmar la fecha especifica que te corresponde en cada Facultad o Escuela.
   `);

    incluir_seccion_hijo("becas", " ¿Cursar en la FFyH tiene algún costo?¿Existen becas? ", "cursado");
    actualizar_parrafo("becas", `
   <p>Sostenemos el derecho a una educación gratuita, laica y de calidad. Por ello, nuestras carreras no tienen costo. Además, para acompañarte en tu acceso a la Educación Superior existen diferentes políticas de ayuda económica u orientadas a disminuir el gasto en apuntes, comida, transporte, etc.</p>
    <p>Se trata de políticas impulsadas por diferentes organismos y en consecuencia difieren en requisitos y en sus períodos de convocatoria. A toda la información de cada convocatoria podés encontrarla en <a href="https://ffyh.unc.edu.ar/sae/">https://ffyh.unc.edu.ar/sae/</a> en la solapa <b>becas</b>. </p>
    <p><strong>Estas son:</strong></p>
    <ul>
    <li><b>Beca PROGRESAR: </b>Son becas económicas destinadas a ingresantes de entre 18 y 24 años, aunque sin límite de edad para personas que pertenezcan a algún grupo de vulnerabilidad. A la inscripción debés realizarla de manera totalmente online, durante el período en que se encuentra abierta: generalmente el mes de febrero, y a partir de 2021, hay una segunda convocatoria al inicio del 2do semestre de cursado. Debés cumplir requisitos económicos que se certificarán a partir de la base del ANSES, y académicos, una vez que avances en la cursada.</li>
    <li><b>Beca Manuel Belgrano</b>: Para estudiantes de la carrera de Geografía, se trata de una beca estímulo a carreras de carácter estratégico, de características similares a la PROGRESAR pero de monto mensual más alto.</li>
    <li><b>Becas de ingresantes: </b>Es una beca económica sin límite de edad cuya inscripción se tramita de manera online y luego se complementa en una entrevista. Se solicita en la primera quincena de octubre. Luego de ingresar a la Universidad podés continuar percibiendo una beca similar solicitando la <b>beca de fondo único</b>. Podés inscribirte aquí: <a href="https://www.unc.edu.ar/vida-estudiantil/becas-ingresantes-unc-2021">https://www.unc.edu.ar/vida-estudiantil</a> </li>
    </ul>
    <p> </p>
    <p><span style="color: #003d99"><strong>A partir de los meses de marzo/abril podés acceder a las siguientes herramientas:</strong></span></p>
    <ul>
    <li><b>Beca de conectividad:</b> Mientras se sostenga el cursado virtual, podés solicitar esta beca en caso de que no cuentes con wifi en tu hogar. Obtendrás una cantidad de datos mensuales para navegar desde tu celular.</li>
    <li><b>Beca de comedor: </b>Mientras el Comedor Universitario permanezca cerrado, esta beca se llama Nutrirse y consiste en módulos de alimentos para que puedas llevar a tu domicilio.</li>
    </ul>
    <ul>
    <li><b>Punto SAE Conecta: </b>A partir de que ingreses a la Universidad, cada vez que necesites utilizar una pc con acceso a internet, podés acercarte al punto SAE Conecta en ciudad universitaria. Debés reservar turnos de manera online.</li>
    </ul>
    <ul>
    <li><b>Beca de la SAE de la FFyH: </b>Beca de apuntes: Esta beca tiene como objetivo entregar los apuntes de una o más materias a las y los estudiantes que tengan dificultades para comprarlos. La inscripción se realiza online, y asigna grupos de prioridad.
    <p>Para el caso de los apuntes del Curso de Nivelación, esta beca se le otorga a las personas que tienen <b>beca de ingresantes</b>.</p>
    </li>
    </ul>
    <p><b></b></p>
    <ul>
    <li><b> Boleto Educativo Gratuito: </b>Cuando retornemos a la actividad presencial de carreras de grado, podrás volver a obtener el Boleto Educativo Gratuito, a partir del inicio del primer semestre (marzo).</li>
    </ul>
   `);


    incluir_seccion_hijo("regular", "¿Que es un estudiante regular?", "cursado");
    actualizar_parrafo("regular", `
   Todo alumno que se encuentre cursando en algún periodo lectivo actual en la facultad es alumno regular.
   `);

    incluir_seccion_hijo("cond_cursado", "¿Durante el cursado de materias que significa promociónar, quedar regular o quedar libre?", "cursado");
    actualizar_parrafo("cond_cursado", `
   <ul>
   <li>Promocionar:<br> El alumno que habiendo cursado la materia aprueba los parciales(virtual o presencial según sea el caso), presenta los trabajos prácticos al 100% y cumple el porcentaje de asistencia.</li>
   <li>Quedar Regular: <br> El alumno que habiendo cursado la materia (virtual o presencial según sea el caso) aprueba 1 parcial o 2 parciales(dependiendo la materia), presenta los trabajos prácticos al 100% y cumple el porcentaje de asistencia.</li>
   <li>Quedar Libre:<br> El alumno que habiendo cursado la materia no aprobó ningun parcial(virtual o presencial según sea el caso) o no cumple con las condiciones de regularidad.</li>
    </ul>
   `);
    incluir_seccion_hijo("tips_sacar_foto", "¿Como sacar fotos desde un celular a documentos (para hacer tramites), ó tareas (para subir y enviar por mail)?", "cursado")
    actualizar_parrafo("tips_sacar_foto", `
   <p><span style="color: #ff00ff"><strong>Tips para fotografiar tareas o documentacion</span></p>
   <img src="./pages/preguntas/imagenes/Infografia-de-digitalizacion.jpeg" alt="Tips sacar foto al documento" style="box-sizing: border-box; margin-top: 5px; margin-bottom: 5px; width: 100%; height: 100%;">
   `)


    incluir_seccion_padre("biblioteca", "SOBRE LA BIBLIOTECA");
    incluir_seccion_hijo("horarios_atencion", "¿Cuáles son los horarios de Atención de la Biblioteca?", "biblioteca")
    actualizar_parrafo("horarios_atencion", `
   <p><strong>La Biblioteca</strong> atiende al público de lunes a viernes de 10:00 a 17:00 hs.</p>
   <p><strong>Horario de  Americanista:</strong> lunes a viernes de 10:00 a 17:00 hs.</p>
   <p><strong>Horario de Hemeroteca:</strong> lunes a viernes de 14:00 a 17:00 hs.</p>
   <p><strong>Horario de Banco de Tesis:</strong> a definir</p>
   `)

    incluir_seccion_hijo("pregunta_asociarse_biblioteca", "¿Puedo utilizar la Biblioteca si no soy alumno de la Facultad? ¿Quienes pueden asociarse?", "biblioteca")
    actualizar_parrafo("pregunta_asociarse_biblioteca", `
   <p>Los servicios de la Biblioteca están disponibles para toda la comunidad.</p>
   <p>Pueden asociarse estudiantes, docentes, investigadores, egresados y no-docentes de las Facultades de Filosofía y Humanidades y de la Facultad de Psicología.</p>
   `)
    incluir_seccion_hijo("pregunta_prestar_domicilio_biblioteca", "¿Se prestan a domicilio diccionarios, enciclopedias y tesis doctorales?", "biblioteca")
    actualizar_parrafo("pregunta_prestar_domicilio_biblioteca", `
   <p>Los diccionarios y enciclopedias son materiales de referencia, solamente puede consultarse en sala de lectura.</p>
     `)
    incluir_seccion_hijo("acceder_catalogo_biblioteca", "¿Cómo accedo al catálogo?", "biblioteca")
    actualizar_parrafo("acceder_catalogo_biblioteca", `
    <p>La dirección del catálogo online es: <a href="http://ffyh.biblio.unc.edu.ar/" target="_blank" rel="noopener noreferrer">http://ffyh.biblio.unc.edu.ar/</a></p>
    `)
    incluir_seccion_hijo("acceder_cuenta_biblioteca", "¿Cómo accedo mi cuenta de la Biblioteca?", "biblioteca")
    actualizar_parrafo("acceder_cuenta_biblioteca", `
    <p>En el margen superior derecho del catálogo online, usted encontrará la opción:</p>
    <p>Ingresar a su cuenta</p>
    <p><b>Usuario:</b> número de DNI, sin puntos.</p>
    <p><b>Contraseña:</b> número de DNI, sin puntos.</p>
    <p>Aquí los socios podrán consultar el estado de sus préstamos, datos personales, historial de lectura,  y cambio de claves.</td>
    `)
    
    incluir_seccion_hijo("requisito_asocirse_biblioteca", "¿Qué necesito para asociarme?", "biblioteca")
    actualizar_parrafo("requisito_asocirse_biblioteca", `
    <p>Libreta de Trabajos Practicos y/o D.N.I</p>
    <p>Cedula de identidad, Libreta de Trabajos Practicos y/o Pasaporte, en el caso de ser usuarios extranjeros.</p>
    `)
    incluir_seccion_hijo("retraso_devolucion_biblioteca","¿Qué pasa si me retraso en devolver el libro?", "biblioteca")
    actualizar_parrafo("retraso_devolucion_biblioteca", `
    <p>Tendrá una sanción, por cada día de retraso son tres días de suspensión. Tanto los días de retraso como los de suspensión serán contados de corrido.</p>
    <p>Para mas informacion y confiable.<strong> Lea el Reglamento de la biblioteca: <a href="https://ffyh.unc.edu.ar/biblioteca/reglamento-de-la-biblioteca/" target="_blank" rel="noopener noreferrer">https://ffyh.unc.edu.ar/biblioteca/reglamento-de-la-biblioteca/</a></strong></p>
    `)
    incluir_seccion_hijo("pregunta_reservar_libro","¿Puedo reservar un libro?", "biblioteca")
    actualizar_parrafo("pregunta_reservar_libro", `
    <p>El sistema de préstamo incluye por defecto un botón que dice «reservar», pero nuestro reglamento no contempla reservas, sin excepción alguna.</p>
    `)
    incluir_seccion_hijo("pregunta_tiempo_devolucion_libro","¿Puedo saber cuándo devuelven el libro que necesito?", "biblioteca")
    actualizar_parrafo("pregunta_tiempo_devolucion_libro", `
    <p>Sí, al ingresar a la base de datos figura el estado del libro: «Disponible» ó «Prestado hasta».</p>
    <p>Puede consultar a personal de la biblioteca por medio de Facebook, Instagram ó Mail.</p>
    <ul>
    <li>Facebook: <a href="https://www.facebook.com/bibliotecaelmak.deestrabou/" target="_blank" rel="noopener noreferrer">https://www.facebook.com/bibliotecaelmak.deestrabou/</a></li>
    <li>Mail: <a href="mailto:biblio@ffyh.unc.edu.ar">biblio@ffyh.unc.edu.ar</a></li>
    <ul>
    `)
    incluir_seccion_hijo("bajar_texto_biblioteca_electronica","¿Puedo bajar texto completo de la Biblioteca Electrónica del Mincyt? ¿Cómo la consulto?", "biblioteca")
    actualizar_parrafo("bajar_texto_biblioteca_electronica", `
    <p>Las bases pertenecientes a la Biblioteca Electrónica del MINCYT sólo permiten el acceso desde un IP de la UNC.</p>
    `)
    incluir_seccion_hijo("recibir_donaciones_biblioteca","¿La biblioteca recibe donación de particulares?", "biblioteca")
    actualizar_parrafo("recibir_donaciones_biblioteca", `
    <p>Sí, se reciben donaciones particulares siempre y cuando cumplan con las siguientes políticas de donación de la biblioteca, descriptas en la pagina de la biblioteca.</p>
    <p>Pagina de la Biblioteca, seccion Políticas de donación de la biblioteca:</p> 
    <p><a href="https://ffyh.unc.edu.ar/biblioteca/politicas-para-canje-y-donacion/" target="_blank" rel="noopener noreferrer">https://ffyh.unc.edu.ar/biblioteca/politicas-para-canje-y-donacion/</a></p>
    `)
    incluir_seccion_hijo("pregunta_imprimir_biblioteca","¿Puedo imprimir en la biblioteca?", "biblioteca")
    actualizar_parrafo("pregunta_imprimir_biblioteca", `
    <p>No, la biblioteca no cuenta con impresoras para los usuarios.</p>
    `)
    incluir_seccion_hijo("retirar_tercero_biblioteca","¿Un compañero puede retirar préstamos a mi nombre?", "biblioteca")
    actualizar_parrafo("retirar_tercero_biblioteca", `
    <p>No, los préstamos se realizan personalmente.</p>
    `)
    incluir_seccion_hijo("devolver_tercero_biblioteca","¿Un compañero puede devolver material prestado a mi nombre?", "biblioteca")
    actualizar_parrafo("devolver_tercero_biblioteca", `
    <p>Sí, las devoluciones no son personales.</p>
    `)
  

    incluir_funcion_botones();
}