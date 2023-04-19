// se encarga de la interacción y configuración del formulario

/**
 * Este objeto contiene las referencias a los elementos calves de los formularios
 */
export const formElements = {
    form: document.getElementById('teacherForm'),
    fields: {
        name: document.getElementById('txtName'),
        description: document.getElementById('txtDescription'),
        email: document.getElementById('txtEmail'),
        birthDate: document.getElementById('txtBirthDate'),
    }
};

export function getFormData() {

    const teacher = { //creamos el objeto profesor con los siguientes atributos
         description:  formElements.fields.name.Value,
         email:  formElements.fields.name.Value,
         birthDate:  formElements.fields.name.Value, 
         name:  formElements.fields.name.value,
    };
    return teacher;
    
}

// POR QUE NO ME SALE LOS CUADROS CUANDO ME PARO EN EL CODIGO???