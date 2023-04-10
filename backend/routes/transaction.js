const express = require("express");
const router = express.Router();
const Transaction = require("../models/Transaction");

router.get("/", function (req, res) {
  Transaction.find({}).then((transactions) => res.send(transactions));
});

router.delete("/:id", function (req, res) {
  let id = req.params.id;
  Transaction.findByIdAndDelete(id).then((transaction) =>
    res.send(transaction)
  );
});

router.get("/balance", function(req,res){
  Transaction.aggregate([
    { $group: { _id: "balance", total: { $sum: "$amount" } } },
  ]).then((balance)=>{
    res.send(balance[0]);
  })
  

})



router.post("/Transaction", function (req, res) {
  let amount = req.body.amount
  let vendor = req.body.vendor
  let category = req.body.category
  let transaction = new Transaction({amount, vendor, category})
  transaction.save().then((transactions) => res.send(transactions))
})

router.get('/Breakdown', function (req, res) {
  Transaction.aggregate([
    { $group: { _id: "$category", total: { $sum: "$amount" } } },
  ])
  .then((categories) => res.send(categories))
})

module.exports = router;
