// Задача.
// У поле вводу вводимо назву предмета і натискаємо на кнопку. Після цього з”являється зображення цього предмета.

let things = [
    {
        id: 1,
        name: 'rectangle',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Rectangle_example.svg/800px-Rectangle_example.svg.png',
    },
    {
        id: 2,
        name: 'circle',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Circle_frame.svg/200px-Circle_frame.svg.png',
    },
    {
        id: 3,
        name: 'square',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Screw_Head_-_Square_External.svg/40px-Screw_Head_-_Square_External.svg.png',
    },
]

class Thing {
    picture() {
        let thingInput = (this.input.value).toLowerCase()

        for (let i = 0; i < things.length; i++) {
            if (thingInput === things[i].name) {
                // додати блок і внього картинку
                let img = document.createElement('img')
                img.setAttribute('width', '200px')
                img.setAttribute('src', things[i].url)
                this.div.appendChild(img)
                this.container.appendChild(this.div)
                break
            } else {
                this.div.innerText = ''
            }

        }
    }
    render(containerId) {
        this.container = document.getElementById(containerId)
        let span = document.createElement('span')
        span.innerText = 'Rectangle circle square'
        this.container.appendChild(span)

        this.container.appendChild(document.createElement('br'))

        this.input = document.createElement('input')
        this.input.setAttribute('type', 'text')
        this.input.setAttribute('id', 'inputThing')
        this.input.setAttribute('placeholder', 'Назва предмета')
        this.container.appendChild(this.input)

        this.container.appendChild(document.createElement('br'))

        let btn = document.createElement('button')
        btn.innerText = 'OK'
        btn.onclick = this.picture.bind(this)
        this.container.appendChild(btn)
        this.div = document.createElement('div')
        this.container.appendChild(this.div)
        this.container.appendChild(document.createElement('br'))
    }
}
window.onload = function () {
    let guessThing = new Thing()
    guessThing.render('container')
}