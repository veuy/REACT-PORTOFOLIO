describe("Sign Up", () => {
  it("should sign up a new user and redirect to admin dashboard", () => {
    const uniqueEmail = `testuser_${Date.now()}@example.com`;

    cy.visit("/signup");

    cy.get("#firstname").type("Test");
    cy.get("#lastname").type("User");
    cy.get("#email").type(uniqueEmail);
    cy.get("#password").type("password123");

    cy.get("button[type='submit']").click();

    // Should redirect to admin dashboard after successful sign up
    cy.url().should("include", "/admin");
    cy.contains("Admin Dashboard").should("be.visible");
  });
});