class HomePage {
    // selectCategory(category) {
    //   //cy.get('a').contains('PRODUCTOS').click();
    //   cy.get('#navbar').click();
    // }
  
    // selectSubCategory(subCategory) {
    //   cy.get('a').contains(subCategory).click();
    // }
  
    // verifyProductPrices() {
    //   cy.get('.product-card')
    //     .each(($el) => {
    //       cy.wrap($el).find('.product-price').should('not.be.empty');
    //     });
    // }
  
    // searchProduct(productName) {
    //   cy.get('input[placeholder="Buscar"]').type(productName);
    //   cy.get('button[type="submit"]').contains('Buscar').click();
    // }
  
    // verifySearchResults(productName) {
    //   cy.get('.product-list').should('contain', productName);
    // }

    visitMobileMenu(){
        cy.get('.Navbar_nav-container-inner__SAqO_ > .Navbar_megamenu-cms__cBjN3 > .DesktopMegamenu_desktop-megamenu__SwitM > .opacity-100').click();
    }
    
    visitMenuProductos() {
        cy.get('.MobileMegaMenu_mobile-categories__unxpJ > :nth-child(2) > span > p').first().click();
    }
     
    closeSecondMenu(){
        cy.get('.exponea-close').click();
    }
    
    visitMenuOutlet() {
        //cy.wait(4000)
        cy.get('span > strong > a').click();
    }
   
}
  
  export default HomePage;