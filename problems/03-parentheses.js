//РЕШЕНО

/**
 * Строка со скобками считается валидной, если на каждую закрывающую скобку имеется ранее открытая
 * и на каждую ранее открытую имеется закрывающая.
 *
 * Напишите функцию parentheses(value) проверяющую строку со скобками на валидность.
 *
 * Пример:
 *
 * parentheses('') === false
 * parentheses('()()') === true
 * parentheses('(()())') === true
 * parentheses('(()') === false
 * parentheses(')') === false
 *
 * @param {string} value
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
    }    

    return valAfterDel === '';
}

module.exports = parentheses;
