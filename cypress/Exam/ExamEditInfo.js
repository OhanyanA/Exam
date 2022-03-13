import Exam from "../Pages/Exam.spec"
describe ("Add Web table", () =>{
    beforeEach(() => {
        cy.visit("https://demoqa.com/")
      });
     
// Test if user can edit info in web table      
      it("Edit info in Web table", ()=>{
     cy.contains("Elements").click();
     cy.contains("Web Tables").click();
     cy.get("#edit-record-3").click();
     Exam.typeFirstName("Ann");
     Exam.typeLastName("LastName");
     cy.get("#submit").click().should('have.text', "Submit");
    });
});