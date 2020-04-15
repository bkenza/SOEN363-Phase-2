/**
 * Find the total value of all benefits collected in Ontario the year 2010, we can do this using an aggregate function.
 */
db.phase3.aggregate([{
    $match: {
        $and: [{
            "GEO": {
                $regex: ".*Ontario.*"
            }
        }, {
            "REF_DATE": {
                $regex: ".*2010.*"
            }
        }]
    }
}, {
    $group: {
        "_id": 0,
        "totalBenefitsValue": {
            $sum: "$VALUE"
        }
    }
}, {
    $project: {
        "_id": 0
    }
}]);
