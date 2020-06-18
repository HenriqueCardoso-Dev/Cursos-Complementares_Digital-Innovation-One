//condição utilizando o if else

    var ageV = 18; //recebe valor de idade.


    //condicional para fazer validação da variável ageV
    if (ageV >= 18) {
        console.log('Maior de idade.');
    } else {
        console.log('Menor de idade.');
    };

// Repetição utilizando o while (laço de repetição com teste lógico no início)

    let count = 0;

    while (count <= 10) {
        console.log(count);
        count = count + 1; //essa linha poderia ser facilmente substituída por: count++; ou count += 1;.
    };
    console.log("\n\n");

// Repetição utilizando o for

    var cNum;

    for (cNum = 0; cNum <= 20; cNum++){ // ou seja: for (variável = valor inicial; condição; incremento){ação};
        console.log(cNum);
    };