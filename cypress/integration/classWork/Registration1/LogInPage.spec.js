class LogInPage {
elements={
emailInput : () => cy.get('#Email'),
passwordInput : () => cy.get('#Password'),
};

typeEmail(Email){
 this.elements.emailInput().clear().type(Email)  
};

typePassword(Password){
    this.elements.passwordInput().clear().type(Password)
};
}
module.exports = new LogInPage()