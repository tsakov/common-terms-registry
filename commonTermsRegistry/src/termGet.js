(function () {

    "use strict";

    var fluid = require("infusion"),
        gpii = fluid.registerNamespace("gpii");

    gpii.requests.request.handler.termGet = function (requestProxy, name, termSource) {
        termSource.get({
            name: name
        }, requestProxy.events.onSuccess.fire); // transform to HTML eventually
    };

})();
