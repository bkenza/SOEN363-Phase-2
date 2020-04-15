/**
 *  Find all income benefit values higher than 20000 sorted in ascending order of value and 
 * exclusively in the geolocations of either Quebec and Ontario. Then sort the result in descending  
 * order of the date.
 */
db.phase3.find({
    $and: [{
        "VALUE": {
            $gt: 20000
        }
    }, {
        $or: [{
            "GEO": {
                $regex: ".*Quebec.*"
            }
        }, {
            "GEO": {
                $regex: ".*Ontario.*"
            }
        }]
    }]
}, {
    "GEO": 1,
    "_id": 0,
    "VALUE": 1,
    "REF_DATE": 1
}).sort({
    "VALUE": 1,
    "REF_DATE": -1,
}).pretty();
