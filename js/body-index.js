//  alert("Seja bem vindo ao meu projeto de estudos")

const fecharCumpom = document.getElementById('fechar-cupom')
fecharCumpom.addEventListener('click', deletaCupom)

function deletaCupom(){
    const cupom = document.getElementById('cupom')
    cupom.classList.add('hide')
    console.log("pika")
}