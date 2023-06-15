function contarVogais(str)
{
    // Lista de vogais, para comparação.
    const VOGAIS = ["a", "e", "i", "o", "u"];

    /*
       Serão checadas todos os caracteres de str. Para cada vogal, o valor de
       numeroVogais será incrementado.
    */
    let numeroVogais = 0;
    for (let letra of str) {
        /*
            Conversão a lower case para a comparação funcionar mesmo se str
            possuir letras maiúsculas.
        */
        if (VOGAIS.includes(letra.toLowerCase())) {
            numeroVogais++;
        }
    }

    return numeroVogais;
}

// Demonstração.
console.log(contarVogais("Esta string tem nove vogais."));
