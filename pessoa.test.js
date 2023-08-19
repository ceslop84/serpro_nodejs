const Pessoa = require('./pessoa')

test('Função para ser testada', () => {
    const p = new Pessoa("masculino");
    const observado = p.funcaoParaSerTestada(6,3);
    let a = 6, b=3;
    real = a+b;
    expect(observado).toEqual(real);
})