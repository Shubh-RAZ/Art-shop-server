const mongoose = require('mongoose')

const MailSchema = mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true,
        unique : true,
    },
    password : {
        type : String,
        required : true,
    },
    
    sentMails : [
        {
            to : String,
            sub : String,
            msg : String,
            emoji : String,
            fontSize : String,
            fontStyle : String,
            color : String,
            fontWeight : String,
            important_ : Boolean,
        }
    ]
});

const Mail = mongoose.model("Mail", MailSchema);

export default Mail;
