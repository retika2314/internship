let cart=[{name:"brush",price:2000},
    {name:"paste",price:40},
    {name:"comb",price:50},
    {name:"pencil",price:10}];
function sumOfPrices(cart)
{
    let total=cart.reduce(function(sum,cur){
        return sum+cur.price;
    },0);
    console.log("Total",total);
    function discount(cart)
    {
        if (total > 2000){
            console.log("Total after discount",total-(total*0.10));
        }
    }
    discount(cart);
}
sumOfPrices(cart);
