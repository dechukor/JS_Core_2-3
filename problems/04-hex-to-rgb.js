//РЕШЕНО
/**
 * Hex и RGB - текстовые форматы для представления цвета в коде.
 *
 * Напишите функцию hexToRgb(color) конвертирующую цвет закодированный в формате HEX
 * в RGB кодированную строку.
 *
 * Пример:
 *
 * hexToRgb('#000000') === 'rgb(0, 0, 0)'
 * hexToRgb('#fff') === 'rgb(255, 255, 255)'
 * hexToRgb('#800080') === 'rgb(128, 0, 128)'
 *
 * @param {string} color
 * @returns {string}
 */
function hexToRgb(color) {

    color = color.replace('#', '');
    const colorHexArray = [];
  
    if (color.length === 3) {
      colorHexArray[0] = color.slice(0,1) + color.slice(0,1);
      colorHexArray[1] = color.slice(1,2) + color.slice(1,2);
      colorHexArray[2] = color.slice(2) + color.slice(2);
    } else if (color.length === 6) {
      colorHexArray[0] = color.slice(0,2);
      colorHexArray[1] = color.slice(2,4);
      colorHexArray[2] = color.slice(4,6);
    }
  
    colorHexArray.map((item, ind, arr) => {
      return arr[ind] = +('0x' + item).toString(10);
    })
    
    return (`rgb(${colorHexArray[0]}, ${colorHexArray[1]}, ${colorHexArray[2]})`);
  }

module.exports = hexToRgb;
