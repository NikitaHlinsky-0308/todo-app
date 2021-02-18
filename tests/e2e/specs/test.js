// https://docs.cypress.io/api/introduction/api.html

describe("My First Test", () => {
  it("Visits the app root url", () => {
    cy.visit("http://localhost:8080");
    cy.contains("h1", "TODO.");
  });

  it("Input submitting", () => {
    cy.visit("http://localhost:8080");
    cy.get(".main-input").click()
  });

  it("Items check", () => {
    cy.visit("http://localhost:8080");
    cy.get('.task').find('.checkbox').first().check()
  });
});
