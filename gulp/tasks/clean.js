const del = require("del");

const clean = async (done) => {
    await del("build");
    if (done) done();
};

module.exports = clean;