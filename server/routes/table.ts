import app from 'express'
const controller = require("../controllers/table.controller")
const router = app.Router()
const passport = require('passport')

router.get('/users/:id', passport.authenticate('jwt', {session: false}), controller.userId)
router.get('/users', passport.authenticate('jwt',{session: false}), controller.users)
router.post('/send-message', passport.authenticate('jwt', {session: false}), controller.sendMessage)
module.exports = router