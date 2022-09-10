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
    document.getElementById("sec_incompleta_bt").onclick = function() {
        show_text_hijo("sec_incompleta");
    }
    document.getElementById("asig_pend_secundario_bt").onclick = function() {
        show_text_hijo("asig_pend_secundario");
    }
    document.getElementById("promo_cineu_bt").onclick = function() {
        show_text_hijo("promo_cineu");
    }
    document.getElementById("mod_cineu_bt").onclick = function() {
        show_text_hijo("mod_cineu");
    }
    document.getElementById("falta_mod_cineu_bt").onclick = function() {
        show_text_hijo("falta_mod_cineu");
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
    document.getElementById("comision_bt").onclick = function() {
        show_text_hijo("comision");
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
    Todo el proceso de inscripción se realizará de manera virtual. <a href="https://blogs.ffyh.unc.edu.ar/ingreso" target="_blank" rel="noopener">Aqui encontras un instructivo</a>
    `);

    incluir_seccion_hijo("sec_incompleta", "Si no completé la escuela secundaria: ¿Puedo hacer la inscripción a la facultad?", "ingreso");
    actualizar_parrafo("sec_incompleta", `
    Sí, en ese caso, deberás traer una constancia de tu escuela donde se certifique que estás cursando el último año.
    `);
    incluir_seccion_hijo("asig_pend_secundario", "¿Qué pasa si tengo asignaturas pendientes del nivel secundario?", "ingreso");
    actualizar_parrafo("asig_pend_secundario", `
    Podés cursar como estudiante condicional hasta el 30 de abril, fecha límite para presentar el certificado que acredite que finalizaste los estudios secundarios y no adeudas materias.
    `);
    incluir_seccion_hijo("promo_cineu", "¿Puedo aprobar una asignatura del CINEU por promoción y rendir las otras en los exámenes generales?", "ingreso");
    actualizar_parrafo("promo_cineu", `
    Sí. Es muy frecuente que nuestros estudiantes aprueben algunas asignaturas por promoción y otras en los exámenes finales. Viene bien un ejemplo. Supongamos que te anotás para Matemática y Ambientación Universitaria, en la Modalidad Primavera y promocionas sólo una de esas asignaturas, entonces podés rendir la otra en cualquiera de los exámenes finales. Otra posibilidad es cursar de nuevo la asignatura no aprobada, en la Modalidad Verano
   `);
   incluir_seccion_hijo("mod_cineu", "¿Puedo aprobar las asignaturas del CINEU, sin haber cursado en cualquiera de las dos modalidades?", "ingreso");
   actualizar_parrafo("mod_cineu", `
   Sí. El cursado de las asignaturas del CINEU no es obligatorio. En el caso de no cursar algunas de las asignaturas del CINEU podrás rendirlas en un examen final si te inscribes en él.
   `);
   incluir_seccion_hijo("falta_mod_cineu", "¿Si me anoto para la Modalidad Primavera en alguna asignatura y después no hago nada: ¿pierdo la oportunidad de cursar la materia en la Modalidad Verano?", "ingreso");
   actualizar_parrafo("falta_mod_cineu", `
   No. No hay restricciones de ese tipo. En caso de no aprobar alguna asignatura en la Modalidad Primavera tenés que volver a inscribirte para cursar esas asignaturas en la Modalidad Verano.
   `);


   incluir_seccion_padre("cursado", "SOBRE EL CURSADO");

   incluir_seccion_hijo("promocion", "¿Qué es promocionar? ¿Qué significa?", "cursado");
   actualizar_parrafo("promocion", `
   Se denomina promoción a la posibilidad de aprobar una asignatura mediante la realización de exámenes parciales. Para promocionar una asignatura del CINEU deberás tener aprobadas las dos evaluaciones parciales de esa materia.
   `);


   incluir_seccion_hijo("inscripciones", "¿Cuando se realizan las inscripciones?", "cursado");
   actualizar_parrafo("inscripciones", `
   El primer paso para ingresar a la UNC es realizar la preinscripcion a la carrera que hayas elegido en la facultad o escuela correspondiente. La preinscripcion se realiza entre fines de noviembre y comienzos de diciembre, pero tenes que confirmar la fecha especifica que te corresponde en cada Facultad o Escuela.
   `);

   incluir_seccion_hijo("becas", "¿Cursar en la FFyH tiene algún costo?¿Existen becas?", "cursado");
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


   incluir_seccion_hijo("comision", "¿Cómo saber en qué comisión estoy?", "cursado");
   actualizar_parrafo("comision", `
   <ul>
   <li>1.Ingresar a Guaraní.</li>
   <li>2. Ir a la pestaña de reportes.</li>
   <li>3. Seleccionar	pestaña de mis inscripciones.</li>
   <li>4. En la columna de comisiones podrás encontrar la tuya.	</li>
    </ul>
    `);


    incluir_funcion_botones();
}