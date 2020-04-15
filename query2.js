/**
 * Find out the coordinates of all males that received benefits in January of 1997, we can do so via the following query
 */
db.phase3.find({
    $and: [{}, {
        "Sex": "Males"
    }, {
        "REF_DATE": "1997-01"
    }]
}, {
    "REF_DATE": 1,
    "Sex": 1,
    "COORDINATE": 1,
    "GEO": 1,
    "_id": 0
}).pretty();
