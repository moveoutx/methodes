import {
  Bowman,
  Swordsman,
  Magician,
  Daemon,
  Undead,
  Zombie
} from '../index.js';

describe('Character Classes', () => {
  describe('Bowman', () => {
    test('should create Bowman with correct stats', () => {
      const bowman = new Bowman('Legolas');
      expect(bowman.name).toBe('Legolas');
      expect(bowman.type).toBe('Bowman');
      expect(bowman.health).toBe(100);
      expect(bowman.level).toBe(1);
      expect(bowman.attack).toBe(25);
      expect(bowman.defence).toBe(25);
    });
  });

  describe('Swordsman', () => {
    test('should create Swordsman with correct stats', () => {
      const swordsman = new Swordsman('Aragorn');
      expect(swordsman.name).toBe('Aragorn');
      expect(swordsman.type).toBe('Swordsman');
      expect(swordsman.health).toBe(100);
      expect(swordsman.level).toBe(1);
      expect(swordsman.attack).toBe(40);
      expect(swordsman.defence).toBe(10);
    });
  });

  describe('Magician', () => {
    test('should create Magician with correct stats', () => {
      const magician = new Magician('Gandalf');
      expect(magician.name).toBe('Gandalf');
      expect(magician.type).toBe('Magician');
      expect(magician.health).toBe(100);
      expect(magician.level).toBe(1);
      expect(magician.attack).toBe(10);
      expect(magician.defence).toBe(40);
    });

    test('Magician damage calculation', () => {
      const magician = new Magician('Merlin');
      magician.damage(50);
      expect(magician.health).toBe(70); // 50 * (1 - 0.4) = 30 damage
    });
  });

  describe('Daemon', () => {
    test('should create Daemon with correct stats', () => {
      const daemon = new Daemon('Balrog');
      expect(daemon.name).toBe('Balrog');
      expect(daemon.type).toBe('Daemon');
      expect(daemon.health).toBe(100);
      expect(daemon.level).toBe(1);
      expect(daemon.attack).toBe(10);
      expect(daemon.defence).toBe(40);
    });

    test('Daemon levelUp works correctly', () => {
      const daemon = new Daemon('Azmodan');
      daemon.levelUp();
      expect(daemon.level).toBe(2);
      expect(daemon.attack).toBe(12); // 10 * 1.2
      expect(daemon.defence).toBe(48); // 40 * 1.2
    });
  });

  describe('Undead', () => {
    test('should create Undead with correct stats', () => {
      const undead = new Undead('Nazgul');
      expect(undead.name).toBe('Nazgul');
      expect(undead.type).toBe('Undead');
      expect(undead.health).toBe(100);
      expect(undead.level).toBe(1);
      expect(undead.attack).toBe(25);
      expect(undead.defence).toBe(25);
    });

    test('Undead cannot levelUp when dead', () => {
      const undead = new Undead('Wight');
      undead.health = 0;
      expect(() => undead.levelUp()).toThrow('Нельзя повысить уровень умершего персонажа');
    });
  });

  describe('Zombie', () => {
    test('should create Zombie with correct stats', () => {
      const zombie = new Zombie('Walker');
      expect(zombie.name).toBe('Walker');
      expect(zombie.type).toBe('Zombie');
      expect(zombie.health).toBe(100);
      expect(zombie.level).toBe(1);
      expect(zombie.attack).toBe(40);
      expect(zombie.defence).toBe(10);
    });

    test('Zombie health cannot go below 0', () => {
      const zombie = new Zombie('Crawler');
      zombie.damage(200);
      expect(zombie.health).toBe(0);
    });
  });

  describe('Common Character functionality', () => {
    let character;

    beforeEach(() => {
      character = new Bowman('Test');
    });

    test('levelUp() should increase stats', () => {
      character.levelUp();
      expect(character.level).toBe(2);
      expect(character.attack).toBe(30); // 25 * 1.2
      expect(character.defence).toBe(30); // 25 * 1.2
    });

    test('damage() should reduce health', () => {
      character.damage(20);
      expect(character.health).toBe(85); // 20 * (1 - 0.25) = 15 damage
    });

    test('should throw error for invalid name', () => {
      expect(() => new Bowman('A')).toThrow('Имя должно быть строкой от 2 до 10 символов');
    });
  });
});
