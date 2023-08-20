import Post from'../fixtures/Post.json'
import testData from'../fixtures/testData.json'


 before(() => {
      cy.visit("https://next-realworld.vercel.app/");
      cy.contains("Sign in").click();
    });
  
    it("Should login with valid credentials", () => {
      cy.get('input[type="email"][placeholder="Email"]').type(testData.user2.email);
      cy.get('input[type="password"][placeholder="Password"]').type(testData.user2.password);
      cy.contains("button", "Sign in").click();
      cy.wait(2000);
      cy.contains(" New Post").click();
      cy.get('input[placeholder="Article Title"]').type(Post.title);
      cy.get('input[placeholder="What\'s this article about?"]').type(Post.description);
      cy.get('textarea[placeholder="Write your article (in markdown)"]').type(Post.body);
      cy.get('input[placeholder="Enter tags"]').type(Post.tags);
      cy.contains("button", 'Publish Article').click().click('bottomRight');
      cy.visit("https://next-realworld.vercel.app/");
    });
 
  