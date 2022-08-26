const express = require("express");
const route = express.Router();
const members = require("../../members");





// get all members
route.get("/api/members",(req,res)=>{
    res.json(members);
    console.log("member object sent", req.query);
});

// get specified member based ont he params passed in
route.get("/api/members/:id", (req,res)=>{
    console.log(req.params);
    if(members.filter((member)=> member.id == req.params.id) != ""){
        res.json( members.filter((id)=> id.id == req.params.id));
    }
    else{
        res.send({message: "bad requessite ID.",requisteID:req.params.id});
    }
});

module.exports = route;