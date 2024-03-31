const express=require('express')
const app=express()
const mongoose=require('mongoose')
const cors=require('cors')
const morgan = require('morgan')


require('dotenv').config()

const PORT=process.env.PORT || 5000
app.use(cors())
app.use(express.json())
app.get('/',(req,res)=>{
    res.json('Server is working successfully')
})
mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
  });

  app.use(morgan('dev'));

app.listen(PORT,(req,res)=>{
    console.log(`server listening on port ${PORT}`);
})