// {
//     // Задача 1. Дано оцінки учня за 5 предметів у 12 бальній шкалі.
//     // Вивести номери предметів, з яких у учня трійки?
//     function createArrWithRandomScore(countScores, minScore, maxScore) {
//         let arr = []
//         getRndmMinMax = ((min, max) => Math.floor(Math.random() * (max - min + 1)) + min)
//         for (let i = 0; i < countScores; i++) {
//             arr.push(getRndmMinMax(minScore, maxScore))
//         }
//         return arr
//     }

//     let scoresPupil = createArrWithRandomScore(5, 4, 12)
//     console.log(scoresPupil);
//     for (let i = 0; i < scoresPupil.length; i++) {
//         if (scoresPupil[i] >= 4 && scoresPupil[i] <= 6) {
//             console.log(`${i + 1} предмет, оцінка - ${scoresPupil[i]}`);
//         }
//     }
// }
// {
//     // Задача 2. Користувач вводить 10 слів.
//     // Підрахувати кількість слів, у яких перша літера і остання літера однакові.

//     let words = []
//     let countWords = 10
//     countSameWords = 0

//     while (words.length < 10) {
//         let word = prompt(`Введіть одно слово з ${countWords}`, 'qwertyq')
//         if (word != null && word != '') {
//             words.push(word)
//             countWords--
//             if (word[0] === word[word.length - 1]) {
//                 countSameWords++
//             }
//         }
//     }
//     console.log(words);
//     console.log(`Кількість слів, у яких перша літера і остання літера однакові - ${countSameWords}`);
// }
// {
//     // Задача 3. Дано послідовність чисел, які згенеровано випадковим чином.
//     // Сформувати новий масив, у якому елементи є більшими за перший елемент.

//     function createArrWithRandomScore(countNumbers, minScore, maxScore) {
//         let arr = []
//         getRndmMinMax = ((min, max) => Math.floor(Math.random() * (max - min + 1)) + min)
//         for (let i = 0; i < countNumbers; i++) {
//             arr.push(getRndmMinMax(minScore, maxScore))
//         }
//         return arr
//     }

//     let randomNumbers = createArrWithRandomScore(10, 1, 100)
//     let numbers = []

//     for (let i = 0; i < randomNumbers.length; i++) {
//         if (randomNumbers[i] > randomNumbers[0]) {
//             numbers.push(randomNumbers[i])
//         }
//     }
//     console.log(randomNumbers);
//     console.log(numbers);
// }
// {
//     // Задача 4. Усі елементи введеного масиву помножити на 17.

//     let numbers = [10, 5, 11, 8, 12, 3, 10, 78, 2, 1, 90]
//     numbers.forEach((x, i, arr) => arr[i] *= 17)
//     console.log(numbers);
// }
// {
//     // Задача 5. Знайти суму елементів, які знаходяться після елемента зі значенням 78.

//     let numbers = [10, 5, 11, 78, 12, 3, 10, 78, 2, 1, 90]

//     let elem78 = numbers.indexOf(78)
//     let numbers2 = numbers.slice(elem78 + 1)
//     let sum = numbers2.reduce((prevSum, number) => prevSum + number, 0)

//     console.log(sum);
// }