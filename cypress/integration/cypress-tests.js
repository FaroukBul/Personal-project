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
    cy.get('#31').should('have.css', 'background-color', 'rgb(255, 255, 255)')
  })

  it('Check that cell changes color to red when clicked', () => {
    cy.get('#31').click().should('have.css', 'background-color', 'rgb(255, 0, 0)')
  })

  it('Check for change of color', () => {
    cy.get('#21').click().should('have.css', 'background-color', 'rgb(0, 0, 255)')
    cy.get('#22').click().should('have.css', 'background-color', 'rgb(255, 0, 0)')
  })
})

describe('Test for getWinner function', () => {
  it('Make column of reds', () => {
    cy.get('#11').click()
    cy.get('#32').click()
    cy.get('#12').click()
    cy.get('#33').click()
  })

  it('Check for alert "Red" given column of reds', () => {
    const stub = cy.stub()
    cy.on('window:alert', (text) => {
      expect(text).to.contains('This');
    })
  })
})

describe('Test for winning actions', () => {
  it('Check for alert "Blue Wins" given column of blue', () => {
    cy.wait(2000)
    cy.get('#11').click()
    cy.get('#32').click()
    cy.get('#12').click()
    cy.get('#33').click()
    cy.get('#22').click()
    cy.get('#31').click()
    const stub = cy.stub()
    cy.on('window:alert', (text) => {
      expect(text).to.contains('Blue Wins')
    })
  })
})

describe('Test for tie', () => {
  it("Check for alert 'It's a tie' given no winning lines", () =>{

  })
})