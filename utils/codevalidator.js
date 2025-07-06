import { error } from "../config/apiResponse.js";

const codeValidator = (code, code_name, res) => {
    if (!code) {
        res.status(400).json(
            error(`Please provide ${code_name}`, res.statusCode),
        );
        return 0;
    }
    if (
        !Number.isInteger(Number.parseInt(code)) ||
        Number.parseInt(code) <= 0
    ) {
        res.status(400).json(
            error(
                `Please provide a valid ${code_name} (it should be a positive integer)`,
                res.statusCode,
            ),
        );
        return 0;
    }
    return Number.parseInt(code);
};

export default codeValidator;
