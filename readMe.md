Create a simple TestVariants for Pages

Split Testing for five different variations of `hello world!`

You can add pages A, B, C for `test_id` = 1. You can add pages C, D, E for `test_id` = 2

calling the page test_id = 1 multiple times will return C, A, B, B etc., simulating different test case scenarios.

 
five different variations of `hello world!`

```
{
  'A' : 'A hello world',
  'B' : 'B hello world',
  'C' : 'C hello world',
  'D' : 'D hello world',
  'E' : 'E hello world'
}
```

To start  
 
`npm install and npm start`
starts a server on localhost:3000

- To create a test page: `localhost:3000/test_id=1&page=A`
- get testVariant: `localhost:3000/test_id=1`
- get list of test variants created: `localhost:3000/list`

