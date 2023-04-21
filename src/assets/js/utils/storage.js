// Encargado de acceder al local storage del navegador

export function getDatabase(dbName) {
    //obtenemos lo que tenemos en la base de datos 
    const database = JSON.parse(localStorage.getItem(dbName)); // lo que obtuvimos lo convertimos en json
    return database === null ? [] : database; // si database es null, retorna una bd vacía y si lo hay retornamos la bd 
}
// convertimos el json en string para que la base de datos lo leea
export function setDatabase(dbName, jsonData) { //va a recibir como variable a teachers y los va almacenar a la local storage, como solo recibe string
    localStorage.setItem(dbName, JSON.stringify(jsonData));
}

// la responsabilidad única es dividir las responsabilidades y funciones en varios archivos 


