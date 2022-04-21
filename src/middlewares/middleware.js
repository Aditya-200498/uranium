const headerValidate = function(req, res, next) {
    let appUser= req.headers['isfreeappuser']
    if (!appUser) {
        res.send("error message that the request is missing a mandatory header")
    }

    else {
        next()
    }
    
}

module.exports.headerValidate= headerValidate;