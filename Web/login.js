import { enter as enterIndex } from "./index.js";

function enter() {
    const form = document.createElement('form');
    form.classList.add('formulario');
    document.body.appendChild(form);

    let teste = document.createElement('h3')
    teste.innerHTML = 'Login'
    form.appendChild(teste)

    let inputEmail = document.createElement('input')
    inputEmail.classList.add('input')
    inputEmail.placeholder = 'Email'
    inputEmail.type = 'text'
    inputEmail.id = 'email'
    form.appendChild(inputEmail)

    let inputSenha = document.createElement('input')
    inputSenha.classList.add('input')
    inputSenha.placeholder = 'Senha'
    inputSenha.type = 'password'
    inputSenha.id = 'senha'
    form.appendChild(inputSenha)

    let inputEviar = document.createElement('input')
    inputEviar.classList.add('input')
    inputEviar.placeholder = 'enviar'
    inputEviar.type = 'submit'
    inputEviar.id = 'enviar'
    inputEviar.addEventListener('click', logar);
    form.appendChild(inputEviar)

    function logar() {
        let login = document.getElementById('email').value;
        let password = document.getElementById('senha').value;

        if (login === 'admin' && password === 'admin') {
            leave()
            enterIndex();
        } else {
            alert('naooo');
        }
    }
}

function leave() {
    const form = document.querySelector('.formulario');
    if (form) {
        form.remove();
    }
}

enter()

