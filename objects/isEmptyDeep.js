//РЕШЕНО
/**

 * Описание задачи: Напишите функцию, которая делает глубокую проверку на пустоту объекта.
 * Пустые значения: '', null, NaN, undefined, [], {}
 * Ожидаемый результат: ({}) => true,
 ({ a: { b: undefined } }) => true,
 ({ a: { b: [] } }) => true
 * @param {Object} object - любой объект
 * @returns {boolean}
 */

const isEmptyDeep = (object) => {    
    if (Object.values(object).length === 0) {
        return true;
    }
    
    for (key in object) {
        if (typeof(object[key]) === 'object' || Array.isArray(object[key])) {
            return isEmptyDeep(object[key]);
        } else if (object[key]) {
            return false;
        }
    }

    return true;

};

const data = {a: {b: undefined}};
const data2 = {a: {b: 1}};

// const data = {a: {b: undefined}};
// const data2 = { a: { b: [] } };

console.log(isEmptyDeep(data)); // true
console.log(isEmptyDeep(data2)); // false
// console.log(!!undefined);
// console.log(!!{});
