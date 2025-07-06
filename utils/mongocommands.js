db.denormtowns.aggregate([
    {
        $group: {
            _id: { state_code: "$state_code", state_name: "$state_name" },
            count: { $sum: 1 },
        },
    },
    {
        $project: {
            _id: 0,
            state_code: "$_id.state_code",
            state_name: "$_id.state_name",
        },
    },
    { $sort: { state_name: 1 } },
    {
        $merge: {
            into: "states",
            on: "state_code",
            whenMatched: "keepExisting",
        },
    },
]);

db.states.createIndex({state_code: 1},{unique: true});

db.denormtowns.aggregate([
    {
        $group: {
            _id: {district_code: "$district_code", district_name: "$district_name", state_code: "$state_code"},
        }
    },
    {
        $project: {
            _id: 0,
            district_code: "$_id.district_code",
            district_name: "$_id.district_name",
            state_code: "$_id.state_code",
        },
    },
    {
        $merge: {
            into: "districts",
            on: "district_code",
            whenMatched: "keepExisting",
        }
    }
]);

db.districts.createIndex({district_code: 1},{unique: true});


db.denormtowns.aggregate([
    {
        $group: {
            _id: {town_code: "$town_code", town_name: "$town_name", district_code: "$district_code"},
        }
    },
    {
        $project: {
            _id: 0,
            town_code: "$_id.town_code",
            town_name: "$_id.town_name",
            district_code: "$_id.district_code",
        },
    },
    {
        $merge: {
            into: "towns",
            on: "town_code",
            whenMatched: "keepExisting",
        }
    }
]);


db.towns.createIndex({town_code: 1}, {unique: true});
