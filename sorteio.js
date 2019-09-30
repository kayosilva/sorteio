
//array com os nomes dos participantes
const integrantes = [
    'Homem de Ferro',
    'Thor',
    'Capitão América',
    'Viúva Negra',
    'Feiticeira Escarlate',
    'Hulk',
    'Loki',
    'Gavião Arqueiro',
    'Homem Formiga',
    'Stan Lee',
];

// pega o total de integrantes e acrescenta 1 para utilizar na hora que gerar os indexes para o sorteio
const totalIntegrantes = integrantes.length + 1;

//cria um array vazio que receberá os sorteados
const sorteados = [];

const sortear = () => {
    //pega um index aleatório baseado na quantidade de integrantes
    const indexRandom = Math.floor(Math.random() * totalIntegrantes);
    //verifica se o index ainda existe no array de integrantes
    if (integrantes[indexRandom]) {
        //se o index existir atribui em um novo array
        sorteados.push({
            nome: integrantes[indexRandom],
            ordem: integrantes.length
        });
        //remove o index do array de integrantes 
        integrantes.splice(indexRandom, 1);
    }
    //enquanto houve integrantes para sortear a função é chamada
    if (integrantes.length > 0) {
        sortear();
    }
}

//inicia o sorteio
sortear();

//ordena o resultado
sorteados.sort((a, b) => {
    return (a.ordem > b.ordem) ? 1 : (a.ordem < a.ordem) ? -1 : 0;
});

//exibe o resultado
console.table(sorteados);