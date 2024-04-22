const Viagem = require('./objetos/viagem');
const Pessoa = require('./objetos/pessoas');
const Encomenda = require('./objetos/encomendas');


const pessoaMaria = new Pessoa('Maria', 25, 'Francisca','Alameda Betania, 45');
const pessoaJoao = new Pessoa('Joao', 30, 'Madeiro', 'Rua Abacate, 89');

pessoaMaria.getNome()

const encomendaViagemMariaJoao = new Viagem('Belém','São Paulo','10/07/2024','18/07/2024');

encomendaViagemMariaJoao.getLocal_chegada()


const encomenda = new Encomenda(pessoaJoao, pessoaMaria, encomendaViagemMariaJoao);
encomenda.getRemetente().setNome('Jonh')
console.log(encomenda.getRemetente().getNome());
console.log(pessoaMaria.getNome());
