
const SurpriseFrame  = require("./SurpriseFrame")

const  url = "https://v2.jokeapi.dev/joke/Any?type=single"
const type = "jokes-api"
const result = "joke"

class Jokes extends SurpriseFrame{

    constructor(){

        super(url,type,result);
    }
}

module.exports = Jokes;

