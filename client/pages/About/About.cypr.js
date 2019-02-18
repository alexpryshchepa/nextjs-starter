describe('About page', () => {
  it('Checks if url matches', () => {
    cy.visit('/about');

    cy
      .url()
      .should('include', '/about');
  });
});
