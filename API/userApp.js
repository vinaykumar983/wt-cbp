const exp=require("express");
const expressAsyncHandler = require("express-async-handler");
let bcryptjs=require("bcryptjs");
let userApp=exp.Router();
let jwt=require("jsonwebtoken")

require("dotenv").config();
userApp.use(exp.json());
userApp.use(exp.urlencoded())

userApp.post("/create-user",expressAsyncHandler(async(request,response)=>{
    let userCollectionObject=request.app.get("userCollectionObject");
    let newUser=request.body;
    console.log(newUser)
    let userOfDb=await userCollectionObject.findOne({user:newUser.user});
    if(userOfDb!=undefined){
        response.send({message:"Please choose another username..."})
    }
    else{
        let hashedPassword=await bcryptjs.hash(newUser.pass,5);
        newUser.pass=hashedPassword;
        newUser.services.toLowerCase();
        await userCollectionObject.insertOne(newUser);
        response.send({message:"Registeration successful..."})
    }
}))


userApp.post("/create-provider",expressAsyncHandler(async(request,response)=>{
    let providerCollectionObject=request.app.get("providerCollectionObject");
    let newUser=request.body;
    console.log(newUser)
    let userOfDb=await providerCollectionObject.findOne({user:newUser.user});
    if(userOfDb!=undefined){
        response.send({message:"Please choose another username..."})
    }
    else{
        let hashedPassword=await bcryptjs.hash(newUser.pass,5);
        newUser.pass=hashedPassword;
        await providerCollectionObject.insertOne(newUser);
        response.send({message:"Registeration successful..."})
    }
}))


userApp.post('/login',expressAsyncHandler(async(request,response)=>{
    let userCollectionObject=request.app.get("userCollectionObject");
    let userObj=request.body;
    let userOfDb=await userCollectionObject.findOne({user:userObj.user})
    if(userOfDb==null){
        response.send({message:"Invalid user"});
    }
    else{
        let status=await bcryptjs.compare(userObj.pass,userOfDb.pass)
        if(status==false){
            response.send({message:"Invalid password"});
        }
        else{
            let token=jwt.sign({user:userOfDb.user}, process.env.KEY ,{expiresIn:3600})
            response.send({message:"success", payload:token ,userObj:userOfDb})
        }
    }
}))

userApp.get('/get-data:service',expressAsyncHandler(async(request,response)=>{
    let providerCollectionObject=request.app.get("providerCollectionObject");
    let service1=request.params.service;
    service1.toLowerCase();
    let providers=await providerCollectionObject.find({ services: { $eq: service1 }}).toArray();
    response.send({message:"Here are the service providers",payload:providers});

}))




module.exports=userApp