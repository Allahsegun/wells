const express = require("express");
const route = express.Router();
const members = require("../../members");
const getId = require("../../id");

// initializing the body json parser and the urelencoded middleware:
route.use(express.json());
route.use(express.urlencoded({extended: false}));
// get all members
route.get("/",(req,res)=>{
    res.json(members);
});

// get specified member based ont he params passed in
route.get("/:id", (req,res)=>{
    console.log(req.url);
    const search = new URLSearchParams(req.url);
    const found = members.some(member=>member.id === parseInt(req.params.id))
    if(found){
        const data = members.filter((id)=> id.id == req.params.id)
        console.log(data)
        res.json(data );
    }
    else{
        res.send({message: "bad requessite ID.",requisteId:req.params.id});
    }
});

// add to the members
route.post("/", (req, res)=>{
    const newMember = {
        id:getId(),
        name:req.body.name,
        email:req.body.email,
        status:"active"
    }
    if(!newMember.name || !newMember.email){
        res.status(400).json({errorMsg:"please include a name and email!"});
    } else{
        members.push(newMember);
        res.json(newMember);
    }
});  

route.put("/:id", (req,res)=>{
  // member =  members.filter((member)=> member.id == req.params.id);
    if(members.some((member)=> member.id == req.params.id)){
        console.log(members.some((member)=> member.id == req.params.id))
        let updatedMem = ""
        members.forEach(member=>{
            if(member.id == req.params.id){
                member.name =  req.body.name?req.body.name: member.name;
                member.email =  req.body.email?req.body.email: member.email;
                updatedMem = member
                console.log(member);
                //res.json(member);
            }
        });
        res.json(updatedMem);
    }


    else{
        res.send({message: "update erroe bad requessite ID.",requisteID:req.params.id});
    }
});

/*
route.post("/getdata",(req,res)=>{
    console.log(req.body);
    prop = req.body.getProp;
    trgProp =  req.body[prop];
    console.log(prop,"=",trgProp,"\n\n");
    // res.send(trgProp);
    res.send(trgProp);
    console.log(req.headers);
});
*/

module.exports = route;