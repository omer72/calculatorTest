const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const yaml = require('yamljs');
const swaggerUi = require('swagger-ui-express');
const Calculator = require("./services/calculatorService");

const app = express();
const PORT = process.env.PORT || 3000;

// Load YAML file
const swaggerDocument = yaml.load('api/openapi.yaml');

app.use(bodyParser.json());

// Serve Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Secret key for JWT
const secretKey = 'your_secret_key';

// Authorization middleware
const authorize = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) return res.status(401).send('Access Denied');

    try {
        req.user = jwt.verify(token, secretKey);
        next();
    } catch (err) {
        res.status(400).send('Invalid Token');
    }
};

// API endpoint
app.post('/calculate', authorize, (req, res) => {
    Calculator.calculate(req, res);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
