function calcular(){
  let peso= document.querySelector('#peso')
  let altura= document.querySelector('#altura')
  let resultado= document.querySelector('#resultado')
  let valor= peso.value / (altura.value * altura.value)
  let texto = ''

  if(valor < 18.5){
    texto= 'abaixo do peso'
  }else if(valor <24.9){
    texto= 'peso normal'
  }else if(valor <29.9){
    texto= 'sobrepeso'
  }else if(valor <34.9){
    texto= 'obesidade grau 1'
  }else if(valor <39.9){
    texto= 'obesidade grau 2'
  }else{
    texto= 'obesidade grau 3'
  }

  resultado.innerHTML= texto+' imc = '+valor.toFixed(2)
}