/* eslint-disable prettier/prettier */

interface Pessoas {
  idade: number;
  nome: string;
}

interface Usuarios {
  pessoas: Pessoas[];
  cidade: string;
}

const usuario: Usuarios = {
  cidade: "Fortaleza",
  pessoas: [
    {
      idade: 22,
      nome: "Juan Victor",
    },
    {
      idade: 23,
      nome: "Danilo Ferreira",
    },
    {
      idade: 24,
      nome: "Iago Pereira",
    },
  ],
};

console.log(usuario);
console.log("Quantidade de registros inseridos: ", usuario.pessoas.length);
