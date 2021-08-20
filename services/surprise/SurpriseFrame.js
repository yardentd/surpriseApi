
/**
 *  This class is the father of all kind of surprise types.
    It contains all the basic methods a surprise instance will require.
 */

class SurpriseFrame {

    constructor(url , type, result) {
      this.url = url
      this.type = type
      this.result = result
    }
      getUrl(){
        return this.url;
      }
      getType(){
        return this.type;
      }
  
     getResult(){
        return this.result
     }
}

module.exports = SurpriseFrame;
