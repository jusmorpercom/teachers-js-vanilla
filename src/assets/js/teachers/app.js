// Encargado de orquestar todas las funciones de los demás archivos

import {addEventListener } from './operations'; // del archivo operations importe la función addEventListener

export function initializeApp() {
    addEventListener();  // Cuando se inicie la aplicación se encarga de hacer algo
}