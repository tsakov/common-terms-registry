(function () {

    "use strict";

    var fluid = require("infusion"),
        path = require("path"),
        gpii = fluid.registerNamespace("gpii");

    fluid.require("gpiiFramework", require);
    fluid.require("./termGet.js", require);
    fluid.require("./termQuery.js", require);
    
    fluid.defaults("gpii.commonTermsRegistry", {
        gradeNames: ["gpii.app", "autoInit"],
        handlers: {
            termGet: {
                route: "/term/:name",
                type: "get"
            },
            termQuery: {
                route: "/term?:query",
                type: "get"
            }
        },
        root: path.join(__dirname, ".."),
        termSourceUrl: "",
        termQueryUrl: "",
        components: {
            rawTermSource: {
                type: "gpii.dataSource",
                options: {
                    url: "{gpii.commonTermsRegistry}.options.termSourceUrl",
                    writable: true,
                    termMap: {
                        name: "%name"
                    }
                }
            },
            rawTermQuerySource: {
                type: "gpii.dataSource",
                options: {
                    url: "{gpii.commonTermsRegistry}.options.termQueryUrl",
                    termMap: {}
                }
            },
            termSource: {
                type: "gpii.callbackWrappingDataSource"
            },
            termQuerySource: {
                type: "gpii.callbackWrappingDataSource"
            }
        }
    });
    
})();
