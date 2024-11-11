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
    
    let arrKeys = [...new Set(Object.keys(servicesMap))];
    let arrValues = [...new SetObject.values(servicesMap)];
    
    console.log(arrKeys);
    console.log(arrValues);
    
    
    return false;
}

let servicesMap

console.log(hasCircularDependency({
      http: ['dogsApi'],
      apiClient: ['http'],
      dogsApi: ['apiClient'],
     }));

module.exports = hasCircularDependency;
