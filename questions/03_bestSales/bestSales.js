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
  let finalObj = {}

  if(sales === undefined){
    return {}
  }
 
   sales.forEach((element) =>{

    if(!newObj[element.productId]){
        
       newObj[element.productId] = element.amount
    }
    else{
        newObj[element.productId] += element.amount
    }
    let largest = Math.max(newObj[element.productId])
    
    if( largest === newObj[element.productId]){
        finalObj ={
            id: element.productId,
            Total:largest
        }
    }
   })


   return finalObj


}

module.exports = { bestSales, sales };
