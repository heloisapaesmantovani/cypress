describe('Login na página do site QAZANDO', () => {

    it('Login do usuário com sucesso', () => {
        cy.visit('https://automationpratice.com.br/')
        
        cy.get('.right_list_fix > :nth-child(1) > a')
            .click()
        
        cy.get('#user')
            .type('heloisapaesmantovani@gmail.com')
        
        cy.get('#password')
            .type('senhaAutomation.')

        cy.get('#btnLogin')
             .click()

        cy.get('#swal2-title')
            .contains('Login realizado')

        cy.get('.swal2-confirm')
            .click() 
    })
})