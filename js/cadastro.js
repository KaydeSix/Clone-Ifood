const cadastrar = document.getElementById('click')
cadastrar.addEventListener("click", transicaoIda)

function transicaoIda(){
    let oldForm = document.getElementById('formulario')
    oldForm.remove()

    let newForm = document.createElement("form")
    let voltar = document.createElement("button")
    voltar.id = "volte";
    let descVoltar = document.createElement("p")
    let title = document.createElement("h2")
    let input = document.createElement("input")
    input.type = "text"
    let botao = document.createElement("button")
    let descricao = document.createElement("p")

    let botaoV = document.createTextNode("<")
    let text = document.createTextNode("Informe o seu e-mail para continuar")
    let botaoP = document.createTextNode("Continuar")

    let element = document.getElementById("new-form")
    element.appendChild(newForm)
    newForm.appendChild(voltar)
    descVoltar.appendChild(botaoV)
    newForm.appendChild(title)
    newForm.appendChild(input)
    newForm.appendChild(botao)
    voltar.appendChild(descVoltar)
    botao.appendChild(descricao)
    title.appendChild(text)
    descricao.appendChild(botaoP)
    
    newForm.classList.add("form-email")
    voltar.classList.add("botao-tunado")
    title.classList.add("titulo")
    input.classList.add("input-email")
    botao.classList.add("button-form")
}

