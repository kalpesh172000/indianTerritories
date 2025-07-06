import mongoose from "mongoose";
import logger from "./logger.js";
import "dotenv/config";

export const connectToMongodb = () => {
    logger.info(`Trying to connect to the database`);
    if (process.env.NODE_ENV === "development") {
        mongoose
            .connect(process.env.LOCAL_MONGO)
            .then(() => {
                logger.info(`Connected to Local MongoDB Successfully!`);
            })
            .catch((err) => {
                logger.error(err);
            });
    } else {
        mongoose
            .connect(process.env.MONGO_URL)
            .then(() => {
                logger.info(`Connected to MongoDB Alas Successfully!`);
            })
            .catch((err) => {
                logger.error(err);
            });
    }
};
