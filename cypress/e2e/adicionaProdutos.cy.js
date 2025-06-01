describe('Fluxo de Adição de Produtos no Carrinho', () => {
  beforeEach(() => {
    cy.visit('/v1/inventory.html')
  })

  it('deve adicionar produto ao carrinho', () => {
    cy.get('.inventory_list').should('be.visible')

    cy.get(':nth-child(1) > .pricebar > .btn_primary').should('have.text', 'ADD TO CART')
    cy.get(':nth-child(1) > .pricebar > .btn_primary').click()

    cy.get('.btn_secondary').should('have.text', 'REMOVE')
    cy.get('.shopping_cart_badge').should('be.visible')
    cy.get('.shopping_cart_badge').should('have.text', '1')

    cy.get('.shopping_cart_link').click()
    cy.url().should('include', 'cart.html')
  })

  it('deve adicionar múltiplos itens', () => {
    cy.get(':nth-child(1) > .pricebar > .btn_primary').should('have.text', 'ADD TO CART')
    cy.get(':nth-child(1) > .pricebar > .btn_primary').click()

    cy.get(':nth-child(2) > .pricebar > .btn_primary').should('have.text', 'ADD TO CART')
    cy.get(':nth-child(2) > .pricebar > .btn_primary').click()

    cy.get(':nth-child(3) > .pricebar > .btn_primary').should('have.text', 'ADD TO CART')
    cy.get(':nth-child(3) > .pricebar > .btn_primary').click()

    cy.get('.shopping_cart_badge').should('have.text', '3')
  })

}) 