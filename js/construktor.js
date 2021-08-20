const Auto = function ({ mark, color, year, might } = {}) {
    this.mark = mark;
    this.color = color;
    this.year = year;
    this.might = might;

   
};

Auto.prototype.changeColor = function (newColor) {
    this.color = newColor;
}

const audi = new Auto({ mark:'audi', color: 'black',year: 1980,might: 2.4});
console.log(audi);

const bmw = new Auto({ mark:'BMW',color: 'yellow',year: 2010,might: 2.4});
console.log(bmw);

const mersedes = new Auto({ mark:'Merseedes',color: 'White',year: 2016, might:1.8 });
console.log(mersedes);

mersedes.changeColor('Red')
console.log(mersedes);


const salon = [];

salon.push(audi, bmw, mersedes);
console.log(salon);