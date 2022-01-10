const Engineer = require('../lib/Engineer')

describe("Engineer", () => {
    describe("name", () => {
      it("should be a string with a name", () => {
        const engineer = new Engineer("Ben")
  
        expect('Ben').toEqual(engineer.name);
      });
    })

    describe("id", () => {
        it("should be a number", () => {
          const engineer = new Engineer("Ben", 0);
    
          expect(0).toEqual(engineer.id);
        });
      })

      describe("email", () => {
        it("should be a string with an email", () => {
          const engineer = new Engineer("Ben", 0, "emailben@gmail.com");
    
          expect('emailben@gmail.com').toEqual(engineer.email);
        });
      })

      describe("github", () => {
        it("should be a string with aa github name", () => {
          const engineer = new Engineer("Ben", 0, "emailben@gmail.com", "bengithub");
    
          expect('bengithub').toEqual(engineer.github);
        });
      })

})