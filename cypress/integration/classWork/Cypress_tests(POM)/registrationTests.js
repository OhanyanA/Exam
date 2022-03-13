
import RegistrationPage from "../Pages/RegistrationPage.spec"

describe("Registration", () => {
    beforeEach(() => {
      cy.visit('https://demo.nopcommerce.com/')
    });
    afterEach(() =>{
      cy.get("#register-button").click().should('have.text', "Register");
    });
    
      //Test if user can register in "demo.nopcommerce" with valid data
          it("Register in demo.nopcommerce with valid data", () =>{
           cy.get('.ico-register').click().should('have.text', "Register" )
           RegistrationPage.typeFirstName("Tesvan");
           RegistrationPage.typeLastName("LLC");
           RegistrationPage.typeEmail("gogowisty013@gmail.com")
           RegistrationPage.typePassword("123456ab")
           RegistrationPage.typePasswordAgain("123456ab")
          });

      //Test if user can register in "demo.nopcommerce" with invalid data
           it("Register in demo.nopcommerce with invalid data", () =>{
           cy.get('.ico-register').click().should('have.text', "Register" );
           RegistrationPage.typeFirstName("Tesvan");
           RegistrationPage.typeLastName("LLC");
           RegistrationPage.typeEmail("a");
           RegistrationPage.typePassword("1b");
           RegistrationPage.typePasswordAgain("1b");
          });

      //Test if user can register with the used email
           it("Register in demo.nopcommerce with used email", () =>{
           cy.get('.ico-register').click().should('have.text', "Register");
           RegistrationPage.typeFirstName("Tesvan");
           RegistrationPage.typeLastName("LLC");
           RegistrationPage.typeEmail("gogowisty013@gmail.com")
           RegistrationPage.typePassword("123456ab")
           RegistrationPage.typePasswordAgain("123456ab")
          });
        });


        

