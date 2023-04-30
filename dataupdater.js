require("dotenv").config()
const connectDB = require('./DB/connect')
const Product =require("./model/products")
const ProductData =require("./productdata.json")
const start= async ()=>{
try {
    await connectDB(process.env.MONGO_URL)
    await Product.create(ProductData)
    console.log("success")
} catch (error) {
    console.log(error)
}

}
start()