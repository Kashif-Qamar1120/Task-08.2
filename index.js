const express = require('express');
const app = express();
const port = 2000;
// Import routers
const usersRouter = require('./ecommerceRoutes');
const productsRouter = require('./passwordStrengthRoutes');
// Mount the routers at specific paths
app.use('/ecommerce', usersRouter);
app.use('/password', productsRouter);
app.use("/" , (req , res) => {
    res.send("Welcome to API, you see the product then you write ecommerce/products")
});

app.listen(port, () => {
console.log(`Server running on port http://localhost:${port}`);
});
