it('deve marcar os top 5 filmes da marvel', () => {
    cy.visit('/checkboxes')

    const movies = [
        'cap',
        'guardians',
        'blackpanther',
        'thor3'
    ]

    movies.forEach((m) => {
        cy.get(`input[name=${m}]`)
        .check()
        .should('be.checked')
    })
})