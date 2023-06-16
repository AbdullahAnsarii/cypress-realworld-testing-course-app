/// <reference types="cypress" />
// ***********************************************

declare namespace Cypress {
    interface Chainable {
        getByDataTest(dataTestAttribute: string): Chainable<JQuery<HTMLElement>>
    }
}


Cypress.Commands.add('getByDataTest', (selector) => {
    return cy.get(`[data-test=${selector}]`);
});