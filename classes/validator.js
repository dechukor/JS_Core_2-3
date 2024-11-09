// РЕШЕНО
/**
 * Реализуйте класс Validator, который будет проверять строки.
 * К примеру, у него будет метод isEmail параметром принимает строку и проверяет, является ли она корректным емейлом или нет.
 * Если является - возвращает true, если не является - то false.
 * Кроме того, класс будет иметь следующие методы: метод isDomain для проверки домена,
 * метод isDate для проверки даты и метод isPhone для проверки телефона:
 */
class Validator {
    isEmail(value) {
        let reg = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; //регулярное выражение, которое описывает допустимые символы и их расположение для записи e-mail
        return (reg.test(value));
    };
  
    isDomain(value) {
        let reg = /[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;   //регулярное выражение, которое описывает допустимые символы и их расположение для записи домена
        return (reg.test(value));
    };
  
    isDate(value) {
        let reg = /[0-3][0-9]\.[0-1][0-9]\.[0-9]{4}$/;  //регулярное выражение, которое описывает допустимые символы и их расположение для записи даты в формате DD.MM.YYYY
  
        if (!reg.test(value)) {
            return false;
        }
  
        const dateArray = value.split('.');     //преобразуем строку в массив
        dateArray.forEach((item, ind) => {      //изменяем тип значений элементов массива на число
            dateArray[ind] = +item;
        });
  
        if (dateArray[0] < 1 || dateArray[0] > 31) {    //проверяем дату, входит ли в допустимый диапазон
            return false;
        }
  
        if (dateArray[1] < 1 || dateArray[1] > 12) {    //проверяем месяц, входит ли в допустимый диапазон
            return false;
        }
  
        const dateObject = new Date (dateArray[2], dateArray[1] - 1, dateArray[0]);   //создаем объект класса Date, записываем в него проверяемую дату
        
        if (dateArray[0] != dateObject.getDate()) {   //проверяем соответствует ли проверяемое число даты, числу в объекте (проверка на количество дней в конкретном месяце, например на ввод 30 февраля)
            return false;
        }
  
        return true;      
    };
  
    isPhone(value) {
      value = value.replace(/\s/g, '');    //удаляем все пробелы из строки
  
      let reg = /^((8|\+7)(\-|\()?[0-9]{3}(\-|\))?[0-9]{3}(\-)?[0-9]{2}(\-)?)[0-9]{2}$/;  //регулярное выражение, которое описывает допустимые символы и их расположение для записи телефона 
  
      return(reg.test(value));
      
    };
  }
  
  const validator = new Validator();

console.log(validator.isEmail('phphtml@mail.ru'));
console.log(validator.isDomain('phphtml.net'));
console.log(validator.isDate('12.05.2020'));
console.log(validator.isPhone('+375 (29) 817-68-92')); //тут можете формат своей страны

module.exports = Validator;
