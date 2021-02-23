const server = require("browser-sync").create();

const serveReload = (done) => {
    server.reload();
    if (done) done();
}

const serve = (done) => {
    server.init({
        server: "build",
        notify: false,
        open: true,
        cors: true,
    });

    return done();
}

module.exports = {
    serve,
    serveReload,
};
