class Exam {
    elements={
   FirstNameInput : () => cy.get('#firstName'),
   LastNameInput : () => cy.get('#lastName'),
   EmailInput : () => cy.get('#userEmail'),
   AgeInput : () => cy.get("#age"),
   SaleryInput : () => cy.get("#salary"),
   DepartmentInput : () => cy.get("#department")
    };
    
    typeFirstName(FirstName){
     this.elements.FirstNameInput().clear().type(FirstName)  
    };
    
    typeLastName(LastName){
        this.elements.LastNameInput().clear().type(LastName)
    };

    typeEmail(Email){
        this.elements.EmailInput().clear().type(Email)
    };

    tpyeAge(Age){
        this.elements.AgeInput().clear().type(Age)
    };

    typeSalery(Salery){
        this.elements.SaleryInput().clear().type(Salery)
    };

    typeDepartment(Department){
        this.elements.DepartmentInput().clear().type(Department)
    };
    
    }
    module.exports = new Exam()