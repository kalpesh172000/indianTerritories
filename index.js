import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import dotenv from "dotenv";
import responseTime from "response-time";
import rateLimiter from "./middlewares/limiter.js";
import notFoundHandler from "./middlewares/notFoundHandler.js";
import logger from "./config/logger.js";
import township_alive from "./routes/township.routes.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(responseTime());
app.use(helmet());
app.use(rateLimiter);
app.use(express.urlencoded({ extended: false }));

if (process.env.NODE_ENV === "development") app.use(morgan("dev"));

// Important when behind proxies/load balancers (e.g., Heroku, Nginx)
// Enables Express to use X-Forwarded-For to get the client’s real IP address
app.set("trust proxy", 1);

app.use("/api", township_alive);

app.use(notFoundHandler);

const port = process.env.PORT;
const server = app.listen(port, () => {
    logger.info(
        `Server started => Listening on PORT: ${port} with ProcessId: ${process.pid}`,
    );
});

//Purpose: Closes the server cleanly → stops listening, logs, exits
//Helps avoid: Memory leaks, Broken connections ,Hanging processes
//SIGINT: Triggered by Ctrl+C
process.on("SIGINT", () => {
    logger.info("SIGINT singnal recieved");
    logger.info("Server is closing");
    server.close(() => {
        logger.info("Server is closed");
        process.exit(0);
    });
});

//SIGTERM: Triggered by system shutdown or process kill
process.on("SIGTERM", () => {
    logger.info("SIGTERM singnal recieved");
    logger.info("Server is closing");
    server.close(() => {
        logger.info("Server is closed");
        process.exit(0);
    });
});

export default app;
