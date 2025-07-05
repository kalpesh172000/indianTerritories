import { success, error, errCatcher } from "../config/apiResponse.js";
import upTime from "../config/upTime.js";
import logger from "../config/logger.js";
import pool from "../config/db.js";

export const alive = (req, res) => {
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

export const states = async (req, res) => {
    if (req.method != "GET") {
        res.status(405).json(
            error(`${req.method} is not allowed`, res.statusCode),
        );
        return;
    }

    try {
        /* const { format } = req.body; */

        const [rows] = await pool.query(
            "select * from states order by state_name;",
        );
        res.status(200).json(success("done!!", rows, res.statusCode));
    } catch (err) {
        errCatcher(logger, res, error, err);
    }
};

export const districts = async (req, res) => {
    if (req.method != "GET") {
        res.status(405).json(
            error(`${req.method} is not allowed`, res.statusCode),
        );
        return;
    }

    try {
        const { state_code } = req.body;

        const [rows] = await pool.query(
            "select district_name,district_code from districts  where state_code = ? order by district_name;",
            [state_code],
        );
        res.status(200).json(success("done!!", rows, res.statusCode));
    } catch (err) {
        errCatcher(logger, res, error, err);
    }
};

export const towns = async (req, res) => {
    if (req.method != "GET") {
        res.status(405).json(
            error(`${req.method} is not allowed`, res.statusCode),
        );
        return;
    }

    try {
        const { district_code } = req.body;

        const [rows] = await pool.query(
            "select town_name,town_code from towns  where district_code = ? order by town_name;",
            [district_code],
        );
        res.status(200).json(success("done!!", rows, res.statusCode));
    } catch (err) {
        errCatcher(logger, res, error, err);
    }
};
