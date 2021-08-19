
// const jsonStats = require("./stats.json");

// function increaseStats(type){
//   const callback = jsonStats.filter((element) => element.(params))

// }



// class Stats {

//   constructor() {

//     if (Stats._instance) {
//       throw new Error("Singleton classes can't be instantiated more than once.")
//     }
//     Stats._instance = this;

//     this._successful_requests = 0;
//     this._invalid_requests = 0;
//     this._stats = {
//       "kanye-quote": 0,
//       "chuck-norris-joke": 0,
//       "name-sum": 0,
//       "joke": 0 
//     };
//   }

//   increaseStats(surprise){
//     // Invalid surprise
//     if (this._stats[surprise] == undefined) {
//       return;
//     }
    
//     // valid surprise
//     this._stats[surprise]++;
//     return;
//   }

//   increaseSuccessfulRequests() {
//     this._successful_requests++;
//   }

//   increaseInvalidStats() {
//     this._invalid_requests++;
//   }

//   statstoJSON()
  
// }

// module.exports = Stats;



// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.json({users: [{name: 'Timmy'}]});
// });

// module.exports = router;
