const Pessoa = require("./pessoa");
const Funcionario = require("./funcionario");

const p = new Pessoa("masculino", 37);
p.metodoPublico();
p.lacoFor();
p.clausulaIf();
p.clausulaSwitch();
p.tratamentoExcecao();
p.documentacao(1, 2.0, "ahhhhhh");
p.manipulacaoString("veja isso aqui");
p.manipulacaoData("12/07/1984");
p.conexaoBancoDados();
p.escreverArquivo("teste.txt");
p.lerArquivo("teste.txt");
const f = new Funcionario("masculino", 37, "Engenheiro");
f.lacoFor()
