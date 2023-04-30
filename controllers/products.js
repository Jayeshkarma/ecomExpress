const Product = require("../model/products");

const getAllProducts = async (req, res) => {
  const { company, name, featured, sort, select } = req.query;
  const queryObject = {};
  if (company) {
    queryObject.company = { $regex: company, $options: "i" };
  }

  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }

  if (featured) {
    queryObject.featured = featured;
  }
  let result = Product.find(queryObject);
  let total =result?.length
  if (sort) {
    let sortFix = sort?.split(",")?.join(" ");
    queryObject.sortFix;
    result = result?.sort(sortFix);
  }

  if (select) {
    let selectFix = select?.split(",")?.join(" ");
    queryObject.selectFix;
    result = result?.select(selectFix);
  }

  let page = Number(req?.query.page) || 1;
  let limit = Number(req?.query.limit) || 5;

  let offset = (page - 1) * limit;
  const Products = await result?.skip(offset);
  res.status(200).json({"page":page,"total":total,"limit":limit,  message: "all product list is here", data: Products });
};

const getAllTestingProducts = async (req, res) => {
  const Products = await Product.find({});
  res
    .status(200)
    .json({ message: "all test product list is here", data: Products });
};

module.exports = { getAllProducts, getAllTestingProducts };
