Cypress.Commands.add('solveGoogleReCAPTCHA', () => {
    // Wait until the iframe (Google reCAPTCHA) is totally loaded
    cy.wait(1000);
    cy.get('[style="width: 304px; height: 78px;"] > div > iframe')
      .then($iframe => {
        const $body = $iframe.contents().find('body');
        cy.wrap($body)
          .find('.recaptcha-checkbox-border')
          .should('be.visible')
          .click();
      });
  });