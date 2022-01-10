const Employee = require('../lib/employee')

describe("Employee", () => {
    describe("name", () => {
      it("should be a string with a name", () => {
        const employee = new Employee("ben")
  
        expect('Ben').toEqual(employee.name);
      });
    })

    describe("id", () => {
        it("should be a number", () => {
          const employee = new Employee("ben", 0);
    
          expect(0).toEqual(employee.id);
        });
      })

      describe("email", () => {
        it("should be a string with an email", () => {
          const employee = new Employee("ben", 0, "emailben@gmail.com");
    
          expect('emailben@gmail.com').toEqual(employee.email);
        });
      })

})