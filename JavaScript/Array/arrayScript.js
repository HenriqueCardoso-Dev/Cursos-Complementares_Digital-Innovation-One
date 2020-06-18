// Estudo baseado no tema Array:

let fruitList = ['Apple', 'Orange', 'Strawberry', 'grape']; // criação do array

//métodos de saida e interação de um array:

    console.log(fruitList);  // saida do array

    fruitList.push('Watermelon'); // adiciona o elemento ao array

    console.log(fruitList); // saida do array

    fruitList.pop(); // retirada do ultimo elemento do array

    console.log(fruitList); // saida do array

    console.log(fruitList.length); // saída de quantos elementos existem dentro do array

    console.log(fruitList.reverse()); // neste caso o array será exibido na ordem contrária do seu estado atual.

    console.log(fruitList.toString()); // a funcionalidade toString, formata todo o conteúdo do array para uma string.

    console.log(fruitList.join(" - ")); // formatará o divisor entre os elementos no momento de exibir o array.


//Introdução a manipulação de objetos/dicionários:

    let fruit = {name: "Apple", color: "Green"}; // objeto/dicionário fruit

    console.log(fruit); // saída do objeto.

    console.log(fruit.name); // saída exclusiva de somente um item do meu array como selecionado.

    const users = [{userName: "Douglas", userType: "Sênior"}, {userName: "Josef Cottlin", userType: "Junior"}] // lista de dicionários.

    console.log(users); // saída da lista de objetos.

    users.push({userName: "Josias", userType: "pleno"}); // inserção de um novc objeto a lista utilizando o push.

    console.log(users);

    let nameV = 'Henrique'; //declaração de váriavel com nome.
    let typeV = 'CEO'; //declaração de váriavel com cargo/tipo de usuário.

    users.push({userName: `${nameV}`, userType: `${typeV}`}); // inserção de objeto personalizado de maneira mais inteligente e interativa.

    console.log(users);

    console.log(`${users[3].userName} é ${users[3].userType} da Empresa!`); // Saída personalizada.