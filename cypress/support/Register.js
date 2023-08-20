import testData from'../fixtures/testData.json'
class Register {
    visit() {
      cy.visit('https://next-realworld.vercel.app/user/register');
    }
  
    fillUsername(_username) {
      cy.get("input[placeholder='Username']").type(testData.user.username);
    }
  
    fillEmail(_email) {
      cy.get("input[placeholder='Email']").type(testData.user.email);
    }
  
    fillPassword(_password) {
      cy.get("input[placeholder='Password']").type(testData.user.password);
    }
  
    submitRegistrationForm() {
      cy.get('button[type="submit"]').contains('Sign up').click();
    }
  
    verifyErrorMessage(expectedMessage) {
      cy.get('.error-messages').should('contain', expectedMessage);
    }
    verifyErrorMessages(expectedMessage) {
      cy.get('.error-messages > li').should('contain', expectedMessage);
    }
    verifyErrorMessagess(expectedMessage) {
      cy.get('.error-messages > li').should('contain', expectedMessage);
    }
  }
  
  export default new Register();