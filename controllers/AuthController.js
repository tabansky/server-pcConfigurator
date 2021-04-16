const Auth = require('../models/AuthModel');

class AuthController {
    static async register(req, res) {
        res.send(await Auth.register(req.body.name, req.body.password));
    }

    static async login(req, res) {
        res.json(await Auth.login(req.body.name, req.body.password));
    }

    static async logout(req, res) {
        res.json(await Auth.logout(req.body.name, req.body.token))
    }
}

module.exports = AuthController;
