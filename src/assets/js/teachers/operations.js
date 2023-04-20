// se encarga de toda la interacción de javascript con el html
import {formElements, getFormData} from './form';
import {createTeacher, readTeachers} from './repository';


export function listeners() {
    window.addEventListener('load', () => {
        listenFormSubmitEvent();
        listTeachers();
    }); //encargado de escuchar todo lo que pasa en la pagina.
}


function listenFormSubmitEvent() {
    formElements.form.addEventListener('submit', (event) => {  //cuando presionen el botón de submit
    event.preventDefault(); // va a prevenir lo que pasa por defecto, en el caso del form que vuelve a recargar la pagina
    createTeacher(getFormData()); //se encarga de guardarlo 
   });// va estar buscando en toda la estructura un elemento en especifico, a diferencia del query selector es que este busca por clases. 
    
} //Hay que buscar el método mas eficiente 

//listar profesores
function listTeachers() {
    const arrayTeachers = readTeachers();
    const tbody = document.querySelector('#tblTeachers tbody'); 
    tbody.innerHTML = '';

    arrayTeachers.forEach( (teacher, index) => { //retorna el profesor y cada posición del profesor 

        const tr = document.createElement('tr'); //por cada profesor voy a crear una fila 
        
        colId.textContent = index; //al texto que tiene esa columana por ahora le colocamos el indice 
        const colId = documente.createElement('td'); //creamos las columnas de la tabla 
        colName.textContent = index;  
        const colName = documente.createElement('td');
        colDescription.textContent =  index;
        const colDescription = documente.createElement('td');
        colEmail.textContent = index;
        const colEmail = documente.createElement('td');
        colBirthDate.textContent = index;
        const colBirthDate = documente.createElement('td');
        colButtons.textContent = index;
        const colButtons = documente.createElement('td');

        row.appendChild(colId); //agregamos las columnas a la fila
        row.appendChild(colName);
        row.appendChild(colDescription);
        row.appendChild(colEmail);
        row.appendChild(colBirthDate);
        row.appendChild(colButtons);

        // agrego la fila al body 
        tbody.appendChild(row); 
     });
}
