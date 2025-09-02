const Utilitarios = require('../src/utilitarios');

describe('Testes da classe Utilitarios', () => {
  const utils = new Utilitarios();

  test('Inverter a string', () => {
    expect(utils.inverterString('teste')).toBe('etset');
  });

  test('Contar os caracteres', () => {
    expect(utils.contarCaracteres('teste')).toBe(5);
  });

  test('Converter para maiúsculas', () => {
    expect(utils.paraMaiusculas('teste')).toBe('TESTE');
  });

  test('Converter para minúsculas', () => {
    expect(utils.paraMinusculas('TESTE')).toBe('teste');
  });

  test('Colocar a primeira letra em maiúsculo', () => {
    expect(utils.primeiraLetraMaiuscula('teste')).toBe('Teste');
  });

  test('Somar dois números', () => {
    expect(utils.somar(2, 3)).toBe(5);
  });

  test('Subtrair dois números', () => {
    expect(utils.subtrair(5, 3)).toBe(2);
  });

  test('Multiplicar dois números', () => {
    expect(utils.multiplicar(2, 3)).toBe(6);
  });

  test('Dividir dois números', () => {
    expect(utils.dividir(6, 3)).toBe(2);
  });

  test('Lançar erro ao dividir por zero', () => {
    expect(() => utils.dividir(6, 0)).toThrow('Divisão por zero');
  });

  test('Verificar se o número é par', () => {
    expect(utils.ehPar(4)).toBe(true);
    expect(utils.ehPar(5)).toBe(false);
  });

  test('Retornar o primeiro elemento do array', () => {
    expect(utils.primeiroElemento([1, 2, 3])).toBe(1);
  });

  test('Retornar o último elemento do array', () => {
    expect(utils.ultimoElemento([1, 2, 3])).toBe(3);
  });

  test('Retornar o tamanho do array', () => {
    expect(utils.tamanhoArray([1, 2, 3])).toBe(3);
  });

  test('Ordenar o array', () => {
    expect(utils.ordenarArray([3, 1, 2])).toEqual([1, 2, 3]);
  });

  test('Inverter o array', () => {
    expect(utils.inverterArray([1, 2, 3])).toEqual([3, 2, 1]);
  });

  test('Gerar um número aleatório dentro do intervalo', () => {
    let num = utils.gerarNumeroAleatorio(10);

    expect(num).toBeGreaterThanOrEqual(0);
    expect(num).toBeLessThanOrEqual(10);

    num = utils.gerarNumeroAleatorio();

    expect(num).toBeGreaterThanOrEqual(0);
    expect(num).toBeLessThanOrEqual(100);
  });

  test('Verificar se o valor é um número', () => {
    expect(utils.ehNumero(5)).toBe(true);
    expect(utils.ehNumero('teste')).toBe(false);
  });

  test('Remover os espaços iniciais e finais da string', () => {
    expect(utils.removerEspacos('  teste  ')).toBe('teste');
  });

  test('Repetir o texto o número de vezes especificado', () => {
    expect(utils.repetirTexto('teste', 3)).toBe('testetesteteste');
  });

  test('Juntar os elementos do array em uma string com o separador especificado', () => {
    expect(utils.juntarArray(['a', 'b', 'c'], '-')).toBe('a-b-c');
    expect(utils.juntarArray(['a', 'b', 'c'])).toBe('a,b,c');
  });

  test('Contar a quantidade de palavras', () => {
    expect(utils.contarPalavras('Olá mundo')).toBe(2);
  });

  test('Deve verificar a média do array', () => {
    expect(utils.mediaArray([])).toBe(0);
    expect(utils.mediaArray([1, 2, 3, 4, 5])).toBe(3);
  });

  test('Deve remover os itens duplicados do array', () => {
    expect(utils.removerDuplicados([1, 2, 2, 3, 3, 3])).toEqual([1, 2, 3]);
  });

  test('Deve verificar se a string é um palíndromo', () => {
    expect(utils.ehPalindromo('arara')).toBe(true);
    expect(utils.ehPalindromo('teste')).toBe(false);
  });

  test('Deve mesclar os objetos corretamente', () => {
    expect(utils.mesclarObjetos({ a: 1 }, { b: 2 })).toEqual({ a: 1, b: 2 });
  });
});