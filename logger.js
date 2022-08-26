logger = (req,res,next) =>{
    console.log(req.url,"\n");
    date = new Date();
    month = ["jan","feb","mar","apr","may","june","july","aug","sept","oct","nov","dec"];
    days = ["sun","mon","tue","wed","thur","fri","sat"];

    console.log("",date,"\n" ,`time stamp: ${days[date.getDay()]} ${month[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}`);
    next();
}

module.exports = logger;