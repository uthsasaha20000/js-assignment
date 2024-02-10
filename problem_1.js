function calculateMoney(ticketSale)
{
    if(ticketSale>=0)
    {

   let total=ticketSale*120;
   let remaining=total-(500+(8*50));
   console.log(remaining)
   return remaining;
    }
    else{
       return "invalid input";
    }

   

}
a=calculateMoney(-10);
console.log(a);
