describe('About page', function() {
  it('Checks if url matches', function() {
    cy.visit('/about');

    cy
      .url()
      .should('include', '/about');
  });
});
