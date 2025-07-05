const fs = require("fs");
const path = require("path");

const csvFilePath = path.join(__dirname, "../indian towns.csv"); // Replace with your CSV file name

fs.readFile(csvFilePath, "utf8", (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }

    const lines = data.trim().split("\n");
    const values = [];

    for (let i = 1; i < lines.length; i++) {
        // Skip header
        const parts = lines[i].split(",");

        if (parts.length !== 6) {
            console.warn(`Skipping malformed line: ${lines[i]}`);
            continue;
        }

        const [
            state,
            stateCode,
            districtCode,
            districtName,
            townCode,
            townName,
        ] = parts.map((p) => p.trim().replace(/'/g, "\\'"));

        values.push(
            `('${state}', ${stateCode}, ${districtCode}, '${districtName}', ${townCode}, '${townName}')`,
        );
    }

    const insertQuery = `
INSERT INTO denormtown (state_name, state_code, district_code, district_name, town_code, town_name)
VALUES
${values.join(",\n")};
`;

    console.log(insertQuery);
});
