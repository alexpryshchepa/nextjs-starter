describe('Home page', () => {
  it('Checks if default lang button is active', () => {
    cy
      .visit('/')
      .get('button')
      .contains('En')
      .should((button) => {
        const { className } = button[0];
        expect(className).to.match(/^Home-langActive/);
      });
  });

  it('Switches lang', () => {
    cy
      .get('button')
      .contains('De')
      .click();

    cy
      .url()
      .should('include', '/de');

    cy
      .get('button')
      .contains('De')
      .should((button) => {
        const { className } = button[0];
        expect(className).to.match(/^Home-langActive/);
      });
  });

  it('Goes to about page', () => {
    cy.get('a[href="/de/about"]').click();

    cy
      .url()
      .should('include', '/de/about');
  });
});
