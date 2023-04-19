// Encargado de acceder al local storage del navegador

export function getDatabase(){ //
    return localStorage.getItem('teachers'); 
}

export function setDatabase(teachers) { //va a recibir como variable a teachers y los va almacenar a la local storage
    localStorage.setItem('teachers', teachers);
}



