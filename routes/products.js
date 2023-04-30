// import express
const express = require("express")
const { getAllProducts, getAllTestingProducts } = require("../controllers/products")

// define router function 
const router =express.Router()

// create routes

//home route
router.route('/')?.get(getAllProducts)
//testing route 
router.route('/testing')?.get(getAllTestingProducts)

// exporting routes
module.exports = router 