/**

 * Описание задачи: Напишите функцию, которая делает глубокое сравнение объектов.
 * Ожидаемый результат: True если объекты идентичны ({ a: 1, b: { c: 1 } }, { a: 1, b: { c: 1 } }) => true
 * @param {Object} firstObj - Объект с любыми значениями
 * @param {Object} secondObj - Объект с любыми значениями
 * @returns {boolean}
 */
const isEqualDeep = (firstObject, secondObject) => {
    // throw new Error(`Напишите здесь свое решение ${element}`);
    if (Object.values(firstObject).length !== Object.values(secondObject).length) {
        return false;
    }



    console.log(Object.entries(firstObject));
    console.log(Object.entries(secondObject).flat().join(''));
    return Object.entries(firstObject).flat().join('') === Object.entries(secondObject).flat().join('');
    
    

};
const data = {a: 1, b: {c: 1}};
const data2 = {a: 1, b: {c: 1}};
const data3 = {a: 1, b: {c: 2}};
console.log(isEqualDeep(data, data2)); // true
console.log(isEqualDeep(data, data3)); // false
