import { success, error, errCatcher } from "../config/apiResponse.js";
import { States, Districts, Towns } from "../models/township.model.js";
import upTime from "../config/upTime.js";
import logger from "../config/logger.js";
import pool from "../config/db.js";
import codeValidator from "../utils/codevalidator.js";

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
        const result = await States.find({}, { _id: 0 });

        /* const [rows] = await pool.query( */
        /*     "select * from states order by state_name;", */
        /* ); */
        res.status(200).json(success("done!!", result, res.statusCode));
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
        let state_code = req.query.state_code || req.body?.state_code;

        state_code = codeValidator(state_code, "state_code", res);

        if (!state_code) return;

        const result = await Districts.find(
            { state_code: state_code },
            { _id: 0 },
        );

        /* const [rows] = await pool.query( */
        /*     "select district_name,district_code from districts  where state_code = ? order by district_name;", */
        /*     [state_code], */
        /* ); */
        res.status(200).json(success("done!!", result, res.statusCode));
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
        let district_code = req.query.district_code || req.body?.district_code;

        district_code = codeValidator(district_code, "district_code", res);

        if (!district_code) return;

        const result = await Towns.find(
            { district_code: district_code },
            { _id: 0 },
        );

        /* const [rows] = await pool.query( */
        /*     "select town_name,town_code from towns  where district_code = ? order by town_name;", */
        /*     [district_code], */
        /* ); */
        res.status(200).json(success("done!!", result, res.statusCode));
    } catch (err) {
        errCatcher(logger, res, error, err);
    }
};
