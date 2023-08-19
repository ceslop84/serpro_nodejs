const Pessoa = require("./pessoa");

class Funcionario extends Pessoa{

    constructor(sexo, idade=-1, cargo){
        super(sexo, idade);
        this.cargo = cargo
    }

    set cargo(cargo){
        this._cargo = cargo;
    }

    get cargo(){
        return this._cargo;
    }

}

module.exports = Funcionario;