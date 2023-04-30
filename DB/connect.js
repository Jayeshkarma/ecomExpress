const  mongoose = require("mongoose")

const connnectDb =(url)=>
{
    console.log(`connected to mongo server `)
    return mongoose.connect(url,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
}

module.exports = connnectDb