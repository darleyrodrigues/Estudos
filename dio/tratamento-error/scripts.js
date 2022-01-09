function validaArr(arr, num) {
    try {
        if (!arr && !num) {
            throw new ReferenceError ('Envie os parâmetros');
        }
        if (typeof arr !== Object) {
            throw new TypeError ('Esperamos um objeto')
        }
        if (typeof num !== Number) {
            throw new TypeError ('Esperamos um número')
        }
        if (arr.length != num) {
            throw new RangeError ('Tamanho menor que o desejado')
        }

        return arr;
    }
    
    catch (e) {
        if (e instanceof ReferenceError) {
            console.log('Este erro é um ReferenceError!')
            console.log(e.message)
        }
        else if (e instanceof TypeError) {
            console.log('Este erro é um TypeError!')
            console.log(e.message)
        }
        else if (e instanceof RangeError) {
            console.log('Este erro é um RangeError!')
            console.log(e.message)
        }
        else {
            console.log("Tipo de erro não esperado:"+ e);
        }
    }
}


console.log(validaArr([1,5,8,9,11,45], 7));