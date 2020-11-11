/****
 * TODO: ingresar email
 * TODO: VALIDAR CAMPOS DE TEXTO sólo letras(Mm) y numeros 0-9
 * 
 * TODO: VALIDAR CAMPOS VACIOS
 * 
 * TODO: VALIDAR ñ en textos, no en email
 * 
 * 
 */

 function validarFormulario(){
     var email = document.forms["suscrip-form"]["email-txt"].value;
     var nombre = document.forms["suscrip-form"]["nombre-txt"].value;
     var telefono = document.forms["suscrip-form"]["fono-txt"].value;
     var listaDeErrores = [];
    
    //Validar email
     if(email == ""){
        listaDeErrores.push("Debe ingresar un email\n");
        
    }

    //Validar nombre
    if(nombre == "") {
        listaDeErrores.push("Debe ingresar el alias\n"); 
    }
    
    

     //Validar teléfono
     if(telefono == ""){
         listaDeErrores.push("Debe ingresar un telefono\n");
    }

    //Mostrar errores en alert
    if(listaDeErrores.length > 0){
        var mensaje = "";
        for(i = 0; i < listaDeErrores.length;i++){
            mensaje += listaDeErrores[i];
        }
        alert(mensaje);
        
        return false;
    }else{
        alert("Suscripción exitosa");
        return true;
        
    } 

 }

 //VALIDAR CARACTERES A-Za-z0-9
 function checkTexto(e) {
    tecla = (document.all) ? e.keyCode : e.which;

    //Tecla de retroceso para borrar, siempre la permite
    if (tecla == 8) {
        return true;
    }

    // Patron de entrada acepta numeros y letras
    patron = /[A-Za-z0-9ñ]/;
    tecla_final = String.fromCharCode(tecla);
    return patron.test(tecla_final);
}

//Aceptar solo numeros en campo telefono
function checkNumero(e) {
    tecla = (document.all) ? e.keyCode : e.which;

    //Tecla de retroceso para borrar, siempre la permite
    if (tecla == 8) {
        return true;
    }

    // Patron de entrada acepta numeros y letras
    patron = /[0-9]/;
    tecla_final = String.fromCharCode(tecla);
    return patron.test(tecla_final);
}

//Validar caracteres solo de email.
function checkEmail(e) {
    tecla = (document.all) ? e.keyCode : e.which;

    //Tecla de retroceso para borrar, siempre la permite
    if (tecla == 8) {
        return true;
    }

    // Patron de entrada acepta numeros y letras
    patron = /[A-Za-z0-9@.]/;
    tecla_final = String.fromCharCode(tecla);
    return patron.test(tecla_final);
}
 