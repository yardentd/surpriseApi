
const SurpriseFrame  = require("./SurpriseFrame")

class SumName extends SurpriseFrame{

    constructor(){

        super();
        this.type = "name-sum"
    }
    getResult(name){
        let sum = 0;
        const str = name.toUpperCase();
        for( let i = 0 ;i < str.length ; i++){
          sum += str.charCodeAt(i) - 65;
        }
        return sum ;
     }

}

module.exports = SumName;
