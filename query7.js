/**
 * For the first 3 months in the year 2010, find the location with the highest value of collected 
 * benefits. Display the location and the value collected.  
 */
db.phase3.aggregate([{
    $match: {
        $and: [{
            "GEO": {
                $regex: ".* .*"
            }
        }, {
            "REF_DATE": {
                $in: [
                    "2010-01",
                    "2010-02",
                    "2010-03"]
            }
        }]
    }
}, {
    $group: {
        "_id": "$REF_DATE",
        "maxVal": {
            $max: "$VALUE"
        },
        "GEO": {
            $first: "$GEO"
        }
    }
}, {
    $sort: {
        _id: -1
    }
}, {
    $project: {
        "_id": 0,
        "Location With Highest Earning": "$GEO",
        "Month Referenced": "$_id",
        "Value Earned": "$maxVal"
    }
}
]).pretty();
