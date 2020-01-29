describe("Search", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should filter results via search", () => {
    // should display the record count
    cy.findByText("2 Records Found");
    cy.findByLabelText("Search by Last Name:").type("H");
    cy.findByText("Search").click();
    cy.findByText("1 Record Found");
  });

  it.only("should show 'No Records Found' when no record matches the search", () => {
    cy.findByLabelText("Search by Last Name:").type("Words that don't match");
    cy.findByText("Search").click();
    cy.findByText("No Records Found");
  });
});
