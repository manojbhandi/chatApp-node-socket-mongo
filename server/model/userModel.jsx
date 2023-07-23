const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    userName:{
        required : true,
        type:String,
        min:3,
        max: 20,
        unique:true,
    },
    email : {
        required: true,
        type: String,
        unique:true,
        max:50
    },
    password:{
        requires:true,
        type:string,
        min:8
    },
    isAvatarImgSet:{
        type: Boolean,
        default:false
    },
    avatarImage:{
        type:String,
        default:"",
    },

});

module.exports = mongoose.model("User", userSchema);