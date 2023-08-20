import Login from '../support/Login'

describe('Verify Signin with valid and invalid credencials', () => {

  
  beforeEach(()=>{
    Login.visit();
    
  })
  
      it('Should verify login with valid signin users', () => {
          
        Login.fillEmail('email');
        Login.fillPassword('password');
        Login.submitForm('Login');
   
      });

      it('Should verify login with invalid signin users', () => {
        
        Login.fillemail('email');
        Login.fillpassword('password');
        Login.submitForm();
        Login.verifyErrorMessage('errorMessage');
          
      })
    })

