/* eslint-disable prettier/prettier */
interface Andar {
    passos?: number;
}

const andar: Andar = {
    passos: 453,
};

const funcaoTest = (): undefined | number => {
    if (andar.passos && andar.passos> 5) {
        return 543;
    }
    return undefined;
};

const outroNome = funcaoTest();
outroNome?.toFixed();

console.log(andar);