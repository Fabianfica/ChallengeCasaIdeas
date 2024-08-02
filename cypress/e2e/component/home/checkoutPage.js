class checkoutPage {


verifyCart() {
    cy.get('.CartSidebarView_minicart-item-totals-container__H7iho > ul > :nth-child(1)').should('exist')
    cy.get('.CartSidebarView_cart-total-wrapper__blEc1').should('exist')
}

clickOnPay() {
    cy.get('.CartSidebarView_minicart-item-totals__uaI8v > .Button_root__mZAHs').click();
}

//clickOnAddAddress() {
    //cy.get('.ShippingMethodsForm_add-address__Bpqoz').click();
//}

clickOnModal() {
    cy.get('.exponea-close-cross').click();
}

addCheckoutInformation(firstName, lastName, rut, telephone, street1Dir, street2Num, street3Depto) {
        cy.get('.Checkout_active__oNIRp > :nth-child(1) > label > .form-radio').then($button => {
        if ($button.is(':visible')){
            cy.get('.Checkout_place-order-desc__ymrWh > .Checkbox_container__3E1xq > .mt-3 > .form-checkbox').check();
            //cy.get('.Button_root__mZAHs > span').click();
        }else{
            cy.get(cy.get('.ShippingMethodsForm_add-address__Bpqoz')).click();
            cy.get('input[name="firstname"]').focus().type(firstName, { force: true });
            cy.get('#lastname').clear().type(lastName);
            cy.get(':nth-child(1) > .form-section > :nth-child(3) > .appearance-none').clear().type(rut);
            cy.get('#telephone').clear().type(telephone);
            cy.get('#street1').clear().type(street1Dir);
            cy.get('#street2').clear().type(street2Num);
            cy.get('#street3').clear().type(street3Depto);
            //return cy.get('div.py-2').click(); 
        }
      })
}
selectDropdownRegion() {
    return cy.get('div.py-2').click();
}

selectElementRegion() {
    return this.selectDropdownRegion().find('select')
}

selectByTextRegion(textRegion) {
    this.selectElementRegion().select(textRegion)
}

selectDropdownComuna() {
    return cy.get('div.mt-4').click();
}

selectElementComuna() {
    return this.selectDropdownComuna().find('select')
}

selectByTextComuna(textComuna) {
    this.selectElementComuna().select(textComuna)
}

clickBottonSave() {
    cy.get('.Checkout_form-buttons-container__nri9J > .Button_root__mZAHs').click();
}

getComponent() {
    cy.get('div.Checkout_checkout-address-tiles__dgFKy').should('be.visible')
}

} 

export default checkoutPage