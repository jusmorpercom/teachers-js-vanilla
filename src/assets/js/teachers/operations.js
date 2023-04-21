// se encarga de toda la interacción de javascript con el html
import alertify from 'alertifyjs'; 

import { formElements, getFormData, resetForm } from './form';
import { createTeacher, readTeachers } from './repository';


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
        resetForm();
        alertify.success('Profesor guardado correctamente') //revisar la documentación en la pagina de alertify 
        listTeachers();
    });// va estar buscando en toda la estructura un elemento en especifico, a diferencia del query selector es que este busca por clases. 

} //Hay que buscar el método mas eficiente 

//listar profesores
function listTeachers() {
    const arrayTeachers = readTeachers();
    const tbody = document.querySelector('#tblTeachers tbody');
    tbody.innerHTML = '';

    if (arrayTeachers.length > 0) {  

        arrayTeachers.forEach((teacher) => { //retorna el profesor y cada posición del profesor 

            const { id, name, description, email, birthDate } = teacher; // destructuración = convertir un objeto en variables


            const row = document.createElement('tr'); //por cada profesor voy a crear una fila 
            row.classList.add('align.middle');  //agregamos clases a los elementos 

            const colId = document.createElement('td'); //creamos las columnas de la tabla 
            colId.textContent = id; //al texto que tiene esa columna por ahora le colocamos el indice 
            colId.classList.add('text-center') //agregamos las clases 

            const colName = document.createElement('td');
            colName.textContent = name;

            const colDescription = document.createElement('td');
            colDescription.textContent = description;

            const colEmail = document.createElement('td');
            colEmail.textContent = email;

            const colBirthDate = document.createElement('td');
            colBirthDate.textContent = birthDate;

            const colButtons = document.createElement('td');
            colButtons.classList.add('text-center');

            // botón de editar 
            const editButton = document.createElement('Button');
            editButton.classList.add('btn', 'btn-primary', 'btn-edit', 'm-1');
            editButton.dataset.id = id; //para poder identificar a que profesor le pertenece el botón 
            editButton.setAttribute('tittle', 'Editar');

            const editIcon = document.createElement('em');
            editIcon.classList.add('fa', 'fa-pencil');
            editButton.appendChild(editIcon);

            colButtons.appendChild(editButton);

            // botón eliminar
            const deleteButton = document.createElement('button');
            deleteButton.classList.add('btn', 'btn-danger', 'btn-delete', 'm-1');
            deleteButton.dataset.id = id; //para poder identificar a que profesor le pertenece el botón 
            deleteButton.setAttribute('tittle', 'Eliminar');

            const deleteIcon = document.createElement('em');
            deleteIcon.classList.add('fa', 'fa-trash');
            deleteButton.appendChild(deleteIcon);

            colButtons.appendChild(deleteButton);


            row.appendChild(colId); //agregamos las columnas a la fila
            row.appendChild(colName);
            row.appendChild(colDescription);
            row.appendChild(colEmail);
            row.appendChild(colBirthDate);
            row.appendChild(colButtons);

            // agrego la fila al body 
            tbody.appendChild(row);
        });

    } else { //si la lista esta vacía a mostrar esto

        const rowEmpty = document.createElement('tr');
        const colEmpty = document.createElement('td'); 
        colEmpty.setAttribute('colspan', '6'); // coon el atributo colspan el mensaje ocupa las 6 columnas de la tabla
        colEmpty,textContent = 'No se encuentran registros disponibles'; 
        colEmpty.classList.add('text-center');
        rowEmpty.appendChild(colEmpty);

        tbody.appendChild(rowEmpty)
    }
}
 // optimizar el código