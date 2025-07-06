import mongoose from "mongoose";
import logger from "./logger.js";
import "dotenv/config";

export const connectToMongodb = () => {
    if (process.env.NODE_ENV === "development") {
        logger.info(`Trying to connect to the local MongoDB database`);
        mongoose
            .connect(process.env.LOCAL_MONGO)
            .then(() => {
                logger.info(`Connected to Local MongoDB Successfully!`);
            })
            .catch((err) => {
                logger.error(err);
            });
    } else {
        logger.info(`Trying to connect to the MongoDB Alas`);
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
