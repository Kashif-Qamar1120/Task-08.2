const express = require('express');
const productsRouter = express.Router();
// const PORT = 2000;
// Middleware for logging
const loggerMiddleware = (req, res, next) => {
console.log(`[${new Date().toUTCString()}] ${req.method} ${req.url}`);
next();
};
// Middleware for authentication
const authenticateUser = (req, res, next) => {
// Simulated authentication (In reality, this would involve user authentication logic)
const isLoggedIn = true; // Assume the user is authenticated
if (isLoggedIn) {
next(); // Continue to the next middleware or route handler
} else {
res.status(401).send('Unauthorized. Please log in.');
}
};
// Using the authenticateUser middleware in a route
productsRouter.get('/dashboard', authenticateUser, (req, res) => {
// If the middleware passes, the user is authenticated
res.send('Welcome to the dashboard!');
})

// Middleware for parsing incoming requests
//productsRouter.use(express.urlencoded({ extended: true }));
//productsRouter.use(express.json());
//productsRouter.use(loggerMiddleware);
// Simulated Database (In reality, this would connect to a database)
const products = [
{ id: 1, name: 'Product 1', price: 25 },
{ id: 2, name: 'Product 2', price: 30 },
{ id: 3, name: 'Product 3', price: 40 },
{ id: 4, name: 'Product 4', price: 50 },
{ id: 5, name: 'Product 5', price: 60 },
{ id: 6, name: 'Product 6', price: 70 },
];
// Route for displaying products
productsRouter.get('/products', (req, res) => {
res.json(products);
});
// Route for adding a product to the cart (simulated cart)
productsRouter.post('/cart/add/:productId', authenticateUser, (req, res) => {
const productId = parseInt(req.params.productId);
const selectedProduct = products.find(product => product.id === productId);
if (selectedProduct) {
// Simulated cart addition (In reality, this would update the user's cart)
res.send(`Added ${selectedProduct.name} to the cart.`);
} else {
res.status(404).send('Product not found.');
}
});

// Route to view product details by ID
productsRouter.get('/products/:id', (req, res) => {
const productId = req.params.id;
// Find the product by ID (dummy logic)
const product = products.find((p) => p.id === parseInt(productId));
if (!product) {
res.status(404).send('Product not found');
return;
}
res.json(product); // Sending product details as JSON
});
// Route for user authentication
productsRouter.post('/login', (req, res) => {
// Simulated login logic (In reality, this would validate user credentials)
const { username, password } = req.body;
if (username === 'user' && password === 'password') {
res.send('Login successful!');
} else {
res.status(401).send('Invalid credentials.');
}
});
// Starting the server
// app.listen(PORT, () => {
// console.log(`Server is running on port ${PORT}`);
// });
module.exports = productsRouter;