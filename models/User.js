let User = function(data){
    this.data = data
    this.errors = []
    // adding properties to User object blueprint
}

User.prototype.validate = function(){
    if(this.data.username == ""){
        this.errors.push('You must provide a username.')}
    if(this.data.email == ""){
        this.errors.push('You must provide a valid email address.')
    }
    if(this.data.password == ""){
        this.errors.push('You must provide a valid password.')
    }
    if(this.data.password.length < 12 && this.data.password.length > 0){
        this.errors.push('Password should be at least 12 characters long.')
    }
    if(this.data.password.length >= 100 && this.data.password.length > 0){
        this.errors.push('Password should not exceed 100 characters.')
    }
}

User.prototype.register = function(){
    // adding methods to User object blueprint
    // step #1: validate user data
    this.validate()
    // step #2: only if there are no validation errors then save data into a database
}



module.exports = User