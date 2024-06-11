const fieldNome = document.getElementById('fieldNome')
const fieldEmail = document.getElementById('fieldEmail')
const fieldNumber = document.getElementById('fieldNumber')

const errorNome = document.getElementById('errorNome')
const errorEmail = document.getElementById('errorEmail')
const errorNumber = document.getElementById('errorNumber')
const btnSubmitMentor = document.getElementById('btnSubmitMentor')

btnSubmitMentor.addEventListener('click', (event) => {
    event.preventDefault()
    
    if (fieldNome.value == "") {
        errorNome.style.display = 'inherit'
        errorNome.innerText = 'Campo vazio'
    } else if (fieldNome.value.length < 3) {
        errorNome.style.display = 'inherit'
        errorNome.innerText = 'O nome possui menos que 3 caracteres'
    } else {
        errorNome.style.display = 'none'
        errorNome.innerText = ''
    }

    const emailRegex = /^[\w.%+-]{1,64}@[\w.-]{2,}\.[a-zA-Z]{2,}$/

    if (fieldEmail.value == "") {
        errorEmail.style.display = 'inherit'
        errorEmail.innerText = 'Campo vazio'
    } else if (!emailRegex.test(fieldEmail.value)) {
        errorEmail.style.display = 'inherit'
        errorEmail.innerText = 'Email inválido'
    } else {
        errorEmail.style.display = 'none'
    }

    if(fieldNumber.value == "") {
        errorNumber.style.display = 'inherit'
        errorNumber.innerText = 'Campo vazio'
    } else if (fieldNumber.value < 0 || fieldNumber.value.length < 11 || fieldNumber.value.length > 13) {
        errorNumber.style.display = 'inherit'
        errorNumber.innerText = 'Número inválido'
    } else {
        errorNumber.style.display = 'none'
    }
})