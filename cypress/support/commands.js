Cypress.Commands.add("SingInLhv", () => {

    cy.visit("https://test-console.openpayd.com/login")
    cy.contains('I Understand').click()
    cy.get("#loginId").type('bulkpayment4@com.com')
    cy.get("#loginPass").type('Test1234')
    cy.get("button").contains('Sign In').click()
    cy.get("#verificationCode").type('12345')
    cy.wait(3000);
    cy.get("div.sub-page.login:nth-child(4) div.container:nth-child(1) div.minified-container div.row.flexible:nth-child(2) div.verification-box.col-md-5.col-sm-12.cols.col-1 div:nth-child(1) form.verification-form > button.blue-button:nth-child(5)").contains('Sign In').click()
    cy.contains('Convert Currency', {timeout: 10000}).should('be.visible')
})

Cypress.Commands.add("SingInDHB", () => {

    cy.visit("https://test-console.openpayd.com/login")
    cy.contains('I Understand').click()
    cy.get("#loginId").type('bulkpayment1@com.com')
    cy.get("#loginPass").type('Test1234')
    cy.get("button").contains('Sign In').click()
    cy.get("#verificationCode").type('12345')
    cy.wait(3000);
    cy.get("div.sub-page.login:nth-child(4) div.container:nth-child(1) div.minified-container div.row.flexible:nth-child(2) div.verification-box.col-md-5.col-sm-12.cols.col-1 div:nth-child(1) form.verification-form > button.blue-button:nth-child(5)").contains('Sign In').click()
    cy.contains('Convert Currency', {timeout: 10000}).should('be.visible')
})
Cypress.Commands.add("SingInCLB", () => {

    cy.visit("https://test-console.openpayd.com/login")
    cy.contains('I Understand').click()
    cy.get("#loginId").type('bulkpayment1@com.com')
    cy.get("#loginPass").type('Test1234')
    cy.get("button").contains('Sign In').click()
    cy.get("#verificationCode").type('12345')
    cy.wait(3000);
    cy.get("div.sub-page.login:nth-child(4) div.container:nth-child(1) div.minified-container div.row.flexible:nth-child(2) div.verification-box.col-md-5.col-sm-12.cols.col-1 div:nth-child(1) form.verification-form > button.blue-button:nth-child(5)").contains('Sign In').click()
    cy.contains('Convert Currency', {timeout: 10000}).should('be.visible')
})
Cypress.Commands.add("SingInBBS", () => {

    cy.visit("https://test-console.openpayd.com/login")
    cy.contains('I Understand').click()
    cy.get("#loginId").type('martin@fairhurst.com')
    cy.get("#loginPass").type('Test1234')
    cy.get("button").contains('Sign In').click()
    cy.get("#verificationCode").type('12345')
    cy.wait(3000);
    cy.get("div.sub-page.login:nth-child(4) div.container:nth-child(1) div.minified-container div.row.flexible:nth-child(2) div.verification-box.col-md-5.col-sm-12.cols.col-1 div:nth-child(1) form.verification-form > button.blue-button:nth-child(5)").contains('Sign In').click()
    cy.contains('Convert Currency', {timeout: 10000}).should('be.visible')
})
Cypress.Commands.add("SingInFMX", () => {

    cy.visit("https://test-console.openpayd.com/login")
    cy.contains('I Understand').click()
    cy.get("#loginId").type('michelpub1@yopmail.com')
    cy.get("#loginPass").type('Test12345')
    cy.get("button").contains('Sign In').click()
    cy.get("#verificationCode").type('12345')
    cy.wait(3000);
    cy.get("div.sub-page.login:nth-child(4) div.container:nth-child(1) div.minified-container div.row.flexible:nth-child(2) div.verification-box.col-md-5.col-sm-12.cols.col-1 div:nth-child(1) form.verification-form > button.blue-button:nth-child(5)").contains('Sign In').click()
    cy.contains('Convert Currency', {timeout: 10000}).should('be.visible')
})
