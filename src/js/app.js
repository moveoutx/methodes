
class Character {
  constructor(name, type) {
    if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
      throw new Error('Имя должно быть строкой от 2 до 10 символов');
    }

    const validTypes = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    if (!validTypes.includes(type)) {
      throw new Error('Неверный тип персонажа');
    }

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;

    // Устанавливаем атаку и защиту
    switch (type) {
      case 'Bowman':
        this.attack = 25;
        this.defence = 25;
        break;
      case 'Swordsman':
        this.attack = 40;
        this.defence = 10;
        break;
      case 'Magician':
        this.attack = 10;
        this.defence = 40;
        break;
      case 'Undead':
        this.attack = 25;
        this.defence = 25;
        break;
      case 'Zombie':
        this.attack = 40;
        this.defence = 10;
        break;
      case 'Daemon':
        this.attack = 10;
        this.defence = 40;
        break;
      default:
        throw new Error('Неизвестный тип персонажа');
    }
  }

  levelUp() {
    if (this.health <= 0) {
      throw new Error('Нельзя повысить уровень умершего персонажа');
    }

    this.level += 1;
    this.attack = Math.round(this.attack * 1.2);
    this.defence = Math.round(this.defence * 1.2);
    this.health = 100;
  }

  damage(points) {
    if (this.health <= 0) return;

    const damageTaken = points * (1 - this.defence / 100);
    this.health -= damageTaken;
    this.health = Math.max(this.health, 0);
  }
}

class Bowman extends Character {
  constructor(name) {
    super(name, 'Bowman');
  }
}

class Swordsman extends Character {
  constructor(name) {
    super(name, 'Swordsman');
  }
}

class Magician extends Character {
  constructor(name) {
    super(name, 'Magician');
  }
}

class Daemon extends Character {
  constructor(name) {
    super(name, 'Daemon');
  }
}

class Undead extends Character {
  constructor(name) {
    super(name, 'Undead');
  }
}

class Zombie extends Character {
  constructor(name) {
    super(name, 'Zombie');
  }
}

module.exports = {
  Character,
  Bowman,
  Swordsman,
  Magician,
  Daemon,
  Undead,
  Zombie
};


