// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//     for (let value of order) {
//         total += value;    
//     }
//   // Change code above this line
//   return total;
// }
// calculateTotalPrice([5,5,5,5]);


// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
// 	for ( let i = min; i <= max; i += 1){
//     numbers.push(i);
//     }
//   // Change code above this line

//   return numbers;
// }

// createArrayOfNumbers(1, 3);
// createArrayOfNumbers(29, 34);

// Variable 1

//// function filterArray(numbers, value) {
//    // Change code below this line
//   const newMassiv = [];
//   for (let i = 0; i < numbers.length; i += 1){
//     if (numbers[i] > value) {
//       newMassiv.push(numbers[i]);
//     }
//  }
//   console.log(newMassiv);
//   return newMassiv;

//   // Change code above this line
// }

// filterArray([12, 24, 8, 41, 76], 38);

// Variable 2

// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];

//   for (const number of numbers){
//   	if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   return filteredNumbers;
//   // Change code above this line
//// }




// function getCommonElements(array1, array2) {
//   // Change code below this line
// const arrayTop = [];
//   for (let element of array1) {
//     if (array2.includes(element)) {
//       arrayTop.push(element);
//     }

//   }

//   console.log(arrayTop);
//   return arrayTop;

//  // Change code above this line
// }

// getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]);


// ПОДСЧЕТ КОЛИЧЕСТВА СВОЙСТВ ОБЪЕКТА

// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line

//   for( const key in object){
//   if(object.hasOwnProperty(key)){
// 	propCount++;
//   }
// }
//   // Change code above this line
//   return propCount;
// }
// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line
//   for ( const product of products){
//    if(productName === product.name){
//    	return product.price;
//    }
//   }

//    	return null;

//   // Change code above this line
// }


// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Пиши код ниже этой строки
//   const totalPrice = 0;
//   for (const product of products){
//     for (const value in Object.values(product)){
//     if(value === productName){
//     totalPrice = product.price * product.quantity;     
//     }  
//     }
//     console.log(totalPrice);

//   }
//     return totalPrice;
//   // Пиши код выше этой строки
// }

// calculateTotalPrice("Radar");


// const bookShelf = {
//   books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
//   updateBook(oldName, newName) {
//     // Change code below this line
// 	const bookIndex = this.books.indexOf(oldName);
// 	this.books.splice(bookIndex,1,newName);

//     // Change code above this line
//   },
// };

// bookShelf.updateBook("Haze", "Dungeon chronicles")

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     // Change code below this line
//     const potionIndex = this.potions.indexOf(potionName);
//     this.potions.splice(potionName,1);
//     // Change code above this line
//   },
// };

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line

//    getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for (const potion of this.potions) {
//     if (potion.name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }
//         this.potions.push(newPotion);
// },
//   removePotion(potionName) {
//     const potionIndex = this.potions.indexOf(potionName);

//     if (potionIndex === -1) {
//       return `Potion ${potionName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1);
//   },
//   updatePotionName(oldName, newName) {
//     const potionIndex = this.potions.indexOf(oldName);

//     if (potionIndex === -1) {
//       return `Potion ${oldName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1, newName);
//   },
//   // Change code above this line
// };


// atTheOldToad.addPotion({ name: 'Stone skin', price: 240 });

// Работа callback функции

// const fn = function (name) {
//     console.log(`Привет ${name}`)
// }

// const functonCall = function (name, callback) {
//     console.log(`Регистрируем гостя ${name}.`);
//     callback(name);
// }

// functonCall('Alex', fn);
// functonCall('Alina', fn);


// function deliverPizza(pizzaName) {
//     return `Доставляем пиццу ${pizzaName}.`;

// }

// function makePizza(pizzaName) {
//   return `Пицца ${pizzaName} готовится, ожидайте...`;
// }

// // Пиши код ниже этой строки
// function makeMessage(pizzaName,callback) {
//   callback(pizzaName);
//     return;
// }
// makeMessage('Роял гранд', makePizza);
// makeMessage('Ультрасыр', deliverPizza);


// function makePizza(pizzaName, callback) {
//   console.log(`Пицца ${pizzaName} готовится, ожидайте...`);
//   callback(pizzaName);
// }

// makePizza('Роял гранд', function deliverPizza(pizzaName) {
//   console.log(`Доставляем пиццу ${pizzaName}.`);
// });
// // Пиши код ниже этой строки

// makePizza('Ультрасыр', function eatPizza(pizzaName){
// 	console.log(`Едим пиццу ${pizzaName}`);
// });


// const pizzaPalace = {
//   pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
//   order(pizzaName,makePizza,onOrderError) {
//   if (pizzaName === this.pizzas){
//     return makePizza(pizzaName);

//   } 
//    ///return onOrderError;
//   },
// };
// // Пиши код выше этой строки

// // Колбэк для onSuccess
// function makePizza(pizzaName) {
//   return `Ваш заказ принят. Готовим пиццу ${pizzaName}.`;
// }

// // Колбэк для onError
// function onOrderError(error) {
//   return `Ошибка! ${error}`;
// }

// // Вызовы метода с колбэками
// pizzaPalace.order('Аль Копчино', makePizza, onOrderError);
// pizzaPalace.order('Четыре нарезона', makePizza, onOrderError);
// pizzaPalace.order('Биг майк', makePizza, onOrderError);
// pizzaPalace.order('Венская', makePizza, onOrderError);

// const arr = [5, 7, 1, 8, 4];
// const sum = arr.reduce(function(accumulator, currentValue) {
//   return accumulator + currentValue;
// });
// // выводит 25
// console.log(sum);

// const strArray = ['JavaScript', 'Python', 'PHP', 'Java', 'C'];

// function mapForEach(arr, fn) {
//   const newArray = [];
//   for(let i = 0; i < arr.length; i++) {
//     newArray.push(
//       fn(arr[i])
//     );
//   }
//   return newArray;
// }
// const lenArray = mapForEach(strArray, function(item) {
//   return item.length;
// });
// // выводит [ 10, 6, 3, 4, 1 ]
// console.log(lenArray);

// const customer = {
//   username: 'Mango',
//   balance: 24000,
//   discount: 0.1,
//   orders: ['Burger', 'Pizza', 'Salad'],
//   // Пиши код ниже этой строки
//   getBalance() {
//     return this.balance;
//   },
//   getDiscount() {
//     return this.discount;
//   },
//   setDiscount(value) {
//     this.discount = value;
//   },
//   getOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost - cost * this.discount;
//     this.orders.push(order);
//   },
//   // Пиши код выше этой строки
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, 'Steak');
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ['Burger', 'Pizza', 'Salad', 'Steak']


// const orders = [
//   { email: 'solomon@topmail.ua', dish: 'Burger' },
//   { email: 'artemis@coldmail.net', dish: 'Pizza' },
//   { email: 'jacob@mail.com', dish: 'Taco' },
// ];

// // Пиши код ниже этой строки
// function composeMessage(position) {
// return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position + 1}-й в очереди.`;
// }

// const messages = [];

// for (let i = 0; i < orders.length; i++){
// 	messages.push(composeMessage.call(orders[i],i));
// }


// const pizzaPalace = {
//   company: 'Pizza Palace',
// };

// const burgerShack = {
//   company: 'Burger Shack',
// };

// function composeMessage(customerName) {
//   return `${customerName}, всегда рады вас видеть в «${this.company}».`;
// }
// // Пиши код ниже этой строки

// const pizzaPalaceComposer = composeMessage.bind(pizzaPalace);
// const pizzaPalaceMessage = pizzaPalaceComposer('Манго');

// const burgerShackComposer = composeMessage.bind(burgerShack);
// const burgerShackMessage = burgerShackComposer('Поли');

// const service = {
//   mailingList: ['mango@mail.com', 'poly@hotmail.de', 'ajax@jmail.net'],
//   subscribe(email) {
//     this.mailingList.push(email);
//     return `Почта ${email} добавлена в рассылку.`;
//   },
//   unsubscribe(email) {
//     this.mailingList = this.mailingList.filter((e) => e !== email);
//     return `Почта ${email} удалена из рассылки.`;
//   },
// };

// function logAndInvokeAction(email, action) {
//   console.log(`Выполняем действие с ${email}.`);
//   return action(email);
// }

// const firstInvoke = logAndInvokeAction('kiwi@mail.uk', service.subscribe.bind(service));
// console.log(firstInvoke);
// // Почта kiwi@mail.uk добавлена в рассылку.

// console.log(service.mailingList);
// /* ['mango@mail.com', 
//     'poly@hotmail.de', 
//     'ajax@jmail.net', 
//     'kiwi@mail.uk']*/
// const secondInvoke = logAndInvokeAction('poly@hotmail.de', service.unsubscribe.bind(service));
// console.log(secondInvoke);
// // Почта poly@hotmail.de удалена из рассылки.

// console.log(service.mailingList); // ['mango@mail.com', 'ajax@jmail.net', 'kiwi@mail.uk']