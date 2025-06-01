describe('Fluxo de Finalização de Compra', () => {
  beforeEach(() => {
    cy.prepararCarrinhoComItens()
  })

  it('deve emitir um erro ao finalizar compra com campos incompletos', () => {
    // Acessar carrinho
    cy.get('.shopping_cart_link').click()
    cy.url().should('include', '/cart.html')
    cy.get('.cart_quantity').should('be.visible')

    cy.get('.checkout_button').click()
    cy.url().should('include', '/checkout-step-one.html')
    cy.get('.checkout_info').should('be.visible')

    cy.get('.cart_button').click()
    cy.get('[data-test="error"]').should('be.visible')
  })

  it('deve cancelar a compra e retornar para a página de produtos', () => {
    cy.get('.shopping_cart_link').click()
    cy.url().should('include', '/cart.html')
    cy.get('.cart_quantity').should('be.visible')

    cy.get('.checkout_button').click()
    cy.url().should('include', '/checkout-step-one.html')
    cy.get('.checkout_info').should('be.visible')

    cy.get('[data-test="firstName"]').type('John')
    cy.get('[data-test="lastName"]').type('Doe')
    cy.get('[data-test="postalCode"]').type('1234567890')

    cy.get('.cart_button').click()

    cy.url().should('include', '/checkout-step-two.html')
    cy.get('.summary_value_label').should('be.visible')
    cy.get('.summary_total_label').should('be.visible')

    cy.get('.cart_cancel_link').click()
    cy.url().should('include', '/inventory.html')
  })

  it('deve finalizar compra com sucesso', () => {
    cy.get('.shopping_cart_link').click()
    cy.url().should('include', '/cart.html')
    cy.get('.cart_quantity').should('be.visible')

    cy.get('.checkout_button').click()
    cy.url().should('include', '/checkout-step-one.html')
    cy.get('.checkout_info').should('be.visible')

    cy.get('[data-test="firstName"]').type('John')
    cy.get('[data-test="lastName"]').type('Doe')
    cy.get('[data-test="postalCode"]').type('1234567890')

    cy.get('.cart_button').click()

    cy.url().should('include', '/checkout-step-two.html')
    cy.get('.summary_value_label').should('be.visible')
    cy.get('.summary_total_label').should('be.visible')

    cy.get('.cart_button').click()

    cy.get('.complete-header').should('be.visible')
    cy.get('.complete-header').should('have.text', 'THANK YOU FOR YOUR ORDER')
  })
}) 