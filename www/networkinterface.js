var networkinterface = function() {
};

networkinterface.getIPAddress = function( success, fail ) {
    cordova.exec( success, fail, "networkinterface", "getIPAddress", [] );
};
networkinterface.getNetmask = function( success, fail ) {
    cordova.exec( success, fail, "networkinterface", "getIPAddress", [] );
};

module.exports = networkinterface;
