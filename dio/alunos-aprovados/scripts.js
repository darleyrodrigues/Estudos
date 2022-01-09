
/*
const alunos = [
    {
        nome: 'João',
        nota: 5,
        turma: '1B',
    },
    {
        nome: 'Sofia',
        nota: 9,
        turma: '1B',
    },
    {
        nome: 'Paulo',
        nota: 6,
        turma: '2C',
    },
    {
        nome: 'Miguel',
        nota: 3,
        turma: '2C',
    },
];






function alunosAprovados(arr, media) {
    let aprovados = [];

    for (let i = 0; i < arr.length; i++) {
        const {nota, nome} = arr[i];

        if (nota >= media) {
            aprovados.push(nome);
        }
    }
    return aprovados;
}
console.log(alunosAprovados(alunos, 5));
*/

const darley = {
    nome: 'Darley',
    idade: 25
};
const raissa = {
    nome: 'Raissa',
    idade: 20
};
const cristiano = {
    nome: 'Cristiano',
    idade: 03
};
const paulo = {
    nome: 'Paulo',
    idade: 52
};
const lene = {
    nome: 'Lene',
    idade: 48
};
const regiane = {
    nome: 'Regiane',
    idade: 38
};

function calculaIdade(anos) {
    //for (let i = 0; i < .length; i++) {
        
    //}
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
};




console.log(calculaIdade.call(raissa, 5));
console.log(calculaIdade.call(regiane, 5));
console.log(calculaIdade.apply(cristiano, [5]));
console.log(calculaIdade.call(lene, 5));
console.log(calculaIdade.apply(darley, [5]));