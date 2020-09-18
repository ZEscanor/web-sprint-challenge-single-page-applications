/// <reference types="cypress" />



const isDisabled = () => {
    cy.get(".button").should('be.disabled')
}
const isEnabled= () => {
    cy.get(".button").should('be.enabled')
}
describe('Quotes app', () => {
    beforeEach(() => {
        //code to run before each test like navigation
        cy.visit('http://localhost:3000/pizza')

    })
    //it is a test and expect is a assertion can be multipke assertions
    it('sanity', () =>{
       expect(1+2).to.equal(3)
       expect(2+2).not.to.equal(5 )
    } )

    it("dom element", () =>
    {
        // get a specific elemetnt similar to query selector
        cy.get('input[name="name"]').should('exist') .type("ab")
        cy.get('input[name="specialInstructions"]').should('exist') .type("ab")
        //validation left empty
        cy.get('input[type="checkbox"]').should('exist').click({multiple:true}).should('have.value', "on")  
        //cy.contains(/name/i).should('exist')
    
    })

    it("is button disabled?", () => {
      isDisabled()
      cy.get("select").select("Medium")
      cy.get('input[name="name"]').should('exist').type("Poalu")
      isEnabled()
      cy.get(".button").click()

    })

    // it("we can type", () => {
    //     //grab inputs assert empty type in assert typed content is there
    //     //n
    //     cy.get('input[name="name"]')
    //     .should('have.value', '')
    //     .type("My name is Mobius")
    //     .should("have.value", "My name is Mobius")
    //     isDisabled()
        
        
    //    //email
    //     cy.get('input[name="email"]')
    //     .should('have.value', '')
    //     .type("mobius@aol.com") // wow we can chain should statements like so
    //     .should('have.value',"mobius@aol.com")
    //    isDisabled()

    //     //password
    //     cy.get('input[name="password"]')
    //     .should('have.value', '')
    //     .type("wowThisIsReallyAGood")
    //     .should('have.value', "wowThisIsReallyAGood")
    //     isDisabled()

    //     cy.get('input[name="termsOfService"][type="checkbox"]').click()
    //     isEnabled()
    })
