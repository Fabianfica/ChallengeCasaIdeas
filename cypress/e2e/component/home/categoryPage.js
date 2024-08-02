class CategoryPage {
//     verifyProductPrices() {
//       cy.get('.product-card')
//         .each(($el) => {
//           cy.wrap($el).find('.product-price').should('not.be.empty');
//         });
//     }
//   }

searchItem(item){
    cy.get('.Navbar_mobile-search-icon__BfW6v > .flex > .Searchbar_searchbar-main__mcbXv > #mobile-search')
      .type(item)
      .type('{enter}');
}
clickOnDesireItem(){
    cy.wait(3000);
    cy.get(':nth-child(2) > .SearchAutocomplete_autocomplete-product-tiny-name__GbqnK > :nth-child(1) > h6')
      .click();
    cy.wait(6000);
}
validateImage(){
    cy.get('[alt="Imagen de producto"]').should('exist');
}
validatePrice(){
    cy.get('.ProductPrice_total-price__taby6').should('exist')
}
addFavorite(){
    cy.get('.PDP_add-to-wishlist-btn__vfxn1').click();
}
clickOnPromotion(){
    cy.get('.btn2').click();
}
clickOnCookies(){
    cy.get('.FeatureBar_root__oNfaI > .Button_root__mZAHs > span').click();
}
verifyMenuFavorite(){
    cy.get('.inline-block > .opacity-100').click();
}
verifyListFavorite(){
    cy.get('.Navbar_nav-container-inner__SAqO_ > .Navbar_megamenu-cms__cBjN3 > .MobileMegaMenu_megamenu-cms-mobile__XaOq_ > .MobileMegaMenu_megamenu-main-menu-wrap__YnVnS > .MobileMegaMenu_mobile-categories__unxpJ > .MobileMegaMenu_megamenu-container-bottom__0MVY0 > :nth-child(1)').click();
}
addItemToCart(){
    cy.get('.Wishlist_wishlist-add-cart__FoHcK > .Button_root__mZAHs > span').click();
}
addOtherItemToCart(){
    cy.get('[aria-label="Add"]').click();
}
}
  
  export default CategoryPage;