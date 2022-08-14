/**
 * Generates a random int between two numbers. See
 * https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random#gerando_um_n%C3%BAmero_inteiro_aleat%C3%B3rio_entre_dois_valores_inclusive
 * 
 * @param {Number} min The minimun number in the range
 * @param {Number} max The maxiun number in the range
 * @returns A random integer in the range [min, max]
 */
module.exports = function get_random_int_inclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}