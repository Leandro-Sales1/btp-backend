import swaggerJsDoc from "swagger-jsdoc";

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0", 
    info: {
      title: "API Rest to BTP-App",
      version: "1.0.0",
      description: "API Docs",
      contact: {
        name: "Leandro Sales",
      },
    },
    servers: [
      {
        url: "https://btp-backend-kappa.vercel.app/", 
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT", 
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ["./src/routes/*.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
export default swaggerDocs;
