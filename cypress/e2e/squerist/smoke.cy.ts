describe('smoke tests', () => {

  it('display correct title', () => {
    cy.visit('https://practice.expandtesting.com/') 
    
    cy.get('#main-title').contains('Automation Testing Practice WebSite for QA and Developers')
 
})
})