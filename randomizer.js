/**
 * Baraja un array in-place usando el algoritmo Fisher-Yates (Knuth).
 * @param {Array} array El array a barajar.
 */
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[i], array[j]]; // Intercambio de elementos
    }
    // No es necesario retornar el array, ya que se modifica in-place
}

// Exporta la función para que otros archivos puedan importarla
export { shuffleArray };