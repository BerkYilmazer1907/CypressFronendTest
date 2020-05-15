/// <reference types="Cyrpress" />

/// Login With TFA
describe('Login', function () {
    before(function () {
        cy.SingInLhv()
    })
    it('Conversion', function () {
        cy.contains("Conversions").click()
        cy.wait(3000);
        cy.get("#conversionamount").type('100')
        cy.wait(3000);
        cy.get("div.global-content div.page-content div.container div.dc-gen-wrap div.overview-area.conversion-area.clearfix div.col-lg-6.col-md-6.col-sm-12.col-xs-12:nth-child(1) div.frame form:nth-child(1) div.clearfix div.col-lg-12.col-md-12.col-sm-12.col-xs-12:nth-child(7) > input.btn-style.pull-right.full-mobile").click()
        cy.get("div.global-content div.page-content div.container div.dc-gen-wrap div.conversion-2.col-lg-7.col-md-10.col-sm-10.col-xs-12.centered div.info-area:nth-child(4) form.quote-form div.frame div.checkbox > label:nth-child(2)").click()
        cy.wait(3000);
        cy.get("#confirmExchange").click()
    })
})