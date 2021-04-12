
function calcularTamanhoEdificio() {
    /*Construa um algoritmo que calcula o tamanho de um edifício com base na altura de cada andar e o número de andares informados pelo usuário.  */
    var altura = document.getElementById("altura");
    var andares = document.getElementById("andares");
    var calculo = document.querySelector('div#calculo');

    var alturaNum = Number(altura.value);
    var andaresNum = Number(andares.value);


    var total = alturaNum * andaresNum;

    calculo.innerHTML = `o tamanho do edificio é ${total} metros`;
}

function calculaMaiorMenorMedia() {
    /*Construa um algoritmo que receba do usuário 4 números. Imprima o maior, o menor e a média deles. */
    var numb1 = document.querySelector('#numb1');
    var numb2 = document.querySelector('#numb2');
    var numb3 = document.querySelector('#numb3');
    var numb4 = document.querySelector('#numb4');

    var resultado = document.querySelector('div#resultado');

    var Num1 = Number(numb1.value);
    var Num2 = Number(numb2.value);
    var Num3 = Number(numb3.value);
    var Num4 = Number(numb4.value);

    var max = Math.max(Num1, Num2, Num3, Num4);
    var min = Math.min(Num1, Num2, Num3, Num4);
    var media = (Num1 + Num2 + Num3 + Num4) / 4;

    resultado.innerHTML = `maior: ${max} <br> menor: ${min} <br> média: ${media}`;
}

function calcularImparPar() {
    /*Construa um algoritmo que instancia um array 
        de inteiros com os seguintes valores: 1,3,35,40,85,123,121,209,200,305,350.
        Após, crie uma lógica que separe estes números entre pares e ímpares em outros 2 arrays.*/

    const arrayObject = new Array(1, 3, 35, 40, 85, 123, 121, 209, 200, 305, 350);

    for (let index = 0; index < arrayObject.length; index++) {

        if (arrayObject[index] % 2 === 0) {
            var pares = arrayObject[index];
            window.alert("Numero Par: " + pares);
        } else {
            var impares = arrayObject[index];
            window.alert("Numero Impar: " + impares);
        }
    }
}

function descrescente() {

    /*Construa um algoritmo que recebe do usuário 5 números. Após recebê-los, retorne a lista de números em ordem decrescente. */

    function decr (pr1, pr2){
        return pr2 - pr1;
    }

    var vetor = Array(  
                        Number(document.querySelector('#NUM1').value),
                        Number(document.querySelector('#NUM2').value),
                        Number(document.querySelector('#NUM3').value),
                        Number(document.querySelector('#NUM4').value), 
                        Number(document.querySelector('#NUM5').value),
     );

    var array = vetor;

    document.getElementById("descrescenteID").innerHTML = "Ordem descrescente: " + array.sort(decr);

}

function vogais() {
    /*Construa um algoritmo que identifique a quantidade de vogais a partir de um texto informado pelo usuário. */

    txtVogais = document.querySelector('input#vogais').value;
    resultVogais = document.querySelector('div#QntVogais');


    function contarVogais(str) {
        var count = 0;
        var vogal = "aeiou";

        for (let i = 0; i < str.length; i++) {
            if (vogal.indexOf(str[i]) > -1) {
                count++;
            }
        }
        console.log(count);
        resultVogais.innerHTML = `A quantidade de vogais no texto: ${count} vogais`;
    }
    contarVogais(txtVogais.toLowerCase());
}