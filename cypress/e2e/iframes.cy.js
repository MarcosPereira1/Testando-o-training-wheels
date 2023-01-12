

const niceIframe = function () {
    return cy
      .get('#weareqaninja')
      .its('0.contentDocument.body').should('not.be.empty')
      .then(cy.wrap)
}

it('deve validar o total de seguidores', () => {
    cy.visit('/nice_iframe') 

    niceIframe().find('.FollowerCountText')
        .should('have.text', '7.215 seguidores')

}) 