const SurpriseFrame  = require("./SurpriseFrame")

const  url = "https://api.kanye.rest"
const type = "kanye-quote"
const result = "quote"

class KanyeWest extends SurpriseFrame{

    constructor(){

        super(url,type,result);
    }
}

module.exports = KanyeWest;
