const HOST = 'adam.noncd.db.de';
const PATH_BASE = '/api/v1.0';
const PATH_FACILITIES = '/facilities';
const PATH_STATION = '/stations';



var singletonServiceInstance = {
    searchByStationId (id) {
        return {
            q: id,
            payload: {

            }
        };
    }
};



module.exports = function () {
    return singletonServiceInstance;
};