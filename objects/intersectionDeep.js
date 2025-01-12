


/**

 * Описание задачи: Напишите функцию, которая глубоко находит пересечения объектов и возвращает объект пересечений.
 * Ожидаемый результат: ({ a: 1, b: { c: 3 } }, { c: 1, b: { c: 3 } }) => { b: { c: 3 } }
 * @param {Object} firstObject - объект любых значений
 * @param {Object} secondObject - объект любых значений
 * @returns {Object}
 */

const intersectionDeep = (firstObject, secondObject) => {
    // throw new Error(`Напишите здесь свое решение ${firstObject}, ${secondObject}`);
    const resultObject = {};

    for (let keyFirstObj in firstObject) {
        for (let keySecondObj in secondObject) {
            if ((keyFirstObj === keySecondObj) && firstObject[keyFirstObj] === secondObject[keySecondObj]) {
                resultObject[keyFirstObj] = firstObject[keyFirstObj];
            } else if (typeof firstObject[keyFirstObj] === 'object'){
                resultObject[keyFirstObj] = intersectionDeep(firstObject[keyFirstObj], secondObject[keySecondObj])
            }
        }
    }

    return resultObject;

};

const data = {a: 1, b: {c: 3}};
const data2 = {c: 1, b: {c: 3}};
console.log(intersectionDeep(data, data2)); // { b: { c: 3 } }

module.exports = intersectionDeep;

// НЕРЕШЕНО