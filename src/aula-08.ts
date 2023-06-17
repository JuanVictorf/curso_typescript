/* eslint-disable prettier/prettier */
interface Carro {
  idade: number;
  nome: string;
}

interface Bicicleta {
  rodas: number;
}

const funcao = (validacao: boolean): Carro | Bicicleta => {
  if (validacao) {
    return {
      idade: 32,
      nome: "Gol",
    };
  }
  return {
    rodas: 4,
  };
};

const resultado = funcao(false);

if ("idade" in resultado) {
  console.log(resultado.nome);
}

if ("rodas" in resultado) {
  console.log(resultado.rodas);
}
