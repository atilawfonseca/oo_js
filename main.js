const Bebe = require('./objetos/bebe');
const Idoso = require('./objetos/idoso');
const Crianca = require('./objetos/crianca');


const bebeArthur = new Bebe('Arthur', '1 ano', 'Pereira', 'verde');
const idosaMaria = new Idoso('Maria', '78 anos', 'José', 'Cataflan');
const criancaFlavio = new Crianca('Flavio', '11 anos', 'Souza', '1,20 m');

bebeArthur.mamar();
idosaMaria.getRemedios();
criancaFlavio.travessura();