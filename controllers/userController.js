const User = require('../models/User')

exports.login = function(){
    
}


exports.logout = function(){

}

 
exports.register = function(req, res){
    let user = new User(req.body)
    user.register()
    console.log(user)
    if(user.errors.length){

        res.render('home-guest',{error: user.errors})
        
        
    } else {
        res.render('home-guest',{error: 'na-da'})
    }
}


exports.home = function(req, res){
    let user = new User(req.body)
    //  user = new User(req.body)
    res.render('home-guest',{error: user.errors})
}