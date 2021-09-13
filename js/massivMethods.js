// const numbers = [2, 4, 5, 78, 23, 43];
// let result = 0;
// numbers.forEach(num => {result = result + num} );
// console.log(result);

// function filterArray(numbers, value) {
//     const filteredNumbers = [];
//     // Пиши код ниже этой строки
//   numbers.filter(num => num > value).forEach(num => {filteredNumbers.push(num)});
   
  
//     // Пиши код выше этой строки
//     return filteredNumbers;
//   }



// function getCommonElements(firstArray, secondArray) {
//     const commonElements = [];
//     // Пиши код ниже этой строки
//   firstArray.forEach(num => {
//       if (secondArray.includes(num)) {
//           commonElements.push(num);
//    }
//   })
  
  
  
//     for (let i = 0; i < firstArray.length; i += 1) {
//       if (secondArray.includes(firstArray[i])) {
//         commonElements.push(firstArray[i]);
//       }
//     }
  
//     return commonElements;
//     // Пиши код выше этой строки
//   }

// function changeEven(numbers, value) {
//     // Пиши код ниже этой строки
//   const newArray = [];
//     numbers.forEach((num) => {
//         if (num % 2 === 0) {
//             newArray.push(num + value)
//         }
//         else { newArray.push(num) }
   
//     }); return newArray;
  
  
  
//   console.log(newArray);
//     // Пиши код выше этой строки
//   }

// const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];
// // Пиши код ниже этой строки
// const planetsLengths = planets.map(planet => planet.length);

// Пиши код ниже этой строки
// const getUserNames = users => {
//     users.map(user => user.name)
// 	return;
//   };
  // Пиши код выше этой строки


//   const books = [
//     {
//       title: 'Последнее королевство',
//       author: 'Бернард Корнуэлл',
//       genres: ['приключения', 'историческое']
//     },
//     {
//       title: 'На берегу спокойных вод',
//       author: 'Роберт Шекли',
//       genres: ['фантастика', 'мистика']
//     },
//     {
//       title: 'Красна как кровь',
//       author: 'Ли Танит',
//       genres: ['ужасы', 'мистика', 'приключения']
//     }
//   ];
//   // Пиши код ниже этой строки
//   const allGenres = books.flatMap( book => book.genres);
// const uniqueGenres = allGenres.filter(( genre, index, array ) => array.indexOf(genre) === index);


// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//   { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
// ];

// const MIN_RATING = 8;
// const AUTHOR = 'Бернард Корнуэлл';
// // Пиши код ниже этой строки

// const topRatedBooks = books.filter(book => book.rating >= MIN_RATING );
// const booksByAuthor = books.filter(book => book.author === AUTHOR);

// Пиши код ниже этой строки
// const getFriends = (users) => {
//   return users.flatMap(user => user.friends).filter((friend, index, array) => array.indexOf(friend) === index);
// };


// Пиши код ниже этой строки
// const players = [
//   { name: 'Манго', playtime: 1270, gamesPlayed: 4 },
//   { name: 'Поли', playtime: 469, gamesPlayed: 2 },
//   { name: 'Аякс', playtime: 690, gamesPlayed: 3 },
//   { name: 'Киви', playtime: 241, gamesPlayed: 1 },
// ];
// // Пиши код ниже этой строки

// const totalAveragePlaytimePerGame = players.reduce((total, player) =>  total + player.playtime / player.gamesPlayed , 0);
// console.log(totalAveragePlaytimePerGame);

// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 8.14 },
//   { title: 'Сны В Ведьмином Доме', author: 'Говард Лавкрафт', rating: 8.67 }
// ];
// const MIN_BOOK_RATING = 8;
// // Пиши код ниже этой строки

// const names = books.filter(rat=> rat.rating > MIN_BOOK_RATING).sort((a,b)=> a.author.localeCompare(b.author)).map(books => books.author);
// console.log(names);

// Пиши код ниже этой строки
// const getNamesSortedByFriendCount = users => {
//   return  [...users].sort((a,b) => a.friends.length - b.friends.length).map(user=>user.name);
// };
// Пиши код выше этой строки

// Пиши код ниже этой строки
const users = [
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    gender: 'male'
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    gender: 'female'
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    gender: 'male'
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    gender: 'female'
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong', 'Adrian Cross'],
    isActive: true,
    balance: 3951,
    gender: 'male'
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman', 'Adrian Cross', 'Solomon Fokes'],
    isActive: false,
    balance: 1498,
    gender: 'male'
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    gender: 'female'
  }
];

// const getSortedFriends = (users) => {
  // return users.flatMap(user => user.friends)
  // .filter((friend, index, array) => array.indexOf(friend) === index)
  // .sort((a, b) => a.localeCompare(b));

//  };
// // Пиши код выше этой строки
// console.log(getSortedFriends);

// Дополни функцию getSortedFriends(users) так, чтобы она возвращала массив уникальных имён друзей (свойство friends) отсортированный по алфавиту .


// const getTotalBalanceByGender = (users, gender) => {
//   return users.filter(user => user.gender = gender).reduce((total, balance) => total + balance.balance, 0);
// };

// const totalBalance = users.filter(user => user.gender = gender).reduce((total, balance) => total + balance.balance, 0);
// console.log(totalBalance);

// console.log(getTotalBalanceByGender(users,'male'));
// function makeMessage (name, price) {
//   // Change code below this line
//    const message = ` You picked ${name}, price per item is ${price} credits`;
//   // Change code above this line
//   console.log(message);
//   return message;
// };

// makeMessage('Radar', 6150);
// makeMessage('Scanner', 3500);

// function checkIfCanAccessContent(subType) {
//   const canAccessContent = subType === "pro" || subType === 'vip'; // Change this line

//   return canAccessContent;
// }

// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line

//   let ode = ordered > available ? message = "Not enough goods in stock!" :
//       message = "The order is accepted, our manager will contact you";
  

//   // Change code above this line
//   return message;
// }

// function calculateTotal(number) {
//  // Change code below this line
//   let result = 0;
//   for (let i = 0; i < number; i += 1){
//   return( result += i);
//   }

// return result;
//   // Change code above this line
// }


// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon = 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line

// const { today:
//   { low,
//     high,
//     icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" },
//   tomorrow: {
//     low,
//     high,
//     icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" },
// } = forecast;

// function makeTask(data) {
//   const completed = false;
//   const category = 'General';
//   const priority = 'Normal';
//   // Change code below this line
//   const own = {category : 'General',priority : 'Normal', ...text,completed};
//   return own;
//   // Change code above this line
// }


// makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" });

// Change code below this line
// function addOverNum(...args) {
//   let total = 0;

//   for (const arg of args) {
//     if(arg > arg[0]){ 
//       total += arg;
//     }
//   }
// return total;
//   // Change code above this line
// }
// console.log(addOverNum(50, 15, 27));
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));

// function deliverPizza(pizzaName) {
//   return `Доставляем пиццу ${pizzaName}.`;
// }

// function makePizza(pizzaName) {
//   return `Пицца ${pizzaName} готовится, ожидайте...`;
// }

// // Пиши код ниже этой строки
// function makeMessage(pizzaName,callback) {
  
//   return callback(pizzaName);
// }
// console.log(makeMessage('Роял гранд', makePizza));

// function arrayDiff(a, b) {
//   const c = []
//   if (a.includes(b)) {
//     c = a.splice(b, 1);
//     return;
// }


// }

// console.log(arrayDiff([1,2],[1])) //== [2]


// console.log(arrayDiff([1,2,2,2,3],[2]))// == [1,3]

// Setup
function checkObj(obj, checkProp) {
  // Only change code below this line

  if(obj.hasOwnProperty(checkProp)){
    return checkProp;
  } 
  return "Not Found";
  // Only change code above this line
}

console.log(checkObj({ gift: "pony", pet: "kitten", bed: "sleigh" }, "gift"));