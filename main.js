const btn = document.getElementById('myBtn')
const users = document.getElementById('user')
const inputText = document.getElementById('text')
const myItem = document.getElementById('item')
const selector = document.getElementById('select')
const Form = document.getElementById('myForm')
const States = document.querySelector('select')
const Germany = document.getElementById('germany')
const Emirates = document.getElementById('emirates')
const Kuwait = document.getElementById('kuwait')
const Qatar = document.getElementById('qatar')

let money
Form.addEventListener('submit', function (e) {
    e.preventDefault()

    let myText = inputText.value
    let aStates = States.value
    console.log(aStates)
    if (aStates == 'Dollar') {
        money = myText / 1500
        users.innerHTML += `<li id="item"><b> Your amount of mony in United Statues   : </b> ${money} <i>$</i> </li>`
        inputText.value = ''
    }
    else if (aStates == 'Euro') {
        money = myText / 1600
        users.innerHTML += `<li id="item"><b> Your amount of mony in Germany : </b> ${money} <i>Euro</i> </li>`
        inputText.value = ''

    }
    else if (aStates == 'Dirham') {
        money = myText / 400
        users.innerHTML += `<li id="item"><b> Your amount of mony in United Arab Emirates : </b> ${money}<i> Dirham</i> </li>`
        inputText.value = ''
    }
    else if (aStates == 'Dinar') {
        money = myText / 10000
        users.innerHTML += `<li id="item"><b> Your amount of mony in Kuwait  : </b> ${money} <i>Dinar</i> </li>`
        inputText.value = ''
    }
    else if (aStates == 'Riyal') {
        money = myText / 500
        users.innerHTML += `<li id="item"><b> Your amount of mony in Qatar : </b> ${money} <i>Riyal</i> </li>`
        inputText.value = ''
    }

    })