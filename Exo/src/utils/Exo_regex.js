// 1 Écrivez une fonction qui prend une chaîne de caractères et renvoie une nouvelle chaîne dont toutes les voyelles ont été supprimées.

const removeVoyell = (string) => string.replaceAll(/(a|e|i|o|u|y)/g, "");

// 2 Écrivez une fonction qui prend une chaîne de caractères et renvoie une nouvelle chaîne dont tous les chiffres ont été supprimés.

const removeNumber = (string) => string.replaceAll(/[0-9]/g, "");

// 3 Écrivez une fonction qui prend une chaîne de caractères et renvoie une nouvelle chaîne dont tous les signes de ponctuation ont été supprimés.

const removePonctuation = (string) => string.replaceAll(/[^\w\s]+/g, "");

// 4 Écrivez une fonction qui prend une chaîne de caractères et renvoie un booléen indiquant si la chaîne est une adresse électronique valide ou non.

const CheckValidEmail = (string) =>
  string.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
    ? true
    : false;

// 5 Écrivez une fonction qui prend une chaîne et renvoie une nouvelle chaîne avec la première lettre de chaque mot en majuscule.

const firstLetterMaj = (string) => {
  let array = string.split(" ");
  let tmp = "";
  array.forEach((e) => {
    tmp += e[0].toUpperCase() + e.slice(1) + " ";
  });
  return tmp;
};

// 6 Écrivez une fonction qui prend une chaîne et renvoie une nouvelle chaîne avec tous les chiffres remplacés par des astérisques.

const replaceAllFigure = (string) => {
  string.match(/[0-9]/g).join("").replace(/[0-9]/g, "*");
};

// 7 Écrivez une fonction qui prend une chaîne et renvoie une nouvelle chaîne avec tous les mots de quatre lettres ou plus inversés.

// 8 Écrivez une fonction qui prend une chaîne de caractères et renvoie un booléen indiquant si la chaîne est ou non un mot de passe valide (au moins 8 caractères, dont une lettre majuscule, une lettre minuscule et un chiffre).

const CheckValidPassword = (string) =>
  string.match(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
  )
    ? true
    : false;

export {
  removeVoyell,
  removeNumber,
  removePonctuation,
  CheckValidEmail,
  firstLetterMaj,
  replaceAllFigure,
  CheckValidPassword,
};
