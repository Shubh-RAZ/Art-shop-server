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
        let body = `<h2> Hi This is ${req.body.name_} and I would like to purchase </h2>`
        let itemsToBePurchased = ''
        req.body.item.map( dt => {
            const msg = ` <h3>${dt.title} with ID:${dt._id}</h3> <h3> Price : ${dt.price} </h3> <br></br> `
            // console.log(msg)
            itemsToBePurchased += msg
        })

        const buyerDetails = `<h3> Address : ${req.body.add} </h3> <h3> Phone Number : ${req.body.ph} </h3> <h3> Email : ${req.body.email_} </h3>`
        body += itemsToBePurchased
        body += buyerDetails
        console.log('items',itemsToBePurchased)
        
        var mailOptions = {
            from : process.env.email,
            to  :  'coolprince2610@gmail.com',
            sub :  'from artwindow.in',
            html : body  
        }

        transporter.sendMail(mailOptions, function (error,info){
            if(error){
                console.log(error);
                // res.status(501).json({message : "error"})
                res.json('mail failed')
            }
            else{
                console.log('mail sent : ' + info.response);
                res.json('mail sent successfully')
            }
        })
    }
    catch(err){
        console.log(err)
    }
}


module.exports = { sendMail }