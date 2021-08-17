const stock = {
  item: [
    { name: "tomato", quatity: 50 },
    { name: "apple", quatity: 45 },
    { name: "banana", quatity: 50 },
  ],
};

const fill = (item, quatity) => {
    let check = false
  for (data of stock.item) {
   
    if (data.name === item) {
        check= true
      data.quatity += quatity;
    } 
    
  }if(check== false){
      stock.item.push({item,quatity})
      console.log('This new item is added')
  }
}

const sell = (item, quatity) =>{
    stock.item.forEach(sellItem = (value,index) =>{
        if(value.name === item ){
            value.quatity =value.quatity- quatity
            console.log(value.name +" is selled "+ quatity +" qty")
        }
    })
}
const clear =(thisitem) => {
        stock.item.forEach(clearItem =(item,index)=>{
            if(item.name === thisitem){
                delete stock.item[index]
                console.log("Remove correctly")
            }
        })
    }

const check = (item) =>{
     for (data of stock.item){
         if(data.name === item){
             console.log(data.name+ ' = '+ data.quatity + ' qty')
         }
     }
}


fill("tomato", 2);
fill("milk",3)
sell("tomato",2)
check("banana")
clear("apple")


console.log('stock :>> ', stock);


