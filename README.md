Cypress Automation Testing - Casa ideas
Este proyecto contiene pruebas automatizadas para el sitio web casa ideas en vista mobile, que simula un entorno de comercio electrónico para demostrar las capacidades de pruebas de Cypress.

Configuración del Proyecto
Para comenzar, asegúrate de tener instalado Node.js y npm. Luego, clona este repositorio y ejecuta npm install para instalar las dependencias.

Estructura del Proyecto
El proyecto sigue la metodología Page Object Model (POM) para mejorar el mantenimiento y la reusabilidad del código. Los elementos de la página y las acciones se encapsulan dentro de clases de objetos de página.

Pruebas Implementadas
Login: inicio de sesion y de error
Catálogo de Productos: Pruebas para el listado de productos, buscador de productos, imágenes, títulos y subtítulos.
Checkout: Pruebas para los formularios de checkout, incluyendo la página de detalles y la confirmación de compra.
End-to-End (E2E): Flujo completo de compra de al menos 1 artículo desde el inicio de sesión hasta la confirmación de la compra.
Ejecución de Pruebas
Para ejecutar las pruebas, utiliza el siguiente comando:

npx cypress open
