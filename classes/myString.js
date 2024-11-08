/**
 * Реализуйте класс MyString, который будет иметь следующие методы: метод reverse(),
 * который параметром принимает строку, а возвращает ее в перевернутом виде, метод ucFirst(),
 * который параметром принимает строку, а возвращает эту же строку, сделав ее первую букву заглавной и метод ucWords,
 * который принимает строку и делает заглавной первую букву каждого слова этой строки.
 */

class MyString {

    checkForEmpty (strValue) {
        if (strValue === '' || strValue === undefined) {    //проверка аргумента на пустую строку или отсутствие значения
            return true;
        }

        return false;
    }
    
    reverse (strValue) {
        if (this.checkForEmpty(strValue)) {    //проверка аргумента на пустую строку или отсутствие значения
            return strValue;
        }
        
        return strValue.split('').reverse().join('');       //преобразуем строку в массив посимвольно, переворачиваем массив, преобразуем массив в строку и возвращаем результат
    }
  
    ucFirst (strValue) {
        if (this.checkForEmpty(strValue)) {    //проверка аргумента на пустую строку или отсутствие значения
            return strValue;
        }
       
        const arrayLetters = strValue.trim().split('');     //отсекаем пробелы в начале и конце строки, преобразуем строку в массив посимвольно

        arrayLetters[0] = arrayLetters[0].toUpperCase();    //первый элемент массива переводим в верхний регистр
  
        return arrayLetters.join('');                       //преобразуем массив в строку и возвращаем результат
    }
  
    ucWords (strValue) {
        if (this.checkForEmpty(strValue)) {    //проверка аргумента на пустую строку или отсутствие значения
            return strValue;
        }
  
        let regOnlyLetters = /[^А-Яа-яA-Za-z\s]/g;          //регулярное выражение, которое находит любые символы кроме букв и пробелов
        let regMultiSpaces = /\s+/g;                        //регулярное выражение, которое находит идущие подряд пробелы
  
        const arrayWords = strValue.trim().replace(regOnlyLetters, '').replace(regMultiSpaces, ' ').split(' '); //отсекаем пробелы в начале и конце строки, чистим строку на основании рег. выражений, преобразуем строку в массив (разделитель пробел)
  
        arrayWords.forEach((item, ind) => {                 //для каждого элемента массива переводим первый символ в верхний регистр
          arrayWords[ind] = this.ucFirst(item);
        });      
  
        return arrayWords.join(' ');
    }
}
  
const str = new MyString();

console.log(str.reverse('abcde')); //выведет 'edcba'
console.log(str.ucFirst('abcde')); //выведет 'Abcde'
console.log(str.ucWords('abcde abcde abcde')); //выведет 'Abcde Abcde Abcde'

module.exports = MyString;
