import React from 'react';


export default function Order(props){
    const ourOrder = props.ourOrder
return(
<div class="orders">
 <h1>{`Name:${ourOrder.name}`}</h1>
 <h4>{`Special Instructions:  ${ourOrder.specialInstructions}`}</h4>
 <h4>{`Bacon?   ${ourOrder.bacon}`}</h4>
 <h4>{`BBQ SAUCE?:  ${ourOrder.bbqSauce}`}</h4>
 <h4>{`Onions:  ${ourOrder.onions}`}</h4>
 <h4>{`Red Sauce: ${ourOrder.originalRed}`}</h4>
 <h4>{`Pepperoni: ${ourOrder.pepperoni}`}</h4>
 <h4>{`Special Sauce:  ${ourOrder.specialSauce}`}</h4>

 
</div>
)
}