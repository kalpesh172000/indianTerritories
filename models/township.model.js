import mongoose from "mongoose";

const stateSchema = new mongoose.Schema({
    state_code: { type: Number, unique: true, required: true },
    state_name: { type: String, required: true },
});

const districtSchema = new mongoose.Schema({
    district_code: { type: Number, unique: true, required: true },
    district_name: { type: String, required: true },
    state_code: { type: Number, required: true },
});

const townSchema = new mongoose.Schema({
    town_code: { type: Number, unique: true, required: true },
    town_name: { type: String, required: true },
    district_code: { type: Number, required: true },
});

const denormtownsSchema = new mongoose.Schema({
    state_name: { type: String, required: true },
    state_code: { type: Number, required: true },
    district_code: { type: Number, required: true },
    district_name: { type: String, required: true },
    town_code: { type: Number, required: true },
    town_name: { type: String, required: true },
});

export const States = mongoose.model("States", stateSchema);
export const Districts = mongoose.model("Districts", districtSchema);
export const Towns = mongoose.model("Towns", townSchema);
export const Denormtowns = mongoose.model("Denormtowns", denormtownsSchema);
