const express = require("express");
require("dotenv").config();
const app = express();
const {generateMockData:mockDataGenerator} = require("./Backend/mockDataGenerator")



app.get('/api/search',async(req,res)=>{
    const {symbol,period}= req.query;
    const mockData = await mockDataGenerator("IBM","5min");
    // console.log("api response==",mockData);
    res.json(mockData);
});

const port = process.env.PORT || 3001;
app.listen(port,()=>{
   console.log(`Server is listening on  ${port}`)
});