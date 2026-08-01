describe("Sign Out", () => {
  beforeEach(() => {
    // Sign in first
    cy.visit("/signin");
    cy.get("#email").type(Cypress.env("userEmail"));
    cy.get("#password").type(Cypress.env("userPassword"));
    cy.get("button[type='submit']").click();
    cy.url().should("include", "/admin");
  });

  it("should sign out and redirect to home page", () => {
    // Click the Sign Out button on the admin dashboard
    cy.contains("Sign Out").click();

    // Should redirect to home page
    cy.url().should("eq", Cypress.config().baseUrl + "/");

    // Admin link should no longer be visible in the nav
    cy.contains("Admin").should("not.exist");
  });

  it("should not allow access to admin routes after sign out", () => {
    // Sign out first
    cy.contains("Sign Out").click();

    // Try to access admin dashboard directly
    cy.visit("/admin");

    // Should be redirected to sign in page
    cy.url().should("include", "/signin");
  });
});