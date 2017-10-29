module.exports = function (app, router) {
    const home = require('./home')
    const auth = require('./auth')

    app.use('/', home)
    app.use('/auth', auth)
}
