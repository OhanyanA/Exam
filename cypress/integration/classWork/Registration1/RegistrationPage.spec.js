class RegistrationPage{
elements = {
    firstNameInput: () => cy.get("#FirstName"),
    lastNameInput: () => cy.get("#LastName"),
    emailInput: () => cy.get("#Email"),
    passwordInput: () => cy.get("#Password"),
    confirmPasswordInput: () => cy.get("#ConfirmPassword")
};

typeFirstName(FirstName){
    this.elements.firstNameInput().clear().type(FirstName)
};
 
typeLastName(LastName){
    this.elements.lastNameInput().clear().type(LastName)
};

typeEmail(Email){
    this.elements.emailInput().clear().type(Email)
};

typePassword(Password){
    this.elements.passwordInput().clear().type(Password)
};
  
typePasswordAgain(ConfirmPassword){
    this.elements.confirmPasswordInput().clear().type(ConfirmPassword)
};


}

module.exports = new RegistrationPage()