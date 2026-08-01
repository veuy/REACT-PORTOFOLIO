describe("Sign In", () => {
  // Assumes you have a user created beforehand (e.g. from signup.cy.js or a pre-existing account)
  // Replace these credentials with a known valid account or use the signup test first
  const email = "admin@example.com";
  const password = "admin123";

  it("should sign in and redirect to admin dashboard", () => {
    cy.visit("/signin");

    cy.get("#email").type(email);
    cy.get("#password").type(password);

    cy.get("button[type='submit']").click();

    // Should redirect to admin dashboard after successful sign in
    cy.url().should("include", "/admin");
    cy.contains("Admin Dashboard").should("be.visible");
  });

  it("should show error for invalid credentials", () => {
    cy.visit("/signin");

    cy.get("#email").type("wrong@example.com");
    cy.get("#password").type("wrongpassword");

    cy.get("button[type='submit']").click();

    // Should show an error message
    cy.get(".admin-error").should("be.visible");
  });
});