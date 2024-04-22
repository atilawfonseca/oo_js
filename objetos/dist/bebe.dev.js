"use strict";

var Pessoa = require('./pessoas');

function Bebe(nome, idade, sobrenome, cor_pipo) {
  var _pipo = cor_pipo;
  Pessoa.call(this, nome, idade, sobrenome);

  this.mamar = function () {
    console.log("Beb\xEA ".concat(nome, " est\xE1 mamando!"));
  };

  this.setCorPipo = function (cor_pipo) {
    _pipo = cor_pipo;
  };

  this.getCorPipo = function () {
    return console.log("A cor do pipo do beb\xEA \xE9 ".concat(_pipo));
  };
}

module.exports = Bebe;