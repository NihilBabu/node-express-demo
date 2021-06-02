exports.loginPage = function (req, res) {
    res.sendFile(__dirname + "/pages/login.html")
}
exports.homePage = function (req, res) {
    res.sendFile(__dirname + "/pages/home.html")
}

exports.login = (req, res) => {
    if (req.body.username === req.body.password) {
        res.status(301).redirect("/home")
    } else {
        res.sendFile(__dirname + "/pages/login.html")
    }
}
