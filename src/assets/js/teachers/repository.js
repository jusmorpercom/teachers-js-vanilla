// se encarga de guardar, actualizar, leer o eliminar los datos del storage 
import { getDatabase, setDatabase} from './../utils/storage' //como estoy parado en el repository, se tiene que salir de la carpeta teachers para poder entrar en la carpeta utils

const dbName = 'db_teachers'; //creamos la variable del nombre de la base de datos 

//después de obtener la base de datos 

export function createTeacher(teacher) { 
    const arrayTeachers = getDatabase(dbName); 
    arrayTeachers.push(teacher); //le decimos que guarde el array de teachers 
    setDatabase(dbName,arrayTeachers); //Le decimos que le lleve el array de teachers 
}


export function readTeachers() {
    return getDatabase(dbName);
}