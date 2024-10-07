const express=require('express')
const app=express();
const cors=require('cors')
const nodemailer=require('nodemailer')
const transport=nodemailer.createTransport({
    service:'gmail',
    port:"465",
    auth:{
        user: 'd.wizard.techno@gmail.com',
        pass: 'app password needed here'
    }
});
app.use(cors());
app.use(express.json())
app.get('/ping',(req,res)=>{
    return res.send('pong')
})
// const req.body={
//     sender:"",
//     reciever:"",
//     subject:"",
//     text:"",
//     html:""
//   }
app.post('/sendmessage', (req,res)=>{
    console.log('sending msg !');
    transport.sendMail(req.body,(err,succ)=>{
        if(err){
            console.log("got errr")
            return res.status(200).json({success:false})
        }
        console.log("msg sent !")
        return res.status(200).json({success:true});
    })
})



app.listen(8080,()=>{
    console.log("listing to port http://localhost:8080")
})