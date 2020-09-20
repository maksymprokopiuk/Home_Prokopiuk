// Задача.
// Форма офромлення доставки. З клавіатури вводиться вартість товару, спосіб доставки (поштою - 5% вартості,
// новою поштою  - 7% вартості, кур”єром — 10% вартсті), та термін доставки (термінова +5%, звичайна).
// Визначити загальну вартість доставки.

class Delivery {
    calculate(val) {
        if (val) {

            let deliveryPrice
            let fastPrice
            let radioDeliveries = document.getElementsByName('deliveryPost')
            for (let i = 0; i < radioDeliveries.length; i++) {
                // console.log(radioDeliveries[i].id);
                if (radioDeliveries[i].checked) {
                    switch (radioDeliveries[i].id) {
                        case 'chkBxUposhta': deliveryPrice = val * 5 / 100
                            break;
                        case 'chkBxNposhta': deliveryPrice = val * 7 / 100
                            break;
                        case 'chkBxCurer': deliveryPrice = val * 10 / 100
                            break;
                    }
                }
            }

            let fastDelivery = document.getElementsByName('faster')
            fastPrice = fastDelivery[0].checked ? val * 5 / 100 : 0
            // console.log(fastPrice);
            let totalDeliveryPrice = deliveryPrice + fastPrice
            this.input2.value = totalDeliveryPrice
        }

    }
    onclick(e) {
        if (e.target.tagName === 'INPUT') {
            let userValue = parseFloat(this.input.value)
            this.calculate(userValue)
        }
    }
    render(containerId) {
        const container = document.getElementById(containerId)
        container.onclick = this.onclick.bind(this)
        this.input = document.createElement('input')
        this.input.setAttribute('placeholder', 'Вартість товару')
        container.appendChild(this.input)

        container.appendChild(document.createElement('br'))

        let span = document.createElement('span')
        span.innerText = 'оберіть спосіб доставки:'
        container.appendChild(span)

        container.appendChild(document.createElement('br'))

        let input = document.createElement('input')
        input.setAttribute('type', 'radio')
        input.setAttribute('id', 'chkBxUposhta')
        input.setAttribute('name', 'deliveryPost')
        input.setAttribute('checked', 'true')
        container.appendChild(input)
        span = document.createElement('span')
        span.innerText = 'Укрпошта +5%'
        container.appendChild(span)

        container.appendChild(document.createElement('br'))

        input = document.createElement('input')
        input.setAttribute('type', 'radio')
        input.setAttribute('id', 'chkBxNposhta')
        input.setAttribute('name', 'deliveryPost')
        container.appendChild(input)
        span = document.createElement('span')
        span.innerText = 'Нова пошта +7%'
        container.appendChild(span)
        container.appendChild(document.createElement('br'))

        input = document.createElement('input')
        input.setAttribute('type', 'radio')
        input.setAttribute('id', 'chkBxCurer')
        input.setAttribute('name', 'deliveryPost')
        container.appendChild(input)
        span = document.createElement('span')
        span.innerText = 'Кур\'єр +10%'
        container.appendChild(span)
        container.appendChild(document.createElement('br'))

        span = document.createElement('span')
        span.innerText = 'додатково:'
        container.appendChild(span)
        container.appendChild(document.createElement('br'))

        input = document.createElement('input')
        input.setAttribute('type', 'radio')
        input.setAttribute('id', 'fast')
        input.setAttribute('name', 'faster')
        container.appendChild(input)
        span = document.createElement('span')
        span.innerText = 'Термінова +5%'
        container.appendChild(span)
        input = document.createElement('input')
        input.setAttribute('type', 'radio')
        input.setAttribute('name', 'faster')
        input.setAttribute('checked', 'true')
        container.appendChild(input)
        span = document.createElement('span')
        span.innerText = 'Звичайна'
        container.appendChild(span)
        container.appendChild(document.createElement('br'))

        this.input2 = document.createElement('input')
        this.input2.setAttribute('disabled', 'true')
        container.appendChild(this.input2)
    }
}
window.onload = function () {
    const delivery1 = new Delivery()
    delivery1.render('container')
}