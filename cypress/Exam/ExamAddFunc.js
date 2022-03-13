import Exam from "../Pages/Exam.spec"
describe ("Add Web table", () =>{
    beforeEach(() => {
        cy.visit("https://demoqa.com/")
      });
     
// Test if user can add web table with valid data      
    it("Add Web table", ()=>{
     cy.contains("Elements").click();
     cy.contains("Web Tables").click();
     cy.get("#addNewRecordButton").click();
     Exam.typeFirstName("FirstName");
     Exam.typeLastName("LastName");
     Exam.typeEmail("gogowisty013@gmail.com");
     Exam.tpyeAge("20");
     Exam.typeSalery("5000");
     Exam.typeDepartment("abc123");
     cy.get("#submit").click().should('have.text', "Submit");
     
      });

});