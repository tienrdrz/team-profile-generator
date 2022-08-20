// name, id, email, getName(), getId(), getEmail(), getRole() - returns 'manager', officeNumber

const Manager = require('../lib/Manager.js');

test('creates an Manager with a name, id, email, role, and their office number', () => {
    const manager = new Manager('Fred', '123456', 'apple@pear.com', 'Manager', 12345678);

    expect(manager.name).toBe('Fred');
    expect(manager.id).toEqual(expect.any(String));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.role).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));
  });

  test('gets an Managers name', () => {
    const manager = new Manager('Fred');

    expect(manager.getName()).toEqual(expect.any(String)); 
  });

  test('gets an Managers id', () => {
    const manager = new Manager('123456');

    expect(manager.getId()).toEqual(expect.any(String)); 
  });
    
  test('gets an Managers email', () => {
    const manager = new Manager('apple@pear.com');

    expect(manager.getEmail()).toEqual(expect.any(String)); 
  });
  
  test('gets an Managers role', () => {
    const manager = new Manager('Manager');

    expect(manager.getRole()).toEqual(expect.any(String)); 
  });

  test('gets an Managers office number', () => {
    const manager = new Manager('123456');

    expect(manager.getOfficeNumber()).toEqua;(expect.any(String));
  })
