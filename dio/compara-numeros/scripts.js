
function comparaNum(num1, num2) {
    const firstPhrase = phrase1(num1, num2);
    const secondPhrase = phrase2(num1, num2);

    return `${firstPhrase} ${secondPhrase}`

}

function phrase1(num1, num2) {
    let saoIguais = ""

    if(num1 !== num2) {
        saoIguais = " não"
    }
    return `Os números ${num1} e ${num2}${saoIguais} são iguais.`
}

function phrase2(num1, num2) {
    const sum = num1 + num2;

    let resultado10 = 'igual a';
    let resultado20 = 'igual a';

    let maior10 = sum > 10;
    let menor10 = sum < 10;
    let maior20 = sum > 20;
    let menor20 = sum < 20;

    if(maior10) {
        resultado10 = 'maior que'
    } else if(menor10) {
        resultado10 = 'menor que'
    }

    if(maior20) {
        resultado20 = 'maior que'
    } else if(menor20) {
        resultado20 = 'menor que'
    }

    return `Sua soma é ${sum}, que é ${resultado10} 10 e ${resultado20} 20.`
}

console.log(comparaNum(1, 2));