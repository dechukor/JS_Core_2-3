//РЕШЕНО
/**
 * Ранее мы уже решали задачу валидации последовательности скобок в строке.
 *
 * На этот раз напишите функцию parentheses(value) валидирующую строку с несколькими типами скобок.
 *
 * Пример:
 *
 * parentheses('<>') === true
 * parentheses('<}') === false
 *
 * @param {string} value – строка из набора символов (, ), {, }, <, >.
 * @returns {boolean}
 */
function parentheses(value) {
    if (value === '') {
        return false;
    }
    
    let valAfterDel = '';

    while (valAfterDel !== value){
        valAfterDel = value;      
        value = value.replaceAll('()', '');
        value = value.replaceAll('{}', '');
        value = value.replaceAll('<>', '');
    }    

    return valAfterDel === '';
}

module.exports = parentheses;
