(function () {

    "use strict";

    var fluid = require("infusion"),
        gpii = fluid.registerNamespace("gpii");

    // currently termGet gets the whole mockupRegistry file independently of the name parameter
    gpii.requests.request.handler.termGet = function (requestProxy, name, termSource) {
        termSource.get({
            name: name
        }, requestProxy.events.onSuccess.fire);
    };

})();
