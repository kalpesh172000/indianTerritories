// scripts/csvToMongoInsert.js
import fs from "fs"
import path from "path"
const __dirname = path.resolve();

const csvFilePath = path.join(__dirname, "/indian towns.csv"); // Update path if needed
const collectionName = "denormtowns"; // Name of the MongoDB collection to insert into

fs.readFile(csvFilePath, "utf8", (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }

    const lines = data.trim().split("\n");
    const docs = [];

    for (let i = 1; i < lines.length; i++) {
        const parts = lines[i].split(",");
        if (parts.length !== 6) {
            console.warn(`Skipping malformed line: ${lines[i]}`);
            continue;
        }

        const [
            state_name,
            state_code,
            district_code,
            district_name,
            town_code,
            town_name,
        ] = parts.map((p) => p.trim());

        docs.push({
            state_name,
            state_code: parseInt(state_code, 10),
            district_code: parseInt(district_code, 10),
            district_name,
            town_code: parseInt(town_code, 10),
            town_name,
        });
    }

    const mongoScript = `
/**
 * Auto-generated insert script for MongoDB
 * Collection: ${collectionName}
 */

db.getCollection('${collectionName}').insertMany(${JSON.stringify(docs, null, 2)});
`;

    console.log(mongoScript);
});
