module.exports = function(config){
    config.set({
        basePath: "",
        frameworks: ["jasmine"],
        files: [
            "angular.min.js",
            "angularmocks.js",
            "*.js"
        ],
        exclude: [],
        port: 8080,
        logLevel: config.LOG_INFO,
        autWatch: true,
        browsers: ["Chrome"],
        singleRun: false
    });
}
