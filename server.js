import express from "express"
import cors from "cors";  
import dotenv from "dotenv";
import responseTime from "response-time";
import rateLimit from "./middlewares/limiter.js";


dotenv.config()



const app = express();

app.use(express.json());
app.use(cors());
app.use(responseTime);
app.use(rateLimit)

export default app;
