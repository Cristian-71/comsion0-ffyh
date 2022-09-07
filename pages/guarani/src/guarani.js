let secciones = [];
let botones = [];
let contenidos = [];
let  menu_lateral = false;



function incluir_seccion(id_seccion, nombre_seccion){
    let nombre_boton = id_seccion + "_bt";
    let nombre_contenido =  id_seccion + "_contenido";
    let nombre_parrafo = id_seccion + "_parrafo";
    let nombre_lista = id_seccion + "_lista";

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
        <ul id = ${nombre_lista}>
        </ul>
        </div>`;
    document.getElementById("contenido_main").appendChild(div_seccion);
    secciones.push(id_seccion);
    botones.push(nombre_boton);
    contenidos.push(nombre_contenido);
}


function actualizar_parrafo(id_seccion, parrafo){
    let nombre_parrafo = id_seccion + "_parrafo";
    document.getElementById(nombre_parrafo).innerHTML = `
        ${parrafo}
    `;
}

function actualizar_lista(id_seccion, link, texto_link){
    let nombre_lista = id_seccion + "_lista";

    const nuevo_link = document.createElement('li');
    nuevo_link.innerHTML = `   
    <a href= ${link} target="_blank" rel="noopener noreferrer" > ${texto_link} </a>`;
    document.getElementById(nombre_lista).appendChild(nuevo_link);
}


function show_text(id_seccion){
    let nombre_contenido =  id_seccion + "_contenido";
    let nombre_boton = id_seccion + "_bt";

    var contenido = document.getElementById(nombre_contenido)
    
    if (window.getComputedStyle(contenido).display === "none") {
        for (i in contenidos) {
            if(contenidos[i] !== nombre_contenido){
                document.getElementById(contenidos[i]).style.display = "none";
            }
        }
        for (i in botones) {
            if(botones[i] !== nombre_boton){
                document.getElementById(botones[i]).style.borderBottomWidth = "1px"
                document.getElementById(botones[i]).style.borderBottomLeftRadius = "3px";
                document.getElementById(botones[i]).style.borderBottomRightRadius = "3px";
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
    }
}

function incluir_funcion_botones(){
    document.getElementById("pre_insc_bt").onclick = function() {
        show_text("pre_insc");
    }

    //Script certificado alumno regular
    document.getElementById("cer_reg_bt").onclick = function() {
        show_text("cer_reg");
    }

    //Script plan de estudios
     document.getElementById("plan_est_bt").onclick = function() {
        show_text("plan_est");
    }

    //Script inscripcion a examenes y materias
    document.getElementById("insc_ex_mat_bt").onclick = function() {
        show_text("insc_ex_mat");
    }

    //Script Fecha_examenes
    document.getElementById("fech_exam_bt").onclick = function() {
        show_text("fech_exam");
    }

    //Script beg
    document.getElementById("beg_bt").onclick = function() {
        show_text("beg");
    }

    //Script legalizacion de titulo
    document.getElementById("leg_tit_bt").onclick = function() {
        show_text("leg_tit");
    }

    //Script Encuesta
      document.getElementById("encuesta_bt").onclick = function() {
        show_text("encuesta");
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


function change_html(enlace){
    window.location.href = enlace;
}


function carga_inicial(){
    
    incluir_seccion("pre_insc", "Inscripción a la carrera");
    actualizar_parrafo("pre_insc", `
    Deberás tener en cuenta que no aparecerán las opciones de carreras si no estás dentro de la fecha de
    inscripciones. La inscripción finaliza cuando despacho de alumnos confirma la solicitud.
    `);
    actualizar_lista("pre_insc", "https://autogestion.guarani.unc.edu.ar/alta_usuario_cursos", "Crea tu cuenta de guaraní");
    actualizar_lista("pre_insc", "https://www.youtube.com/watch?v=weHOJAxHYxY", "Tutorial de inscripción a carrera, el gmail de ingreso puede variar. Verifique con la facultad")


    incluir_seccion("cer_reg", "Certificado alumno regular");
    actualizar_parrafo("cer_reg", `
    El certificado de alumno regular es un documento que nos acredita como estudiantes de la facultad.
    <br>Los siguientes links te llevan a Guaraní para tramitarlo
    `);
    actualizar_lista("cer_reg", "https://autogestion.guarani.unc.edu.ar/solicitudes/solicitud_gestion", "Certificacion de alumno regular");
    actualizar_lista("cer_reg", "https://www.youtube.com/watch?v=T0gLVSGlhgw&t=19s", "Tutorial de como sacar el certificado");
   

    incluir_seccion("insc_ex_mat", "Incripción a materias y examenes");
    actualizar_parrafo("insc_ex_mat", `
    Tener en cuenta que no aparecerán opciones de materias o examenes si no nos encontramos en las fechas de inscripciones.
    `);
    actualizar_lista("insc_ex_mat", "https://autogestion.guarani.unc.edu.ar/cursada", "Inscripción a materias");
    actualizar_lista("insc_ex_mat", "https://autogestion.guarani.unc.edu.ar/examen", "Inscripción a examenes");

    incluir_seccion("plan_est", "Plan de estudios");
    actualizar_parrafo("plan_est", `
    En la sección plan de estudios hay una columna que se llamaba correlativa.<br>
    Si se aprieta en ver, podrá ver que materias necesita para cursar esa materia.<br>
    Tambien verá que cada materia tiene creditos, cada credito equivale a 1:30hr de clases, y un aproximado de 3hr de estudio personal (el cual es un promedio) por cada credito <br>
    Ejemplo: Introducción a la matematica tiene 4 creditos, es decir, equivale a 6 hs semanales de clases y un promedio de estudio de 12 hs semanales por su cuenta.<br>
    La correlativa para esta materia, como se puede ver en esa sección, es matematica del CINEU
    `);
    actualizar_lista("plan_est", "https://autogestion.guarani.unc.edu.ar/plan_estudio/", "Plan de estudio");
    actualizar_lista("plan_est", "https://autogestion.guarani.unc.edu.ar/porcentaje_avance_carrera", "Promedio y porcentaje de avance en la carrera");

    
    incluir_seccion("fech_exam", "Fechas de Examenes");
    actualizar_parrafo("fech_exam", `
    Las fechas de examenes son tres en el año:
    <ul >
     <li class="fechas">Febrero</li>
     <li class="fechas">Junio/Julio</li>  
     <li class="fechas">Noviembre/Diciembre</li>
     </ul>
     En el siguiente link podrás ver las fechas de cada examen.
    `);
    actualizar_lista("fech_exam", "https://autogestion.guarani.unc.edu.ar/fecha_examen", "Fechas de examenes");


    incluir_seccion("beg", "Boleto Educativo Gratuito");
    actualizar_parrafo("beg", `
    El BEG tiene por objeto garantizar la llegada de estudiantes, docentes y asistentes escolares de los establecimientos educativos de toda la provincia, eliminando así una potencial barrera de acceso a la educación.
    <br>Para poder tramitarlo debes autorizar desde tu guaraní para poder tramitarlo<br>
    El tramite debes hacerlo despues de inscribirte a las materias por guaraní así la empresa tiene tu horario de clases actualizado, y así poder habilitarte el boleto.
    `);
    actualizar_lista("beg", "https://cidi.cba.gov.ar/portal-publico/como-ser", "CiDi (Se requiere tener CiDi nivel 2)");
    actualizar_lista("beg", "https://play.google.com/store/apps/details?id=com.cidi.cba", "App CiDi para Android");
    actualizar_lista("beg", "https://autogestion.guarani.unc.edu.ar/tramite_beg", "Tramite a realizar en Guaraní para habilitación del BEG");
    actualizar_lista("beg", "https://www.youtube.com/watch?v=CkFk2ZuCDa8", "Tutorial para inscribirte y poder utilizar el Boleto Educativo Gratuito");

    incluir_seccion("leg_tit", "Legalización de título secundario");
    actualizar_parrafo("leg_tit", `
    Todo los estudiantes que ingresen a la UNC debe hacer este tramite.
    <br>El tramite no es gratuito, se debe abonar algo de dinero.
    `);
    actualizar_lista("leg_tit", "https://www.unc.edu.ar/sites/default/files/Legalizaci%C3%B3n_de_Anal%C3%ADtico_Secundario.pdf", "¿Qué necesito?");
    actualizar_lista("leg_tit", "https://www.google.com/maps/place/Oficial%C3%ADa+Mayor+%7C+U.N.C./@-31.4377972,-64.1863856,15z/data=!4m5!3m4!1s0x0:0xc507def79cf80ed6!8m2!3d-31.4378459!4d-64.1861738", "¿Dónde debo ir?");
    actualizar_lista("leg_tit", "http://secretarias.unc.edu.ar/escmb/copy_of_noticias/AULASABYD-1.pdf", "Mapa de la unc (el tramite se realiza en el edificio Baterias D)");

    incluir_seccion("encuesta", "Encuestas");
    actualizar_parrafo("encuesta", `
    Cada vez que se termine el semestre, aparecerán encuestas en guarani, las cuales deben ser completadas obligatoriamente
    <br>Si no son contestadas no podrás anotarte a las materias del siguiente semestre.
    <br>Si al prfesor no lo tuviste, debes seleccionar la opcion "No Contesta"
    `);
    actualizar_lista("encuesta", "https://autogestion.guarani.unc.edu.ar/encuestas_kolla", "Encuestas");

    incluir_funcion_botones();
}



