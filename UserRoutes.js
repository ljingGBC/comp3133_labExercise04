const express = require('express');
const userModel = require('./Users.js');
const app = express();

//insert New Record

/** sample data for postman
 * {
    "username": "Samantha",
    "email": "Nathan@yesenia.net",
    "city": "McKenziehaven",
    "zip": "59590-4157",
    "phone": "1-463-123-4447",
    "web": "http://ramiro.info"
    }
 */

//http://localhost:3000/user
app.post('/user', async (req, res) => {
  
    const user = new userModel(req.body);
    
    try {
      await user.save((err) => {
        if(err){
          res.send(err)
        }else{
          res.send(user);
        }
      });
    } catch (err) {
      res.status(500).send(err);
    }
  });

module.exports = app
