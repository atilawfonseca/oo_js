"use strict";

var Pessoa = require('./pessoas');

function Idoso(nome, idade, sobrenome, remedios) {
  var _remedios = remedios;
  Pessoa.call(this, nome, idade, sobrenome);

  this.setRemedios = function (remedios) {
    _remedios = remedios;
  };

  this.getRemedios = function () {
    return console.log("O ".concat(nome, " precisa do rem\xE9dio ").concat(_remedios));
  };
}

module.exports = Idoso;