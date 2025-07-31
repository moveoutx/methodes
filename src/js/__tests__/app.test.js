import {
  Character,
  Bowman,
  Swordsman,
  Magician,
  Daemon,
  Undead,
  Zombie
} from '../app.js';

describe('Character Class', () => {
  test('should create a character with valid parameters', () => {
    const char = new Character('ValidName', 'Bowman');
    expect(char.name).toBe('ValidName');
    expect(char.type).toBe('Bowman');
    expect(char.health).toBe(100);
    expect(char.level).toBe(1);
  });

  test('should throw error for invalid name length (<2)', () => {
    expect(() => new Character('A', 'Bowman')).toThrow('Имя должно быть строкой от 2 до 10 символов');
  });

  test('should throw error for invalid name length (>10)', () => {
    expect(() => new Character('VeryLongNameHere', 'Bowman')).toThrow('Имя должно быть строкой от 2 до 10 символов');
  });

  test('should throw error for invalid type', () => {
    expect(() => new Character('ValidName', 'InvalidType')).toThrow('Неверный тип персонажа');
  });
});

describe('Inherited Classes', () => {
  test('Bowman should have correct stats', () => {
    const bowman = new Bowman('Legolas');
    expect(bowman.type).toBe('Bowman');
    expect(bowman.attack).toBe(25);
    expect(bowman.defence).toBe(25);
  });

  test('Swordsman should have correct stats', () => {
    const swordsman = new Swordsman('Aragorn');
    expect(swordsman.type).toBe('Swordsman');
    expect(swordsman.attack).toBe(40);
    expect(swordsman.defence).toBe(10);
  });

  test('Magician should have correct stats', () => {
    const magician = new Magician('Gandalf');
    expect(magician.type).toBe('Magician');
    expect(magician.attack).toBe(10);
    expect(magician.defence).toBe(40);
  });

  test('Daemon should have correct stats', () => {
    const daemon = new Daemon('Balrog');
    expect(daemon.type).toBe('Daemon');
    expect(daemon.attack).toBe(10);
    expect(daemon.defence).toBe(40);
  });

  test('Undead should have correct stats', () => {
    const undead = new Undead('Nazgul');
    expect(undead.type).toBe('Undead');
    expect(undead.attack).toBe(25);
    expect(undead.defence).toBe(25);
  });

  test('Zombie should have correct stats', () => {
    const zombie = new Zombie('Walker');
    expect(zombie.type).toBe('Zombie');
    expect(zombie.attack).toBe(40);
    expect(zombie.defence).toBe(10);
  });
});

describe('Character Properties', () => {
  let character;

  beforeEach(() => {
    character = new Character('TestName', 'Bowman');
  });

  test('should have health property set to 100', () => {
    expect(character.health).toBe(100);
  });

  test('should have level property set to 1', () => {
    expect(character.level).toBe(1);
  });

  test('should have name property', () => {
    expect(character.name).toBe('TestName');
  });

  test('should have type property', () => {
    expect(character.type).toBe('Bowman');
  });

  test('should have attack property', () => {
    expect(character.attack).toBeDefined();
  });

  test('should have defence property', () => {
    expect(character.defence).toBeDefined();
  });

  test('should throw error when name is not a string', () => {
    expect(() => new Character(123, 'Bowman')).toThrow('Имя должно быть строкой от 2 до 10 символов');
  });
});

describe('levelUp()', () => {
  let character;

  beforeEach(() => {
    character = new Character('Test', 'Bowman');
  });

  test('should increase level by 1', () => {
    character.levelUp();
    expect(character.level).toBe(2);
  });

  test('should increase attack and defence by 20%', () => {
    const originalAttack = character.attack;
    const originalDefence = character.defence;

    character.levelUp();

    expect(character.attack).toBe(Math.round(originalAttack * 1.2));
    expect(character.defence).toBe(Math.round(originalDefence * 1.2));
  });

  test('should throw error when health is 0', () => {
    character.health = 0;
    expect(() => character.levelUp()).toThrow('Нельзя повысить уровень умершего персонажа');
  });
});

describe('damage()', () => {
  let character;

  beforeEach(() => {
    character = new Character('Test', 'Bowman');
  });

  test('should reduce health based on defence', () => {
    character.defence = 50;
    character.health = 100;
    character.damage(40);
    expect(character.health).toBe(80); // 40 * (1 - 0.5) = 20 damage
  });

  test('should not reduce health below 0', () => {
    character.defence = 0;
    character.health = 10;
    character.damage(20);
    expect(character.health).toBe(0);
  });
});
