import { success, error, errCatcher } from "../config/apiResponse.js";
import upTime from "../config/upTime.js";
import logger from "../config/logger.js";

const alive = (req, res) => {
    if (req.method != "GET") {
        res.status(405).json(
            error(`${req.method} is not allowed`, res.statusCode),
        );
        return;
    }

    try {
        res.status(200).json(
            success("I am aliveeeeee", { upTime: upTime(process.uptime()) }),
        );
    } catch (err) {
        errCatcher(logger, res, error, err);
    }
};

export default alive;
