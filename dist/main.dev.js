"use strict";

var Bebe = require('./objetos/bebe');

var Idoso = require('./objetos/idoso');

var Crianca = require('./objetos/crianca');

var bebeArthur = new Bebe('Arthur', '1 ano', 'Pereira', 'verde');
var idosaMaria = new Idoso('Maria', '78 anos', 'José', 'Cataflan');
var criancaFlavio = new Crianca('Flavio', '11 anos', 'Souza', '1,20 m');
bebeArthur.mamar();
idosaMaria.getRemedios();
criancaFlavio.travessura();