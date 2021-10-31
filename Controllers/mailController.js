const nodemailer = require('nodemailer');
const dotenv = require('dotenv')
dotenv.config({path:'../config.env'})

const sendMail = async (req, res) => {
    console.log(req.body)
    try{
        const transporter = nodemailer.createTransport({
            service : 'gmail',
            auth : {
                user : 'enquiryartwindow@gmail.com',
                pass : 'aparna130012',
            }
        })

        console.log(req.body.item)
        
        var mailOptions = {
            from : process.env.email,
            to  :  'coolprince2610@gmail.com',
            sub :  'from artwindow.in',
            html : `<h1>${req.body.name_}</h1>
                    <h1>${req.body.email_}</h1>
                    <h1>${req.body.add}</h1>
                    <h1>${req.body.ph}</h1>
                    <h1>${req.body.item}</h1>
            `   
        }

        transporter.sendMail(mailOptions, function (error,info){
            if(error){
                console.log(error);
                res.status(501).json({message : "error"})
            }
            else{
                console.log('mail sent : ' + info.response);
                res.status(200).json({message : "success"})
            }
        })
    }
    catch(err){
        console.log(err)
    }
}


module.exports = { sendMail }