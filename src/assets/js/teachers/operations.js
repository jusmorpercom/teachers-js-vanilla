// Encargado de la interacción de js con html

// Third Libraries
import alertify from 'alertifyjs';
// Own libraries
import { validateForm } from './../utils/validations'
// Module Libraries
import { formElements, fieldConfigurations, getFormData, resetForm } from './form';
import { createTeacher, readTeachers } from './repository';



export function listeners() {
    window.addEventListener('load', () => {
        listenFormSubmitEvent();
        listTeachers();
    }); // Encargado de escuchar todo lo que pasa en la pagina.
}

function listenFormSubmitEvent() {
    formElements.form.addEventListener('submit', (event) => { //cuando presionen el botón de submit
        event.preventDefault();  // va a prevenir lo que pasa por defecto, en el caso del form que vuelve a recargar la pagina

        if (validateForm(fieldConfigurations)) {
            createTeacher(getFormData()); //se encarga de guardarlo 
            resetForm();
            alertify.success('Profesor guardado correctamente');
            listTeachers();
        } else {
            alertify.error('Verificar los datos del formulario');
        }


    });// va estar buscando en toda la estructura un elemento en especifico, a diferencia del query selector es que este busca por clases. 
}
// listar profesores
function listTeachers() {
    const arrayTeachers = readTeachers();
    const tbody = document.querySelector('#tblTeachers tbody');
    tbody.innerHTML = '';

    if (arrayTeachers.length > 0) {

        arrayTeachers.forEach((teacher) => { //retorna el profesor y cada posición del profesor 

            const { id, name, description, email, birthDate } = teacher;

            // Creo la fila
            const row = document.createElement('tr');
            row.classList.add('align-middle');

            // Creo las columnas
            const colId = document.createElement('td');
            colId.textContent = id;
            colId.classList.add('text-center');

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

            const editButton = document.createElement('button');
            editButton.classList.add('btn', 'btn-primary', 'btn-edit', 'm-1');
            editButton.dataset.id = id;
            editButton.setAttribute('title', 'Editar');

            const editIcon = document.createElement('em');
            editIcon.classList.add('fa', 'fa-pencil');
            editButton.appendChild(editIcon);

            colButtons.appendChild(editButton);

            const deleteButton = document.createElement('button');
            deleteButton.classList.add('btn', 'btn-danger', 'btn-delete', 'm-1');
            deleteButton.dataset.id = id;
            deleteButton.setAttribute('title', 'Eliminar');

            const deleteIcon = document.createElement('em');
            deleteIcon.classList.add('fa', 'fa-trash');
            deleteButton.appendChild(deleteIcon);

            colButtons.appendChild(deleteButton);


            // Agrego las columnas a la fila
            row.appendChild(colId);
            row.appendChild(colName);
            row.appendChild(colDescription);
            row.appendChild(colEmail);
            row.appendChild(colBirthDate);
            row.appendChild(colButtons);

            // Agrego la fila al tbody
            tbody.appendChild(row);
        });

    } else { //si la lista esta vacía a mostrar esto

        const rowEmpty = document.createElement('tr');
        const colEmpty = document.createElement('td');
        colEmpty.setAttribute('colspan', '6'); // coon el atributo colspan el mensaje ocupa las 6 columnas de la tabla
        colEmpty.textContent = "No se encuentran registros disponibles";
        colEmpty.classList.add('text-center');
        rowEmpty.appendChild(colEmpty);

        tbody.appendChild(rowEmpty);

    }
}