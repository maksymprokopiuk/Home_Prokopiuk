// Задача.
// Користувач вводить номер автомобіля.
// У наступному полі вводу автоматично з”являється назва області, де цей автомобіль зареєстровано та номер обласного ДАІ.

let uaRegionsDai = [
    {
        id: 1,
        region: 'АО',
        name: 'Закарпатська область',
        tel: '+380111111111',
    },
    {
        id: 2,
        region: 'ВО',
        name: 'Тернопільська область',
        tel: '+380222222222',
    },
    {
        id: 3,
        region: 'ВС',
        name: 'Львівська область',
        tel: '+380333333333',
    },
]
class CheckNumberAuto {
    render(containerId) {
        const container = document.getElementById(containerId)
        let input = document.createElement('input')
        input.setAttribute('type', 'text')
        input.setAttribute('id', 'inputNumber')
        input.setAttribute('placeholder', 'Номер автомобіля')
        input.setAttribute('maxlength', '8')
        input.onblur = this.fun.bind(this)
        container.appendChild(input)

        container.appendChild(document.createElement('br'))

        input = document.createElement('input')
        input.setAttribute('type', 'text')
        input.setAttribute('id', 'inputArea')
        input.setAttribute('placeholder', 'Область')
        container.appendChild(input)

        container.appendChild(document.createElement('br'))

        input = document.createElement('input')
        input.setAttribute('type', 'text')
        input.setAttribute('id', 'inputPhone')
        input.setAttribute('placeholder', 'Номер обласного ДАЇ')
        container.appendChild(input)

        container.appendChild(document.createElement('br'))

        let btn = document.createElement('button')
        btn.setAttribute('id', 'btnOk')
        btn.innerText = 'OK'
        container.appendChild(btn)
    }
    fun() {
        let inputNumberValue = ((document.getElementById('inputNumber').value).toUpperCase()).slice(0, 2)
        let inputArea = document.getElementById('inputArea')
        let inputPhone = document.getElementById('inputPhone')
        console.log(inputNumberValue);
        for (let i = 0; i < uaRegionsDai.length; i++) {
            if (inputNumberValue === uaRegionsDai[i].region) {
                inputArea.value = uaRegionsDai[i].name
                inputPhone.value = uaRegionsDai[i].tel
                break
            } else {
                inputArea.value = ''
                inputPhone.value = ''

            }
        }
    }
}
window.onload = function () {
    let checkNum = new CheckNumberAuto()
    checkNum.render('container')
}