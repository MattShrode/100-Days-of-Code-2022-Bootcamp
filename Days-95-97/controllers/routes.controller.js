function returnString(req, res, next) {
    res.json({
        quote: 'You reached this route.',
    });
}

module.exports = {
    returnString: returnString
}