import LogInPage from "../Pages/LogInPage.spec"
describe("Log in", () => {
    beforeEach(() => {
      cy.visit("https://demo.nopcommerce.com/")
    });
    
  //Test if user can log in "demo.nopcommerce" with valid data
        it("Log in demo.nopcommerce with valid data", () =>{
        cy.get('.ico-login').click();
        LogInPage.typeEmail("gogowisty013@gmail.com");
        LogInPage.typePassword("123456ab");
        cy.get('.button-1.login-button').click();
        });
  
  //Test if user can log in "demo.nopcommerce" with invalid data
        it("Log in demo.nopcommerce with invalid data", () =>{
        cy.get('.ico-login').click();
        LogInPage.typeEmail("gogowisty.com");
        LogInPage.typePassword("ab");
        cy.get('.button-1.login-button').click();
        });
  
   //Test if user can log out from "demo.nopcommerce"
       it("Log out from  demo.nopcommerce", () =>{
        cy.get('.ico-login').click().should('have.text', "Log in");
        LogInPage.typeEmail("gogowisty013@gmail.com");
        LogInPage.typePassword("123456ab");
        cy.get('.button-1.login-button').click();
        cy.get('.ico-logout').click();
        });
  });
