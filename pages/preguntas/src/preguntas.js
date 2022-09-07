let secciones_hijos = [];
let botones_hijos  = [];
let contenidos_hijos  = [];
let secciones_padres = [];
let botones_padres  = [];
let contenidos_padres  = [];
let  menu_lateral = false;


function incluir_seccion_padre(id_seccion, nombre_seccion){
    let nombre_boton = id_seccion + "_bt";
    let nombre_contenido =  id_seccion + "_contenido";

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

function incluir_seccion_hijo(id_seccion, nombre_seccion, id_padre){
    let nombre_boton = id_seccion + "_bt";
    let nombre_contenido =  id_seccion + "_contenido";
    let nombre_parrafo = id_seccion + "_parrafo";
    let nombre_contenido_padre =  id_padre + "_contenido";

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

function actualizar_parrafo(id_seccion, parrafo){
    let nombre_parrafo = id_seccion + "_parrafo";
    document.getElementById(nombre_parrafo).innerHTML = `
        ${parrafo}
    `;
}


function change_html(enlace){
    window.location.href = enlace;
}


function show_text_hijo(id_seccion){
    let nombre_contenido =  id_seccion + "_contenido";
    let nombre_boton = id_seccion + "_bt";

    var contenido = document.getElementById(nombre_contenido)
    
    if (window.getComputedStyle(contenido).display === "none") {
        for (i in contenidos_hijos) {
            if(contenidos_hijos[i] !== nombre_contenido){
                document.getElementById(contenidos_hijos[i]).style.display = "none";
            }
        }
        for (i in botones_hijos) {
            if(botones_hijos[i] !== nombre_boton){
                document.getElementById(botones_hijos[i]).style.borderBottomWidth = "1px"
                document.getElementById(botones_hijos[i]).style.borderBottomLeftRadius = "3px";
                document.getElementById(botones_hijos[i]).style.borderBottomRightRadius = "3px";
            }
        }
        contenido.style.display = "inline-block"
        document.getElementById(nombre_boton).style.borderBottomWidth = "0px"
        document.getElementById(nombre_boton).style.borderBottomLeftRadius = "0px";
        document.getElementById(nombre_boton).style.borderBottomRightRadius = "0px";
    }else{
        contenido.style.display = "none"
        document.getElementById(nombre_boton).style.borderBottomWidth = "1px"
        document.getElementById(nombre_boton).style.borderBottomLeftRadius = "3px";
        document.getElementById(nombre_boton).style.borderBottomRightRadius = "3px";
    }
    
}


function show_text_padre(id_seccion){
    let nombre_contenido =  id_seccion + "_contenido";
    let nombre_boton = id_seccion + "_bt";

    var contenido = document.getElementById(nombre_contenido)
    
    if (window.getComputedStyle(contenido).display === "none") {
        for (i in contenidos_padres) {
            if(contenidos_padres[i] !== nombre_contenido){
                document.getElementById(contenidos_padres[i]).style.display = "none";
            }
        }
        for (i in botones_padres) {
            if(botones_padres[i] !== nombre_boton){
                document.getElementById(botones_padres[i]).style.borderBottomWidth = "1px"
                document.getElementById(botones_padres[i]).style.borderBottomLeftRadius = "3px";
                document.getElementById(botones_padres[i]).style.borderBottomRightRadius = "3px";
            }
        }
        contenido.style.display = "inline-block"
        document.getElementById(nombre_boton).style.borderBottomWidth = "0px"
        document.getElementById(nombre_boton).style.borderBottomLeftRadius = "0px";
        document.getElementById(nombre_boton).style.borderBottomRightRadius = "0px";
    }else{
        contenido.style.display = "none"
        document.getElementById(nombre_boton).style.borderBottomWidth = "1px"
        document.getElementById(nombre_boton).style.borderBottomLeftRadius = "3px";
        document.getElementById(nombre_boton).style.borderBottomRightRadius = "3px";
    }

}

function mostrar_menu_lateral(){
    if(menu_lateral){
        document.getElementById("menu_div_smartphone").style.display="none";
        menu_lateral = false;
        document.getElementById("boton_menu_smartphone").innerHTML = `   
        <svg class="icono-menu" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
        </svg> `;
        document.getElementById("contenido").style.height = "100%";
        document.getElementById("contenido").style.overflow = "hidden";
        document.getElementById("contenido").style.alignSelf = "flex-start"

    }else{
        document.getElementById("menu_div_smartphone").style.display="flex";
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


function incluir_funcion_botones(){

    document.getElementById("ingreso_bt").onclick = function() {
        show_text_padre("ingreso");
    }
    document.getElementById("pregunta_ingreso_bt").onclick = function() {
        show_text_hijo("pregunta_ingreso");
    }
    document.getElementById("pregunta_ingresantes_extranjeros_bt").onclick = function() {
        show_text_hijo("pregunta_ingresantes_extranjeros");
    }
    document.getElementById("sec_incompleta_bt").onclick = function() {
        show_text_hijo("sec_incompleta");
    }
    document.getElementById("regimen_cursado_bt").onclick = function() {
        show_text_hijo("regimen_cursado");
    }
    document.getElementById("acceder_materias_ingreso_bt").onclick = function() {
        show_text_hijo("acceder_materias_ingreso");
    }
    document.getElementById("contenido_cursos_nivelacion_bt").onclick = function() {
        show_text_hijo("contenido_cursos_nivelacion");
    }
    document.getElementById("horarios_cursos_nivelacion_bt").onclick = function() {
        show_text_hijo("horarios_cursos_nivelacion");
    }
    document.getElementById("libre_curso_nivelacion_bt").onclick = function() {
        show_text_hijo("libre_curso_nivelacion");
    }
    document.getElementById("asig_pend_secundario_bt").onclick = function() {
        show_text_hijo("asig_pend_secundario");
    }
    document.getElementById("solicitar_pase_universidad_bt").onclick = function() {
        show_text_hijo("solicitar_pase_universidad");
    }
    document.getElementById("pregunta_incripcion_otra_carrera_bt").onclick = function() {
        show_text_hijo("pregunta_incripcion_otra_carrera");
    }
    document.getElementById("falla_subir_titulo_terciario_guarani_bt").onclick = function() {
        show_text_hijo("falla_subir_titulo_terciario_guarani");
    }
    document.getElementById("falla_preinscripcion_bt").onclick = function() {
        show_text_hijo("falla_preinscripcion");
    }
    


    document.getElementById("cursado_bt").onclick = function() {
        show_text_padre("cursado");
    }

    document.getElementById("promocion_bt").onclick = function() {
        show_text_hijo("promocion");
    }
    document.getElementById("inscripciones_bt").onclick = function() {
        show_text_hijo("inscripciones");
    }
    document.getElementById("becas_bt").onclick = function() {
        show_text_hijo("becas");
    }
    document.getElementById("regular_bt").onclick = function() {
        show_text_hijo("regular");
    }
    document.getElementById("cond_cursado_bt").onclick = function() {
        show_text_hijo("cond_cursado");
    }
    


    document.getElementById("boton_menu_smartphone").onclick = function() {
        mostrar_menu_lateral();
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


function carga_inicial(){

    incluir_seccion_padre("ingreso", "SOBRE EL INGRESO");

    incluir_seccion_hijo("pregunta_ingreso", "¿Como me inscribo?","ingreso");
    actualizar_parrafo("pregunta_ingreso",`
    <p>Todo el proceso de inscripción se realizará de manera virtual. <a href="https://blogs.ffyh.unc.edu.ar/ingreso" target="_blank" rel="noopener">Aqui encontras un instructivo</a><br/></p> `);
    incluir_seccion_hijo("pregunta_ingresantes_extranjeros","¿Cuál es el procedimiento si soy estudiante extranjero/a?" ,"ingreso")
    actualizar_parrafo("pregunta_ingresantes_extranjeros",`
    <p><a href="http://blogs.ffyh.unc.edu.ar/ingreso/2021/10/12/estudiantes-extranjeros-y-extranjeras/ target="_blank" rel="noopener""><strong>Aqui podras consultar</strong></a> las particularidades para estudiantes extranjeros y extranjeras</p>    `)

    incluir_seccion_hijo("sec_incompleta", "Adeudo materias ¿me puedo inscribir?", "ingreso");
    actualizar_parrafo("sec_incompleta", `
    <p>Si adeudas materias o todavía no tenes el analítico de finalización del secundario llenar igualmente los dos pasos de la inscripción y completa la Declaración Jurada de compromiso que te indica el formulario de inscripción. Tenes hasta el 30 de abril del 2022 para presentar la documentación adeudada.</p>
    `);
    incluir_seccion_hijo("asig_pend_secundario", "¿Qué pasa si no aparece mi Título/Institución de Secundario?", "ingreso");
    actualizar_parrafo("asig_pend_secundario", `
    <p>El título del secundario es un dato obligatorio que a futuro quedará reflejado en varias documentaciones que necesites, por lo que si no aparece comunicate con el Despacho de alumnxs a fin de<br />registrarlo. <a href="https://blogs.ffyh.unc.edu.ar/casaVerde/ingresantes/" target="_blank" rel="noopener">Clic auqí para ir al formulario</a></p>
    `);

    incluir_seccion_hijo("regimen_cursado","¿Cual es el regimen de cursado?","ingreso")
    actualizar_parrafo("regimen_cursado",`
    <p>El curso de nivelación se realiza en formato presencial y podrás consultar el programa y los materiales de estudio a partir de diciembre del 2022. Todas las carreras ofrecen horario de cursado vespertino y únicamente las carreras de Antropología e Historia tienen también turno matutino. Nuestra Facultad ofrece protocolos de accesibilidad para personas en situación de discapacidad y tiene reglamentaciones especiales para estudiantes trabajadores y/o con familiar a cargo. Para más información mira la pestaña de Información General de este Blog. (subpestaña Régimen de asistencia a Clases)</p>
    `)
    
    incluir_seccion_hijo("acceder_materias_ingreso","¿Como puedo acceder a las materias de ingreso?","ingreso")
    actualizar_parrafo("acceder_materias_ingreso",`
    <p>El material para el Ciclo Lectivo 2023 no estará disponible hasta finales de este año. Sin embargo, podes solicitar el que se está utilizando en este Ciclo 2022 (que puede llegar a modificarse para el próximo año). <br />Para adquirirlo virtualmente te recomendamos que te contactes con el Centro de Estudiantes y se los solicites: centrodelosestudiantes.ffyh@gmail.com (También podes escribirle a sus redes sociales en facebook e Instagram)</p>
    `)

    incluir_seccion_hijo("contenido_cursos_nivelacion","¿Cual es el contenido de los cursos de Nivelacion en las carreras?","ingreso")
    actualizar_parrafo("contenido_cursos_nivelacion",`
    <ol><li><strong>Primer Módulo:</strong> <br /><span style="color: #800080"><strong>Introducción a la  Vida Universitaria</strong> </span><br />Este módulo abordará los aspectos fundamentales de la vida en la Universidad Nacional de Córdoba y el derecho al acceso a la Educación Superior como manera de constitución de una identidad universitaria. Se trabajan contenidos referidos a las dinámicas propias de la UNC y la facultad, la alfabetización en temáticas relevantes social y académicamente. Entre ellos, temáticas que han  ido tomando relevancia a partir de las necesidades propias de los contextos sociales tales como  Derechos Humanos,   Género, Educación Sexual Integral y el aprendizaje en los entornos virtuales.</li>
    <li><strong>Segundo Módulo<br /></strong><span style="color: #800080"><strong>Aportes teóricos-políticos feministas a los campos de conocimiento disciplinar</strong></span> <br />A partir de la Resolución Decanal 02/2020 se propone abordar contenidos de formación vinculados al Género y Educación Sexual Integral que provean herramientas teóricas de análisis y las vinculen con la formación disciplinar.</li>
    <li><strong>Tercer Módulo</strong><br /><span style="color: #800080"><strong>Introducción a los estudios disciplinares</strong></span><br />Este momento es la introducción a los estudios propios de la disciplina que se articulan con el primer año del cursado de la carrera elegida. Esta instancia pretende brindar las primeras herramientas y conceptualizaciones centrales que acompañarán el cursado del/la estudiante a lo largo de la carrera. </li>
    </ol> 
    `)

    incluir_seccion_hijo("horarios_cursos_nivelacion","¿Cuáles son los horarios de curso de nivelación por carrera?","ingreso")
    actualizar_parrafo("horarios_cursos_nivelacion",`
    <p>En diciembre se publicarán los horarios definitivos de todas las carreras. Te adelantamos que todas las carreras ofrecen horario de cursado vespertino y únicamente las carreras de Antropología e Historia tienen también turno matutino.</p>
    `)
    incluir_seccion_hijo("libre_curso_nivelacion","¿Es posible rendir el Curso de Nivelación de manera libre?","ingreso")
    actualizar_parrafo("libre_curso_nivelacion",`
    <p>Sí.</p>
    <p>Para ello, necesitarás:</p>
    <p>Estudiar todo el material de los tres módulos. Te sugerimos contactarte con las y los docentes a cargo del Curso de tu carrera o bien contactarte con ellos por correo electrónico desde el Aula Virtual para que te expliquen la modalidad del examen.<br />Inscribirte a través del Sistema Guaraní al examen en las fechas establecidas por Calendario Académico. La inscripción para poder rendir tiene fecha de vencimiento y suele ser varios días antes de la fecha de examen.</p>
    <p>Si no aprobás dicho examen, en la mayoría de las carreras podés empezar a cursar materias luego de hacer la <strong>Matriculación anual</strong> y la inscripción en las <strong>materias de primer año</strong>. (para saber las correlatividades de las materias de la carrera que elegiste cursar comunícate con su Secretaría Técnica)</p>
    <p>Pero deberás rendir y aprobar el Curso de Nivelación en los próximos turnos de exámenes del año 2023.</p>
    `)

    incluir_seccion_hijo("solicitar_pase_universidad","Voy a solicitar un Pase de Universidad ¿me tengo que preinscribir en Diciembre?","ingreso")
   actualizar_parrafo("solicitar_pase_universidad",`
   <p>No, en este caso tenés que iniciar un expediente por mesa de entrada en periodo habilitado por Calendario Academico. <a href="https://blogs.ffyh.unc.edu.ar/casaVerde/2021/02/10/procedimientos-para-solicitudes-de-pases-y-equivalencias/" target="_blank" rel="noopener"><strong>Clic aquí para realizar el trámite</strong></a></p>
   `)

   incluir_seccion_hijo("pregunta_incripcion_otra_carrera","Estoy cursando una carrera de la misma Escuela,  ejemplo: Licenciatura en Historia y ahora me quiero inscribir al Profesorado en Historia ¿tengo que realizar preinscripción nuevamente?", "ingreso" )
   actualizar_parrafo("pregunta_incripcion_otra_carrera",`
   <p>Al ser ya estudiante de una carrera de la misma Escuela de la FFyH-UNC no te tenes que preinscribir ahora, sino que tenés<br />que solicitar la inscripción en marzo del próximo año a <a href="https://blogs.ffyh.unc.edu.ar/casaVerde/ingresantes/" target="_blank" rel="noopener"><strong>Despacho de </strong></a><a href="https://blogs.ffyh.unc.edu.ar/casaVerde/ingresantes/" target="_blank" rel="noopener"><strong>alumnos. </strong></a></p>
   `)
    incluir_seccion_hijo("falla_subir_titulo_terciario_guarani","No puedo subir el certificado y título del terciario en Sistema Guaraní","ingreso")
    actualizar_parrafo("falla_subir_titulo_terciario_guarani",`
    <p>En este caso solamente se presenta por Formulario de la Etapa 2 de preinscripción.</p>
    `)
   incluir_seccion_hijo("falla_preinscripcion","¿Qué pasa si no completo las <strong>dos etapas obligatorias de preinscripción</strong>? (1º etapa por Sistema Guaraní y 2º etapa por formulario google)</span>","ingreso")
   actualizar_parrafo("falla_preinscripcion",`
   <p><span style="color: #ff00ff"><strong>Ambas etapas son obligatorias.</strong></span> Si una de ellas está completa, <strong>no quedarás inscripte en la carrera</strong>. Por ello es importante que <span style="color: #ff00ff"><strong>verifiques</strong></span> en tu <em>bandeja de entrada, spam o correo no deseado</em> <strong>si te ha llegado la notificación del comprobante del formulario Google con tus respuestas,</strong> para estar segure de que completaste todos los pasos. </p>
   <p>En el mes de Diciembre, Despacho de alumnxs procesará tu solicitud y enviará -al correo informado-, el comprobante con la inscripción a la carrera y al curso de nivelación. </p>
   <p>En el mes de Marzo, Despacho de Alumnxs, te citará con turno específico para realizar la Matrícula Definitiva y la habilitación de libreta de estudiantes; en este momento se corrobora la documentación original<br />presentada en la preinscripción.</p> 
   `)
   


   incluir_seccion_padre("cursado", "SOBRE EL CURSADO");

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



    incluir_funcion_botones();
}