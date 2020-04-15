/**
 * Find the geolocation with the highest value for income benefits in the year 2012 where the sex of the beneficiary is Males.
 */
db.phase3.find({
    $and: [{
        "REF_DATE": {
            $regex: ".*2012.*"
        },
        "GEO": {
            $not: {
                $regex: ".*Canada.*"
            }
        }
    }, {
        "Sex": "Males"
    }]
}, {
    "_id": 0,
    "VALUE": 1,
    "Sex": 1,
    "GEO": 1
}).sort({
    VALUE: -1
}).limit(1).pretty();

