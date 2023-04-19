// se encarga de toda la interacción de javascript con el html
import {formElements} from './form'

export function addEventListener() {
    window.addEventListener('load', () => {
        listenFormSubmitEvent();
    }); //encargado de escuchar todo lo que pasa en la pagina.
}


function listenFormSubmitEvent() {
    formElements.addEventListener('submit', (event) => {  //cuando presionen el botón de submit
    event.preventDefault(); // va a prevenir lo que pasa por defecto, en el caso del form que vuelve a recargar la pagina
    console.log(getFormData());
   });// va estar buscando en toda la estructura un elemento en especifico, a diferencia del query selector es que este busca por clases. 
    
} //Hay que buscar el método mas eficiente 
