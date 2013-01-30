(function () {

    "use strict";

    var fluid = require("infusion"),
        gpii = fluid.registerNamespace("gpii");

    var isMatch = function (object, template) {
        var match = true;

        fluid.each(template, function (value, key) {
            if (object[key] !== value) {
                match = false;
                return 1; // doesn't appear to have any effect despite the fluid docs
            }
        });

        return match;
    };

    gpii.requests.request.handler.termQuery = function (requestProxy, query, querySource) {
        querySource.get(query, function (terms) {
            var queryResult = [];
            
            fluid.each(terms, function (term) {
                if (isMatch(term, query)) {
                    queryResult.push(term);
                }
            });
            
            requestProxy.events.onSuccess.fire(queryResult); // transform to HTML eventually
        });
    };

})();
