// For Signup
import testData from'../fixtures/testData.json';

describe("Signup Page Tests", () => {
  beforeEach(() => {
    cy.visit("https://next-realworld.vercel.app/");
    cy.contains("Sign up").click();
  });

  it("Should signup a new user successfully", () => {
    cy.get('input[type="text"][placeholder="Username"]').type(testData.user.username);
    cy.get('input[type="email"][placeholder="Email"]').type(testData.user.email);
    cy.get('input[type="password"][placeholder="Password"]').type(testData.user.password);
    cy.contains("button", "Sign up").click();
    cy.contains("Settings").should("be.visible");
    cy.wait(2000);
  });

  it("Should verify Signup with already used UserName,Email", () => {
    cy.get('input[type="text"][placeholder="Username"]').type(testData.user1.username);
    cy.get('input[type="email"][placeholder="Email"]').type(testData.user1.email);
    cy.get('input[type="password"][placeholder="Password"]').type(testData.user1.password);
    cy.contains("button", "Sign up").click();
    cy.contains("email has already been taken").should("be.visible");
    cy.wait(2000);
  });
});

// // //  for Login Page

describe("Login Page Tests", () => {
  beforeEach(() => {
    cy.visit("https://next-realworld.vercel.app/");
    cy.contains("Sign in").click();
  });

  it("Should login with valid credentials", () => {
    cy.get('input[type="email"][placeholder="Email"]').type(testData.user2.email);
    cy.get('input[type="password"][placeholder="Password"]').type(testData.user2.password);
    cy.contains("button", "Sign in").click();
    cy.contains("Your Feed").should("be.visible");
    cy.wait(2000);
  });

  it("Should display an error message on invalid login credentials", () => {
    cy.get('input[type="email"][placeholder="Email"]').type(testData.user3.email);
    cy.get('input[type="password"][placeholder="Password"]').type(testData.user3.password);
    cy.contains("button", "Sign in").click();
    cy.get('.error-messages > li').should('be.visible')
  });
});
