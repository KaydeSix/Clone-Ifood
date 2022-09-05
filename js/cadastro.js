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

    let re = new RegExp("^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$");
    let email = document.getElementById('verify-email').value

    if(re.test(email) == true){
        event.preventDefault();

        let formEmail = document.getElementById('new-form')
        formEmail.classList.remove('show')
        let newFormSenha = document.getElementById('new-form-senha')
        newFormSenha.classList.add('show')
    }
}

function entrarHome(event){
    event.preventDefault();

    let formSenha = document.getElementById('new-form-senha')
    formSenha.classList.remove('show')
    let cadastroSucesso = document.getElementById('conta-criada')
    cadastroSucesso.classList.add('show')

//window.location.href = "./index.html";
}

function voltarAoEmail(event){
    event.preventDefault();

    let formSenha = document.getElementById('new-form-senha')
    formSenha.classList.remove('show')
    let formEmail = document.getElementById('new-form')
    formEmail.classList.add('show')
}

const cadastrar = document.getElementById('click')
cadastrar.addEventListener("click", transicaoIdaEmail)

const voltar = document.getElementById("volte")
voltar.addEventListener('click', voltarForm)

const pedirSenha = document.getElementById('email-proximo')
pedirSenha.addEventListener('click', transicaoIdaSenha)

const entrar = document.getElementById('entrar')
entrar.addEventListener('click', entrarHome)

const voltarSenha = document.getElementById('voltar-email')
voltarSenha.addEventListener('click', voltarAoEmail)


