"use strict";

var Pessoa = require('./pessoas');

function Crianca(nome, idade, sobrenome, altura) {
  var _altura = altura;
  Pessoa.call(this, nome, idade, sobrenome);

  this.travessura = function () {
    console.log("O(A) ".concat(nome, " est\xE1 subindo na arvore!"));
  };

  this.setAltura = function (altura) {
    _altura = altura;
  };

  this.getAltura = function () {
    return _altura;
  };
}

module.exports = Crianca;