nodemailer=require('nodemailer');
transport=nodemailer.createTransport({
    host:'smtp.gmail.com',
    port:465,
    secure:true,
    auth:{
        user:'aditibm7235@gmail.com',
        pass:'tapi jcwh rhih jict'
    }
})


//mail object

mail={
from:'aditibm7235@gmail.com',
to:'imkunjeshwork@gmail.com',
subject:'leave confirmation',
text:"your leave has been approved"
}

transport.sendMail(mail,(err,data)=>{
if(err){
    console.log(err)
}
else{
    console.log(data)
}
})