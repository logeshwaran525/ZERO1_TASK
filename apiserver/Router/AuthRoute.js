
import express from 'express';
import {SignUp,login} from '../Controllers/SignupController.js';
import { validation } from '../Controllers/ValidationContrillers.js';

const AuthRoute = express();

AuthRoute.get("/SignUp", SignUp); 
AuthRoute.get("/login", login); 
AuthRoute.get("/valid",validation)

export default AuthRoute;
