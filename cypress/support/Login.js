import testData from'../fixtures/testData.json'
class Login {
    visit() {
      cy.visit('https://next-realworld.vercel.app/');
      cy.contains("Sign in").click();
    }
  
    fillEmail(_email) {
        cy.get('input[type="email"][placeholder="Email"]').type(testData.user2.email);
    }

    fillemail(_email) {
      cy.get('input[type="email"][placeholder="Email"]').type(testData.user3.email);
    }

    fillPassword(_password) {
        cy.get('input[type="password"][placeholder="Password"]').type(testData.user2.password);
    }

    fillpassword(_password) {
      cy.get('input[type="password"][placeholder="Password"]').type(testData.user3.password);
   }
    submitForm() {
      cy.get('[type=submit]').click();
    }
  
    verifyErrorMessage(_errorMessage) {
      cy.contains("email or password is invalid");
    }

  }
  export default new Login();
  