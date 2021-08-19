
const { getData, resultToJson } = require('./code/ReqApi');
const ChuckNorris = require('./surprise/ChuckNorise');

// import { Jokes } from './surprise/Jokes';
// import { KanyeWest } from './surprise/KanyeWest';

const express = require('express');
const https =  require("https");
const { validateParams } = require('./code/validation');
const KanyeWest = require('./surprise/KanyeWest');
const SumName = require('./surprise/SumName');
const Jokes = require('./surprise/Jokes');
const router = express.Router();

function getParamsFromRequest(requset){
  const params = {
    name: requset.query.name,
    birth_year: requset.query.birth_year
  }

  if(validateParams(params)){
    return params;
  };
}


function sendGetApiRequest(url, callback){
  https.get(url, (response)=>{
    response.on("data", callback);
  });
}


function creatResult(type, result, data){
  const text = {
    "type": type,
    "result": JSON.parse(data)[result]
  }

  return text;

  
  //todo inc stats
  /**
   * get stats -> stats.type
   *  */ 
}


const CALLBACK_MAPPING = [
  {
    //Chuck Norris Joke (chuck-norris-joke)
    predicate:(params) => Number(params.birth_year) < 2000,
    callback:(res) => {
      const item = new ChuckNorris();
      sendGetApiRequest(item.url, (data) =>  res.send({ "type":item.type,"result": JSON.parse(data)[item.result]}))
    }
    
  },

  {
    //Kanye West Quote (kanye-quote)
    predicate:(params) => !"aAzZ".includes(params.name.charAt(0)) && Number(params.birth_year) > 2000,
    callback:(res,params) =>{
      const item = new KanyeWest();
      sendGetApiRequest(item.url, (data) =>  res.send({ "type":item.type,"result": JSON.parse(data)[item.result]}))
    } 
    
  },

  {
    //User Name’s Sum (name-sum)
    predicate:(params) => !"qQ".includes(params.name.charAt(0)),
    callback:(res,params) => {
      const item = new SumName();
      res.send({"type": item.type, "result": item.getResult(params.name)})
    }
                                
  },

  {
    //joke -api
    predicate:(params) =>  Number(params.birth_year) > 2009 &&  Number(params.birth_year) < 2010,
    callback:(res,params) =>{
      const item = new Jokes();
      sendGetApiRequest(item.url, (data) =>  res.send({ "type":item.type,"result": JSON.parse(data)[item.result]}))

    }
    

  },

    //Add Api
    /**
     *
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

// test how many predicate (api's) passed the conditions 
for (i = 0 ; i < callback.length ; i++){
  console.log(callback[i]);
}

  if(callback.length === 0){
    throw Error(" empty - non of the api's got back")
  }
  const randomApi =  callback[Math.floor(Math.random()*callback.length)];
  return randomApi.callback;
}


router.get('/', (req, res) => {
      const params = getParamsFromRequest(req);
      console.log("params:"+ params.name +" : " + params.birth_year );//test
      const callback = getCallback(params);
      callback(res,params);

  
  });

module.exports = router;
