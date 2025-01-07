
import express from 'express';
// apiserver/Router/AuthRoute.js
import { validation } from '../Controllers/SignupController.js'; // Ensure the path is correct


const AuthRoute = express();

AuthRoute.get("/validation", validation); // Route for validation
/* AuthRoute.get("/login", Login); // Route for login */

export default AuthRoute; // Export the router
