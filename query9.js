/**
 *  For each year, find the total sum of benefits paid in British Columbia. Then sort the years in ascending order of that total.
 */
db.phase3.aggregate([{
    $match: {
        "GEO": { $regex: ".*British Columbia.*" }
    }
},
{
    $group: {
        "_id": { $substr: ["$REF_DATE", 0, 4] },
        "VALUE": { $sum: "$VALUE" }
    }
},
{
    $sort: {
        "_id": 1
    }
},
{
    $project: {
        "Year": "$_id",
        "totalBenefits": "$VALUE",
        "_id": 0
    }
}
]);
