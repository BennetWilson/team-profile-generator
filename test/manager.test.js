const Manager = require('../lib/Manager')

describe("Manager", () => {
    describe("name", () => {
      it("should be a string with a name", () => {
        const manager = new Manager("Ben")
  
        expect('Ben').toEqual(manager.name);
      });
    })

    describe("id", () => {
        it("should be a number", () => {
          const manager = new Manager("Ben", 0);
    
          expect(0).toEqual(manager.id);
        });
      })

      describe("email", () => {
        it("should be a string with an email", () => {
          const manager = new Manager("Ben", 0, "emailben@gmail.com");
    
          expect('emailben@gmail.com').toEqual(manager.email);
        });
      })

      describe("github", () => {
        it("should be a number value", () => {
          const manager = new Manager("Ben", 0, "emailben@gmail.com", 85207);
    
          expect(85207).toEqual(manager.number);
        });
      })

})