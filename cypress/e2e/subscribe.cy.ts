describe(("subscribe form test"), () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000");
    });

    context("Hero section", () => {
        it("allows a user to subscribe", () => {
            cy.getByDataTest("email-input").type("abdullah@aol.com");
            cy.getByDataTest("submit-button").click();
            cy.getByDataTest("success-message").should("exist");
        });
        it("does NOT allow an invalid email address", () => {
            cy.getByDataTest("email-input").type("tom");
            cy.getByDataTest("submit-button").click();
            cy.getByDataTest("success-message").should("not.exist");
        })
        it("does NOT allow an existing user to resubscribe", () => {
            cy.getByDataTest("email-input").type("john@example.com");
            cy.getByDataTest("submit-button").click();
            cy.getByDataTest("server-error-message")
                .should("exist")
                .contains("already exists. Please use a different email address.");
        })
        it("does NOT allow an empty email address", () => {
            cy.getByDataTest("submit-button").click();
            cy.getByDataTest("error-message")
                .should("exist")
                .contains("Email is required");
        })
    })

    context("Courses section", () => {
        it("takes user to testing-your-first-application page upon clicking Get started button", () => {
            cy.getByDataTest("course-0").find("a").eq(-1).click();
            cy.location("pathname").should("eq", "/testing-your-first-application");
        })
        it("takes user to testing-foundations page upon clicking Get started button", () => {
            cy.getByDataTest("course-1").find("a").eq(-1).click();
            cy.location("pathname").should("eq", "/testing-foundations");
        })
        it("takes user to cypress-fundamentals page upon clicking Get started button", () => {
            cy.getByDataTest("course-2").find("a").eq(-1).click();
            cy.location("pathname").should("eq", "/cypress-fundamentals");
        })
    })

});