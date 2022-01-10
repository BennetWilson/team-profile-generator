const Intern = require('../lib/Intern')

describe("Intern", () => {
    describe("name", () => {
      it("should be a string with a name", () => {
        const intern = new Intern("ben")
  
        expect('Ben').toEqual(intern.name);
      });
    })

    describe("id", () => {
        it("should be a number", () => {
          const intern = new Intern("ben", 0);
    
          expect(0).toEqual(intern.id);
        });
      })

      describe("email", () => {
        it("should be a string with an email", () => {
          const intern = new Intern("ben", 0, "emailben@gmail.com");
    
          expect('emailben@gmail.com').toEqual(intern.email);
        });
      })

      describe("github", () => {
        it("should be a string with a school name", () => {
          const intern = new Intern("ben", 0, "emailben@gmail.com", "bengithub");
    
          expect('NAU').toEqual(intern.school);
        });
      })

})