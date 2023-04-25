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


/**
 * Array de objetos que contiene información para las validaciones
 * Cada objeto contiene una referencia a cada campo, una array de objetos 
 * de validaciones que tendrá, el ID del error, el mensaje y la función de validación
 */
export const fieldConfigurations = [
    { 
        input: formElements.fields.name, //estamos accediendo al campo del name 
        validations: [
            { // por cada validación que quiera hacer tengo que copiar este código y hacer la validación cuantas se quiere
                errorId: `${formElements.fields.name.id}Required`,  // Estamos sacando el id del campo del name 
                errorMessage: 'El nombre es obligatorio.',
             // las Validaciones retornaran un true cuando debe mostrar el  mensaje de error
             // y un true cuando no debe mostrarlo  
                validationFunction: (value) => { //recibe el valor del campo sea vacío o el nombre 
                    return value.trim() !== ''; // si el valor de campo es diferente a nada 
                }
            }
            
        ]
    },
    { 
        input: formElements.fields.name, //estamos accediendo al campo del name 
        validations: [
            { // por cada validación que quiera hacer tengo que copiar este código y hacer la validación cuantas se quiere
                errorId: `${formElements.fields.description.id}Required`,  // Estamos sacando el id del campo del name 
                errorMessage: 'La descripción es obligatoria.',
             // las Validaciones retornaran un true cuando debe mostrar el  mensaje de error
             // y un true cuando no debe mostrarlo  
                validationFunction: (value) => { //recibe el valor del campo sea vacío o el nombre 
                    return value.trim() !== ''; // si el valor de campo es diferente a nada 
                }
            }
        ]
    }

];

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
        description: formElements.fields.description.Value,
        email: formElements.fields.email.Value,
        birthDate: formElements.fields.birthDate.Value,

    };
    return teacher;
} 
// cuando guardemos la info se limpie las celdas
export function resetForm() {
    formElements.form.reset();
}