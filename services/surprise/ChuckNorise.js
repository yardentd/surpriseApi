const SurpriseFrame  = require("./SurpriseFrame")

const  url = "https://api.chucknorris.io/jokes/random"
const type = "chuck-norris-joke"
const result ="value"

class ChauckNorris extends SurpriseFrame{

    constructor(){

        super(url,type,result);
    }
}

module.exports = ChauckNorris;