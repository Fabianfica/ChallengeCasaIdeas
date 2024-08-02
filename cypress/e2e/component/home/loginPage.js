class LoginPage {
  visit() {
    cy.visit('https://www.casaideas.cl/');
  }


  fillEmail(email) {
    cy.get('.UserNav_list__dJ5pz > :nth-child(2)').click();
    cy.get('.decline-button').click()
    cy.get('#email').type(email);
  }

  fillPassword(password) {
    cy.get('#password').type(password);
  }

  submit() {
    cy.get('button[aria-label="slim"] span').click({force:true});
      
  }
  errorMessage() {
    return cy.get(':nth-child(3) > .FormInput_inputContainer__PPFgu > .text-alert-danger');
  }
}

export default LoginPage;