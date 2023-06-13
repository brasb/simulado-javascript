function senhaValida(senha)
{
    // Checa se a senha é muito curta. Se não, retornar false.
    if (senha.length < 8) {
        return false;
    }

    /*
        Se a string não mudar com a troca de case, significa que ela não 
        mistura cases, ou seja, faltam letras maiúsculas ou minúsculas.
        Se esse for o caso, retornar false.
    */
    if (senha.toLowerCase() === senha || senha.toUpperCase() === senha) {
        return false;
    }

    /*
        Usa uma expressão regular para checar se a senha contém pelo menos um número.
        Se não tiver, retornar false.
    */
    if (!/\d/.test(senha)) {
        return false;
    }

    // Se não foi encontrado nenhum problema na senha, ela é válida.
    return true;
}

console.log(senhaValida("Curta1"));
console.log(senhaValida("toda_minuscula1"));
console.log(senhaValida("TODA_MAIUSCULA1"));
console.log(senhaValida("Sem_numeros"));
console.log(senhaValida("SenhaBoa001"))