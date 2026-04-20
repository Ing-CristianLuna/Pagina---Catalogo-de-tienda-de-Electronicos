const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('../swagger-output.json');

const swaggerSetup = (app) => {
    app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));
};

module.exports = swaggerSetup;


//Para actualizar documentacion:
//npm run swagger