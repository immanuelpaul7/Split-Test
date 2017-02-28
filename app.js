const express = require('express')
const TestVariant = require('./src.js');
const app = express();

const ABTest = new TestVariant();
const responseText = `Hello Word!`;


app.get('/', function (req, res) {
  res.send(responseText);
})

app.get('/list', function(req, res){
    let data = ABTest.listTestVariants();

    if(Array.isArray(data)){
      data = data.filter(function(n){ return n != undefined });
    }

    res.send(data);
})

app.get('/test_id=:id&page=:page', function (req, res){

    let id = req.params.id;
    let page = req.params.page;
    let response = ABTest.setTestVariant(id, page);
    res.send(response);

});

app.get('/test_id=:id', function (req, res) {
    let id = req.params.id;
    let testVariantType = ABTest.getTestVariant(id);
    res.send(testVariantType);
})


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
