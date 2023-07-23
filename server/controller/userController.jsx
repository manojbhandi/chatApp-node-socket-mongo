const User = require("../model/userModel");
const bcrypt = require('bcrypt')


module.exports.register = async (req,res,next)=> {
    try{
        const {username, password, email} = req.body;
        const usernameCheck = User.findOne({username})

        if(usernameCheck){
            return res.json({msg:"user name already used", status: false});
        }
        const emailcheck = User.findOne({email});

        if(emailcheck){
            return res.json({msg:"email already used", status: false});
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User.create({
            username,
            email,
            password:hashedPassword
        })
        delete user.password;
        return res.json({status:true, user});

    }catch(ex){
        next(ex);
    };
    
}