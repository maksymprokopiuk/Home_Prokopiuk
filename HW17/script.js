// Задача. Розробити клас «Бронювання автомобіля»
// Поля 
// Вартість одного дня
// Розмір знижки (знижка на кожен день після 10-го дня 5%)

// Методи
// Визначення вартості
// render
const coutnDaysDiscount = 10
const oneDayPrice = 50
class RentCar {
    constructor(howMuchDay, discountAfter10day) {
        this.howMuchDay = howMuchDay
        this.discountAfter10day = discountAfter10day
    }

    isInRange(value) {
        return value <= coutnDaysDiscount //знижка надається якщо більше 10 днів
    }
    checkValue() {
        let sumRent
        const UserNum = parseInt(this.numberInput.value) //використовуємо інпут який зберегли раніше
        if (this.isInRange(UserNum)) { //перевіряємо чи число більше 10 і застосовуємо знижку
            // this.messageDiv.innerText = `Число ${UserNum} належить діапазону`
            sumRent = oneDayPrice * UserNum //обчислюємо
            this.messageDiv.innerText = `$${sumRent}` //виводимо загальну суму
        }
        else {
            let first10days = coutnDaysDiscount * oneDayPrice //зберігаємо суму перших 10 днів без знижки
            sumRent = (UserNum - coutnDaysDiscount) * oneDayPrice //зберігаємо суму інших днів
            let sumRentDiscount = sumRent - (sumRent * this.discountAfter10day / 100) //віднімаємо 5%
            let sumRentWithDiscount = sumRentDiscount + first10days //додаємо суми перших 10 та слідуючі
            this.messageDiv.innerText = `$${sumRentWithDiscount}` //виводимо загальну суму
        }
    }
    render(containerId) {
        const container = document.getElementById(containerId) // отримуємо дів у який будемо вставляти
        let div = document.createElement('div') // створюємо новий дів
        let label = document.createElement('label') // створюємо label
        label.innerText = 'На скільки днів забронювати авто?' // до label додаємо текст 
        const input = document.createElement('input') // створюємо інпут
        input.setAttribute('type', 'number') // додаємо властивості до інпут
        label.appendChild(input) // інпут додаємо в label
        this.numberInput = input //зберегли інпут як ід (щоб використати пізніше)
        div.appendChild(label) //label додаємо в дів
        container.appendChild(div) //дів додаємо в контейнер
        div = document.createElement('div') // створюємо новий дів
        const btn = document.createElement('button') // створюємо кнопку
        btn.innerText = 'Розрахувати' // підписуємо кнопку
        btn.onclick = this.checkValue.bind(this) //!!!!!!!!!! навішуємо обробник на кнопку по кліку
        div.appendChild(btn) //додаємо кнопку в дів
        container.appendChild(div) // дів додаємо в контейнер
        this.messageDiv = document.createElement('div') //створюємо новий дів для виведення результатів обчислення
        container.appendChild(this.messageDiv) //вставляємо результат обчислення
    }
}

window.onload = function () {
    let car = new RentCar(10, 5) //створюємо новий об'єкт з-за допомогою конструктора
    car.render('container') //створюємо HTML розмітку з даними та вставляємо в документ
}