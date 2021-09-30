const validator = require('validator')

let User = function(data){
    this.data = data
    this.errors = []
    // adding properties to User object blueprint
}

User.prototype.cleanUp = function(){
    if(typeof(this.data.username) != 'string'){
        this.data.username = '';
    }
    if(typeof(this.data.email) != 'string'){
        this.data.username = '';
    }
    if(typeof(this.data.password) != 'string'){
        this.data.username = '';
    }
    // here we checked that, if the data submitted by user is not a string type data, it'll return an empty string.


    // get rid of any bogus properties that is not part of our data model.
    this.data = {
        username: this.data.username.trim().toLowerCase(),
        email: this.data.email.trim().toLowerCase(),
        password: this.data.password
    }
    // trim() method will get rid of any empty spaces in the end or beginning of the text that was submitted by user.
    // toLowerCase() method will convert all the text of the field into lowercase letters which is necessary for username and email.
}

User.prototype.validate = function(){
    if(this.data.username == ""){
        this.errors.push(' You must provide a username ')}
    if(this.data.username != "" && !validator.isAlphanumeric(this.data.username)){this.errors.push(' Username can only contain letters and numbers ')}
    if(!validator.isEmail(this.data.email)){
        this.errors.push(' You must provide a valid email address ')
    }
    if(this.data.password == ""){
        this.errors.push(' You must provide a valid password ')
    }
    // checking if you've entered your username, email and password or not
    if(this.data.password.length < 12 && this.data.password.length > 0){
        this.errors.push(' Password should be at least 12 characters long ')
    }
    if(this.data.password.length >= 100){
        this.errors.push(' Password should not exceed 100 characters ')
    }
    if(this.data.username.length >= 30){
        this.errors.push(' Username should not exceed 30 characters ')
    }
    if(this.data.username.length < 3){
        this.errors.push(' Username should be at least 3 characters long ')
    }
    // checking if your entered password and username is too long or not long enough.
}

User.prototype.register = function(){
    // adding methods to User object blueprint
    // step #1: validate user data
    this.cleanUp()
    // cleanUp function makes sure that the data is submitted by the user is not an array or an object or anything that is not a string. Also converts the data to usable format.
    this.validate()
    // step #2: only if there are no validation errors then save data into a database
}



module.exports = User