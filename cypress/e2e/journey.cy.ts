describe(("subscribe form test"), () => {
    it("user finds a course on a homepage and can complete the course by following the steps", () => {
        cy.visit("http://localhost:3000");
        cy.getByDataTest("course-0").find("a").eq(-1).click();
        cy.location("pathname")
        .should("eq", "/testing-your-first-application");

        cy.getByDataTest("next-lesson-button").click();
        cy.location("pathname")
        .should("eq", "/testing-your-first-application/app-install-and-overview");

        cy.getByDataTest("challenge-answer-0").click();
        cy.getByDataTest("next-lesson-button").should("exist").click();
        cy.location("pathname")
        .should("eq", "/testing-your-first-application/installing-cypress-and-writing-our-first-test");

        
    })
});