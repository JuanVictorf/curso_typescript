/* eslint-disable prettier/prettier */
const funcaoCallback = (): void => {
  console.log("Deu bom");
};

const funcaoTeste2 = (valor1: number, valor2: number, callback: () => void): string => {
  if (valor1 > valor2) {
    callback();
  }
  return "";
};

funcaoTeste2(54, 32, funcaoCallback);
