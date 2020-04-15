/**
 * For each location in the province of Ontario, find the total value of all benefits ever recieved, 
 * the average value of all benefits ever recieved, the minimum value of all benefits ever recieved 
 * and the maximum value of all benefits ever recieved in that location.
 */
db.phase3.aggregate([{
    $match: {
        "GEO": { $regex: ".*Ontario.*" }
    }
}, {
    $group: {
        "_id": "$GEO",
        "totalVal": {
            $sum: "$VALUE"
        },
        "avgVal": {
            $avg: "$VALUE"
        },
        "minVal": {
            $min: "$VALUE"
        },
        "maxVal": {
            $max: "$VALUE"
        }
    }
}, {
    $project: {
        "_id": 0,
        "GEO": "$_id",
        "total_benefits_paid": "$totalVal",
        "average_benefits_paid": "$avgVal",
        "min_benefits_paid": "$minVal",
        "max_benefits_paid": "$maxVal"
    }
}]).pretty();
