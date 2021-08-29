class Warrior {
    constructor({nickName, experience} = {}){
        this.nickName = nickName;
        this.experience = experience;
        
    }

    useWeapon(enemy,weapon){
        this.enemy = enemy;
        this.weapon = weapon;
        console.log(`${this.nickName} берет ${this.weapon} и атакует ${this.enemy}`);
    }

    getExperience(exp){
        this.experience = exp + this.experience ;
        
        console.log(`${this.nickName} получает ${this.experience}`)
    }

}


const toy = new Warrior({nickName: 'Alex',experience: 0});

console.log(toy);
// toy.useWeapon('Clown','Blunt');
// console.log(toy);
// toy.getExperience(1000);
// console.log(toy);
// toy.getExperience(1000);
console.log('Warrior Alex получает новый класс');


class Wurlock extends Warrior{
    constructor({nickName,experience,skills = ('Blow from above')} ={}){
        super({nickName,experience});
        this.skills = skills;
    }

    useSkills(enemy){
        // this.skills = skill;
        this.enemy = enemy;
        console.log(`${this.nickName} использует ${this.skills} и атакует ${this.enemy}`)
    }

}
const toyWar = new Wurlock({nickName: 'Alex',experience: 0});

console.log(toyWar);
toyWar.useSkills('Clown');