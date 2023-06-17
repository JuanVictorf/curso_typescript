/* eslint-disable prettier/prettier */
interface Pessoa {
  idade: number;
  nome: string;
  isMaiorIdade: boolean;
}

const pessoa: Pessoa = {
  idade: 543,
  nome: "João",
  isMaiorIdade: true,
};

console.log(pessoa);
console.log("Idade da pessoa: ", pessoa.idade);
