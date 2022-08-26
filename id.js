const members = require("./members");

let getId = ()=>{

    let ids = members.map(member => member.id);
    ids.sort((a,b) => b-a);
    return ids[0]+1;

}

module.exports = getId;



