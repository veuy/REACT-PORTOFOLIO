describe("Edit Project", () => {
  beforeEach(() => {
    // Sign in first
    cy.visit("/signin");
    cy.get("#email").type("admin@example.com");
    cy.get("#password").type("admin123");
    cy.get("button[type='submit']").click();
    cy.url().should("include", "/admin");
  });

  it("should edit an existing project", () => {
    // Navigate to the project list
    cy.visit("/admin/projects");

    // Click the Edit button on the first project in the table
    cy.get(".admin-table tbody tr").first().find("a.button-secondary").click();

    // Clear the title and type a new one
    cy.get("#title").clear().type("Updated Cypress Project");

    cy.get("button[type='submit']").click();

    // Should redirect back to project list
    cy.url().should("include", "/admin/projects");
    // The updated project title should appear
    cy.contains("Updated Cypress Project").should("be.visible");
  });
});