const success = (message, result, time, statusCode) => {
    return {
        message,
        error: false,
        code: statusCode,
        result,
    };
};

const error = (message, statusCode) => {
    const codes = [200, 201, 400, 401, 403, 404, 422, 500];
    const codeFinder = codes.find((code) => code === statusCode);

    if (!codeFinder) statusCode = 500;
    else statusCode = codeFinder;

    return {
        message,
        code: statusCode,
        error: true,
        timestamp: new Date(),
    };
};


const errCatcher = (logger, response, handler, error) => {
    logger.error(error.message);
    response.status(500).json(handler('Opps we had problem on server side.', response.statusCode))
}


export default {success, error, errCatcher};
