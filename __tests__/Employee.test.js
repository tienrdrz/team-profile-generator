// name, id, email, getName(), getId(), getEmail(), getRole() - returns 'employee'
const Employee = require('../lib/Employee.js');

test('creates an Employee with a name, id, email, and role', () => {
    const employee = new Employee('Fred', '123456', 'apple@pear.com', 'Employee');

    expect(employee.name).toBe('Fred');
    expect(employee.id).toEqual(expect.any(String));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.role).toEqual(expect.any(String));
  });

  test('gets an employees name', () => {
    const employee = new Employee('Fred');

    expect(employee.getName()).toEqual(expect.any(String)); 
  });

  test('gets an employees id', () => {
    const employee = new Employee('123456');

    expect(employee.getId()).toEqual(expect.any(String)); 
  });
    
  test('gets an employees email', () => {
    const employee = new Employee('apple@pear.com');

    expect(employee.getEmail()).toEqual(expect.any(String)); 
  });
  
  test('gets an employees role', () => {
    const employee = new Employee('Employee');

    expect(employee.getRole()).toEqual(expect.any(String)); 
  });

