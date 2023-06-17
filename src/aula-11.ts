/* eslint-disable prettier/prettier */
class Escola {
    public readonly nome: string;
    private readonly alunos: Aluno[];

    constructor(nome: string) {
        this.nome = nome;
        this.alunos = [];
    }

    public adicionarAluno(aluno: Aluno){
        this.alunos.push(aluno);
    }
}

class Aluno {
    constructor(public readonly nome: string){}
}


const escola = new Escola("EEEP Marwin");
const aluno1 = new Aluno("José");
const aluno2 = new Aluno("Maria");
const aluno3 = new Aluno("João");

escola.adicionarAluno(aluno1);
escola.adicionarAluno(aluno2);
escola.adicionarAluno(aluno3);

console.log("Escola: ", escola);
console.log("Aluno 1: ", aluno1);