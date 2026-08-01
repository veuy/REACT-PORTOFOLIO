describe("Add Project", () => {
  // Before each test, sign in by setting a valid token in localStorage
  // You need a valid JWT token from signing in first.
  // Alternative: sign in via the signin page first, then navigate.
  beforeEach(() => {
    // Sign in via the UI first
    cy.visit("/signin");
    // Use credentials that match an existing user in your database
    // Replace with actual test credentials or use signup to create one
    cy.get("#email").type("admin@example.com");
    cy.get("#password").type("admin123");
    cy.get("button[type='submit']").click();
    cy.url().should("include", "/admin");
  });

  it("should add a new project", () => {
    cy.visit("/admin/projects/new");

    cy.get("#title").type("Cypress Test Project");
    cy.get("#completion").type("2026-12-31");
    cy.get("#description").type("This project was created by Cypress E2E tests.");
    cy.get("#image").type("https://via.placeholder.com/800x450.png?text=Test");

    cy.get("button[type='submit']").click();

    // Should redirect back to project list
    cy.url().should("include", "/admin/projects");
    // The new project should appear in the table
    cy.contains("Cypress Test Project").should("be.visible");
  });
});