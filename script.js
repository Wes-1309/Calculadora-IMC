//Variável global (para tudo).
const calcular = document.getElementById('calcular');



function imc(){
    //Variáveis apenas para função
    const nome = document.getElementById('nome').value;//Colocado o .value para trazer o resultado colocado dentro.
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if(nome !== '' && altura !== '' && peso !== ''){
        
        const valorIMC = (peso / (altura * altura)).toFixed(1);//toFixed para especificar a quantidade de casa.

        let classificacao = '';

        if(valorIMC < 18.5){
            classificacao = 'abaixo do peso.';
        }else if(valorIMC < 25){
            classificacao = 'com peso ideal. Parabéns';
        }else if(valorIMC < 30){
            classificacao = 'levemente acima do peso';
        }else if(valorIMC < 35){
            classificacao = 'com obesidade grau I';
        }else if(valorIMC < 40){
            classificacao = 'com obesidade grau II';
        }else{
            classificacao = 'com obesidade grau III. Cuidado!!!';
        }

        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`;

    }else{
        resultado.textContent = 'Preencha todos os campos!!!'
    }

}

calcular.addEventListener('click', imc);