module.exports = function (app) {
    const home = require('./home')
    const auth = require('./auth')
    const user = require('./user')

    app.use('/api', home)
    app.use('/api', auth)
    app.use('/api', user)
}
