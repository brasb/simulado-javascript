console.log("Exercício 1")

function checarPrimo(x)
{
    // Se ele mudar quando arredondado, não é inteiro.
    let inteiro = Math.floor(x) === x;

    // Números não inteiros, negativos, 0 e 1 não podem ser primos.
    if (x <= 1 || !inteiro) {
        // Por isso, sabe-se que o número não é primo, pode-se retornar.
        return false;    
    }

    /*
        Todos os números naturais maiores que 2 são checados para ver se x é
        primo. O número não será primo se for encontrado algum valor que não
        gere resto quando divisor de x.
        Pois um número primo necessariamente só pode ser divisível por 1 e por
        ele mesmo.
    */ 
    let result = true;
    for (let n = x - 1; n > 1 && result; n--) {
        result = x % n !== 0;
    }

    return result;
}

// Testa vários números primos diferentes.
for (let i = -1; i <= 100; i++) {
    let r = checarPrimo(i);
    console.log("Resultado: ", r, ". Número: ", i);
}
