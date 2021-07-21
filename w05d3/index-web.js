const express = require('express');
const app = express();
app.set('view engine','ejs');

const dbFns = require('./db/queries');

app.get('/',(req,res)=>{
  dbFns.getAllObjectives((rows)=>{
    const templateVars = {rows: rows};
    res.render('home',templateVars);
  });
});

const PORT = process.env.PORT || 7878;
app.listen(PORT,()=>{
  console.log(`Server is listening on port=${PORT}`);
});