module.exports = function (app) {
    const home = require('./home')
    const auth = require('./auth')
    const user = require('./user')

    app.use('/', home)
    app.use('/auth', auth)
    app.use('/user', user)
}
