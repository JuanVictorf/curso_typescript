/* eslint-disable prettier/prettier */
//type MarcaTenis = "abc" | "def" | "ghi";

enum Marcatenis2 {
  ABC = "abc",
  DEF = "def",
  GHI = "ghi",
}

interface Tenis {
  marcaTenis: Marcatenis2;
}

const test: Tenis = {
  marcaTenis: Marcatenis2.ABC,
};

if (test.marcaTenis === "abc") {
  console.log("É abc.");
}

