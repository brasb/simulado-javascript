function senhaValida(senha)
{
    // Checa se a senha é muito curta. Se não, retornar false.
    if (senha.length < 8) {
        return false;
    }

    /*
        Se a string não mudar com nenhuma conversão de case, significa que ela
        não mistura letras maiúsculas e minúsculas. 
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

// Testa senhas inválidas.
console.log(senhaValida("Curta1"));
console.log(senhaValida("toda_minúscula1"));
console.log(senhaValida("TODA_MAIÚSCULA1"));
console.log(senhaValida("Sem_números"));

// Testa uma senha válida.
console.log(senhaValida("SenhaBoa001"));
