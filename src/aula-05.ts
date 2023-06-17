/* eslint-disable prettier/prettier */
interface Estado {
    nome: string;
}

interface Cidade {
  nome: string;
  estado: Estado;
}

interface Endereco {
  rua: string;
  bairro: string;
  cidade: Cidade;
  complemento?: string;
}

const endereco: Endereco = {
    bairro: "Alvaro Weyne",
    rua: "Rua Adolfo Bezerra de Menezes",
    cidade: {
        nome: "Fortaleza",
        estado: {
            nome: "Ceará",
        }
    }
}


console.log(endereco);
console.log(endereco.complemento?.substring(3) || "Não foi passado complemento");
console.log(endereco.cidade.estado)