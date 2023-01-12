describe('agrupando testes', () => {
    beforeEach(() => {
        cy.visit('/drag_and_drop')
      })

    it('deve arrastar o cypress para caixinha de node', () => {
        const dataTransfer = new DataTransfer()
    
        cy.get('img[alt="Cypress"]').trigger('dragstart', {dataTransfer})
    
        cy.get('.nodejs figure[draggable=true]').trigger('drop', {dataTransfer})
    })
    
    it('deve arrastar o robot para caixinha do python', () => {
        const dataTransfer = new DataTransfer()
    
        cy.get('img[alt="Robot Framework"]').trigger('dragstart', {dataTransfer})
    
        cy.get('.python figure[draggable=true]').trigger('drop', {dataTransfer})
    })
})



