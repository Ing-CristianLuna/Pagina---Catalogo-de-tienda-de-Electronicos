const swaggerAutogen = require("swagger-autogen");

const doc = {
    info: {
        title: 'Mi API',
        description: 'Documentación de mi API'
    },
    host: 'localhost:3000'
};

const outputFile = "./swagger-output.json";

const routes = ["./src/app.js"];

swaggerAutogen(outputFile, routes, doc);