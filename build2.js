/**
 * Created by longbob on 16-2-2.
 */
({
    // rename this to whatever the front-end files directory is
    appDir: "./",

    // rename this to the front end files JavaScript directory
    baseUrl: "./scripts",

    // rename this to whatever the distribution directory you want is
    dir: "../dist",

    /**
     * `r.js` needs to know where `require.config` is called ahead of time
     * rather than just having it be included automatically by data-main
     *
     * This is done so that shim definitions can be ready and `angular` will
     * be properly defined as a module
     */
    mainConfigFile: "./scripts/main.js",
})