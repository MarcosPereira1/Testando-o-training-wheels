it('deve amrcar tohr ragnarok', () => {
    cy.visit('/radios')
    
    cy.get('input[value="thor3"]').check()
        .should('be.checked')
})