function verificar( ) {
    var data = new Date ()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] verifique os dados e tente novamente!')
    } else {
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
       var gênero = ''
       if(fsex[0].checked) {
        gênero = 'Homem'
       } else if (fsex[1].checked) {
        gênero = 'Mulher'
       }
       res.style.textAlign = 'center'
       res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
    }
}

//Outro evento de adicionar evento de click 
// let btn = document.bytagname('button')
// btn.addEventListener('click', verificar);

// function verificar (){
    
// }