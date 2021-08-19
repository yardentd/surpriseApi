
const ChuckNorris = require('../services/surprise/ChuckNorise');
const express = require('express');
const https =  require("https");
const { validateParams } = require('../services/validation');
const KanyeWest = require('../services/surprise/KanyeWest');
const SumName = require('../services/surprise/SumName');
const Jokes = require('../services/surprise/Jokes');
const Stats  = require("../services/Stats");
const { stat } = require('fs');
const router = express.Router();



function getParamsFromRequest(requset){
  const params = {
    name: requset.query.name,
    birth_year: requset.query.birth_year
  }
  validateParams(params)
  return params;
}


function sendGetApiRequest(url, callback){
  https.get(url, (response)=>{
    response.on("data", callback);
  });
}


function sendResult(res,type, result, data){
  const stats = Stats.getInstance();
  stats.increaseStats(type);
  res.send({ "type": type,"result": JSON.parse(data)[result]})
}

const CALLBACK_MAPPING = [
  {
    //Chuck Norris Joke
    predicate:(params) => Number(params.birth_year) < 2000,
    callback:(res) => {
      const item = new ChuckNorris();
      sendGetApiRequest(item.url, (data) => sendResult(res, item.type, item.result, data))
      
    }
  },

  {
    //Kanye West Quote (kanye-quote)
    predicate:(params) => !"aAzZ".includes(params.name.charAt(0)) && Number(params.birth_year) > 2000,
    callback:(res,params) =>{
      const item = new KanyeWest();
      sendGetApiRequest(item.url, (data) =>  sendResult(res, item.type, item.result, data))
    } 
  },

  {
    //User Name’s Sum (name-sum)
    predicate:(params) => !"qQ".includes(params.name.charAt(0)),
    callback:(res,params) => {
      const item = new SumName();
      const stats = Stats.getInstance();
      stats.increaseStats(item.type);
      res.send({"type": item.type, "result": item.getResult(params.name)})
    }                             
  },

  {
    //joke -api
    predicate:(params) =>  Number(params.birth_year) > 1999 &&  Number(params.birth_year) < 2010,
    callback:(res,params) =>{
      const item = new Jokes();
      sendGetApiRequest(item.url, (data) =>  sendResult(res, item.type, item.result, data))
    }
    

  },
    //Add Api
    /**
     *   {
          predicate:(params) =>  If necessary, add conditions here,
          callback:(res, params) ={
             const item = new ApiClass();
             res.send({"type": item.type, "result": item.getResult()})
           }
        }
     * 
     */              
];

function getCallback(params){
  const callback = CALLBACK_MAPPING.filter((element) => element.predicate(params))

  if(callback.length === 0){
    throw " no api fits your needs ):"
  }
  const randomApi =  callback[Math.floor(Math.random()*callback.length)];
  return randomApi.callback;
}


router.get('/', (req, res) => {
  
      try{
        const params = getParamsFromRequest(req);
        const callback = getCallback(params);
        callback(res,params);
        
      }catch(error){
        const stats = Stats.getInstance();
        stats.increaseInvalidStats();
        res.status(400).send(error);
      
      }
  });

module.exports = router;
