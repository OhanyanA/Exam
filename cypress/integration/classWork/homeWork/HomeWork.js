describe("Registration", () => {
beforeEach(() => {
  cy.visit('https://demo.nopcommerce.com/')
});

  //Test if user can register in "demo.nopcommerce" with valid data
      it("Register in demo.nopcommerce with valid data", () =>{
       cy.get('.ico-register').click().should('have.text', "Register" );
       valid_data();
       cy.get("#register-button").click();
      });

//Test if user can register in "demo.nopcommerce" with invalid data
    it("Register in demo.nopcommerce with invalid data", () =>{
     cy.get('.ico-register').click().should('have.text', "Register" );
     invalid_data();
     cy.get("#register-button").click();
     });

//Test if user can register with the used email
     it("Register in demo.nopcommerce with used email", () =>{
      cy.get('.ico-register').click().should('have.text', "Register");
      valid_data();
      cy.get("#register-button").click();
    });
    });

describe("Log in", () => {
  beforeEach(() => {
    cy.visit('https://demo.nopcommerce.com/')
  });

//Test if user can log in "demo.nopcommerce" with valid data
      it("Log in demo.nopcommerce with valid data", () =>{
      log_in();
      cy.get('.button-1.login-button').click();
      });

//Test if user can log in "demo.nopcommerce" with invalid data
      it("Log in demo.nopcommerce with invalid data", () =>{
      cy.get('.ico-login').click();
      cy.get('#Email').type("user1@gmail.com");
      cy.get('#Password').type("123abc");
      cy.get('.button-1.login-button').click();
      });

 //Test if user can log out from "demo.nopcommerce"
      it("Log out from  demo.nopcommerce", () =>{
      cy.get('.ico-login').click().should('have.text', "Log in")
      log_in();
      cy.get('.button-1.login-button').click()
    
      cy.get('.ico-logout').click();
      });
});


      function log_in(){
        cy.get('.ico-login').click();
        cy.get('#Email').type("gogowisty013@gmail.com");
        cy.get('#Password').type("123456ab");
      };

      function valid_data() {
        cy.get("#FirstName").type("Name");
        cy.get("#LastName").type("Last Name");
        cy.get("#Email").type("gogowisty013@gmail.com");
        cy.get("#Password").type("123456ab");
        cy.get("#ConfirmPassword").type("123456ab");
      };
       
      function invalid_data(){
        cy.get("#FirstName").type("a");
        cy.get("#LastName").type("a");
        cy.get("#Email").type("a");
        cy.get("#Password").type("a");
        cy.get("#ConfirmPassword").type("a");
      };
  