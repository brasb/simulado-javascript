function fatorial(x)
{
    // Se x mudar quando arredondado, não é inteiro.
    let inteiro = Math.floor(x) === x;

    // Só números naturais têm fatorial.
    if (x < 0 || !inteiro) {
        return NaN;
    }

    // Não faz diferença continuar a partir daqui, 2 * 1 = 2.
    if (x <= 2) {
        return x;
    }

    // O fatorial de um número é um número multiplicado pelo fatorial dele -1.
    return x * fatorial(x - 1);
}

// Demonstração com 4! (24).
console.log(fatorial(4));
