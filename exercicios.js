function carregar(){
    let msg = window.document.getElementById('msg')
    let img = window.document.getElementById('imagem')
    let hoje = new Date()
    let meses =["Janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho","agosto","setembro","outubro","novembro","dezembro"]
    let dia = hoje.getDate()
    let sem = hoje.getDay()
    let mes = hoje.getMonth()
    let ano = hoje.getUTCFullYear()
    let frase = ''
    let hora = hoje.getHours()
    let minu = hoje.getMinutes()

    if(dia > 0 && dia < 10){
          dia = '0' + dia
    }

    if( minu > 0 && minu < 10){
        minu = '0'+ minu
    }
  
  
  switch(sem){
    case 0:
         frase = 'domingo'
        img.src = 'imagens/domingo.jpg'
        document.body.style.background = 'rgb(2c29, 131, 61)'
        break
    case 1:
        frase = 'segunda-feira'
        img.src = 'imagens/segunda.jpg'
        document.body.style.background = 'rgb(10, 239, 170)'
        break
    case 2:
        frase = 'terça-feira'
        img.src = 'imagens/terça.jpg'
        document.body.style.background = 'rgb(44, 196, 238)'
        brak
    case 3:
        frase = 'quarta-feira'
        img.src = 'imagens/quarta.jpg'
        document.body.style.background = 'rgb(250, 80, 165)'
        break
    case 4:
        frase = `quinta-feira`
        img.src = 'imagens/quinta.jpg'
        document.body.style.background = 'rgb(237, 237, 37)'
        break
    case 5:
        frase = 'sexta-feira'
        img.src = 'imagens/sexta.jpg'
        document.body.style.background = 'rgb(237, 124, 37)'
        
        break
    case 6:
        frase = 'sábado'
        img.src = 'imagens/sábado.jpg'
        document.body.style.background = 'rgb(89, 227, 79)'
        break

  }

  msg.innerHTML = `Hoje é ${frase}, ${dia} de ${meses[mes]} de ${ano}.</br>`
  msg.innerHTML += `São ${hora}h${minu}min`

}
