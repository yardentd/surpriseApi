
class Stats {

  constructor() {

    if (Stats._instance) {
      throw new Error("Singleton classes can't be instantiated more than once.")
    }
    Stats._instance = this;

    this._successful_requests = 0;
    this._invalid_requests = 0;
    this._stats = {
        "kanye-quote": 0,
        "chuck-norris-joke": 0,
        "name-sum": 0,
        "jokes-api": 0 
    };
  }
  static getInstance(){
    if (!Stats._instance) {
        Stats._instance = new Stats();
      }
      return Stats._instance;
  }

  increaseStats(surprise){
    // Invalid surprise
    if (this._stats[surprise] == undefined) {
      return;
    }
    
    // valid surprise
    this._stats[surprise]++;
    this._successful_requests++;
    return;
  }

  increaseInvalidStats() {
    this._invalid_requests++;
  }
  

  
}

module.exports = { getInstance: Stats.getInstance }
