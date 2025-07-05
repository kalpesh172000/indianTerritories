import json2csvAsync from "json-2-csv"

const j2c = async (data, options) => {
    return await json2csvAsync(data, options);
}


export default j2c;
