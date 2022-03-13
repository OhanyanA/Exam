describe ("Delete information from Web table", () =>{
    beforeEach(() => {
        cy.visit("https://demoqa.com/")
      });
     
// Test if user can delete information from web table      
      it("Delete information from Web table", ()=>{
     cy.contains("Elements").click();
     cy.contains("Web Tables").click();
     cy.get("#delete-record-1").click() ;
    });
});