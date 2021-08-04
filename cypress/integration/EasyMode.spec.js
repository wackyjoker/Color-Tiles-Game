describe('Input form', () => {
  it('loads the page', () => {
    cy.visit('http://localhost:9000')
  })
  it('clicks the tile', () => {
    cy.get('#tile__grid').click()
  })
})
