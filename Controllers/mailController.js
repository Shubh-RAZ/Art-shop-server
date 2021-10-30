const nodemailer = require('nodemailer');
const dotenv = require('dotenv')
dotenv.config({path:'../config.env'})

export const sendMail = (req, res) => {
    try{
        const transporter = nodemailer.createTransport({
            service : 'gmail',
            auth : {
                user : process.env.email,
                pass : process.env.secret_code,
            }
        })
        
        var mailOptions = {
            from : process.env.email,
            to  :  'coolprince2610@gmail.com',
            sub :  'from artwindow.in',
            text:   req.body.msg + ' email ' + req.body.email,
            html:
        }

        transporter.sendMail(mailOptions, function (error,info){
            if(error){
                console.log(error);
                res.status(501).json({message : "error"})
            }
            else{
                console.log(mailOptions)
                console.log('mail sent : ' + info.response);
                res.status(200).json({message : "success"})
            }
        })
    }
    catch(err){
        console.log(err)
    }
}