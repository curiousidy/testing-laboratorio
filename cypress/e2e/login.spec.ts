describe('Login specs', () => {
  it('visit the login page', () => {
    cy.visit('/');
  });

  it('should name input have the focus when it clicks on it', () => {
    cy.visit('/');
    cy.findByRole('textbox').click();
    cy.findByRole('textbox').should('have.focus');
  });

  it('should show an alert with a message when type invalid credentials', () => {
    const user = 'admin';
    const password = '1234';
    cy.visit('/');
    cy.findByRole('textbox').as('userInput');
    cy.get('@userInput').type(user);
    cy.get('#password').as('passwordInput');
    cy.get('@passwordInput').type(password);

    
    cy.on('window:alert', (message) => {
      expect(message).to.equal(
        'invalid credentials, use admin/test, excercise: display a mui snackbar instead of this alert.'
      );
    });

    cy.findByRole('button', { name: 'Login' }).click();
    cy.get('@userInput').should('have.value', user);
    cy.get('@passwordInput').should('have.value', password);
  });

  it('should navigate to dashboard url when type valid credentials', () => {
    // Arrange
    const user = 'admin';
    const password = 'test';

    // Act
    cy.visit('/');
    cy.findByRole('textbox').as('userInput');
    cy.get('@userInput').type(user);
    cy.get('#password').as('passwordInput');
    cy.get('@passwordInput').type(password);

    cy.findByRole('button', { name: 'Login' }).click();

    // Assert
    cy.url().should('equal', 'http://localhost:8080/#/submodule-list');
  });
});
