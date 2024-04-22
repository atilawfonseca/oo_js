const Pessoa = require('./pessoas');
function Bebe(nome, idade, sobrenome, cor_pipo){
    let _pipo = cor_pipo;
    Pessoa.call(this, nome, idade, sobrenome)

    this.mamar = function(){
        console.log(`Bebê ${nome} está mamando!`);
    }

    this.setCorPipo = function(cor_pipo){
        _pipo = cor_pipo; 
    }
    this.getCorPipo = function(){
        return console.log(`A cor do pipo do bebê é ${_pipo}`); 
    }
}

module.exports = Bebe; 