"use strict";

function Pessoa(nome, idade, sobrenome) {
  var _nome = nome;
  var _idade = idade;
  var _sobrenome = sobrenome;

  this.setNome = function (nome) {
    _nome = nome;
  };

  this.getNome = function () {
    return _nome;
  };

  this.setIdade = function (idade) {
    _idade = idade;
  };

  this.getIdade = function () {
    return _idade;
  };

  this.setSobrenome = function (sobrenome) {
    _sobrenome = sobrenome;
  };

  this.getSobrenome = function () {
    return _sobrenome;
  };
}

module.exports = Pessoa;