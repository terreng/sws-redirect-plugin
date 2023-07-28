function onStart(server, options) {
    // Do nothing
}

function onRequest(req, res, options, preventDefault) {
    if (typeof preventDefault === 'function') preventDefault();
    res.setHeader('location', options.origin + (options.path ? req.url : ''));
    res.setHeader('content-length', 0);
    res.writeHead(302);
    res.end();
}

module.exports = { onStart, onRequest };