"use strict";

var Viagem = require('./viagem');

var Pessoa = require('./pessoas');

function Encomenda(remetente, destinatario, transporte) {
  var _destinatario = destinatario;
  var _remetente = remetente;
  Pessoa.call(this, remetente.getNome(), remetente.getIdade(), remetente.getSobrenome(), remetente.getEndereco());
  Pessoa.call(this, destinatario.getNome(), destinatario.getIdade(), destinatario.getSobrenome(), destinatario.getEndereco());
  Viagem.call(this, transporte.getLocal_saida(), transporte.getLocal_chegada(), transporte.getDataInicial(), transporte.getDataFinal());

  this.setDestinatario = function (destinatario) {
    _destinatario = destinatario;
  };

  this.getDestinatario = function () {
    return _destinatario;
  };

  this.setRemetente = function (remetente) {
    _remetente = remetente;
  };

  this.getRemetente = function () {
    return _remetente;
  };
}

module.exports = Encomenda;