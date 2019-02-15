describe('Home page', function() {
  it('Checks if default lang button is active', function() {
    cy
      .visit('/')
      .get('button')
      .contains('En')
      .should(button => {
        const className = button[0].className;
        expect(className).to.match(/^Home-langActive/);
      });
  });

  it('Switches lang', function() {
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
      .should(button => {
        const className = button[0].className;
        expect(className).to.match(/^Home-langActive/);
      });
  });

  it('Goes to about page', function() {
    cy.get('a[href="/de/about"]').click();

    cy
      .url()
      .should('include', '/de/about');
  });
});
