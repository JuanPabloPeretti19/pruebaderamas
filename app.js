const express = require('express');
const app = express();

app.listen(8000,()=> console.log("servidor corriendo"))
app.get('/',(req,res)=>{
   res.send("Hola Mundoo, que te esta ocurriendo?")
})