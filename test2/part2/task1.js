// Задача.
// Форма авторизації з автозаповненням пароля. При створенні об”єкта у конструктор передаємо набори логінів і відповідних паролів.
// Користувач вводить логін. Якщо у об”єкті зберігається логін, то автоматично вставити пароль у друге поле вводу

let userCreds = [
    {
        id: 1,
        login: '12',
        pass: '12345',
    },
    {
        id: 2,
        login: 'name2',
        pass: '56789',
    },
    {
        id: 3,
        login: 'name3',
        pass: 'fgdhs',
    },
]

class LoginBlock {

    render(containerId) {
        const container = document.getElementById(containerId)
        let span = document.createElement('span')
        span.innerText = 'Login'
        container.appendChild(span)
        let input = document.createElement('input')
        input.setAttribute('type', 'text')
        input.setAttribute('id', 'inputLogin')
        input.onkeyup = this.fun.bind(this)
        container.appendChild(input)
        span = document.createElement('span')
        span.innerText = 'Password'
        container.appendChild(span)
        input = document.createElement('input')
        input.setAttribute('type', 'password')
        input.setAttribute('id', 'passLogin')
        container.appendChild(input)
        let btn = document.createElement('button')
        btn.innerText = 'OK'
        btn.onclick = this.showCredsInConsole.bind(this)
        container.appendChild(btn)
    }
    fun() {
        let enteredValue = document.getElementById('inputLogin').value
        let inputPass = document.getElementById('passLogin')
        for (let i = 0; i < userCreds.length; i++) {
            if (enteredValue === userCreds[i].login) {
                inputPass.value = userCreds[i].pass
                break
            }
            else {
                inputPass.value = ''
            }
        }
    }
    showCredsInConsole() {
        const inputLogin = document.getElementById('inputLogin')
        const login = inputLogin.value
        const inputPass = document.getElementById('passLogin')
        const password = inputPass.value
        console.log(`login - ${login}, password - ${password}`);
    }
}
window.onload = function () {
    const login = new LoginBlock
    login.render('container')
}