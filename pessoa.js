const sqlite3 = require("sqlite3");
const fs = require("fs");

class Pessoa{
    
    constructor(sexo, idade=-1){
        this.sexo = sexo;
        this.idade = idade;
    }

    set sexo(sexo){
        this._sexo = sexo;
    }

    get sexo(){
        return this._sexo;
    }

    set idade(idade){
        this._idade = idade;
    }
    
    get idade(){
        return this._idade;
    }

    _metodoProtegido(){
        console.log("Idade: " + this.idade);
    }

    #metodoPrivado(){
        console.log("Sexo: " + this.sexo);
    }

    metodoPublico(){
        this._metodoProtegido();
        this.#metodoPrivado();
    }

    lacoFor(){
        const lista = [0,1,2,3,4,5];
        for (let i =0; i<lista.length; i++){
            console.log(lista[i]);
        }

        for (let i of lista){
            console.log(i);
        }

        const dicionario = {"nome": "Cesar", "idade": 37, "sexo": "masculino"};
        for (const [key, value] of Object.entries(dicionario)){
            console.log(key, value);
        }
    }

    clausulaIf(){
        if (this.idade>65){
            console.log("Maior de 65 anos");
        } else if (this.idade<18){
            console.log("Menor de 18 anos");
        } else {
            console.log("Adulto");
        }
    }

    clausulaSwitch(){
        switch (this.sexo){
            case ("masculino"):
                console.log("É homem.");
                break;
            case ("feminino"):
                console.log("É mulher.");
                break;
            default:
                console.log("Não previsto");

        }
    }

    tratamentoExcecao(){
        try{
            console.log("Tentando resolver algo...");
            throw "Não implementado";
        } catch (err){
            console.log("Peguei a exceção");
        } finally {
            console.log("Isso aqui sempre vai ser executado!");
        }
    }

    /**
     * Este é uma exemplo de documentação usando JSDoc.
     * @method documentacao
     * @public
     * @param {int} param1 - Valor inteiro
     * @param {double} param2 - Valor decimal
     * @param {str} param3 - Valor texto
     * @returns {str} - texto processado
     */
    documentacao(param1, param2, param3){
        return param1 + " e " + param2 + " e " + param3;
    }

    conexaoBancoDados(){
        const db = new sqlite3.Database("database.db", (err) => {
            if (err){
                console.error("Algo deu errado" + err.message);
            }
        });
        db.exec("DROP TABLE IF EXISTS movie");
        db.exec("CREATE TABLE movie(title, year, score)");
        let data1 = ['Monty Python and the Holy Grail', 1975, 8.2];
        let data2 = ['And Now for Something Completely Different', 1971, 7.5];
        db.run("INSERT INTO movie VALUES (?, ?, ?)", data1);
        db.run("INSERT INTO movie VALUES (?, ?, ?)", data2);
        db.run("DELETE FROM movie WHERE year=?", [1975]);
        db.run("UPDATE movie SET year = ? WHERE year = ?", [1984, 1971]);
        db.each("SELECT * FROM movie", [], (err, row)=>{
        if (err){
            return console.error(err.message);
        } else{
            console.log(row.title);
            console.log(row.year);
            console.log(row.score);
        }});
        db.close();
    }

    manipulacaoString(texto){
        console.log("Primeiros 5 caracteres: " + texto.substring(0, 5));
        console.log("Esta string tem " + texto.length + " caracteres.");
        console.log("Em caixa baixa: " + texto.toLowerCase());
        console.log("Em caixa ALTA: " + texto.toUpperCase());

    }

    escreverArquivo(nomeArquivo){
        let conteudoLista = [1,2,3,4,5,6,7,8,9,10];
        let conteudoDicionario = {"nome": "teste", "idade": 37};
        let conteudo = "";
        for (let i of conteudoLista){
            conteudo += i + "\n";
        }
        for (let [key, value] of Object.entries(conteudoDicionario)){
            conteudo += key + ": " + value + "\n"
        }
        // Para acrescentar ao arquivo usar "appendFileSync()".
        fs.writeFileSync(nomeArquivo, conteudo);
    }

    lerArquivo(nomeArquivo){
        const conteudo = fs.readFileSync(nomeArquivo, 'utf8');
        let linhas = conteudo.split("\n");
        for (let linha of linhas){
            console.log(linha);
        }
    }

    funcaoParaSerTestada(valor1, valor2){
        return valor1 + valor2;
    }
}

module.exports = Pessoa;