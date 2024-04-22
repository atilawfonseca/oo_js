const Pessoa = require('./pessoas')

function Crianca (nome, idade, sobrenome, altura) {

    let _altura = altura; 

    Pessoa.call(this, nome, idade, sobrenome)

    this.travessura = function(){
        console.log(`O(A) ${nome} está subindo na arvore!`);
    }

    this.setAltura = function(altura) {
        _altura = altura; 
    }
    this.getAltura = function() {
        return _altura; 
    }
    
}

module.exports = Crianca; 