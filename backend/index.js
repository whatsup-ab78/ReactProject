const express=require('express');
const mongoose=require('mongoose');
const cors=require("cors");
const formRoutes=require('./routes/formRoutes');

const app=express();
const port=3001;

app.use(express.json());
mongoose.connect('mongodb://localhost:27017/mydbproject',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

.then(()=>{
    console.log('connected to MongoDB');
})
.catch((error)=>{
    console.error('Error connecting to MongoDB:',error);
});

app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`);
});

app.get('/', (req,res)=>{
    res.send('connected to mongodb!');
});

app.use('/api',formRoutes);
