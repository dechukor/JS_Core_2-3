/**
 * Сара пишет сложные клиентские приложения на ангуляре. Поэтому ей часто приходится создавать и модифицировать сервисы.
 * Сервисы могут использовать другие сервисы. Однако они не должны быть взаимозависимыми.
 *
 * Напишите функцию которая определяет есть ли цикличная зависимость между сервисами в проекте Сары.
 * Зависимости описаны объектом, ключи которого являются именами сервисов, а значения—это сервисы-зависимости.
 *
 * Пример:
 *
 * hasCircularDependency({
 *  http: [],
 *  apiClient: ['http'],
 * }) === false
 *
 * hasCircularDependency({
 *  http: ['dogsApi'],
 *  apiClient: ['http'],
 *  dogsApi: ['apiClient'],
 * }) === true
 *
 * @param {Object.<string, Array.<string>>} servicesMap
 * @returns {boolean}
 */
function hasCircularDependency(servicesMap) {

    if (Object.keys(servicesMap).length === 0) {
        return false;
    } 
    
    let strKeys = [...new Set(Object.keys(servicesMap).sort())].join('');
    let strValues = [...new Set(Object.values(servicesMap).flat().sort())].join('');
    
    return strKeys === strValues;
}

let servicesMap

console.log(hasCircularDependency({
      http: ['dogsApi'],
      apiClient: ['http'],
      dogsApi: ['apiClient'],
     }));

module.exports = hasCircularDependency;
