function mudaFundoOver(){
    let newBackground = document.getElementById('main-body')
    newBackground.classList.add('changeBack')
}

function mudaFundoOut(){
    let newBackground = document.getElementById('main-body')
    newBackground.classList.remove('changeBack')
}

const image_aniamtion_over = document.getElementById('first-image')
image_aniamtion_over.addEventListener('mouseover', mudaFundoOver)

const image_aniamtion_out = document.getElementById('first-image')
image_aniamtion_out.addEventListener('mouseout', mudaFundoOut)