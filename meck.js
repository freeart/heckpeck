!function(){
    const page = document.location.pathname
    switch(page){  
      case "/icpplus/":
      case "/icpplustieb/index.html":
        document.querySelector("#divProvincias select#form").value = "/icpplustie/citar"
        mostrarOcultarMensaje();
        document.querySelectorAll("#idMensajeBarcelona a")[2].click() 
        break;
      case "/icpplustieb/citar":
        document.querySelector("#tramite").value = window.__data__.type
        conseguirSubtramites()
        envia()
        break;
      case "/icpplustieb/acInfo":
        document.forms[0].submit()
        break;
      case "/icpplustieb/acEntrada":
        document.querySelector("#txtIdCitado").value = window.__data__.document
        document.querySelector("#txtDesCitado").value = window.__data__.name
        document.querySelector("#txtPaisNac").value = window.__data__.country
        document.querySelector("#txtFecha").value = window.__data__.expire
        window.scrollBy(0, 500);
        document.querySelector("#html_element").style.backgroundColor = "red";
        break;
      case "/icpplustieb/acValidarEntrada":
        enviar('solicitud')
        break;
      case "/icpplustieb/acCitar":
        // document.querySelector("#idSede").value = ""
        enviar()
        break;
      case "/icpplustieb/acVerFormulario":
        document.querySelector("#txtTelefonoCitado").value = window.__data__.phone
        enviar()      
        break;
      case "/icpplustieb/acOfertarCita":
        break;
    }
}()
