({
    logLevel: 1,
    baseUrl: ".",
    mainConfigFile: "main.js",
    out: "../bundles/patterns.js",
    optimize: "none",

    name: "main",
    exclude: ["jquery"],
    insertRequire: ["main"]
})

// vim: sw:4 sts:4 expandtab
