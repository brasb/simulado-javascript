function inverterString(str) {
    /*
        O método split divide uma string com base em uma sequência de
        caracteres. Fornecendo uma string vazia, ele transformará cada
        caractere da string fornecida em um elemento de uma lista.
    */
    let caracteresInput = str.split("");
    // Lista de caracteres da string de resultado.
    let caracteresOutput = [];
    
    /*
        Os caracteres fornecidos seram lidos de trás para frente. E cada
        elemento será adicionado na lista de caracteres de output.
    */
    for (let i = caracteresInput.length - 1; i >= 0; i--) {
        caracteresOutput.push(caracteresInput[i]);
    }

    /*
        Transforma a lista de caracteres em uma string.

        A string vazia como argumento é necessária, senão o join inserirá
        vírgulas entre os elementos por padrão.
    */
    let resultado = caracteresOutput.join("");
    
    return resultado;
}

// Demonstração.
console.log(inverterString("!odnum ,álO"));
