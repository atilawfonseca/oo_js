"use strict";

var Viagem = require('./objetos/viagem');

var Pessoa = require('./objetos/pessoas');

var Encomenda = require('./objetos/encomendas');

var pessoaMaria = new Pessoa('Maria', 25, 'Francisca', 'Alameda Betania, 45');
var pessoaJoao = new Pessoa('Joao', 30, 'Madeiro', 'Rua Abacate, 89');
pessoaMaria.getNome();
var encomendaViagemMariaJoao = new Viagem('Belém', 'São Paulo', '10/07/2024', '18/07/2024');
encomendaViagemMariaJoao.getLocal_chegada();
var encomenda = new Encomenda(pessoaJoao, pessoaMaria, encomendaViagemMariaJoao);
encomenda.getRemetente().setNome('Jonh');
console.log(encomenda.getRemetente().getNome());
console.log(pessoaMaria.getNome());