// Se encarga de todas las validaciones y ejecutarlas. Todo lo de la carpeta de utils se puede reutilizar 
//todo lo que se encuentra en la carpeta de utils es genérico que podemos reutilizar

export function validateForm(fieldConfigurations) {
    let isValid = true;

    fieldConfigurations.forEach((fieldConfig) => {

        fieldConfig.validations.forEach((validationConfig) => {

            const currentFieldIsValid = validateField(fieldConfig.input, validationConfig);
            isValid = isValid && currentFieldIsValid;
        });
    });

    return isValid; // este método se encarga de validar si es valido o no
}

function validateField(input, validationConfig) {

    const { errorId, errorMessage, validationFunction } = validationConfig;

    const fieldIsValid = validationFunction(input.value); //Retorna True o False

    if (!fieldIsValid) { // el ! se esta negando, es lo mismo que decir === false
        input.classList.add('is-invalid'); 
        const errorMessageElement = createErrorMessageElement(errorId, errorMessage);
        input.insertAdjacentElement('afterend', errorMessageElement);
    } else {
        input.classList.add('is-valid');
    }

    return fieldIsValid; // retorna si el campo es valido o no
}
/**
 * Crea un elemento de mensaje de error para ser insertado después de que un campo no es valido
 * @private
 * @param {string} errorId - El ID del elemento del mensaje error;
 * @param {string} errorMessage - El mensaje de error que se muestra al usuario
 * @returns {HTMLDivElement} - Retorna el elemento que contiene el mensaje de error
 */

function createErrorMessageElement(errorId, errorMessage) {

    const errorMessageElement = document.createElement('div'); // creamos el elemento
    errorMessageElement.classList.add('invalid-feedback');
    errorMessageElement.setAttribute('id', errorId);
    errorMessageElement.textContent = errorMessage;
    return errorMessageElement;
}
// Remueve todos los mensajes de error cada vez que se presione reset 
function removeErrorMessageElements(errorID, errorMessage) {

}

function removeInputErrorMessage(input) {

}
