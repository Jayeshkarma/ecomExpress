// Connecting with host 


// imports 
require("dotenv").config()
const express = require("express")
const product_router = require("./routes/products")
const connnectDb = require("./DB/connect")

const app = express()

// defined port 
const PORT =process.env.POST||4000

// create a path which is index

app.get('/',(req,res)=>{
    res.send("Hi we are live now")
})

//created routes
app.use('/api/products', product_router)


// checking the Port or start server
const start=async()=>{
    try {
      
        // connecting to db 
        await connnectDb(process.env.MONGO_URL)
        // PORT listener called
        app.listen(PORT,()=>{
            console.log(`we are live on port ${PORT}`)
        })
    } catch (error) {
       console.log(error) 
    }
}

start()


