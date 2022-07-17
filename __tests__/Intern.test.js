// name, id, email, getName(), getId(), getEmail(), getRole() - returns 'intern', school, getSchool()

const Intern = require('../lib/Intern.js');

test('creates an Intern with a name, id, email, role, and their school', () => {
    const intern = new Intern('Fred', '123456', 'apple@pear.com', 'Intern', 'University');

    expect(intern.name).toBe('Fred');
    expect(intern.id).toEqual(expect.any(String));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.role).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
  });

  test('gets an Interns name', () => {
    const intern = new Intern('Fred');

    expect(intern.getName()).toEqual(expect.any(String)); 
  });

  test('gets an Interns id', () => {
    const intern = new Intern('123456');

    expect(intern.getId()).toEqual(expect.any(String)); 
  });
    
  test('gets an Interns email', () => {
    const intern = new Intern('apple@pear.com');

    expect(intern.getEmail()).toEqual(expect.any(String)); 
  });
  
  test('gets an Interns role', () => {
    const intern = new Intern('Intern');

    expect(intern.getRole()).toEqual(expect.any(String)); 
  });

  test('gets an Interns school', () => {
    const intern = new Intern('University');

    expect(intern.getSchool()).toEqual(expect.any(String));
  })
