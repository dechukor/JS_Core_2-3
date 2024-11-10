//РЕШЕНО
/**
 * Лена планирует свой двухнедельный отпуск.
 *
 * Напишите функцию vacation(date) вычисляющую день следующий за отпуском Лены
 *
 * Примечание: вместо ручного подсчета используй класс Date и его методы
 *
 * Пример:
 *
 * vacation('01.01.2020') === '15.01.2020'
 * vacation('27.01.2020') === '10.02.2020'
 *
 * @param {string} date
 * @returns {string}
 */
function vacation(date) {
    const dateArr = date.split('.').reverse().map((item,ind,arr) => {return date[ind] = +item});
    dateArr[2] += 14;
    dateArr[1]--;
    let [year, month, day] = dateArr;
  
    const dateObj = new Date (year, month, day);  
    
    return dateObj.toLocaleDateString();
  }

module.exports = vacation;
