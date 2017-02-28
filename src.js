module.exports = class TestVariant {

  constructor(){
    this.testVariantsForParams = [];
    this.pages = {
      'A' : 'A hello world',
      'B' : 'B hello world',
      'C' : 'C hello world',
      'D' : 'D hello world',
      'E' : 'E hello world'
    }

  }

  setTestVariant(id, pageId){

    if(!this.testVariantsForParams[id]){
      this.testVariantsForParams[id] = [];
    }

    if(!this.pages[pageId]){
      return `please select the following pages: A,B,C,D,E`;
    }

    if(!this.testVariantsForParams[id][this.pages[pageId]]){
      this.testVariantsForParams[id].push(this.pages[pageId]);
    }

    return 'success';
  }

  listTestVariants(){


    return (this.testVariantsForParams.length) ? this.testVariantsForParams: `Not test variants set up`;
  }

  getTestVariant(id){

    if(!this.testVariantsForParams[id]){
      if(this.testVariantsForParams.length) {
        return `Please enter try value for utm_id: ${this.testVariantsForParams.map((_, i) => i)}`;
      } else {
        return `Please set page number to test Variant types A, B, C, D, E. For ex: set?id=1&page=A`;
      }
    }

    let randomNumber = Math.floor(Math.random() * this.testVariantsForParams[id].length)
    return this.testVariantsForParams[id][randomNumber];
  }
};
