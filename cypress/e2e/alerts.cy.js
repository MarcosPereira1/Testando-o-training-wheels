it('deve exibir a mensagem de alerta', () => {
    cy.visit('javascript_alerts')

    cy.contains('button', 'Alerta').click(
    
    cy.on('window:alert', function (result) {
        console.log(result)
    }))
}) 
