/**
 * Find the total value of benefits that was paid to both people with declared income and those without declared income.
 */
db.phase3.aggregate([{
    $match: {
        $and: [{
            "Beneficiary detail": {
                $regex: ".*with.*"
            }
        }, {
            "Beneficiary detail": {
                $regex: ".*without.*"
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

