// 1 Créez un tableau contenant les nombres de 1 à 10. Écrivez un programme qui affiche chaque élément du tableau à la console.

const showArray = (array) => array.map((e) => e);

// 2 Créez un tableau contenant les jours de la semaine. Écrivez un programme qui affiche le premier jour de la semaine à la console.

const showFirstWeekDay = () => {
  const array = [
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
    "Dimanche",
  ];

  return array[0];
};

// 3 Créez un tableau contenant les nombres pairs de 2 à 10. Écrivez un programme qui calcule la somme des nombres du tableau et l'affiche à la console.

const calcSumArray = () => {
  let array = [];
  for (let i = 0; i <= 10; i++) {
    if (i % 2 === 0) {
      array.push(i);
    }
  }
  return array.reduce((e, a) => e + a);
};

// 4 Créez un tableau contenant les noms de cinq fruits. Écrivez un programme qui ajoute un sixième fruit à la fin du tableau et affiche le tableau complet à la console.

const addElementToArray = (array, element) => [...array, element];

// 5 Créez un tableau contenant les notes de cinq étudiants. Écrivez un programme qui calcule la moyenne des notes et l'affiche à la console.

const calcSumStudentArray = () => [16, 13, 18, 12, 15].reduce((e, a) => e + a);

// 6 Créez un tableau contenant des noms d'oiseaux. Écrivez un programme qui recherche si un nom spécifique d'oiseau est présent dans le tableau.

const checkBirdName = (name) => ["pie", "corbeau"].includes(name);

// 7 Créez un tableau contenant des noms de pays. Écrivez un programme qui trie le tableau par ordre alphabétique et l'affiche à la console.

const sortCountryName = () =>
  ["France", "Algerie", "Suriname", "Bhouton"].sort();

// 8 Créez un tableau contenant les noms des mois de l'année. Écrivez un programme qui affiche le troisième élément du tableau.

const showThristMonth = () => {
  const array = [
    "Janvier",
    "Févirer",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Aout",
    "Septembre",
    "Octobre",
    "Novembre",
    "Decembre",
  ];

  return array[2];
};

// 9 Créez un tableau contenant des nombres aléatoires. Écrivez un programme qui calcule la valeur minimale et la valeur maximale du tableau et les affiche à la console.

const randomNumber = () => {
  const array = [1, 8, 3, 9, 6];

  return `Valeur minimal : ${Math.min(...array)} Valeur maximal : ${Math.max(
    ...array
  )}`;
};

// 10 Créez un tableau contenant des phrases. Écrivez un programme qui cherche la phrase la plus longue du tableau et l'affiche à la console.

const CheckLongestSentence = () => {
  const array = ["Hello world !", "Salut ça va ?", "Aujourd'hui c'est saumon"];

  return array.sort((e, a) => a.length - e.length)[0];
};

export {
  showArray,
  showFirstWeekDay,
  calcSumArray,
  addElementToArray,
  calcSumStudentArray,
  checkBirdName,
  sortCountryName,
  showThristMonth,
  CheckLongestSentence,
  randomNumber,
};
