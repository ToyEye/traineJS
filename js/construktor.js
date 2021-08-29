// const Auto = function ({ mark, color, year, might } = {}) {
//     this.mark = mark;
//     this.color = color;
//     this.year = year;
//     this.might = might;

   
// };

// Auto.prototype.changeColor = function (newColor) {
//     this.color = newColor;
// }

// const audi = new Auto({ mark:'audi', color: 'black',year: 1980,might: 2.4});
// console.log(audi);

// const bmw = new Auto({ mark:'BMW',color: 'yellow',year: 2010,might: 2.4});
// console.log(bmw);

// const mersedes = new Auto({ mark:'Merseedes',color: 'White',year: 2016, might:1.8 });
// console.log(mersedes);

// mersedes.changeColor('Red')
// console.log(mersedes);


// const salon = [];

// salon.push(audi, bmw, mersedes);
// console.log(salon);

// function Storage(items){
// this.items = items;
// }

// Storage.prototype.getItems = function(){
// return this.items;
// } 

// Storage.prototype.addItem = function(newItem){
// this.items.push(newItem);
// }

// Storage.prototype.removeItem = function(item){
//   const indexItem = this.items.indexOf(item);
// this.items.splice(indexItem,1);
// }


// // Пиши код выше этой строки
// const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Антигравитатор']);
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
// storage.addItem('Дроид');
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
// storage.removeItem('Пролонгер');
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]

// function StringBuilder(baseValue){
//     this.value = baseValue;
//     }
//     StringBuilder.prototype.getValue = function(){return this.value};
//     StringBuilder.prototype.padStart = function(str){
//        this.value = str + this.value  ;
//     }
//     StringBuilder.prototype.padEnd = function(str){
//     this.value += str ;
//     }
//     StringBuilder.prototype.padBoth = function(str){
//     this.value = str + this.value + str;
//     }
    
    
//     // Пиши код выше этой строки
//     const builder = new StringBuilder('.');
//     console.log(builder.getValue()); // '.'
//     builder.padStart('^');
//     console.log(builder.getValue()); // '^.'
//     builder.padEnd('^');
//     console.log(builder.getValue()); // '^.^'
//     builder.padBoth('=');
//     console.log(builder.getValue()); // '=^.^='


// class Car { 
//     constructor( {brand, model, price} ) {
//    this.brand = brand;
//    this.model = model;
//    this.price = price;
//  }
//  }


// class Storage {
//     #items;
//     constructor(items){
//         this.#items = items;
//     }
//     getItems() {
//         return this.#items;
//     }
//     addItem(newItem){
//         this.#items.push(newItem);
//     }
//     removeItem(item){
//         const itemIndex = this.#items.indexOf(item);
//     this.#items.splice(itemIndex, 1);
//     }
//   }
  
  
  
//   // Пиши код выше этой строки
//   const storage = new Storage(["Нанитоиды", "Пролонгер", "Антигравитатор"]);
//   console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
//   storage.addItem("Дроид");
//   console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
//   storage.removeItem("Пролонгер");
//   console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]
  


// class StringBuilder{
//     #value;
//     constructor(baseValue){
//         this.#value = baseValue;
//     }
//     getValue() {
//         return this.#value;
//     }
//     padEnd(str) {
//         this.#value += str; 
//     }

//     padStart(str) {
//         this.#value = str + this.#value;
//     }

//     padBoth(str) {
//         this.#value = str + this.#value + str;
//     }
// }
 
//   // Пиши код выше этой строки
//   const builder = new StringBuilder('.');
//   console.log(builder.getValue()); // '.'
//   builder.padStart('^');
//   console.log(builder.getValue()); // '^.'
//   builder.padEnd('^');
//   console.log(builder.getValue()); // '^.^'
//   builder.padBoth('=');
//   console.log(builder.getValue()); // '=^.^='

// class Car {
//     // Пиши код ниже этой строки
//     static MAX_PRICE = 50000;
//     #price;
  
//     constructor({ price }) {
//       this.#price = price;
//     }
  
//     get price() {
//       return this.#price;
//     }
  
//     set price(newPrice) {
//       if (Car.MAX_PRICE <= newPrice){
//       return;
//       }
//       this.#price = newPrice;
//     }
//     // Пиши код выше этой строки
//   }
  
//   const audi = new Car({price: 35000});
//   console.log(audi.price); // 35000
  
//   audi.price = 49000;
//   console.log(audi.price); // 49000
  
//   audi.price = 51000;
//   console.log(audi.price); // 49000

// class Car {
//     static #MAX_PRICE = 50000;
//     // Пиши код ниже этой строки
//       static checkPrice(price){
//        if(price > Car.#MAX_PRICE){
//        return 'Внимание! Цена превышает допустимую.';
//        }
//         return 'Всё хорошо, цена в порядке.';
//       }
//     // Пиши код выше этой строки
//     constructor({ price }) {
//       this.price = price;
//     }
//   }
  
//   const audi = new Car({ price: 36000 });
//   const bmw = new Car({ price: 64000 });
  
//   console.log(Car.checkPrice(audi.price)); // Всё хорошо, цена в порядке.
//   console.log(Car.checkPrice(bmw.price)); // Внимание! Цена превышает допустимую.

// class User {
//     email;
  
//     constructor(email) {
//       this.email = email;
//     }
  
//     get email() {
//       return this.email;
//     }
  
//     set email(newEmail) {
//       this.email = newEmail;
//     }
//   }
//   // Пиши код ниже этой строки
// class Admin extends User {
//     static AccessLevel = {
//         BASIC: 'basic',
//         SUPERUSER: 'superuser',

//     }

// }

// class User {
//     email;
  
//     constructor(email) {
//       this.email = email;
//     }
  
//     get email() {
//       return this.email;
//     }
  
//     set email(newEmail) {
//       this.email = newEmail;
//     }
//   }
  
//   class Admin extends User {
//     // Пиши код ниже этой строки
//     accessLevel;

//     static AccessLevel = {
//       BASIC: 'basic',
//       SUPERUSER: 'superuser'
//     };
//     constructor({email,accessLevel}){
//         super(email);
//         this.accessLevel = accessLevel;
//     }
//     // Пиши код выше этой строки
//   }
  
//   const mango = new Admin({
//     email: 'mango@mail.com',
//     accessLevel: Admin.AccessLevel.SUPERUSER
//   });
  
//   console.log(mango.email); // mango@mail.com
//   console.log(mango.accessLevel); // superuser

// class User {
//     email;
  
//     constructor(email) {
//       this.email = email;
//     }
  
//     get email() {
//       return this.email;
//     }
  
//     set email(newEmail) {
//       this.email = newEmail;
//     }
//   }
//   class Admin extends User {
//     // Пиши код ниже этой строки
//     blacklistedEmails = [];

//     static AccessLevel = {
//       BASIC: 'basic',
//       SUPERUSER: 'superuser'
//     };
  
//     accessLevel;
  
//     constructor({ email, accessLevel }) {
//       super(email);
//       this.accessLevel = accessLevel;
//     }
  
//     blacklist(email){
// this.blacklistedEmails.push(email);
//     }

//     isBlacklisted(email){

//         if (this.blacklistedEmails.includes(email)){

//         return true;
//         };
//         return false ;
//     }
//     // Пиши код выше этой строки
//   }
  
//   const mango = new Admin({
//     email: 'mango@mail.com',
//     accessLevel: Admin.AccessLevel.SUPERUSER
//   });
  
//   console.log(mango.email); // mango@mail.com
//   console.log(mango.accessLevel); // superuser
//   mango.blacklist('poly@mail.com');
//   console.log(mango.blacklistedEmails); // 'poly@mail.com'
//   console.log(mango.isBlacklisted('mango@mail.com')); //  false
//   console.log(mango.isBlacklisted('poly@mail.com')); // true 