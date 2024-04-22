const Pessoa = require('./pessoas')

function Viagem (local_saida, local_chegada, data_inicial, data_final) {
    let _local_saida = local_saida; 
    let _local_chegada = local_chegada; 
    let _data_inicial = data_inicial; 
    let _data_final = data_final; 
    

    this.setLocal_saida = function(local){
        _local_saida = local; 
    }
    this.getLocal_saida = function() {
        return _local_saida; 
    }

    this.setLocal_chegada = function(local){
        _local_chegada = local; 
    }
    this.getLocal_chegada = function() {
        return _local_chegada; 
    }

    this.setDataInicial = function(data_inicial){
        _data_inicial = data_inicial; 
    }
    this.getDataInicial = function(){
        return  _data_inicial;
    }

    this.setDataFinal = function(data_final){
        _data_final = data_final; 
    }
    this.getDataFinal = function() {
        return _data_final; 
    }
}

module.exports = Viagem; 