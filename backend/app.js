// import express from "express";
import { configDotenv } from "dotenv";
import connectToDB from "./db/db.js"; // Make sure the path and extension are correct
import User from "./models/usermodel.js";
import useRoutes from "./routes/user.routes.js";
import captainRoutes from "./routes/captain.routes.js";
import mapsRoutes from "./routes/maps.routes.js";
import rideRoutes from "./routes/rides.routes.js";
import cookieParser from "cookie-parser";
import cors from "cors";
configDotenv(); // Load environment variables
connectToDB();  // Connect to MongoDB

import express from 'express';
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());



app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use('/users', useRoutes);
app.use('/captains', captainRoutes);
app.use('/maps', mapsRoutes);
app.use('/rides', rideRoutes);





export default app;