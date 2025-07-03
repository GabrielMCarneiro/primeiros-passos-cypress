class MyInfoPage {

    selectorsList() {
        const selectors = {
            firstNameField: "[name='firstName']",
            lastNameField: "[name='lastName']",
            genericField: ".oxd-input--active",
            dateField: "[placeholder='yyyy-dd-mm']",
            closeDateField: ".--close",
            submitButton: "[type='submit']",
            dropdownField: ".oxd-select-text--active",
            selectNationality: ".oxd-select-dropdown > :nth-child(27)",
            selectMaritalStatus: ".oxd-select-dropdown > :nth-child(2)",
        }

        return selectors
    }

    fillPersonalDetails(firstName, lastName, employeeId, otherId, driversLicenseNumber, licenseExpireDate) {
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
        cy.get(this.selectorsList().genericField).eq(3).clear().type(employeeId)
        cy.get(this.selectorsList().genericField).eq(4).clear().type(otherId)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(driversLicenseNumber)
        cy.get(this.selectorsList().dateField).eq(0).clear().type(licenseExpireDate)
        cy.get(this.selectorsList().closeDateField).click()
        cy.get(this.selectorsList().dropdownField).eq(0).click()
        cy.get(this.selectorsList().selectNationality).click()
        cy.get(this.selectorsList().dropdownField).eq(1).click()
        cy.get(this.selectorsList().selectMaritalStatus).click()
    }

    saveInformations() {
        cy.get(this.selectorsList().submitButton).eq(0).click()
        cy.get("body").should("contain", "Successfully Updated")
    }
}

export default MyInfoPage