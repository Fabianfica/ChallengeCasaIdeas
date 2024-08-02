import LoginPage from "../component/home/loginPage";
import HomePage from "../component/home/homePage";
import CategoryPage from "../component/home/categoryPage";
import CheckoutPage from "../component/home/checkoutPage";

const loginPage = new LoginPage ();
const homePage = new HomePage ();
const categoryPage = new CategoryPage ();
const checkoutPage = new CheckoutPage ();
const itemData = require ('../component/home/productData.json');
const checkoutInfo = require ('../component/home/checkoutInfo.json');
//const personalInfo = require ('../component/home/personalInformation.json');


Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
  
  describe('Buscar productos', () => {
    beforeEach(() => {
      cy.visit('https://www.casaideas.cl/');
      cy.wait(4000) //timeout
      //cy.get('.decline-button').click({ force: true });
    });
    it('Mostrar el carro de compras y realizar el checkout', () => {
        //loginPage.clickIconLogin();
        loginPage.visit();
        loginPage.fillEmail('ffica.apr@gmail.com');
        loginPage.fillPassword('Pudahuel442');
        loginPage.submit();

      
      cy.wait(4000) //timeout
      //categoryPage.closeSecondMenu();
      homePage.visitMobileMenu();
      homePage.visitMenuProductos();
      homePage.visitMenuOutlet();

      categoryPage.searchItem(itemData.productName);
      categoryPage.clickOnDesireItem();
      categoryPage.validateImage();
      categoryPage.validatePrice();
      categoryPage.addFavorite();
      //productPage.clickOnPromotion();
      categoryPage.clickOnCookies();
      categoryPage.verifyMenuFavorite();
      categoryPage.verifyListFavorite();
      categoryPage.addItemToCart();
      categoryPage.addOtherItemToCart();
      checkoutPage.verifyCart();
      checkoutPage.clickOnPay();
      checkoutPage.clickOnModal();
      //shoppingCart.clickOnAddAddress();
      //shoppingCart.getComponent();
      checkoutPage.addCheckoutInformation(checkoutInfo.firstName, checkoutInfo.lastName, checkoutInfo.rut, checkoutInfo.telephone, checkoutInfo.street1Dir,checkoutInfo.street2Num, checkoutInfo.street3Depto);
      //shoppingCart.selectByTextRegion('COQUIMBO')
      //shoppingCart.selectByTextComuna('CANELA')
      checkoutPage.clickBottonSave()
    });
  });
