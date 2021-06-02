module.exports.index = function (req, res) {
    console.log(req.headers.cookie);
    res.write("welcome to index page home")
    res.end()
}

module.exports.home = function (req, res) {
    var cookie = parseCookies(req)
    console.log(cookie.name)
    if (cookie.name =="" ) {
        res.writeHead(301,
            { Location: 'http://localhost:8080/login' }
        );
        res.end();
    } else {
        res.write("welcome to homepage " + cookie.name)
        res.end();
    }
}



function parseCookies(request) {
    var list = {},
        rc = request.headers.cookie;

    rc && rc.split(';').forEach(function (cookie) {
        var parts = cookie.split('=');
        list[parts.shift().trim()] = decodeURI(parts.join('='));
    });
    return list;
}