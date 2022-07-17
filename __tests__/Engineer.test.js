// name, id, email, getName(), getId(), getEmail(), getRole() - returns 'engineer', github, getGithub()
const Engineer = require('../lib/Engineer.js');

test('creates an Engineer with a name, id, email, role, and github username', () => {
    const engineer = new Engineer('Fred', '123456', 'apple@pear.com', 'Engineer', 'Microsoft');

    expect(engineer.name).toBe('Fred');
    expect(engineer.id).toEqual(expect.any(String));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.role).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
  });

  test('gets an engineers name', () => {
    const engineer = new Engineer('Fred');

    expect(engineer.getName()).toEqual(expect.any(String)); 
  });

  test('gets an engineers id', () => {
    const engineer = new Engineer('123456');

    expect(engineer.getId()).toEqual(expect.any(String)); 
  });
    
  test('gets an engineers email', () => {
    const engineer = new Engineer('apple@pear.com');

    expect(engineer.getEmail()).toEqual(expect.any(String)); 
  });
  
  test('gets an engineers role', () => {
    const engineer = new Engineer('Engineer');

    expect(engineer.getRole()).toEqual(expect.any(String)); 
  });

  test('gets an engineers github', () => {
    const engineer = new Engineer('Microsoft');

    expect(engineer.getGithub()).toEqual(expect.any(String));
  })
