const User = require('../models/User')


exports.login =  function(req, res){
     let user = new User(req.body)
     user.login()
    .then(function(result){
    // setting up sessions
    req.session.user = {favColor: 'blue', username: user.data.username, id: result}
    console.log('from userController.login function: ', result)
    // sending response with persistant session data
    res.redirect('/')  
    })
    .catch(function(err){
    res.send(err)
        })
}


exports.logout = function(){

}

 
exports.register = function(req, res){
    let user = new User(req.body)
    user.register()
    console.log('User from userController.register: ',user)
    if(user.errors.length){

        res.render('home-guest',{error: user.errors})
        
        
    } else {
        res.render('home-guest',{error: 'na-da'})
    }
}

  
exports.home = function(req, res){
    let user = new User(req.body)
    // console.log(user)
    //  for easily display errors from register function, user isn't actually a part of home but it's needed here to run home properly. otherwise we can't show errors from user form in this homepage submitted data.
    if(req.session.user){
        res.render('home-dashboard', {username: req.session.user.username})
    } else {
        res.render('home-guest', {error: user.errors})
    }
}