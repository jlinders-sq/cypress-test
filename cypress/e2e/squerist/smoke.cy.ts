describe('smoke tests', () => {


  // Dit wordt uitgevoerd VÓÓR elke 'it' block
  beforeEach(() => {
    cy.visit('/');
  });

  it('display correct title - passed', () => {


    cy.get('#main-title').contains('Automation Testing Practice WebSite for QA and Developers')

    cy.get('#main-title').invoke('text').should('match', /^\s*Automation Testing Practice WebSite for QA and Developers\s*$/);


  });


  it('display correct title - failed', () => {
    cy.get('#main-title').should('have.text', 'Automation Testing Practice WebSite for QA and Developers')

  });
});

