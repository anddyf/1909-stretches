const sales = [
  {
    amount: 8,
    productId: 3,
  },
  {
    amount: 8,
    productId: 3,
  },
  {
    amount: 8,
    productId: 4,
  },
  {
    amount: 17,
    productId: 5,
  },
  {
    amount: 10,
    productId: 4,
  },
];
/*
productWhichMadeMostMoney returns an object with an id for that product and a total which totals all the amounts for that product.
*/

//write the productWhichMadeMostMoney function

function bestSales(sales) {
  let newObj = {}
  let newArray = []
   sales.forEach((element)=>{
     
       newArray.push(element.amount)
   })

   let myMax = newArray.sort()
   sales.forEach(element =>{
    if(myMax[1] === element.amount){
      newObj[element.productId] = element.amount
    }
   })

   return newObj
}

module.exports = { bestSales, sales };
