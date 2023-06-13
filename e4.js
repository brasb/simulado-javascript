function factorial(x)
{
    // Só inteiros têm fatorial.
    if (x < 0) {
        return NaN;
    }

    // Não faz diferença continuar a partir daqui, 2 * 1 = 2.
    if (x <= 2) {
        return x;
    }

    // O fatorial de um número é um número multiplicado pelo fatorial dele -1.
    return x * factorial(x - 1);
}

console.log(factorial(4));