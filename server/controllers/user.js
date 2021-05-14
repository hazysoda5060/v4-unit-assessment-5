const bcrypt = require('bcryptjs')

module.exports = {
    register: async (req, res) => {
        const db = req.app.get('db')
        const {username, password} =req.body
        const [checkUsername] = await db.auth.find_user_by_username(username)
        if(checkUsername) {
            return res.status(409).send('Email already registered')
        }
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)
        const [user] = await db.auth.register_user(username, hash, `https://robohash.org/${username}.png`)
        delete user.password
        req.session.user = user
        return res.status(200).send(req.session.user)
    },
}