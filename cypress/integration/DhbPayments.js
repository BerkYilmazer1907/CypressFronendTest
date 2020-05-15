/// <reference types="Cyrpress" />
/// Login With TFA
describe('DhbPayment', function () {
    beforeEach(function () {
        cy.SingInDHB()
    })
            it('PaymentEuroDhbSepa', function () {
                cy.contains("Payments").click()
                cy.wait(3000);
                cy.contains("Euro").click()
                cy.wait(3000);
                cy.get('.select2-selection__arrow').click()
                cy.get('.select2-results__options').find("li").contains("bulkpayment").click()
                cy.wait(5000);
                cy.get("div.global-content div.page-content div.container div.dc-gen-wrap.steply div.payment-form-wrap.payment-form-wrap-1.clearfix form.payout-form-step1:nth-child(1) > input.btn-style.pull-right.full-mobile:nth-child(4)").click()
                cy.wait(3000);
                cy.get("#payamount").type('30')
                cy.get("#pay-reference").type('test')
                cy.get("div.global-content div.page-content div.container div.dc-gen-wrap.steply div.row.payment-form-wrap.payment-form-wrap-2:nth-child(3) div.for-fee div.payment-form-wrap.clearfix form.step-form.payout-form-2 > input.btn-style.pull-right.full-mobile:nth-child(3)").click()
                cy.get("div.global-content div.page-content div.container div.dc-gen-wrap.steply div:nth-child(2) div.row.payment-form-wrap.payment-form-wrap-3:nth-child(2) div.for-fee > input.btn-style.pull-right.full-mobile:nth-child(4)").click()
                cy.contains('Payment Submitted', {timeout: 10000}).should('be.visible')
                cy.get('.user-icon').click()
                cy.contains("Log Out").click()
                cy.wait(3000)
            })
    })


