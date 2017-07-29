/**
 * Created by tu on 25/07/2017.
 */
const bcrypt = require('bcrypt');
const LocalStrategy = require('passport-local').Strategy;


module.exports = function (passport) {
    passport.serializeUser((user,done) => {
        done(null,user.id)
    })

    passport.deserializeUser((id,done) => {
        db.user.findById(id).then(user => {
            done(null,user)
        }).catch(err => {
            console.log(err)
        })
    })

    passport.use(new LocalStrategy(
        (username, password,done) => {

            db.user.find({where: {
                username : username
            }}).then(user => {
                bcrypt.compare(password, user.password, (err,result) => {

                    if(err) return done(err)
                    if(!result){
                        return done(null,false,{ message: 'Incorrect username and password' })
                    }
                    return done(null,user)
                })
            }).catch(err => done(err))
        }
    ))
}
