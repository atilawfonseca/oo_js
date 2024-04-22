const Viagem = require('./viagem');

function Pessoa(nome, idade, sobrenome, endereco){
    let _nome = nome; 
    let _idade = idade; 
    let _sobrenome = sobrenome; 
    let _endereco = endereco; 
    
    this.setNome = function(nome){
        _nome = nome; 
    }

    this.getNome = function(){
        return _nome; 
    }
    
    this.setIdade = function(idade){
        _idade = idade; 
    }
    this.getIdade = function(){
        return _idade; 
    }

    this.setSobrenome = function(sobrenome){
        _sobrenome = sobrenome; 
    }
    this.getSobrenome = function(){
        return _sobrenome; 
    }

    this.setEndereco = function(endereco){
        _endereco = endereco; 
    }
    this.getEndereco = function(){
        return _endereco; 
    }
}

module.exports = Pessoa; 