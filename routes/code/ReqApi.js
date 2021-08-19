 function getData(url, callbackData){
    var https = require('https')  
    https.get(url, function (response) {  
      response.setEncoding('utf8')  
      response.on('data', callbackData())  
      response.on('error', console.error)  
    })
  }

 function resultToJson(type, result, data){
    const text = {
        "type": type,
        "result": JSON.parse(data)
         }
    return text;
}

module.exports = { getData, resultToJson }