/**
 * Find the geolocation of all females aged between 15-24 years old that received benefits 
 * in the year 2014. We can do so with the help of $regex that can specify to include all 
 * the months of 2014. For example (2014-01, 2014-02 etc etc), we display the coordinate 
 * field to distinguish between documents in the database.
 */
db.phase3.find({
    $and: [{}, {
        "Age group": "15 to 24 years"
    }, {
        "Sex": "Females"
    }, {
        "REF_DATE": {
            $regex: ".*2014.*"
        }
    }]
}, {
    "REF_DATE": 1,
    "Sex": 1,
    "COORDINATE": 1,
    "GEO": 1,
    "Age group": 1,
    "_id": 0
}).pretty();
