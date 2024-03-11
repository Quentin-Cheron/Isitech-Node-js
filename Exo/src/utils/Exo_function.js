// 1 Écrivez une fonction qui prend deux nombres comme arguments et renvoie leur somme.

const calc = (a, b) => a + b;

// 2 Écrivez une fonction qui prend un tableau de nombres et renvoie le plus grand nombre du tableau.

const HightestNumber = (array) => Math.max(...array);

// 3 Écrivez une fonction qui prend une chaîne de caractères et renvoie une nouvelle chaîne de caractères dont toutes les voyelles ont été supprimées.

const DeleteVoyell = (string) => string.replaceAll(/(a|e|i|o|u|y)/g, "");

// 4 Écrivez une fonction qui prend un tableau de chaînes de caractères et renvoie un tableau de chaînes de caractères triées par ordre alphabétique.
const sortArray = (array) => array.sort((e, a) => e - a);

// 5 Écrivez une fonction qui prend un nombre en argument et renvoie une chaîne de caractères représentant ce nombre en mots. Par exemple, si l'entrée est 42, la fonction doit retourner "quarante-deux".

const NumberToString = (index) => {
  const numbersInLetters = [
    "un",
    "deux",
    "trois",
    "quatre",
    "cinq",
    "six",
    "sept",
    "huit",
    "neuf",
    "dix",
    "onze",
    "douze",
    "treize",
    "quatorze",
    "quinze",
    "seize",
    "dix-sept",
    "dix-huit",
    "dix-neuf",
    "vingt",
    "vingt et un",
    "vingt-deux",
    "vingt-trois",
    "vingt-quatre",
    "vingt-cinq",
    "vingt-six",
    "vingt-sept",
    "vingt-huit",
    "vingt-neuf",
    "trente",
    "trente et un",
    "trente-deux",
    "trente-trois",
    "trente-quatre",
    "trente-cinq",
    "trente-six",
    "trente-sept",
    "trente-huit",
    "trente-neuf",
    "quarante",
    "quarante et un",
    "quarante-deux",
    "quarante-trois",
    "quarante-quatre",
    "quarante-cinq",
    "quarante-six",
    "quarante-sept",
    "quarante-huit",
    "quarante-neuf",
    "cinquante",
    "cinquante et un",
    "cinquante-deux",
    "cinquante-trois",
    "cinquante-quatre",
    "cinquante-cinq",
    "cinquante-six",
    "cinquante-sept",
    "cinquante-huit",
    "cinquante-neuf",
    "soixante",
    "soixante et un",
    "soixante-deux",
    "soixante-trois",
    "soixante-quatre",
    "soixante-cinq",
    "soixante-six",
    "soixante-sept",
    "soixante-huit",
    "soixante-neuf",
    "soixante-dix",
    "soixante et onze",
    "soixante-douze",
    "soixante-treize",
    "soixante-quatorze",
    "soixante-quinze",
    "soixante-seize",
    "soixante-dix-sept",
    "soixante-dix-huit",
    "soixante-dix-neuf",
    "quatre-vingts",
    "quatre-vingt-un",
    "quatre-vingt-deux",
    "quatre-vingt-trois",
    "quatre-vingt-quatre",
    "quatre-vingt-cinq",
    "quatre-vingt-six",
    "quatre-vingt-sept",
    "quatre-vingt-huit",
    "quatre-vingt-neuf",
    "quatre-vingt-dix",
    "quatre-vingt-onze",
    "quatre-vingt-douze",
    "quatre-vingt-treize",
    "quatre-vingt-quatorze",
    "quatre-vingt-quinze",
    "quatre-vingt-seize",
    "quatre-vingt-dix-sept",
    "quatre-vingt-dix-huit",
    "quatre-vingt-dix-neuf",
    "cent",
  ];

  return numbersInLetters[index - 1];
};

// 6 Écrivez une fonction qui prend un tableau d'objets et un nom de propriété et renvoie un tableau des valeurs de cette propriété dans chaque objet.

const returnArrayObject = (object, name) => {
  let tmp = [];
  for (const i of object) {
    tmp.push(i[name]);
  }
  return tmp;
};

// 7 Écrivez une fonction qui prend un tableau de nombres et renvoie un tableau de nombres triés par ordre décroissant.

const reverseSort = (array) => array.sort((e, a) => e - a).reverse();

// 8 Écrivez une fonction qui prend une chaîne de caractères et renvoie une nouvelle chaîne avec toutes les voyelles en majuscules.

function majVoyell(string) {
  const array = ["a", "e", "i", "o", "u", "y"];
  let tmp = "";

  for (let i = 0; i < array.length; i++) {
    for (let o = 0; o < string.length; o++) {
      if (array[i] === string[o]) {
        tmp += string[o].toUpperCase();
      }
    }
  }
  return tmp;
}

// 9 Écrivez une fonction qui prend une chaîne de caractères et renvoie le nombre de voyelles dans cette chaîne.

function stringLength(string) {
  const array = ["a", "e", "i", "o", "u", "y"];
  let tmp = "";

  for (let o = 0; o < string.length; o++) {
    for (let i = 0; i < array.length; i++) {
      if (string[o] === array[i]) {
        tmp += string[o];
      }
    }
  }
  return tmp.length;
}

// 10 Écrivez une fonction qui prend une chaîne de caractères et renvoie une nouvelle chaîne avec toutes les consonnes en majuscules.

function majConsonne(string) {
  const array = [
    "b",
    "c",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "m",
    "n",
    "p",
    "q",
    "r",
    "s",
    "t",
    "v",
    "w",
    "x",
    "z",
  ];
  let tmp = "";

  for (let i = 0; i < array.length; i++) {
    for (let o = 0; o < string.length; o++) {
      if (array[i] === string[o]) {
        tmp += string[o].toUpperCase();
      }
    }
  }
  return tmp;
}

function consonneMaj(string) {}

export {
  calc,
  HightestNumber,
  sortArray,
  consonneMaj,
  reverseSort,
  stringLength,
  majVoyell,
  majConsonne,
  DeleteVoyell,
  NumberToString,
  returnArrayObject,
};
