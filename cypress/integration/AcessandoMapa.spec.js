describe('Acessando site VR', function(){
    
    

    it('Verificando titulo da aplicação',function(){
        cy.visit('/')

        cy.title().should('be.equal', 'VR Benefícios - Vale Refeição, Vale Alimentação e Transporte')
       
    })
    it('Clicando opcção Pra você', function(){

        cy.get(':nth-child(3) > .vr-main-navigation__link').click({force: true})

        cy.get('.vr-hero__actions > .vr-button--negative').click({force: true})

       

       
    })

    it('Verificando presença do Mapa', function(){

        cy.get('body').should('be.visible')
        cy.end()
    })

    
})