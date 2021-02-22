// https://docs.cypress.io/api/introduction/api.html

describe("ToDo end-to-end", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("Visits the app root url", () => {
    cy.contains("h1", "TODO.");
  });

  it("Input submitting", () => {
    cy.get('[data-test-id="inputBtn"]').click()
  });

  it("Input create", () => {
    cy.get('[data-test-id="taskInput"]')
      .focus().type('Testing')
      .should('have.value', 'Testing')
      .type('{enter}')
    cy.get('[data-test-id="task"]').find(('[data-test-id="textItem"]')).should('be.visible').type('{enter}')
    cy.get('[data-test-id="checkbox"]').should('be.enabled')
  });

  it("Radio test", () => {
    const radioCheck = '[data-test-id="radioLabel"]'
    const radioInput = '[data-test-id="radio"]'

    cy.get(radioInput).first().should('be.checked')

    cy.get(radioCheck).eq(1).click()
    cy.get(radioInput).eq(1).should('not.be.visible')

    cy.get(radioCheck).eq(2).click()
    cy.get(radioInput).eq(2).should('be.checked')

    cy.get(radioCheck).should("have.length", 3);
  })

  it("Single removing test", () => {
    const removeBtn = '[data-test-id="removeBtn"]'

    cy.get('[data-test-id="taskInput"]')
      .focus().type('Testing')
      .should('have.value', 'Testing')
      .type('{enter}')
    cy.get('[data-test-id="task"]').find(('[data-test-id="textItem"]')).should('be.visible').type('{enter}')
    cy.get('[data-test-id="checkbox"]').should('be.enabled')
    cy.get('[data-test-id="removeBtn"]').type('{enter}')
  })

  it("Multiple removing test", () => {
    const removeBtn = '[data-test-id="removeBtn"]'
    const taskInput = '[data-test-id="taskInput"]'
    const task = '[data-test-id="task"]'
    const textItem = '[data-test-id="textItem"]'
    const checkbox = '[data-test-id="checkbox"]'

    cy.get(taskInput)
      .focus().type('Testing1')
      .should('have.value', 'Testing1')
      .type('{enter}')
    cy.get(taskInput)
      .focus().type('Testing2')
      .should('have.value', 'Testing2')
      .type('{enter}')
    cy.get(taskInput)
      .focus().type('Testing3')
      .should('have.value', 'Testing3')
      .type('{enter}')
    cy.get(task).find((textItem)).eq(0).should('be.visible').type('{enter}')
    cy.get(task).find((textItem)).eq(1).should('be.visible').type('{enter}')
    cy.get(task).find((textItem)).eq(2).should('be.visible').type('{enter}')
    cy.get(checkbox).should('be.enabled')
    cy.get(removeBtn).type('{enter}')
  })
});
