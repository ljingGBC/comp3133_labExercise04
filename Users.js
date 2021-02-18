const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Please enter username'],
    minlength: 4,
    trim: true,
    //lowercase: true
  },

  email: {
    type: String,
    required: true,
    //index: true, //Optional if unique is defined
    unique: [true, "Duplicate Email Not allowed"],
    trim: true,
    //Custom validation
    validate: function(value) {
      var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
      return emailRegex.test(value);
    }
  },

  city:{
    type: String,
    required: true,
    //Custom validation: only alphabets and space
    validate: function(value) {
        var cityRegex = /^[a-zA-Z ]*$/;
        return cityRegex.test(value);
    }
  },

  website:{
    type: String,
    required: true,
    //Custom validation: only valid web URL address (http or https is valid)
    validate: function(value) {
        var webRegex = /^(http(s)?:\/\/)[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
        return webRegex.test(value);
    }
  },

  zipcode:{
    type: String,
    required: true,
    //Custom validation: format must be like 12345-1234 (DDDDD-DDDD, D = digit)
    validate: function(value) {
        var zipRegex = /^\d{5}-\d{4}$/;
        return zipRegex.test(value);
    },
    //message: "format must be like 12345-1234 (DDDDD-DDDD, D = digit)" // how to show this message
  },

  phone:{
    type: String,
    required: true,
    //Custom validation: format like 1-123-123-1234 (D-DDD-DDD-DDDD, D = digit)
    validate: function(value) {
        //var phoneRegex = /(\d{1})[-]*(\d{3})[-]*(\d{3})[-]*(\d{4})/;
        var phoneRegex = /^\d{1}-\d{3}-\d{3}-\d{4}$/;
        return phoneRegex.test(value);
    }
  },

});


const User = mongoose.model("User", UserSchema, "Users");
module.exports = User;