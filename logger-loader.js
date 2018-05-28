module.exports = function(source, map) {
    try {
        console.log(source);
        this.callback(null, source, map);
    } catch (err) {
        console.error(err);
    }
};