
/* Celcius em fahrenheit

    Crie uma função que receba uma string em celcius ou fahrenheit e faça a tranformação de uma unidade para outra

    C = (F - 32) * 5 / 9
    F = C * 9 / 5 + 32

*/

// TransformDegree('50F')
function transformDegree(degree) {
    const celsiulsExists = degree.toUpperCase().includes('C')
    const fahrenheitExists = degree.toUpperCase().includes('F')

    // Fluxo de erro
    if (!celsiulsExists && !fahrenheitExists) {
        throw new Error('Grau não identificado')
    }

    // Fluxo ideal, F ->
    let updateDegree = Number(degree.toUpperCase().replace("F", ""));
    let formula = fahrenheit => (fahrenheit - 32) * 5 / 9
    let degreeSign = "C"

    // Fluxo alternativo C -> F
    if(celsiulsExists) {
        updateDegree = Number(degree.toUpperCase().replace("C", ""));
        formula = celcius => celcius * 9 / 5 + 32
        degreeSign = "F"
    }

    return formula(updateDegree) + degreeSign
}

try {
    console.log(transformDegree('10C'))
    console.log(transformDegree('50F'))
}

catch (error) {
    console.log(error.message)
}