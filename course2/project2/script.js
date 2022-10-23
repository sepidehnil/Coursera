function billingFunction(){
  var shippingName=document.getElementById('shippingName').value
  var shippingZip=document.getElementById('shippingZip').value
  if(document.getElementById('same').checked){
     document.getElementById('billingName').value=shippingName
     document.getElementById('billingZip').value=shippingZip
  }
   else{
     
     document.getElementById('billingName').value="";
     document.getElementById('billingZip').value="";
     
   }
}
