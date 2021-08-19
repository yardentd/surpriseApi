
const isParamExists = (string) => typeof string != "undefined";
const isParamNumber = (string) => !isNaN(string);
current_year = new Date().getFullYear();


function validateParams(params) {
  if ( !isParamExists(params.birth_year)) {

      throw Error("parm are not exsist");
  }

  if(!isParamNumber(params.birth_year) || 
     parseInt(params.birth_year) < 1900 ||
     parseInt(params.birth_year) > current_year
     ){
      throw Error("illegal birth year");
  }

  return true;
}

module.exports = { validateParams };
    