describe('My First Test', () => {
    it('Visit Gato', () => {
      cy.visit("http://127.0.0.1:5501/")
    })
  })

  describe('Practice Test Click', () => {
    it('Click on the title', () => {
      cy.contains("Gato").click()
    })
  })

  describe('Check for change of color in cell', () => {
    it('Check that inital cell color is white', () => {
      cy.get('#3').should('have.css', 'background-color', 'rgb(255, 255, 255)')
    })

    it('Check that cell changes color to red when clicked', () => {
      cy.get('#3').click().should('have.css', 'background-color', 'rgb(255, 0, 0)')
    })

    it('Check for change of color with change of player', () => {
      cy.get('#4').click().should('have.css', 'background-color', 'rgb(0, 0, 255)')
    })
  })
