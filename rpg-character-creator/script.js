function Character(name, speciality) {
    this.name = name;
    this.speciality = speciality;
    this.strength = Math.ceil((Math.random() * 3) + 3);
    this.dexterity = Math.ceil((Math.random() * 3) + 3);
    this.intelligence = Math.ceil((Math.random() * 3) + 3);
    this.charisma = Math.ceil((Math.random() * 3) + 3);
    this.constitution = Math.ceil((Math.random() * 3) + 3);
    this.willpower = Math.ceil((Math.random() * 3) + 3);

}

var meleeInGame = [
    {
        item : 'helmet',
        strength: 2,
        dexterity: 0,
        intelligence: 0,
        charisma: 1,
        constitution: 2,
        willpower: 1
    },
    {
        item: 'chest armor',
        strength: 2,
        dexterity: 1,
        intelligence: 0,
        charisma: 1,
        constitution: 2,
        willpower: 1
    },
    {
        item: 'hand armor',
        strength: 1,
        dexterity: 0,
        intelligence: 0,
        charisma: 1,
        constitution: 1,
        willpower: 0
    },
    {
        item: 'leg armor',
        strength: 1,
        dexterity: 0,
        intelligence: 1,
        charisma: 1,
        constitution: 2,
        willpower: 1
    },
    {
        item: 'necklace',
        strength: 2,
        dexterity: 1,
        intelligence: 1,
        charisma: 0,
        constitution: 1,
        willpower: 1
    },
    {
        item: 'ring',
        strength: 1,
        dexterity: 1,
        intelligence: 1,
        charisma: 0,
        constitution: 1,
        willpower: 1
    },
    {
        item: 'ring',
        strength: 1,
        dexterity: 1,
        intelligence: 1,
        charisma: 0,
        constitution: 1,
        willpower: 1
    },
    {
        item: 'weapon',
        strength: 3,
        dexterity: 1,
        intelligence: 1,
        charisma: 2,
        constitution: 3,
        willpower: 2
    },
    {
        item: 'shield',
        strength: 2,
        dexterity: 2,
        intelligence: 1,
        charisma: 2,
        constitution: 2,
        willpower: 2
    }
];
var magicInGame = [
    {
        item : 'helmet',
        strength: 0,
        dexterity: 0,
        intelligence: 2,
        charisma: 1,
        constitution: 2,
        willpower: 1
    },
    {
        item: 'chest armor',
        strength: 0,
        dexterity: 1,
        intelligence: 2,
        charisma: 1,
        constitution: 2,
        willpower: 1
    },
    {
        item: 'hand armor',
        strength: 0,
        dexterity: 0,
        intelligence: 1,
        charisma: 1,
        constitution: 1,
        willpower: 1
    },
    {
        item: 'leg armor',
        strength: 1,
        dexterity: 0,
        intelligence: 2,
        charisma: 1,
        constitution: 2,
        willpower: 1
    },
    {
        item: 'necklace',
        strength: 1,
        dexterity: 1,
        intelligence: 2,
        charisma: 0,
        constitution: 1,
        willpower: 1
    },
    {
        item: 'ring',
        strength: 1,
        dexterity: 1,
        intelligence: 1,
        charisma: 0,
        constitution: 1,
        willpower: 1
    },
    {
        item: 'ring',
        strength: 1,
        dexterity: 1,
        intelligence: 1,
        charisma: 0,
        constitution: 1,
        willpower: 1
    },
    {
        item: 'weapon',
        strength: 1,
        dexterity: 1,
        intelligence: 3,
        charisma: 2,
        constitution: 3,
        willpower: 2
    },
    {
        item: 'shield',
        strength: 1,
        dexterity: 1,
        intelligence: 2,
        charisma: 2,
        constitution: 2,
        willpower: 2
    }
];
var rangeInGame = [
    {
        item : 'helmet',
        strength: 0,
        dexterity: 2,
        intelligence: 0,
        charisma: 1,
        constitution: 2,
        willpower: 1
    },
    {
        item: 'chest armor',
        strength: 1,
        dexterity: 2,
        intelligence: 0,
        charisma: 1,
        constitution: 2,
        willpower: 1
    },
    {
        item: 'hand armor',
        strength: 0,
        dexterity: 1,
        intelligence: 0,
        charisma: 1,
        constitution: 1,
        willpower: 0
    },
    {
        item: 'leg armor',
        strength: 1,
        dexterity: 1,
        intelligence: 0,
        charisma: 1,
        constitution: 2,
        willpower: 1
    },
    {
        item: 'necklace',
        strength: 1,
        dexterity: 2,
        intelligence: 1,
        charisma: 0,
        constitution: 1,
        willpower: 1
    },
    {
        item: 'ring',
        strength: 1,
        dexterity: 1,
        intelligence: 1,
        charisma: 0,
        constitution: 1,
        willpower: 1
    },
    {
        item: 'ring',
        strength: 1,
        dexterity: 1,
        intelligence: 1,
        charisma: 0,
        constitution: 1,
        willpower: 1
    },
    {
        item: 'weapon',
        strength: 2,
        dexterity: 5,
        intelligence: 2,
        charisma: 3,
        constitution: 5,
        willpower: 3
    }
];


var khaleel = new Character('Khaleel', 'magic');
