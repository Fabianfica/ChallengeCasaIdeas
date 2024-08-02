import LoginPage from "../component/home/loginPage";
import HomePage from "../component/home/homePage";
import CategoryPage from "../component/home/categoryPage";

const loginPage = new LoginPage ();
const homePage = new HomePage ();
const categoryPage = new CategoryPage ();
const itemData = require ('../component/home/productData.json');

before(() => {
    cy.viewport('iphone-xr');
  });

  it('Acceder al sitio y realizar acciones', () => {
    // Acceder al sitio
    loginPage.visit();

    // Iniciar sesión
    loginPage.fillEmail('ffica.apr@gmail.com');
    loginPage.fillPassword('Pudahuel442');
    loginPage.submit();

    // Esperar a que la página cargue después del inicio de sesión
    cy.wait(4000);

    // Seleccionar una categoría a elección
    homePage.visitMobileMenu('MENU'); // Reemplaza 'CATEGORÍA_EJEMPLO' con la categoría deseada

    // Seleccionar una subcategoría
    homePage.visitMenuProductos('SUBCATEGORÍA_EJEMPLO'); // Reemplaza 'SUBCATEGORÍA_EJEMPLO' con la subcategoría deseada

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

});
