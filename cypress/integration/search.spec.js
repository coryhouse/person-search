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

  it("should show 'No Records Found' when no record matches the search", () => {
    cy.findByLabelText("Search by Last Name:").type("Words that don't match");
    cy.findByText("Search").click();
    cy.findByText("No Records Found");
  });

  it("should support editing a person", () => {
    cy.findByLabelText("Edit House with Id 1").click();
    cy.findByLabelText("Last Name")
      .clear()
      .type("New last name");
    cy.findByLabelText("Cancel editing Id 1");
    cy.findByLabelText("Save Id 1");
  });

  it.only("should support cancelling an edit", () => {
    cy.findByLabelText("Edit House with Id 1").click();
    cy.findByLabelText("Last Name")
      .clear()
      .type("New last name");
    cy.findByLabelText("Cancel editing Id 1").click();
    cy.findByText("House");

    // now let's click edit again and make sure the form is empty
    cy.findByLabelText("Edit House with Id 1").click();
    cy.findByLabelText("Last Name").should("have.value", "");
  });
});
