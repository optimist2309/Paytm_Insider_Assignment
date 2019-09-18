/// <reference types="Cypress" />

it('Automated test cases to buy the tickets from insider.com in featured events from selected city', () => {
    
    cy.visit("https://insider.in/")

    // Selecting the pune city from city dropdown.
    cy.get('.city-list > :nth-child(7) > a').click()
    
    // Selecting the bacardi weekender from featured event section.
    cy.get('.carousel-item-1 > .featured-card > a > .featured-card-details > .featured-card-details-top > .featured-card-name').click({ force: true })
    
    // Closing the subscribe news letter popup
    cy.get('#closeModalButton').click()
    
    // Clicking on buy and selecting the 1 ticket to buy 
    cy.get('.header-detail > .action-button-wrapper > .action-button-btns-row > .action-button-main').click()
    cy.get(':nth-child(1) > .show-partial > .show-partial-content > .buyflow-action > .buyflow-buy > .marionette-spa-btn > .base-button').click()
    cy.get(':nth-child(1) > .show-partial > .show-partial-content > .buyflow-action > .buyflow-price > .main-item-select-wrapper > .main-item-select').select('1')
    cy.get(':nth-child(1) > .show-partial > .show-partial-content > .buyflow-action > .buyflow-buy > .base-button > span').click()
    
    // Assert to confirm the checkout page url.
    cy.url().should('eq', 'https://insider.in/buy/checkout')


})
