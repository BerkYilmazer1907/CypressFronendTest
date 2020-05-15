/// <reference types="Cyrpress" />
/// Login With TFA
describe('LhvBeneficiaries', function () {
    beforeEach(function () {
        cy.SingInLhv()
    })
    it('AddBeneficiaryGbpSwiftPayment', function () {
        cy.contains("Beneficiaries").click()
        cy.contains("Add Beneficiary").click()
        cy.wait(3000);
        cy.contains("Continue").click()
        cy.get("div.global-content div.page-content div.container div.dc-gen-wrap div.col-lg-7.col-md-10.col-sm-10.col-xs-12.centered div.addbeneficiary2-form-wrap.clearfix div.frame.upper div.row:nth-child(2) div.payment-types-wrapper.clearfix div.col-lg-6.col-md-6.col-sm-6.col-xs-12:nth-child(1) div.checkbox.custom label:nth-child(2) > span:nth-child(1)").click()
        cy.wait(3000);
        cy.get("#holderName-1").type('automationlhvswiftben')
        cy.get("#iban-1").type('GB89BARC20320023233545')
        cy.get("#bic-1").type('ABDIGB2L')
        cy.get("div.global-content div.page-content div.container div.dc-gen-wrap div.col-lg-7.col-md-10.col-sm-10.col-xs-12.centered div.addbeneficiary2-form-wrap.clearfix form:nth-child(1) div.row div.col-lg-12.col-md-12.col-sm-12.col-xs-12 > button.btn-style.pull-right:nth-child(2)").click()
        cy.wait(5000);
        cy.get("#title-0").type('automationlhvswiftben')
        cy.get("#email-0").type('automationlhv@com.com')
        cy.get("#line-0").type('test')
        cy.get("#name-0").type('automationlhvswiftben')
        cy.get("#postalCode-0").type('12312312')
        cy.get("#city-0").type('London')
        cy.get("div.global-content div.page-content div.container div.dc-gen-wrap div.col-lg-7.col-md-10.col-sm-10.col-xs-12.centered div.addbeneficiary2-form-wrap.clearfix form:nth-child(1) div.row div.col-lg-12.col-md-12.col-sm-12.col-xs-12 > button.btn-style.pull-right:nth-child(2)").click()
        cy.wait(5000);
        cy.get("div.global-content div.page-content div.container div.dc-gen-wrap.beneficiary-success div.addbeneficiary3-form-wrap.col-lg-7.col-md-10.col-sm-10.col-xs-12.centered:nth-child(1) div.row.willhide:nth-child(5) div.col-lg-12.col-md-12.col-sm-12.col-xs-12 > button.btn-style.pull-right.full-mobile:nth-child(2)").click()
        cy.get("div.modal-content.customized-modal.beneficiary-twoFa-modal div.twoFa-body form.verification-form div.clearfix > input.codeInput.form-input").type('12345')
        cy.get("div:nth-child(1) div.modal-content.customized-modal.beneficiary-twoFa-modal div.twoFa-body form.verification-form > button.btn-style.pull-right").click()
        cy.contains('Great, beneficiary', {timeout: 10000}).should('be.visible')
    })
    it('AddBeneficiaryGbpExpressSwiftPayment', function () {
        cy.contains("Beneficiaries").click()
        cy.contains("Add Beneficiary").click()
        cy.wait(3000);
        cy.contains("Continue").click()
        cy.get("div.global-content div.page-content div.container div.dc-gen-wrap div.col-lg-7.col-md-10.col-sm-10.col-xs-12.centered div.addbeneficiary2-form-wrap.clearfix div.frame.upper div.row:nth-child(2) div.payment-types-wrapper.clearfix div.col-lg-6.col-md-6.col-sm-6.col-xs-12:nth-child(2) div.checkbox.custom > label:nth-child(2)").click()
        cy.wait(3000);
        cy.get("#holderName-0").type('automationlhvswiftben')
        cy.get("#iban-0").type('GB89BARC20320023233545')
        cy.get("#bic-0").type('ABDIGB2L')
        cy.get("div.global-content div.page-content div.container div.dc-gen-wrap div.col-lg-7.col-md-10.col-sm-10.col-xs-12.centered div.addbeneficiary2-form-wrap.clearfix form:nth-child(1) div.row div.col-lg-12.col-md-12.col-sm-12.col-xs-12 > button.btn-style.pull-right:nth-child(2)").click()
        cy.wait(5000);
        cy.get("#title-0").type('automationlhvswiftben')
        cy.get("#email-0").type('automationlhv@com.com')
        cy.get("#line-0").type('test')
        cy.get("#name-0").type('automationlhvswiftben')
        cy.get("#postalCode-0").type('12312312')
        cy.get("#city-0").type('London')
        cy.get("div.global-content div.page-content div.container div.dc-gen-wrap div.col-lg-7.col-md-10.col-sm-10.col-xs-12.centered div.addbeneficiary2-form-wrap.clearfix form:nth-child(1) div.row div.col-lg-12.col-md-12.col-sm-12.col-xs-12 > button.btn-style.pull-right:nth-child(2)").click()
        cy.wait(5000);
        cy.get("div.global-content div.page-content div.container div.dc-gen-wrap.beneficiary-success div.addbeneficiary3-form-wrap.col-lg-7.col-md-10.col-sm-10.col-xs-12.centered:nth-child(1) div.row.willhide:nth-child(5) div.col-lg-12.col-md-12.col-sm-12.col-xs-12 > button.btn-style.pull-right.full-mobile:nth-child(2)").click()
        cy.get("div.modal-content.customized-modal.beneficiary-twoFa-modal div.twoFa-body form.verification-form div.clearfix > input.codeInput.form-input").type('12345')
        cy.get("div:nth-child(1) div.modal-content.customized-modal.beneficiary-twoFa-modal div.twoFa-body form.verification-form > button.btn-style.pull-right").click()
        cy.contains('Great, beneficiary', {timeout: 10000}).should('be.visible')
    })
    it('AddBeneficiaryGbpSwiftAndExpressSwiftPayment', function () {
        cy.contains("Beneficiaries").click()
        cy.contains("Add Beneficiary").click()
        cy.wait(3000);
        cy.contains("Continue").click()
        cy.wait(3000);
        cy.get("div.global-content div.page-content div.container div.dc-gen-wrap div.col-lg-7.col-md-10.col-sm-10.col-xs-12.centered div.addbeneficiary2-form-wrap.clearfix div.frame.upper div.row:nth-child(2) div.payment-types-wrapper.clearfix div.col-lg-6.col-md-6.col-sm-6.col-xs-12:nth-child(1) div.checkbox.custom > label:nth-child(2)").click()
        cy.get("div.global-content div.page-content div.container div.dc-gen-wrap div.col-lg-7.col-md-10.col-sm-10.col-xs-12.centered div.addbeneficiary2-form-wrap.clearfix div.frame.upper div.row:nth-child(2) div.payment-types-wrapper.clearfix div.col-lg-6.col-md-6.col-sm-6.col-xs-12:nth-child(2) div.checkbox.custom > label:nth-child(2)").click()
        cy.wait(3000);
        cy.get("#holderName-2").type('automationlhvswiftben')
        cy.get("#iban-2").type('GB89BARC20320023233545')
        cy.get("#bic-2").type('ABDIGB2L')
        cy.get("div.global-content div.page-content div.container div.dc-gen-wrap div.col-lg-7.col-md-10.col-sm-10.col-xs-12.centered div.addbeneficiary2-form-wrap.clearfix form:nth-child(1) div.row div.col-lg-12.col-md-12.col-sm-12.col-xs-12 > button.btn-style.pull-right:nth-child(2)").click()
        cy.wait(5000);
        cy.get("#title-0").type('automationlhvswiftben')
        cy.get("#email-0").type('automationlhv@com.com')
        cy.get("#line-0").type('test')
        cy.get("#name-0").type('automationlhvswiftben')
        cy.get("#postalCode-0").type('12312312')
        cy.get("#city-0").type('London')
        cy.get("div.global-content div.page-content div.container div.dc-gen-wrap div.col-lg-7.col-md-10.col-sm-10.col-xs-12.centered div.addbeneficiary2-form-wrap.clearfix form:nth-child(1) div.row div.col-lg-12.col-md-12.col-sm-12.col-xs-12 > button.btn-style.pull-right:nth-child(2)").click()
        cy.wait(5000);
        cy.get("div.global-content div.page-content div.container div.dc-gen-wrap.beneficiary-success div.addbeneficiary3-form-wrap.col-lg-7.col-md-10.col-sm-10.col-xs-12.centered:nth-child(1) div.row.willhide:nth-child(5) div.col-lg-12.col-md-12.col-sm-12.col-xs-12 > button.btn-style.pull-right.full-mobile:nth-child(2)").click()
        cy.get("div.modal-content.customized-modal.beneficiary-twoFa-modal div.twoFa-body form.verification-form div.clearfix > input.codeInput.form-input").type('12345')
        cy.get("div:nth-child(1) div.modal-content.customized-modal.beneficiary-twoFa-modal div.twoFa-body form.verification-form > button.btn-style.pull-right").click()
        cy.contains('Great, beneficiary', {timeout: 10000}).should('be.visible')
    })
    it('AddBeneficiaryEuroSepaPayment', function () {
        cy.contains("Beneficiaries").click()
        cy.contains("Add Beneficiary").click()
        cy.wait(3000);
        cy.get('.select2-selection__arrow').click()
        cy.get('.select2-results__options').find("li").contains("Euro").click()
        cy.contains("Continue").click()
        cy.wait(3000);
        cy.get("#holderName-0").type('automationlhvsepaben')
        cy.get("#iban-0").type('DE89370400440532013000')
        cy.get("#bic-0").type('AARBDE5W100')
        cy.get("div.global-content div.page-content div.container div.dc-gen-wrap div.col-lg-7.col-md-10.col-sm-10.col-xs-12.centered div.addbeneficiary2-form-wrap.clearfix form:nth-child(1) div.row div.col-lg-12.col-md-12.col-sm-12.col-xs-12 > button.btn-style.pull-right:nth-child(2)").click()
        cy.wait(5000);
        cy.get("#title-0").type('automationlhvswiftben')
        cy.get("#email-0").type('automationlhv@com.com')
        cy.get("#line-0").type('test')
        cy.get("#name-0").type('automationlhvswiftben')
        cy.get("#postalCode-0").type('12312312')
        cy.get("#city-0").type('London')
        cy.get("div.global-content div.page-content div.container div.dc-gen-wrap div.col-lg-7.col-md-10.col-sm-10.col-xs-12.centered div.addbeneficiary2-form-wrap.clearfix form:nth-child(1) div.row div.col-lg-12.col-md-12.col-sm-12.col-xs-12 > button.btn-style.pull-right:nth-child(2)").click()
        cy.wait(5000);
        cy.get("div.global-content div.page-content div.container div.dc-gen-wrap.beneficiary-success div.addbeneficiary3-form-wrap.col-lg-7.col-md-10.col-sm-10.col-xs-12.centered:nth-child(1) div.row.willhide:nth-child(5) div.col-lg-12.col-md-12.col-sm-12.col-xs-12 > button.btn-style.pull-right.full-mobile:nth-child(2)").click()
        cy.get("div.modal-content.customized-modal.beneficiary-twoFa-modal div.twoFa-body form.verification-form div.clearfix > input.codeInput.form-input").type('12345')
        cy.get("div:nth-child(1) div.modal-content.customized-modal.beneficiary-twoFa-modal div.twoFa-body form.verification-form > button.btn-style.pull-right").click()
        cy.contains('Great, beneficiary', {timeout: 10000}).should('be.visible')
    })
})

