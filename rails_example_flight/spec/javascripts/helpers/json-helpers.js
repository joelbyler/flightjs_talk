function BuildTestExampleJson(options){
  var defaults = {
                    name: '',
                    email: '',
                    agree: false
                  };
  return JSON.stringify(_.defaults(options, defaults), null, 2);
}
