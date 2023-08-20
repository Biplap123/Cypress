import Register from "../support/Register";

describe('Registration Page', () => {

  beforeEach(() => {
    Register.visit();
  });

  it('should successfully register with valid credentials', () => {
    Register.fillUsername("username");
    Register.fillEmail("email");
    Register.fillPassword("password");
    Register.submitRegistrationForm();
    
  })

  it('should display error message for Blank Password', () => {
    Register.fillUsername("username");
    Register.fillEmail("email");
    Register.submitRegistrationForm();
    Register.verifyErrorMessage("password can't be blank");
  });

  it('should display error message for Blank Username ', () => {
    Register.fillEmail("email")
    Register.fillPassword("password");
    Register.submitRegistrationForm();
    Register.verifyErrorMessage("username can't be blank");
  });

  it('should display error message for Blank email', () => {
    Register.fillUsername("username");
    Register.fillPassword("password");
    Register.submitRegistrationForm();
    Register.verifyErrorMessage("email can't be blank");
  });
});