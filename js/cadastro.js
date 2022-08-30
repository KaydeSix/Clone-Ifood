function transicaoIdaEmail(){
    let oldForm = document.getElementById('formulario')
    oldForm.classList.add("hide")

    let newForm = document.getElementById('new-form')
    newForm.classList.add('show')
}

function voltarForm(event){
    event.preventDefault();

    let newForm = document.getElementById('new-form')
    newForm.classList.remove("show")
    let oldForm = document.getElementById('formulario')
    oldForm.classList.remove('hide')
}

function transicaoIdaSenha(event){
    event.preventDefault();

    let formEmail = document.getElementById('new-form')
    formEmail.classList.remove('show')
    let newFormSenha = document.getElementById('new-form-senha')
    newFormSenha.classList.add('show')
}

const cadastrar = document.getElementById('click')
cadastrar.addEventListener("click", transicaoIdaEmail)

const voltar = document.getElementById("volte")
voltar.addEventListener('click', voltarForm)

const pedirSenha = document.getElementById('email-proximo')
pedirSenha.addEventListener('click', transicaoIdaSenha)



