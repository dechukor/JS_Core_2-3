/**

 * Описание задачи: Напишите функцию, которая делает глубокое сравнение объектов.
 * Ожидаемый результат: True если объекты идентичны ({ a: 1, b: { c: 1 } }, { a: 1, b: { c: 1 } }) => true
 * @param {Object} firstObj - Объект с любыми значениями
 * @param {Object} secondObj - Объект с любыми значениями
 * @returns {boolean}
 */

function objToString (object) {

    for (key in object) {
        if (typeof (object[key]) === 'object') {
            objToString (object[key])
        } else {
            return Object.entries(object).flat().join('')
        }
            
    }
}

const isEqualDeep = (firstObject, secondObject) => {
    // throw new Error(`Напишите здесь свое решение ${element}`);
    if (Object.values(firstObject).length !== Object.values(secondObject).length) {
        return false;
    }
    
    


    console.log(objToString(firstObject));
    // console.log(i);
    return Object.entries(firstObject).flat().join('') === Object.entries(secondObject).flat().join('');
    
    

};
const data = {a: 1, b: {c: 1}};
const data2 = {a: 1, b: {c: 1}};
const data3 = {a: 1, b: {c: 2}};
console.log(isEqualDeep(data, data2)); // true
console.log(isEqualDeep(data, data3)); // false
