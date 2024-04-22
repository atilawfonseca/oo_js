const Pessoa = require('./pessoas');
function Idoso(nome, idade, sobrenome, remedios){
    let _remedios = remedios;
    Pessoa.call(this, nome, idade, sobrenome)

    this.setRemedios = function(remedios){
        _remedios = remedios; 
    }
    this.getRemedios = function(){
        return console.log(`O ${nome} precisa do remédio ${_remedios}`); 
    }
}

module.exports = Idoso; 