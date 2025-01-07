import express from 'express';
import cors from 'cors';
 import AuthRoute from './apiserver/Router/AuthRoute.js'; 

const app = express();
const PORT = 5000;

app.use(cors());
app.get("/", (req, res) => {
    res.send("Hi this is from server");
});
app.use("/auth",AuthRoute);

 

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});