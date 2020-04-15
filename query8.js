/**
 * Find the total value of all beneficiaries that were received per geolocation, this should cover 
 * all years available in the dataset and display the total value that each location has been granted. 
 * Sorted in ascending alphabetical order of Geolocation
 */
db.phase3.aggregate([{
    $group: {
        "_id": '$GEO',
        "TotalValue": {
            $sum: '$VALUE'
        }
    }
}, {
    $sort: {
        "_id": 1
    }
}, {
    $project: {
        "_id": 0,
        "category": '$_id',
        "Total Recieved": '$TotalValue'
    }
}]).pretty();
