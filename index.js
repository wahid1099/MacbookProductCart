//this function will recieve inputid and price of the id and it will set it to the price of that id
function updateData(InputId,price){
    const extramoneyid=document.getElementById(InputId);
    // const memoryprice=parseInt(extramoneyid.innerText);
    extramoneyid.innerText=price;
    updateTotal();

}
function inputId(InputId){
  const priceid=document.getElementById(InputId);
  const price=parseInt(priceid.innerText);
 return price;
}
function updateTotal(){
  const baseprice=inputId('base-price');
  const memoryprice=inputId('extra-memory-cost');
  const ssdprice=inputId('extra-storage-cost');
  const deliverycharge=inputId('delivery-charge');
  const totalprice=baseprice+memoryprice+ssdprice+deliverycharge;
 document.getElementById('total-cost').innerText=totalprice;
 document.getElementById('total-price').innerText=totalprice;
}

//ram event listener

document.getElementById('baseram').addEventListener('click',function(){
  updateData('extra-memory-cost',0);
  
});
document.getElementById('extraram').addEventListener('click',function(){
  updateData('extra-memory-cost',180);
    
});

//ssd event listener


document.getElementById('basessd').addEventListener('click',function(){
  updateData('extra-storage-cost',0);
  console.log('extra-storage-cost');
});
document.getElementById('extra-ssd').addEventListener('click',function(){
  updateData('extra-storage-cost',100);
  
});

document.getElementById('double-extra-ssd').addEventListener('click',function(){
  updateData('extra-storage-cost',180);
 
});


// delivery charge event listener
document.getElementById('free-delivery-option').addEventListener('click',function(){
  updateData('delivery-charge',0);
  
});

document.getElementById('fast-delivery-charge').addEventListener('click',function(){
  updateData('delivery-charge',20);
 
});




function promocode(){
        const btn=document.getElementById('promo-code-button');
       var promocodeText = document.getElementById('promo-code-input').value;
       var totalPrice=document.getElementById('total-price').innerText;
       if (promocodeText=='stevekaku') {
      let updateprice=totalPrice*.2;
      var promoprice=parseFloat(totalPrice-updateprice);
      console.log(promoprice);
     // totalPrice.innerText=promoprice;
      promocodeText.value='';
      btn.setAttribute("style", "visibility:hidden;");
     
}

}