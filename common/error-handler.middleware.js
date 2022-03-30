const NotFoundError = require('./not-found.error');

module.exports = (err, req, res, next) => {
    

    if (err instanceof NotFoundError) {
        return res.status(404).send(err.message);
    }
}

