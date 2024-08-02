import LoginPage from '../component/home/loginPage';
import HomePage from '../component/home/homePage';
import CategoryPage from '../component/home/categoryPage';

describe('Pruebas automatizadas en Cypress con POM', () => {
  const loginPage = new LoginPage();
  const homePage = new HomePage();
  const categoryPage = new CategoryPage();

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

    // it('should show an error message for invalid username', () => {
    //   loginPage.fillUsername('wrong_user');
    //   loginPage.fillPassword('secret_sauce');
    //   loginPage.submit();
    //   loginPage.errorMessage().should('contain', 'Username and password do not match');
    // }

    // Esperar a que la página cargue después del inicio de sesión
    cy.wait(4000);

    // Seleccionar una categoría a elección
    homePage.visitMobileMenu('MENU'); // Reemplaza 'CATEGORÍA_EJEMPLO' con la categoría deseada

    // Seleccionar una subcategoría
    homePage.visitMenuProductos('SUBCATEGORÍA_EJEMPLO'); // Reemplaza 'SUBCATEGORÍA_EJEMPLO' con la subcategoría deseada

    homePage.visitMenuOutlet();
  });
});