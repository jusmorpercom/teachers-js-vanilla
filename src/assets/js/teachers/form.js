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
    /**
     * const formData = new FormData(formElements.form); 
     * return Object.fromEntries(formData.entries()); 
     * Otra forma de obtener los datos, no es muy recomendada
     */
    // esto es un objeto tipo json

    const teacher = { //creamos el objeto profesor con los siguientes atributos, para reutilizar el código
        id: new Date().getTime(), //estamos sacando la fecha actual, pero por debajo es un numero que cuenta en milisegundos
        name: formElements.fields.name.value,
        description: formElements.fields.name.Value,
        email: formElements.fields.name.Value,
        birthDate: formElements.fields.name.Value,

    };
    return teacher;
} 
// cuando guardemos la info se limpie las celdas
export function resetForm() {
    formElements.form.reset();
}